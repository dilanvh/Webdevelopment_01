const userInput = prompt("Please enter your score:");
const score = parseInt(userInput, 10);
if(isNaN(score) || score < 0 || score > 100)
{
  console.log("Please enter a valid score between 0 and 100.");
}
else if(score >= 90)
{
  console.log("Your grade is: A");
}
else if(score >= 80)
{
  console.log("Your grade is: B");
}
else if(score >= 70)
{
  console.log("Your grade is: C");
}
else if(score >= 60)
{
  console.log("Your grade is: D");
}
else
{
  console.log("Your grade is: F");
}