module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/img/download1.svg":
/*!**********************************!*\
  !*** ./assets/img/download1.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/download1_f15cc82e8eb03c0c97f57bc7b9c61b80.svg";

/***/ }),

/***/ "./assets/img/download2.svg":
/*!**********************************!*\
  !*** ./assets/img/download2.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/download2_952c3a7796c0adbd3cfa0551c56289a7.svg";

/***/ }),

/***/ "./assets/img/facebook.png":
/*!*********************************!*\
  !*** ./assets/img/facebook.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/facebook_12ea8134adecaceb9e6541ac72b9befc.png";

/***/ }),

/***/ "./assets/img/instagram.png":
/*!**********************************!*\
  !*** ./assets/img/instagram.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/instagram_dbdec086e254251beca6e93974fda00b.png";

/***/ }),

/***/ "./assets/img/iphoneX.png":
/*!********************************!*\
  !*** ./assets/img/iphoneX.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/iphoneX_2a490db5ef94cb7d97b487384548b5bf.png";

/***/ }),

/***/ "./assets/img/logo.png":
/*!*****************************!*\
  !*** ./assets/img/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/logo_4e1dc2274ec85a9f4bd9d4d3f2fc97f3.png";

/***/ }),

/***/ "./assets/img/logo2.png":
/*!******************************!*\
  !*** ./assets/img/logo2.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/logo2_4e1dc2274ec85a9f4bd9d4d3f2fc97f3.png";

/***/ }),

/***/ "./assets/img/twitter.png":
/*!********************************!*\
  !*** ./assets/img/twitter.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/_next/static/files/twitter_62a9f746c6310dc6867b83e6c09f69ef.png";

/***/ }),

/***/ "./common/css/animation.css":
/*!**********************************!*\
  !*** ./common/css/animation.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./common/css/style.css":
/*!******************************!*\
  !*** ./common/css/style.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./common/js/const.js":
/*!****************************!*\
  !*** ./common/js/const.js ***!
  \****************************/
/*! exports provided: videoWords, sidebarMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "videoWords", function() { return videoWords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sidebarMenu", function() { return sidebarMenu; });
var videoWords = ['We are Yankees', 'We fear nothing', 'We will fight for our city', 'We always want to win', 'New Yorkers are proud of us', 'We are proud of being New Yorkers', 'Remember who we are', 'Yankees will build the history'];
var sidebarMenu = [{
  bar: 'Who we are',
  active: true
}, {
  bar: 'What we do',
  active: false
}, {
  bar: 'Our Motto',
  active: false
}];

/***/ }),

/***/ "./components/index/Contents.js":
/*!**************************************!*\
  !*** ./components/index/Contents.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-player */ "react-player");
