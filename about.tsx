import { View, Text, StyleSheet } from "react-native";

export default function about() {
  return (
    <View style={style.container}>
      <Text style={style.text}>about Us</Text>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#737777",
  },

  Text: {
    color: "#f7f3f3",
    fontsize: 24,
    fontweight: "bold",
  },
});
