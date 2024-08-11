import { NextApiRequest, NextApiResponse } from "next";
import MessageModel from "@/src/models/MessageModel";
import connectDB from "@/src/lib/database";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await connectDB();

  const { fname, lname, phone, email, subject, message } =
    req.body;

  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  if (!fname || !lname || !phone || !email || !subject || !message) {
    res.status(400).json({ error: "Missing required fields" });
    return;
  }

  try {
    const msg = new MessageModel({
      fname,
      lname,
      phone,
      email,
      subject,
      message,
      timestamp: new Date(),
    });

    await msg.save();
    console.log(
      "Message saved:",
      fname,
      lname,
      phone,
      email,
      subject,
      message
    );
    res.status(200).json({ done: true });
  } catch (error) {
    console.error("Error saving message:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
