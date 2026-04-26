/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_TG_BOT_TOKEN?: string;
  readonly VITE_TG_CHAT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
