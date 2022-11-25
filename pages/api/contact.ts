import { TFormState } from "lib/types";
import type { NextResponse, NextRequest } from "next/server";
import nodemailer from "nodemailer";

type Override<T1, T2> = Omit<T1, keyof T2> & T2;
type TContactReq = Override<NextRequest, { body: TFormState }>;

const handler = (req: TContactReq, res: NextResponse) => {
  const { subject, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.EMAIL_USER,
    subject: subject,
    text: `${email}\n${message}`,
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      console.warn(err);
      res.status(400).json(err);
    } else {
      console.log("Email sent, " + info);
      res.status(200).json(info);
    }
  });
};

export default handler;
