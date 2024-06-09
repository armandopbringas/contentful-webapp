import { getData } from "@/lib/services/dataFetcher";
import styles from "./page.module.css";


export default async function Home() {
  const { title, description, url } = await getData();

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>{title}</h1>
        <p>{description}</p>
        <a href={url}>url</a>
      </div>
    </main>
  );
}

