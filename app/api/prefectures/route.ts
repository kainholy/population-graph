import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch(
      `${process.env.YUMEMI_API_URL}/api/v1/prefectures`,
      {
        headers: {
          "X-API-KEY": process.env.YUMEMI_API_KEY!,
        },
      }
    );
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch prefectures" }, { status: res.status });
    }
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}
