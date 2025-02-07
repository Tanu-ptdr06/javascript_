//filter
const mynums=[1,2,34,5,6,7,8,9]
const newnums=mynums.filter((num)=>num>4)
console.log(newnums);

//map
const nums=[1,2,3435,546,34,23,12]
const newnum=nums.map((num)=>num+10)
console.log(newnum);

//chaining
const neww=nums.map((num)=>num*10).map((num)=> num+1).filter ( (num)=>num>=40)
console.log(neww);


//reduce through function
const arr=[1,2,3]
const myTotal=arr.reduce(function (acc,currval){
    console.log(`acc:${acc} and currval: ${currval}`);
    return acc + currval
},9);
console.log(myTotal);



//reduce through arrow function
const arr2=[2,3,4]
const mynewarr=arr2.reduce((valu,carval)=>{
    console.log(`acc:${valu} and cur:${carval}`);
    return valu + carval
},1)

console.log(mynewarr);