/* harmony import */ var react_player__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_player__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classname */ "classname");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classname__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _common_js_const_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../common/js/const.js */ "./common/js/const.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _common_css_animation_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../common/css/animation.css */ "./common/css/animation.css");
/* harmony import */ var _common_css_animation_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_common_css_animation_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _assets_img_iphoneX_png__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../assets/img/iphoneX.png */ "./assets/img/iphoneX.png");
/* harmony import */ var _assets_img_iphoneX_png__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_assets_img_iphoneX_png__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _assets_img_facebook_png__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../assets/img/facebook.png */ "./assets/img/facebook.png");
/* harmony import */ var _assets_img_facebook_png__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_assets_img_facebook_png__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _assets_img_instagram_png__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../assets/img/instagram.png */ "./assets/img/instagram.png");
/* harmony import */ var _assets_img_instagram_png__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_assets_img_instagram_png__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _assets_img_twitter_png__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../assets/img/twitter.png */ "./assets/img/twitter.png");
/* harmony import */ var _assets_img_twitter_png__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_assets_img_twitter_png__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _assets_img_download1_svg__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../assets/img/download1.svg */ "./assets/img/download1.svg");
/* harmony import */ var _assets_img_download1_svg__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_assets_img_download1_svg__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _assets_img_download2_svg__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../assets/img/download2.svg */ "./assets/img/download2.svg");
/* harmony import */ var _assets_img_download2_svg__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_assets_img_download2_svg__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! util */ "util");
/* harmony import */ var util__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(util__WEBPACK_IMPORTED_MODULE_15__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  left: 0;\n  top: 12.5vh;\n  width: 175px;\n  height: 75vh;\n  z-index: 70;\n  ul {\n     display: flex;\n     height: 100%;\n     flex-direction: column;\n     justify-content: space-between;\n     li {\n        align-items: center;\n        display: flex;\n        height: 8vh;\n        color: #ddd;\n        padding: 30px;\n        cursor: pointer;\n        &.active {\n           color: #000;\n           border-left: 5px solid #000;\n           &.light {\n              color: #fff;\n              border-left: 5px solid #fff;\n           }\n        }\n        &.light {\n           color: #aaa;\n        }\n     }\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  width: 100%;\n  height: 100vh;\n  left: 0;\n  top: 0;\n  z-index:50;\n  background: #000;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n   position: absolute;\n   transform: translate(-50%,-50%);\n   left:50%;\n   top:50%;\n   font-size:40px;\n   color: #fff;\n   white-space: nowrap;\n   z-index: 51;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n   width: 100vw;\n   overflow: hidden;\n   position: relative;\n   video {\n      object-fit: cover;\n      height: 100vh;\n      transition: all 1s ease-in-out;\n   }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n   height: 100vh;\n   width: 100vw;\n   transition: background 0.5s ease-in;\n   background: #fff;\n   .main-box {\n      width: 1400px;\n      margin: 0 auto;\n      display: flex;\n      justify-content: space-around;\n      .left-box {\n         padding-top: 140px;\n         display: inline-block;\n         width: 600px;\n         vertical-align: top;\n         h2 {\n            font-size: 50px;\n            margin-bottom: 25px;\n            font-family: 'DIN-Bold';\n            letter-spacing:1px;\n            line-height: 1.2;\n         }\n         p {\n            font-size: 12px;\n            letter-spacing: 1.2px;\n            margin-bottom: 30px;\n         }\n         .ant-input-group {\n            width: 400px;\n            margin-bottom: 40px;\n         }\n         img.icon {\n            width: 30px;\n            margin-right: 10px;\n         }\n         &.second {\n            padding-top: 140px;\n         }\n      }\n      .right-box {\n         display: inline-block;\n         vertical-align: top;\n         padding-top: 250px;\n         .phone-bg {\n            width: 600px;\n            height: 280px;\n            background-image: url(", ");\n            background-size: cover;\n            padding: 22px;\n            overflow: hidden;\n            .container {\n               height: 580px;\n               overflow: hidden;\n               position: relative;\n               img {\n                 position: absolute;\n                 width: 500px;\n                 left: 45px;\n                 visibility:hidden;\n                 opacity: 0;\n                 &.imgFade1 {\n                    transition: opacity 1.5s ease-in;\n                    z-index: 2;\n                    opacity: 1;\n                    visibility: visible;\n                 }\n                 &.imgFade2 {\n                    opacity: 1;\n                    visibility: visible;\n               }\n               }\n            }\n         }\n         &.second {\n            padding-top: 150px;\n         }\n      }\n   }\n   &.top {\n      background: linear-gradient(145deg,#fff 10%,#ebf4ff 60%,#69b2ff 150%);\n   }\n   &.intro {\n      position: relative;\n      .right-box {\n         img {\n            width: 550px;\n            position: relative;\n         }\n      }\n   }\n   &.dark {\n      background: #2c2c2c;\n      .main-box {\n         .left-box {\n            h2, p {\n               color: #fff;\n            }\n         }\n      }\n   }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n   min-height: 200vh;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










 //image








var ContentsBody = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var ContentWrap = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2(), _assets_img_iphoneX_png__WEBPACK_IMPORTED_MODULE_9___default.a);
var VideoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());
var StoryWrapper = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4());
var Mask = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject5());
var SideBar = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject6());

