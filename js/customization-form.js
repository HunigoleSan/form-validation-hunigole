function customizationForm(stateMessage, parentInput, childSibling, message) {
    if (stateMessage) {
        if (parentInput.classList.contains("form__input")) {
            parentInput.classList.remove("form__input-border-success")
            parentInput.classList.add("form__input-border-error")
            message.classList.add("form__message-error");
            message.classList.remove("form__message-success");
            message.classList.add("meesageAnimation");
            childSibling.classList.remove("green")
            childSibling.classList.add("red")
        }
    } else {
        message.classList.remove("form__message-error");
        message.classList.add("form__message-success");
        message.classList.add("meesageAnimation");
        parentInput.classList.remove("form__input-border-error")
        parentInput.classList.add("form__input-border-success")
        childSibling.classList.remove("red")
        childSibling.classList.add("green")
    }
}
export {customizationForm}