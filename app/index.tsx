import { Link, Stack } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const polls = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
];

export default function Index() {
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
      }}/>
      <FlatList
        data={polls}
        style={{
          backgroundColor: 'thistle',
        }}
        contentContainerStyle={s.container}
        renderItem={({ item }) => (
          <TouchableOpacity style={s.item}>
            <Link href={`/polls/${item.id}`} style={s.title}>Example poll {item.id}</Link>
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
