/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/assets/js/mobileNav.js":
/*!************************************!*\
  !*** ./src/assets/js/mobileNav.js ***!
  \************************************/
/***/ (() => {

eval("const burger = document.getElementById('sidebarToggle');\nconst sidebar = document.getElementById('sidebar ');\nconst page = document.getElementById('page');\nconst body = document.body;\n\nburger.addEventListener('click', ev => {\n    if ( body.classList.contains('show-sidebar') ) {\n        closeSidebar();\n    } else {\n        showSidebar();\n    }\n})\n\nconst showSidebar = () => {\n    let mask = document.createElement('div');\n    mask.classList.add('page__mask');\n    mask.addEventListener('click', closeSidebar);\n    page.appendChild(mask);\n\n    body.classList.add('show-sidebar')\n\n    setTimeout(() => {\n        mask.style.opacity = '1';\n    },  1);\n}\n\nconst closeSidebar = () => {\n        body.classList.remove('show-sidebar')\n        document.querySelector('.page__mask').remove();\n}\n\n//# sourceURL=webpack://personal-blog/./src/assets/js/mobileNav.js?");

/***/ }),

/***/ "./src/assets/js/modal.js":
/*!********************************!*\
  !*** ./src/assets/js/modal.js ***!
  \********************************/
/***/ (() => {

eval("const modalBtn = document.querySelectorAll('[data-modal]');\r\nconst body = document.body;\r\nconst modalClose = document.querySelectorAll('.modal__close');\r\nconst modal = document.querySelectorAll('.modal');\r\n\r\nmodalBtn.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let $this = event.currentTarget;\r\n        let modalId = $this.getAttribute('data-modal');\r\n        let modal = document.getElementById(modalId);\r\n        let modalContent = modal.querySelector('.modal__content');\r\n\r\n        modalContent.addEventListener('click', event => {\r\n            event.stopPropagation();\r\n        })\r\n\r\n        modal.classList.add('show');\r\n        body.classList.add('no-scroll');\r\n\r\n        setTimeout(() => {\r\n            modalContent.style.transform = 'none';\r\n            modalContent.style.opacity = '1';\r\n        },  1);\r\n    })\r\n})\r\n\r\nmodalClose.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let currentModal = event.currentTarget.closest('.modal');\r\n\r\n        closeModal(currentModal);\r\n    })\r\n})\r\n\r\nmodal.forEach(item => {\r\n    item.addEventListener('click', event => {\r\n        let currentModal = event.currentTarget;\r\n\r\n        closeModal(currentModal);\r\n    })\r\n})\r\n\r\nconst closeModal = modal => {\r\n    let modalContent = modal.querySelector('.modal__content');\r\n    modalContent.removeAttribute('style');\r\n\r\n    setTimeout(() => {\r\n        modal.classList.remove('show');\r\n        body.classList.remove('no-scroll');\r\n    },  200);\r\n}\r\n\n\n//# sourceURL=webpack://personal-blog/./src/assets/js/modal.js?");

/***/ }),

/***/ "./src/assets/js/textarea.js":
/*!***********************************!*\
  !*** ./src/assets/js/textarea.js ***!
  \***********************************/
/***/ (() => {

eval("const textArea = document.querySelectorAll('[data-autoresize]')\n\ntextArea.forEach(item => {\n    let textAreaH = item.offsetHeight\n\n    item.addEventListener('input', ev => {\n        let $this = ev.target\n\n        $this.style.height = textAreaH + 'px'\n        $this.style.height = $this.scrollHeight + 'px'\n    })\n})\n\n//# sourceURL=webpack://personal-blog/./src/assets/js/textarea.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/assets/js/mobileNav.js"]();
/******/ 	__webpack_modules__["./src/assets/js/modal.js"]();
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/assets/js/textarea.js"]();
/******/ 	
/******/ })()
;