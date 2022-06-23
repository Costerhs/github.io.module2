import resetForm from "./resetForm";
import validateText from "./validation";

const validationKonsult = () => {
    let servInput = document.querySelectorAll('.input');
    let servBtn = document.querySelector('.form__btn');
    let sendText = document.querySelector('.send-text');

    servBtn?.addEventListener('click', function () {
        let isValid = true;
        servInput.forEach(elem => {
            if (validateText(elem, sendText) === false) {
                isValid = false
            }
        })
        if (isValid) {
            let btnText = servBtn.textContent;
            servBtn.classList.add('form__btn-send');
            servBtn.classList.remove('form__btn-error');

            servBtn.textContent = 'идет отправка...'
            setTimeout(() => {
                resetForm(servInput, servBtn, sendText, btnText)
            }, 2000);
        }
    })
}



export default validationKonsult;