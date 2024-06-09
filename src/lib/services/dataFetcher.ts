import { client } from "./contentfulClient";
import { HomeProps } from "../types/types";

export async function getData(): Promise<HomeProps> {
  const result = await client.getEntry(process.env.ENTRY_ID = "5qDnYeVggu7v7WoDgvgfUV" as string);
  return {
    title: result.fields.title || "",
    description: result.fields.description || "",
    url: result.fields.url || ""
  };
}
