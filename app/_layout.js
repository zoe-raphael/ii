import { Stack } from "expo-router";
import { createContext, useState } from "react";

export const MyContext = createContext();

export default function RootLayout() {
  const [letters, setLetters] = useState("");

  return (
    <MyContext.Provider value={{ letters, setLetters }}>
      <Stack />
    </MyContext.Provider>
  );
}
