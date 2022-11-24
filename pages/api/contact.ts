import type { NextResponse, NextRequest } from "next/server";

const handler = (req: NextRequest, res: NextResponse) => {
  res.status(200).json({ name: "John Doe" });
};

export default handler;
