import { nationality } from "./my-api-nationality.js";
import {objectInput} from "./form-validation.js"
window.addEventListener("DOMContentLoaded", function () {
    let prefix_HTML = document.getElementById("prefix")
    let nationality_HTML = document.getElementById("nationality")
    let city_HTML = document.getElementById("city")
    let cell_HTML = document.getElementById("cell")
    let cell_error_HTML = document.getElementById("cell-error")
    nationality_HTML.addEventListener("input", function (event) {
        changeStateNationality(event.target)
    })
    function preventAction(event) {
        event.preventDefault()
    }
    function changeStateNationality(data) {
        let captureNationality = document.getElementById("nationality").value
        let sibling = city_HTML.previousElementSibling
        let childSibling = sibling.querySelector('b')
        let parentSelect = city_HTML.parentNode
        let siblingParent = parentSelect.nextElementSibling

        let cellPrevious = cell_error_HTML.previousElementSibling
        let siblingCell = cell.previousElementSibling
        let labelCell = siblingCell.parentNode.previousElementSibling
        let childSiblingCell = siblingCell.parentNode.previousElementSibling.querySelector('b')

        if (typeof (data) == "object" && data.value == "choose") {
            prefix_HTML.textContent = "--"
            siblingParent.textContent = "you must select a nationality"
            cell_error_HTML.textContent = "you must select a nationality"
            siblingParent.classList.remove("form__message-success")
            siblingParent.classList.add("form-not-event")
            siblingParent.classList.add("form__message-default")
            siblingParent.classList.add("meesageAnimation")
            parentSelect.classList.add("form-select-default")
            parentSelect.classList.remove("form__input-border-error")
            parentSelect.classList.remove("form__input-border-success")
            parentSelect.classList.add("form__input-border-default")
            sibling.classList.add("form-select-default")
            sibling.classList.add("form-not-event")
            childSibling.classList.add("form__message-default")
            childSibling.classList.remove("red")
            childSibling.classList.remove("purple")
            childSibling.classList.remove("green")
            city_HTML.classList.add("form-select-default")

            labelCell.classList.add("form-select-default")
            labelCell.classList.add("form-not-event")
            cell_error_HTML.classList.remove("meesageAnimation")
            cell_error_HTML.classList.add("meesageAnimation")
            cellPrevious.classList.add("form__input-border-default")
            cellPrevious.classList.add("form-select-default")
            cellPrevious.classList.remove("form__input-border-error")
            cellPrevious.classList.remove("form__input-border-success")
            siblingCell.classList.add("form-select-default")
            childSiblingCell.classList.remove("red")
            childSiblingCell.classList.remove("green")
            childSiblingCell.classList.remove("purple")
            childSiblingCell.classList.add("form__message-default")

            cell_HTML.classList.add("form-select-default")

            city_HTML.addEventListener("mousedown", preventAction)
            cell_HTML.addEventListener("mousedown", preventAction)
            objectInput.city.state = false
            objectInput.cell.state = false 
            /* setProgress(data,objectInput,true) */

            /* if (statesSelect) { */
                /* console.log(objectInput.city)
                objectInput.city.state = false
                objectInput.cell.state = false */
               /*  statesSelect = false
            } */
            city_HTML.addEventListener('click',function(event){event.preventDefault()})

        } else if (typeof (data) === "object" && data.value != "choose") {
            prefix_HTML.textContent = nationality[captureNationality].prefix
            
            siblingParent.textContent = ""
            cell_error_HTML.textContent = ""
            cell_HTML.value = ""
            
            cell_HTML.maxLength = nationality[captureNationality].lenghtNumber
            siblingParent.classList.remove("form__message-default")
            siblingParent.classList.remove("meesageAnimation")
            parentSelect.classList.remove("form-select-default")
            parentSelect.classList.remove("form__input-border-default")
            childSibling.classList.remove("form__message-default")
            childSibling.classList.add("purple")
            sibling.classList.remove("form-select-default")
            city_HTML.classList.remove("form-select-default")

            cell_HTML.classList.remove("form-select-default")
            cell_error_HTML.classList.remove("meesageAnimation")
            cellPrevious.classList.remove("form__input-border-default")
            cellPrevious.classList.remove("form__input-border-error")
            cellPrevious.classList.remove("form-select-defaul")
            siblingCell.classList.remove("form-select-default")
            childSiblingCell.classList.remove("form__message-default")
            childSiblingCell.classList.remove("red")
            childSiblingCell.classList.add("purple")
            cell_HTML.classList.remove("form-select-default")

            city_HTML.removeEventListener("mousedown", preventAction)
            cell_HTML.removeEventListener("mousedown", preventAction)
            delectOption(city_HTML)
            let nationalitySelect = data.value
            let findNationality = Object.entries(nationality[nationalitySelect]);
            for (const [key, value] of findNationality) {
                if(key == "lenghtNumber" || key == "prefix"){
                    
                }else{
                    let optionCreate = document.createElement("option")
                    optionCreate.value = key
                    optionCreate.textContent = value.name
                    city_HTML.insertAdjacentElement("beforeend", optionCreate)
                }
            }
            /* if (statesSelect == false) {
                statesSelect = true
            } */
        }
    }

    function delectOption(city) {
        if (city_HTML.firstChild) {
            while (city_HTML.firstChild) {
                city_HTML.removeChild(city_HTML.firstChild);
            }
        }
    }
})

