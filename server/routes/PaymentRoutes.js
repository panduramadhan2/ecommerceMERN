import express, { response } from "express";
import midtransClient from "midtrans-client";
import { authenticate } from "../middleware/authenticate.js";

const router = express.Router();

router.post(
  "/process-transaction",
  authenticate(["user"]),
  async (req, res) => {
    try {
      const snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: process.env.SERVER_KEY,
        clientKey: process.env.CLIENT_KEY,
      });
      const parameter = {
        transaction_details: {
          order_id: req.body.orderId,
          gross_amount: req.body.amount,
        },
        customer_details: {
          first_name: req.body.name,
          email: req.body.email,
          phone: req.body.phone,
        },
        callbacks: {
          finish: `${process.env.DOMAIN}/confirmation`,
        },
        enabled_payment: [
          "mandiri_clicpay",
          "bca-_clicpay",
          "bni_va",
          "bca_va",
          "permata_va",
          "other_va",
        ],
      };

      snap
        .createTransaction(parameter)
        .then((transaction) => {
          const dataPayment = {
            midTransResponse: JSON.stringify(transaction),
            //   mindTransResponse: JSON.stringify(transaction),
          };
          const transactionToken = transaction.token;

          res.status(200).json({ token: transactionToken, dataPayment });
        })
        .catch((error) => {
          console.log(error);

          res.status(400).json({ error: error.message });
        });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
);

// router.get(
//   "status/:orderId",
//   authenticate(["admin", "user"]),
//   async (req, res) => {
//     try {
//       const snap = new midtransClient.Snap({
//         isProduction: false,
//         serverKey: process.env.SERVER_KEY,
//         clientKey: process.env.CLIENT_KEY,
//       });

//       snap.transaction
//         .status(req.params.orderId)
//         .then((response) => {
//           res.status(200).json(response);
//         })
//         .catch((error) => {
//           res.status(404).json({ error: "Order tidak ditemukan" });
//         });
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   }
// );

router.get(
  "/status/:orderId",
  authenticate(["admin", "user"]),
  async (req, res) => {
    try {
      const snap = new midtransClient.Snap({
        isProduction: false,
        serverKey: process.env.SERVER_KEY,
        clientKey: process.env.CLIENT_KEY,
      });

      //   const orderId = req.params.orderId;

      // Format or validate orderId if needed

      const response = await snap.transaction
        .status(req.params.orderId)
        .then((response) => response); // Return response object

      return res.status(200).json(response); // Return response to client
    } catch (error) {
      if (error.statusCode === 404) {
        // Example: Specific error handling
        return res.status(404).json({ error: "Order not found" });
      } else {
        // Handle other error codes or general errors
        return res.status(500).json({ error: error.message });
      }
    }
  }
);

export default router;
