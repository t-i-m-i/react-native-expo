import { Stack } from "expo-router";
import { FlatList, StyleSheet, Text, View } from "react-native";

const polls = [1, 2, 3];

export default function Index() {
  return (
    <>
      <Stack.Screen options={{
        title: 'Polls',
      }}/>
      <FlatList
        data={polls}
        style={{
          backgroundColor: 'thistle',
        }}
        contentContainerStyle={s.container}
        renderItem={() => (
          <View style={s.item}>
            <Text style={s.title}>Example poll</Text>
          </View>
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
