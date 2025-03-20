// #1
let str = "extravaganza";
let lastFour = str.slice(-4);
console.log({lastFour});

//#2
const food ="The quick fox jumped overthe lazy dog";
const insertWord = "eat";
const index =4;
const newFood = food.slice(0,4)+insertWord+food.slice(index)
console.log({newFood})

//#3
const story = "The quick brown fox jumped over the lazy dog";
let countThe = (story.toLowerCase().split("the").length-1);
console.log(`"the" appears:${countThe} times`);

let countBrown =(story.toLowerCase().split("brown").length-1);
console.log(`"brown" appears:${countBrown} times`);

//#4
const string1 = "The pupils are reading in the library";
const wordAre = string1.includes("are");
console.log(`"are" found in string1:${wordAre}`);

const string2 = "The child was sitting on the table before it fell";
const hasSitting = string2.includes("sitting");
console.log(`"sitting" found in string2:${hasSitting}`);

//#5
const word = "wonderful";
const wordUpper = word.toUpperCase();
console.log({wordUpper});

const feeling = "amazing";
const lowerFeeling = feeling.toLowerCase();
console.log({lowerFeeling});

const position = "UndERneath";
const lowerPosition = position.toLowerCase();
console.log({lowerPosition});

const stmt = "A wonderful world";
.split(" ");
.map(word=>word.charAt(0).toUpperCase() + word.slice(1).toLowerCase);
.join("");
console.log({stmt});




