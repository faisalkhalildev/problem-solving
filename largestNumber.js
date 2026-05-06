// const numbers = [1,22,11,33,23,44,909,39,90];
// const largestNo = {}

// for(let i = 0; i < numbers.length; i++){
//     const total = numbers[i]
//     // console.log(total)
//     const lar = total
//     if(lar >= total)

// }


const numbers = [1,2,3,4,5,6,7,8,9,8,7,65,2222]
let largestNo = numbers[0]
for(let i = 0 ; i < numbers.length ; i++){
    let currentNo = numbers[i]
    if(currentNo > largestNo){
        largestNo = currentNo;
    } else {
         largestNo = largestNo
    }
}
console.log("The largest is: " , largestNo)
