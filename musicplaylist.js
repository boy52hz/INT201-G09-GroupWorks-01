//----------------------------------------
//---- Music player Program (GROUP 9) ----
//----------------------------------------
//รายชื่อเพลงที่มีในระบบ (Object)
//name = ชื่อเพลง เป็น String
//artist = ชื่อศิลปิน เป็น String
//duration = ความยาวของเพลง เป็น number
//plays = จำนวนครั้งที่เล่น เป็น number
//rating = ระดับเรตติ้ง เป็น number
const musicList = [
    {name: 'LALISA', artist: 'LISA', duration: 3.21 , plays: 542 , rating: 5} ,
    {name: 'STAY', artist: 'Justin bieber', duration: 2.21 , plays: 214 , rating: 4} ,
    {name: 'Butter', artist: 'BTS', duration: 2.44 , plays: 354 , rating: 4} ,
    {name: 'double take', artist: 'dhuv', duration: 2.51 , plays: 187 , rating: 3}
]

//--------------------------------------------------
// sort() function

function sortbyNameAsc() { //เรียงเพลงตามชื่อเพลงจาก A-Z
    return musicList.sort(function(a, b) {
        let A = a.name.toLowerCase(); //ทำให้ชื่อเป็นตัวเล็กทั้งหมดเพื่อไม่ให้เรียงพลาด
        let B = b.name.toLowerCase(); //ทำให้ชื่อเป็นตัวเล็กทั้งหมดเพื่อไม่ให้เรียงพลาด
        if (A < B) {
          return -1; //ถ้าหากคืนค่า -1 จะแปลว่าชื่อAมาก่อนชื่อB
        }
        if (A > B) {
          return 1; //ถ้าหากคืนค่า 1 จะแปลว่าชื่อBมาก่อนชื่อA
        }
        return 0; //คืนค่า 0 เมื่ออยู่ลำดับเดียวกัน
    })
}

function sortbyNameDesc() { //เรียงเพลงตามชื่อเพลงจาก Z-A
    return musicList.sort(function(a, b) {
        let A = a.artist.toLowerCase(); //ทำให้ชื่อเป็นตัวเล็กทั้งหมดเพื่อไม่ให้เรียงพลาด
        let B = b.artist.toLowerCase(); //ทำให้ชื่อเป็นตัวเล็กทั้งหมดเพื่อไม่ให้เรียงพลาด
        if (A < B) {
          return 1; //ถ้าหากคืนค่า 1 จะแปลว่าชื่อBมาก่อนชื่อA
        }
        if (A > B) {
          return -1; //ถ้าหากคืนค่า -1 จะแปลว่าชื่อAมาก่อนชื่อB
        }
        return 0; //คืนค่า 0 เมื่ออยู่ลำดับเดียวกัน
    }) 
}

function sortbyArtistAsc() { //เรียงเพลงตามชื่อศิลปินเพลงจาก A-Z
    return musicList.sort(function(a, b) {
        let A = a.artist.toLowerCase(); //ทำให้ชื่อเป็นตัวเล็กทั้งหมดเพื่อไม่ให้เรียงพลาด
        let B = b.artist.toLowerCase(); //ทำให้ชื่อเป็นตัวเล็กทั้งหมดเพื่อไม่ให้เรียงพลาด
        if (A < B) {
          return -1; //ถ้าหากคืนค่า -1 จะแปลว่าชื่อAมาก่อนชื่อB
        }
        if (A > B) {
          return 1; //ถ้าหากคืนค่า 1 จะแปลว่าชื่อBมาก่อนชื่อA
        }
        return 0; //คืนค่า 0 เมื่ออยู่ลำดับเดียวกัน
    }) 
}

function sortbyArtistDesc() { //เรียงเพลงตามชื่อศิลปินจาก Z-A
    return musicList.sort(function(a, b) {
        let A = a.artist.toLowerCase(); //ทำให้ชื่อเป็นตัวเล็กทั้งหมดเพื่อไม่ให้เรียงพลาด
        let B = b.artist.toLowerCase(); //ทำให้ชื่อเป็นตัวเล็กทั้งหมดเพื่อไม่ให้เรียงพลาด
        if (A < B) {
          return 1; //ถ้าหากคืนค่า 1 จะแปลว่าชื่อBมาก่อนชื่อA
        }
        if (A > B) {
          return -1; //ถ้าหากคืนค่า -1 จะแปลว่าชื่อAมาก่อนชื่อB
        }
        return 0; //คืนค่า 0 เมื่ออยู่ลำดับเดียวกัน
    }) 
}

//------------------------------------------
//สร้าง function ขึ้นมาเพื่อใช้ sort() กำหนด a , b เป็น elements ที่เลือกมาเปรียบเทียบ
//ตามสูตรที่อยู่หลัง arrow function
//เมื่อทำงานเสร็จจะ return array ที่เรียงเรียบร้อยแล้ว
//------------------------------------------
//เรียงเพลงตามระยะเวลาจาก น้อย-มาก
const sortbyDurationAsc = () => musicList.sort((a,b) => a.duration - b.duration);

//เรียงเพลงตามระยะเวลาจาก มาก-น้อย
const sortbyDurationDesc = () => musicList.sort((a,b) => b.duration - a.duration);

//เรียงเพลงตามจำนวนการเล่นจาก น้อย-มาก
const sortbyPlaysAsc = () => musicList.sort((a,b) => a.plays - b.plays);

//เรียงเพลงตามจำนวนการเล่นจาก มาก-น้อย
const sortbyPlaysDesc = () => musicList.sort((a,b) => b.plays - a.plays);

//เรียงเพลงตามเรตติ้งจาก น้อย-มาก
const sortbyRatingAsc = () => musicList.sort((a,b) => a.rating - b.rating);

//เรียงเพลงตามเรตติ้งจาก มาก-น้อย
const sortbyRatingDesc = () => musicList.sort((a,b) => b.rating - a.rating);

//-------------------------------------------------------------------------
// findindex() function
//เป็น function เพื่อหาเพลงหรือชื่อศิลปินที่เราค้นหาว่าอยู่ลำดับที่เท่าไหร่โดยจะบอกได้แค่ตัวแรก
//ที่เจอเท่านั้นเพราะข้อจำกัดของ findindex() 
function findIndexByName(musicName) { //รับค่าชื่อเพลงที่หาลงใน musicName

    return musicName + ' is number ' + 
            //ใช้ findindex() โดยใช้เงื่อนไขเมื่อ เพลงในlist === musicNameที่เรากำลังค้นหา โดนเปลี่ยนให้ทั้งคู่เป็นตัวเล็ก
            //เพื่อเปรียบเทียบได้ง่ายขึ้น และทำการ +1 เพื่อให้ index เริ่มที่ 1
            ( 1 + musicList.findIndex((music) => music.name.toLowerCase() === musicName.toLowerCase())) 
            + ' on playlist.'
            //ผลลัพท์ที่ได้ 'musicName' is number X on playlist.

}

function findIndexByArtist(artistName) {

    return artistName + ' is number ' + 
            ( 1 + musicList.findIndex((music) => music.artist.toLowerCase() === artistName.toLowerCase()))
             + ' on playlist.'
             //ผลลัพท์ที่ได้ 'artistName' is number X on playlist.

}

//---------------------------------------------------------
// example case for sort()
console.log(sortbyNameAsc());
console.log(sortbyPlaysDesc());
console.log(sortbyDurationAsc());
//--------------------------------------------------------
// example case for findindex()
console.log(findIndexByName('lalisa'));
console.log(findIndexByArtist('bts'));










