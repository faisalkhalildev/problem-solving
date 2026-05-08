const numbers = [-1, -2, 1, 1, 11, 12];
let largest = numbers[-1];
let secondLarge = numbers[-Infinity];
for (let i = 0; i < numbers.length; i++) {
  let currentNo = numbers[i];
  // let currentS = numbers[i]
  if (currentNo > largest) {
    secondLarge = largest;
    largest = currentNo;
  } else if (currentNo > largest && currentNo !== largest) {
    secondLarge = currentNo;
  } else {
    currentNo = largest;
  }
}
console.log(secondLarge);
