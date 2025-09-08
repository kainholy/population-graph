import styles from "./page.module.css";
import { Prefecture } from "@/types/api/api-prefecture";
import { getPrefectures } from "@/lib/api/prefectures";
import { getPopulation } from "@/lib/api/population";
import { PopulationResponse } from "@/types/api/api-population";

export default async function Home() {
  const prefectures: Prefecture[] = await getPrefectures();
  const populationData: PopulationResponse = await getPopulation(1); // 北海道の人口データを取得

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
