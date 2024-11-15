import { useAuth } from "@/providers/AuthProvider";
import { Redirect, Slot } from "expo-router";

export default function ProtectedLayout() {
  
  const { session } = useAuth();

  if (session) {
    return <Redirect href="/profile" />
  }
  
  return <Slot />;
}