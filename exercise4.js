function cariModus(arr) {
  // you can only write your code here!
  var temp = [];

  for (i=0;i<arr.length;i++){
      var index = -1;
      for (j=0;j<temp.length;j++){
          if (arr[i] == temp[j][0]){
              index = j;
          }
      }
      if (index == -1){
          temp.push([arr[i],1]);
      }
      else{
          temp[index][1]++;
      }
  }
  
  if(temp.length == 1){
      return -1;
  }

  var display = [];

  for (i=0;i<temp.length;i++){
      if (temp[i][1] > 1){
        display.push(temp[i]);
      }
  }

  for (i=0;i<display.length;i++){
      for (j=0;j<display.length;j++){
          if (display[i][0] < display[j][0] && i!=j){
              let tmp = display[i];
              display[i] = display[j];
              display[j] = tmp;
          }
      }
  }
  
  if (display == ``){
      return -1;
  }
  else{
      return display[0][0];
  }
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1