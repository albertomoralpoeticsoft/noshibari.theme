/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/main.js":
/*!*************************!*\
  !*** ./src/app/main.js ***!
  \*************************/
/***/ (() => {

(function ($) {})(jQuery);

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