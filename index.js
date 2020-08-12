/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)
var votingAge = '18';

if (votingAge >= 18) {
    console.log(true);
} else {
    console.log(false);
}


//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)
let drink = 'Soda';
let soda = 'burp'
let food = 'cheese'
let cheese = 'fart'
if (soda === 'burp') {
    drink = 'Cola'
}
console.log(drink);



//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

let str = "1999";

console.log(Math.floor(str))


//Task d: Write a function to multiply a*b 

function multiply (a, b) {
    return a*b;
}

console.log(multiply(1,2));




/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years 

function multiply (a, b) {
    return "I am " + a*b + " years old in dog years!";
}

console.log(multiply(33, 7));




/************************************************************** Task 3 **************************************************************/
//Dog feeder 
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year 
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight 
// 11 - 15 lbs - 3% of their body weight 
// > 15lbs - 2% of their body weight 

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight 
// 7 - 12 months 4% of their body weight

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

// puppies
// months old - percent of food from body weight
// .02 - .04 = 10%
// .05 - .07 = 5%
// .08 - .12 = 4%

// Adult > 1 year
// pounds - percent of food from body weight
// 0 - 5 = 5%
// 6 - 10 = 4%
// 11 - 15 = 3%
// 15 - > = 2%

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice 
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number 

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput;
    } else {
        console.log('I did not understand your entry. Please enter rock, paper, or scissors.');
    }
};

function getComputerChoice() {
    switch(Math.floor(Math.random()*3)) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'scissors';
            break;
        case 2:
            return 'paper';
            break;
    };
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return 'Tie!';
    } else if (userChoice === 'rock') {
        if (computerChoice === 'paper') {
            return 'Computer Wins!';
        } else {
            return 'You win!';
    }
  } else if (userChoice === 'paper'){
    if (compterChoice === 'scissors') {
      return 'Computer wins!';
    } else {
      return 'You win!';
    }
  } else if (userChoice === 'scissors') {
        if (computerChoice === 'rock') {
        return 'Computer wins!';
        } else {
            return 'You win!';
    }
  } 
};

function playGame() {
    var userChoice = getUserChoice('rock');
    var computerChoice = getComputerChoice()
    console.log(`you threw ${userChoice}`);
    console.log(`computer threw ${computerChoice}`);
    console.log(determineWinner(userChoice,computerChoice));
};
  
console.log(playGame());

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function multiply (c, d) {
    return c * d + " Miles";   
}

console.log(multiply(0.62137, 21));


//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters
  
function multiply(a, b) {
  return a * b + " CM";
}

console.log(multiply(0.032808, 20));



/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`


function annoyingSong(num) {
    let i = num;
    let thing = "bottles";
    for (i; i > 0; i--) {
        if (i === 1) {
            thing = "bottle";
        }
        let line1 = `${i} ${thing} of soda on the wall, ${i} ${thing} of soda.`;
        let line2 = `Take one down, pass it around, ${i - 1} bottles soda on the wall`;

        if ((i - 1)=== 1) {
            line2 = line2.replace("bottles", "bottle");
        }
        console.log(`${line1} ${line2}`)
    }
    
};
console.log(annoyingSong(9));
/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade 
//90s should be A 
//80s should be B 
//70s should be Cs 
//60s should be D 
//and anything below 60 should be F
  
function gradeCalculator(num) {
    let z = num;
    for (z = 100; z <= 100; z--) {
        while (z <= 100 || z >= 90) {
            console.log('A');
        }
        while (z <= 89 || z >= 80) {
            console.log('B');
        }
        while (z <= 79 || z >= 70) {
            console.log('C');
        }
        while (z <= 69 || z >= 60) {
            console.log('D');
        } 
        while (z <= 59) {
            console.log('F');
        }
    }
}

  console.log(gradeCalculator(5))
  

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays 
// try looking up the .includes() method





/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object





