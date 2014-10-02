var pigLatin = function(string){
  var fragment = "";
  var stringArray;
  var ingstray;
  var cutIndex;
  var endString, remString;

  if(string.indexOf("qu",0)!== -1){
    cutIndex = string.indexOf("qu")+2;
    endString = string.substring(0,cutIndex);
    remString = string.substring(cutIndex);
    return remString + endString + "ay";
  }

	if((string[0] === "a" || "e") || (string[0] === "i" || "o") || (string[0] === "u")){
		return string +"ay";
	}
};