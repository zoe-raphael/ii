import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useState } from "react";

export default function Etape2() {
  const [word, setInputWord] = useState("");
  const [showImage, setShowImage] = useState(false);
  const [showLoose, setShowLoose] = useState(false);
  // - jeu du noyé (équivalent du pendu) avec un mot
  // - si réussi > passage à l'étape d'après
  // - si perdu > image d'un noyé en ascii art et proposition de recommencer

  function getRandomWord() {
    const dico = [
      "chat",
      "souris",
      "cactus",
      "serpent",
      "plume",
      "casque",
      "fromage",
      "caduque",
      "filet",
      "assiette",
    ];
    let getWord = "";
    getWord = dico[Math.floor(Math.random() * dico.length)];
    console.log(getWord);
    // comment faire pour garder le mot stocké tant que le joueur cherche à le deviner ?

    if (word === getWord) {
      console.log("youpi");
      setShowImage(true);
    } else {
      setShowLoose(true);
      console.log("bouh");
    }
  }

  return (
    <View style={styles.container}>
      <Text>Le jeu du noyé</Text>
      <TextInput
        style={{
          height: 44,
          width: 200,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
        }}
        placeholder="alors, tu as deviné ?"
        onChangeText={(text) => {
          setInputWord(text);
        }}
        value={word}
      />
      <Button
        title="OK"
        onPress={() => {
          getRandomWord();
        }}
      />
      {showImage && (
        <Image
          source={require("../../assets/cat.png")}
          style={styles.cover}
          resizeMode="contain"
        />
      )}
      {showLoose && (
        <Image
          source={require("../../assets/drowned.png")}
          style={styles.cover}
          resizeMode="contain"
        />
      )}

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
  cover: { height: 300, width: 200, marginTop: 10 },
});
