function NewYearCount(n) {
  if (typeof n !== 'number' || isNaN(n)) {
    console.log("You can count only with numbers!");
  } else {
    if (n > 10) {
      console.log("Sorry, we count only with numbers 10 or less.");
    } else {
      for (let i = n; i >= 0; i--) {
        switch (i) {
          case 10:
            console.log('TEN');
            break;
          case 9:
            console.log('NINE');
            break;
          case 8:
            console.log('EIGHT');
            break;
          case 7:
            console.log('SEVEN');
            break;
          case 6:
            console.log('SIX');
            break;
          case 5:
            console.log('FIVE');
            break;
          case 4:
            console.log('FOUR');
            break;
          case 3:
            console.log('THREE');
            break;
          case 2:
            console.log('TWO');
            break;
          case 1:
            console.log('ONE');
            break;
          default:
            console.log('Happy New Year!');
        }
      }
    }
  }
}

NewYearCount(10);