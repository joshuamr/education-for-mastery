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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app.js":
/*!****************!*\
  !*** ./app.js ***!
  \****************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar favicon = __webpack_require__(/*! serve-favicon */ \"serve-favicon\");\n\nvar fs = __webpack_require__(/*! fs */ \"fs\");\n\nvar bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar express = __webpack_require__(/*! express */ \"express\");\n\n__webpack_require__(/*! ./public/favicon.ico */ \"./public/favicon.ico\");\n\nvar routes = __webpack_require__(/*! ./routes/routes */ \"./routes/routes.js\");\n\nvar app = express();\napp.set('view engine', 'pug');\napp.set('views', path.join(__dirname, '/views'));\napp.use(favicon(path.join(__dirname, 'public/favicon.ico')));\napp.use(bodyParser.urlencoded({\n  extended: false\n}));\napp.use(express[\"static\"](path.join(__dirname, 'public')));\napp.use(routes);\napp.listen(process.env.port || 3000);\n\n//# sourceURL=webpack:///./app.js?");

/***/ }),

/***/ "./controllers/controllers.js":
/*!************************************!*\
  !*** ./controllers/controllers.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nvar _require = __webpack_require__(/*! express-validator */ \"express-validator\"),\n    validationResult = _require.validationResult;\n\nvar nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\nvar fromEmail = 'joshua@mathfactsmastery.com';\nvar fromPass = process.env.FROM__PASS;\nvar transporter = nodemailer.createTransport({\n  host: 'mail.mathfactsmastery.com',\n  name: 'mail.mathfactsmastery.com',\n  port: 465,\n  secure: true,\n  auth: {\n    user: fromEmail,\n    pass: fromPass\n  }\n});\nvar items = [{\n  title: 'Experience',\n  text: 'With over 10 years experience teaching and tutoring in classrooms and homes, we can support your child to understand and master curriculum.'\n}, {\n  title: 'Philosophy',\n  text: 'We believe in the innate genius of every child.  Given the right support and materials, your child can learn and thrive.'\n}];\n\nexports.getIndex = function (req, res, next) {\n  res.render('home', {\n    pageTitle: 'Home',\n    path: '/',\n    items: items\n  });\n};\n\nvar contactConstants = {\n  pageTitle: 'Contact',\n  path: '/contact'\n};\n\nfunction renderContact(res, args) {\n  res.render('contact', _objectSpread({}, contactConstants, {}, args));\n}\n\nexports.getContact = function (req, res, next) {\n  renderContact(res, {\n    email: '',\n    name: '',\n    subject: '',\n    message: '',\n    emailSent: false\n  });\n};\n\nexports.postEmail = function _callee(req, res, next) {\n  var errors, _req$body, email, name, subject, message, to, from, text, objectToSend;\n\n  return regeneratorRuntime.async(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          errors = validationResult(req);\n          _req$body = req.body, email = _req$body.email, name = _req$body.name, subject = _req$body.subject, message = _req$body.message;\n          to = 'joshua@mathfactsmastery.com';\n          from = to;\n          text = \"\\n    name: \".concat(name, \"\\n    subject: \").concat(subject, \"\\n    email: \").concat(email, \"\\n    message: \").concat(message);\n          objectToSend = _objectSpread({}, contactConstants, {\n            email: email,\n            name: name,\n            subject: subject,\n            message: message\n          });\n\n          if (errors.isEmpty()) {\n            _context.next = 12;\n            break;\n          }\n\n          objectToSend.emailSent = false;\n          objectToSend.feedback = errors.array()[0].msg;\n          console.log(objectToSend.feedback);\n          _context.next = 15;\n          break;\n\n        case 12:\n          _context.next = 14;\n          return regeneratorRuntime.awrap(transporter.sendMail({\n            to: to,\n            from: from,\n            text: text,\n            subject: 'Email sent on educationformastery'\n          }));\n\n        case 14:\n          objectToSend.emailSent = true;\n\n        case 15:\n          try {\n            renderContact(res, _objectSpread({}, objectToSend));\n          } catch (err) {\n            console.log(err);\n          }\n\n        case 16:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  });\n};\n\nexports.getAbout = function (req, res, next) {\n  res.render('about', {\n    pageTitle: 'About',\n    path: '/about'\n  });\n};\n\n//# sourceURL=webpack:///./controllers/controllers.js?");

/***/ }),

/***/ "./public/favicon.ico":
/*!****************************!*\
  !*** ./public/favicon.ico ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"public/favicon.ico\";\n\n//# sourceURL=webpack:///./public/favicon.ico?");

/***/ }),

/***/ "./routes/routes.js":
/*!**************************!*\
  !*** ./routes/routes.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var express = __webpack_require__(/*! express */ \"express\");\n\nvar router = express.Router();\n\nvar _require = __webpack_require__(/*! express-validator */ \"express-validator\"),\n    body = _require.body;\n\nvar controllers = __webpack_require__(/*! ../controllers/controllers */ \"./controllers/controllers.js\");\n\nrouter.get('/contact', controllers.getContact);\nrouter.post('/contact', [body('email').isEmail().withMessage('Please enter a vaild email address.').normalizeEmail(), body('name').not().isEmpty().withMessage('Please enter your name'), body('subject').not().isEmpty().withMessage('Please enter a subject'), body('message').not().isEmpty().withMessage('Please enter your message')], controllers.postEmail);\nrouter.get('/about', controllers.getAbout);\nrouter.use(controllers.getIndex);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./routes/routes.js?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validator":
/*!************************************!*\
  !*** external "express-validator" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validator\");\n\n//# sourceURL=webpack:///external_%22express-validator%22?");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");\n\n//# sourceURL=webpack:///external_%22nodemailer%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "serve-favicon":
/*!********************************!*\
  !*** external "serve-favicon" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"serve-favicon\");\n\n//# sourceURL=webpack:///external_%22serve-favicon%22?");

/***/ })

/******/ });