import { StyleSheet } from "react-native";
import { createBorder } from "./borderUtils";

const globalStyles = StyleSheet.create({
  listItem: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    ...createBorder(1, "tomato"),
  },
  container: {
    padding: 10,
    gap: 4,
    // backgroundColor: 'lime',
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

export default globalStyles;
