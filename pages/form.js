const inputName = document.querySelector('#name');
const inputSurname = document.querySelector('#surname');
const inputStreet = document.querySelector('#street');
const inputHouse = document.querySelector('#house');
const inputFlat = document.querySelector('#flat');
const form = document.querySelector('.form');

const orderData = {
    street: "",
    house: "",
    flat: "",
    name: "",
    surname: ""
}

const timeElapsed = Date.now();
const tomorrow = new Date(timeElapsed + 86_400_000);
document.querySelector('#delivery-day').setAttribute('min', `${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`)

function validateGiftsSelection() {
    const checkboxes = document.querySelectorAll(".checklist");
    let numberOfCheckedItems = 0;
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked)
            numberOfCheckedItems++;
    }
    if (numberOfCheckedItems > 2) {
        alert("You can't select more than two gifts!");
        return false;
    }

}

inputName.addEventListener('change', (e) => {
    orderData.name = e.target.value;
})

inputSurname.addEventListener('change', (e) => {
    orderData.surname = e.target.value;
})

inputStreet.addEventListener('change', (e) => {
    orderData.street = e.target.value;
})

inputHouse.addEventListener('change', (e) => {
    orderData.house = e.target.value;
})

inputFlat.addEventListener('change', (e) => {
    orderData.flat = e.target.value;
})

form.addEventListener('submit', (e) => {
    e.preventDefault();
    e.target.remove();

    const confirmationMsg = document.createElement('p');
    const mainPageBtn = document.createElement('button');

    mainPageBtn.classList.add('main-page-btn');
    confirmationMsg.classList.add('confirmation-msg');
    mainPageBtn.innerHTML = "Back to main page";
    confirmationMsg.innerHTML = `The order created. The delivery address is ${orderData.street} house ${orderData.house} flat ${orderData.flat}. Customer ${orderData.name} ${orderData.surname}.`

    mainPageBtn.addEventListener('click', () => {
        window.location.href = "../index.html";
    })

    document.querySelector('.order-form-wrapper').appendChild(confirmationMsg);
    document.querySelector('.order-form-wrapper').appendChild(mainPageBtn);


})