class AddessBook {
    constructor(...param) {
        this.firstName = param[0]
        this.lastName = param[1]
        this.city = param[2]
        this.state = param[3]
        this.pincode = param[4]
        this.phonenno = param[5]
        this.email = param[6]
    } set(firstName) {
        let n = RegExp("^[A-Z]{1}[a-z]{2,}")
        if (n.test(firstName)) {
            this._firstName = firstName
        }
    }
    get() { return this._firstName }
    set(lastName) {
        let n = RegExp("^[A-Z]{1}[a-z]{2,}")
        if (n.test(lastName)) {
            this._lastName = lastName
        }
    }
    get() { return this._lastName }
    set(city) {
        let n = RegExp("^[A-Z]{1}[a-z]{2,}")
        if (n.test(city)) {
            this._city = city
        }
    }
    get() { return this._city }
    set(state) {
        let n = RegExp("^[A-Z]{1}[a-z]{2,}")
        if (n.test(state)) {
            this._state = state
        }
    }
    get() { return this._state }
    set(pincode) {
        let p = RegExp("^[0-9]{6}$")
        if (p.test(pincode)) {
            this._pincode = pincode
        }
    }
    get() { return this._pincode }
    set(phonenno) {
        let p = RegExp("^[0-9]{10}$")
        if (p.test(phonenno)) {
            this._phonenno = phonenno
        }
    }
    get() { return this._phonenno }
    set(email) {
        let e = RegExp("^[a-zA-Z0-9]?[.?!#$&]*[A-za-z0-9][@][a-z]{6}[.][a-z]{2,}[.]*[a-z]*$")
        if (e.test(email)) {
            this._email = email
        }
    }
    get() { return this._email }
    toString() {
        return "\nFirst Name " + this.firstName + " last name " + this.lastName + " city " + this.city + " state " + this.state + " pincode " + this.pincode + " phone no " + this.phonenno + " email " + this.email
    }
}
let p1 = new AddessBook("syed", "umair", "bhubneshwar", "odisha", 754221, 8908922336, "umar101@gmail.com")
console.log(p1.toString())
let personArray = new Array()
personArray.push(new AddessBook("syed", "Awar", "bhubneshwar", "odisha", 724111, 8908922336, "abc@gmail.com"))
personArray.push(new AddessBook("abx", "chf", "cuttack", "odisha", 754221, 8908922336, "hdhf@gmail.com"))
personArray.push(new AddessBook("amil", "akshjay", "patna", "bihar", 123456, 1234567890, "mddk@gmail.com"))
personArray.push(new AddessBook("umair","anwar","puri","odisha",754221,9040106213,"anwair@Spykee.com"))
console.log("the array is ", personArray)
let index = personArray.findIndex(contact => contact.phonenno == 1234567890)
console.log(index)
personArray[index].phonenno = 7605902978
console.log(personArray.toString())
let person_index = personArray.findIndex(contact => contact.firstName == "abx")
console.log(person_index)
personArray.splice(person_index, person_index)
console.log(personArray.toString())
let no_of_contact = personArray.length
console.log("The no of contact is ", no_of_contact)
//uc7
let dup_count = 0
function duplicate(count) {
    if (count.firstName == "syed")
        dup_count++
    return dup_count
}
personArray.forEach((contact)=>duplicate(contact))
if (dup_count==0)console.log("not a duplicate ")
else console.log("Duplicate contact")
//uc8
let search_person=personArray.findIndex(search=>search.city=="patna")
let personF=personArray[search_person].firstName
let personL=personArray[search_person].lastName
console.log("First name is ",personF," last name is ",personL)
//uc9
let view_person=personArray.filter((book)=>book.state=="odisha").reduce((total,book)=>book.firstName+" "+book.lastName,0)
console.log(view_person)
//uc10
let no_of_state=personArray.filter((book)=>book.state=="odisha").length
console.log("No of per son from odisha",no_of_state)
//uc11 sorting by person name
console.log("sorting on the basic of name\n")
for(let book in personArray){
    personArray.sort(book.firstName)
}
personArray.forEach((count)=>console.log(count.toString()))
//uc12 sorting by sort by city,state,pincode
console.log("sorting on the basis of city \n")
for(let book in personArray){
    personArray.sort(book.city)
}
personArray.forEach((count)=>console.log(count.toString()))
console.log("sorting on the basis of state\n")
for(let book in personArray){
    personArray.sort(book.state)
}
personArray.forEach((count)=>console.log(count.toString()))
console.log("sorting on the basis of pincode\n")
for(let book in personArray){
    personArray.sort(book.pincode)
}
personArray.forEach((count)=>console.log(count.toString()))