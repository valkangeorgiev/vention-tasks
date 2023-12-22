function evenNumbers(numbers) {

    let evenNumbers = numbers.filter(number => number % 2 == 0);

    return evenNumbers
}
let numbersArray = [2, 4, 5, 7, 8];
let result = evenNumbers(numbersArray);

console.log(result);