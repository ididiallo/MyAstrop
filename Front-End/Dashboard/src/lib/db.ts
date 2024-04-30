import { createPool } from "@vercel/postgres";

export const pool = createPool({
  connectionString: import.meta.env.PUBLIC_POSTGRES_URL,
});
