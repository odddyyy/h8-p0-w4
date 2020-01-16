/**
 * Input :
 * [
 *  {name : 'Fadhlan', score : 70},
 *  {name : 'Raka', score : 85},
 *  {name : 'Gio', score : 90},
 *  {name : 'Zahra', score : 75}
 * ]
 * 
 * Output : "Gio dan Raka"
 * 
 * Output berupa string dan output merupakan nilai student yang lebih dari nilai rata-rata 
 * 
 * jika best student lebih dari 2 maka ada koma 
 * jika best student hanya satu berarti nama itu saja returnnya
 */


function bestStudent(arr){
    var rata = 0;

    for (i=0;i<arr.length;i++){
        for (j=0;j<arr.length;j++){
            if (arr[i].score > arr[j].score && i != j){
                let tmp = arr[i];
                arr[i] = arr[j];
                arr[j] = tmp;
            }
        }
    }

    
    for (x=0;x<arr.length;x++){
        rata += arr[x].score;
    }
    rata = rata/arr.length;
    
    var pinter = [];

    for (i=0;i<arr.length;i++){
        if (arr[i].score >= rata){
            pinter.push(arr[i].name);
        }
    }
    
    if (pinter.length == 2){
        return `${pinter[0]} dan ${pinter[1]}`;
    }

    if (pinter.length>2){
        var display = ``;
        for (i=0;i<pinter.length;i++){
            if (i<pinter.length-2){
                display += pinter[i];
                display += `, `;
            }
            else if (i<pinter.length-1){
                display += pinter[i];
                display += ` dan `;
            }
            else{
                display += pinter[i];
            }
        }
    }
    return display;
}


const nativeFox = [
    {name : 'Fadhlan', score : 70},
    {name : 'Raka', score : 85},
    {name : 'Gio', score : 90},
    {name : 'Zahra', score : 75}
]

console.log(bestStudent(nativeFox)) // Gio dan Raka

const gloryFox = [
    {name : 'Arya', score: 100},
    {name : 'Ayu', score: 70},
    {name : 'Fadhil', score : 80},
    {name : 'Rahman', score : 40},
    {name : 'Josprima', score : 50}
]

console.log(bestStudent(gloryFox)) // Arya, Fadhil dan Ayu
