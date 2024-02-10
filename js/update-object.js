
function updateObject(input,object,newState) {
    for (const key in input) {
        if (typeof (input[key]) == "object") {
            let name = input[key].name
            if (object.hasOwnProperty(name)) {
                object[input[key].name].state = newState
            } else {
                object[input[key].name] = {
                    name: input[key].name,
                    create: true,
                    state: false,
                    data: input[key].dataset.user,
                    length: input[key].maxLength
                }
            }
        }
    }
}
export {updateObject}