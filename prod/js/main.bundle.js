/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _stylus_main_styl__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _stylus_main_styl__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_stylus_main_styl__WEBPACK_IMPORTED_MODULE_0__);

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

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);