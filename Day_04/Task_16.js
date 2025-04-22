// Function to count vowels in a string
function countVowels(str) {
    const vowels = "aeiouAEIOU";
    let count = 0;

    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }

    return count;
}

// Example usage
console.log(countVowels("Hello, World!"));
console.log(countVowels("JavaScript"));
console.log(countVowels("Copilot AI"));