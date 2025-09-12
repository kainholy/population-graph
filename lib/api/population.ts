import { PopulationCompositionPerYearResponse } from "@/types/api/api-population";

export async function getPopulation(prefCode: number): Promise<PopulationCompositionPerYearResponse> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  const res = await fetch(`${baseUrl}/api/population?prefCode=${prefCode}`, { 
    cache: "no-store" 
  });
  if (!res.ok) throw new Error("Failed to fetch population data");
  const data = await res.json();
  return data;
}