self["webpackHotUpdatecampus"](0,{

/***/ 311:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginForm": () => (/* binding */ LoginForm)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoginForm = /*#__PURE__*/function () {
  function LoginForm(fields) {
    var _this = this;

    _classCallCheck(this, LoginForm);

    _defineProperty(this, "init", function () {
      _this.listeners();
    });

    this.username = document.getElementById(fields.username);
    this.password = document.getElementById(fields.password);
    this.form = document.getElementById(fields.form);
  }

  _createClass(LoginForm, [{
    key: "sendForm",
    value: function () {
      var _sendForm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var url, username, password, formData, loginResponse;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = this.form.action;
                username = this.username.value;
                password = this.password.value;
                formData = new FormData();
                formData.append("username", username);
                formData.append("password", password);
                _context.prev = 6;
                _context.next = 9;
                return fetch(url, {
                  method: 'POST',
                  body: JSON.stringify(formData)
                });

              case 9:
                loginResponse = _context.sent;
                console.log(loginResponse);
                _context.next = 16;
                break;

              case 13:
                _context.prev = 13;
                _context.t0 = _context["catch"](6);
                console.log(_context.t0);

              case 16:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[6, 13]]);
      }));

      function sendForm() {
        return _sendForm.apply(this, arguments);
      }

      return sendForm;
    }()
  }, {
    key: "listeners",
    value: function listeners() {
      var _this2 = this;

      this.form.addEventListener('submit', function (e) {
        e.preventDefault();

        _this2.sendForm();
      });
    }
  }]);

  return LoginForm;
}();

/***/ }),

/***/ 0:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      // 1619636925258
      var cssReload = __webpack_require__(1)(module.id, {"locals":false});
      module.hot.dispose(cssReload);
      module.hot.accept(undefined, cssReload);
    }
  

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ "use strict";
/******/ 
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("c73a96f4cccd9e407099")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=0.93ddc6b9dde4d5ebb40c.hot-update.js.map