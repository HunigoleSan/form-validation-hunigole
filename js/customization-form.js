function customizationForm(stateMessage, parentInput, childSibling, message) {
    if (stateMessage) {

        if (parentInput.classList.contains("email-control")) {
            message.classList.remove("form__message-success");
            message.classList.remove("form__message-error");
            message.classList.add("form__message-default");
            message.classList.add("meesageAnimation");
            parentInput.classList.remove("form__input-border-error")
            parentInput.classList.remove("form__input-border-success")
            parentInput.classList.add("form__input-border-default")
            childSibling.classList.remove("red")
            childSibling.classList.remove("green")
            childSibling.classList.remove("purple")
        } else {
            parentInput.classList.remove("form__input-border-success")
            parentInput.classList.add("form__input-border-error")
            message.classList.add("form__message-error");
            message.classList.remove("form__message-success");
            message.classList.add("meesageAnimation");
            childSibling.classList.remove("green")
            childSibling.classList.add("red")
        }

    } else {
        if (parentInput.classList.contains("email-control")) {
            if (message.textContent === "Correct") {
                console.log(message.textContent)

                message.classList.remove("form__message-error");
                message.classList.remove("form__message-default");
                message.classList.add("form__message-success");
                message.classList.add("meesageAnimation");
                parentInput.classList.remove("form__input-border-error")
                parentInput.classList.remove("form__input-border-default")
                parentInput.classList.add("form__input-border-success")
                childSibling.classList.remove("red")
                childSibling.classList.add("green")
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
}
export { customizationForm }