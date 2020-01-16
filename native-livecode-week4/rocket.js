/**
 * 
 * ================
 * Follow the guide
 * ================
 * 
 * Diberikan sebuah function untuk mencari dimanakah pion akan berhenti,
 * berdasarkan guide yang ada.
 * Function ini menerima 2 parameter yaitu array multidimensi yang mewakilkan sebuah board
 * dan array guide yaitu, urutan ke arah mana saja pion akan berjalan
 * 
 * pion di tandakan dengan "*"
 * 
 * Output adalah board array multidimensi dengan lokasi pion terakhir , mengikuti array guide
 * yang telah di berikan
 *  "↓" -> ke bawah
 *  "←" -> ke kiri
 *  "↑" -> ke atas
 *  "→" -> ke kanan 
 * 
 * Jika guide melebihi panjang dan lebar board, maka pion akan tetap berada,
 * pada posisi terakhir yang dapat di jangkau oleh pion.
 * 
 * Asumsikan posisi terakhir pion pasti berada dalam board
 * 
 * RULES: 
 *  - dilarang menggunakan .indexOf .lastIndexOf .set .findIndex .includes .reduce .reduceRight
 */

// asumsikan guide tidak akan melebihi panjang dan lebar board
// dilarang menggunakan .indexOf .lastIndexOf .set .findIndex .includes .reduce .reduceRight
function play (board, guide) {
  var index = [];
  for (row = 0; row<board.length; row++){
    for (col = 0; col<board[row].length;col++){
      if (board[row][col] == `*`){
        index.push(row);
        index.push(col);
        board[row][col] = ``;
      }
    }
  }

  for (i=0;i<guide.length;i++){
    if (guide[i] == `↓` && index[0] != ){
      index[0]++;
    }
    else if (guide[i] == `←`){
      index[1]--;
    }
    else if (guide[i] == `↑`){
      index[0]--;
    }
    else if (guide[i] == `→`){
      index[1]++;
    }
  }
  return index;
  board[index[0]][index[1]] = `*`;
  return board;
}


var board1 = [
  ["","","","*",""],
  ["","","","",""],
  ["","","","",""],
  ["","","","",""]
];
var guide1 = ["↓", "↓", "↓", "↓", "←", "↑", "→"];
console.log(play(board1, guide1));
// [
//   [ '', '', '', '', '' ],
//   [ '', '', '', '', '' ],
//   [ '', '', '', '*', '' ],
//   [ '', '', '', '', '' ]
// ]

var board2 = [
  ["","","","",""],
  ["","","","",""],
  ["","*","","",""],
  ["","","","",""]
];

var guide2 = ["←", "←", "↑", "↑", "→"];

console.log(play(board2, guide2));
// [
//   [ '', '*', '', '', '' ],
//   [ '', '', '', '', '' ],
//   [ '', '', '', '', '' ],
//   [ '', '', '', '', '' ]
// ]