var Contents = function Contents() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState2 = _slicedToArray(_useState, 2),
      story = _useState2[0],
      setStory = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('https://www.youtube.com/watch?v=62Ku-EwXQqM'),
      _useState4 = _slicedToArray(_useState3, 2),
      video = _useState4[0],
      setVideo = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      mask = _useState6[0],
      setMask = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(_common_js_const_js__WEBPACK_IMPORTED_MODULE_6__["sidebarMenu"]),
      _useState8 = _slicedToArray(_useState7, 2),
      bars = _useState8[0],
      setBars = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      _useState10 = _slicedToArray(_useState9, 2),
      light = _useState10[0],
      setLight = _useState10[1];

  var _useState11 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0),
      _useState12 = _slicedToArray(_useState11, 2),
      app1 = _useState12[0],
      setApp1 = _useState12[1];

  var _useState13 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      _useState14 = _slicedToArray(_useState13, 2),
      data = _useState14[0],
      getData = _useState14[1];

  var timer = function timer() {
    setTimeout(function () {
      addStory(story);
      addApp1(app1);
      timer();
    }, 5000);
  };

  var doMask = function doMask(video) {
    setMask(function (mask) {
      return true;
    });
    setTimeout(function () {
      setMask(function (mask) {
        return false;
      });
      setVideo(video);
    }, 1000);
  };

  var addStory = function addStory(story) {
    setStory(function (story) {
      if (story == 1) {
        doMask('https://www.youtube.com/watch?v=NtmQYAivK5I');
      }

      if (story == 3) {
        doMask('https://www.youtube.com/watch?v=2Ab-uoEQQ4U');
      }

      if (story == 5) {
        doMask('https://www.youtube.com/watch?v=WSCnkjeUXCw');
      }

      if (story == 7) {
        doMask('https://www.youtube.com/watch?v=62Ku-EwXQqM');
        return 0;
      }

      return story + 1;
    });
  };

  var addApp1 = function addApp1(app1) {
    setApp1(function (app1) {
      if (app1 == 2) {
        return 0;
      }

      return app1 + 1;
    });
  };

  var selectBar = function selectBar(bars, num, light) {
    var windowHeight = window.innerHeight;
    bars.map(function (ele, index) {
      if (num == index) {
        ele.active = true;
      } else {
        ele.active = false;
      }
    });
    setBars(function (bars) {
      return bars;
    });
    setLight(light);
    window.scrollTo({
      top: num * windowHeight,
      behavior: 'smooth'
    });
  };

  var onScroll = Object(lodash__WEBPACK_IMPORTED_MODULE_1__["debounce"])(function () {
    var height = window.scrollY;
    var windowHeight = window.innerHeight;

    if (height < windowHeight / 2) {
      selectBar(bars, 0, false);
    } else if (height >= windowHeight / 2 && height < 1.5 * windowHeight) {
      selectBar(bars, 1, false);
    } else if (height >= 1.5 * windowHeight && height < 2.5 * windowHeight) {
      selectBar(bars, 2, true);
    }
  }, 350);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    timer();
    window.addEventListener('scroll', onScroll);
    axios__WEBPACK_IMPORTED_MODULE_7___default.a.get('https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=new_york_yankees').then(function (res) {
      getData(res.data.teams[0]);
    }).catch(function (error) {
      console.log(error);
    });
    return function () {
      clearTimeout(timer);
      window.removeEventListener('scroll', onScroll);
    };
  }, []);
  var Search = antd__WEBPACK_IMPORTED_MODULE_3__["Input"].Search;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentsBody, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SideBar, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, bars.map(function (ele, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      onClick: function onClick() {
        return selectBar(bars, index);
      },
      className: classname__WEBPACK_IMPORTED_MODULE_5___default()({
        'active': ele.active,
        'light': light
      }),
      key: index
    }, ele.bar);
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentWrap, {
    className: classname__WEBPACK_IMPORTED_MODULE_5___default()({
      'top': true,
      'dark': light
    })
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-box"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-box"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "New York Yankees"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data ? data.strDescriptionEN : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: data ? "//".concat(data.strFacebook) : '#',
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "icon",
    src: _assets_img_facebook_png__WEBPACK_IMPORTED_MODULE_10___default.a
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: data ? "//".concat(data.strInstagram) : '#',
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "icon",
    src: _assets_img_instagram_png__WEBPACK_IMPORTED_MODULE_11___default.a
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: data ? "//".concat(data.strTwitter) : '#',
    target: "_blank"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "icon",
    src: _assets_img_twitter_png__WEBPACK_IMPORTED_MODULE_12___default.a
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right-box"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "phone-bg"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classname__WEBPACK_IMPORTED_MODULE_5___default()({
      'imgFade1': app1 == 0,
      'imgFade2': app1 == 1
    }),
    src: data ? data.strTeamFanart1 : null
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classname__WEBPACK_IMPORTED_MODULE_5___default()({
      'imgFade1': app1 == 1,
      'imgFade2': app1 == 2
    }),
    src: data ? data.strTeamFanart2 : null
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: classname__WEBPACK_IMPORTED_MODULE_5___default()({
      'imgFade1': app1 == 2,
      'imgFade2': app1 == 0
    }),
    src: data ? data.strTeamFanart3 : null
  })))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContentWrap, {
    className: classname__WEBPACK_IMPORTED_MODULE_5___default()({
      'intro': true,
      'dark': light
    })
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "main-box"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "left-box second"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Where are we?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, data ? data.strDescriptionEN : null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "right-box second"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    className: "riseDown",
    src: data ? data.strTeamJersey : null
  })))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(VideoWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_player__WEBPACK_IMPORTED_MODULE_4___default.a, {
    url: video,
    playing: true,
    muted: true,
    loop: true,
    width: "100%",
    height: "100vh"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Mask, {
    className: mask ? 'maskFadeIn' : 'maskFadeOut'
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StoryWrapper, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, _common_js_const_js__WEBPACK_IMPORTED_MODULE_6__["videoWords"].map(function (ele, index) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: story == index ? 'wordfadeIn' : 'wordfadeOut',
      key: index
    }, ele);
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contents);

/***/ }),

