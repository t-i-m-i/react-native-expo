import { Link, Stack } from "expo-router";
import { useEffect, useState } from "react";
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { supabase } from "../lib/supabase";
import { QueryData, Session } from "@supabase/supabase-js";
import { Tables } from "../types/database.types";

// +++ when selecting selected columns:
const pollsQuery = supabase.from("polls").select("id,question,options");
type PollsData = QueryData<typeof pollsQuery>;

// *** when selecting all columns:
// const pollsQuery = supabase.from('polls').select('*');
// type PollsDataAll = Tables<'polls'>;

export default function Index() {
  // +++ when selecting selected columns:
  const [polls, setPolls] = useState<PollsData>([]);

  // *** when selecting all columns:
  // const [polls, setPolls] = useState<PollsDataAll[]>([]);

  // [info]
  //
  // => red error screen on simulator - interactive - opens file in editor
  // console.error('hello world');
  //
  // => opens debugger in js inpector, shows current scope (state, props, refs, context, etc.)
  // see: https://share.merce.com/files/c3fee586-bcd3-40ad-8fb4-d720b75c995e.png
  // debugger

  // test comment to trigger commit

  useEffect(() => {
    const fetchPolls = async () => {
      let { data, error } = await pollsQuery;
      if (error) {
        Alert.alert("Error fetching data");
        return;
      }
      if (data && data.length > 0) {
        setPolls(data);
      }
    };
    fetchPolls();
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          title: "Polls",
          headerStyle: {
            backgroundColor: "thistle",
          },
          headerLeft: () => (
            <Link
              href={"/profile"}
              style={{
                color: "#007AFF",
                fontSize: 16,
              }}
            >
              My account
            </Link>
          ),
          headerRight: () => (
            <Link
              href={"/polls/create"}
              style={{
                color: "#007AFF",
                fontSize: 16,
              }}
            >
              Create new
            </Link>
          ),
        }}
      />
      <FlatList
        data={polls}
        style={{
          backgroundColor: "thistle",
        }}
        contentContainerStyle={s.container}
        renderItem={({ item: poll }) => (
          <TouchableOpacity style={s.item}>
            <Link href={`/polls/${poll.id}`} style={s.title}>
              {poll.question}
            </Link>
          </TouchableOpacity>
        )}
      />

      {/* testing unexisting poll <Link href={`/polls/3`} style={s.title}>3</Link> */}
    </>
  );
}

const s = StyleSheet.create({
  container: {
    padding: 10,
    gap: 4,
  },
  item: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontWeight: "bold",
  },
});
