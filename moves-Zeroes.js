const numbers = [0,1,0,2,3,4,45,5];

let nums = numbers;

for(let i=0; i < nums.length; i++){
    let currentNo = nums[i]
    if(currentNo === 0){
        currentNo = nums - 1;
    }
}
console.log(nums)