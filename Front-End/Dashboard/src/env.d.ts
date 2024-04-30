/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly POSTGRES_URL: string;
  // more env variables...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
