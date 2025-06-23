import express from "express";
import cors from "cors";
import { randomUUID } from "crypto";
import dotenv from "dotenv";
import {
  StandardCheckoutClient,
  Env,
  StandardCheckoutPayRequest,
} from "pg-sdk-node";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

const clientId = process.env.CLIENT_ID;
const clientSecret = process.env.CLIENT_SECRET;
const clientVersion = 1;
const env = Env.PRODUCTION; // Change to Env.PRODUCTION when going live

const client = StandardCheckoutClient.getInstance(
  clientId,
  clientSecret,
  clientVersion,
  env
);

app.post("/create-order", async (req, res) => {
  try {
    const { amount } = req.body;

    if (!amount) {
      return res.status(400).send("Amount is required");
    }

    const merchantOrderId = randomUUID();

    const redirectUrl = `https://phonepae-backen.onrender.com/check-status?merchantOrderId=${merchantOrderId}`;

    const request = StandardCheckoutPayRequest.builder()
      .merchantOrderId(merchantOrderId)
      .amount(amount)
      .redirectUrl(redirectUrl)
      .build();

    const response = await client.pay(request);

    return res.json({
      checkoutPageUrl: response.redirectUrl,
    });
  } catch (error) {
    console.error("error creating order" + error);
    res.status(500).send("Error creating order");
  }
});

app.get("/check-status", async (req, res) => {
  try {
    const { merchantOrderId } = req.query;

    if (!merchantOrderId) {
      return res.status(400).send("MerchantOrderId is required");
    }

    const response = await client.getOrderStatus(merchantOrderId);

    const status = response.state;

    if (status === "COMPLETED") {
      return res.redirect("https://gigadigitalserviceshub.com/");
    } else {
      return res.redirect("https://gigadigitalserviceshub.com/");
    }
  } catch (error) {
    console.error("error creating order" + error);
    res.status(500).send("Error getting status");
  }
});

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
