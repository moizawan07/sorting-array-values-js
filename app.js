var numbers = [55, 27, 9, 1, 99, 3, 65, 47, 5];

document.getElementById(
  "showw"
).innerHTML = ` SORTING THIS VALUES 👉 ${numbers}`;

function acending() {
  //  Bubble Sorting

  for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = 0; j < numbers.length - 1; j++) {
      if (numbers[j] > numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
  }
  document.getElementById("showa").innerText = numbers;
}
function decending() {
  for (var i = 0; i < numbers.length - 1; i++) {
    for (var j = 0; j < numbers.length - 1; j++) {
      if (numbers[j] < numbers[j + 1]) {
        let temp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = temp;
      }
    }
    console.log(numbers);
  }

  document.getElementById("showd").innerText = numbers;
}

// expected result stored in an array
// Acendind  Order

// let acendingOutput ;
// function acending(){
// let check = [2,3,5,7,8,9,10]

// let result = ["","","","","","","",]

// for(let i = 0; i<numbers.length; i++){

//    for(let j =0; j<check.length; j++){

//     if(numbers[i]==check[j]){
//       result.splice(j,1,numbers[i])
//     }
//    }
// }
// acendingOutput = (result)
// document.getElementById("showa").innerHTML = acendingOutput
// }

// let dcendingOutput ;
// function decending(){
// let check = [10,9,8,7,5,3,2]

// let result = ["","","","","","","",]

// for(let i = 0; i<numbers.length; i++){

//    for(let j =0; j<check.length; j++){

//     if(numbers[i]==check[j]){
//       result.splice(j,1,numbers[i])
//     }
//    }
// }
// dcendingOutput = (result)
// document.getElementById("showaa").innerHTML = dcendingOutput
// }
