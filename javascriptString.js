//Template Strings
let text = `He's often called "Johnny"`;

//String Length
let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text1.length;

//Strings as object
let x = "John";
//also
let y = new String("John");

//comaprison in 2 Strings
let x = "John";
let y = new String("John");  // true
console.log(x == y)

let x = "John";
let y = new String("John");   //false
console.log(x === y)

let x = new String("John");
let y = new String("John");   //false
console.log(x == y)

let x = new String("John");
let y = new String("John");   //false  //Comparing two JavaScript objects always returns false.
console.log(x === y)


//String methods
//LENGTH
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

//String charAt()
let text = "HELLO WORLD";
let char = text.charAt(0);
console.log(char)

//at() -- ES2022 introduced String at()
const name = "W3Schools";
let letter = name.at(2)
console.log(letter)

//Get the third letter of name:
const name = "W3Schools";
let letter = name[2];

//string slice()
//slice(start, end) ,slice() extracts a part of a string and returns the extracted part in a new string.
let text = "Apple, Banana, Kiwi";
let part = text.slice(7, 13); //Banana

let text = "Apple, Banana, Kiwi";
let part = text.slice(7);  //Banana, Kiwi

let text = "Apple, Banana, Kiwi";
let part = text.slice(-12); //Banana, Kiwi

let text = "Apple, Banana, Kiwi";
let part = text.slice(-12, -6); //Banana

//SubString
//substring() is similar to slice().
//The difference is that start and end values less than 0 are treated as 0 in substring().
//retuens new String
let str = "Apple, Banana, Kiwi";
let part = str.substring(7, 13); //Banana

//substr
//The difference is that the second parameter specifies the length of the extracted part.
let str = "Apple, Banana, Kiwi";
let part = str.substr(7, 6); //Banana

let str = "Apple, Banana, Kiwi";
let part = str.substr(7);  //Banana, Kiwi

let str = "Apple, Banana, Kiwi";
let part = str.substr(-4);  //start from end "Kiwi"


//String Concat
//Strings are immutable: Strings cannot be changed, only replaced.
let text1 = "Hello";
let text2 = "World";
let text = text1.concat(' ', text2)

//JavaScript repeat
let text = "Hello world!"; 
let result = text.repeat(2); //Hello world!Hello world! 

//replace
let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft", "W3Schools");

//To replace all matches, use a regular expression with a /g flag (global match):
let text = "Please visit Microsoft and Microsoft!";
let newText = text.replace(/Microsoft/g, "W3Schools");

text = text.replaceAll("Cats","Dogs");
text = text.replaceAll("cats","dogs");

text = text.replaceAll(/Cats/g,"Dogs");
text = text.replaceAll(/cats/g,"dogs");

//replaceAll() is an ES2021 feature.

//replaceAll() does not work in Internet Explorer.

//String indexOf()
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate")
console.log(index)

//String lastIndexOf()
let text = "Please locate where 'locate' occurs!";
let index = text.lastIndexOf("locate");
//Both indexOf(), and lastIndexOf() return -1 if the text is not found:

let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate", 15);

//String Search
let text = "Please locate where 'locate' occurs!";
console.log(text.search("Please"))

//String match
//The match() method returns an array containing the results of matching a string against a string
let text = "The rain in SPAIN stays mainly in the plain";
console.log(text.match("ain"))

//Perform a global search for "ain":
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/g);

//Perform a global, case-insensitive search for "ain":
let text = "The rain in SPAIN stays mainly in the plain";
text.match(/ain/gi);

//String MatchAll
//The matchAll() method returns an iterator containing the results of matching a string against a string (or a regular expression
const iterator = text.matchAll("Cats");

//String includes
let text = "Hello world, welcome to the universe.";
text.includes("world");

let text = "Hello world, welcome to the universe.";
text.includes("world", 12);

//String Startwith
//The startsWith() method returns true if a string begins with a specified value.
let text = "Hello world, welcome to the universe.";
text.startsWith("Hello");

let text = "Hello world, welcome to the universe.";
text.startsWith("world", 5)

let text = "Hello world, welcome to the universe.";
text.startsWith("world", 6)

//String endswith
let text = "John Doe";
text.endsWith("Doe");

let text = "Hello world, welcome to the universe.";
text.endsWith("world", 11);