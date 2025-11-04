/* eslint-disable @typescript-eslint/no-explicit-any */
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { name, email, mobile, message } = req.body; 

    const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby1u06dR8CavQn0RJ73-kwnllJhKzPNpJHK2bvEX4CB3SOxaeVD-vo7ky4XiVGnffnC/exec";

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",  
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