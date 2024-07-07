costOfFood = Number(prompt("How much did you just pay for the food?"))
tipPercentagetoPay = Number(prompt("How much tip percentage you want to pay?")) / 100
tipAmount = costOfFood * tipPercentagetoPay
total = costOfFood + tipAmount

console.log('Your total payment after the tip is ', total)
console.log('Your tip amount is ', tipAmount)
