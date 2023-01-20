/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(6);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(7);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),
/* 2 */
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),
/* 3 */
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),
/* 4 */
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),
/* 5 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),
/* 6 */
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),
/* 7 */
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),
/* 8 */
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(10);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box;\n}\n\n.list-container {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  width: 70%;\n  height: auto;\n  margin: auto;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.1), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n  margin-top: 50px;\n  background-color: #faf5f5;\n}\n\n.container {\n  display: flex;\n  gap: 5px;\n  flex-direction: column;\n}\n\n.title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background-color: #fff;\n  color: rgb(39, 38, 38);\n  padding: 20px;\n  font-family:\n    \"Lucida Sans\",\n    \"Lucida Sans Regular\",\n    \"Lucida Grande\",\n    \"Lucida Sans Unicode\",\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n\n.fa-rotate {\n  font-size: 30px;\n  color: #302e2e;\n}\n\n.fa-rotate:hover {\n  cursor: pointer;\n  color: rgb(135, 188, 223);\n}\n\n.fa-trash-can {\n  font-size: 30px;\n  color: #302e2e;\n  margin-left: -20px;\n}\n\n.fa-trash-can:hover {\n  color: tomato;\n  cursor: pointer;\n}\n\n.to-do-container {\n  display: flex;\n  align-items: center;\n  gap: 30px;\n  background-color: #fff;\n}\n\n.to-do {\n  display: flex;\n  gap: 10px;\n  padding: 20px;\n  width: 95%;\n}\n\ninput[type=\"text\"] {\n  width: 100%;\n  padding: 20px;\n  font-size: 20px;\n  color: rgb(39, 38, 38);\n  border: none;\n  padding-left: 50px;\n  font-family:\n    \"Lucida Sans\",\n    \"Lucida Sans Regular\",\n    \"Lucida Grande\",\n    \"Lucida Sans Unicode\",\n    Geneva,\n    Verdana,\n    sans-serif;\n}\n\ninput[type=\"text\"]:focus {\n  outline: none;\n}\n\n#the-input:focus {\n  outline: none;\n  background-color: rgb(211, 212, 99);\n}\n\ninput[type=\"checkbox\"] {\n  width: 30px;\n}\n\n.clear {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  padding: 40px;\n  background-color: #d1d1d1;\n  color: #a09c9c;\n  width: 100%;\n  font-family:\n    \"Lucida Sans\",\n    \"Lucida Sans Regular\",\n    \"Lucida Grande\",\n    \"Lucida Sans Unicode\",\n    Geneva,\n    Verdana,\n    sans-serif;\n  font-size: 20px;\n  font-weight: 800;\n  font-style: italic;\n}\n\n.clear:hover {\n  cursor: pointer;\n}\n\n.line-over {\n  text-decoration: line-through;\n  color: rgb(128, 128, 128);\n}\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),
/* 9 */
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),
/* 10 */
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),
/* 11 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clearBtn": () => (/* binding */ clearBtn),
/* harmony export */   "listContainer": () => (/* binding */ listContainer),
/* harmony export */   "refresh": () => (/* binding */ refresh),
/* harmony export */   "textInput": () => (/* binding */ textInput)
/* harmony export */ });
const listContainer = document.querySelector('.container');
const textInput = document.querySelector('.the-input');
const clearBtn = document.querySelector('.clear');
const refresh = document.querySelector('.fa-rotate');



/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addList": () => (/* binding */ addList),
/* harmony export */   "checkCompleted": () => (/* binding */ checkCompleted),
/* harmony export */   "clearCompleted": () => (/* binding */ clearCompleted),
/* harmony export */   "deleteList": () => (/* binding */ deleteList),
/* harmony export */   "editTask": () => (/* binding */ editTask),
/* harmony export */   "getFromLocal": () => (/* binding */ getFromLocal),
/* harmony export */   "refreshPage": () => (/* binding */ refreshPage)
/* harmony export */ });
/* harmony import */ var _variables_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(11);
/* harmony import */ var _check_box_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);



let toDoInfo = [];

// Display Task
const displayTask = () => {
  _variables_js__WEBPACK_IMPORTED_MODULE_0__.listContainer.innerHTML = '';
  toDoInfo.forEach((element) => {
    const toDoList = `
              <div class="to-do-container" id = "${element.index - 1}">
                      <div class="to-do">
                        <input type="checkbox" data-action="checkbox">
                        <input type="text" value="${element.description}" data-action="edit" data.id = "${element.index}">
                      </div>
                      <div class="to-do-icon" id="delete-btn">
                        <i class="fa-solid fa-trash-can" data-action="delete"></i>
                      </div>
                  </div>
              `;
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.listContainer.innerHTML += toDoList;
    _variables_js__WEBPACK_IMPORTED_MODULE_0__.textInput.value = '';
  });
};
// Add to local Storage
const storeTolocalStorage = (arr) => {
  const stringifyData = JSON.stringify(arr);
  localStorage.setItem('toDolist', stringifyData);
};

