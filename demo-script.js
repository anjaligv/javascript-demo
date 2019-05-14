// let user = {
//   name: "John",
//   age: 30
// };

// let key = prompt("What do you want to know about the user?", "name");

// // access by variable
// alert( user[key] ); // John (if enter "name")


let user = { name: "John" };

let permissions1 = { canView: true };
let permissions2 = { canEdit: true };

// copies all properties from permissions1 and permissions2 into user
Object.assign(user, permissions1, permissions2);

// now user = { name: "John", canView: true, canEdit: tru

// let  age = prompt("what is your age?",18);

// let welcome = (age < 18) ?
// function() {alert("hello"); };
// function() {alert("Greetings");

// welcome();

// let user = {     // an object
//   name: "John",  // by key "name" store value "John"
//   age: 30        // by key "age" store value 30
// };
// let color = name.fontcolor("red");
// alert(user.name);


// let user = {
//   name: "John",
//   age: 30,
//   "likes birds": true  // multiword property name must be quoted
// };
// alert(user.name);

// let user ={};

// user["likes birds"] = true;//set

// alert(user["likes birdsss"]);//get

// function showPrimes(n) {
//   nextPrime: for (let i = 2; i < n; i++) {

//     for (let j = 2; j < i; j++) {
//       if (i % j == 0) continue nextPrime;
//     }

//     alert( i ); // a prime
//   }
// }
// function showPrimes(n) {

//   for (let i = 2; i < n; i++) {
//     if (!isPrime(i)) continue;

//     alert(i);  // a prime
//   }
// }

// function isPrime(n) {
//   for (let i = 2; i < n; i++) {
//   return a + b;
// }


// let a = 3 + 2;

// switch (a) {
//   case 4:
//     alert('Right!');
//     break;

//   case 3:                    // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert('The result is strange. Really.');
// }


// let arg = prompt("who is priminister of india?");
// switch (arg) {
//   case 'modi':
//     alert( 'correct' );
//     break;
//   default:
//     alert( 'wrong!');
//  }
// let browser;
// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }


// let userName = 'John';

// function showMessage() {
//   let message = 'Hello, ' + userName;
//   alert(message);
// }

// Hello, John

// let year = prompt('In which year was ECMAScript-2015 specification published?', '');
// if (year == 2015) {
//   alert( "That's correct!" );
// }
// else{
//   alert( "You're wrong!" );
// }


// let year = prompt('Enter Rwquird Information')
// if(year < 2015){
// 	alert('Too early');
// }
// else if (year > 2015) {
// 	alert('too let');
// }else{
// 	alert('exactly');
// }


// let ready;
// let age = prompt('how old are you');

// if (age > 18){
// 	ready = true;
// }else{
// 	ready=false;
// }
// alert(ready);	

// let message;
// let age = prompt('enter your age');

// if (age < 3) {
//   message = 'Hi, baby!';
// } else if (age < 18) {
//   message = 'Hello!';
// } else if (age < 100) {
//   message = 'Greetings!';
// } else {
//   message = 'What an unusual age!';
// }


// let sum = 0;

// while (true) {

//   let value = +prompt("Enter a number", '');

//   if (!value) break; // (*)

//   sum += value;

// }	
// alert( 'Sum: ' + sum );	


// let i=3;
// if (i > 5) {
//   alert(i);
// } else {
//   continue;
// }


// (i > 5) ? alert(i) : continue;



// let a = 3 + 2;

// switch (a)0 {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' );
//     break;
//   case 5:
//     alert( 'Too large' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }



// let a = "1";
// let b = 0;

// switch (+a) {
//   case b + 1:
//     alert("this runs, because +a is 1, exactly equals b+1");
//     break;

//   default:
//     alert("this doesn't run");
// }

// let i = 0; // we have i already declared and assigned

// for (; i < 3; i++) { // no need for "begin"
//   alert( i ); // 0, 1, 2
// }


