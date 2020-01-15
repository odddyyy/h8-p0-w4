function checkAB(num) {
  // you can only write your code here!
  var check = false;
  
  for (j=0,k=4;k<num.length;j++,k++){
    if (num[j] == `a` && num[k] == `b` || num[j] == `b` && num[k] == `a`){
        check = true;
    }
  }
  return check;
}

// TEST CASES
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false