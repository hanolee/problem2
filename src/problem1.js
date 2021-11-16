//dummy data set 
export const num = 100;
const data = new Array(num);

for(var i = 1; i < num+1; i++){
    data[i-1] = String(i);
}

console.log("Dummy Data is set", data);

//Problem1 Solving

//변수 선언
export const limitOfTx = 10; 
const numofElement = (num%limitOfTx == 0) ? num/limitOfTx : Math.floor(num/limitOfTx)+1 ;

export const setOfTx = new Array(numofElement);

console.log("set of Tx is ready");

for(var k = 0; k < numofElement ; k ++){
    setOfTx[k] = data.slice(k*numofElement, (k+1)*numofElement);
}
console.log(setOfTx);