// run begin
// let i = 0
// // if condition → run body and run step
// if (i < 3) { alert(i); i++ }
// // if condition → run body and run step
// if (i < 3) { alert(i); i++ }
// // if condition → run body and run step
// if (i < 3) { alert(i); i++ }
// // ...finish, because now i == 3

// let i = 0;

// for (; i < 3;) {
//   alert( i++ );
// }
// let age = prompt('How old are you?');

// alert(`You are ${age} years old!`); // You are 100 years old!


// alert("hello");
// alert('Hello'); alert('World');

// alert('Hello')
// alert('World')

// let message;
// message='hello anjali';
// alert(message);

// let user ='anjali' ,age=25,message='hello';
// alert(age);

// let user = 'John';
// let age = 25;
// let message = 'Hello';
// alert(message);



// var user = 'anjali',
//   age = 25,
//   message = 'Hello anjali';
//   alert(message);


//   let user = 'John'
//   , age = 25
//   , message = 'Hello john';
//   alert(message);



// let str = "Hello";
// let str2 = 'Single quotes are ok too';
// let phrase = `can embed ${str}`
// alert(phrase);


// alert(4+4);



//var age=21;
//var name="anjali";
//alert(age);
//alert(name);


// var num1=4;
// var num2=5;
// var result=num1+num2;
// alert(result);//9


// let x=1;
// x= -x;
// alert(x);//-1


// let x=1, y=3;
// alert(y-x);//2


// let s="my"+"string";
// alert(s);//mystring


// alert('1'+2);//12
// alert(2+1);//3

// alert(2 + 2 + '1' ); // "41" and not "221"


// alert(2-'1');//1
// alert('6'/'2');//3


// let x = 1;
// alert( +x ); // 1

// let y = -2;
// alert( +y ); // -2


// alert( +true ); // 1
// alert( +"" );   // 0




// let apples ="2";
// let oranges="4";
// alert(apples+oranges);

// let apples ="2";
// let oranges="4";
// alert(+apples + +oranges);


// let a,b,c;
// a=b=c=2+2;
// alert(a);
// alert(b);
// alert(c);


// let a = 1;
// let b = 2;

// let c = 3 - (a = b + 1);

// alert( a ); // 3
// alert( c ); // 0



// alert( 5 % 2 ); 


// alert( 2 ** 2 ); // 4  (2 * 2)
// alert( 2 ** 3 ); // 8  (2 * 2 * 2)
// alert( 2 ** 4 ); // 16 (2 * 2 * 2 * 2)


// let counter =2;
// counter++;
// alert(counter);

// let counter1 =2;
// counter1--;
// alert(counter1);


// let counter = 1;
// let a = ++counter; // (*)

// alert(a); // 2


// let counter = 0;
// counter++;
// ++counter;
// alert( counter ); 


// let counter = 0;
// alert( ++counter ); // 1


// let counter1 = 0;
// alert( counter1++ );


// let counter = 1;
// alert( 2 * ++counter );

// let counter = 1;
// alert( 2 * counter++ ); // 2, because counter++ returns the "old" value

// let counter = 1;
// alert( 2 * counter );
// counter++;


//  let a = 2 + 3;

// switch (a) {
//   case 3:
//     alert( 'Too small' );
//     break;
//   case 4:
//     alert( 'Exactly!' );
//     break;
//   case 5:
//     alert( 'Too large' );
//     break;
//   default:
//     alert( "I don't know such values" );
// }



// let a="1";
// let b=0;

// switch(+a){
// 	case b+1;
//     alert("this runs, because +a is 1, exactly equals b+1");
//     break;	


//     default:
//     alert("this doesn't run");
// }


// let a = 2 + 1;

// switch (a) {
//   case 4:
//     alert('Right!');
//     break;

//   case 3:                    // (*) grouped two cases
//   case 5:
//     alert('Wrong!');
//     alert("Why don't you take a math class?");
//     break;

