function countProfit (arr){
  let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
  //code here
  if (arr == false){
    return `{}`;
  }

  var display = {};

  for (i=0;i<listBarang.length;i++){
    var buyer = [];
    var amount = 0;
    var temp = {};
    for (j=0;j<arr.length;j++){
      if (listBarang[i][0] == arr[j].product && arr[j].amount <= listBarang[i][2]){
        buyer.push(arr[j].name);
        amount += arr[j].amount;
        listBarang[i][2] -= arr[j].amount;
      }
      temp.shoppers = buyer;
      temp.leftOver = listBarang[i][2];
      temp.totalProfit = amount * listBarang[i][1];
    }
    display[listBarang[i][0]] = temp;
  }
  return display;

}

console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 2 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 3 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 2 }
  ])
);
// {
//   'Sepatu Stacattu': {
//     shoppers: ['Windi', 'Vanessa'],
//     leftOver: 5,
//     totalProfit: 7500000
//   },
//   'Baju Zoro': { shoppers: [], leftOver: 2, totalProfit: 0 },
//   'Sweater Uniklooh': { shoppers: [], leftOver: 1, totalProfit: 0 }
// }


console.log(
  countProfit([
    { name: "Windi", product: "Sepatu Stacattu", amount: 8 },
    { name: "Vanessa", product: "Sepatu Stacattu", amount: 10 },
    { name: "Rani", product: "Sweater Uniklooh", amount: 1 },
    { name: "Devi", product: "Baju Zoro", amount: 1 },
    { name: "Lisa", product: "Baju Zoro", amount: 1 }
  ])
);
// {
//   'Sepatu Stacattu': { shoppers: [ 'Windi' ], leftOver: 2, totalProfit: 12000000 },
//   'Baju Zoro': { shoppers: [ 'Devi', 'Lisa' ], leftOver: 0, totalProfit: 1000000 },
//   'Sweater Uniklooh': { shoppers: [ 'Rani' ], leftOver: 0, totalProfit: 175000 }
// }


console.log(
  countProfit([{ name: "Windi", product: "Sepatu Naiki", amount: 5 }])
);
// {
//   'Sepatu Stacattu': { shoppers: [], leftOver: 10, totalProfit: 0 },
//   'Baju Zoro': { shoppers: [], leftOver: 2, totalProfit: 0 },
//   'Sweater Uniklooh': { shoppers: [], leftOver: 1, totalProfit: 0 }
// }


console.log(countProfit([])); //[]
// {}