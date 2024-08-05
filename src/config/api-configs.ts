import { env } from "next-runtime-env";

export const API_URL = env("NEXT_PUBLIC_API_URL");

export const clientBaseURL = env("NEXT_PUBLIC_CLIENT_URL");

export const appId = env("NEXT_PUBLIC_APP_ID");
