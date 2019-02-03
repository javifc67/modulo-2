/* 
function unique(arr) {
  let set = new Set(arr);

  return Array.from(set);
}

let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O"
];

alert(unique(values));
 */

/* function aclean(arr) {
  let map = new Map();

  for (let word of arr) {
    // split the word by letters, sort them and join back

    let sorted = word
      .toLowerCase()
      .split("")
      .sort()
      .join(""); // (*)

    map.set(sorted, word);
  }

  return Array.from(map.values());
}

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];
alert(aclean(arr));
 */
/* 
let map = new Map();

map.set("name", "John");

let keys = Array.from(map.keys());

// Error: numbers.push is not a function
keys.push("more");
alert(keys);
 */
/* 
function avg(salaries) {
  sumsalaries = 0;
  for (let value of Object.values(salaries)) {
    sumsalaries += value;
  }
  return sumsalaries;
}
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};

alert(avg(salaries)); */

/* function count(obj) {
  let size = 0;
  for (key in obj) {
    size++;
  }
  return size;
}
let user = { name: "John", age: 30 };
alert(count(user));
 */

/* let user = {
  name: "John",
  years: 30
};

let { name, years: age, isAdmin = false } = user;

alert(name);
alert(age);
alert(isAdmin);
 */
/* function topSalary(salaries) {
  bestS = 0;
  bestN = null;
  for (let [name, salario] of Object.entries(salaries)) {
    if (salario > bestS) {
      bestS = salario;
      bestN = name;
    }
  }
  return bestN;
}
let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250
};
alert(topSalary(salaries));
 */

/* let date = new Date(2012, 1, 20, 3, 12);
alert(date);
 */

/* function getWeekDay(date) {
  switch (date.getDay()) {
    case 0:
      return (date = "SU");

    case 1:
      return (date = "MO");

    case 2:
      return (date = "TU");

    case 3:
      return (date = "WE");

    case 4:
      return (date = "TH");

    case 5:
      return (date = "FR");

    case 6:
      return (date = "SA");
  }
}

let date = new Date(2012, 0, 3); // 3 Jan 2012
alert(getWeekDay(date));
 */

/* function getLocalDay(date) {
  let dayEU = date.getDay();
  if (dayEU == 0) {
    dayEU = 7;
  }
  return dayEU;
}

let date = new Date(2012, 0, 3);
alert(getLocalDay(date));
 */
