// Define a class and export it to access from outside the file
export class TSDemo{

    main() :void { // method that doesn't return any value
        // Define a variable
        let x: number = 3;
        let name: string = 'nilesh';
        let multilineString = `This is a 
        multiline string.`
        let y = 4; // No need to specify type as type is inferred

        // Equality
        console.log(3 == 3); // true
        console.log(3 === 3); // true

        // Array
        let numbers: number[] = [1,2,3,4];
    }

    add(num1: number, num2: number): number{ // Define function with typed params and return type
        return num1 + num2;
    }
}

let demo = new TSDemo();
demo.main();

class Student {
    name: string;
    rollNum: number;
    constructor(name: string, rollNum: number){
        this.name = name;
        this.rollNum = rollNum;
    }
}

let student: Student;
student = new Student('nilesh', 1);
console.log('Student name (before): '+student.name);
student.name = 'Nilesh Miskin';
console.log('Student name (after): '+student.name);

interface Human {
    name: string; // Compulsory
    sirname?: string; // Optional to implement
}

class Person implements Human {
    public name: string;
}

let p = new Person();
p.name = 'Nilesh';
console.log('Name of person is ' + p.name);
// Template strings
console.log(`Name os person is ${p.name}`);


