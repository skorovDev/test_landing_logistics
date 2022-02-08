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
        // form.submit();
    }
});

jQuery.validator.addMethod("customEmail", function (value, element) {
    return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i.test(value);
}, "Please enter valid email address!");


// $("#change-1").click(function () {
//     $('div#message').each(function () {
//
//         $(this).replaceWith(`<form  id='my-form' class='d-flex justify-content-between flex-nowrap valid-my'><input name="email" value="jon@mail.com" class='ml-2 error-valid'> <button class='btn' type="submit">Save</button></frorm>`);
//         $("#my-form").validate({
//             rules: {
//                 email: {
//                     required: true,
//                     customEmail: true
//                 }
//             },
//             submitHandler: function (form) {
//                 alert('ok')
//                 // form.submit();
//             }
//         });
//     });
//
// });


// $("#change-2").click(function () {
$('.double-form-item').each(function () {
    const _this = this
    $(this).find('button.double-form-change').click(function () {
        // console.log(_this)
        const div = $(_this).find('.double-form-text')
        const type = div.attr('data-type')
        const name = div.attr('data-name')
        const value = div.text()
        const form = $(`
            <form class='double-form-change_form d-flex justify-content-between flex-nowrap'>
                <input class="ml-2" type="${type}" id="form_save" name="${name}" value="${value}" > 
                <button class='btn black' id="save" type="submit">Save</button>
            </frorm>
            `)

        div.replaceWith(form);

        const rules = {
            [name]: {
                required: true,
                // email: true
            }
        }
        debugger

        //TODO якщо type === `email` -> підставити в rules[name][type] = true

        // rules[name] = true

        console.log(rules)

        $(form).validate({
            rules,
            // rules: {
            //     blabla: {
            //         required: true,
            //         // email: true
            //         //    TODO: with type (example "email: true")
            //     }
            // },
            submitHandler: function (form) {
                debugger
                form.replaceWith(div)
                // alert('send')
                // form.submit();
            }

        });

    })

    // $(this).replaceWith(`<form  id='my-form-1' class='d-flex justify-content-between flex-nowrap valid-my'><input class="ml-2" id="form_save" name="address" value="" > <button class='btn' id="save" type="submit">Save</button></frorm>`);
    // $("#my-form-1").validate({
    //     rules: {
    //         address: {
    //             required: true,
    //         }
    //     },
    //
    //
    // });
    //
    // // $(
    // //     function () {
    // $('#save').click(function () {
    //     let text = $('#form_save').val();
    //     $('message-1').text(text);
    // });
    // }
    // );


});


// });


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
