let challenge = "30 Days Of JavaScript";
console.log(challenge);
console.log(challenge.length);
console.log(challenge.toUpperCase());
console.log(challenge.toLowerCase());
console.log(challenge.substring(0, 2));
console.log(challenge.substring(3, 21));
console.log(challenge.includes("Script"));
console.log(challenge.split());
console.log(challenge.split(" "));
let string = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(string.split(", "));
console.log(challenge.replace("JavaScript", "Python"));
console.log(challenge.charAt(15));
console.log(challenge.charCodeAt(11));
console.log(challenge.indexOf("a"));
console.log(challenge.lastIndexOf("a"));
let string1 = "You cannot end a sentence with because because because is a conjunction";
console.log(string1.indexOf("because"));
console.log(string1.lastIndexOf("because"));
console.log(string1.search("because"));
let string2 = " 30 Days Of JavaScript ";
console.log(string2.trim());
console.log(challenge.startsWith("30"));
console.log(challenge.endsWith("Script"));
console.log(challenge.match("a"));
let string3 = "30 Days Of";
console.log(string3.concat(" ", "JavaScript"));
console.log(challenge.repeat(2));