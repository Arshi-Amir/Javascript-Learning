const num = [1,2,3,4,5,6,7,8,9,10];

let totalNum_FullFunction = num.reduce(function (accumulator , currentvalue){
      console.log(`Acc: ${accumulator} and CurrentVal : ${currentvalue}`);
      
      return accumulator + currentvalue;
},0)
console.log(totalNum_FullFunction);


let totalNum_ArrowFunction = num.reduce((accumulator , currentvalue)=>{
      console.log(`Using Arrow Function , Acc: ${accumulator} and CurrentVal : ${currentvalue}`);
      
      return accumulator + currentvalue;
},0)
console.log(totalNum_ArrowFunction);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]
let total_price = shoppingCart.reduce(function (acc , currval){
                return acc + currval.price
},0)

console.log(`Total Price: ${total_price}`);
