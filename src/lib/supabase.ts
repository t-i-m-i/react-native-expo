import AsyncStorage from "@react-native-async-storage/async-storage";
import { createClient } from "@supabase/supabase-js";
import { Database } from "../types/database.types";
import { Platform } from "react-native";

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY ?? "";

export const supabase = createClient<Database>(supabaseUrl, supabaseAnonKey, {
  auth: {
    // storage: AsyncStorage, ==> errors when trying to access app in webbrowser

    // solution:
    // https://github.com/supabase/supabase-js/issues/870
    ...(Platform.OS !== "web" ? { storage: AsyncStorage } : {}),

    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});
