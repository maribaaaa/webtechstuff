let firstJavaCode = "Hello World";
console.log (firstJavacode);

var age=20;

//We are coding the Degree to Farenheit Temperation Conversion
/*multiple
line
comment*/

var degreeCelcious = 10
var degreeFarenheit;  
    TemperatureResult = (degreeCelcious * (9/5)) + 32;


let isEqual = (10 == 10);
let danielHeight = 6;
let chrisHeight = 5.5;
let gaint = 6;
let isTaller = (danielHeight == chrisHeight);
let isTallest = (danielHeight == gaint);



function calculateArea(width, height){
   
       area = width * height;
       

       return area;
}

calculateArea(2,8);

3; // = 3
1.5; // = 1.5

1 + 1; // = 2
0.1 + 0.2; // = 0.30000000000000004
8 - 1; // = 7
10 * 2; // = 20
35 / 5; // = 7

5 / 2; // = 2.5

10 % 2; // = 0
30 % 4; // = 2
18.5 % 7; // = 4.5



1 << 2; // = 4

(1 + 3) * 2; // = 8


Infinity; // result of e.g. 1/0
-Infinity; // result of e.g. -1/0
NaN; // result of e.g. 0/0, stands for 'Not a Number'

true;
false;

'abc';
"Hello, world";


!true; // = false
!false; // = true

1 === 1; // = true
2 === 1; // = false

1 !== 1; // = false
2 !== 1; // = true

1 < 10; // = true
1 > 10; // = false
2 <= 2; // = true
2 >= 2; // = true

"Hello " + "world!"; // = "Hello world!"

"1, 2, " + 3; // = "1, 2, 3"
"Hello " + ["world", "!"]; // = "Hello world,!"

13 + !0; // 14
"13" + !0; // '13true'

"a" < "b"; // = true


"5" == 5; // = true
null == undefined; // = true


"5" === 5; // = false
null === undefined; // = false

"This is a string".charAt(0);  // = 'T'

"Hello world".substring(0, 5); // = "Hello"

"Hello".length; // = 5

null;      
undefined; 

var someVar = 5;

someOtherVar = 10;

var someFourthVar = 2, someFifthVar = 4;

someVar += 5; 
someVar *= 10; 

someVar++; 
someVar--; 

var myArray = ["Hello", 45, true];

myArray[1]; 

myArray.push("World");
myArray.length; 


myArray[3] = "Hello";

myArray.unshift(3); 
someVar = myArray.shift(); 
myArray.push(3); 
someVar = myArray.pop(); 

var myArray0 = [32,false,"js",12,56,90];
myArray0.join(";"); 

myArray0.slice(1,4); 

myArray0.splice(2,4,"hi","wr","ld"); 

var myObj = {key1: "Hello", key2: "World"};

var myObj = {myKey: "myValue", "my other key": 4};

myObj["my other key"]; 

myObj.myKey; 

myObj.myThirdKey = true;

myObj.myFourthKey; 

var count = 1;
if (count == 3){
    
} else if (count == 4){

} else {
    
while (true){

}

var input;
do {
    input = getInput();
} while (!isValid(input));


for (var i = 0; i < 5; i++){

}

outer:
for (var i = 0; i < 10; i++) {
    for (var j = 0; j < 10; j++) {
        if (i == 5 && j ==5) {
            break outer;
            
        }
    }
}


var description = "";
var person = {fname:"Paul", lname:"Ken", age:18};
for (var x in person){
    description += person[x] + " ";
} 
 
var myPets = "";
var pets = ["cat", "dog", "hamster", "hedgehog"];
for (var pet of pets){
    myPets += pet + " ";
} 

if (house.size == "big" && house.colour == "blue"){
    house.contains = "bear";
}
if (colour == "red" || colour == "blue"){

}

var name = otherName || "default";

grade = 'B';
switch (grade) {
  case 'A':
    console.log("Great job");
    break;
  case 'B':
    console.log("OK job");
    break;
  case 'C':
    console.log("You can do better");
    break;
  default:
    console.log("Oy vey");
    break;
}








