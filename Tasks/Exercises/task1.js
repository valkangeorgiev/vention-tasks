
function findTheWordWithMostLetters(words) {
   
    let maxLength = 0;
    let mostLettersWords = [];

    for ( let word of words) {
        const length = word.length;
        if (length > maxLength) {
            maxLength = length;
            mostLettersWords = [word];
        } else if (length === maxLength) {
            mostLettersWords.push(word);
        }
    }

    if (mostLettersWords.length === 1) {
        console.log(`The word with the most letters is: ${mostLettersWords[0]}`);
    } else {
        console.log(`The words with the most letters are: ${mostLettersWords.join(', ')}`);
    }
}

const wordArray = ['Madrid', 'Stuttgart', 'Sofia', 'Varna', 'Dimitrovgrad'];
findTheWordWithMostLetters(wordArray);