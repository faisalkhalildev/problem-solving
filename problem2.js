function isSame(str1,str2){
    if(str1.length !== str2.length){
        return false
    }
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
    if(!total[catcheded]){
        return false
    } else{
      total[catcheded] -= 1
    }
}
  return true;
}
isSame("act" , "cataaa")