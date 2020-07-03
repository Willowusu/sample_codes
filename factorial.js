#this function uses tail recursion to optimize finding the factorial of a number

#lets define our function which will take two arguments
function factorial(n,result){
  if(n==0){
    return result;
    }else{
          return(n-1, n*result)
          }
      }    
  function factorialFunc(n){
    return factorial(n,1)
      }

module.exports = factorialFunc; 
      
      console.log(factorialFunc(/*insert number here*/))
