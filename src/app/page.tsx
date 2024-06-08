import * as contentful from "contentful";
import styles from "./page.module.css";

const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID = "5bpk7lniggsc" as string,
  accessToken: process.env.CONTENFUL_ACCESS_TOKEN = "BO3rN8mkhPK0S8WhkbaSYyc5uIiATDrV8wUR-o8IpV8" as string
});

interface HomeProps {
  title: string;
  description: string;
  url: string;
}

async function getData(): Promise<HomeProps> {
  const result = await client.getEntry(process.env.ENTRY_ID = "5qDnYeVggu7v7WoDgvgfUV" as string);
  return {
    title: result.fields.title || "",
    description: result.fields.description || "",
    url: result.fields.url || ""
  };
}

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

