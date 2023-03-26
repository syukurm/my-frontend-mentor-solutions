/// <reference types="astro/client" />

interface ImportMetaEnv {
  readonly PUBLIC_ADVICE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
