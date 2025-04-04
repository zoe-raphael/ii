import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";

export default function Etape3() {
  return (
    <View style={styles.container}>
      <Text>Etape 3</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
