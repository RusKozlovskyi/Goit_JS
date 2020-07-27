const findlongestWord = function (string) {
  const words = string.split(" ");
  let longestWord = words[0];

  let len = words.length;
  for (let i = 1; i < len; i += 1) {
    if (longestWord.length < words[1].length) {
      longestWord = words[1];
    }
  }
  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));

// console.log(findLongestWord("Google do a roll")); // 'Google'

// console.log(findLongestWord("May the force be with you")); // 'force'
