// const userName = 'sakthi';
// // userName = 'Sakthivel';
// let age = 30;

// age = 45;

// function c(a: number, b: number) {
//     let result;
//     result = a + b;
//     return result;
// }

// if (age > 20) {
//     let isOld = true;
// }

// console.log(isOld);

// console.log(result);

// const c = (a: number, b: number =6) =>  a + b;

// const printOutput:  (a: string | number) => void = output => console.log(output)

// const button = document.querySelector('button');

// if(button) {
//     button.addEventListener('click', event => console.log(event));
// }

// printOutput(c(8));

const hobbies = ['sports', 'music', 'coding']
const activeHobbies = ['dancing']

activeHobbies.push(...hobbies);

const person = {
    firstName: 'sakthi',
    age: 23
}

const copiedPerson = { ...person };

const add = (...numbers: number[]) => {
   return  numbers.reduce((curResult, curValue) => {
        return curResult + curValue;
    }, 0);
}

const addedNumbers = add(7, 3, 9, 3.5);
console.log(addedNumbers);

const [hobby1, hobby2, ...remainingHobbies] = hobbies;

console.log(hobbies, hobby1, hobby2);

const { firstName: userName, age } = person;

console.log(userName, age, person)

