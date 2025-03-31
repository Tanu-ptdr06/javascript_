class user{
    constructor(usernamme,email,password){
        this.usernamme=usernamme;
        this.email=email;
        this.password=password
    }

    encryptpassword(){
        return `${this.password}abc`
    }
    changeusername(){
        return `${this.usernamme.touppercase()}`
    }
}

const chai=new user("chai","hfdhf","123")