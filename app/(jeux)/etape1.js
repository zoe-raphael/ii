import { View, Text, StyleSheet, TextInput, Button, Image } from "react-native";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { Link } from "expo-router";
// import RNExitApp from "react-native-exit-app";
import { Redirect } from "expo-router";

export default function Etape1() {
  const [letter, setInputLetter] = useState("");
  const [showImage, setShowImage] = useState(false);
  // tirer une lettre au hasard entre A et M
  // pour cela faut-il faire nécessairement une fonction ? Ou possible de stocker dans une variable let ?
  function getRandomLetter() {
    const alphabet = "ABCDEFGHIJKLM";
    let getLetter = "";
    getLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    console.log(getLetter);
    // comment faire pour garder la lettre stockée tant que le joueur cherche à la deviner ?
    if (letter === getLetter) {
      console.log("youpi");
      setShowImage(true);
    } else {
      console.log("bouh");
    }
  }

  // stocker cette lettre
  // récupérer / lire la lettre écrite par le user
  // si c'est raté > essaye encore, au bout de la 10eme fois si tjs raté > l'app se ferme
  // si réussi > affichage d'un bouquet de fleurs kitch et glitch et passage à l'étape 2

  return (
    <View style={styles.container}>
      <Text>Parmi ces lettres : A, B, C, D, E, F, G, H, I, J, K, L, M</Text>
      <Text>Devine celle à laquelle je pense</Text>
      <Text>Tu peux tenter ta chance 10 fois</Text>
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
          setInputLetter(text);
        }}
        value={letter}
      />
      <Button
        title="OK"
        onPress={() => {
          getRandomLetter();
        }}
      />
      {
        showImage && (
          <Image
            source={require("../../assets/rose.png")}
            style={styles.cover}
            resizeMode="contain"
          />
        )

        // après avoir vu l'image, on est redirigé automatiquement après 1 à 2 secondes à l'étape 2
        // && setTimeout(() => <Redirect href="/etape2" />, 2000)
      }
      <Link href="/etape2" asChild>
        <Button
          title="Etape 2"
          onPress={() => {
            console.log("passage à l'étape 2");
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
  cover: { height: 300, width: 200, marginTop: 10 },
});
