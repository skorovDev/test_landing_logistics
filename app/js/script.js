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

$('#exampleModal').on('shown.bs.modal', function () {
    $('#name').focus();
})

$.validator.addMethod("lettersonly", function (value, element) {
    return this.optional(element) || /^[a-zA-Z]+$/i.test(value);
}, "Letters and spaces only please");

$.validator.addMethod("letterNumber", function (value, element) {
    return this.optional(element) || /^[a-zA-Z 0-9 -,.]+$/i.test(value);
}, "Letters and  0-9 -,");


$("#formValidation").validate({
    rules: {
        name: {
            required: true,
            lettersonly: true
        },
        email: {
            required: true,
            email: true
        },
        comment: {
            required: true,
            letterNumber: true
        }
    },
    submitHandler: function (form) {
        alert('send')
    }
});

jQuery.validator.addMethod("customEmail", function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value);
}, "Please enter valid email address!");


$('.double-form-item').each(function () {
    const _this = this
    $(this).find('button.double-form-change').click(function () {

        const div = $(_this).find('.double-form-text')
        const type = div.attr('data-type')
        const name = div.attr('data-name')
        const value = div.text()
        const form = $(`
            <form class='double-form-change_form d-flex mb-3 justify-content-between flex-nowrap'>
                <input class="ml-2 focus_input" type="${type}" name="${name}" value="${value}" > 
                <button class='btn black double-form-save ' type="submit">Save</button>
            </frorm>
            `)

        div.replaceWith(form);

        form.ready(function () {
            form.find('.focus_input').focus();
        });

        const rules = {
            [name]: {
                required: true,
                // email: true
            }
        }
        if (type === 'email') {
            rules[name][type] = true
        }
        form.validate({
            rules,
            submitHandler: function (form) {
                const value = $(form).find('input').val()
                div.text(value)
                $(form).replaceWith(`<div class="ml-2 double-form-text" data-type="${type}" data-name="${name}">${value}</div>`)

            }

        });

    })

});

// TODO for pc scroll
const anchors = document.querySelectorAll('a.anchor')
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
// TODO for ios scroll
const scroll = new SmoothScroll('a.anchor');
