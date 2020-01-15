function changeMe(arr) {
  // you can only write your code here!
  if (arr == false){
      console.log(`""`);
  }
  var display = {};
  var x = 1;
  for (i=0;i<arr.length;i++){
      display.firstName = arr[i][0];
      display.lastName = arr[i][1];
      display.gender = arr[i][2];
      if(arr[i][3] != undefined){
          display.age = 2019 - arr[i][3];
      }
      else{
          display.age = `Invalid Birth Year`;
      }
      console.log(`${x}. ${arr[i][0]} ${arr[i][1]}:`);
      console.log(display);
      x++;
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""