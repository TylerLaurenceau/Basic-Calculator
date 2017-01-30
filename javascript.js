var numberOne = document.getElementById("boxOne");
var numberTwo = document.getElementById("boxTwo");
var calcButton = document.getElementById("calculateButton");
var javaanswer = document.getElementById("answer");
var newtitle = document.getElementById("oldtitle");


function add () {
  var result= (Number(numberOne.value) + Number(numberTwo.value));
  console.log(result);
  javaanswer.innerHTML = result;
  }

calcButton.addEventListener('click', add);
