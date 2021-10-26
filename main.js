import printName, {numberArr, user, myGroups} from './assignment5.js' ;

// HOF
const isOOD = number => number % 2 !== 0
console.log(numberArr.map(isOOD))

// Closure
printName();

// default
console.log(user("Thanaphon", "Mc"));

// rest
console.log(myGroups("9", "99", "A", "B", "C", "D", "E"));