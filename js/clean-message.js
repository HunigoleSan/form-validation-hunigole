const clean = {
    messageAlert: function() {
        let message_HTML = document.querySelectorAll(".message")
        message_HTML.forEach((currentValue) => {
            currentValue.textContent = ""
        })
    },
    colorAlert: function() {
        let colors_HTML = document.querySelectorAll(".colors")
        colors_HTML.forEach((currentValue) => {
            currentValue.classList.remove("green")
        })
    },
    inputShadow: function() {
        let form_input_HTML = document.querySelectorAll(".form__input")
        
        form_input_HTML.forEach((currentValue) => {
            currentValue.classList.remove("form__input-border-success")
        })
    }
}
export {clean}