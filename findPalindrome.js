let n = 4334;
let reverse = 0;
while(n >  0){
    remi = n % 10;
    reverse = (reverse * 10) + remi;
    n = Math.floor(n/10)
    
}
return reverse === n;