let score ="100d"

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber); // not a number   NaN

// "33" => 33
// "33d" => NaN - nan of number 
// true => 1 / false => 0


let isloggedin = 1    // this variable boolean or not cheak as # Boolean variable (B) always capital
 
let booleanisloggedin = Boolean(isloggedin)// we are cheak here in boolean 
//console.log(booleanisloggedin);

// 1=> true ; 0=> false
// "" => false 
// "nikhil"=>  true


let sameNumber = 33 
let stringNumber = String(sameNumber)
// console.log(stringNumber);
//console.log(typeof stringNumber);

// ################### opration ####################


let str1 ="nikhil"
let str2 =" wagh"
let myString = str1+str2
//console.log(myString);


/*
The abstract operation ToPrimitive takes argument input (an ECMAScript language value) and optional 
argument preferredType (string or number) and returns either a normal completion containing an ECMAScript 
language value or a throw completion. It converts its input argument to a non-Object type. If an object is capable of converting to more than one primitive type, it may use the optional hint preferredType to favour that type. It performs the following steps when called:
*/
//console.log("3"+ 2);
//console.log(2+ "3");
//console.log(6+ 4+ "7");  

 

// console.log(null > 0);
// console.log(null >=0);
// console.log(null == 0);


// console.log(undefined > 0);
// console.log(undefined >= 0);
// console.log(undefined = 0);


// (===)  /=======strict cheak

console.log("2" ===2 );