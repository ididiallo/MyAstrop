import { createPool } from "@vercel/postgres";
import * as dotenv from "dotenv";

// Load environment variables from .env file
dotenv.config();

export const client = createPool({
  connectionString: process.env.POSTGRES_URL,
});

if (!process.env.POSTGRES_URL) {
  throw new Error("MISSING CONNECTION STRING");
}


//CLOSE IT FOR LATER USE

// import { createPool } from "@vercel/postgres";

// export const client = createPool({
//   connectionString: import.meta.env.POSTGRES_URL,
// });