//task-1

let originalString = "Hello, world!";

function replaceString(string, valueToReplace, valueToReplaceWith) {
  return string.split(valueToReplace).join(valueToReplaceWith);
}

let replacedString = replaceString(originalString, "world", "universe");
console.log(replacedString); // Output: Hello, universe!

//task-2

let sentence = "hello world";

function capitalizeSentence(sentence) {
  return sentence
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

let capitalizedSentence = capitalizeSentence(sentence);
console.log(capitalizedSentence); // Output: "Hello World"

//task-3

const users = [
  { name: "Lasha", age: 30 },
  { name: "Saba", age: 20 },
  { name: "John", age: 25 },
  { name: "Emma", age: 35 },
];

function sortUsersByAge(users) {
  const sortedUsers = users.sort((a, b) => a.age - b.age);
  return sortedUsers;
}

const sortedUsers = sortUsersByAge(users);

console.log(sortedUsers);
