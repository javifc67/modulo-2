/* let num = prompt("Insert a decimal number: ");

function romanize(num) {
  let romValue = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  let roman = "",
    i;
  for (i in romValue) {
    while (num >= romValue[i]) {
      roman += i;
      num -= romValue[i];
    }
  }
  return roman;
}

alert(romanize(num)); */

/* function hoistExample() {
  var a = 10;
}

hoistExample();
console.log(a);
 */

/* function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);

let ask (question, yes, no) {
  if (confirm (question)) yes()
  else no()
}
  */
/* function isEmpty(schedule) {
  for (let key in schedule) {
    return false;
  }
  return true;
}
let schedule = {};

alert(isEmpty(schedule)); // true

schedule["8:30"] = "get up";

alert(isEmpty(schedule)); // false
 */

/* const user = {
  name: "John"
};

// does it work?
user.name = "Pete";

user.pipo = "si";

alert(user.pipo);
 */

/* let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
};

let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
alert(sum);
 */

/* let arr = [];
function multiplyNumeric() {
  for (let key in menu) {
    if (typeof menu[key] == "number") {
      menu[key] *= 2;
    }
  }
  arr.push(menu.width + " " + menu.height + " " + menu.title);
}
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

multiplyNumeric(menu);

alert(arr);
 */

// objeto que tenga una propiedad o dos y la tercera sea name. Crear una función que modifique esa propiedad name y la capitalize.

/* let obj = {
   edad: 18,
   sexo: "M",
   name: "Pete",
 }

function cap() {
  obj.name = 

} */
