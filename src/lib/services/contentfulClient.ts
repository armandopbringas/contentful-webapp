import * as contentful from "contentful";

export const client = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID = "5bpk7lniggsc" as string,
  accessToken: process.env.CONTENFUL_ACCESS_TOKEN = "BO3rN8mkhPK0S8WhkbaSYyc5uIiATDrV8wUR-o8IpV8" as string
});
