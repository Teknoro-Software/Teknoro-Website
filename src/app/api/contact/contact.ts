import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, mobile, message } = req.body;

    // ✅ Replace this with your Google Apps Script Web App URL
    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbypXa_Gmlts1bpHc6GhDZss3Uiwn1FYTVZ93dK5Ev0Ce8tOUrONENf-EW3IPoVr2itd/exec";

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",  // send JSON
      },
      body: JSON.stringify({ name, email, mobile, message }),
    });

    if (!response.ok) {
      throw new Error(`Google Script error: ${response.statusText}`);
    }

    const data = await response.json();
    return res.status(200).json(data);

  } catch (error: any) {
    console.error("API Error:", error.message);
    return res.status(500).json({ error: "Failed to submit form" });
  }
}
