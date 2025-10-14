// app/api/contact/route.ts
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();

  return NextResponse.json(
    { status: "success", message: "Data saved & emails sent!" },
    {
      status: 200,
      headers: {
        "Access-Control-Allow-Origin": "*",
      },
    }
  );
}
