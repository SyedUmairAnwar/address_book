class AddessBook{
    constructor(...param){
        this.firstName=param[0]
        this.lastName=param[1]
        this.city=param[2]
        this.state=param[3]
        this.pincode=param[4]
        this.phonenno=param[5]
        this.email=param[6]
    }set(firstName){
        this._firstName=firstName
    }
    get(){return this._firstName}
    set(lastName){this._lastName=lastName}
    get(){return this._lastName}
    set(city){this._city=city}
    get (){return this._city}
    set(state){this._state=state}
    get(){return this._state}
    set(pincode){this._pincode=pincode}
    get (){return this._pincode}
    set (phonenno){this._phonenno=phonenno}
    get(){return this._phonenno}
    set(email){this._email=email}
    get(){return this._email}
    toString(){
        return "First Name "+this.firstName+" last name "+this.lastName+" city "+this.city+" state "+this.state+" pincode "+this.pincode+" phone no "+this.phonenno+" email "+this.email
    }
}
let p1=new AddessBook("syed","umair","bhubneshwar","odisha",754221,8908922336,"umar101@gmail.com")
console.log(p1.toString())