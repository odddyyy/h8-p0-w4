/**
 * CALCULATE TAX
 *  
 * Buathlah sebuah function yang akan membagi mobil berdasarkan pajak, dan menghitung pajak,
 * mobil tersebut.
 * 
 * pajak di tentukan dari harga mobil tersebut , berikut listnya:
 *  1. dibawah 250 jt = 10%
 *  2. dibawah 400 jt = 20%
 *  3. 400 jt ke atas = 30 % 
 *  
 *  Contoh bisa liat di test case
 * 
 *  RULES: 
 *  - Dilarang menggunakan .reduce .filter .map .regex .split .set 
 * 
 * 
 */

function main (cars) {
  // your code here
  var tax = [`30%`,'20%',`10%`];
  var display = {};

  var totalTax = 0;

  //creating template array based on the price of the car
  for (o=0;o<cars.length;o++){
    if (cars[o].price >= 400000000){
      display[tax[0]] = [];
    }
    else if (cars[o].price >= 250000000){
      display[tax[1]] = [];
    }
    else{
      display[tax[2]] = [];
    }
  }


  //function adding `Rp ` and `.` for thousands
  function formatNumber(num) {
    num = String(num);
    var revNum = ``;
    for (i=num.length-1;i>=0;i--){
        revNum += num[i];
    }
    var newRevNum = ``;
    for (i=0,x=1;i<revNum.length;i++,x++){
        if (x%3 == 0 && i<revNum.length-1){
            newRevNum += revNum[i];
            newRevNum += `.`;
        }
        else{
            newRevNum += revNum[i];
        }
    }
    var display = `Rp. `;
    for (i=newRevNum.length-1;i>=0;i--){
        display += newRevNum[i];
    }
    display += `,00`;
    return display;
  }

  //assigning tax to the cars and deleting the price property of the car
  for (m=0;m<cars.length;m++){
    if (cars[m].price >= 400000000){
      totalTax = cars[m].price * 0.3;
      cars[m].tax = formatNumber(totalTax);
      delete cars[m].price;
      display[tax[0]].push(cars[m]);
    }
    else if (cars[m].price >= 250000000){
      totalTax = cars[m].price * 0.2;
      cars[m].tax = formatNumber(totalTax);
      delete cars[m].price;
      display[tax[1]].push(cars[m]);
    }
    else{
      totalTax = cars[m].price * 0.1;
      cars[m].tax = formatNumber(totalTax);
      delete cars[m].price;
      display[tax[2]].push(cars[m]);
    }
  }
  return display;

}

console.log(main([
  { brand: "BMW", merk: "I8", type: "Coupe", price: 500000000 },
  { brand: "TOYOTA", merk: "Yaris", type: "Coupe", price: 250000000 },
  { brand: "HONDA", merk: "Civic", type: "Sedan", price: 220000000 },
  { brand: "HONDA", merk: "City", type: "Sedan", price: 300000000 },
  { brand: "MITSUBISHI", merk: "Pajero", type: "SUV", price: 600000000},
  { brand: "SUZUKI", merk: "Ertiga", type: "SUV", price: 180000000}
]))
// {
//   '30%': [
//     { brand: 'BMW', merk: 'I8', type: 'Coupe', tax: 'Rp. 150.000.000,00' },
//     { brand: 'MITSUBISHI', merk: 'Pajero', type: 'SUV', tax: 'Rp. 180.000.000,00' }
//   ],
//   '20%': [
//     { brand: 'TOYOTA', merk: 'Yaris', type: 'Coupe', tax: 'Rp. 50.000.000,00' },
//     { brand: 'HONDA', merk: 'City', type: 'Sedan', tax: 'Rp. 60.000.000,00' }
//   ],
//   '10%': [
//     { brand: 'HONDA', merk: 'Civic', type: 'Sedan', tax: 'Rp. 22.000.000,00' },
//     { brand: 'SUZUKI', merk: 'Ertiga', type: 'SUV', tax: 'Rp. 18.000.000,00' }
//   ],
// }

console.log(main([
  { brand: "DAIHATUS", merk: "AYLA", type: "Coupe", price: 130000000 },
  { brand: "TOYOTA", merk: "AGYA", type: "Coupe", price: 150000000 },
  { brand: "HONDA", merk: "JAZZ", type: "Coupe", price: 280000000 },
  { brand: "TOYOTA", merk: "AVANZA", type: "SUV", price: 300000000 },
]))
// {
//   '10%': [
//     { brand: 'DAIHATUS', merk: 'AYLA', type: 'Coupe', tax: 'Rp. 13.000.000,00' },
//     { brand: 'TOYOTA', merk: 'AGYA', type: 'Coupe', tax: 'Rp. 15.000.000,00' }
//   ],
//   '20%': [
//     { brand: 'HONDA', merk: 'JAZZ', type: 'Coupe', tax: 'Rp. 56.000.000,00' },
//     { brand: 'TOYOTA', merk: 'AVANZA', type: 'SUV', tax: 'Rp. 60.000.000,00' }
//   ]
// }