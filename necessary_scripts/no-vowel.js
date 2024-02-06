function noVowel(str){
  // find the count of vowels
  const count = str?.match(/[AEIOU]/gi);
  let numberOfVowels = 0;
  count == null ? (numberOfVowels = 0) : (numberOfVowels = count.length);

  if (numberOfVowels > 0) {
    return "false";
  } else {
    return "true";
  }
};
