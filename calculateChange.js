//สร้าง function ชื่อ calulateChange ที่รับค่า price , cash สำหรับการคำนวณเงินทอน

function calculateChange (price, cash) {

//สร้างตัวแปร ชื่อ returnValue เก็บจำนวนงินที่ต้องทอน 
    
    let returnValue = cash - price;

//สร้าง object ชื่อ change เพื่อเก็บค่าเงินทอน
    let change = {};

//สร้าง Arrays เพื่อเก็บค่าคงที่ คือ ประเภทของเงินและค่าของเงิน
    const moneyTypes = ["bank500", "bank100", "bank50", "bank20", "bank10", "coin5", "coin2", "coin1"  ]
    const moneyValues = [500, 100, 50, 20, 10, 5, 2, 1];

//สร้าง letiable ชื่อ amount เพื่อเก็บจำนวนเงิน
    let amount;

//สร้าง loop โดยกำหนดให้เริ่มต้นจาก 0 จนถึงสิ้นสุดจำนวน Arrays moneyValues โดย loop แต่ละครั้งให้เพิ่มค่าทีละ 1
//ตัวแปร amount เก็บค่าการคำนวน เงินทอน หารด้วย ตำแหน่งของ moneyValue โดย Math.floor คือการปัดค่าทศนิยมลง
//เพื่อหาจำนวนเงินที่ต้องใช้ทอน เช่น เงินทอน 499 นำไปหารตำแหน่งแรกคือ 500 
//จะเท่ากับ 0 นั่นหมายความว่าในการทอนเงินครั้งนี้ไม่ได้ใช้แบงค์ 500 ในการทอน
//หลังจากนั้นนำ 499/100 จะเท่ากับ 4.99 ใช้เครื่องมือ Math.floor ปัดลงจะเท่ากับ 4 
//นั่นหมายความจะต้องใช้ แบงค์ 100 ทั้งหมด 4 ใบในการทอนครั้งนี้
        for (let i = 0; i < moneyValues.length; i++){
        amount = Math.floor(returnValue/moneyValues[i]);

//สร้างเงื่อนไข if เพื่อเก็บจำนวนของ moneyTypes ลงไปในตัวแปรที่ชื่อว่า change ที่เป็น Arrays
        if(amount > 0){

//อัพเดทค่า returnValue โดยการนำ returnValue mod กับ moneyValueตำแหน่งที่ i
//เพื่อนำค่าไปคำนวณต่อ เพื่อหาแบงค์หรือเหรียญที่ต้องทอนต่อไป
//เช่น จากตัวอย่างที่แล้ว เราจึงนำ 499มา mod กับ 100 จะเท่ากับ 99 และนำ 99 ไปเข้า loop ต่อ
            change[moneyTypes[i]] = amount; 
            returnValue = returnValue%moneyValues[i]

        }
    }

// return change ที่เป็น Arrays
    return change;
}

console.log(calculateChange(1500, 2000));
console.log(calculateChange(3950, 4000));
console.log(calculateChange(501, 1000));

