const n = 253875;
let temN = Math.abs(n)
while (temN > 0){
 let digit = temN % 10;
 console.log('digit: ', digit);

 temN = Math.floor(temN / 10)
 console.log(temN)
}