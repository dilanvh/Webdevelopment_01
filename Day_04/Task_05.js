const userInput = prompt("Please enter a number:");
const number = parseInt(userInput, 10);
if(isNaN(number))
{
  console.log("That is not a valid number!");
} 
else if(number % 2 === 0)
{
  console.log(`${number} is an even number.`);
}
else
{
  console.log(`${number} is an odd number.`);
}