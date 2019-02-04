/*
 * Aquí podéis hacer los ejercicios y
 * practicar Javascript!
 */
/* let age = prompt("edad");
if (age <= 90 || age >= 14) {
  alert("si");
}
 */
/* 
let age = prompt("edad");
if (age >= 90 && age <= 14) {
  alert("si");
}

if (!(age <= 90 || age >= 14)) {
  alert("sis");
}
 */

/* function cancel() {
  alert("Canceled.");
}
function check(str) {
  return str == "" || !str;
}
let login = prompt("usuario:");

if (check(login)) {
  cancel();
} else if (login == "Admin") {
  let pass = prompt("password?");
  if (check(pass)) {
    cancel();
  } else if (pass == "TheMaster") {
    alert("Bienbenido!");
  } else {
    alert("wrong password");
  }
} else {
  alert("I don't know you");
}
 */

// deciaml a romano

/* let num = +prompt("numero");
num

switch (num) {
  case 3:
    num = "I";
  case 2:
    num += " I";
  case 1:
    num += " I";
}
alert(num);
 */

/* let decNum = +prompt("Introduzca un número decimal: ");

let X = 0;
let V = 0;
let I = 0;
let numX = "";
let numV = "";
let numI = "";

while (decNum >= 10) {
  decNum -= 10;
  ++X;
}
while (decNum >= 5) {
  decNum -= 5;
  ++V;
}
while (decNum >= 1) {
  decNum -= 1;
  ++I;
}
while (X > 0) {
  numX += "X ";
  X--;
}
while (V > 0) {
  numV += "V ";
  V--;
}
while (I > 0) {
  numI += "I ";
  I--;
}

alert(numX + numV + numI); */

let srt= +prompt
  let roman = {
    M: 1000,
    CM: 900,
    :angustiado: 500,
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
  let str = "";
 
  for (let i of Object.keys(roman)) {
    let q = Math.floor(num / roman[i]);
    num -= q * roman[i];
    str += i.repeat(q);
  }
 
  return str;
 