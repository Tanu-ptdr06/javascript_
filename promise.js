//way-1
const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('async task is complete');
        resolve()
    },1000)
})

promiseOne.then(function(){//consumption of promise
    console.log("promise consume");
    
})

//way-2
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("ays task2");
        resolve()
    },1000)
}).then(function(){
    console.log("async 2 resolved")
})



//
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        
    })
})

//----

