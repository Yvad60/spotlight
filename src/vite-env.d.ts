/// <reference types="vite/client"
import "vite/client";
interface ImportMetaEnv {
  readonly VITEAPI_BASE_URL: string;
  readonly VITE_API_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}

declare module "*.png";
declare module "*.svg";
declare module "*.jpeg";
declare module "*.jpg";
