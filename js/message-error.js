import { nationality } from "./my-api-nationality.js"
import { customizationForm } from "./customization-form.js"

let messageResponse = {
    validationRequest: function (input) {
        let message = document.querySelectorAll(".message")
        let patternLimitObject ={
            name_:30,
            second_name:30,
            last_name:60
        }
        let patternErrorSpace = /^\s+/
        let patternErrorCellCharacters = /[a-zA-Z!@$%^&*()_+-/]+/;
        let patternSpace = /^\s+/
        let patternNumber = /[\W\d_]+\s/g

        let stateMessage = false
        for (const key in message) {
            if (typeof (message[key]) == "object") {
                if (message[key].classList.contains(input.name)) {
                    let parentInput = input.parentNode
                    let sibling = input.previousElementSibling
                    let childSibling = sibling.querySelector('b')
                    if(input.id === "name_" || input.id ==="second_name" || input.id === "last_name"){
                        if (String(input.value).trim() == "") {
                            if(input.id === "second_name"){
                                message[key].textContent = "opcional"
                                stateMessage = false
                            }else{
                                message[key].textContent = "Should not be empety"
                                stateMessage = true
                            }
                        }else if(patternSpace.test(input.value)){
                            message[key].textContent = "Remove 'space' before firts name"
                            stateMessage = true
                        }else if(patternNumber.test(input.value)) {
                            message[key].textContent = "Please avoid using numbers, symbols, or excessive spacing"
                            stateMessage = true
                        }else if (input.value.length > patternLimitObject[input.id]){
                            message[key].textContent = `It should not exceed the amount of '${patternLimitObject[input.id]}' digits`
                            stateMessage = true
                        }else {
                            message[key].textContent = "Correct"
                            stateMessage = false
                        }
                        customizationForm(stateMessage, parentInput, childSibling, message[key])
                    }
                    
                    if (input.id === "cell") {
                        let previousBro = parentInput.previousElementSibling
                        let parentCell = previousBro.parentNode
                        let captureNationality = document.getElementById("nationality").value
                        let stateSelectNationality = nationality[captureNationality] === undefined ? undefined : nationality[captureNationality].lenghtNumber;
                        let limitDigit = stateSelectNationality + 1
                        previousBro.querySelector('b').classList.add("red")
                        previousBro.querySelector('b').classList.remove("green")
                        parentCell.classList.add("form__input-border-error")
                        parentCell.classList.remove("form__input-border-success")
                        message[key].classList.add("meesageAnimation")
                        message[key].classList.remove("form__message-success")
                        message[key].classList.add("form__message-error")
                        if (stateSelectNationality === undefined) {
                            message[key].textContent = "Por favor seleccione una nacionalidad"
                            stateMessage = true
                        } else {
                            if (input.value.trim() == "") {
                                message[key].textContent = "No puede estar vacio"
                                stateMessage = true
                            } else if (patternErrorSpace.test(input.value)) {
                                message[key].textContent = "Por favor elimine todos los espacios"
                                stateMessage = true
                            } else if (patternErrorCellCharacters.test(input.value)) {
                                message[key].textContent = "Por favor no use simbolos  o letras"
                                stateMessage = true
                            } else if (String(input.value).length >= limitDigit) {
                                message[key].textContent = `No puede superar la cantidad de ${limitDigit}`
                                stateMessage = true
                            } else if(String(input.value).length == stateSelectNationality){
                                message[key].textContent = "Correct"
                                previousBro.querySelector('b').classList.remove("red")
                                previousBro.querySelector('b').classList.add("green")
                                parentCell.classList.remove("form__input-border-error")
                                parentCell.classList.add("form__input-border-success")
                                message[key].classList.remove("form__message-error")
                                message[key].classList.add("form__message-success")
                                stateMessage = false
                            }else {
                                message[key].textContent = `Debe contener ${stateSelectNationality}`
                                stateMessage = true
                            }
                        }
                    }
                    if(input.tagName === "SELECT" && input.id == "nationality"){
                        message[key].classList.add("meesageAnimation")
                        if(input.value === "choose"){
                            message[key].textContent = "Por favor seleccione una nacionalidad"
                            stateMessage = true
                        }else{
                            message[key].textContent = "Correct"
                            stateMessage = false
                        }
                        customizationForm(stateMessage, parentInput, childSibling, message[key])
                    }else if(input.tagName === "SELECT"){
                        if(input.value === "choose"){
                            message[key].textContent = `Por favor seleccion un ${sibling.textContent}`
                            stateMessage = true
                        }else{
                            message[key].textContent = `Correct`
                            stateMessage = false
                        }
                        customizationForm(stateMessage, parentInput, childSibling, message[key])
                    }
                }
            }
        }
        if (stateMessage) {
            return stateMessage
        } else {
            return stateMessage
        }
    }
}
export { messageResponse }





