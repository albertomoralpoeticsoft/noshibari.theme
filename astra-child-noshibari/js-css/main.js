/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/flickitygallery.js":
/*!************************************!*\
  !*** ./src/app/flickitygallery.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// https://github.com/metafizzy/flickity
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function ($) {
  var $slidergallery = $('.wp-block-gallery.slider');

  if ($slidergallery.length) {
    $slidergallery.each(function () {
      var $this = $(this);
      $this.flickity({
        autoPlay: true,
        prevNextButtons: false,
        wrapAround: true,
        pageDots: false
      });
      window.addEventListener('resize', function () {
        $this.flickity('resize');
      });
    });
  }
});

/***/ }),

/***/ "./src/app/flickityhero.js":
/*!*********************************!*\
  !*** ./src/app/flickityhero.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// https://github.com/metafizzy/flickity
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function ($) {
  var $sliderhero = $('.wp-block-group.slider > .wp-block-group__inner-container');

  if (!$sliderhero.length) {
    $sliderhero = $('.wp-block-group.slider');
  }

  if ($sliderhero.length) {
    $sliderhero.each(function () {
      var $this = $(this);
      $this.flickity({
        autoPlay: false,
        prevNextButtons: false,
        wrapAround: true,
        pageDots: false,
        friction: 0.5
      });
      window.addEventListener('resize', function () {
        $this.flickity('resize');
      });

      if ($this.hasClass('autoplay')) {
        setInterval(function () {
          $this.flickity('next', true, false);
        }, 6000);
      }

      $this.flickity('resize');
    });
  }
});

/***/ }),

/***/ "./src/app/inviewport.js":
/*!*******************************!*\
  !*** ./src/app/inviewport.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function ($) {
  var lastScrollTop = 0;

  var inViewport = function inViewport(e) {
    var b = e.get(0).getBoundingClientRect();
    return !(b.top > window.innerHeight || b.bottom < 0);
  };

  var checkInViewport = function checkInViewport(els) {
    els.each(function () {
      var $this = $(this);

      if (inViewport($this)) {
        $this.removeClass('ps-not-in-viewport');
        $this.removeClass('ps-in-viewport');
        $this.addClass('ps-in-viewport');
      } else {
        $this.removeClass('ps-in-viewport');
        $this.removeClass('ps-not-in-viewport');
        $this.addClass('ps-not-in-viewport');
      }
    });
  };

  function init() {
    var els = $('.ps-visual');

    if (els.length) {
      checkInViewport(els);
      document.addEventListener('scroll', function () {
        var st = window.pageYOffset || document.documentElement.scrollTop; // const scrollDir = st > lastScrollTop ? 'down' : 'up'

        lastScrollTop = st <= 0 ? 0 : st;
        checkInViewport(els);
      });
    }
  }

  init();
});

/***/ }),

/***/ "./src/app/main.js":
/*!*************************!*\
  !*** ./src/app/main.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _inviewport__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./inviewport */ "./src/app/inviewport.js");
/* harmony import */ var _subscribe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./subscribe */ "./src/app/subscribe.js");
/* harmony import */ var _flickitygallery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./flickitygallery */ "./src/app/flickitygallery.js");
/* harmony import */ var _flickityhero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./flickityhero */ "./src/app/flickityhero.js");
/* harmony import */ var _queryslider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./queryslider */ "./src/app/queryslider.js");
// import canva from './canva'






(function ($) {
  // canva($)
  (0,_inviewport__WEBPACK_IMPORTED_MODULE_0__["default"])($);
  (0,_subscribe__WEBPACK_IMPORTED_MODULE_1__["default"])($);
  (0,_flickitygallery__WEBPACK_IMPORTED_MODULE_2__["default"])($);
  (0,_flickityhero__WEBPACK_IMPORTED_MODULE_3__["default"])($);
  (0,_queryslider__WEBPACK_IMPORTED_MODULE_4__["default"])($);
})(jQuery);

/***/ }),

