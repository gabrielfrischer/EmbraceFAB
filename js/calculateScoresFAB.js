var inputFAB1 = document.getElementById("inputFAB1").value;
var inputFAB2 = document.getElementById("inputFAB2").value;
var inputFAB3 = document.getElementById("inputFAB3").value;
var inputFAB4 = document.getElementById("inputFAB4").value;
var inputFAB5 = document.getElementById("inputFAB5").value;
var inputFAB6 = document.getElementById("inputFAB6").value;
var inputFAB7 = document.getElementById("inputFAB7").value;
var inputFAB8 = document.getElementById("inputFAB8").value;
var inputFAB9 = document.getElementById("inputFAB9").value;
var inputFAB10 = document.getElementById("inputFAB10").value;

/*

function alterText(){
document.getElementById('hello').innerHTML = empDesignation();
}

function calculateScore(){   
    var outputSFT = inputFAB1 + inputFAB2 + inputFAB3 + inputFAB4 + inputFAB5 + inputFAB6;
   alert(outputSFT)
  }

  */

 function calculateScore() {
               
   var first_number = parseInt(document.getElementById("inputFAB1").value);
   var second_number = parseInt(document.getElementById("inputFAB2").value);
      var third_number = parseInt(document.getElementById("inputFAB3").value);
   var fourth_number = parseInt(document.getElementById("inputFAB4").value);
      var fifth_number = parseInt(document.getElementById("inputFAB5").value);
   var sixth_number = parseInt(document.getElementById("inputFAB6").value);
   var seventh_number = parseInt(document.getElementById("inputFAB7").value);
   var eighth_number = parseInt(document.getElementById("inputFAB8").value);
      var ninth_number = parseInt(document.getElementById("inputFAB9").value);
   var tenth_number = parseInt(document.getElementById("inputFAB10").value);
   var result = first_number + second_number + third_number + fourth_number + fifth_number + sixth_number + seventh_number + eighth_number + ninth_number;
     
    document.getElementById("FABReport").innerHTML = "Score: " + result;
   //document.getElementById("txtresult").value = result;
            }