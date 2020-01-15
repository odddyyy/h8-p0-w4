function ubahHuruf(kata) {
  // you can only write your code here!
  var alphabet = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`];

  kata = kata.toLowerCase();
  var newKata = ``;

  for (i=0;i<kata.length;i++){
      for (j=0,x=1;j<alphabet.length;j++){
        if (kata[i] == alphabet[j]){
            if (j != alphabet.length-1){
                newKata += alphabet[j+x];
            }
            else{
                newKata += alphabet[0];
            }
        }
      }
  }

  return newKata;
}

// TEST CASES
console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu