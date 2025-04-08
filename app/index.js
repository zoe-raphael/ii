import { View, Text, StyleSheet, Button } from "react-native";
// import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
// import { MyContext } from "./_layout";

export default function HomePage() {
  // const { letters, setLetters } = useContext(MyContext);
  function getRandomLetter() {
    const letters = "ABCDEFGHIJKLM";
    let getLetter = "";
    getLetter = letters[Math.floor(Math.random() * letters.length)];
    console.log(getLetter);
  }
  getRandomLetter();

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
