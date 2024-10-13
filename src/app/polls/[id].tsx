import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, StyleSheet, Alert } from "react-native";

import gs from "../../styles/globalStyles";
import { supabase } from "../../lib/supabase";
import { useEffect, useState } from "react";
import { QueryData } from "@supabase/supabase-js";

export default function PollDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
  const query = supabase
    .from('polls')
    .select('question,options')
    .eq('id', id);

  type PollData = QueryData<typeof query>;

  const [poll, setPoll] = useState<PollData>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchPoll = async () => {
      let { data, error } = await query;
      if (error) {
        Alert.alert('Error fetching data');
        setLoading(false);
        return;
      }
      
      if (data && data.length > 0) // protect against unexisting poll, eg. /polls/1500
      {
        setPoll(data);
      } 
      setLoading(false);
    }
    fetchPoll();
  }, []);
  
  return (
    <>
      <Stack.Screen options={{
        title: `Poll ${id}`,
        headerStyle: {
          backgroundColor: 'thistle',
        }
      }} />
      <ScrollView style={{
        backgroundColor: 'thistle'
      }}
        contentContainerStyle={gs.container}
      >
        {poll.length > 0 ? (
          <>
            <Text style={s.title}>{poll[0].question}</Text>
            {poll[0].options.map((option) => (
              <View style={gs.item} key={option}>
                <Text style={gs.title}>{option}</Text>
              </View>
            ))}
          </>
        ) : (
          loading ? (
            <Text>Loading poll...</Text>
          ) : (
            <Text>No poll data available.</Text>
            // eg. unexisted poll <Link href={`/polls/333333`} style={s.title}>333333</Link>
          )
        )}
      </ScrollView>
    </>
  )
}

const s = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
  }
});