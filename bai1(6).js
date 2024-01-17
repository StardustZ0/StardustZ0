
function ho() {
    var firstName = document.getElementById("ip1").value;

    if ( firstName == "") {
        document.getElementById("error1").innerHTML = "Vui lòng nhập họ của bạn";
    } else {
        document.getElementById("error1").innerHTML = "";
    }
}

function ten() {
    var lastName = document.getElementById("ip2").value;

    if ( lastName == "") {
        document.getElementById("error2").innerHTML = "Vui lòng nhập tên của bạn";
    } else {
        document.getElementById("error2").innerHTML = "";
    }
}

function sdt() {
    var phone = document.getElementById("ip5").value;

    if ( phone == "") {
        document.getElementById("error3").innerHTML = "Vui lòng nhập số điện thoại của bạn";
    } else if ( phone.length !=10) {
        document.getElementById("error3").innerHTML = "Số điện thoại phải có 10 số";
    } else {
        document.getElementById("error3").innerHTML = "";
    }
}

function reset() {
    document.getElementById("ip1").value = "";
    document.getElementById("ip2").value = "";
    document.getElementById("ip5").value = "";
    document.getElementById("ip7").value = "";
    

}

function sex() {

    var nam = document.getElementById("ip4").checked;
    var nu = document.getElementById("ip4").checked;

    if ( nam == false && nu == false) {
        document.getElementById("error4").innerHTML = "Vui lòng chọn giới tính của bạn";
    } else {
        document.getElementById("error4").innerHTML = "";
    }
}