import styles from "./page.module.css";
import { Prefecture } from "@/types/api/api-prefecture";
import { getPrefectures } from "@/lib/api/prefectures";

export default async function Home() {
  const prefectures: Prefecture[] = await getPrefectures();

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
