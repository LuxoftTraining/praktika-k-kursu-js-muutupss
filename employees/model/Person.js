export class Person {
    constructor(name, surname){
        this.name = name
        this.surname = surname
    }

    get fullName() {
        return this.name + " " + this.surname
    }

    get age() {
        if (!this._dateOfBirth) return ""
        let ageDiff = Date.now() - this._dateOfBirth.getTime()
        let ageDate = new Date(ageDiff)
        return "Возраст:"+
               Math.abs(ageDate.getUTCFullYear() - 1970)
       
    }
    set dateOfBirth(date) {
        this._dateOfBirth = new Date(date)
       }
       
    get dateOfBirth() {
    return this._dateOfBirth ? " <b>Дата рождения:</b> " + this.formatDate(this._dateOfBirth) : ""
    }

    toString() {
        const phones = this.phones?
         `Список телефонов: ${this.phones}` : ''
        return `
         ${this.fullName} \
         ${this.dateOfBirth} ${this.age} ${phones}`
    }

    static fromJSON(obj) {
        return Object.assign(new Person(), obj)
       }     

}