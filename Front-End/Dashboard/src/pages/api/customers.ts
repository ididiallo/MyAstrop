import type { APIRoute } from "astro";
import { createPool } from "@vercel/postgres";

const pool = createPool({
  connectionString: import.meta.env.POSTGRES_URL,
});

type CustomerField = {
  id: string;
  name: string;
};

export const GET: APIRoute = async () => {
  const data =
    await pool.sql<CustomerField>`SELECT id, name FROM customers ORDER BY name ASC`;
  const customers = data.rows;

  return new Response(
    JSON.stringify({
      customers,
    })
  );
};
