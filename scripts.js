'use strict';

var pigLatin = function(string){
  var cutIndex, endString, remString;
  var vowels = ["a","e","i","o","u"];

  if(string.indexOf("qu",0)!== -1){
    cutIndex = string.indexOf("qu")+2;
    endString = string.substring(0,cutIndex);
    remString = string.substring(cutIndex);
    return remString + endString + "ay";
  }else{
    
    for(var i = 0; i<string.length; i+=1){
      for(var j = 0; j < vowels.length; j+=1){
        if(string[i] === vowels[j]){
          cutIndex = string.indexOf(vowels[j]);
              endString = string.substring(0,cutIndex);
              remString = string.substring(cutIndex);
              return remString + endString + "ay";
          }
      }
    }
  }

  if((string[0] === "a" || "e") || (string[0] === "i" || "o") || (string[0] === "u")){
    return string +"ay";
  }
};

$(document).ready(function(){
  $('form#english').submit(function(event){
    var sourceWord = $('input#word').val().toLowerCase();
    var sourceWords = sourceWord.split(" ");
    var translated = [];
    
    for(var i = 0; i < sourceWords.length; i+=1){
      var transWord = pigLatin(sourceWords[i]);
      translated.push(transWord);
    }

    translated = translated.join(" ");

    $('#original').text(sourceWord);
    $('#piglatin').text(translated);
    $('#translation').show();

    event.preventDefault();
  });
});