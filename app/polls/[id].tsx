import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, ScrollView, StyleSheet } from "react-native";

import gs from "../styles/globalStyles";

const poll = {
  question: 'Which team is the best?',
  options: ['FC Bayern Munchen', 'Real Madrid', 'KS Górnik Zabrze']
};

export default function PollDetails() {
  const { id } = useLocalSearchParams<{ id: string }>();
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
        <Text style={s.title}>{poll.question}</Text>
        {poll.options.map((option) => (
          <View style={gs.item} key={option}>
            <Text style={gs.title}>{option}</Text>
          </View>
        ))}
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