const firstName = "John";
const lastName = "Doe";
const age = 30;
const sentenceWithPlus = "My name is " + firstName + " " + lastName + " and I am " + age + " years old.";
const sentenceWithTemplateLiteral = `My name is ${firstName} ${lastName} and I am ${age} years old.`;
console.log(sentenceWithPlus);
console.log(sentenceWithTemplateLiteral);