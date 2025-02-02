function funOne(){
    console.log("h")
    console.log("t")
    console.log("a")
    
}

funOne()

function addTwoNumber(number1,number2){
    console.log(number1+number2);
}

addTwoNumber(3,5)

function loginUser(username){
    return `${username} just logged in`
}
console.log(loginUser("tan"));//when we pass not any value them it show undefined

function calculateprice(...num1){//
return num1;
}
console.log(calculateprice(2,4,5));