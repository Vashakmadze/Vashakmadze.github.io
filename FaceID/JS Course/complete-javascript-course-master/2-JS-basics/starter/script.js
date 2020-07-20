/**************************
 * Variables And Data Types
*/

// var firstName = 'John';
// console.log(firstName);

// var lastName = 'Smith';
// var age = 28;

// var fullAge = true;
// console.log(fullAge);

// var job;
// console.log(job);

// job = 'teacher';
// console.log(job);

// Variable naming rules
// var _3years = 3;
// var johnMark = 'John and Mark';

/**************************************
 * Variable mutation and type coercion
 */
// var firsName = 'John';
// var age = 28;

// console.log(firsName + ' ' + age)

// var job, isMarried;
// job = 'teacher';
// isMarried = false;

// console.log(firsName + ' is a ' + age + ' year old ' + job + ' is he married' + ' ' + isMarried);

// // Variable mutation
// age = 'twent eight';
// job = 'driver';

// alert(firsName + ' is a ' + age + ' year old ' + job + ' is he married' + ' ' + isMarried);

// var lastName = prompt('What is his last name?');
// console.log(firsName + ' ' + lastName);

/*****************************************
 * Basic operators
 */

//   var year, yearJohn, yearMark;
//   year = 2020;
//   ageJohn = 30;
//   ageMark = 35;

  //math operators
//   yearJohn = year - ageJohn;
//   johnMark = year - ageMark;

//   console.log(yearJohn);

//   console.log(year + 2);
//   console.log(year * 2);
//   console.log(year / 10);

 // Logical operators
//  var johnOlder = ageJohn < ageMark;
//  console.log(johnOlder);

 // Typeoff operator
//  console.log(typeof johnOlder);
//  console.log(typeof ageJohn);
//  console.log(typeof 'Mark is older than John');

//  var x;
//  console.log(typeof x);

/*********************************************
 * Operator Precedence
 */

//  var now = 2020;
//  var yearJohn = 1989;
//  var fullAge = 18;

 // Multiple operators
//  var isFullAge = now - yearJohn >= fullAge;
//  console.log(isFullAge);

 // Grouping
//  var ageJohn = now - yearJohn;
//  var ageMark = 37;
//  var average = (ageJohn + ageMark) / 2;
//  console.log(average);

 // Multiple assignments
//  var x, y;
//  x = y = (3 + 5) * 4 -6; // 8 * 4 -6 // 32 - 6 // 26
//  console.log(x, y);

 // More operators
//  x *= 2;
//  console.log(x);
//  x += 10;
//  console.log(x);
//  x += 1; // x++
//  console.log(x);
//  x--;
//  console.log(x);

/**********************************
 * Coding Challenge
 */

 // BMI = mass / height^2 = mass / ( height * height)
 // 1.
//  var massMark = 78; //kg
//  var heightMark = 1.69; // meters

//  var massJohn = 92; //kg
//  var heightJohn = 1.95; // meters

//  var BMIMark = massMark / (heightMark * heightMark);
//  var BMIJohn = massJohn / (heightJohn * heightJohn);
// console.log(BMIMark, BMIJohn);

//  var markHigherBMI = BMIMark > BMIJohn;
//  console.log('Is Mark Bmi higher thann john ' + markHigherBMI)

/*************************************
 * Coding Challange
 */
// var mikeTeamGameOne = 89;
// var mikeTeamGameSecond = 120;
// var mikeTeamGameThird = 103;

// var johnTeamGameOne = 116;
// var johnTeamGameSecond = 94;
// var johnTeamGameThird = 123;


// function avarageScore(){
//   var avarageScoreM = (mikeTeamGameOne + mikeTeamGameSecond + mikeTeamGameThird) / 3;
//   var avarageScoreJ = (johnTeamGameOne + johnTeamGameSecond +johnTeamGameThird) / 3;

//   if( avarageScoreM > avarageScoreJ) {
//     console.log('Mikes Team Wins with ' + ' ' + avarageScoreM + ' ' + 'points')
//   } else if( avarageScoreJ > avarageScoreM) {
//     console.log('Johns Team Wins with' + ' ' + avarageScoreJ + ' ' + 'points')
//   } else {
//     console.log('Its a draw')
//   }
// }
// avarageScore();

/********************************
 * Coding CHallange
 */
//  function tipCalculator(bill) {
//    var Percentage;
//    if (bill < 50) {
//      Percentage = .2;
//    } else if (bill >= 50 && bill < 200) {
//      Percentage = .15;
//    } else {
//      Percentage = .1;
//    }
//    return Percentage * bill;
//  }
 
//  var bills = [124, 48, 268];
//  var tips = [
//    tipCalculator(bills[0]),
//    tipCalculator(bills[1]),
//    tipCalculator(bills[2])];

/*****************************
 * Objects
 */
// var john = {
//   firstName: 'John',
//   lastName: 'Smith',
//   birthYear: 1990,
//   family: ['jane', 'Mark', 'Bob', 'Emilily'],
//   job: 'teacher',
//   isMarried: false,
//   calcAge: function() {
//     this.age = 2020 - this.birthYear;
//   }
// }
// john.calcAge()
// console.log(john);



// console.log(john['lastName']);
// // mutating
// john.job = 'driver';

/******************************
 * Coding CHallange
 */

//  var Mark = {
//    fullName : 'Mark Buffalo',
//    mass : 93,
//    height : 1.95,
//    calcBMI: function() {
//      this.bmi = this.mass / (this.height / this.height)
//      return this.bmi;
//    }
//  }

//  var John = {
//    fullName : 'John Buffalo',
//    mass : 200,
//    height : 1.69,
//    calcBMI: function() {
//     this.bmi = this.mass / (this.height / this.height)
//     return this.bmi;
//   }
//  }
 
//  function higherBMI() {
//    if ( Mark.calcBMI() > John.calcBMI()) {
//      console.log( Mark.fullName + 's' + 'BMI Is Higher Then Johns and equels to' + ' ' + Mark.calcBMI());
//    } else if ( John.calcBMI() > Mark.calcBMI()) {
//     console.log( John.fullName + 's' + 'BMI Is Higher Then Marks and equels to' + ' ' + John.calcBMI());
//    } else {
//      console.log('There BMIs Are Equel');
//    }
//  }

//  higherBMI();
/***********************************88
 * Loops and iteration
 */

// for ( var i = 0; i < 10; i++) {
//   console.log(i);
// }
// var john = ['john', 'smith', 1990, 'designer', false];

// for ( var i = 0; i < john.length; i++) {
//   if(typeof john[i] !== 'string') continue;
//   console.log(john[i]);
// }


// // looping backwards
// for ( var i = john.length - 1; i>=0; i--) {
//   if(typeof john[i] !== 'string') continue;
//   console.log(john[i]);
// }
// var i = 0;
// while ( i < john.length) {
//   console.log(john[i])
//   i++;
//   break
// }
/******************************88888888
 * Coding Challange
 */
var john = {
  fullname : 'John Smith',
  bills : [124, 48, 268, 180, 42],
  calcTips: function() {
    this.tips = [];
    this.finalValue = [];

    for (var i = 0; i < this.bills.length; i++ ) {
      
      var Percentage;
      var bill = this.bills[i];
      
      if(bill[i] < 50) {
        Percentage = .2;
      } else if (bill[i] < 200) {
        Percentage = .15;
      } else {
        Percentage =.1;
      }

      this.tips[i] = bill * Percentage;
      this.finalValue[i] = bill + bill * Percentage;
    }
  }
}

john.calcTips();
console.log(john);