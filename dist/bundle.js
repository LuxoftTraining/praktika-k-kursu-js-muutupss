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
/******/ 	return __webpack_require__(__webpack_require__.s = "./main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./employees/employees-json.js":
/*!*************************************!*\
  !*** ./employees/employees-json.js ***!
  \*************************************/
/*! exports provided: DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA", function() { return DATA; });
const DATA = {

    employees: [
      {
       id: 1,
       name: "Pavel",
       surname: "Pavlushin",
       department: "IT"
      },
      {
        id: 2,
        name: "Fuf",
        surname: "Guf",
        department: "IT"
       },
       {
        id: 3,
        name: "Mou",
        surname: "Hou",
        department: "Score"
       },
       {
        id: 4,
        name: "Poop",
        surname: "Shpot",
        department: "Score"
       },
       {
        id: 5,
        name: "Hohy",
        surname: "Poku",
        department: "Nani"
       },
      ]
   }
   

/***/ }),

/***/ "./employees/service.js":
/*!******************************!*\
  !*** ./employees/service.js ***!
  \******************************/
/*! exports provided: findByName, addEmployee, deleteEmployee, showEmployees, findById, setEmployeeManager, searchEmployees */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findByName", function() { return findByName; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEmployee", function() { return addEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteEmployee", function() { return deleteEmployee; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showEmployees", function() { return showEmployees; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findById", function() { return findById; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setEmployeeManager", function() { return setEmployeeManager; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchEmployees", function() { return searchEmployees; });
/* harmony import */ var _employees_json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employees-json */ "./employees/employees-json.js");


function findByName(name, surname) {
    let res = [];
    for (var e of _employees_json__WEBPACK_IMPORTED_MODULE_0__["DATA"].employees) {
        if ((!name || e.name===name) &&
            (!surname || e.surname===surname)) {
            res.push(e);
        }
    }
    return res;
}

function addEmployee(name, surname){
    let res = _employees_json__WEBPACK_IMPORTED_MODULE_0__["DATA"].employees
    if (!name || !surname) { 
        throw new Error("Error!!!")
    } else {
        let maxid = res[0].id
        for (let i of res){
            if (i.id > maxid) {
                maxid = i.id
            }
        }
        res.push(
            {
                id : maxid + 1,
                name : name,
                surname : surname
            }
        )
        return (maxid + 1)
    }
}

function deleteEmployee(id){
    let res = _employees_json__WEBPACK_IMPORTED_MODULE_0__["DATA"].employees
    let j = 0
    for (let i of _employees_json__WEBPACK_IMPORTED_MODULE_0__["DATA"].employees){
        if (i.id == id){
            res.splice(j, 1);
            break;
        }
        j++
    }
    return res
}

function showEmployee(employees){
    const keys = Object.keys(employees)
    for (let i of keys) {
        console.log( i + " = " + employees[i])
    }
}

function showEmployees () {
    _employees_json__WEBPACK_IMPORTED_MODULE_0__["DATA"].employees.forEach((e) => showEmployee(e))
}

const employeeMap = {}

function findById(id){
    if (employeeMap[id]){
        return employeeMap[id]
    } else {
        let res = {}
        _employees_json__WEBPACK_IMPORTED_MODULE_0__["DATA"].employees.forEach((em) => {
            if (em.id == id){
                console.log(em)
                employeeMap[id] = em
                res = em
            }
        })
        return res
    }
}

function addPhone(id, phone) {
    const em = findById(id)
    const phones = em.phones
    if (!phones) {
        em.phones = []
    }
    em.phones.push(phone)
    return _employees_json__WEBPACK_IMPORTED_MODULE_0__["DATA"]
}

function setDateOfBirth(id, date) {
    const em = findById(id)
    em.dateOfBirth = date
    console.log(em.dateOfBirth)
}

function getAge(id) {
    const em = findById(id);
    let ageDiff = Date.now() - em.dateOfBirth.getTime();
    let ageDate = new Date(ageDiff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
   }
   
function formatDate(date) {
    let day = date.getDate();
    if (day<10) day = '0'+day;
    let month = date.getMonth()+1;
    if (month<10) month = '0'+month;
    let year = date.getFullYear();
   
    return day + '.' + month + '.' + year;
   }
   
function getEmployeeInfo(id) {
    const e = findById(id);
   
    const phones = e.phones ? `${e.phones}` : '';
    const age = e.dateOfBirth ? `${getAge(e.id)}` : '';
    return ` 
     ${e.name}
     ${e.surname}
     ${phones} 
     ${age}
    `;
   }

   function testEmployee() {
    addPhone(5, "123");
    addPhone(5, "777");
    setDateOfBirth(5, new Date(2000,1,1))
    const info = getEmployeeInfo(5);
    console.log(info);
   }

   function getEmployeeJSON(id) {
    const e = findById(id);
    return JSON.stringify(e);
   }

   function setEmployeeManager(id, managerId){
        let manager = findById(id);
        manager.managerRef = managerId
   }
   
   function searchEmployees(name, surname, managerRef) {
    let results = [];
    for (let e of _employees_json__WEBPACK_IMPORTED_MODULE_0__["DATA"].employees) {
     if ((!name || e.name==name) &&
      (!surname || e.surname==surname) &&
      (!managerRef || e.managerRef==managerRef)) {
      results.push(e);
     }
    }
    return results;
   }
   
   
   

/***/ }),

/***/ "./employees/ui.js":
/*!*************************!*\
  !*** ./employees/ui.js ***!
  \*************************/
/*! exports provided: runUI, addEmployeeUI, searchEmployeeUI, openTab */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "runUI", function() { return runUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEmployeeUI", function() { return addEmployeeUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchEmployeeUI", function() { return searchEmployeeUI; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "openTab", function() { return openTab; });
/* harmony import */ var _service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service */ "./employees/service.js");
/* harmony import */ var _employees_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./employees-json */ "./employees/employees-json.js");



