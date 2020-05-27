const factorialFunc = require('./factorial');
test("return factorial of number", ()=>{
    expect(factorialFunc(5)).toBe(120);
})
