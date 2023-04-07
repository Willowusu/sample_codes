//this function uses tail recursion to optimize finding the factorial of a number

//lets define our function which will take two arguments
/**
 * The factorial function takes a number and returns the factorial of that number
 * @param n - The number to calculate the factorial of.
 * @param result - The initial value of the result.
 * @returns the result of the recursive call.
 */
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
      
     
