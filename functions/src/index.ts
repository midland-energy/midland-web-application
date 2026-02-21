//import * as functions from "firebase-functions"
import * as admin from "firebase-admin"
import * as nodemailer from "nodemailer"
import { onDocumentCreated } from "firebase-functions/v2/firestore"
import { defineSecret } from "firebase-functions/params"


admin.initializeApp()

const GMAIL_EMAIL = defineSecret("gmail_email")
const GMAIL_PASS = defineSecret("gmail_pass")

export const sendContactEmail = onDocumentCreated(
  {
    document: "messages/{docId}",
    secrets: [GMAIL_EMAIL, GMAIL_PASS],
  },
  async (event) => {
    const data = event.data?.data()
    if (!data) return

    // ✅ Secrets are available here
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: GMAIL_EMAIL.value(),
        pass: GMAIL_PASS.value(),
      },
    })

    const mailOptions = {
      from: "Midland Website <operations@midlandafrica.com>",
      to: "operations@midlandafrica.com",
      subject: `New Contact Form: ${data.package}`,
      html: `
        <h3>New Message from Website</h3>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong><br/>${data.message}</p>
      `,
    }

    await transporter.sendMail(mailOptions)
  }
)

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


