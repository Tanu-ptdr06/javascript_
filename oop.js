// javascript and classes


//object literal>>>  it is a literally a Object creation

const user={            //creation of object literal
    userName:"tanu",
    logincount:8,
    signed_in : true,

    getuserDetails: function(){
        console.log("gdgsfjdgfjdhgdh");
    }
}
console.log(user.logincount);
user.getuserDetails();  // ✅ This actually calls the function

function UserAct(userName,logincount,signed_in){
    this.userName=userName;     //here we use this for defining variable name of same paramenter name
    this.logincount=logincount;

    return this
}
const userone=UserAct("ptdr",9)
const usertwo=new UserAct("ptdrrrrrr",9)// use of new is that if we write it with new it does not chnage the previous one ,previous one is should be remain same and new object is create 
console.log(userone);

