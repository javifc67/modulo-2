/* function hoistExample() {
  var a = 10;
  return a;
}

hoistExample();

console.log(hoistExample());
 */
/* function hoistExample() {
  var a = 10;
}

hoistExample();
console.log(a);
 */

/* function checkSpam(str) {
  str = str.toUpperCase();
  if (str.includes("XXX") || str.includes("VIAGRA")) {
    return true;
  } else {
    return false;
  }
}
alert(checkSpam("buy ViAgRA now"));
alert(checkSpam("free xxxxx"));
alert(checkSpam("innocent rabbit"));
 */

/* function truncate(str, maxlength) {
  if (maxlength <= str.length) {
    return str.slice(0, maxlength - 1) + "…";
  } else {
    return str;
  }
}

alert(truncate("What I'd like to tell on this topic is:", 20));

alert(truncate("Hi everyone!", 20));
 */

/* function extractCurrencyValue(str) {
  return +str.slice(1);
}

alert(extractCurrencyValue("$120") === 120);
 */

/* let styles = ["Jazz", "Blues"];

alert(styles);

styles.push("Rock-n-Roll");

alert(styles);

styles[Math.floor([styles.length / 2])] = "Classics";

alert(styles);

styles.shift();

alert(styles);

styles.unshift("Rap", "Reggae");

alert(styles); */

/* function sumInput() {
  let numbers = [];

  while (true) {
    let value = prompt("A number please?", 0);

    if (value === "" || value === null || !isFinite(value)) break;

    numbers.push(+value);
  }

  let sum = 0;
  for (let number of numbers) {
    sum += number;
  }
  return sum;
}

alert(sumInput());
 */

function getMaxSubSum(arr) {
  let max = 0;
  let maxaar = 0;
  alert(arr);
  while (true) {
    maxaar += Math.max(...arr, 0);
    arr[arr.indexOf(Math.max(...arr))] = 0;
    max = maxaar;
    if (max > maxaar) {
      break;
    }
  }
  return max;
}

alert(getMaxSubSum([-1, 2, 3, -9]));
/* 
 mientras que el max sea mayor que maxarr que siga buscando numeros, que maxaar se le sume el numero maximo del array, lo sume a max y lo borre del array, 

*/
