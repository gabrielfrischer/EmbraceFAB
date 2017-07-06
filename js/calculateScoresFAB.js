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
   var result = first_number + second_number + third_number + fourth_number + fifth_number + sixth_number + seventh_number + eighth_number + ninth_number + tenth_number;
     
    document.getElementById("FABReport").innerHTML = "Score: " + result;
   //document.getElementById("txtresult").value = result;
            }

  var data = [
   ['Step 1', first_number],
   ['Step 2', second_number],
   ['Step 3', third_number]
   ['Step 4', fourth_number],
   ['Step 5', fifth_number],
   ['Step 6', sixth_number]
   ['Step 7', seventh_number],
   ['Step 8', eighth_number],
   ['Step 9', ninth_number]
   ['Step 10', tenth_number]
];
 
 
function download_csv() {
    var csv = 'Name,Title\n';
    data.forEach(function(row) {
            csv += row.join(',');
            csv += "\n";
    });
 
    console.log(csv);
    var hiddenElement = document.createElement('a');
    hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
    hiddenElement.target = '_blank';
    hiddenElement.download = 'people.csv';
    hiddenElement.click();
}