//   Add list
const addList = () => {
  const eachList = {};
  eachList.description = _variables_js__WEBPACK_IMPORTED_MODULE_0__.textInput.value;
  eachList.completed = false;
  eachList.index = toDoInfo.length + 1;
  toDoInfo.push(eachList);
  displayTask();
  storeTolocalStorage(toDoInfo);
};

const resetIndex = (arr) => {
  for (let i = 0; i < arr.length; i += 1) {
    arr[i].index = i + 1;
  }
};

// Delete list
const deleteList = (index) => {
  toDoInfo.splice(index, 1);
  resetIndex(toDoInfo);
  displayTask();
  storeTolocalStorage(toDoInfo);
};

// EDIT TO-DO TASK FUNCTION
const editTask = (Id, input) => {
  toDoInfo[Id].description = input.value;
  displayTask();
  storeTolocalStorage(toDoInfo);
};

const getFromLocal = () => {
  const getJsonData = localStorage.getItem('toDolist');
  if (getJsonData) {
    toDoInfo = JSON.parse(getJsonData);
  }
  displayTask();
};

/** CHECKBOX FUNCTION */
const checkCompleted = (buttonId, box) => {
  box.nextElementSibling.classList.toggle('line-over');
  toDoInfo[buttonId].completed = (0,_check_box_js__WEBPACK_IMPORTED_MODULE_1__["default"])(box);
  storeTolocalStorage(toDoInfo);
  if (toDoInfo[buttonId].completed === true) {
    box.checked = true;
    box.nextElementSibling.classList.add('line-over');
  }
};

const clearCompleted = () => {
  toDoInfo = toDoInfo.filter((obj) => obj.completed !== true);
  displayTask();
  resetIndex(toDoInfo);
  storeTolocalStorage(toDoInfo);
};

const refreshPage = () => {
  window.location.reload();
};


/***/ }),
/* 13 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const checkBox = (box) => {
  if (box.checked) {
    return true;
  }
  return false;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (checkBox);

/***/ })
/******/ 	]);
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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _modules_variables_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(11);
/* harmony import */ var _modules_displaylist_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(12);
/* harmony import */ var _modules_check_box_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(13);





window.addEventListener('load', () => {
  (0,_modules_displaylist_js__WEBPACK_IMPORTED_MODULE_2__.getFromLocal)();
});

_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.textInput.addEventListener('keypress', (e) => {
  const { target } = e;
  if (target.value === '') return;
  if (e.key === 'Enter') {
    (0,_modules_displaylist_js__WEBPACK_IMPORTED_MODULE_2__.addList)();
  }
});

_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.listContainer.addEventListener('click', (e) => {
  const { target } = e;
  const parentElement = target.parentNode.parentNode;
  if (!parentElement.classList.contains('to-do-container')) return;
  const eachListId = Number(parentElement.id);
  // target the data action
  const { action } = target.dataset;

  if (action === 'delete') {
    (0,_modules_displaylist_js__WEBPACK_IMPORTED_MODULE_2__.deleteList)(eachListId);
  }
});

_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.listContainer.addEventListener('change', (e) => {
  const { target } = e;
  const parentElement = target.parentNode.parentNode;
  if (!parentElement.classList.contains('to-do-container')) return;
  const eachListId = Number(parentElement.id);
  // target the data action
  const { action } = target.dataset;
  if (action === 'edit') {
    (0,_modules_displaylist_js__WEBPACK_IMPORTED_MODULE_2__.editTask)(eachListId, target);
  }
});

_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.listContainer.addEventListener('click', (e) => {
  const { target } = e;
  const parentElement = target.parentNode.parentNode;
  if (!parentElement.classList.contains('to-do-container')) return;
  const eachListId = Number(parentElement.id);
  // target the data action
  const { action } = target.dataset;
  if (action === 'checkbox') {
    (0,_modules_displaylist_js__WEBPACK_IMPORTED_MODULE_2__.checkCompleted)(eachListId, target);
    (0,_modules_check_box_js__WEBPACK_IMPORTED_MODULE_3__["default"])(target);
  }
});

_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.clearBtn.addEventListener('click', () => {
  (0,_modules_displaylist_js__WEBPACK_IMPORTED_MODULE_2__.clearCompleted)();
});

_modules_variables_js__WEBPACK_IMPORTED_MODULE_1__.refresh.addEventListener('click', () => {
  (0,_modules_displaylist_js__WEBPACK_IMPORTED_MODULE_2__.refreshPage)();
});
})();

/******/ })()
;