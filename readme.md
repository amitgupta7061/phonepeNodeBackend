<h3 align="center">
  <img src = "https://i.giphy.com/l41JU9pUyosHzWyuQ.webp" width="200px" alt="gif" />

PhonePe Node Backend</h3>

<div align="center" >
This project demonstrates how to build a <b>PhonePe Node Backend</b> using <b>Node.js</b> for integrating the PhonePe payment gateway. The backend server handles payment initiation and callback responses, acting as an intermediary between clients and the PhonePe API.
</div>

## Introduction

A **PhonePe Node Backend** is a server-side application that facilitates integration with the PhonePe payment gateway. It processes client payment requests, communicates with the PhonePe API, and handles callback responses to confirm transaction status. This implementation focuses on simplicity and modularity for ease of use.

This article walks through building a PhonePe Node backend, with the following features:

- Initiating payment requests via the PhonePe API.
- Handling callback responses for transaction verification.
- Supporting secure API communication using merchant credentials.
- Modular code structure for scalability.

---

## Project Architecture

The backend server will:

1. Accept HTTP requests from clients to initiate payments.
2. Generate secure API requests to the PhonePe gateway.
3. Handle callback responses from PhonePe to verify transactions.
4. Return appropriate responses to clients.

## Prerequisites

To follow along, you’ll need:

- **Node.js**: Version 14 or higher installed.
- **npm** or **yarn** for package management.
- PhonePe merchant credentials (Merchant ID, Key, Salt).
- A basic understanding of HTTP, REST APIs, and Node.js.
- MongoDB (optional, for transaction storage).

---

## Implementation

Let’s build the PhonePe Node backend step by step.

### Step 1: Setting Up the Project

Create a new Node.js project:

```bash
# mkdir phonepe-node-backend
# cd phonepe-node-backend
# npm init -y
```

### Step 2: Setting Up the Environmental variables

Create a new Node.js project:

```bash
CLIENT_ID=TESt
CLIENT_SECRET=Test

```

### Step 3: Setting Up the Sdk

```bash

const env = Env.SANDBOX; // Change to Env.PRODUCTION when going live

```

## Conclusion

This tutorial demonstrated how to build a PhonePe Node backend using Node.js and Express. The server handles payment initiation and callback responses, providing a foundation for integrating the PhonePe payment gateway. You can extend this project by adding features like database storage, advanced security, or additional endpoints.

Feel free to explore the code and adapt it to your needs. Happy coding!

---
