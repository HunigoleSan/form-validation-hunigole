let progress_HTML = document.getElementById("progress")
let progress_value_HTML = document.getElementById("progress-value")
let keyAmount = 0;

function cleanProgress(states_control_fail) {
    progress_HTML.style.width = "0%";
    progress_value_HTML.textContent = "00%"
    keyAmount = 0
    states_control_fail = false
}

function progressCount(objectInput) {
    for (const key in objectInput) {
        if (objectInput[key].state == true) {
            keyAmount += 1
        }
    }
    return keyAmount
}

function setProgress(input,objectInput,states_control_fail) {
    if (objectInput.hasOwnProperty(input.name)) {
        let state = objectInput[input.name].state
        let data = objectInput[input.name].data
        if (state == false && data == "true") {
            let amountData = 0
            for (const key in objectInput) {
                if (objectInput[key].data == "true") {
                    amountData += 1
                }
            }
            objectInput[input.name].state = true
            let amountProgress = progressCount(objectInput)
            progress_HTML.style.width = `${(amountProgress / amountData) * 100}%`
            progress_value_HTML.textContent = Math.floor(parseFloat(progress_HTML.style.width)) + "%"
            keyAmount = 0
        }
        if (states_control_fail) {
            let amountData = 0
            for (const key in objectInput) {
                if (objectInput[key].data == "true") {
                    amountData += 1
                }
            }
            objectInput[input.name].state = false
            let amountProgress = progressCount(objectInput)
            progress_HTML.style.width = `${(amountProgress / amountData) * 100}%`
            progress_value_HTML.textContent = String(Math.floor(parseFloat(progress_HTML.style.width))).padStart(2,"0") + "%"
            keyAmount = 0
        }
    }
}
export{setProgress,cleanProgress}