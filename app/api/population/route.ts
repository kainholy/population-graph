import { NextResponse } from "next/server";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const prefCode = searchParams.get('prefCode');
    
    if (!prefCode) {
      return NextResponse.json({ error: "prefCode is required" }, { status: 400 });
    }

    const res = await fetch(
      `${process.env.YUMEMI_API_URL}/api/v1/population/composition/perYear?prefCode=${prefCode}`,
      {
        headers: {
          "X-API-KEY": process.env.YUMEMI_API_KEY!,
        },
      }
    );
    
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch population data" }, { status: res.status });
    }
    
    const data = await res.json();
    return NextResponse.json(data);
  } catch {
    return NextResponse.json({ error: "Network error" }, { status: 500 });
  }
}