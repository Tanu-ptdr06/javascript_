//object
Object.create//constructor method

const mySym=Symbol("Key1")//creation of symbol
const jsUser={
    name:"tan",
    age:18,
    [mySym]:"mykey1",//creation of symbol
    location:"indore",
    email:"hfjkddjhfij",
    isLoggedIn:false


}
//ways to access data from object
console.log(jsUser.email)
console.log(jsUser["email"])
console.log(jsUser[mySym])//accessing the symbol


Object.freeze(jsUser)//this is for locking or freezing because no one can update on it
jsUser.email="chatgpt.com"//for udating value

console.log(jsUser["email"])

jsUser.greeting=function(){
    console.log("hello");
}
console.log(jsUser.greeting);


//const tinderUser=new Object()//singleton object
const tinderUser={} //non singleton object
tinderUser.id="123hej"
tinderUser.name="samy"
tinderUser.isLoggedIn=false
console.log(tinderUser)

//nested object declaration 
const regularUser={
    email:"gdjhsg",
    fullname:{
        userfullname:{
            firstname:"tan",
            lastname:"ptdr"

        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.email);

const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
//const obj3=Object.assign({},obj1,obj2)//merge two object
const obj3={...obj1,...obj2}//spread them in a single object
console.log(obj3);

const users=[
    {id:1,
    email:"gdfjhf"},
    {
      id:2,
    email:"gdfdfjhf " 
    },
    {id:1,
    email:"gdfjhf"
    }
]

console.log(users[1].email);