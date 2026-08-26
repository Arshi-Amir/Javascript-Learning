// IIFE — Immediately Invoked Function Expression

// Reason for creation 
//1- Need to execute immediatley after creation
//2- Dont want pollution from global scope variables.they can cause issue so to remove that we used iife .Keep its internal variables scoped inside it

//Named IIFE
(function DBConnection (){
    console.log("DB Connected");
    
})();

//(function wrapped)(function call);
(()=>{
    console.log("DB Connected Arrow func");
})();

(()=>{
    console.log("DB Connected Arrow func Two");
})();


((name)=>{
    console.log(`${name} DB Connected Arrow func Three`);
})("sam")