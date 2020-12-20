let age = prompt("กรุณากรอกอายุ : ")
if (age > 15) {
    document.getElementById("content").innerHTML =
    "<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/i46gbBD4Mjg\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
}else{
    document.getElementById("content").innerHTML = "อายุของคุณไม่ถึงที่เว็บไซต์เรากำหนดไว้"
}