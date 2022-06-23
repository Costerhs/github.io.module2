function resetForm(inputs, sendBtn, sendText, btnText) {
    inputs.forEach(input => {
        input.value = ''
    });
    sendBtn.classList.add('form__btn-error');
    sendBtn.textContent = "Получить консультацию"
    sendBtn.classList.remove('form__btn-send');
    sendText.textContent = '';
    sendBtn.nextElementSibling.textContent = 'Ваша заявка успешно отправлена';
    setTimeout(() => {
        sendBtn.nextElementSibling.textContent = '';
    }, 1500);
}

export default resetForm;