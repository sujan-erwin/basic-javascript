//SuperType constructor function
class SuperType {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.friends = ["Ashwin", "Jadeja"];
    }

    getSuperName() {
        return `${this.firstName} ${this.lastName}`;
    }
}


//SubType prototype function
class SubType extends SuperType {

    //Inherit instance properties
    constructor(firstName, lastName, age) {
        super(firstName, lastName);
        this.age = age;
    }

    getSubAge() {
        return this.age;
    }
}

//Create SubType objects
var subTypeObj1 = new SubType("Virat", "Kohli", 26);
var subTypeObj2 = new SubType("Sachin", "Tendulkar", 39);

//Modify the friends property using the subTypeObj1
subTypeObj1.friends.push("Amit");

console.log(subTypeObj1.friends);//["Ahswin", "Jadega", "Amit"]
console.log(subTypeObj2.friends);//["Ashwin", "Jadega"]

//subTypeObj1
console.log(subTypeObj1.firstName); //Output: Virat
console.log(subTypeObj1.age); //Output: 26
console.log(subTypeObj1.getSuperName()); //Output: Virat Kohli
console.log(subTypeObj1.getSubAge()); //Output: 26

//subTypeObj2
console.log(subTypeObj2.firstName); //Output: Sachin
console.log(subTypeObj2.age); //Output: 39
console.log(subTypeObj2.getSuperName()); //Output: Sachin Tendulkar
console.log(subTypeObj2.getSubAge()); //Output: 39