import { Prefecture } from "@/types/api/api-prefecture";

export async function getPrefectures(): Promise<Prefecture[]> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/prefectures`, { cache: "no-store" });
  if (!res.ok) throw new Error("Failed to fetch prefectures");
  const data = await res.json();
  return data.result;
}