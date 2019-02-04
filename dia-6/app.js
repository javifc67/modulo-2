/* let user = {
  name: "John",
  go: function() {
    alert(this.name);
  }
};
user.go();
 */

/* let obj, method;

obj = {
  go: function() {
    alert(this);
  }
};

obj.go(); // (1) [object Object]

obj.go(); // (2) [object Object]

(method = obj.go)(); // (3) undefined

(obj.go || obj.stop)(); // (4) undefined
 */
/* 
function makeUser() {
  return {
    name: "John",
    ref: this
  };
}

let user = makeUser();

alert(user.ref.name); // What's the result?
 */

/* let calculator = {
  read() {
    this.num1 = +prompt("value1");
    this.num2 = +prompt("value2");
  },
  sum() {
    return this.num1 + this.num2;
  },
  mul() {
    return this.num1 * this.num2;
  }
};
calculator.read();
alert(calculator.sum());
alert(calculator.mul());
 */

/* let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function() {
    // shows the current step
    alert(this.step);
    return this;
  }
};
/* 
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1 */
/* 
ladder
  .up()
  .up()
  .down()
  .showStep();
 */

// crear un nuevo objeto con new y pasarle una funcion saludar y parametro con el nombre de a quien saludar

/* function Usuario(message, name) {
  this.greet = message;
  this.name = name;
}
let usuario = new Usuario(function(name) {
  for (i = 0; i < this.name.length; i++) {
    if (this.name.charAt(i) == "a" || this.name.charAt(i) == "A") {
    }
  }
  return "hi " + this.name;
}, "pipae");

console.log(usuario.greet());
 */
