import './stylus/main.styl';
// import "core-js/stable";
// import "regenerator-runtime/runtime";


(function () {
var $form               = document.querySelectorAll('.jsFormRegistration')
let $openregistration   = document.querySelector('.jsOpenModalRegistration')
let $modalRegistration  = document.querySelector('.jsModalRegistration')
let $closeAllOverlays   = document.querySelectorAll('.jsCloseOverlay')
let $overlay            = document.querySelector('.overlay')
let $body               = document.querySelector('body')
let $politicField       = document.querySelector('.jsFieldsetPolitic')
let $name               = document.querySelector(".jsInputName")
let $phone              = document.querySelector(".jsInputPhone")
let $accept             = document.querySelector('#registration--politic')
let $namePattern        = /^[a-zа-яё\ ]{0,}$/i
let $phonePattern       = /^[\+\d\(\)\ -]{9,25}\d$/

/*===== START TOOGLE =====*/
let slideUp = (target, duration=500) => {
    target.style.transitionProperty = 'height, margin, padding'
    target.style.transitionDuration = duration + 'ms'
    target.style.boxSizing = 'border-box'
    target.style.height = target.offsetHeight + 'px'
    target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = 0
    target.style.paddingTop = 0
    target.style.paddingBottom = 0
    target.style.marginTop = 0
    target.style.marginBottom = 0
    window.setTimeout( () => {
    target.style.display = 'none'
    target.style.removeProperty('height')
    target.style.removeProperty('padding-top')
    target.style.removeProperty('padding-bottom')
    target.style.removeProperty('margin-top')
    target.style.removeProperty('margin-bottom')
    target.style.removeProperty('overflow')
    target.style.removeProperty('transition-duration')
    target.style.removeProperty('transition-property')
    }, duration)
}
let slideDown = (target, duration=500) => {
    target.style.removeProperty('display')
    let display = window.getComputedStyle(target).display
    if (display === 'none') display = 'block'
    target.style.display = display
    let height = target.offsetHeight
    target.style.overflow = 'hidden'
    target.style.height = 0
    target.style.paddingTop = 0
    target.style.paddingBottom = 0
    target.style.marginTop = 0
    target.style.marginBottom = 0
    target.offsetHeight
    target.style.boxSizing = 'border-box'
    target.style.transitionProperty = "height, margin, padding"
    target.style.transitionDuration = duration + 'ms'
    target.style.height = height + 'px'
    target.style.removeProperty('padding-top')
    target.style.removeProperty('padding-bottom')
    target.style.removeProperty('margin-top')
    target.style.removeProperty('margin-bottom')
    window.setTimeout( () => {
    target.style.removeProperty('height')
    target.style.removeProperty('overflow')
    target.style.removeProperty('transition-duration')
    target.style.removeProperty('transition-property')
    }, duration)
}
var slideToggle = (target, duration = 500) => {
    if (window.getComputedStyle(target).display === 'none') {
    return slideDown(target, duration)
    } else {
    return slideUp(target, duration)
    }
}
/*===== END TOOGLE =====*/

/*===== START MODALS =====*/
$openregistration.addEventListener('click', function() {
    $modalRegistration.classList.add('jsIsShow')
    $body.classList.add('no-overflow')
})

$closeAllOverlays.forEach(el => {
    el.addEventListener('click', function () {
    $overlay.classList.remove('jsIsShow')
    $body.classList.remove('no-overflow')
    })
})
/*===== END MODALS =====*/

/*===== START VALIDATION =====*/
function testRegexp(regexp, field) {
    field.closest('fieldset').classList.remove('fieldset--error')
    if (!regexp.test(field.value) || field.value == '') {
    field.closest('fieldset').classList.add('fieldset--error')
    field.focus()
    }
}

function testAccept() {
    $politicField.classList.remove('fieldset--error')
    if (!$accept.checked) {
    $politicField.classList.add('fieldset--error')
    }
}
/*===== END VALIDATION =====*/

/* START SEND FORMS */
const ajaxSend = async (formData) => {
    const response = await fetch("handler.php", {
    method: "POST",
    body: formData
    })
    if (!response.ok) {
        throw new Error(`Ошибка по адресу ${url}, статус ошибки ${response.status}`)
    }
    return await response.text()
}
        
if ($form) {
    const $forms = $form
    $forms.forEach(form => {
        form.addEventListener("submit", function (e) {
            e.preventDefault()
            testRegexp($namePattern, $name)
            testRegexp($phonePattern, $phone)
            testAccept()
            if(!document.querySelectorAll('.fieldset--error').length) {
            const formData = new FormData(form)
            ajaxSend(formData)
                .then((response) => {
                form.reset()
                slideToggle(document.querySelector('.jsModalRegistration .modal__body'), 300)
                slideToggle(document.querySelector('.jsModalRegistration .modal__aftersend'), 300)
                })
                .catch((err) => console.error(err))
            }
        })
    })
}      
/* END SEND FORMS */
})()