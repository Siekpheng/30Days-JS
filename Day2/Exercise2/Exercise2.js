//1
console.log("There is no exercise better for the heart than reaching down and lifting people up.");
//2
console.log("Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.");
//3
let num1 = '10';
console.log(typeof(num1));
let number = Number(num1);
console.log(typeof(number));
//4
let num2 = '9.8';
console.log(parseFloat(num2));
console.log(Math.ceil(num2));
//5
let string1 = "python";
console.log(string1.includes("on"));
let string2 = "jargon";
console.log(string2.includes("on"));
//6
let sentence1 = "I hope this course is not full of jargon.";
console.log(sentence1.includes("jargon"));
//7
console.log(Math.round(Math.random() * 101));
//8
console.log(Math.round(Math.random() * (101-50)) + 50);
//9
console.log(Math.round(Math.random() * 256));
//10
let string3 = "JavaScript";
let random_number = Math.floor(Math.random() * 10);
console.log(string3.charAt(random_number));
//11
console.log("1 1 1 1 1\n2 1 2 4 8\n3 1 3 9 27\n4 1 4 16 64\n5 1 5 25 125");
//12
let sentence2 = "You cannot end a sentence with because because because is a conjunction";
console.log(sentence2.substr(31, 23));