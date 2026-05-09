const numbers = [1,1,2,3,4,5,6,7,8,9,-1,-2]
let smallestNo = numbers[0]
let secondNo = numbers[0]

for(let i = 0; i < numbers.length; i++){
    let currentNo = numbers[i]
    if(currentNo < smallestNo){
        smallestNo = currentNo
    } else if(smallestNo > currentNo && smallestNo < currentNo ){
      smallestNo = secondNo;
    } else {
        smallestNo = smallestNo;
    }
}
console.log(secondNo)