/***/ "./components/layout/Footer.js":
/*!*************************************!*\
  !*** ./components/layout/Footer.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n   background: #0e1118;\n   height: 65px;\n   line-height: 65px;\n   color: #666;\n   text-align: center;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var Bar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());

var Footer = function Footer() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, null, "Copyright 2019 \xA9 Cihai Sun, All Rights Reserved"));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/layout/Header.js":
/*!*************************************!*\
  !*** ./components/layout/Header.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../assets/img/logo.png */ "./assets/img/logo.png");
/* harmony import */ var _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logo_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_img_logo2_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../assets/img/logo2.png */ "./assets/img/logo2.png");
/* harmony import */ var _assets_img_logo2_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_img_logo2_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd */ "antd");
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../store */ "./store.js");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! classname */ "classname");
/* harmony import */ var classname__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(classname__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  position: absolute;\n  top: 12px;\n  right: 20px;\n  li {\n     &:hover {\n        opacity: 0.7;\n     }\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n   display: inline-block;\n   height: 35px;\n   vertical-align: middle;\n   cursor: pointer;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n   margin: 0 15px;\n   display: inline-block;\n   cursor: pointer;\n   &:hover {\n     opacity: 0.7;\n   }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n   background: transparent;\n   position: fixed;\n   top: 0;\n   color: #fff;\n   height: 50px;\n   padding-top: 8px;\n   padding-left: 10px;\n   width: 100%;\n   transition: ease 0.5s;\n   z-index:100;\n   &.isDark {\n      background: #0e1118;\n   }\n   &.light {\n      background: transparent;\n      color: #000;\n   }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var Bar = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());
var Navi = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.li(_templateObject2());
var Logo = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.img(_templateObject3());
var LoginBoxUl = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.ul(_templateObject4());
var naviList = [];

var Header =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Header, _React$Component);

  function Header() {
    _classCallCheck(this, Header);

    return _possibleConstructorReturn(this, _getPrototypeOf(Header).apply(this, arguments));
  }

  _createClass(Header, [{
    key: "logout",
    value: function logout() {
      js_cookie__WEBPACK_IMPORTED_MODULE_9___default.a.remove('testUserName');
      this.props.logout();
      next_router__WEBPACK_IMPORTED_MODULE_10___default.a.replace('/');
    }
  }, {
    key: "render",
    value: function render() {
      var bgClass = classname__WEBPACK_IMPORTED_MODULE_8___default()({
        'isDark': this.props.isDark,
        'light': this.props.light
      });
      var ls = {
        display: 'inline-block',
        cursor: 'pointer'
      };
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Bar, {
        className: bgClass
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
        href: "/"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Logo, {
        src: !this.props.light ? _assets_img_logo_png__WEBPACK_IMPORTED_MODULE_3___default.a : _assets_img_logo2_png__WEBPACK_IMPORTED_MODULE_4___default.a
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
        style: {
          display: 'inline-block',
          marginLeft: '30px'
        }
      }, naviList.map(function (ele, index) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Navi, {
          key: index
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/".concat(ele.toLowerCase())
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, ele)));
      }))));
    }
  }]);

  return Header;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

