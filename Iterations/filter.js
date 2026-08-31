const coding = ["js","cpp","java","python","ruby"];

// for each loop will not return any values
let item = coding.forEach((item)=>{
           // console.log(item);        
            return item;
})
//console.log(item);


const num = [1,2,3,4,5,6,7,8,9,10];

let newNum = num.filter((val)=> val > 4)
console.log(newNum);

let newArr = num.filter ((val)=>{
           return val >2
})
console.log(newArr);


console.log("Using forEach Loop");

let newNumArr = []
num.forEach((val)=>{
      if(val > 5){
        newNumArr.push(val)
        console.log(val);     
      }
})
console.log(newNumArr);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

 let myfilterBooks = books.filter((bk)=>{return bk.genre === "Non-Fiction" && bk.publish > 1989}) 
console.log(myfilterBooks);
