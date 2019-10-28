// const getFirstName = (fullName) => {
//     return fullName.split(' ')[0];
// }

// const getFirstName2 = (fullName) => fullName.split(' ')[0];
// console.log(getFirstName2('Gregoryaaa Souza'));

const multiplier = {
    numbers : [1,4,5,7,8,9],
    multiplyBy : 5,
    multiply() {
        return this.numbers.map((number) => number * this.multiplyBy);
    }
};
console.log(multiplier.multiply());