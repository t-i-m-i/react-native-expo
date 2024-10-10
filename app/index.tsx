import { Link, Stack } from "expo-router";
import { useEffect, useState } from "react";
import { Alert, FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { supabase } from "./lib/supabase";

interface Poll {
  id: number;
  question: string;
  options: string[];
}

export default function Index() {

  const [polls, setPolls] = useState<Poll[]>([]);

  useEffect(() => {
    const fetchPolls = async () => {
      let { data: polls, error } = await supabase.from('polls').select('id,question,options');
      if (error) {
        Alert.alert('Error fetching data');
      }
      // console.log(polls);
      setPolls(polls || []);
    }
    fetchPolls();
  }, []);

  return (
    <>
      <Stack.Screen options={{
        title: 'Polls',
        headerStyle: {
          backgroundColor: 'thistle',
        },
        headerRight: () => (
          <Link href={'/polls/create'} style={{
            color: "#007AFF",
            fontSize: 16,
          }}>Create new</Link>
        ),
      }} />
      <FlatList
        data={polls}
        style={{
          backgroundColor: 'thistle',
        }}
        contentContainerStyle={s.container}
        renderItem={({ item: poll }) => (
          <TouchableOpacity style={s.item}>
            <Link href={`/polls/${poll.id}`} style={s.title}>{poll.question}</Link>
          </TouchableOpacity>
        )}
      />
    </>
  );
}

const s = StyleSheet.create({
  container: {
    padding: 10,
    gap: 4,
  },
  item: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
  },
  title: {
    fontWeight: 'bold',
  }
});
