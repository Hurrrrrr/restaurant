/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/rest-main.jpeg":
/*!****************************!*\
  !*** ./src/rest-main.jpeg ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "96285ccaf49f5d7e3901.jpeg";

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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rest_main_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rest-main.jpeg */ "./src/rest-main.jpeg");


const hours = ["Tue-Thu: 10-10", "Fri-Sat: 10-11", "Sun: 11-9", "Mon: Closed"];

// Section rendering functions

function buildHeader() {
        const header = document.createElement('div');
        header.classList = "header";
    
        const mainBanner = document.createElement("div");
        mainBanner.classList = "main banner";
        mainBanner.textContent = "COOL";
    
        header.appendChild(mainBanner);
    
        const mainNavbar = document.createElement("div");
        mainNavbar.classList = "main navbar";
    
        const navHome = document.createElement("div");
        navHome.classList = "nav home";
        navHome.id = "home-button";
        navHome.textContent = "Home";
        
        const navMenu = document.createElement("div");
        navMenu.classList = "nav menu";
        navMenu.id = "menu-button";
        navMenu.textContent = "Menu";
    
        const navContact = document.createElement("div");
        navContact.classList = "nav contact";
        navContact.textContent = "Contact";
    
        mainNavbar.appendChild(navHome);
        mainNavbar.appendChild(navMenu);
        mainNavbar.appendChild(navContact);
    
        header.appendChild(mainNavbar);
    
        return header;
}

function buildMainPic() {
        const mainPicWrap = document.createElement("div");
        mainPicWrap.classList = "main pic-wrap";
        mainPicWrap.id = "main-pic-wrap";

        const myMainPic = new Image();
        myMainPic.src = _rest_main_jpeg__WEBPACK_IMPORTED_MODULE_0__;
        mainPicWrap.appendChild(myMainPic);

        return mainPicWrap;
}

function buildMainInfo() {
        const mainInfo = document.createElement("div");
        mainInfo.classList = "main info";
        mainInfo.id = "main-info";

        const infoLocation = document.createElement("div");
        infoLocation.classList = "info location";
        createH2("Location", infoLocation);

        const infoHours = document.createElement("div");
        infoHours.classList = "info hours";
        createH2("Hours", infoHours);
        buildHoursList(infoHours);

        mainInfo.appendChild(infoLocation);
        mainInfo.appendChild(infoHours);

        return mainInfo;
}

function buildSocial() {
        const mainSocial = document.createElement("div");
        mainSocial.classList = "main social";

        createAnchor("Twitter", "https://twitter.com/", mainSocial);
        createAnchor("Facebook", "https://facebook.com/", mainSocial);
        createAnchor("Instagram", "https://instagram.com/", mainSocial);

        return mainSocial;
}

function buildFooter() {
        const mainFooter = document.createElement("div");
        mainFooter.classList = "main footer";

        createP("Built for The Odin Project, 2022", mainFooter);

        return mainFooter;
}



// Support functions

function buildHoursList(myElement) { 
        const hoursList = document.createElement("ul");
        hoursList.classList = "hours list";

        for (let i = 0; i < hours.length; i++) {
            const li = document.createElement("li");
            li.innerHTML = hours[i];
            hoursList.appendChild(li);
        }

        myElement.appendChild(hoursList);
}

function createH2(text, myElement) {
        const h = document.createElement("h2");
        const t = document.createTextNode(text);
        h.appendChild(t);
        myElement.appendChild(h);
}

function createAnchor(text, url, myElement) {
        const a = document.createElement("a");
        const link = document.createTextNode(text);
        a.appendChild(link);
        a.title = text;
        a.href = url;
        myElement.appendChild(a);
}

function createP(text, myElement) {
        const p = document.createElement("p");
        const t = document.createTextNode(text);
        p.appendChild(t);
        myElement.appendChild(p);
}



// Main export function

