


var letters = {
  64: "z",
  65: "a",  
  66: "b",
  67: "c",
  68: "d",
  69: "e",
  70: "f",
  71: "g",
  72: "h",
  73: "i",
  74: "j",
  75: "k",
  76: "l",
  77: "m",
  78: "n",
  79: "o",
  80: "p",
  81: "q",
  82: "r",
  83: "s",
  84: "t",
  85: "u",
  86: "v",
  87:  "w",
  88: "x",
  89: "y",
  90: "z",
  91: "a"

}






$("input[type='radio']").click(function(){  //Looking for a click
  $("input:checked").prop('checked', false ); //the checked will turn into false
  $(this).prop('checked', true); //Check for new code
});

$("#inputArea").keydown(function(e) {

if ($("input:checked").val() == "echo"){
  $("#textArea").append(letters[e.keyCode])

}

if ($("input:checked").val() == "Caesarcipher"){
  $("#textArea").append(letters[e.keyCode-1])

}
if ($("translateInputText").val() == "Caesarcipher"){
  $("#textArea").append(letters[e.keyCode+1])

}
if ($("input:checked").val() == "Heiroglyphics"){
  $("#textArea").append("<img src = 'images/heiroglyphics/" + (letters[e.keyCode]) + ".gif'>");
}

});



$("#translationInputText").keydown(function(e) {
  if (e.keyCode == 13) {
    console.log("enter")
    var message = $("#translationInputText").val();
    var messageArray = message.split("")

    for (var i = 0; i < messageArray.length; i++) {
      // access the letter in the array
      var translatedNumber = messageArray[i].charCodeAt(0)-32+1;
      $("#translationArea").append(letters[translatedNumber]);

    }


  }

});
