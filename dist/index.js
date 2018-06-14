(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.is = is;
exports.isString = isString;
exports.isNumber = isNumber;
exports.exists = exists;
function is(value, tag) {
    return Object.prototype.toString.call(value) === tag;
}

function isString(value) {
    return is(value, '[object String]');
}

function isNumber(value) {
    return is(value, '[object Number]');
}

function exists(value) {
    return !is(value, '[object Undefined]');
}

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.getOptions = getOptions;
exports.default = Plugin;

var _utils = __webpack_require__(0);

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var PLUGIN_TAG = 'babel-plugin-strip-invariant';
var DEFAULT_PRAGMA = 'invariant';
var DEFAULT_ARG_COUNT = 1;

/**
 * @function getOptions
 * @param  {Number} argCount Amount of args to preserve.
 * @param  {String} pragma   Identifier of the function to target.
 * @return {Object} The argCount and pragma to be used.
 */
function getOptions(options) {
    var argCount = options.argCount,
        pragma = options.pragma;


    if ((0, _utils.exists)(argCount)) {
        if (!(0, _utils.isNumber)(argCount)) {
            throw new TypeError(PLUGIN_TAG + ' Error.\nExpected argCount to be a Number but instead got ' + (typeof argCount === 'undefined' ? 'undefined' : _typeof(argCount)));
        } else if (argCount <= 0) {
            throw new TypeError(PLUGIN_TAG + ' Error.\nExpected argCount to be grater then 0 but instead got ' + argCount);
        }
    }

    if ((0, _utils.exists)(pragma)) {
        if (!(0, _utils.isString)(pragma)) {
            throw new TypeError(PLUGIN_TAG + ' Error.\nExpected pragma to be a String but instead got ' + (typeof pragma === 'undefined' ? 'undefined' : _typeof(pragma)));
        } else if (pragma.length === 0) {
            throw new TypeError(PLUGIN_TAG + ' Error.\nPragma must be a String with length bigger than 0');
        }
    }

    return {
        ARG_COUNT: argCount || DEFAULT_ARG_COUNT,
        PRAGMA: pragma || DEFAULT_PRAGMA
    };
}

/**
 * @function Plugin
 * @param  {Babel} arguments0 Babel object.
 * @return {Plugin} Babel plugin.
 */
function Plugin(_ref) {
    var t = _ref.types;

    /**
     * @function CallExpression
     * @description Modifies CallExpressions that are equal to PRAGMA.
     * @param {Path} path Babel Path Object.
     * @param {State} state Babel State Object.
     */
    function CallExpression(path, state) {
        var node = path.node;

        var _getOptions = getOptions(state.opts),
            ARG_COUNT = _getOptions.ARG_COUNT,
            PRAGMA = _getOptions.PRAGMA;

        if (node.callee.name === PRAGMA && node.arguments.length > ARG_COUNT) {
            var newNode = t.callExpression(t.identifier(PRAGMA), [].concat(_toConsumableArray(node.arguments.slice(0, ARG_COUNT))));

            path.replaceWith(newNode);
        }
    }

    return {
        visitor: {
            CallExpression: CallExpression
        }
    };
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })
/******/ ]);
});
//# sourceMappingURL=index.js.map