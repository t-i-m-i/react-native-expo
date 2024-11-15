import { supabase } from "@/lib/supabase";
import { useAuth } from "@/providers/AuthProvider";
import { Redirect } from "expo-router";
import { View, Text, Button } from "react-native";

export default function Profile() {
  
  const { session } = useAuth();

  return (
    <View>
      {session && session.user && 
      <Text>
        User id: {session.user.id}
        User email: {session.user.email}
        {/* {JSON.stringify(session.user, null, 2)} */}
      </Text>}

      <Button title="Sing out" onPress={() => supabase.auth.signOut()} />
    </View>
  );
}
