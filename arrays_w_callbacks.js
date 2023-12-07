
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
const panagram = ['The', 'quick', 'brown', 'fox', 'jumps', 'over', 'the', 'lazy', 'dog'];


const everyNumGreaterOrEqualThanZero = nums.every(num => num >= 0);
const everyWordShorterThanEightChars = panagram.every(word => word.length < 8);


const numsLessThan4 = nums.filter(num => num < 4);
const evenLengthWords = panagram.filter(word => word.length % 2 === 0);


const firstValueDivisibleBy5 = nums.find(num => num % 5 === 0);
const firstWordLongerThan5Chars = panagram.find(word => word.length > 5);


const indexFirstNumDivisibleBy3 = nums.findIndex(num => num % 3 === 0);
const indexFirstWordLessThan2Chars = panagram.findIndex(word => word.length < 2);

nums.forEach(num => console.log(num * 3));
panagram.forEach(word => console.log(word + '!'));

const numsMultipliedBy100 = nums.map(num => num * 100);
const uppercasedWords = panagram.map(word => word.toUpperCase());


const someNumsDivisibleBy7 = nums.some(num => num % 7 === 0);
const someWordsHaveLetterA = panagram.some(word => word.includes('a'));

// Thought Questions
//  The original arrays remain unchanged. These array methods do not mutate the original array.
// Yes, you can store the values from forEach, map, etc., in a new array if you explicitly create and modify a new array inside the callback.


