// CRUD -> CREATE, READ, UPDATE, DESTROY

const mix = ["mohit", "sohit", "sandeep", true, false, 3289, 230];
let numbers = [23, 23, 32, 45, 5, 65, 546, 56, 54];
let complex = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

function countVowel(s) {
  s = s.split("");
  let totalVowels = 0;
  let vowels = ["a", "e", "i", "o", "u"];
  for (let i = 0; i < s.length; i++) {
    let char = s[i];
    if (vowels.includes(char)) {
      totalVowels++;
    }
  }
  return totalVowels;
}

function countChar(s, char) {
  let found = 0;
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (ch === char) found++;
  }
  return found;
}

function countIndexOfChar(s, char) {
  let indicies = [];
  s = s.split("");
  for (let i = 0; i < s.length; i++) {
    let ch = s[i];
    if (ch === char) {
      indicies.push(i);
    }
  }
  return indicies;
}

function findIndexWord(s, word) {
  s = s.split(" ");
  let indicies = [];
  for (let index = 0; index < s.length; index++) {
    const token = s[index];
    if (token === word) indicies.push(index);
  }
  return indicies;
}

let para = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. At, eaque blanditiis. Itaque ratione cupiditate totam pariatur repudiandae ab sequi fuga non libero blanditiis asperiores modi atque laborum explicabo veritatis excepturi nostrum earum reprehenderit harum corrupti, fugiat aliquam nam. Omnis ab debitis numquam, dolor iure dolore eaque fuga asperiores atque officiis velit saepe sed, pariatur consequuntur similique delectus. Cupiditate culpa ipsum nostrum! Inventore cupiditate laudantium velit id accusantium expedita culpa asperiores in beatae. Consequuntur dolorum vero cupiditate quam quas doloribus provident molestias alias quo minima asperiores sapiente dignissimos nobis ea quod, quaerat fugiat accusamus, reprehenderit dolores possimus animi vitae odit! Voluptatem!`;

let result = findIndexWord(para, "sit");
console.log(result);
