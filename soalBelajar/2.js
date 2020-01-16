function multiDimensionalXO(size) {
  var display = [];

  if (size <= 0){
    return `Invalid input`;
  }
  
  if (size%2 != 0){
    for (i=1;i<=size;i++){
      var temp = [];
      for (j=1;j<=size;j++){
        if (i%2 != 0){
          if (j%2 !=0){
            temp.push(`o`)
          }
          else{
            temp.push(`x`);
          }
        }
        else if (i%2 == 0){
          if (j%2 != 0){
            temp.push(`x`);
          }
          else{
            temp.push(`o`);
          }
        }
      }
      display.push(temp);
    }
  }
  else if (size%2 == 0){
    for (x=1;x<=size;x++){
      var temp = [];
      for (y=1;y<=size;y++){
        if (y%2 != 0){
          temp.push(`o`);
        }
        else{
          temp.push(`x`);
        }
      }
      display.push(temp);
    }
  }

  return display;
}


console.log(multiDimensionalXO(1))  // [ [ 'o' ] ]

console.log(multiDimensionalXO(3));
// [ [ 'o', 'x', 'o' ], [ 'x', 'o', 'x' ], [ 'o', 'x', 'o' ] ]

console.log(multiDimensionalXO(4));
// [
//   [ 'o', 'x', 'o', 'x' ],
//   [ 'o', 'x', 'o', 'x' ],
//   [ 'o', 'x', 'o', 'x' ],
//   [ 'o', 'x', 'o', 'x' ]
// ]

console.log(multiDimensionalXO(0));
  // Invalid input