function initWebsite() {
    console.log("sdfg");
    const content = document.createElement("div");
    content.id = "content";
    console.log(content);

    content.appendChild(buildHeader());
    content.appendChild(buildMainPic());
    content.appendChild(buildMainInfo());
    content.appendChild(buildSocial());
    content.appendChild(buildFooter());

    document.body.appendChild(content);
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initWebsite);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmdUM7O0FBRXZDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsNENBQU87QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7OztBQUlBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7O0FBSUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsaUVBQWUsV0FBVyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvbWFpbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgbWFpblBpYyBmcm9tIFwiLi9yZXN0LW1haW4uanBlZ1wiO1xuXG5jb25zdCBob3VycyA9IFtcIlR1ZS1UaHU6IDEwLTEwXCIsIFwiRnJpLVNhdDogMTAtMTFcIiwgXCJTdW46IDExLTlcIiwgXCJNb246IENsb3NlZFwiXTtcblxuLy8gU2VjdGlvbiByZW5kZXJpbmcgZnVuY3Rpb25zXG5cbmZ1bmN0aW9uIGJ1aWxkSGVhZGVyKCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgaGVhZGVyLmNsYXNzTGlzdCA9IFwiaGVhZGVyXCI7XG4gICAgXG4gICAgICAgIGNvbnN0IG1haW5CYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYWluQmFubmVyLmNsYXNzTGlzdCA9IFwibWFpbiBiYW5uZXJcIjtcbiAgICAgICAgbWFpbkJhbm5lci50ZXh0Q29udGVudCA9IFwiQ09PTFwiO1xuICAgIFxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWFpbkJhbm5lcik7XG4gICAgXG4gICAgICAgIGNvbnN0IG1haW5OYXZiYXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYWluTmF2YmFyLmNsYXNzTGlzdCA9IFwibWFpbiBuYXZiYXJcIjtcbiAgICBcbiAgICAgICAgY29uc3QgbmF2SG9tZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5hdkhvbWUuY2xhc3NMaXN0ID0gXCJuYXYgaG9tZVwiO1xuICAgICAgICBuYXZIb21lLmlkID0gXCJob21lLWJ1dHRvblwiO1xuICAgICAgICBuYXZIb21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmF2TWVudS5jbGFzc0xpc3QgPSBcIm5hdiBtZW51XCI7XG4gICAgICAgIG5hdk1lbnUuaWQgPSBcIm1lbnUtYnV0dG9uXCI7XG4gICAgICAgIG5hdk1lbnUudGV4dENvbnRlbnQgPSBcIk1lbnVcIjtcbiAgICBcbiAgICAgICAgY29uc3QgbmF2Q29udGFjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG5hdkNvbnRhY3QuY2xhc3NMaXN0ID0gXCJuYXYgY29udGFjdFwiO1xuICAgICAgICBuYXZDb250YWN0LnRleHRDb250ZW50ID0gXCJDb250YWN0XCI7XG4gICAgXG4gICAgICAgIG1haW5OYXZiYXIuYXBwZW5kQ2hpbGQobmF2SG9tZSk7XG4gICAgICAgIG1haW5OYXZiYXIuYXBwZW5kQ2hpbGQobmF2TWVudSk7XG4gICAgICAgIG1haW5OYXZiYXIuYXBwZW5kQ2hpbGQobmF2Q29udGFjdCk7XG4gICAgXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChtYWluTmF2YmFyKTtcbiAgICBcbiAgICAgICAgcmV0dXJuIGhlYWRlcjtcbn1cblxuZnVuY3Rpb24gYnVpbGRNYWluUGljKCkge1xuICAgICAgICBjb25zdCBtYWluUGljV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1haW5QaWNXcmFwLmNsYXNzTGlzdCA9IFwibWFpbiBwaWMtd3JhcFwiO1xuICAgICAgICBtYWluUGljV3JhcC5pZCA9IFwibWFpbi1waWMtd3JhcFwiO1xuXG4gICAgICAgIGNvbnN0IG15TWFpblBpYyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBteU1haW5QaWMuc3JjID0gbWFpblBpYztcbiAgICAgICAgbWFpblBpY1dyYXAuYXBwZW5kQ2hpbGQobXlNYWluUGljKTtcblxuICAgICAgICByZXR1cm4gbWFpblBpY1dyYXA7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTWFpbkluZm8oKSB7XG4gICAgICAgIGNvbnN0IG1haW5JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFpbkluZm8uY2xhc3NMaXN0ID0gXCJtYWluIGluZm9cIjtcbiAgICAgICAgbWFpbkluZm8uaWQgPSBcIm1haW4taW5mb1wiO1xuXG4gICAgICAgIGNvbnN0IGluZm9Mb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm9Mb2NhdGlvbi5jbGFzc0xpc3QgPSBcImluZm8gbG9jYXRpb25cIjtcbiAgICAgICAgY3JlYXRlSDIoXCJMb2NhdGlvblwiLCBpbmZvTG9jYXRpb24pO1xuXG4gICAgICAgIGNvbnN0IGluZm9Ib3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm9Ib3Vycy5jbGFzc0xpc3QgPSBcImluZm8gaG91cnNcIjtcbiAgICAgICAgY3JlYXRlSDIoXCJIb3Vyc1wiLCBpbmZvSG91cnMpO1xuICAgICAgICBidWlsZEhvdXJzTGlzdChpbmZvSG91cnMpO1xuXG4gICAgICAgIG1haW5JbmZvLmFwcGVuZENoaWxkKGluZm9Mb2NhdGlvbik7XG4gICAgICAgIG1haW5JbmZvLmFwcGVuZENoaWxkKGluZm9Ib3Vycyk7XG5cbiAgICAgICAgcmV0dXJuIG1haW5JbmZvO1xufVxuXG5mdW5jdGlvbiBidWlsZFNvY2lhbCgpIHtcbiAgICAgICAgY29uc3QgbWFpblNvY2lhbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1haW5Tb2NpYWwuY2xhc3NMaXN0ID0gXCJtYWluIHNvY2lhbFwiO1xuXG4gICAgICAgIGNyZWF0ZUFuY2hvcihcIlR3aXR0ZXJcIiwgXCJodHRwczovL3R3aXR0ZXIuY29tL1wiLCBtYWluU29jaWFsKTtcbiAgICAgICAgY3JlYXRlQW5jaG9yKFwiRmFjZWJvb2tcIiwgXCJodHRwczovL2ZhY2Vib29rLmNvbS9cIiwgbWFpblNvY2lhbCk7XG4gICAgICAgIGNyZWF0ZUFuY2hvcihcIkluc3RhZ3JhbVwiLCBcImh0dHBzOi8vaW5zdGFncmFtLmNvbS9cIiwgbWFpblNvY2lhbCk7XG5cbiAgICAgICAgcmV0dXJuIG1haW5Tb2NpYWw7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRm9vdGVyKCkge1xuICAgICAgICBjb25zdCBtYWluRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFpbkZvb3Rlci5jbGFzc0xpc3QgPSBcIm1haW4gZm9vdGVyXCI7XG5cbiAgICAgICAgY3JlYXRlUChcIkJ1aWx0IGZvciBUaGUgT2RpbiBQcm9qZWN0LCAyMDIyXCIsIG1haW5Gb290ZXIpO1xuXG4gICAgICAgIHJldHVybiBtYWluRm9vdGVyO1xufVxuXG5cblxuLy8gU3VwcG9ydCBmdW5jdGlvbnNcblxuZnVuY3Rpb24gYnVpbGRIb3Vyc0xpc3QobXlFbGVtZW50KSB7IFxuICAgICAgICBjb25zdCBob3Vyc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGhvdXJzTGlzdC5jbGFzc0xpc3QgPSBcImhvdXJzIGxpc3RcIjtcblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGhvdXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaVwiKTtcbiAgICAgICAgICAgIGxpLmlubmVySFRNTCA9IGhvdXJzW2ldO1xuICAgICAgICAgICAgaG91cnNMaXN0LmFwcGVuZENoaWxkKGxpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIG15RWxlbWVudC5hcHBlbmRDaGlsZChob3Vyc0xpc3QpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVIMih0ZXh0LCBteUVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICAgICAgY29uc3QgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xuICAgICAgICBoLmFwcGVuZENoaWxkKHQpO1xuICAgICAgICBteUVsZW1lbnQuYXBwZW5kQ2hpbGQoaCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUFuY2hvcih0ZXh0LCB1cmwsIG15RWxlbWVudCkge1xuICAgICAgICBjb25zdCBhID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImFcIik7XG4gICAgICAgIGNvbnN0IGxpbmsgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcbiAgICAgICAgYS5hcHBlbmRDaGlsZChsaW5rKTtcbiAgICAgICAgYS50aXRsZSA9IHRleHQ7XG4gICAgICAgIGEuaHJlZiA9IHVybDtcbiAgICAgICAgbXlFbGVtZW50LmFwcGVuZENoaWxkKGEpO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVQKHRleHQsIG15RWxlbWVudCkge1xuICAgICAgICBjb25zdCBwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgICAgIGNvbnN0IHQgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSh0ZXh0KTtcbiAgICAgICAgcC5hcHBlbmRDaGlsZCh0KTtcbiAgICAgICAgbXlFbGVtZW50LmFwcGVuZENoaWxkKHApO1xufVxuXG5cblxuLy8gTWFpbiBleHBvcnQgZnVuY3Rpb25cblxuZnVuY3Rpb24gaW5pdFdlYnNpdGUoKSB7XG4gICAgY29uc29sZS5sb2coXCJzZGZnXCIpO1xuICAgIGNvbnN0IGNvbnRlbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgIGNvbnRlbnQuaWQgPSBcImNvbnRlbnRcIjtcbiAgICBjb25zb2xlLmxvZyhjb250ZW50KTtcblxuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRIZWFkZXIoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZE1haW5QaWMoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZE1haW5JbmZvKCkpO1xuICAgIGNvbnRlbnQuYXBwZW5kQ2hpbGQoYnVpbGRTb2NpYWwoKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZEZvb3RlcigpKTtcblxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGluaXRXZWJzaXRlOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==