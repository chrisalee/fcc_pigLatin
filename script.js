// Pig Latin is a way of altering English Words. The rules are as follows:
// - If a word begins with a consonant, take the first consonant or consonant cluster, move it to the end of the word, and add ay to it.
// - If a word begins with a vowel, just add way at the end.
// Translate the provided string to Pig Latin. Input strings are guaranteed to be English words in all lowercase.

function translatePigLatin(str) {
  let pigLatin = '';
  let regex = /[aeiou]/gi;
  if(str[0].match(regex)) {
    pigLatin = str + "way";
  } else if(str.match(regex) === null) {
    pigLatin = str + "ay";
  } else {
    let vowelCount = str.indexOf(str.match(regex)[0]);
    pigLatin = str.substr(vowelCount) + str.substr(0, vowelCount) + "ay";
  }

  return pigLatin;
}

translatePigLatin("eight");
translatePigLatin("california");
translatePigLatin("glove");
