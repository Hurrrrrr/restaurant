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


// Section rendering functions

function buildHeader() {
        const header = document.createElement('div');
        header.id = "header";
    
        const mainBanner = document.createElement("div");
        mainBanner.id = "main-banner";
        mainBanner.textContent = "COOL";
    
        header.appendChild(mainBanner);
    
        const mainNavbar = document.createElement("div");
        mainNavbar.id = "main-navbar";
    
        const navHome = document.createElement("div");
        navHome.id = "nav-home";
        navHome.textContent = "Home";
        
        const navMenu = document.createElement("div");
        navMenu.id = "nav-menu";
        navMenu.textContent = "Menu";
    
        const navContact = document.createElement("div");
        navContact.id = "nav-contact";
        navContact.textContent = "Contact";
    
        mainNavbar.appendChild(navHome);
        mainNavbar.appendChild(navMenu);
        mainNavbar.appendChild(navContact);
    
        header.appendChild(mainNavbar);
    
        return header;
}

function buildMainPic() {
        const mainPicWrap = document.createElement("div");
        mainPicWrap.id = "main-pic-wrap";

        const myMainPic = new Image();
        myMainPic.src = _rest_main_jpeg__WEBPACK_IMPORTED_MODULE_0__;
        mainPicWrap.appendChild(myMainPic);

        return mainPicWrap;
}

function buildMainInfo() {
        const mainInfo = document.createElement("div");
        mainInfo.id = "main-info";

        const infoLocation = document.createElement("div");
        infoLocation.id = "info-location";
        createH2("Location", infoLocation);

        const infoHours = document.createElement("div");
        infoHours.id = "info-hours";
        createH2("Hours", infoHours);
        buildHoursList(infoHours);

        mainInfo.appendChild(infoLocation);
        mainInfo.appendChild(infoHours);

        return mainInfo;
}

function buildSocial() {
        const mainSocial = document.createElement("div");
        mainSocial.id = "main-social";

        createAnchor("Twitter", "https://twitter.com/", mainSocial);
        createAnchor("Facebook", "https://facebook.com/", mainSocial);
        createAnchor("Instagram", "https://instagram.com/", mainSocial);

        return mainSocial;
}

function buildFooter() {
        const mainFooter = document.createElement("div");
        mainFooter.id = "main-footer";

        createP("Built for The Odin Project, 2022", mainFooter);

        return mainFooter;
}



// Support functions

