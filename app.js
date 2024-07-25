// 1.Berilgan objectdagi barcha string
//  qiymatlarni toping va birlashtiring.
function concatStrings(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      arr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      arr = arr.concat(concatStrings(obj[key]));
    }
  }
  return arr.join(" ");
}
const obje = {
  a: "Hello",
  b: {
    c: " ",
    d: {
      e: "World",
      f: {
        g: "!",
      },
    },
  },
};
console.log(concatStrings(obje)); // Output: "Hello World!"

//  2.Berilgan stringdagi so'zlarni
//   ularning uzunligi bo'yicha tartiblang.
function sortByLength(s) {
  let arr = s.split(" ");
  arr.sort((a, b) => a.length - b.length);
  return arr.join(" ");
}
console.log(sortByLength("short longest medium")); // Output: "short medium longest"
console.log(sortByLength("a quick brown fox")); // Output: "a fox quick brown"

// 3.Berilgan objectdagi barcha raqamli
//  qiymatlarni toping va ro'yxat (array)
//   sifatida qaytaring.
function findNumbers(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      arr.push(obj[key]);
    } else if (typeof obj[key] === "object") {
      arr = arr.concat(findNumbers(obj[key]));
    }
  }
  return arr;
}
const objs = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
      },
    },
  },
};
console.log(findNumbers(objs)); // Output: [1, 2, 3, 4]

// 4.Berilgan stringdagi eng uzun so'zni toping.
function longestWord(s) {
  let arr = s.split(" ");
  let longest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (arr[i].length > longest.length) {
      longest = arr[i];
    }
  }
  return longest;
}

// Test case
console.log(longestWord("Find the longest word in this sentence")); // Output: "sentence"
console.log(longestWord("JavaScript is awesome")); // Output: "JavaScript"

// 5.Berilgan stringdagi barcha kichik
//  harflarni katta harflarga aylantiring
//  va teskari tartibda qaytaring.
function reverseUpperCase(s) {
  let arr = s.split(" ");
  let reversed = [];
  for (let i = 0; i < arr.length; i++) {
    reversed[i] = arr[i].split("").reverse().join("").toUpperCase();
  }
  return reversed.reverse().join(" ");
}
console.log(reverseUpperCase("Hello World")); // Output: "DLROW OLLEH"
console.log(reverseUpperCase("JavaScript")); // Output: "TPIRCASAVAJ"

// 6.Berilgan stringdagi barcha raqamlarni
// toping va alohida arrayda qaytaring.
function extractNumbers(s) {
  let arr = s.split(" ");
  let numbers = [];
  for (let i = 0; i < arr.length; i++) {
    if (!isNaN(arr[i])) {
      numbers.push(Number(arr[i]));
    }
  }
  return numbers;
}
console.log(extractNumbers("There are 3 apples and 4 oranges")); // Output: [3, 4]
console.log(extractNumbers("123 Main St.")); // Output: [123]

// 7.Berilgan objectdagi barcha qiymatlarning
// turlarini toping va ro'yxat (array)
// sifatida qaytaring.
function valueTypes(obj) {
  let arr = [];
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      arr.push("number");
    } else if (typeof obj[key] === "string") {
      arr.push("string");
    } else if (typeof obj[key] === "boolean") {
      arr.push("boolean");
    } else if (typeof obj[key] === "object") {
      arr.push("object");
    } else if (typeof obj[key] === "undefined") {
      arr.push("undefined");
    }
  }
  return arr;
}
const obj = {
  a: 1,
  b: "string",
  c: true,
  d: {
    e: 3.14,
    f: null,
    g: {
      h: undefined,
      i: [1, 2, 3],
    },
  },
};
console.log(valueTypes(obj));
// Output: ["number", "string", "boolean", "number", "object", "undefined", "object"]

// 8.Berilgan objectdagi barcha kalitlarni
//  ularning qiymatlari bilan almashtiring.
//  Agar qiymatlari takrorlansa, oxirgi qiymatni
//   qabul qiling.
function invertObject(obj) {
  let res = {};
  for (let key in obj) {
    if (typeof obj[key] === "object") {
      res = Object.assign(res, invertObject(obj[key]));
    } else {
      res[obj[key]] = key;
    }
  }
  return res;
}
const objc = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
      },
    },
  },
};
console.log(invertObject(objc)); // Output: { 1: 'a', 2: 'c', 3: 'e', 4: 'g' }

// 9.Berilgan string palindrom ekanligini
//  tekshiring. (Palindrom - o'qilganda orqa tomondan
//     ham bir xil bo'lgan so'z yoki ibora).

function isPalindrome(s = "") {
  let arr = s.replace(",", "").split(" ");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === arr[i].split("").reverse().join("")) {
      return true;
    } else {
      return false;
    }
  }
}

console.log(isPalindrome("A man, a plan, a canal, Panama")); // Output: true
console.log(isPalindrome("Hello, World!")); // Output: false

// 10.Berilgan objectdagi barcha raqamli
//  qiymatlarning yig'indisini hisoblang.
function sumNumbers(obj) {
  let sum = 0;
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      sum += obj[key];
    } else if (typeof obj[key] === "object") {
      sum += sumNumbers(obj[key]);
    }
  }
  return sum;
}
const objk = {
  a: 1,
  b: {
    c: 2,
    d: {
      e: 3,
      f: {
        g: 4,
      },
    },
  },
};
// console.log(sumNumbers(objk)); // Output: 10

// 11.Berilgan stringni so'zlarga ajratib, har
//  bir so'zning bosh harfini katta qiling va
//   qayta birlashtiring.
function capitalizeWords(s) {
  let arr = s.split(" ");
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i][0].toUpperCase() + arr[i].slice(1);
  }
  return arr.join(" ");
}
// console.log(capitalizeWords("hello world from javascript")); // Output: "Hello World From Javascript"
// console.log(capitalizeWords("this is a test")); // Output: "This Is A Test"
