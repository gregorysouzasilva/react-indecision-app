class Person {
    constructor(name = 'Anonymus', age = 0) {
        this.name = name;
        this.age = age;
    }

    getGreeting () {
        return `Hi. I am ${this.name}!`;
    }

    getDescription () {
        return `${this.name} is ${this.age} years(s) old`;
    }
}

class Traveler extends Person{
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }

    getGreeting () {
        let greeting =  super.getGreeting();
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        return greeting;
    }
}

const me = new Traveler('Gregory Souza', 35, 'Vancouver');
console.log(me.getGreeting());
console.log(me.getDescription());

const other = new Traveler('John', 18);
console.log(other.getGreeting());
console.log(other.getDescription());