const PLACEHOLDER = "employeesPlaceholder"

function clearEmployeesPlaceholder() {
    document.getElementById(PLACEHOLDER).innerHTML = '';
 }

 function removeEmployeeUI(id) {
    Object(_service__WEBPACK_IMPORTED_MODULE_0__["deleteEmployee"])(id);
    showEmployees(_employees_json__WEBPACK_IMPORTED_MODULE_1__["DATA"].employees);
}
   

 function showEmployees (employees)  {
    clearEmployeesPlaceholder()
    const ul = document.createElement("ul")
    for (let em of employees) {
        const li = document.createElement("li")
        ul.appendChild(li)
        li.innerText = em.name + " " + em.surname
        const removeButton = document.createElement("button");
        removeButton.innerHTML = "Удалить";
        removeButton.addEventListener('click', () => removeEmployeeUI(em.id));
        li.appendChild(removeButton);

        if (em.managerRef) {
            const managerSpan = document.createElement("span");
            const managerSelect = document.createElement("select");
            fillSelect(managerSelect, getEmployeesOptions(), em.managerRef);
            managerSelect.addEventListener('change', () => {em.managerRef=managerSelect.value});
            managerSpan.innerHTML = " <b>Руководитель:</b> ";
            li.appendChild(managerSpan);
            li.appendChild(managerSelect);
           }
           

    }
    document.getElementById(PLACEHOLDER).appendChild(ul)
 }

 function runUI() {
   showEmployees(_employees_json__WEBPACK_IMPORTED_MODULE_1__["DATA"].employees);
   fillSelect(document.getElementById("managerSelect"), getEmployeesOptions());
   document.getElementById("searchButton").click();
   assignSendOnEnter("searchPane","searchEmployeesButton");
   assignSendOnEnter("addPane", "addEmployeeButton");


}

function addEmployeeUI() {
	let errorHTML = "";
    const name = document.getElementById("name").value;
    if (!name) {
         errorHTML = "- Имя сотрудника должно быть задано<br>";
         document.getElementById("name").style.backgroundColor = '#FFEEEE';
    }
    const surname = document.getElementById("surname").value;
    if (!surname) {
        errorHTML += "- Фамилия сотрудника должна быть задана<br>";
        document.getElementById("surname").style.backgroundColor = '#FFEEEE';
    }
	document.getElementById("addEmployeeFormErrorMessage").innerHTML = errorHTML;

    if (errorHTML.length != 0) return;
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";

    const id = Object(_service__WEBPACK_IMPORTED_MODULE_0__["addEmployee"])(name, surname);
    const managerId = document.getElementById("managerSelect").value;
    Object(_service__WEBPACK_IMPORTED_MODULE_0__["setEmployeeManager"])(id, managerId);
    showEmployees(_employees_json__WEBPACK_IMPORTED_MODULE_1__["DATA"].employees);
}

function fillSelect(select, values, selectedValue) {
    for (let val of values) {
     const option = document.createElement("option");
     option.text = val.text;
     option.value = val.value;
     if (selectedValue == option.value) option.selected = true;
     select.appendChild(option);
    }
   }

function getEmployeesOptions() {
    let options = [];
    for (let e of _employees_json__WEBPACK_IMPORTED_MODULE_1__["DATA"].employees) {
        options.push({text:e.name+' '+e.surname, value:e.id});
    }
    return options;
}
   
function searchEmployeeUI() {
    const name = document.getElementById("nameSearch").value;
    const surname = document.getElementById("surnameSearch").value;
    const managerRef = document.getElementById("managerSearch").value;
   
    const employees  = Object(_service__WEBPACK_IMPORTED_MODULE_0__["searchEmployees"])(name, surname, managerRef);
    showEmployees(employees);
   }

