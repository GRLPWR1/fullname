const input = document.querySelector('.inputName');
const btnReady = document.querySelector('.btnReady');
function fullName() {
    let text = input.value;
    let textTrimmed = text.trim();
    let arr = textTrimmed.split(" ");
    let lastName = arr[0];
    let firstName = arr[1];
    let patronimic = arr[2];
    let lastNameFixed = lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();
    let firstNameFixed = firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
    let paronimicFixed = patronimic[0].toUpperCase() + patronimic.slice(1).toLowerCase();
    document.querySelector('#lastName').innerHTML = 'Фамилия: ' + lastNameFixed;
    document.querySelector('#firstName').innerHTML = 'Имя: ' + firstNameFixed;
    document.querySelector('#patronimic').innerHTML = 'Отчество: ' + paronimicFixed;
}

