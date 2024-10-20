function verify() {
    let error = ""
    if (placeNumber < 54) {
        if (placeNumber % 2) {
            console.log("нижнее место")
            place = "нижнее место"
        }
        else {
            console.log("верхнее место")
            place = "верхнее место"
        }

        if (placeNumber < 37) {
            console.log("купе")
            place2 = "купе"
        }
        else {
            console.log("боковое")
            place2 = "боковое"
        }
        result = place + ", " + place2
    }
    else {
        console.log("Ошибка ввода данных")
        error = "Ошибка ввода данных"
        result = error
    }

    console.log("Ответ: ", result)
    nodeResult.innerText = result
}

const nodeTaskContent = document.getElementById("task_content");
console.log(nodeTaskContent.innerText)

const nodePlaceNumber = document.getElementById("placeNumber");
console.log("Номер места:", nodePlaceNumber.innerText)
var placeNumber = nodePlaceNumber.innerText

const nodeResult = document.getElementById("result");
console.log("Результат: ", nodeResult.innerText)

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);
