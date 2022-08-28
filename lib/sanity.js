import sanityClient from "@sanity/client";

export const client = sanityClient({
  projectId: process.env.SANITY_PROJECT_ID,
  dataset: "production",
  apiVersion: "v1",
  token: process.env.UBER_CLIENT,
  useCdn: false,
  
});

