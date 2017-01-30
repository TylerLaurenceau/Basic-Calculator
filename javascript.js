var numberOne = document.getElementById("boxOne");
var numberTwo = document.getElementById("boxTwo");
var calcButton = document.getElementById("calculateButton");

function add () {
  var answer= (Number(numberOne.value) + Number(numberTwo.value));
  console.log(answer);
  }

calcButton.addEventListener('click', add);
