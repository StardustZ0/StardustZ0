
function ham() {
    var x = document.getElementById("ip1")
    x = Number(x.value)
    var y = Math.round(Math.random()) // Trả về 0 hoặc 1
    if (x >= 2 || x < 0) {
        document.getElementById("hp1").innerHTML = "Bạn nhập sai số, vui lòng nhập lại";
    } else if (x == y) {
        document.getElementById("hp1").innerHTML = "Bạn đã đoán đúng";
    } else if (x != y) {
        document.getElementById("hp1").innerHTML = "Bạn đã đoán sai";
    }
}