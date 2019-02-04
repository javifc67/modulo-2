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

function hoistExample() {
  var a = 10;
}

hoistExample();
console.log(a);
