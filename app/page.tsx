import styles from "./page.module.css";
import { Prefecture } from "@/types/api/api-prefecture";
import { getPrefectures } from "@/lib/api/prefectures";
import { getPopulation } from "@/lib/api/population";
import { PopulationCompositionPerYearResponse } from "@/types/api/api-population";

export default async function Home() {
  const prefectures: Prefecture[] = await getPrefectures();
  const populationData: PopulationCompositionPerYearResponse = await getPopulation(1);

  console.log("Prefectures:", prefectures);
  console.log("Population Data for Hokkaido:", populationData);

  return (
    <main className={styles.main}>
      <h1>Welcome to My Next.js App!</h1>
      <ul>
        {prefectures.map((pref) => (
          <li key={pref.prefCode}>{pref.prefName}</li>
        ))}
      </ul>
    </main>
  );
}
