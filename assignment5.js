// HOF
export const numberArr = [2, 3, 4, 7, 8, 10];
const isEven = number => number % 2 === 0;
console.log(numberArr.map(isEven));

// Closure
const whatIsMyName = () => {
    let name = "Tharadon";
    return () => console.log(name);
};

const printName = whatIsMyName()
printName();
export default printName

// default
export const user = (name, nickname, age = 20) => {
    return "Name : " + name + " " + "Nickname : " + nickname + " " + "Age :" + age;
};

console.log(user("Duangkamon", "Dream"));

// rest
export const myGroups = (sac, group,... member) => {
    return "Sac :" + sac + " "+ "Group :" + group + " " + "Member :" + member;
};

console.log(myGroups("1", "09", "ดวงกมล", "ธราดล", "โชติพัฒน์", "ธนพนธ์", "ณภัทร"));
