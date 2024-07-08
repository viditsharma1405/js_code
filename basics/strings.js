const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value");
// long string
// new string
// length
//uppercase
//char by index
// index of 
// substring
// slicing
//trim
//replace
//search
// array

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)
const gamename = new String('vidit sharma-84878.d')
console.log(gamename.length);
console.log(gamename.toUpperCase());
console.log(gamename.toLowerCase());
console.log(gamename.charAt(5))
console.log(gamename.indexOf('s'));
console.log(gamename.substring(2,16));
console.log(gamename.slice(-2,13));
const newgame=new String('    jwedheh  ')
console.log(newgame.trim())
console.log(gamename.replace(' ','-'))
console.log(gamename.includes('sharma'));
console.log(gamename.split(' '));