

const  translateText = () => {
  let oldword = document.getElementById("wordInput").value;
  if (oldword.match(/ /)) {
    oldword = oldword.toLowerCase().trim();
    let wordArr = oldword.split(' ');
    let result = '';
     for(let i = 0; i < wordArr.length; i++) {
      if (i > 0) {
        result += '';
      }
      result += translate(wordArr[i]);
    }
    document.getElementById("showTranslation").innerHTML = result;
    return result;
  }
  return translate(oldword);
}
 translate = (oldword) => {
   vowels = ["a", "e", "i", "o", "u"]
  let newWord = "";
  if (vowels.indexOf(oldword[0]) > -1){
    newWord = oldword + "yay";
    document.getElementById("showTranslation").innerHTML = newWord;
    return newWord;
  }

  {
    let firstLetter = oldword.match(/[aeiou]/);
    let vowel = oldword.indexOf(firstLetter[0]);
    newWord = oldword.substring(vowel) + oldword.substring(0, vowel) + "ay";
    document.getElementById("showTranslation").innerHTML = newWord;
    return newWord;
  }
}







