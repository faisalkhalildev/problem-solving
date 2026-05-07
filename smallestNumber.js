const nums = [-111,0,1,1,2,3,4,5,6,7,8,9,77, 0.000]
let smallest = nums[0]
// console.log(smallest)
for (let i = 0 ; i < nums.length; i++){
    let currentValue = nums[i]
    // console.log(currentValue)
    if(currentValue < smallest){
        smallest = currentValue
    } else {
        smallest = smallest
    }
}
console.log(smallest)