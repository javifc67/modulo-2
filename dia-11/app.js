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

// function getDateAgo(date, days){
//  dateDiff = +date - (days * 86400000)
//  let date2 = new Date(dateDiff)
//   return  date2.getDate()
// }

// let date = new Date(2015, 0, 2);

// alert(getDateAgo(date, 1)); // 1, (1 Jan 2015)
// alert(getDateAgo(date, 2)); // 31, (31 Dec 2014)
// alert(getDateAgo(date, 365));



// function getLastDayOfMonth(year, month){
//   let lastDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
//   lastDay = lastDay[month]
//   if(0 == year % 4){
//     lastDay = 29;
//   }
//  return lastDay
// }

// alert(getLastDayOfMonth(2012, 1));

// function getSecondsToday (){
//   let date = new Date(Date.now())
//   ms = (date.getHours() * 3600000)
//   ms+= (date.getMinutes() * 60000)
//   ms+= (date.getSeconds() *1000)
//   ms+= date.getMilliseconds()

//   alert(ms)
   
// }
// getSecondsToday()


function getSecondsToTomorrow(){
  let date = new Date(Date.now())
  let dateT = new Date(Date.now())
  dateT = date.setDate(date.getDate() + 1)
  dateT = date.setHours( 0[0,0,0])
    s = (date.getHours() * 3600000)
    s+= (date.getMinutes() * 60000)
    s+= (date.getSeconds() *1000)
    st = (dateT.getHours() * 3600000)
    st+= (dateT.getMinutes() * 60000)
    st+= (dateT.getSeconds() *1000)
    return s-st
}
getSecondsToTomorrow();