//   default:
//     alert('The result is strange. Really.');
// }



// let arg = prompt("Enter a value?");
// switch (arg) {
//   case '0':
//   case '1':
//     alert( 'One or zero' );
//     break;

//   case '2':
//     alert( 'Two' );
//     break;

//   case 3:
//     alert( 'Never executes!' );
//     break;
//   default:
//     alert( 'An unknown value' );
// }


// switch (browser) {
//   case 'Edge':
//     alert( "You've got the Edge!" );
//     break;

//   case 'Chrome':
//   case 'Firefox':
//   case 'Safari':
//   case 'Opera':
//     alert( 'Okay we support these browsers too' );
//     break;

//   default:
//     alert( 'We hope that this page looks ok!' );
// }

// if(browser=='Edge'){
// 	alert("edge browser");

// 	}else if(browser=='Firefox'
// 		||browser=='Chrome'
// 		||browser=='Safari'
// 		||browser=='Opera'){
// 		alert("this is all browser support");

// 	}else{
// 		alert("error");
// 	}



// let a = +prompt('a?', '');

// switch (a) {
//   case 0:
//     alert( 0 );
//     break;

//   case 1:
//     alert( 1 );
//     break;

//   case 2:
//   case 3:
//     alert( '2,3' );
//     break;
// }



// var memes = 384;
//     var website = "Sabe";

//     console.log("I view " + memes + " memes a day.");
//     console.log("I use " + website + " every day.");

//  const MEMES = 100;
//     const WEBSITE = "Twitter";

//     console.log("I view " + MEMES + " memes a day.");
//     console.log("I use " + WEBSITE + " every day.");
//   var cars = 7;
//     console.log(cars);



//     var place = "Mexico City";

//     console.log(place.toLowerCase());



// var place = "Mexico City";

//     console.log(place.toUpperCase());


// var restaurant = "Chipotle";
// console.log(`My favorite restaurant is ${restaurant}!`);

//   var place = "Mexico City";
// console.log(place.toUpperCase());

//  var phrase = " time and";
//     var sentence = "I dominate in Fortnite" + phrase.repeat(3) + " time again.";

//     console.log(sentence);
// var phrase ="time and";
// var sentence ="i" + phrase.repeat(3) +"time angain";

//  var sentence = "The house is red.";
//     var newSentence = sentence.replace("red", "blue");

//     console.log(newSentence);


//     var sentence = "The tiger is red.";

//     console.log(sentence.includes("ttt"));
//     console.log(sentence.includes("tiger"));

// // var pizzaIsGood = true;
// //     var wholeFoodsIsCheap = false; booluliyan value

// const SIZE_XSMALL = Symbol();
//     const SIZE_SMALL  = Symbol();
//     const SIZE_MEDIUM = Symbol();
//     const SIZE_LARGE  = Symbol();
//     const SIZE_XLARGE = Symbol();

//     function getShirtsLeftInSize(size) {
//         if (size === SIZE_XSMALL) {
//             return 4;
//         } else if (size === SIZE_SMALL) {
//             return 6;
//         } else if (size === SIZE_MEDIUM) {
//             return 3;
//         } else if (size === SIZE_LARGE) {
//             return 7;
//         } else if (size === SIZE_XLARGE) {
//             return 12;
//         }
//     }

//     var mySize = SIZE_MEDIUM;
//     console.log("There are " + getShirtsLeftInSize(mySize) + " shirts left in your size.");
    
//     var pineapples;

//     console.log(pineapples);


//     var blueCars = 4;
//     var redCars = 5;

//     var totalCars = blueCars + redCars;

//     console.log("I have " + totalCars + " cars!");


//     var burritos = 3;
//     burritos++; // adds 1

//     console.log("I have " + burritos + " burritos!");

//     var books = 10;
//     books += 20; // adds 20 books

//     console.log(books);
    
//     var people = 20;
//     var peoplePerCar = 6;

