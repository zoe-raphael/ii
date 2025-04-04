function getRandomLetter() {
  const alphabet = "ABCDEFGHIJKLM";
  let letter = "";
  letter = alphabet[Math.floor(Math.random() * alphabet.length)];
  return letter;
}
console.log(getRandomLetter());
