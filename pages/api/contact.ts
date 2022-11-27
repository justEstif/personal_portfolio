import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

const handler = (req: NextApiRequest, res: NextApiResponse) => {
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
      res.status(400).json(err);
    } else {
      res.status(200).json(info);
    }
  });
};

export default handler;
