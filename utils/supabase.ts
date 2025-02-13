import "react-native-url-polyfill/auto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { Database } from "./supabase-types";

const { EXPO_PUBLIC_SUPABASE_PROJECT_ID, EXPO_PUBLIC_SUPABASE_ANON_KEY } =
  process.env as { [k: string]: string };

const SUPABASE_URL = `https://${EXPO_PUBLIC_SUPABASE_PROJECT_ID}.supabase.co`;

export const supabase = createClient<Database>(
  SUPABASE_URL,
  EXPO_PUBLIC_SUPABASE_ANON_KEY,
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
    },
  }
);
