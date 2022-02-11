// Add JS here




let a = 5; // number 1

console.log(a);
const increment = a++;
console.log("Original number:",increment,"new number:", a);

let e = 12;
let b = 46; // number 2

const c = e < b; //boolean 1
const d = ! (e < b); //Not statement
const day = "friday";
const bestDay = day == "friday";// boolean 2


const firstName = "Jason"; //string 1
const ask = `My name is ${firstName}, how are you doing?`; //template literal string



const artist1 = "kanye";
const artist2 = "drake";
const artist3 = "lilbaby";
const artist4 = "DaBaby";

const artists = [artist1, artist2, artist3, artist4];

/* I know i could probably fit this all in one line, I'm just making 
 it visibally more appealing to myself */






 console.log("e=", e,"and b=", b);



console.log("is 12 less than 46?(not operator, expected false)", d); //boolean

console.log(day);
console.log("is Friday the best day?", bestDay);

console.log(firstName);
console.log(ask);

console.log(artists);
console.log("How long is this array?",artists.length, "items are in this array");