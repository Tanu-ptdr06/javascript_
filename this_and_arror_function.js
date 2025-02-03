const user={
    userName:"tanvi",
    price: 765,

    WelcomeMessage:function(){
        console.log(`${this.userName},welcome to this website`);
        console.log(this);
    }
}

user.WelcomeMessage()
//user.userName="Tanvis"
//user.WelcomeMessage()
