function setusername(username){
  this.username= username

}
function createuser(username,email,password){
    setusername.call(this,username)

    this.email=email
    this.password=password
}
const chai=new createuser("chai","ghh","565")
console.log(chai);