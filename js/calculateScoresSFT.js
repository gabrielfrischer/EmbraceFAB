var inputSFT1 = document.getElementById("inputSFT1").value;
var inputSFT2 = document.getElementById("inputSFT2").value;
var inputSFT3 = document.getElementById("inputSFT3").value;
var inputSFT4 = document.getElementById("inputSFT4").value;
var inputSFT5 = document.getElementById("inputSFT5").value;
var inputSFT6 = document.getElementById("inputSFT6").value;

/*

function alterText(){
document.getElementById('hello').innerHTML = empDesignation();
}

function calculateScore(){   
    var outputSFT = inputSFT1 + inputSFT2 + inputSFT3 + inputSFT4 + inputSFT5 + inputSFT6;
   alert(outputSFT)
  }

  */

 function calculateScore() {
               
   var first_number = parseInt(document.getElementById("inputSFT1").value);
   var second_number = parseInt(document.getElementById("inputSFT2").value);
      var third_number = parseInt(document.getElementById("inputSFT3").value);
   var fourth_number = parseInt(document.getElementById("inputSFT4").value);
      var fifth_number = parseInt(document.getElementById("inputSFT5").value);
   var sixth_number = parseInt(document.getElementById("inputSFT6").value);
   var result = first_number + second_number + third_number + fourth_number + fifth_number + sixth_number;
     
    document.getElementById("sftReport").innerHTML = "Score: " + result;
   //document.getElementById("txtresult").value = result;
            }