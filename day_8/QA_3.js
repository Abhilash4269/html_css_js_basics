//3. Write a “person” class to hold all the details.
class Person {
    constructor(name, age, sex, qualiafication) {
        this.name = name
        this.age = age
        this.sex = sex
        this.qualiafication = qualiafication
    }

}
var s1 = new Person("Abhilash", "24", "M", "UG")
let s2 = new Person("Sai", "18", "M", "PG")
var s3 = new Person("Hari", "24", "M", "PHD")

console.log(s1, s2, s3)