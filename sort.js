const arr = [40, 100, 50, 5, 1, 10]
const ascendingSorted = () => arr.sort() // Ascending as default
const descendingSorted = () => arr.sort((a, b) => b - a)

console.log(ascendingSorted())
console.log(descendingSorted())

const stringArr = ['A', 'B', 'C', 'D']
const stringSortAsc = () => stringArr.sort()
const stringSortDesc = () => stringArr.sort((a, b) => b.localeCompare(a))
/* localCompare เป็น prototype function อยู่ในตัวแปรประเภท string
    ใช้สำหรับเปรียบเทียบ string 2 ตัวว่าตัวไหนมาก่อนตามหลักของแต่ละภาษา
*/

console.log(stringSortAsc())
console.log(stringSortDesc())

const objArr = [{id: 1, name: 'John'}, {id: 5, name: 'Peter'}, {id: 3, name: 'Nat'}]
const sortByIdAsc = () => objArr.sort((a, b) => a.id - b.id)
const sortByIdDesc = () => objArr.sort((a, b) => b.id - a.id)

console.log(sortByIdAsc())
console.log(sortByIdDesc())
