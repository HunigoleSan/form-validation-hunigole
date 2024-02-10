let colors_HTML = document.querySelectorAll(".colors")
let message_HTML = document.querySelectorAll(".message")
let form_input_HTML = document.querySelectorAll(".form__input")
const clean = {
    messageAlert: function() {
        message_HTML.forEach((currentValue) => {
            currentValue.textContent = ""
        })
    },
    colorAlert: function() {
        colors_HTML.forEach((currentValue) => {
            currentValue.classList.remove("green")
        })
    },
    inputShadow: function() {
        form_input_HTML.forEach((currentValue) => {
            currentValue.classList.remove("form__input-border-success")
        })
    }
}
export {clean}