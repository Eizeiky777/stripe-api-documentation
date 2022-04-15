// server.js
//
// Use this sample code to handle webhook events in your integration.
//
// 1) Paste this code into a new file (server.js)
//
// 2) Install dependencies
//   npm install stripe
//   npm install express
//
// 3) Run the server on http://localhost:4242
//   node server.js

const stripe = require("stripe");
const express = require("express");
const app = express();

// This is your Stripe CLI webhook secret for testing your endpoint locally.
const endpointSecret = process.env.ENDPOINT_SECRET;

app.post(
  "/stripe_webhooks",
  express.raw({ type: "application/json" }),
  (request, response) => {
    const sig = request.headers["stripe-signature"];
    console.log("🚀 ~ file: server.js ~ line 27 ~ sig", sig);

    let event;

    try {
      event = stripe.webhooks.constructEvent(request.body, sig, endpointSecret);
    } catch (err) {
      response.status(400).send(`Webhook Error: ${err.message}`);
      return;
    }

    // Handle the event
    switch (event.type) {
      case "payment_intent.succeeded":
        const paymentIntentSuccess = event.data.object;
        console.log(
          "🚀 ~ file: server.js ~ line 41 ~ paymentIntentSuccess",
          paymentIntentSuccess
        );
        break;
      case "payment_intent.created":
        const paymentIntentCreated = event.data.object;
        console.log(
          "🚀 ~ file: server.js ~ line 41 ~ paymentIntentCreated",
          paymentIntentCreated
        );
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    // Return a 200 response to acknowledge receipt of the event
    response.send("done");
  }
);

app.listen(4242, () => console.log("Running on port 4242"));
