//import * as functions from "firebase-functions"
import * as admin from "firebase-admin"
import * as nodemailer from "nodemailer"
import { onDocumentCreated } from "firebase-functions/v2/firestore"


admin.initializeApp()

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_EMAIL,
    pass: process.env.GMAIL_PASS
  }
})

export const sendContactEmail = onDocumentCreated(
  "messages/{docId}",
  async (event) => {
    const data = event.data?.data()
    console.log(data)
    if (!data) return

    const mailOptions = {
      from: "Midland Website <operations@midlandafrica.com>",
      to: "dakingzman@gmail.com",
      //to: "chidoziek2@gmail.com",
      subject: `New Contact Form: ${data.subject}`,
      html: `
        <h3>New Message from Website</h3>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong><br/>${data.message}</p>
      `
    }

    await transporter.sendMail(mailOptions)
    // email logic here
  }
)

/**
 * Import function triggers from their respective submodules:
 *
 * import {onCall} from "firebase-functions/v2/https";
 * import {onDocumentWritten} from "firebase-functions/v2/firestore";
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

import {setGlobalOptions} from "firebase-functions";

// Start writing functions
// https://firebase.google.com/docs/functions/typescript

// For cost control, you can set the maximum number of containers that can be
// running at the same time. This helps mitigate the impact of unexpected
// traffic spikes by instead downgrading performance. This limit is a
// per-function limit. You can override the limit for each function using the
// `maxInstances` option in the function's options, e.g.
// `onRequest({ maxInstances: 5 }, (req, res) => { ... })`.
// NOTE: setGlobalOptions does not apply to functions using the v1 API. V1
// functions should each use functions.runWith({ maxInstances: 10 }) instead.
// In the v1 API, each function can only serve one request per container, so
// this will be the maximum concurrent request count.
setGlobalOptions({ maxInstances: 10 });

// export const helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

