var numbers = [5, 7, 9, 8, 10, 3, 2];

// expected result stored in an array

var check = [2,3,5,7,8,9,10]       

var result = ["","","","","","","",]

for(var i = 0; i<numbers.length; i++){ 
      
   for(var j =0; j<check.length; j++){
    
    if(numbers[i]==check[j]){
      result.splice(j,1,numbers[i])
    }  
   }
}
document.write(result);
