function digitPerkalianMinimum(angka) {
  var display = [];
    for (i=0;i<=angka;i++){
      var temp = ``;
      for (j=0;j<=angka;j++){
        if (i*j == angka){
          temp+= `${i}${j}`;
        }
      }
      if (temp != ``){
        display.push(temp);
      }
    }
    
    for (i=0;i<display.length;i++){
      for (j=0;j<display.length;j++){
        if (display[i] > display[j]){
          let tmp = display[i];
          display[i] = display[j];
          display[j] = tmp;
        }
      }
    }
    return display[0].length;
  }

// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2