function isSame(str1,str2){
const str = str1;
const total = {}
for(let i = 0; i < str.length; i++){
    const catched = str[i]
    if(total[catched]){
        total[catched] += 1
    } else {
        total[catched] = 1
    }
}
 const strr = str2
 for(let j=0; j<strr.length; j++){
    let catcheded = strr[j]
    if(total[catcheded]){
        total[catcheded] -= 1
    } else{
      total[catcheded] = 1
    }
}
console.log(total)
}
isSame("act" , "cat")