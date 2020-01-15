function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
  var display = [];
  for (i=0;i<arrPenumpang.length;i++){
    var temp = {};
    var total = 0;
    temp.penumpang = arrPenumpang[i][0];
    temp.naikDari = arrPenumpang[i][1];
    temp.tujuan = arrPenumpang[i][2];
    for (j=0;j<rute.length;j++){
        if (arrPenumpang[i][1] == rute[j]){
            var start = j;
        }
        else if (arrPenumpang[i][2] == rute[j]){
            var end = j;
        }
    }
    total = (end-start)*2000;
    temp.bayar = total;
    display.push(temp);
  }
  return display;
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]