let number = prompt("สุ่มหวย กรุณากรอกเลขที่ต้องการสุ่ม (0-99) : ")
let number_lotto  = Math.floor(Math.random()*100)
console.log( number +" : " + number_lotto);

document.getElementById("guess").innerHTML = "เลขที่กรอก : " + number
document.getElementById("result").innerHTML = "เลขที่สุ่ม : " + number_lotto