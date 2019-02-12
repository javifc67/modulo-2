/* function delay(ms) {
  return new Promise((resolve, reject) => {
    setTimeout(function() {
      if (ms > 5000) {
        reject();
      } else {
        resolve();
      }
    }, ms);
  });
}

delay(3000)
  .then(() => alert("runs after 3 seconds"))
  .catch(() => alert("the promise is broken :("));
 */
/* function loadScript(src) {
  return new Promise(function(resolve, reject) {
    let script = document.createElement("script");
    script.src = src;

    script.onload = () => resolve(script);
    script.onerror = () => reject(new Error("Script load error: " + src));

    document.head.append(script);
  });
}
loadScript("./one.js")
  .then(function(script) {
    return loadScript("./two.js");
  })
  .then(function(script) {
    return loadScript("./three.js");
  })
  .then(function(script) {
    // use functions declared in scripts
    // to show that they indeed loaded
    setTimeout(function() {
      one();
    }, 3000);
    two();
    three();
  });
 */

/* function pipo(num) {
  return new Promise(function(resolve, reject) {
    if (num > 10) {
      resolve();
    } else {
      reject();
    }
  });
}
let num = 15;
pipo(num)
  .then(() => alert("good, the number is: " + num))
  .catch(() => alert("bad, the number is: " + num));
 */

/* Escribir dos funciones que usen promesas que puedas encadenar. La primera función pasarAMayus() que tomará un array de palabras y las pondrá en mayúsculas y la segunda función ordenarPalabras() que las ordenará alfabéticamente.

Si el array contiene datos que no son strings debería lanzar un error. */

function pasarAMayus(arr) {
  return new Promise(function(resolve, reject) {
    let map = new Map();

    for (let word of arr) {
      if (typeof word) map.set(sorted);
    }

    Array.from(map.values());

    let str = arr.toString(",").toUpperCase();
    let marr = str.split(",");

    resolve(marr);
  });
}

function ordenarPalabras(arr) {
  return new Promise(function(resolve, reject) {
    let oarr = arr.sort();

    resolve(oarr);
  });
}

let arr = ["hola", "k", "ase"];

pasarAMayus(arr)
  .then(res => ordenarPalabras(res).then(res => alert(res)))
  .catch();
