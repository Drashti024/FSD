class Person
{
    constructor(name)
    {
        this.name = name;
    }
    greet()
    {
        console.log(`Hello ${this.name}`);
    }
}
class Student extends Person
{
    constructor(name)
    {
        console.log("Creating student class");
        super(name);
    }
}
let student1 = new Student(`Akash`);
student1.greet();