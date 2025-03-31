//stack overflow
/* class user{
    constructor(email,password){
        this.email=email;
        this.password=password
    }

    get password(){
        return this.password.toUpperCase()
    }
    set password(value){
        this.password=value.toUpperCase();
    }
}

const tanu=new user("dsh@fdhj","345")
console.log(tanu.password);"""
*/




class user{
    constructor(email,password){
        this.email=email;
        this.password=password
    }

    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value.toUpperCase();
    }
}

const tanu=new user("dsh@fdhj","345")
console.log(tanu.password);


