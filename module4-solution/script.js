(function (){
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];

  for (var i=0; i<names.length; i++) {

    let name = names[i].toLowerCase();
    let firstLetter = name.charAt(0)

    if (firstLetter==="j" ) {
       byeSpeaker.speak(name)
    } else {
      helloSpeaker.speak(name)
    }
  }
})();
