import { Link } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>fray ibarra</Text>
      <Link href="/about" style={styles.button}>
        go to about Us
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#338f8f",
  },

  text: {
    color: "#fff",
    fontsize: 24,
    fontweight: "bold",
  },
});
