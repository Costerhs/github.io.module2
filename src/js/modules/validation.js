function validateText(elem, sendText) {
    if (elem.value.length <= 0) {
        elem.classList.add('input--error')
        elem.nextElementSibling.textContent = 'поле обязательно';
        sendText.textContent = '';
        return false
    }
    elem.nextElementSibling.textContent = '';
    elem.classList.remove('input--error')
    return true
}

export default validateText;