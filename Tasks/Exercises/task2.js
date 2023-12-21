function filterGeese(birds) {
    
    let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];

    
    let filteredGeese = birds.filter(bird => !geese.includes(bird));

    return filteredGeese;
}
let birdsArray = ["Mallard", "Hook Bill", "African", "Crested", "Pilgrim", "Toulouse", "Blue Swedish"];
let result = filterGeese(birdsArray);

console.log(result);