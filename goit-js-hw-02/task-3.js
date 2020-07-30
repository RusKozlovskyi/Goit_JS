const findlongestWord = function (string) {
  const words = string.split(" ");
  let longestWord = words[0];

  let len = words.length;
  for (let i = 1; i < len; i += 1) {
    if (longestWord.length < words[i].length) {
      longestWord = words[i];
    }
  }
  return longestWord;
};

console.log(findlongestWord("The quick brown fox jumped over the lazy dog"));

console.log(findlongestWord("Google do a roll"));

console.log(findlongestWord("May the force be with you"));