//     var peopleInLastCar = people % peoplePerCar;

//     console.log("The last car will have " + peopleInLastCar + " people in it.");
    
//      var x = (5 * 3) + 10 / 2;

//     console.log("The value of x is " + x + ".");

//     var euler = Math.E;
//     console.log(euler);

//      var pi = Math.PI;
//     console.log(pi);

//     var a = 6;
//     var b = -13;
//     console.log("Absolute value of a is " + Math.abs(a) + ".");
//     console.log("Absolute value of b is " + Math.abs(b) + ".");

//     var decimal = 24.942;
//     var floor = Math.floor(decimal);
//     console.log("The value of floor is " + floor + ".");
    
//      var decimal = 13.37;
//     var ceiling = Math.ceil(decimal);
//     console.log("The value of ceiling is " + ceiling + ".");

//     var number = Math.log(1);
//     console.log("The value of number is " + number + ".");
    
//     var number = Math.max(14, 349);
//     console.log(number);

//      var number = Math.min(53, 94);
//     console.log( number);

//      var number = Math.pow(3, 2);
//     console.log("The value of number is " + number + ".");
    
//      var random = Math.random();
//     console.log("The value of random is " + random + ".");

//     var rounded = Math.round(3.1459);
//     console.log("The value of rounded is " + rounded + ".");

//      var root = Math.sqrt(49);
//     console.log("The value of root is " + root + ".");
    
//     //logic 
//     console.log(5 === 5);

//     var pears = 40 / 2;
//     console.log(20 === pears);

//     console.log(17 === 10);

//      console.log(9 !== 7);

//     var oranges = 5 * 6;
//     console.log(30 !== oranges);

//     console.log(57 !== 57);

//     console.log(6 < 4);
//     console.log(8 < 13);

//     var books = 32;
//     console.log(books > 30);
//     console.log(books > 50);

//      console.log(29 <= 94);//true
//     console.log(13 <= 9);//false

//     console.log(32 >= 32);//true
//     console.log(42 >= 85);//false
    
    
//     var candy = 110;

//     if (candy >= 100) {
//         console.log("You got a cavity!");
//     }

//     var candy = 80;

//     if (candy >= 100) {
//         console.log("You got a cavity!");
//     }

//     var candy = 80;

//     if (candy >= 100) {
//         console.log("You got a cavity!");
//     } else {
//         console.log("You didn't get a cavity! Nice!");
//     }
    

//     var candy = 80;

//     if (candy >= 100) {
//         console.log("You got a cavity!");
//     } else if (candy >= 95) {
//         console.log("You almost got a cavity. Be careful!");
//     } else if (candy >= 75) {
//         console.log("You should eat less candy!");
//     } else {
//         console.log("You didn't get a cavity! Nice!");
//     }
    

//      var number = 25;
//     var isEven = (number % 2 === 0) ? "Yes" : "No";
//     console.log("Is " + number + " an even number? " + isEven);



//      function getFruitByColor(color) {
//         switch (color) {
//             case "red":
//                 return "apple";
//                 break;
//             case "yellow":
//                 return "banana";
//                 break;
//             case "orange":
//                 return "orange";
//                 break;
//             case "green":
//                 return "pear";
//                 break;
//             default:
//                return "grape";
//         }
//     }

//     var favoriteColor = "orange";
//     var fruit = getFruitByColor(favoriteColor);

//     console.log("I want to eat a " + fruit);
    
//     var wearingShoes = true;
//     var needsTying = true;

//     if (wearingShoes && needsTying) {
//         console.log("I should tie my shoes!");
//     }
    
    

//     var thereIsSnickers = false;
//     var thereIsSkittles = true;

//     if (thereIsSnickers || thereIsSkittles) {
//         console.log("I'm glad there's candy in this house!");
//     }


//     var temperature = 50;
//     var itIsHot = temperature > 70;

//     if (!itIsHot) {
//         console.log("I will wear my boots today!");
//     }