/**
 * Активирует выбранный таб
 * @param evt событие, вызывающее активацию
 * @param id идентификатор таба
 */
function openTab(evt, id) {
    // Определяем переменные
    var i, tabcontent, tablinks;
   
    // Получаем все элементы с class="tabcontent" и прячем их
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
     tabcontent[i].style.display = "none";
    }
   
    // Получаем все элементы с class="tablinks" и удаляем класс "active"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
     tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
   
    // Показываем текущий таб и добавляем класс "active"
    // на кнопку, которая открывает этот таб
    document.getElementById(id).style.display = "block";
    evt.currentTarget.className += " active";
   }
   
   function assignSendOnEnter(paneId, buttonId) {
    let allInput = document.querySelectorAll("#"+paneId+" input");
    for (let input of allInput) {
     input.addEventListener("keyup", function(event) {
      event.preventDefault();
      if (event.keyCode === 13) {
       document.querySelector("#"+paneId+" button").click();
      }
     });
    }
   }
   
   
   


/***/ }),

/***/ "./main.js":
/*!*****************!*\
  !*** ./main.js ***!
  \*****************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _employees_ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./employees/ui */ "./employees/ui.js");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.css */ "./style.css");
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_1__);



window.addEmployeeUI = _employees_ui__WEBPACK_IMPORTED_MODULE_0__["addEmployeeUI"];
window.openTab = _employees_ui__WEBPACK_IMPORTED_MODULE_0__["openTab"];
window.searchEmployeeUI = _employees_ui__WEBPACK_IMPORTED_MODULE_0__["searchEmployeeUI"];
Object(_employees_ui__WEBPACK_IMPORTED_MODULE_0__["runUI"])();


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./style.css":
/*!*********************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./style.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);
// Module
___CSS_LOADER_EXPORT___.push([module.i, "body {\n    font-family: Verdana;\n}\nbutton,input,select {\n    outline: none;\n    padding: 5px;\n    font-size: 15px;\n    background-color: #f1f1f1;\n    border: none;\n}\n.tab {\n    overflow: hidden;\n    border: 1px solid #ccc;\n    background-color: #f1f1f1;\n}\n\n/* Стиль кнопок, использующийся для открытия контента */\n.tab button {\n    background-color: inherit;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 10px;\n    transition: 1s;\n    font-size: 13px;\n    margin: 0px;\n}\n\n/* Измненение фона таба при наведении мышкой */\n.tab button:hover {\n    background-color: #ddd;\n}\n\n/* Создаем класс для активного таба */\n.tab button.active {\n    background-color: #fff;\n}\n\n/* Стиль для содержания таба */\n.tabcontent {\n    display: none;\n    padding: 6px 12px;\n    border: 1px solid #ccc;\n    border-top: none;\n}\n", "",{"version":3,"sources":["webpack://style.css"],"names":[],"mappings":"AAAA;IACI,oBAAoB;AACxB;AACA;IACI,aAAa;IACb,YAAY;IACZ,eAAe;IACf,yBAAyB;IACzB,YAAY;AAChB;AACA;IACI,gBAAgB;IAChB,sBAAsB;IACtB,yBAAyB;AAC7B;;AAEA,uDAAuD;AACvD;IACI,yBAAyB;IACzB,YAAY;IACZ,aAAa;IACb,eAAe;IACf,aAAa;IACb,cAAc;IACd,eAAe;IACf,WAAW;AACf;;AAEA,8CAA8C;AAC9C;IACI,sBAAsB;AAC1B;;AAEA,qCAAqC;AACrC;IACI,sBAAsB;AAC1B;;AAEA,8BAA8B;AAC9B;IACI,aAAa;IACb,iBAAiB;IACjB,sBAAsB;IACtB,gBAAgB;AACpB","sourcesContent":["body {\n    font-family: Verdana;\n}\nbutton,input,select {\n    outline: none;\n    padding: 5px;\n    font-size: 15px;\n    background-color: #f1f1f1;\n    border: none;\n}\n.tab {\n    overflow: hidden;\n    border: 1px solid #ccc;\n    background-color: #f1f1f1;\n}\n\n/* Стиль кнопок, использующийся для открытия контента */\n.tab button {\n    background-color: inherit;\n    border: none;\n    outline: none;\n    cursor: pointer;\n    padding: 10px;\n    transition: 1s;\n    font-size: 13px;\n    margin: 0px;\n}\n\n/* Измненение фона таба при наведении мышкой */\n.tab button:hover {\n    background-color: #ddd;\n}\n\n/* Создаем класс для активного таба */\n.tab button.active {\n    background-color: #fff;\n}\n\n/* Стиль для содержания таба */\n.tabcontent {\n    display: none;\n    padding: 6px 12px;\n    border: 1px solid #ccc;\n    border-top: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./style.css":
/*!*******************!*\
  !*** ./style.css ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !./node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./style.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map