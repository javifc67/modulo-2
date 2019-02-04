/* function camelize(str) {
  let arr = str.split("-");
  arr.map((item, index) => {
    if (index > 0) {
      let letter = item.charAt(0);
      letter = letter.toUpperCase();
      item = letter + item.slice(1);
    }
    return arr;
  });
  alert(arr);
  for (let name of arr) {
  }
}
alert(camelize("background-color"));
 */
/* function camelize(str) {
  let arr = str.split("-");
  let result = arr.map(function(item, index, array) {
    if (index > 0) {
      return item.charAt(0).toUpperCase() + item.slice(1);
    } else {
      return item;
    }
  });
  result = result.join("");
  return result;
}

alert(camelize("pipo-es-un-buen-perro"));
 */

/* function filterRangeInPlace(arr, a, b){

} */

/* function compareNumeric(a, b) {
  if (a > b) return -1;
  if (a == b) return 0;
  if (a < b) return 1;
}

let arr = [5, 2, 1, -10, 8];
arr.sort(compareNumeric);
alert(arr);
 */

/* function filterRange(arr, a, b) {
  return arr.filter(item => item >= a && item <= b);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(arr);
alert(filtered); */

/* function filterRange(arr, a, b) {
  arr = arr.filter(item => item >= b || item <= a);
}

let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);

alert(arr);
 */
/* 
function copySorted(arr) {
  pipo = arr.slice();
  return pipo.sort();
}
let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted); // CSS, HTML, JavaScript
alert(arr);
 */

/* function copySorted(arr) {
  return arr.slice().sort();
}

let arr = ["HTML", "JavaScript", "CSS"];

let sorted = copySorted(arr);

alert(sorted);
alert(arr);
 */

/* let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [john, pete, mary];

let names = users.map(function(item, index, array) {
  return item.name;
});

alert(names);
 */

/* let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map(user => ({
  fullName: user.name + " " + user.surname,
  id: user.id
}));

alert(usersMapped[0].id); // 1
alert(usersMapped[0].fullName); // John Smith
 */
/* function sortByName(users) {
  users.sort((a, b) => (b.name < a.name ? 1 : -1));
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [john, pete, mary];

sortByName(arr);

// now: [john, mary, pete]
alert(arr[1].name); // Mary */

/* function suffle(arr) {
  arr.sort(function a() {
    return Math.random() - 0.5;
  });
}
let arr = [1, 2, 3];
suffle(arr);
alert(arr);
suffle(arr);
alert(arr);

suffle(arr);
alert(arr); */
