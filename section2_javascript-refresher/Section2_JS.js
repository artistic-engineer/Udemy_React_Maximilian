//1. let & const
const myName = 'Max'
console.log(myName);
let myName1 = 'Min';
console.log(myName1);
// myName = 'change';

//2. Arrow Functions
const multiply = number => number * 3;
console.log(multiply(5));

//3. Class
class Human {
    constructor(gender) {
        this.gender = gender;
    }

    printGender() {
        console.log(this.gender);
    }
}

class Person extends Human {
    constructor(name) {
        super('female');
        this.name = name;
        //this.gender = 'female';
    }

    printMyName() {
        console.log(this.name);
    }
}

const person = new Person('Min');
person.printMyName();
person.printGender();

//4. Classes, Properties and Methods
class Human1 {
    gender = 'male';

    printGender = () => {
        console.log(this.gender);
    }
}

class Person1 extends Human1 {
    name = 'Max';
    gender = 'female';

    printMyName = () => {
        console.log(this.name);
    }
}

const person1 = new Person1();
person1.printMyName('haha');
person1.printGender();

// 5. The Spread & Rest Operator
const numbers = [1,2,3];
const newNumbers = [...numbers, 4];
console.log(newNumbers);

const person_5 = {
    name: 'Max'
};
const newPerson = {
    ...person,
    Age: 30
}
console.log(newPerson);

const filter = (...args) => {
    return args.filter(el => el === 1 || el === 3);
}
console.log(filter(1,2,3,4))

//6. Destructuring
const numbers_6 = [1,2,3];
[num1, ,num3] = numbers;
console.log(num1, num3);

//7. Reference and Primitive Types Refresher
const number_7 = 1;
const num2 = number_7;
console.log(num2);

const person_7 = {
    name: 'Max'
};
const secondPerson = {
    ...person_7
};
person.name = 'Manu';
console.log(secondPerson);

//8. Refreshing Array Function
const numbers_8 = [1,2,3];
const doubleNumArray = numbers_8.map((num) => {
    return num * 2;
});
console.log(numbers_8);
console.log(doubleNumArray);
