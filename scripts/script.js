const order = document.querySelector("#finish");
order.addEventListener('click', makeOrder);

const comments = document.querySelector("#commented");
comments.addEventListener('click', addComment)

function makeOrder() {
    let firstNameBox = document.getElementById('fnameo');
    let lastNameBox = document.getElementById('lnameo');
    let cityBox = document.getElementById("city");
    let addressBox = document.getElementById("address");
    let successOrd = document.getElementById("successfulOrder");
    let errorOrd = document.getElementById("errorOrder");
	let fn = firstNameBox.value;
    let ln = lastNameBox.value;
	let cv = cityBox.value;
	let addv = addressBox.value;
	
    successOrd.textContent = " "

    if (fn == '' || ln == '' || cv == '' || addv == '') {
        errorOrd.textContent = "Не сте въвели всички полета! Опитайте отново."
        errorOrd.style.color = "red"
    } else {
        errorOrd.textContent = " "
        successOrd.textContent = firstNameBox.value + " " + lastNameBox.value + ", Благодарим Ви за поръчката!"
        successOrd.style.color = "green"

        firstNameBox.value = "";
        lastNameBox.value = "";
        cityBox.value = "";
        addressBox.value = "";
    }

}

function addComment() {
    let firstNameBox = document.getElementById('fnamec');
    let lastNameBox = document.getElementById('lnamec');
    let commBox = document.getElementById('comment');
    let fn = firstNameBox.value;
    let ln = lastNameBox.value;
    let comm = commBox.value;
    let errorCom = document.getElementById("errorComment");

    if (fn == '' || ln == '' || comm == '') {
        errorCom.textContent = "Не сте въвели всички полета! Опитайте отново, моля."
        errorCom.style.color = "red"
    } else {
        errorCom.textContent = " "
        var tag = document.createElement("p");
        var text = document.createTextNode(fn + " " + ln + " коментира: " + comm);
        tag.prepend(text);
        var element = document.getElementById("new");
        element.prepend(tag);

        firstNameBox.value = "";
        lastNameBox.value = "";
        commBox.value = "";
    }
}