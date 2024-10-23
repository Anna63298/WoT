function verify() {
    let place = parseInt(placeNumber.value)
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

const nodeTaskContent = document.getElementById("task_content");
console.log(nodeTaskContent.innerText)

const nodePlaceNumber = document.getElementsByName("placeNumber")[0];
console.log("Номер места:", nodePlaceNumber.value)
var placeNumber = nodePlaceNumber.value

const nodeResult = document.getElementById("result");
console.log("Результат: ", nodeResult.innerText)
result.addEventListener('keyup', verify)

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
  
