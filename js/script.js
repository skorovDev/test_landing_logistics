let acc = document.getElementsByClassName("faq");
let i;
for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function () {
        this.classList.toggle("act");
        let answer = this.nextElementSibling;
        if (answer.style.maxHeight) {
            answer.style.maxHeight = null;
        } else {
            answer.style.maxHeight = answer.scrollHeight + "px";
        }
    });
}

const anchors = document.querySelectorAll('a[href^="#"]')
for (let anchor of anchors) {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
        const goto = anchor.hasAttribute('href') ? anchor.getAttribute('href') : 'body'
        document.querySelector(goto).scrollIntoView({
            behavior: "smooth",
            block: "start"
        })
    })
}

$("#formValidation").validate({
    rules: {
        name: {
           required: true
        },
        email: {
            email: true
        },
        message: {
            name: {
                required: "We need your email address to contact you",
                minlength: "Name at least 2 characters"
            },

            email:"Please enter your email"

        },


    },


    submitHandler: function (form) {
        form.submit();
    }
});