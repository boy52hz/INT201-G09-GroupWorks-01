const musicList = [
    {name: 'LALISA', artist: 'LISA', duration: 3.21 , plays: 542 , rating: 5} ,
    {name: 'STAY', artist: 'Justin bieber', duration: 2.21 , plays: 214 , rating: 4} ,
    {name: 'Butter', artist: 'BTS', duration: 2.44 , plays: 354 , rating: 4} ,
    {name: 'double take', artist: 'dhuv', duration: 2.51 , plays: 187 , rating: 3}
]

const compareNameAsc = (a, b) => {
    let A = a.name.toLowerCase(); //ทำให้ชื่อเป็นตัวเล็กทั้งหมดเพื่อไม่ให้เรียงพลาด
    let B = b.name.toLowerCase(); //ทำให้ชื่อเป็นตัวเล็กทั้งหมดเพื่อไม่ให้เรียงพลาด
    if (A < B) {
        return -1; //ถ้าหากคืนค่า -1 จะแปลว่าชื่อAมาก่อนชื่อB
    }
    if (A > B) {
        return 1; //ถ้าหากคืนค่า 1 จะแปลว่าชื่อBมาก่อนชื่อA
    }
    return 0; //คืนค่า 0 เมื่ออยู่ลำดับเดียวกัน
}

const compareNameDesc = (a, b) => {
    let A = a.name.toLowerCase(); //ทำให้ชื่อเป็นตัวเล็กทั้งหมดเพื่อไม่ให้เรียงพลาด
    let B = b.name.toLowerCase(); //ทำให้ชื่อเป็นตัวเล็กทั้งหมดเพื่อไม่ให้เรียงพลาด
    if (A < B) {
        return 1; //ถ้าหากคืนค่า 1 จะแปลว่าชื่อBมาก่อนชื่อA
    }
    if (A > B) {
        return -1; //ถ้าหากคืนค่า -1 จะแปลว่าชื่อAมาก่อนชื่อB
    }
    return 0; //คืนค่า 0 เมื่ออยู่ลำดับเดียวกัน
}
// musicList.sort((a, b) => { })
console.log(musicList.sort(compareNameAsc))
console.log('------------------------------')
console.log(musicList.sort(compareNameDesc))