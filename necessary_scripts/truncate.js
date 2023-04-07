//this function is used to truncate a number to a fixed number of decimal places without rounding it
//conventional js classes, functions and packages try to achieve this but either round up or are off by ~0.01 in their final result

/**
 * It takes a string, finds the index of the decimal point, slices the string to the index of the
 * decimal point plus the value of the second argument, converts the string to a number, checks if the
 * number is even, and if it is, it returns the number rounded to two decimal places
 * @param str - The string to be truncated.
 * @param val - The number of decimal places to truncate to.
 * @returns the result of the truncate function.
 */
async function truncate(str, val) {
  str = str.toString();
  str = str.slice(0, str.indexOf(".") + val + 1);
  let result = Number(str);
  if (result % 2 == 0) {
    result = result.toFixed(2);
  }
  return result;
}
