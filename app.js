var numbers = [5, 7, 9, 8, 10, 3, 2];

document.getElementById("showw").innerHTML = numbers

// expected result stored in an array
// Acendind  Order

var acendingOutput ;   
function acending(){
var check = [2,3,5,7,8,9,10]       

var result = ["","","","","","","",]

for(var i = 0; i<numbers.length; i++){ 
      
   for(var j =0; j<check.length; j++){
    
    if(numbers[i]==check[j]){
      result.splice(j,1,numbers[i])
    }  
   }
}
// document.write(result);
acendingOutput = (result)
document.getElementById("showa").innerHTML = acendingOutput
}




var dcendingOutput ;   
function decending(){
let check = [10,9,8,7,5,3,2]       

let result = ["","","","","","","",]

for(let i = 0; i<numbers.length; i++){ 
      
   for(let j =0; j<check.length; j++){
    
    if(numbers[i]==check[j]){
      result.splice(j,1,numbers[i])
    }  
   }
}
dcendingOutput = (result)
document.getElementById("showaa").innerHTML = dcendingOutput
}