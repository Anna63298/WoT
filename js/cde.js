function verify() {
    var place = parseInt(nodePlaceNumber.value)

    let error = ""
    if (place < 54) {
        if (place % 2) {
            console.log("нижнее место")
            place1 = "нижнее место"
        }
        else {
            console.log("верхнее место")
            place1 = "верхнее место"
        }

        if (place < 37) {
            console.log("купе")
            place2 = "купе"
        }
        else {
            console.log("боковое")
            place2 = "боковое"
        }
        result = place1 + ", " + place2
    check = true
    }
    else {
        console.log("Ошибка ввода данных")
        error = "Ошибка ввода данных"
        result = error
        check = false
    }

    console.log("Ответ: ", result)
    nodeResult.innerText = result
}

function send() {
    if (check) {
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Ошибка ввода данных")
    }
}

function verify_send() {
    verify();
    send();
}

const nodeTaskContent = document.getElementsByName("task_content")[0];
console.log(nodeTaskContent.value)

const nodePlaceNumber = document.getElementById("placeNumber");
console.log("Номер места:", nodePlaceNumber.value)
var placeNumber = nodePlaceNumber.value

var check

const nodeResult = document.getElementsByName("result")[0];
console.log("Результат: ", nodeResult.value)
nodeResult.addEventListener('keyup', verify)

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