var mapDispatchToProps = {
  logout: _store__WEBPACK_IMPORTED_MODULE_7__["logout"]
};

var mapStateToProps = function mapStateToProps(_ref) {
  var user = _ref.user;
  return {
    user: user
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(mapStateToProps, mapDispatchToProps)(Header));

/***/ }),

/***/ "./components/layout/Layout.js":
/*!*************************************!*\
  !*** ./components/layout/Layout.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Header */ "./components/layout/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/layout/Footer.js");




var Layout = function Layout(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    isDark: props.isDark,
    light: props.light
  }), props.children, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/Layout */ "./components/layout/Layout.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_index_Contents__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/index/Contents */ "./components/index/Contents.js");
/* harmony import */ var _common_css_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/css/style.css */ "./common/css/style.css");
/* harmony import */ var _common_css_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_common_css_style_css__WEBPACK_IMPORTED_MODULE_4__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    min-height: 97vh;\n    background: #fff;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n   background: #ebeef0;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var Body = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var Container = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Index);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Index)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "state", {
      isDark: false,
      light: true,
      team_data: null
    });

    _defineProperty(_assertThisInitialized(_this), "onScroll", function () {
      var height = window.scrollY;
      var windowHeight = window.innerHeight;

      if (height >= 2 * windowHeight) {
        _this.setState({
          light: false
        });
      } else {
        _this.setState({
          light: true
        });
      }
    });

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.addEventListener('scroll', this.onScroll);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$state = this.state,
          isDark = _this$state.isDark,
          light = _this$state.light;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
        isDark: isDark,
        light: light,
        className: _common_css_style_css__WEBPACK_IMPORTED_MODULE_4__["sovleNextBug"]
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Body, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Container, {
        className: "banner-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_index_Contents__WEBPACK_IMPORTED_MODULE_3__["default"], {
        data: this.state.team_data
      }))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/*! exports provided: actionTypes, reducer, initializeStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actionTypes", function() { return actionTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initializeStore", function() { return initializeStore; });
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-devtools-extension */ "redux-devtools-extension");
/* harmony import */ var redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__);


var InitialState = {};
var actionTypes = {}; // REDUCERS

var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    default:
      return state;
  }
}; // ACTIONS

function initializeStore() {
  var initialState = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : InitialState;
  return Object(redux__WEBPACK_IMPORTED_MODULE_0__["createStore"])(reducer, initialState, Object(redux_devtools_extension__WEBPACK_IMPORTED_MODULE_1__["composeWithDevTools"])(Object(redux__WEBPACK_IMPORTED_MODULE_0__["applyMiddleware"])()));
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


/***/ }),

/***/ "antd":
/*!***********************!*\
  !*** external "antd" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("antd");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "classname":
/*!****************************!*\
  !*** external "classname" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("classname");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-player":
/*!*******************************!*\
  !*** external "react-player" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-player");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("redux-devtools-extension");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("util");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map