function importText(textFile) {
    "use strict";
    var rawFile = new XMLHttpRequest();
    var allText = "";
    rawFile.open("Get", textFile, false);
    rawFile.onreadystatechange = function()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
            }
        }
    }
    rawFile.send(null);
    return allText;
}




function removeNotAllowedCharacters(inputString) {
    var result = '';
    const allowedCharacters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ ";
    for (var i = 0; i < inputString.length; i++) {
      var currentChar = inputString.charAt(i);
      if (allowedCharacters.includes(currentChar)) {
        if(space === true)
            result += ' ';
        result += currentChar;
        space = false
      }else{
        space = true
      }
    }
    return result;
  }

  text_file = importText('input.txt')

 

console.log(removeNotAllowedCharacters(text_file))

let create_text = document.createElement("p")
create_text.innerHTML = removeNotAllowedCharacters(text_file)

document.getElementById("text").appendChild(create_text);



