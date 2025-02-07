//[{},{},{}]

const greeting="Hello World"
for(const greet of greeting){
    console.log(`each char is ${greet}`);
}


//maps
const map=new Map()
map.set('IN',"india")
map.set('USA',"america")
console.log(map);

//loop on map
for(const [key,val] of map){
    console.log(key);
}


//for in loop 
const object={
    js:'javascript',
    cpp:'c++',
    rb:"ruby"
}

for(const key in object){
    //console.log(key);//for accessing key
    console.log(object[key]);//for accessing value 

}



const coding=["jis","cpp","c","python"]
coding.forEach( function (item){
    console.log(item);
})//this is call back so there is no name




