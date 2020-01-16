function charachterCounter(inputString, haramString) {
    var str = ``;

    for (i=0;i<inputString.length;i++){
        var check = false;
        for (j=0;j<haramString.length;j++){
            if (inputString[i] == haramString[j]){
                check = true;
            }
        }
        if (!check){
            str += inputString[i];
        }
    }
    
    var clonerStr = str;
    var display = {};

    for (x=0;x<str.length;x++){
        var counter = 0;
        for (y=0;y<clonerStr.length;y++){
            if (str[x] == clonerStr [y]){
                counter++;
            }
        }
        display[str[x]] = counter;
    }
    return display;
}

console.log(charachterCounter("happynewyearguys", "ay"))
// { h: 1, p: 2, n: 1, e: 2, w: 1, r: 1, g: 1, u: 1, s: 1 }

console.log(charachterCounter("akuselalusukasekalihujandibulandesember", 'abcdefghijklm'))
// { u: 5, s: 4, n: 2, r: 1 }
