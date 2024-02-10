import { messageResponse } from "./message-error.js";
import { showModal, deleteModal } from "./form-success-modal.js";
import { clean } from "./clean-message.js";
import { updateObject } from "./update-object.js";
import { addFormUser } from "./form-add-user.js";
import { setProgress,cleanProgress } from "./form-set-progress.js";
let objectInput = {}
let objectUser = {}

window.addEventListener("DOMContentLoaded", function () {
    let inscription_HTML = document.getElementById("inscription")
    let control_HTML = document.querySelectorAll(".control")
    let form_inscription_HTML = document.getElementById("form_inscription")
    let submit_HTML = document.getElementById("submit")
    let name_HTML = document.getElementById("name_")
    let second_name_HTML = document.getElementById("second_name")
    let last_name_HTML = document.getElementById("last_name")
    let nationality_HTML = document.getElementById("nationality")
    let city_HTML = document.getElementById("city")
    let date_of_birth_HTML = document.getElementById("date_of_birth")
    let genre_HTML = document.getElementById("genre")
    let cell_HTML = document.getElementById("cell")
    let course_HTML = document.getElementById("course")
    let states_control_fail = false
    let statesSubmit = false

    form_inscription_HTML.addEventListener("input", function (event) {
        if (event.target.tagName === "INPUT" || event.target.tagName === "SELECT") {
            validationData(event.target)
            submitActive()
        }
    })
    
    function cleanObjectInput(object) {
        let keys = Object.keys(object)
        for (const key of keys) {
            delete object[key]
        }
    }

    submit_HTML.addEventListener("mousedown", function (event) {
        if (statesSubmit) {
            objectUser = addFormUser(name_HTML,second_name_HTML,last_name_HTML,nationality_HTML,city_HTML,genre_HTML,date_of_birth_HTML,cell_HTML,course_HTML)
            let modal = showModal(objectUser)
            inscription_HTML.insertAdjacentHTML("afterbegin",modal)
            let click_me_MODAL = document.getElementById("click-me")
            let form_capa_MODAL = document.getElementById("form-capa")
            
            deleteModal(click_me_MODAL,form_capa_MODAL,inscription_HTML)
            cleanProgress(states_control_fail)
            cleanObjectInput(objectInput)
            clean.messageAlert()
            clean.colorAlert()
            clean.inputShadow()
            updateObject(control_HTML,objectInput,states_control_fail)
            submitActive()
        } else {
            event.preventDefault()
        }
    })

    function submitActive() {
        let countStates = 0
        statesSubmit = false
        for (const key in objectInput) {
            if (objectInput[key].state == true) {
                countStates += 1
            }
        }
        if (countStates < 8) {
            submit_HTML.classList.add("form__submit-default")
            submit_HTML.classList.add("opacity")
            statesSubmit = false
        } else if (countStates > 7) {
            submit_HTML.classList.remove("form__submit-default")
            submit_HTML.classList.remove("opacity")
            statesSubmit = true
        }
        return statesSubmit
    }

    updateObject(control_HTML,objectInput,states_control_fail)

    function validationData(input) {
        let messageResponseState = messageResponse.validationRequest(input)
        states_control_fail = messageResponseState
        setProgress(input,objectInput,states_control_fail)
    }
    
    submitActive()

});
export { objectInput };