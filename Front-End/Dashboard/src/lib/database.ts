import { createPool } from "@vercel/postgres";

export const client = createPool({
  connectionString: import.meta.env.POSTGRES_URL,
});