function buildHoursList(myElement) {
        const hours = ["Tue-Thu: 10-10", "Fri-Sat: 10-11", "Sun: 11-9", "Mon: Closed"];
        
        const hoursList = document.createElement("ul");
        hoursList.id = "hours-list";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmdUM7O0FBRXZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsNENBQU87QUFDL0I7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7QUFJQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpRUFBZSxXQUFXLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC8uL3NyYy9tYWluLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQpXG5cdFx0c2NyaXB0VXJsID0gZG9jdW1lbnQuY3VycmVudFNjcmlwdC5zcmNcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSBzY3JpcHRVcmwgPSBzY3JpcHRzW3NjcmlwdHMubGVuZ3RoIC0gMV0uc3JjXG5cdH1cbn1cbi8vIFdoZW4gc3VwcG9ydGluZyBicm93c2VycyB3aGVyZSBhbiBhdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIHlvdSBtdXN0IHNwZWNpZnkgYW4gb3V0cHV0LnB1YmxpY1BhdGggbWFudWFsbHkgdmlhIGNvbmZpZ3VyYXRpb25cbi8vIG9yIHBhc3MgYW4gZW1wdHkgc3RyaW5nIChcIlwiKSBhbmQgc2V0IHRoZSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyB2YXJpYWJsZSBmcm9tIHlvdXIgY29kZSB0byB1c2UgeW91ciBvd24gbG9naWMuXG5pZiAoIXNjcmlwdFVybCkgdGhyb3cgbmV3IEVycm9yKFwiQXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCBpbiB0aGlzIGJyb3dzZXJcIik7XG5zY3JpcHRVcmwgPSBzY3JpcHRVcmwucmVwbGFjZSgvIy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcPy4qJC8sIFwiXCIpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgXCIvXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXy5wID0gc2NyaXB0VXJsOyIsImltcG9ydCBtYWluUGljIGZyb20gXCIuL3Jlc3QtbWFpbi5qcGVnXCI7XG5cbi8vIFNlY3Rpb24gcmVuZGVyaW5nIGZ1bmN0aW9uc1xuXG5mdW5jdGlvbiBidWlsZEhlYWRlcigpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIGhlYWRlci5pZCA9IFwiaGVhZGVyXCI7XG4gICAgXG4gICAgICAgIGNvbnN0IG1haW5CYW5uZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYWluQmFubmVyLmlkID0gXCJtYWluLWJhbm5lclwiO1xuICAgICAgICBtYWluQmFubmVyLnRleHRDb250ZW50ID0gXCJDT09MXCI7XG4gICAgXG4gICAgICAgIGhlYWRlci5hcHBlbmRDaGlsZChtYWluQmFubmVyKTtcbiAgICBcbiAgICAgICAgY29uc3QgbWFpbk5hdmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIG1haW5OYXZiYXIuaWQgPSBcIm1haW4tbmF2YmFyXCI7XG4gICAgXG4gICAgICAgIGNvbnN0IG5hdkhvbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBuYXZIb21lLmlkID0gXCJuYXYtaG9tZVwiO1xuICAgICAgICBuYXZIb21lLnRleHRDb250ZW50ID0gXCJIb21lXCI7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBuYXZNZW51ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmF2TWVudS5pZCA9IFwibmF2LW1lbnVcIjtcbiAgICAgICAgbmF2TWVudS50ZXh0Q29udGVudCA9IFwiTWVudVwiO1xuICAgIFxuICAgICAgICBjb25zdCBuYXZDb250YWN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbmF2Q29udGFjdC5pZCA9IFwibmF2LWNvbnRhY3RcIjtcbiAgICAgICAgbmF2Q29udGFjdC50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIFxuICAgICAgICBtYWluTmF2YmFyLmFwcGVuZENoaWxkKG5hdkhvbWUpO1xuICAgICAgICBtYWluTmF2YmFyLmFwcGVuZENoaWxkKG5hdk1lbnUpO1xuICAgICAgICBtYWluTmF2YmFyLmFwcGVuZENoaWxkKG5hdkNvbnRhY3QpO1xuICAgIFxuICAgICAgICBoZWFkZXIuYXBwZW5kQ2hpbGQobWFpbk5hdmJhcik7XG4gICAgXG4gICAgICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTWFpblBpYygpIHtcbiAgICAgICAgY29uc3QgbWFpblBpY1dyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYWluUGljV3JhcC5pZCA9IFwibWFpbi1waWMtd3JhcFwiO1xuXG4gICAgICAgIGNvbnN0IG15TWFpblBpYyA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBteU1haW5QaWMuc3JjID0gbWFpblBpYztcbiAgICAgICAgbWFpblBpY1dyYXAuYXBwZW5kQ2hpbGQobXlNYWluUGljKTtcblxuICAgICAgICByZXR1cm4gbWFpblBpY1dyYXA7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTWFpbkluZm8oKSB7XG4gICAgICAgIGNvbnN0IG1haW5JbmZvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFpbkluZm8uaWQgPSBcIm1haW4taW5mb1wiO1xuXG4gICAgICAgIGNvbnN0IGluZm9Mb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGluZm9Mb2NhdGlvbi5pZCA9IFwiaW5mby1sb2NhdGlvblwiO1xuICAgICAgICBjcmVhdGVIMihcIkxvY2F0aW9uXCIsIGluZm9Mb2NhdGlvbik7XG5cbiAgICAgICAgY29uc3QgaW5mb0hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgaW5mb0hvdXJzLmlkID0gXCJpbmZvLWhvdXJzXCI7XG4gICAgICAgIGNyZWF0ZUgyKFwiSG91cnNcIiwgaW5mb0hvdXJzKTtcbiAgICAgICAgYnVpbGRIb3Vyc0xpc3QoaW5mb0hvdXJzKTtcblxuICAgICAgICBtYWluSW5mby5hcHBlbmRDaGlsZChpbmZvTG9jYXRpb24pO1xuICAgICAgICBtYWluSW5mby5hcHBlbmRDaGlsZChpbmZvSG91cnMpO1xuXG4gICAgICAgIHJldHVybiBtYWluSW5mbztcbn1cblxuZnVuY3Rpb24gYnVpbGRTb2NpYWwoKSB7XG4gICAgICAgIGNvbnN0IG1haW5Tb2NpYWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBtYWluU29jaWFsLmlkID0gXCJtYWluLXNvY2lhbFwiO1xuXG4gICAgICAgIGNyZWF0ZUFuY2hvcihcIlR3aXR0ZXJcIiwgXCJodHRwczovL3R3aXR0ZXIuY29tL1wiLCBtYWluU29jaWFsKTtcbiAgICAgICAgY3JlYXRlQW5jaG9yKFwiRmFjZWJvb2tcIiwgXCJodHRwczovL2ZhY2Vib29rLmNvbS9cIiwgbWFpblNvY2lhbCk7XG4gICAgICAgIGNyZWF0ZUFuY2hvcihcIkluc3RhZ3JhbVwiLCBcImh0dHBzOi8vaW5zdGFncmFtLmNvbS9cIiwgbWFpblNvY2lhbCk7XG5cbiAgICAgICAgcmV0dXJuIG1haW5Tb2NpYWw7XG59XG5cbmZ1bmN0aW9uIGJ1aWxkRm9vdGVyKCkge1xuICAgICAgICBjb25zdCBtYWluRm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgbWFpbkZvb3Rlci5pZCA9IFwibWFpbi1mb290ZXJcIjtcblxuICAgICAgICBjcmVhdGVQKFwiQnVpbHQgZm9yIFRoZSBPZGluIFByb2plY3QsIDIwMjJcIiwgbWFpbkZvb3Rlcik7XG5cbiAgICAgICAgcmV0dXJuIG1haW5Gb290ZXI7XG59XG5cblxuXG4vLyBTdXBwb3J0IGZ1bmN0aW9uc1xuXG5mdW5jdGlvbiBidWlsZEhvdXJzTGlzdChteUVsZW1lbnQpIHtcbiAgICAgICAgY29uc3QgaG91cnMgPSBbXCJUdWUtVGh1OiAxMC0xMFwiLCBcIkZyaS1TYXQ6IDEwLTExXCIsIFwiU3VuOiAxMS05XCIsIFwiTW9uOiBDbG9zZWRcIl07XG4gICAgICAgIFxuICAgICAgICBjb25zdCBob3Vyc0xpc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidWxcIik7XG4gICAgICAgIGhvdXJzTGlzdC5pZCA9IFwiaG91cnMtbGlzdFwiO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaG91cnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpXCIpO1xuICAgICAgICAgICAgbGkuaW5uZXJIVE1MID0gaG91cnNbaV07XG4gICAgICAgICAgICBob3Vyc0xpc3QuYXBwZW5kQ2hpbGQobGkpO1xuICAgICAgICB9XG5cbiAgICAgICAgbXlFbGVtZW50LmFwcGVuZENoaWxkKGhvdXJzTGlzdCk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUgyKHRleHQsIG15RWxlbWVudCkge1xuICAgICAgICBjb25zdCBoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImgyXCIpO1xuICAgICAgICBjb25zdCB0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUodGV4dCk7XG4gICAgICAgIGguYXBwZW5kQ2hpbGQodCk7XG4gICAgICAgIG15RWxlbWVudC5hcHBlbmRDaGlsZChoKTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQW5jaG9yKHRleHQsIHVybCwgbXlFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IGEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYVwiKTtcbiAgICAgICAgY29uc3QgbGluayA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xuICAgICAgICBhLmFwcGVuZENoaWxkKGxpbmspO1xuICAgICAgICBhLnRpdGxlID0gdGV4dDtcbiAgICAgICAgYS5ocmVmID0gdXJsO1xuICAgICAgICBteUVsZW1lbnQuYXBwZW5kQ2hpbGQoYSk7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVAodGV4dCwgbXlFbGVtZW50KSB7XG4gICAgICAgIGNvbnN0IHAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICAgICAgY29uc3QgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKHRleHQpO1xuICAgICAgICBwLmFwcGVuZENoaWxkKHQpO1xuICAgICAgICBteUVsZW1lbnQuYXBwZW5kQ2hpbGQocCk7XG59XG5cblxuXG4vLyBNYWluIGV4cG9ydCBmdW5jdGlvblxuXG5mdW5jdGlvbiBpbml0V2Vic2l0ZSgpIHtcbiAgICBjb25zb2xlLmxvZyhcInNkZmdcIik7XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudC5pZCA9IFwiY29udGVudFwiO1xuICAgIGNvbnNvbGUubG9nKGNvbnRlbnQpO1xuXG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZEhlYWRlcigpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkTWFpblBpYygpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkTWFpbkluZm8oKSk7XG4gICAgY29udGVudC5hcHBlbmRDaGlsZChidWlsZFNvY2lhbCgpKTtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGJ1aWxkRm9vdGVyKCkpO1xuXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChjb250ZW50KTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgaW5pdFdlYnNpdGU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9