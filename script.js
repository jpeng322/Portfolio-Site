
// const form = document.getElementById("contact-form")
(function () {
    emailjs.init("cRsFDn_6WFjcFCjmZ");
})();

var nodeArray = [
    document.querySelector('.skills-header'),
    document.querySelector('.experience'),
    // document.querySelectorAll('.skill')
    document.querySelector('.portfolio-header'),
    document.querySelector('.portfolio-subhead'),
];

ScrollReveal().reveal(nodeArray, { reset: true });
ScrollReveal().reveal(document.querySelectorAll('.skill'), { reset: true })
ScrollReveal().reveal(document.querySelectorAll('.card'), { reset: true })
// ScrollReveal().reveal('.skills-header', { reset: true });
// ScrollReveal().reveal('.experience', { reset: true });
// ScrollReveal().reveal('.skill', { reset: true });


const form = document.querySelector(".contact-form")

form.addEventListener("submit", e => {
    console.log("submitted!")
    if (!form.checkValidity()) {
        console.log("invalid")
        e.preventDefault()
        form.classList.add('was-validated')
    }
    else {
        e.preventDefault()
        sendEmail()
        form.classList.remove('was-validated')
        // console.log("sent email")
    }

})

let feedback = document.querySelector(".form-feedback")
console.log(document.querySelector(".form-feedback").textContent)

function sendEmail() {
    console.log("sent email")
    let params = {
        first_name: document.getElementById("floatingFirstName").value,
        last_name: document.getElementById("floatingLastName").value,
        email: document.getElementById("floatingEmail").value,
        subject: document.getElementById("floatingSubject").value,
        message: document.getElementById("floatingMessage").value
    }

    emailjs.send("service_jzoh7w7", "template_pyz1b4n", params)
        .then(function (response) {
            document.getElementById("floatingFirstName").value = "";
            document.getElementById("floatingLastName").value = "",
                document.getElementById("floatingEmail").value = "";
            document.getElementById("floatingSubject").value = "";
            document.getElementById("floatingMessage").value = "";
            console.log('SUCCESS!', response.status, response.text);
            feedback.textContent = "Thank you for giving me a message! I look forward to speaking with you."
            setTimeout(() => feedback.textContent = "", 5000)
        }, function (error) {
            console.log('FAILED...', error);
        });
}

// const form = document.getElementById("contact-form")

// function sendEmail() {
//     emailjs.sendForm("service_jzoh7w7", "template_pyz1b4n", form, "cRsFDn_6WFjcFCjmZ")
//         .then(function (response) {
//             console.log('SUCCESS!', response.status, response.text);
//             console.log(response)
//         }, function (error) {
//             console.log('FAILED...', error);
//         });
// }