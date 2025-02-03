//immediately invoked function expression
//this is used for prevent from global scope pollution

//normal function
(function(){//named IIFE
    console.log("hey!!tanu");
})();


//arrow function
(() =>{//unnamed IIFE
    console.log("arrow function");
})();