
function deleteModal(button,form,inscription){
    let inscription_HTML = document.getElementById("inscription")
    inscription_HTML.classList.add("open")
    if(button){
        button.addEventListener("click",function(){
            inscription.removeChild(form)
            inscription_HTML.classList.remove("open")
        })
    }
}

function showModal(objectUser){
    let form_success_modal = `
    <div id="form-capa" class="form-capa">
        <div id="form_modal" class="form-modal">
            <h1>Congratulations ${objectUser.name}! 🎉</h1>
            <p>
            🌟 Welcome to our platform of technology courses. 🚀 We're excited to have you with us as you embark on this learning journey. Get ready to acquire new skills and knowledge in cutting-edge technology. 💡 We're here to support you every step of the way toward success!
            </p>
            <button id="click-me" class="click-me" type="button">Click me!</button>
        </div>
    </div>
    `
    return form_success_modal   
}
export {showModal, deleteModal}