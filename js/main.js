// ==================== Бургер меню
const menuBtn = document.querySelector('.menu__btn');
const menu = document.querySelector('.menu__list');
const spans = document.querySelectorAll('.menu__btn span');

// ==================== модальне вікно
var modal = document.getElementById("myModal");
var openModalBtn = document.getElementById("openModalBtn");
var closeModalBtn = document.getElementsByClassName("close")[0];
var submitBtn = document.getElementById("submitBtn");
var agreeCheckbox = document.getElementById("agree");
var nameInput = document.getElementById("name");
var phoneInput = document.getElementById("phone");
var emailInput = document.getElementById("email");
var messageInput = document.getElementById("message");

openModalBtn.onclick = function() {
    modal.style.display = "block";
}

closeModalBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

agreeCheckbox.onchange = function() {
    submitBtn.disabled = !this.checked;
}

function validateForm() {
    var isValid = true;

    if (nameInput.value.trim() === '') {
        isValid = false;
        alert("Будь ласка, введіть своє ім'я.");
    }

    if (phoneInput.value.trim() === '') {
        isValid = false;
        alert("Будь ласка, введіть свій телефон.");
    }

    if (emailInput.value.trim() === '') {
        isValid = false;
        alert("Будь ласка, введіть свою пошту.");
    } else if (!isValidEmail(emailInput.value.trim())) {
        isValid = false;
        alert("Будь ласка, введіть коректну поштову адресу.");
    }

    if (messageInput.value.trim() === '') {
        isValid = false;
        alert("Будь ласка, введіть ваше повідомлення.");
    }

    if (!agreeCheckbox.checked) {
        isValid = false;
        alert("Будь ласка, погодьтесь з умовами розсилки.");
    }

    return isValid;
}

function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
}

document.getElementById("orderForm").onsubmit = function(event) {
    event.preventDefault();

    if (validateForm()) {
        var formData = {
            name: nameInput.value.trim(),
            phone: phoneInput.value.trim(),
            email: emailInput.value.trim(),
            message: messageInput.value.trim()
        };

        console.log([formData]);
        this.reset();
    }
}

window.addEventListener("keydown", function(event) {
    if (event.key === "Escape" && modal.style.display === "block") {
        modal.style.display = "none";
    }
});


// ==================== детальніше
function toggleDetails(customerId) {
    var details = document.getElementById(customerId + '_details');
    if (details.style.display === 'none') {
        details.style.display = 'block';
    } else {
        details.style.display = 'none';
    }
}

// ==================== почта в кінці
var footerForm = document.getElementById("footerForm");
var footerEmailInput = document.getElementById("footerEmail");

footerForm.addEventListener("submit", function(event) {
    event.preventDefault();

    if (!isValidEmail(footerEmailInput.value.trim())) {
        alert("Будь ласка, введіть коректну електронну адресу.");
        return;
    }

    var formData = {
        email: footerEmailInput.value.trim()
    };

    console.log(formData);

    footerEmailInput.value = "";
});

function isValidEmail(email) {

    return /\S+@\S+\.\S+/.test(email);
}
// ==================== swiper

let isWhite = false;

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('menu__list--active');

    spans.forEach(span => {
        if (isWhite) {
            span.style.backgroundColor = "#000000";
        } else {
            span.style.backgroundColor = "#FFFFFF";
        }
    });

    isWhite = !isWhite;
});

const swiper = new Swiper('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    breakpoints: {
        1120: {
            slidesPerView: 3,
        },
        768: {
            slidesPerView: 2,
        },
    },
});




