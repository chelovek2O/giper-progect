import { createClient } from "@refinedev/supabase";

const SUPABASE_URL = "https://ewezhgaeyjsgdullftdd.supabase.co"

const SUPABASE_KEY =  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV3ZXpoZ2FleWpzZ2R1bGxmdGRkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTIzMTIyMjUsImV4cCI6MjAyNzg4ODIyNX0.cKcHptT6WW7u9N5m-58E2WmQV1fU8mVbIL4-Hc11PnY";

export const supabaseClient = createClient(SUPABASE_URL, SUPABASE_KEY, {
  db: {
    schema: "public", // this can be overridden by passing `meta.schema` to data hooks.
  },
  auth: {
    persistSession: true,
  },
});