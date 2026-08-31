const num = [1,2,3,4,5,6,7,8,9,10];

let Num = num.map((val)=> val *2);
console.log(Num);


//CHAINING

let chain_Item = num.
                    map((num)=> num +1).
                    filter((num)=> num >=5).
                    map((num)=> num * 2);
console.log(chain_Item);
