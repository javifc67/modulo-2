/* function cashRegistrer(int) {
  let values = {
    HOUNDRED: 100,
    FIFTY: 50,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    TWO: 2,
    ONE: 1,
    HALFDOLLAR: 0.5,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKLE: 0.05,
    PENNY: 0.01
  };
  let srt = "";
  for (let i of Object.keys(values)) {
    let q = Math.floor(int / values[i]);
    int -= q * values[i];
    str += i.repeat(q);
  }
  return srt;
}

alert(cashRegistrer(25.5)); */

/* function cashRegistrer(cash, price) {
  cash -= price;
  let values = {
    HOUNDRED: 100,
    FIFTY: 50,
    TWENTY: 20,
    TEN: 10,
    FIVE: 5,
    TWO: 2,
    ONE: 1,
    HALFDOLLAR: 0.5,
    QUARTER: 0.25,
    DIME: 0.1,
    NICKLE: 0.05,
    PENNY: 0.01
  };
  let srt = "",
    i;
  for (i in values) {
    while (cash >= values[i]) {
      srt += i + " ";
      cash -= values[i];
    }
  }
  return srt;
}

alert(cashRegistrer(50, 20.25));
/* 
A: $_sdfvdsf,23.2fsdcds
B: fvfdv-vs,25.88fdsdf */

/* function checkpalindromo(str) {
  if (
    (str ==
      str
        .split("")
        .reverse()
        .join("")) ==
    true
  ) {
    return "sos un palindromo";
  } else {
    return "no sos un palindromo";
  }
}

alert(checkpalindromo("asdffdsa"));
 */

function roteArr(arr, nVeces) {
  for (nVeces; nVeces > 0; nVeces--) {
    let a = arr.pop();
    arr.unshift(a);
  }
  return arr;
}

alert(roteArr([3, 8, 9, 7, 6], 2));
