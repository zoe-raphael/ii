import { View, Text, StyleSheet, Button } from "react-native";
import { Link } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text>Inutile Insdispensable</Text>
      <Text>Welcome in this poetics and tricky little games</Text>
      <Link href="/etape1" asChild>
        <Button
          title="Jouer"
          onPress={() => {
            console.log("pressed !");
          }}
        />
      </Link>
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
