function convertedString(word) {

    return  word.replace(/ /g,"_");
}
let originalString = 'I love Javascript';
let result = convertedString(originalString);

console.log(result);

