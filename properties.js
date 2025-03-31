class user{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username : ${this.username}`);
    }
    
    createID(){
        return '123'
    }
}

const tanvii=new user("tanvii")
console.log((tanvii.createID())