/***/ "./src/app/queryslider.js":
/*!********************************!*\
  !*** ./src/app/queryslider.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
// https://github.com/metafizzy/flickity
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function ($) {
  var $sliderquery = $('.wp-block-query.slider');

  if ($sliderquery.length) {
    $sliderquery.each(function () {
      var $this = $(this);
      var $query = $this.find('.wp-block-post-template');
      $query.flickity({
        autoPlay: false,
        prevNextButtons: false,
        wrapAround: true,
        pageDots: false,
        friction: 0.5
      });
      window.addEventListener('resize', function () {
        $query.flickity('resize');
      });

      if ($this.hasClass('autoplay')) {
        console.log('autoplay');
        setInterval(function () {
          $query.flickity('next', true, false);
        }, 6000);
      }

      $query.flickity('resize');
    });
  }
});

/***/ }),

/***/ "./src/app/subscribe.js":
/*!******************************!*\
  !*** ./src/app/subscribe.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (function ($) {
  var $subscribe = $('.shortcode.subscribe');

  if ($subscribe.length) {
    $subscribe.each(function () {
      var $this = $(this);
      var $form = $this.find('form');
      var $inputemail = $form.find('input#email');
      var $inputtitle = $form.find('input#title');
      var $button = $form.find('.wp-block-button');
      var $message = $this.find('.message');
      var messageinvalid = $inputemail.data('message-invalid');
      var messageerror = $inputemail.data('message-error');
      var messageok = $inputemail.data('message-ok');
      $form.validate({
        messages: {
          email: {
            email: messageinvalid
          }
        }
      });
      $inputemail.on('keyup', function () {
        var $this = $(this);

        if ($this.valid()) {
          $button.prop('disabled', false);
        } else {
          $button.prop('disabled', true);
        }
      });
      $button.on('click', function () {
        $form.hide();
        $message.removeClass('warning error success');
        $message.html('Enviando...');
        $message.addClass('warning');
        $message.show();
        fetch('https://noshibari.com/wp-json/noshibari/subscribe', {
          method: 'POST',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            email: $inputemail.val(),
            title: $inputtitle.val()
          })
        }).then(function (response) {
          $message.removeClass('warning error success');

          if (response.status != 200) {
            $message.html(messageerror);
            $message.addClass('error');
          } else {
            $message.html(messageok);
            $message.addClass('success');
          }

          $message.show();
          setTimeout(function () {
            $message.hide();
            $form.show();
          }, 4000);
        });
        return false;
      });
    });
  }
});

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!************************************************************************************************************************!*\
  !*** ./node_modules/webpack-polyfill-injector/src/loader.js?{"modules":["./src/app/main.js","./src/scss/main.scss"]}! ***!
  \************************************************************************************************************************/
// Webpack Polyfill Injector
function main() {
    __webpack_require__(/*! ./src/app/main.js */ "./src/app/main.js");
    __webpack_require__(/*! ./src/scss/main.scss */ "./src/scss/main.scss");
}
if (function() {
    return /* Array.from */ !("from"in Array&&function(){try{return Array.from({length:-Infinity}),"a"===Array.from(new self.Set(["a"]))[0]&&"a"===Array.from(new self.Map([["a","one"]]))[0][0]}catch(r){return!1}}()
) ||
        /* Array.prototype.fill */ !("fill"in Array.prototype
) ||
        /* Array.prototype.find */ !("find"in Array.prototype
) ||
        /* Array.prototype.findIndex */ !("findIndex"in Array.prototype
) ||
        /* Array.prototype.includes */ !("includes"in Array.prototype
) ||
        /* Object.assign */ !("assign"in Object
) ||
        /* Object.entries */ !("entries"in Object
) ||
        /* Object.values */ !("values"in Object
) ||
        /* Promise */ !("Promise"in self
) ||
        /* String.prototype.startsWith */ !("startsWith"in String.prototype
) ||
        /* fetch */ !("fetch"in self&&"Request"in self&&function(){try{return"signal"in new Request("")}catch(e){return!1}}()
);
}.call(window)) {
    var js = document.createElement('script');
    js.src = "/wp-content/themes/astra-child-noshibaripolyfills.js";
    js.onload = main;
    js.onerror = function onError(message) {
        console.error('Could not load the polyfills: ' + message);
    };
    document.head.appendChild(js);
} else {
    main();
}
})();

/******/ })()
;
//# sourceMappingURL=main.js.map