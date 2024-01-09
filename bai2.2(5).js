
function ham() {
    var x = document.getElementById("ip1") // nhap vao tu input
    x = Number(x.value) // chuyen hoa thanh so
    if (x % 2 == 0) {
        document.getElementById("p1").innerHTML = "Số chẵn"; // dua ket vao o p1
    } else {
        document.getElementById("p1").innerHTML = "Số lẻ"; // dua ket vao o p1
    }
}