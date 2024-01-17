
function cong(a, b) {
    var a = document.getElementById("ip1").value;
    var b = document.getElementById("ip2").value;

    var a = Number(a);
    var b = Number(b);

    document.getElementById("ip3").value = a + b;
}

function tru(a, b) {
    var a = document.getElementById("ip4").value;
    var b = document.getElementById("ip5").value;

    var a = Number(a);
    var b = Number(b);

    document.getElementById("ip6").value = a - b;
}

function nhan(a, b) {
    var a = document.getElementById("ip7").value;
    var b = document.getElementById("ip8").value;

    var a = Number(a);
    var b = Number(b);

    document.getElementById("ip9").value = a * b;
}

function chia(a, b) {
    var a = document.getElementById("ip10").value;
    var b = document.getElementById("ip11").value;

    var a = Number(a);
    var b = Number(b);

    document.getElementById("ip12").value = a / b;
}