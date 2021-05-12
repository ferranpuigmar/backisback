(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["campus"] = factory();
	else
		root["campus"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ([
/* 0 */,
/* 1 */,
/* 2 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


__webpack_require__(3);

__webpack_require__(260);

__webpack_require__(262);

__webpack_require__(265);

__webpack_require__(268);

__webpack_require__(270);

__webpack_require__(272);

__webpack_require__(274);

__webpack_require__(276);

__webpack_require__(278);

__webpack_require__(281);

__webpack_require__(283);

__webpack_require__(285);

__webpack_require__(289);

/***/ }),
/* 3 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(4);
__webpack_require__(54);
__webpack_require__(55);
__webpack_require__(56);
__webpack_require__(57);
__webpack_require__(59);
__webpack_require__(61);
__webpack_require__(62);
__webpack_require__(63);
__webpack_require__(64);
__webpack_require__(65);
__webpack_require__(66);
__webpack_require__(67);
__webpack_require__(68);
__webpack_require__(69);
__webpack_require__(71);
__webpack_require__(73);
__webpack_require__(75);
__webpack_require__(77);
__webpack_require__(80);
__webpack_require__(81);
__webpack_require__(82);
__webpack_require__(86);
__webpack_require__(88);
__webpack_require__(90);
__webpack_require__(93);
__webpack_require__(94);
__webpack_require__(95);
__webpack_require__(96);
__webpack_require__(98);
__webpack_require__(99);
__webpack_require__(100);
__webpack_require__(101);
__webpack_require__(102);
__webpack_require__(103);
__webpack_require__(104);
__webpack_require__(106);
__webpack_require__(107);
__webpack_require__(108);
__webpack_require__(110);
__webpack_require__(111);
__webpack_require__(112);
__webpack_require__(114);
__webpack_require__(116);
__webpack_require__(117);
__webpack_require__(118);
__webpack_require__(119);
__webpack_require__(120);
__webpack_require__(121);
__webpack_require__(122);
__webpack_require__(123);
__webpack_require__(124);
__webpack_require__(125);
__webpack_require__(126);
__webpack_require__(127);
__webpack_require__(128);
__webpack_require__(133);
__webpack_require__(134);
__webpack_require__(138);
__webpack_require__(139);
__webpack_require__(140);
__webpack_require__(141);
__webpack_require__(143);
__webpack_require__(144);
__webpack_require__(145);
__webpack_require__(146);
__webpack_require__(147);
__webpack_require__(148);
__webpack_require__(149);
__webpack_require__(150);
__webpack_require__(151);
__webpack_require__(152);
__webpack_require__(153);
__webpack_require__(154);
__webpack_require__(155);
__webpack_require__(156);
__webpack_require__(157);
__webpack_require__(159);
__webpack_require__(160);
__webpack_require__(162);
__webpack_require__(163);
__webpack_require__(169);
__webpack_require__(170);
__webpack_require__(172);
__webpack_require__(173);
__webpack_require__(174);
__webpack_require__(178);
__webpack_require__(179);
__webpack_require__(180);
__webpack_require__(181);
__webpack_require__(182);
__webpack_require__(184);
__webpack_require__(185);
__webpack_require__(186);
__webpack_require__(187);
__webpack_require__(190);
__webpack_require__(192);
__webpack_require__(193);
__webpack_require__(194);
__webpack_require__(196);
__webpack_require__(198);
__webpack_require__(200);
__webpack_require__(202);
__webpack_require__(203);
__webpack_require__(204);
__webpack_require__(208);
__webpack_require__(209);
__webpack_require__(210);
__webpack_require__(212);
__webpack_require__(222);
__webpack_require__(226);
__webpack_require__(227);
__webpack_require__(229);
__webpack_require__(230);
__webpack_require__(234);
__webpack_require__(235);
__webpack_require__(237);
__webpack_require__(238);
__webpack_require__(239);
__webpack_require__(240);
__webpack_require__(241);
__webpack_require__(242);
__webpack_require__(243);
__webpack_require__(244);
__webpack_require__(245);
__webpack_require__(246);
__webpack_require__(247);
__webpack_require__(248);
__webpack_require__(249);
__webpack_require__(250);
__webpack_require__(251);
__webpack_require__(252);
__webpack_require__(253);
__webpack_require__(254);
__webpack_require__(255);
__webpack_require__(257);
__webpack_require__(258);
__webpack_require__(259);
module.exports = __webpack_require__(10);


/***/ }),
/* 4 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// ECMAScript 6 symbols shim
var global = __webpack_require__(5);
var has = __webpack_require__(6);
var DESCRIPTORS = __webpack_require__(7);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(19);
var META = __webpack_require__(26).KEY;
var $fails = __webpack_require__(8);
var shared = __webpack_require__(22);
var setToStringTag = __webpack_require__(27);
var uid = __webpack_require__(20);
var wks = __webpack_require__(28);
var wksExt = __webpack_require__(29);
var wksDefine = __webpack_require__(30);
var enumKeys = __webpack_require__(31);
var isArray = __webpack_require__(46);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(14);
var toObject = __webpack_require__(47);
var toIObject = __webpack_require__(34);
var toPrimitive = __webpack_require__(17);
var createDesc = __webpack_require__(18);
var _create = __webpack_require__(48);
var gOPNExt = __webpack_require__(51);
var $GOPD = __webpack_require__(53);
var $GOPS = __webpack_require__(44);
var $DP = __webpack_require__(12);
var $keys = __webpack_require__(32);
var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;
var _stringify = $JSON && $JSON.stringify;
var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject;
// Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild;

// fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function () { return dP(this, 'a', { value: 7 }).a; }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function (tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);
  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function (it) {
  return typeof it == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);
  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, { enumerable: createDesc(0, false) });
    } return setSymbolDesc(it, key, D);
  } return dP(it, key, D);
};
var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;
  while (l > i) $defineProperty(it, key = keys[i++], P[key]);
  return it;
};
var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};
var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};
var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};
var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  } return result;
};
var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;
  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  } return result;
};

// 19.4.1.1 Symbol([description])
if (!USE_NATIVE) {
  $Symbol = function Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);
    var $set = function (value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };
    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, { configurable: true, set: $set });
    return wrap(tag);
  };
  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });

  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(52).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(45).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(23)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Symbol: $Symbol });

for (var es6Symbols = (
  // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
  'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
).split(','), j = 0; es6Symbols.length > j;)wks(es6Symbols[j++]);

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) wksDefine(wellKnownSymbols[k++]);

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function (key) {
    return has(SymbolRegistry, key += '')
      ? SymbolRegistry[key]
      : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
    for (var key in SymbolRegistry) if (SymbolRegistry[key] === sym) return key;
  },
  useSetter: function () { setter = true; },
  useSimple: function () { setter = false; }
});

$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
});

// Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443
var FAILS_ON_PRIMITIVES = $fails(function () { $GOPS.f(1); });

$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
});

// 24.3.2 JSON.stringify(value [, replacer [, space]])
$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol();
  // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols
  return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;
    while (arguments.length > i) args.push(arguments[i++]);
    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
    if (!isArray(replacer)) replacer = function (key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
});

// 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf);
// 19.4.3.5 Symbol.prototype[@@toStringTag]
setToStringTag($Symbol, 'Symbol');
// 20.2.1.9 Math[@@toStringTag]
setToStringTag(Math, 'Math', true);
// 24.3.3 JSON[@@toStringTag]
setToStringTag(global.JSON, 'JSON', true);


/***/ }),
/* 5 */
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 6 */
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 7 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(8)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 8 */
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 9 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(5);
var core = __webpack_require__(10);
var hide = __webpack_require__(11);
var redefine = __webpack_require__(19);
var ctx = __webpack_require__(24);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 10 */
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 11 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(12);
var createDesc = __webpack_require__(18);
module.exports = __webpack_require__(7) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 12 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(13);
var IE8_DOM_DEFINE = __webpack_require__(15);
var toPrimitive = __webpack_require__(17);
var dP = Object.defineProperty;

exports.f = __webpack_require__(7) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 13 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(14);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 14 */
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 15 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(7) && !__webpack_require__(8)(function () {
  return Object.defineProperty(__webpack_require__(16)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 16 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(14);
var document = __webpack_require__(5).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 17 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(14);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 18 */
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 19 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(5);
var hide = __webpack_require__(11);
var has = __webpack_require__(6);
var SRC = __webpack_require__(20)('src');
var $toString = __webpack_require__(21);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(10).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),
/* 20 */
/***/ ((module) => {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 21 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(22)('native-function-to-string', Function.toString);


/***/ }),
/* 22 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var core = __webpack_require__(10);
var global = __webpack_require__(5);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(23) ? 'pure' : 'global',
  copyright: '© 2020 Denis Pushkarev (zloirock.ru)'
});


/***/ }),
/* 23 */
/***/ ((module) => {

module.exports = false;


/***/ }),
/* 24 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(25);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 25 */
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 26 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var META = __webpack_require__(20)('meta');
var isObject = __webpack_require__(14);
var has = __webpack_require__(6);
var setDesc = __webpack_require__(12).f;
var id = 0;
var isExtensible = Object.isExtensible || function () {
  return true;
};
var FREEZE = !__webpack_require__(8)(function () {
  return isExtensible(Object.preventExtensions({}));
});
var setMeta = function (it) {
  setDesc(it, META, { value: {
    i: 'O' + ++id, // object ID
    w: {}          // weak collections IDs
  } });
};
var fastKey = function (it, create) {
  // return primitive with prefix
  if (!isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F';
    // not necessary to add metadata
    if (!create) return 'E';
    // add missing metadata
    setMeta(it);
  // return object ID
  } return it[META].i;
};
var getWeak = function (it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true;
    // not necessary to add metadata
    if (!create) return false;
    // add missing metadata
    setMeta(it);
  // return hash weak collections IDs
  } return it[META].w;
};
// add metadata on freeze-family methods calling
var onFreeze = function (it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};
var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};


/***/ }),
/* 27 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var def = __webpack_require__(12).f;
var has = __webpack_require__(6);
var TAG = __webpack_require__(28)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),
/* 28 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var store = __webpack_require__(22)('wks');
var uid = __webpack_require__(20);
var Symbol = __webpack_require__(5).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),
/* 29 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

exports.f = __webpack_require__(28);


/***/ }),
/* 30 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(5);
var core = __webpack_require__(10);
var LIBRARY = __webpack_require__(23);
var wksExt = __webpack_require__(29);
var defineProperty = __webpack_require__(12).f;
module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: wksExt.f(name) });
};


/***/ }),
/* 31 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(32);
var gOPS = __webpack_require__(44);
var pIE = __webpack_require__(45);
module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;
  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;
    while (symbols.length > i) if (isEnum.call(it, key = symbols[i++])) result.push(key);
  } return result;
};


/***/ }),
/* 32 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(33);
var enumBugKeys = __webpack_require__(43);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 33 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var has = __webpack_require__(6);
var toIObject = __webpack_require__(34);
var arrayIndexOf = __webpack_require__(38)(false);
var IE_PROTO = __webpack_require__(42)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),
/* 34 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(35);
var defined = __webpack_require__(37);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 35 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(36);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 36 */
/***/ ((module) => {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 37 */
/***/ ((module) => {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 38 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(34);
var toLength = __webpack_require__(39);
var toAbsoluteIndex = __webpack_require__(41);
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),
/* 39 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.15 ToLength
var toInteger = __webpack_require__(40);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 40 */
/***/ ((module) => {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 41 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(40);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 42 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var shared = __webpack_require__(22)('keys');
var uid = __webpack_require__(20);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 43 */
/***/ ((module) => {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 44 */
/***/ ((__unused_webpack_module, exports) => {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 45 */
/***/ ((__unused_webpack_module, exports) => {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 46 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(36);
module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};


/***/ }),
/* 47 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(37);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 48 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(13);
var dPs = __webpack_require__(49);
var enumBugKeys = __webpack_require__(43);
var IE_PROTO = __webpack_require__(42)('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(16)('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(50).appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),
/* 49 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(12);
var anObject = __webpack_require__(13);
var getKeys = __webpack_require__(32);

module.exports = __webpack_require__(7) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),
/* 50 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var document = __webpack_require__(5).document;
module.exports = document && document.documentElement;


/***/ }),
/* 51 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(34);
var gOPN = __webpack_require__(52).f;
var toString = {}.toString;

var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames
  ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function (it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};


/***/ }),
/* 52 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(33);
var hiddenKeys = __webpack_require__(43).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};


/***/ }),
/* 53 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var pIE = __webpack_require__(45);
var createDesc = __webpack_require__(18);
var toIObject = __webpack_require__(34);
var toPrimitive = __webpack_require__(17);
var has = __webpack_require__(6);
var IE8_DOM_DEFINE = __webpack_require__(15);
var gOPD = Object.getOwnPropertyDescriptor;

exports.f = __webpack_require__(7) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) { /* empty */ }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};


/***/ }),
/* 54 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(9);
// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
$export($export.S, 'Object', { create: __webpack_require__(48) });


/***/ }),
/* 55 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(9);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperty: __webpack_require__(12).f });


/***/ }),
/* 56 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(9);
// 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)
$export($export.S + $export.F * !__webpack_require__(7), 'Object', { defineProperties: __webpack_require__(49) });


/***/ }),
/* 57 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
var toIObject = __webpack_require__(34);
var $getOwnPropertyDescriptor = __webpack_require__(53).f;

__webpack_require__(58)('getOwnPropertyDescriptor', function () {
  return function getOwnPropertyDescriptor(it, key) {
    return $getOwnPropertyDescriptor(toIObject(it), key);
  };
});


/***/ }),
/* 58 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(9);
var core = __webpack_require__(10);
var fails = __webpack_require__(8);
module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () { fn(1); }), 'Object', exp);
};


/***/ }),
/* 59 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 Object.getPrototypeOf(O)
var toObject = __webpack_require__(47);
var $getPrototypeOf = __webpack_require__(60);

__webpack_require__(58)('getPrototypeOf', function () {
  return function getPrototypeOf(it) {
    return $getPrototypeOf(toObject(it));
  };
});


/***/ }),
/* 60 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(6);
var toObject = __webpack_require__(47);
var IE_PROTO = __webpack_require__(42)('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),
/* 61 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(47);
var $keys = __webpack_require__(32);

__webpack_require__(58)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});


/***/ }),
/* 62 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.7 Object.getOwnPropertyNames(O)
__webpack_require__(58)('getOwnPropertyNames', function () {
  return __webpack_require__(51).f;
});


/***/ }),
/* 63 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.5 Object.freeze(O)
var isObject = __webpack_require__(14);
var meta = __webpack_require__(26).onFreeze;

__webpack_require__(58)('freeze', function ($freeze) {
  return function freeze(it) {
    return $freeze && isObject(it) ? $freeze(meta(it)) : it;
  };
});


/***/ }),
/* 64 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.17 Object.seal(O)
var isObject = __webpack_require__(14);
var meta = __webpack_require__(26).onFreeze;

__webpack_require__(58)('seal', function ($seal) {
  return function seal(it) {
    return $seal && isObject(it) ? $seal(meta(it)) : it;
  };
});


/***/ }),
/* 65 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.15 Object.preventExtensions(O)
var isObject = __webpack_require__(14);
var meta = __webpack_require__(26).onFreeze;

__webpack_require__(58)('preventExtensions', function ($preventExtensions) {
  return function preventExtensions(it) {
    return $preventExtensions && isObject(it) ? $preventExtensions(meta(it)) : it;
  };
});


/***/ }),
/* 66 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.12 Object.isFrozen(O)
var isObject = __webpack_require__(14);

__webpack_require__(58)('isFrozen', function ($isFrozen) {
  return function isFrozen(it) {
    return isObject(it) ? $isFrozen ? $isFrozen(it) : false : true;
  };
});


/***/ }),
/* 67 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.13 Object.isSealed(O)
var isObject = __webpack_require__(14);

__webpack_require__(58)('isSealed', function ($isSealed) {
  return function isSealed(it) {
    return isObject(it) ? $isSealed ? $isSealed(it) : false : true;
  };
});


/***/ }),
/* 68 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.2.11 Object.isExtensible(O)
var isObject = __webpack_require__(14);

__webpack_require__(58)('isExtensible', function ($isExtensible) {
  return function isExtensible(it) {
    return isObject(it) ? $isExtensible ? $isExtensible(it) : true : false;
  };
});


/***/ }),
/* 69 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(9);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(70) });


/***/ }),
/* 70 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var DESCRIPTORS = __webpack_require__(7);
var getKeys = __webpack_require__(32);
var gOPS = __webpack_require__(44);
var pIE = __webpack_require__(45);
var toObject = __webpack_require__(47);
var IObject = __webpack_require__(35);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(8)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  } return T;
} : $assign;


/***/ }),
/* 71 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.10 Object.is(value1, value2)
var $export = __webpack_require__(9);
$export($export.S, 'Object', { is: __webpack_require__(72) });


/***/ }),
/* 72 */
/***/ ((module) => {

// 7.2.9 SameValue(x, y)
module.exports = Object.is || function is(x, y) {
  // eslint-disable-next-line no-self-compare
  return x === y ? x !== 0 || 1 / x === 1 / y : x != x && y != y;
};


/***/ }),
/* 73 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(9);
$export($export.S, 'Object', { setPrototypeOf: __webpack_require__(74).set });


/***/ }),
/* 74 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Works with __proto__ only. Old v8 can't work with null proto objects.
/* eslint-disable no-proto */
var isObject = __webpack_require__(14);
var anObject = __webpack_require__(13);
var check = function (O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};
module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
    function (test, buggy, set) {
      try {
        set = __webpack_require__(24)(Function.call, __webpack_require__(53).f(Object.prototype, '__proto__').set, 2);
        set(test, []);
        buggy = !(test instanceof Array);
      } catch (e) { buggy = true; }
      return function setPrototypeOf(O, proto) {
        check(O, proto);
        if (buggy) O.__proto__ = proto;
        else set(O, proto);
        return O;
      };
    }({}, false) : undefined),
  check: check
};


/***/ }),
/* 75 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(76);
var test = {};
test[__webpack_require__(28)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(19)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),
/* 76 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(36);
var TAG = __webpack_require__(28)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),
/* 77 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(9);

$export($export.P, 'Function', { bind: __webpack_require__(78) });


/***/ }),
/* 78 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var aFunction = __webpack_require__(25);
var isObject = __webpack_require__(14);
var invoke = __webpack_require__(79);
var arraySlice = [].slice;
var factories = {};

var construct = function (F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
    // eslint-disable-next-line no-new-func
    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  } return factories[len](F, args);
};

module.exports = Function.bind || function bind(that /* , ...args */) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);
  var bound = function (/* args... */) {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };
  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};


/***/ }),
/* 79 */
/***/ ((module) => {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),
/* 80 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(12).f;
var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name';

// 19.2.4.2 name
NAME in FProto || __webpack_require__(7) && dP(FProto, NAME, {
  configurable: true,
  get: function () {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});


/***/ }),
/* 81 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var isObject = __webpack_require__(14);
var getPrototypeOf = __webpack_require__(60);
var HAS_INSTANCE = __webpack_require__(28)('hasInstance');
var FunctionProto = Function.prototype;
// 19.2.3.6 Function.prototype[@@hasInstance](V)
if (!(HAS_INSTANCE in FunctionProto)) __webpack_require__(12).f(FunctionProto, HAS_INSTANCE, { value: function (O) {
  if (typeof this != 'function' || !isObject(O)) return false;
  if (!isObject(this.prototype)) return O instanceof this;
  // for environment w/o native `@@hasInstance` logic enough `instanceof`, but add this:
  while (O = getPrototypeOf(O)) if (this.prototype === O) return true;
  return false;
} });


/***/ }),
/* 82 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(9);
var $parseInt = __webpack_require__(83);
// 18.2.5 parseInt(string, radix)
$export($export.G + $export.F * (parseInt != $parseInt), { parseInt: $parseInt });


/***/ }),
/* 83 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseInt = __webpack_require__(5).parseInt;
var $trim = __webpack_require__(84).trim;
var ws = __webpack_require__(85);
var hex = /^[-+]?0[xX]/;

module.exports = $parseInt(ws + '08') !== 8 || $parseInt(ws + '0x16') !== 22 ? function parseInt(str, radix) {
  var string = $trim(String(str), 3);
  return $parseInt(string, (radix >>> 0) || (hex.test(string) ? 16 : 10));
} : $parseInt;


/***/ }),
/* 84 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(9);
var defined = __webpack_require__(37);
var fails = __webpack_require__(8);
var spaces = __webpack_require__(85);
var space = '[' + spaces + ']';
var non = '\u200b\u0085';
var ltrim = RegExp('^' + space + space + '*');
var rtrim = RegExp(space + space + '*$');

var exporter = function (KEY, exec, ALIAS) {
  var exp = {};
  var FORCE = fails(function () {
    return !!spaces[KEY]() || non[KEY]() != non;
  });
  var fn = exp[KEY] = FORCE ? exec(trim) : spaces[KEY];
  if (ALIAS) exp[ALIAS] = fn;
  $export($export.P + $export.F * FORCE, 'String', exp);
};

// 1 -> String#trimLeft
// 2 -> String#trimRight
// 3 -> String#trim
var trim = exporter.trim = function (string, TYPE) {
  string = String(defined(string));
  if (TYPE & 1) string = string.replace(ltrim, '');
  if (TYPE & 2) string = string.replace(rtrim, '');
  return string;
};

module.exports = exporter;


/***/ }),
/* 85 */
/***/ ((module) => {

module.exports = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
  '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028\u2029\uFEFF';


/***/ }),
/* 86 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(9);
var $parseFloat = __webpack_require__(87);
// 18.2.4 parseFloat(string)
$export($export.G + $export.F * (parseFloat != $parseFloat), { parseFloat: $parseFloat });


/***/ }),
/* 87 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $parseFloat = __webpack_require__(5).parseFloat;
var $trim = __webpack_require__(84).trim;

module.exports = 1 / $parseFloat(__webpack_require__(85) + '-0') !== -Infinity ? function parseFloat(str) {
  var string = $trim(String(str), 3);
  var result = $parseFloat(string);
  return result === 0 && string.charAt(0) == '-' ? -0 : result;
} : $parseFloat;


/***/ }),
/* 88 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(5);
var has = __webpack_require__(6);
var cof = __webpack_require__(36);
var inheritIfRequired = __webpack_require__(89);
var toPrimitive = __webpack_require__(17);
var fails = __webpack_require__(8);
var gOPN = __webpack_require__(52).f;
var gOPD = __webpack_require__(53).f;
var dP = __webpack_require__(12).f;
var $trim = __webpack_require__(84).trim;
var NUMBER = 'Number';
var $Number = global[NUMBER];
var Base = $Number;
var proto = $Number.prototype;
// Opera ~12 has broken Object#toString
var BROKEN_COF = cof(__webpack_require__(48)(proto)) == NUMBER;
var TRIM = 'trim' in String.prototype;

// 7.1.3 ToNumber(argument)
var toNumber = function (argument) {
  var it = toPrimitive(argument, false);
  if (typeof it == 'string' && it.length > 2) {
    it = TRIM ? it.trim() : $trim(it, 3);
    var first = it.charCodeAt(0);
    var third, radix, maxCode;
    if (first === 43 || first === 45) {
      third = it.charCodeAt(2);
      if (third === 88 || third === 120) return NaN; // Number('+0x1') should be NaN, old V8 fix
    } else if (first === 48) {
      switch (it.charCodeAt(1)) {
        case 66: case 98: radix = 2; maxCode = 49; break; // fast equal /^0b[01]+$/i
        case 79: case 111: radix = 8; maxCode = 55; break; // fast equal /^0o[0-7]+$/i
        default: return +it;
      }
      for (var digits = it.slice(2), i = 0, l = digits.length, code; i < l; i++) {
        code = digits.charCodeAt(i);
        // parseInt parses a string to a first unavailable symbol
        // but ToNumber should return NaN if a string contains unavailable symbols
        if (code < 48 || code > maxCode) return NaN;
      } return parseInt(digits, radix);
    }
  } return +it;
};

if (!$Number(' 0o1') || !$Number('0b1') || $Number('+0x1')) {
  $Number = function Number(value) {
    var it = arguments.length < 1 ? 0 : value;
    var that = this;
    return that instanceof $Number
      // check on 1..constructor(foo) case
      && (BROKEN_COF ? fails(function () { proto.valueOf.call(that); }) : cof(that) != NUMBER)
        ? inheritIfRequired(new Base(toNumber(it)), that, $Number) : toNumber(it);
  };
  for (var keys = __webpack_require__(7) ? gOPN(Base) : (
    // ES3:
    'MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,' +
    // ES6 (in case, if modules with ES6 Number statics required before):
    'EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,' +
    'MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger'
  ).split(','), j = 0, key; keys.length > j; j++) {
    if (has(Base, key = keys[j]) && !has($Number, key)) {
      dP($Number, key, gOPD(Base, key));
    }
  }
  $Number.prototype = proto;
  proto.constructor = $Number;
  __webpack_require__(19)(global, NUMBER, $Number);
}


/***/ }),
/* 89 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(14);
var setPrototypeOf = __webpack_require__(74).set;
module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;
  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  } return that;
};


/***/ }),
/* 90 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(9);
var toInteger = __webpack_require__(40);
var aNumberValue = __webpack_require__(91);
var repeat = __webpack_require__(92);
var $toFixed = 1.0.toFixed;
var floor = Math.floor;
var data = [0, 0, 0, 0, 0, 0];
var ERROR = 'Number.toFixed: incorrect invocation!';
var ZERO = '0';

var multiply = function (n, c) {
  var i = -1;
  var c2 = c;
  while (++i < 6) {
    c2 += n * data[i];
    data[i] = c2 % 1e7;
    c2 = floor(c2 / 1e7);
  }
};
var divide = function (n) {
  var i = 6;
  var c = 0;
  while (--i >= 0) {
    c += data[i];
    data[i] = floor(c / n);
    c = (c % n) * 1e7;
  }
};
var numToString = function () {
  var i = 6;
  var s = '';
  while (--i >= 0) {
    if (s !== '' || i === 0 || data[i] !== 0) {
      var t = String(data[i]);
      s = s === '' ? t : s + repeat.call(ZERO, 7 - t.length) + t;
    }
  } return s;
};
var pow = function (x, n, acc) {
  return n === 0 ? acc : n % 2 === 1 ? pow(x, n - 1, acc * x) : pow(x * x, n / 2, acc);
};
var log = function (x) {
  var n = 0;
  var x2 = x;
  while (x2 >= 4096) {
    n += 12;
    x2 /= 4096;
  }
  while (x2 >= 2) {
    n += 1;
    x2 /= 2;
  } return n;
};

$export($export.P + $export.F * (!!$toFixed && (
  0.00008.toFixed(3) !== '0.000' ||
  0.9.toFixed(0) !== '1' ||
  1.255.toFixed(2) !== '1.25' ||
  1000000000000000128.0.toFixed(0) !== '1000000000000000128'
) || !__webpack_require__(8)(function () {
  // V8 ~ Android 4.3-
  $toFixed.call({});
})), 'Number', {
  toFixed: function toFixed(fractionDigits) {
    var x = aNumberValue(this, ERROR);
    var f = toInteger(fractionDigits);
    var s = '';
    var m = ZERO;
    var e, z, j, k;
    if (f < 0 || f > 20) throw RangeError(ERROR);
    // eslint-disable-next-line no-self-compare
    if (x != x) return 'NaN';
    if (x <= -1e21 || x >= 1e21) return String(x);
    if (x < 0) {
      s = '-';
      x = -x;
    }
    if (x > 1e-21) {
      e = log(x * pow(2, 69, 1)) - 69;
      z = e < 0 ? x * pow(2, -e, 1) : x / pow(2, e, 1);
      z *= 0x10000000000000;
      e = 52 - e;
      if (e > 0) {
        multiply(0, z);
        j = f;
        while (j >= 7) {
          multiply(1e7, 0);
          j -= 7;
        }
        multiply(pow(10, j, 1), 0);
        j = e - 1;
        while (j >= 23) {
          divide(1 << 23);
          j -= 23;
        }
        divide(1 << j);
        multiply(1, 1);
        divide(2);
        m = numToString();
      } else {
        multiply(0, z);
        multiply(1 << -e, 0);
        m = numToString() + repeat.call(ZERO, f);
      }
    }
    if (f > 0) {
      k = m.length;
      m = s + (k <= f ? '0.' + repeat.call(ZERO, f - k) + m : m.slice(0, k - f) + '.' + m.slice(k - f));
    } else {
      m = s + m;
    } return m;
  }
});


/***/ }),
/* 91 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cof = __webpack_require__(36);
module.exports = function (it, msg) {
  if (typeof it != 'number' && cof(it) != 'Number') throw TypeError(msg);
  return +it;
};


/***/ }),
/* 92 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var toInteger = __webpack_require__(40);
var defined = __webpack_require__(37);

module.exports = function repeat(count) {
  var str = String(defined(this));
  var res = '';
  var n = toInteger(count);
  if (n < 0 || n == Infinity) throw RangeError("Count can't be negative");
  for (;n > 0; (n >>>= 1) && (str += str)) if (n & 1) res += str;
  return res;
};


/***/ }),
/* 93 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(9);
var $fails = __webpack_require__(8);
var aNumberValue = __webpack_require__(91);
var $toPrecision = 1.0.toPrecision;

$export($export.P + $export.F * ($fails(function () {
  // IE7-
  return $toPrecision.call(1, undefined) !== '1';
}) || !$fails(function () {
  // V8 ~ Android 4.3-
  $toPrecision.call({});
})), 'Number', {
  toPrecision: function toPrecision(precision) {
    var that = aNumberValue(this, 'Number#toPrecision: incorrect invocation!');
    return precision === undefined ? $toPrecision.call(that) : $toPrecision.call(that, precision);
  }
});


/***/ }),
/* 94 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.1 Number.EPSILON
var $export = __webpack_require__(9);

$export($export.S, 'Number', { EPSILON: Math.pow(2, -52) });


/***/ }),
/* 95 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.2 Number.isFinite(number)
var $export = __webpack_require__(9);
var _isFinite = __webpack_require__(5).isFinite;

$export($export.S, 'Number', {
  isFinite: function isFinite(it) {
    return typeof it == 'number' && _isFinite(it);
  }
});


/***/ }),
/* 96 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var $export = __webpack_require__(9);

$export($export.S, 'Number', { isInteger: __webpack_require__(97) });


/***/ }),
/* 97 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.3 Number.isInteger(number)
var isObject = __webpack_require__(14);
var floor = Math.floor;
module.exports = function isInteger(it) {
  return !isObject(it) && isFinite(it) && floor(it) === it;
};


/***/ }),
/* 98 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(9);

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),
/* 99 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.5 Number.isSafeInteger(number)
var $export = __webpack_require__(9);
var isInteger = __webpack_require__(97);
var abs = Math.abs;

$export($export.S, 'Number', {
  isSafeInteger: function isSafeInteger(number) {
    return isInteger(number) && abs(number) <= 0x1fffffffffffff;
  }
});


/***/ }),
/* 100 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.6 Number.MAX_SAFE_INTEGER
var $export = __webpack_require__(9);

$export($export.S, 'Number', { MAX_SAFE_INTEGER: 0x1fffffffffffff });


/***/ }),
/* 101 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.1.2.10 Number.MIN_SAFE_INTEGER
var $export = __webpack_require__(9);

$export($export.S, 'Number', { MIN_SAFE_INTEGER: -0x1fffffffffffff });


/***/ }),
/* 102 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(9);
var $parseFloat = __webpack_require__(87);
// 20.1.2.12 Number.parseFloat(string)
$export($export.S + $export.F * (Number.parseFloat != $parseFloat), 'Number', { parseFloat: $parseFloat });


/***/ }),
/* 103 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(9);
var $parseInt = __webpack_require__(83);
// 20.1.2.13 Number.parseInt(string, radix)
$export($export.S + $export.F * (Number.parseInt != $parseInt), 'Number', { parseInt: $parseInt });


/***/ }),
/* 104 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.3 Math.acosh(x)
var $export = __webpack_require__(9);
var log1p = __webpack_require__(105);
var sqrt = Math.sqrt;
var $acosh = Math.acosh;

$export($export.S + $export.F * !($acosh
  // V8 bug: https://code.google.com/p/v8/issues/detail?id=3509
  && Math.floor($acosh(Number.MAX_VALUE)) == 710
  // Tor Browser bug: Math.acosh(Infinity) -> NaN
  && $acosh(Infinity) == Infinity
), 'Math', {
  acosh: function acosh(x) {
    return (x = +x) < 1 ? NaN : x > 94906265.62425156
      ? Math.log(x) + Math.LN2
      : log1p(x - 1 + sqrt(x - 1) * sqrt(x + 1));
  }
});


/***/ }),
/* 105 */
/***/ ((module) => {

// 20.2.2.20 Math.log1p(x)
module.exports = Math.log1p || function log1p(x) {
  return (x = +x) > -1e-8 && x < 1e-8 ? x - x * x / 2 : Math.log(1 + x);
};


/***/ }),
/* 106 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.5 Math.asinh(x)
var $export = __webpack_require__(9);
var $asinh = Math.asinh;

function asinh(x) {
  return !isFinite(x = +x) || x == 0 ? x : x < 0 ? -asinh(-x) : Math.log(x + Math.sqrt(x * x + 1));
}

// Tor Browser bug: Math.asinh(0) -> -0
$export($export.S + $export.F * !($asinh && 1 / $asinh(0) > 0), 'Math', { asinh: asinh });


/***/ }),
/* 107 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.7 Math.atanh(x)
var $export = __webpack_require__(9);
var $atanh = Math.atanh;

// Tor Browser bug: Math.atanh(-0) -> 0
$export($export.S + $export.F * !($atanh && 1 / $atanh(-0) < 0), 'Math', {
  atanh: function atanh(x) {
    return (x = +x) == 0 ? x : Math.log((1 + x) / (1 - x)) / 2;
  }
});


/***/ }),
/* 108 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.9 Math.cbrt(x)
var $export = __webpack_require__(9);
var sign = __webpack_require__(109);

$export($export.S, 'Math', {
  cbrt: function cbrt(x) {
    return sign(x = +x) * Math.pow(Math.abs(x), 1 / 3);
  }
});


/***/ }),
/* 109 */
/***/ ((module) => {

// 20.2.2.28 Math.sign(x)
module.exports = Math.sign || function sign(x) {
  // eslint-disable-next-line no-self-compare
  return (x = +x) == 0 || x != x ? x : x < 0 ? -1 : 1;
};


/***/ }),
/* 110 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.11 Math.clz32(x)
var $export = __webpack_require__(9);

$export($export.S, 'Math', {
  clz32: function clz32(x) {
    return (x >>>= 0) ? 31 - Math.floor(Math.log(x + 0.5) * Math.LOG2E) : 32;
  }
});


/***/ }),
/* 111 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.12 Math.cosh(x)
var $export = __webpack_require__(9);
var exp = Math.exp;

$export($export.S, 'Math', {
  cosh: function cosh(x) {
    return (exp(x = +x) + exp(-x)) / 2;
  }
});


/***/ }),
/* 112 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.14 Math.expm1(x)
var $export = __webpack_require__(9);
var $expm1 = __webpack_require__(113);

$export($export.S + $export.F * ($expm1 != Math.expm1), 'Math', { expm1: $expm1 });


/***/ }),
/* 113 */
/***/ ((module) => {

// 20.2.2.14 Math.expm1(x)
var $expm1 = Math.expm1;
module.exports = (!$expm1
  // Old FF bug
  || $expm1(10) > 22025.465794806719 || $expm1(10) < 22025.4657948067165168
  // Tor Browser bug
  || $expm1(-2e-17) != -2e-17
) ? function expm1(x) {
  return (x = +x) == 0 ? x : x > -1e-6 && x < 1e-6 ? x + x * x / 2 : Math.exp(x) - 1;
} : $expm1;


/***/ }),
/* 114 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var $export = __webpack_require__(9);

$export($export.S, 'Math', { fround: __webpack_require__(115) });


/***/ }),
/* 115 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.16 Math.fround(x)
var sign = __webpack_require__(109);
var pow = Math.pow;
var EPSILON = pow(2, -52);
var EPSILON32 = pow(2, -23);
var MAX32 = pow(2, 127) * (2 - EPSILON32);
var MIN32 = pow(2, -126);

var roundTiesToEven = function (n) {
  return n + 1 / EPSILON - 1 / EPSILON;
};

module.exports = Math.fround || function fround(x) {
  var $abs = Math.abs(x);
  var $sign = sign(x);
  var a, result;
  if ($abs < MIN32) return $sign * roundTiesToEven($abs / MIN32 / EPSILON32) * MIN32 * EPSILON32;
  a = (1 + EPSILON32 / EPSILON) * $abs;
  result = a - (a - $abs);
  // eslint-disable-next-line no-self-compare
  if (result > MAX32 || result != result) return $sign * Infinity;
  return $sign * result;
};


/***/ }),
/* 116 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.17 Math.hypot([value1[, value2[, … ]]])
var $export = __webpack_require__(9);
var abs = Math.abs;

$export($export.S, 'Math', {
  hypot: function hypot(value1, value2) { // eslint-disable-line no-unused-vars
    var sum = 0;
    var i = 0;
    var aLen = arguments.length;
    var larg = 0;
    var arg, div;
    while (i < aLen) {
      arg = abs(arguments[i++]);
      if (larg < arg) {
        div = larg / arg;
        sum = sum * div * div + 1;
        larg = arg;
      } else if (arg > 0) {
        div = arg / larg;
        sum += div * div;
      } else sum += arg;
    }
    return larg === Infinity ? Infinity : larg * Math.sqrt(sum);
  }
});


/***/ }),
/* 117 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.18 Math.imul(x, y)
var $export = __webpack_require__(9);
var $imul = Math.imul;

// some WebKit versions fails with big numbers, some has wrong arity
$export($export.S + $export.F * __webpack_require__(8)(function () {
  return $imul(0xffffffff, 5) != -5 || $imul.length != 2;
}), 'Math', {
  imul: function imul(x, y) {
    var UINT16 = 0xffff;
    var xn = +x;
    var yn = +y;
    var xl = UINT16 & xn;
    var yl = UINT16 & yn;
    return 0 | xl * yl + ((UINT16 & xn >>> 16) * yl + xl * (UINT16 & yn >>> 16) << 16 >>> 0);
  }
});


/***/ }),
/* 118 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.21 Math.log10(x)
var $export = __webpack_require__(9);

$export($export.S, 'Math', {
  log10: function log10(x) {
    return Math.log(x) * Math.LOG10E;
  }
});


/***/ }),
/* 119 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.20 Math.log1p(x)
var $export = __webpack_require__(9);

$export($export.S, 'Math', { log1p: __webpack_require__(105) });


/***/ }),
/* 120 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.22 Math.log2(x)
var $export = __webpack_require__(9);

$export($export.S, 'Math', {
  log2: function log2(x) {
    return Math.log(x) / Math.LN2;
  }
});


/***/ }),
/* 121 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.28 Math.sign(x)
var $export = __webpack_require__(9);

$export($export.S, 'Math', { sign: __webpack_require__(109) });


/***/ }),
/* 122 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.30 Math.sinh(x)
var $export = __webpack_require__(9);
var expm1 = __webpack_require__(113);
var exp = Math.exp;

// V8 near Chromium 38 has a problem with very small numbers
$export($export.S + $export.F * __webpack_require__(8)(function () {
  return !Math.sinh(-2e-17) != -2e-17;
}), 'Math', {
  sinh: function sinh(x) {
    return Math.abs(x = +x) < 1
      ? (expm1(x) - expm1(-x)) / 2
      : (exp(x - 1) - exp(-x - 1)) * (Math.E / 2);
  }
});


/***/ }),
/* 123 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.33 Math.tanh(x)
var $export = __webpack_require__(9);
var expm1 = __webpack_require__(113);
var exp = Math.exp;

$export($export.S, 'Math', {
  tanh: function tanh(x) {
    var a = expm1(x = +x);
    var b = expm1(-x);
    return a == Infinity ? 1 : b == Infinity ? -1 : (a - b) / (exp(x) + exp(-x));
  }
});


/***/ }),
/* 124 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.2.2.34 Math.trunc(x)
var $export = __webpack_require__(9);

$export($export.S, 'Math', {
  trunc: function trunc(it) {
    return (it > 0 ? Math.floor : Math.ceil)(it);
  }
});


/***/ }),
/* 125 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(9);
var toAbsoluteIndex = __webpack_require__(41);
var fromCharCode = String.fromCharCode;
var $fromCodePoint = String.fromCodePoint;

// length should be 1, old FF problem
$export($export.S + $export.F * (!!$fromCodePoint && $fromCodePoint.length != 1), 'String', {
  // 21.1.2.2 String.fromCodePoint(...codePoints)
  fromCodePoint: function fromCodePoint(x) { // eslint-disable-line no-unused-vars
    var res = [];
    var aLen = arguments.length;
    var i = 0;
    var code;
    while (aLen > i) {
      code = +arguments[i++];
      if (toAbsoluteIndex(code, 0x10ffff) !== code) throw RangeError(code + ' is not a valid code point');
      res.push(code < 0x10000
        ? fromCharCode(code)
        : fromCharCode(((code -= 0x10000) >> 10) + 0xd800, code % 0x400 + 0xdc00)
      );
    } return res.join('');
  }
});


/***/ }),
/* 126 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(9);
var toIObject = __webpack_require__(34);
var toLength = __webpack_require__(39);

$export($export.S, 'String', {
  // 21.1.2.4 String.raw(callSite, ...substitutions)
  raw: function raw(callSite) {
    var tpl = toIObject(callSite.raw);
    var len = toLength(tpl.length);
    var aLen = arguments.length;
    var res = [];
    var i = 0;
    while (len > i) {
      res.push(String(tpl[i++]));
      if (i < aLen) res.push(String(arguments[i]));
    } return res.join('');
  }
});


/***/ }),
/* 127 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.1.3.25 String.prototype.trim()
__webpack_require__(84)('trim', function ($trim) {
  return function trim() {
    return $trim(this, 3);
  };
});


/***/ }),
/* 128 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $at = __webpack_require__(129)(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(130)(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),
/* 129 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var toInteger = __webpack_require__(40);
var defined = __webpack_require__(37);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),
/* 130 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(23);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(19);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(131);
var $iterCreate = __webpack_require__(132);
var setToStringTag = __webpack_require__(27);
var getPrototypeOf = __webpack_require__(60);
var ITERATOR = __webpack_require__(28)('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),
/* 131 */
/***/ ((module) => {

module.exports = {};


/***/ }),
/* 132 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var create = __webpack_require__(48);
var descriptor = __webpack_require__(18);
var setToStringTag = __webpack_require__(27);
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(11)(IteratorPrototype, __webpack_require__(28)('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),
/* 133 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(9);
var $at = __webpack_require__(129)(false);
$export($export.P, 'String', {
  // 21.1.3.3 String.prototype.codePointAt(pos)
  codePointAt: function codePointAt(pos) {
    return $at(this, pos);
  }
});


/***/ }),
/* 134 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.6 String.prototype.endsWith(searchString [, endPosition])

var $export = __webpack_require__(9);
var toLength = __webpack_require__(39);
var context = __webpack_require__(135);
var ENDS_WITH = 'endsWith';
var $endsWith = ''[ENDS_WITH];

$export($export.P + $export.F * __webpack_require__(137)(ENDS_WITH), 'String', {
  endsWith: function endsWith(searchString /* , endPosition = @length */) {
    var that = context(this, searchString, ENDS_WITH);
    var endPosition = arguments.length > 1 ? arguments[1] : undefined;
    var len = toLength(that.length);
    var end = endPosition === undefined ? len : Math.min(toLength(endPosition), len);
    var search = String(searchString);
    return $endsWith
      ? $endsWith.call(that, search, end)
      : that.slice(end - search.length, end) === search;
  }
});


/***/ }),
/* 135 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// helper for String#{startsWith, endsWith, includes}
var isRegExp = __webpack_require__(136);
var defined = __webpack_require__(37);

module.exports = function (that, searchString, NAME) {
  if (isRegExp(searchString)) throw TypeError('String#' + NAME + " doesn't accept regex!");
  return String(defined(that));
};


/***/ }),
/* 136 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(14);
var cof = __webpack_require__(36);
var MATCH = __webpack_require__(28)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ }),
/* 137 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MATCH = __webpack_require__(28)('match');
module.exports = function (KEY) {
  var re = /./;
  try {
    '/./'[KEY](re);
  } catch (e) {
    try {
      re[MATCH] = false;
      return !'/./'[KEY](re);
    } catch (f) { /* empty */ }
  } return true;
};


/***/ }),
/* 138 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.7 String.prototype.includes(searchString, position = 0)

var $export = __webpack_require__(9);
var context = __webpack_require__(135);
var INCLUDES = 'includes';

$export($export.P + $export.F * __webpack_require__(137)(INCLUDES), 'String', {
  includes: function includes(searchString /* , position = 0 */) {
    return !!~context(this, searchString, INCLUDES)
      .indexOf(searchString, arguments.length > 1 ? arguments[1] : undefined);
  }
});


/***/ }),
/* 139 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(9);

$export($export.P, 'String', {
  // 21.1.3.13 String.prototype.repeat(count)
  repeat: __webpack_require__(92)
});


/***/ }),
/* 140 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 21.1.3.18 String.prototype.startsWith(searchString [, position ])

var $export = __webpack_require__(9);
var toLength = __webpack_require__(39);
var context = __webpack_require__(135);
var STARTS_WITH = 'startsWith';
var $startsWith = ''[STARTS_WITH];

$export($export.P + $export.F * __webpack_require__(137)(STARTS_WITH), 'String', {
  startsWith: function startsWith(searchString /* , position = 0 */) {
    var that = context(this, searchString, STARTS_WITH);
    var index = toLength(Math.min(arguments.length > 1 ? arguments[1] : undefined, that.length));
    var search = String(searchString);
    return $startsWith
      ? $startsWith.call(that, search, index)
      : that.slice(index, index + search.length) === search;
  }
});


/***/ }),
/* 141 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.2 String.prototype.anchor(name)
__webpack_require__(142)('anchor', function (createHTML) {
  return function anchor(name) {
    return createHTML(this, 'a', 'name', name);
  };
});


/***/ }),
/* 142 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(9);
var fails = __webpack_require__(8);
var defined = __webpack_require__(37);
var quot = /"/g;
// B.2.3.2.1 CreateHTML(string, tag, attribute, value)
var createHTML = function (string, tag, attribute, value) {
  var S = String(defined(string));
  var p1 = '<' + tag;
  if (attribute !== '') p1 += ' ' + attribute + '="' + String(value).replace(quot, '&quot;') + '"';
  return p1 + '>' + S + '</' + tag + '>';
};
module.exports = function (NAME, exec) {
  var O = {};
  O[NAME] = exec(createHTML);
  $export($export.P + $export.F * fails(function () {
    var test = ''[NAME]('"');
    return test !== test.toLowerCase() || test.split('"').length > 3;
  }), 'String', O);
};


/***/ }),
/* 143 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.3 String.prototype.big()
__webpack_require__(142)('big', function (createHTML) {
  return function big() {
    return createHTML(this, 'big', '', '');
  };
});


/***/ }),
/* 144 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.4 String.prototype.blink()
__webpack_require__(142)('blink', function (createHTML) {
  return function blink() {
    return createHTML(this, 'blink', '', '');
  };
});


/***/ }),
/* 145 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.5 String.prototype.bold()
__webpack_require__(142)('bold', function (createHTML) {
  return function bold() {
    return createHTML(this, 'b', '', '');
  };
});


/***/ }),
/* 146 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.6 String.prototype.fixed()
__webpack_require__(142)('fixed', function (createHTML) {
  return function fixed() {
    return createHTML(this, 'tt', '', '');
  };
});


/***/ }),
/* 147 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.7 String.prototype.fontcolor(color)
__webpack_require__(142)('fontcolor', function (createHTML) {
  return function fontcolor(color) {
    return createHTML(this, 'font', 'color', color);
  };
});


/***/ }),
/* 148 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.8 String.prototype.fontsize(size)
__webpack_require__(142)('fontsize', function (createHTML) {
  return function fontsize(size) {
    return createHTML(this, 'font', 'size', size);
  };
});


/***/ }),
/* 149 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.9 String.prototype.italics()
__webpack_require__(142)('italics', function (createHTML) {
  return function italics() {
    return createHTML(this, 'i', '', '');
  };
});


/***/ }),
/* 150 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.10 String.prototype.link(url)
__webpack_require__(142)('link', function (createHTML) {
  return function link(url) {
    return createHTML(this, 'a', 'href', url);
  };
});


/***/ }),
/* 151 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.11 String.prototype.small()
__webpack_require__(142)('small', function (createHTML) {
  return function small() {
    return createHTML(this, 'small', '', '');
  };
});


/***/ }),
/* 152 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.12 String.prototype.strike()
__webpack_require__(142)('strike', function (createHTML) {
  return function strike() {
    return createHTML(this, 'strike', '', '');
  };
});


/***/ }),
/* 153 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.13 String.prototype.sub()
__webpack_require__(142)('sub', function (createHTML) {
  return function sub() {
    return createHTML(this, 'sub', '', '');
  };
});


/***/ }),
/* 154 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// B.2.3.14 String.prototype.sup()
__webpack_require__(142)('sup', function (createHTML) {
  return function sup() {
    return createHTML(this, 'sup', '', '');
  };
});


/***/ }),
/* 155 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(9);

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),
/* 156 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(9);
var toObject = __webpack_require__(47);
var toPrimitive = __webpack_require__(17);

$export($export.P + $export.F * __webpack_require__(8)(function () {
  return new Date(NaN).toJSON() !== null
    || Date.prototype.toJSON.call({ toISOString: function () { return 1; } }) !== 1;
}), 'Date', {
  // eslint-disable-next-line no-unused-vars
  toJSON: function toJSON(key) {
    var O = toObject(this);
    var pv = toPrimitive(O);
    return typeof pv == 'number' && !isFinite(pv) ? null : O.toISOString();
  }
});


/***/ }),
/* 157 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var $export = __webpack_require__(9);
var toISOString = __webpack_require__(158);

// PhantomJS / old WebKit has a broken implementations
$export($export.P + $export.F * (Date.prototype.toISOString !== toISOString), 'Date', {
  toISOString: toISOString
});


/***/ }),
/* 158 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 20.3.4.36 / 15.9.5.43 Date.prototype.toISOString()
var fails = __webpack_require__(8);
var getTime = Date.prototype.getTime;
var $toISOString = Date.prototype.toISOString;

var lz = function (num) {
  return num > 9 ? num : '0' + num;
};

// PhantomJS / old WebKit has a broken implementations
module.exports = (fails(function () {
  return $toISOString.call(new Date(-5e13 - 1)) != '0385-07-25T07:06:39.999Z';
}) || !fails(function () {
  $toISOString.call(new Date(NaN));
})) ? function toISOString() {
  if (!isFinite(getTime.call(this))) throw RangeError('Invalid time value');
  var d = this;
  var y = d.getUTCFullYear();
  var m = d.getUTCMilliseconds();
  var s = y < 0 ? '-' : y > 9999 ? '+' : '';
  return s + ('00000' + Math.abs(y)).slice(s ? -6 : -4) +
    '-' + lz(d.getUTCMonth() + 1) + '-' + lz(d.getUTCDate()) +
    'T' + lz(d.getUTCHours()) + ':' + lz(d.getUTCMinutes()) +
    ':' + lz(d.getUTCSeconds()) + '.' + (m > 99 ? m : '0' + lz(m)) + 'Z';
} : $toISOString;


/***/ }),
/* 159 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(19)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),
/* 160 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var TO_PRIMITIVE = __webpack_require__(28)('toPrimitive');
var proto = Date.prototype;

if (!(TO_PRIMITIVE in proto)) __webpack_require__(11)(proto, TO_PRIMITIVE, __webpack_require__(161));


/***/ }),
/* 161 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var anObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(17);
var NUMBER = 'number';

module.exports = function (hint) {
  if (hint !== 'string' && hint !== NUMBER && hint !== 'default') throw TypeError('Incorrect hint');
  return toPrimitive(anObject(this), hint != NUMBER);
};


/***/ }),
/* 162 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(9);

$export($export.S, 'Array', { isArray: __webpack_require__(46) });


/***/ }),
/* 163 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var ctx = __webpack_require__(24);
var $export = __webpack_require__(9);
var toObject = __webpack_require__(47);
var call = __webpack_require__(164);
var isArrayIter = __webpack_require__(165);
var toLength = __webpack_require__(39);
var createProperty = __webpack_require__(166);
var getIterFn = __webpack_require__(167);

$export($export.S + $export.F * !__webpack_require__(168)(function (iter) { Array.from(iter); }), 'Array', {
  // 22.1.2.1 Array.from(arrayLike, mapfn = undefined, thisArg = undefined)
  from: function from(arrayLike /* , mapfn = undefined, thisArg = undefined */) {
    var O = toObject(arrayLike);
    var C = typeof this == 'function' ? this : Array;
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var index = 0;
    var iterFn = getIterFn(O);
    var length, result, step, iterator;
    if (mapping) mapfn = ctx(mapfn, aLen > 2 ? arguments[2] : undefined, 2);
    // if object isn't iterable or it's array with default iterator - use simple case
    if (iterFn != undefined && !(C == Array && isArrayIter(iterFn))) {
      for (iterator = iterFn.call(O), result = new C(); !(step = iterator.next()).done; index++) {
        createProperty(result, index, mapping ? call(iterator, mapfn, [step.value, index], true) : step.value);
      }
    } else {
      length = toLength(O.length);
      for (result = new C(length); length > index; index++) {
        createProperty(result, index, mapping ? mapfn(O[index], index) : O[index]);
      }
    }
    result.length = index;
    return result;
  }
});


/***/ }),
/* 164 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(13);
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),
/* 165 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// check on default Array iterator
var Iterators = __webpack_require__(131);
var ITERATOR = __webpack_require__(28)('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),
/* 166 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $defineProperty = __webpack_require__(12);
var createDesc = __webpack_require__(18);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));
  else object[index] = value;
};


/***/ }),
/* 167 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var classof = __webpack_require__(76);
var ITERATOR = __webpack_require__(28)('iterator');
var Iterators = __webpack_require__(131);
module.exports = __webpack_require__(10).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),
/* 168 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ITERATOR = __webpack_require__(28)('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),
/* 169 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(9);
var createProperty = __webpack_require__(166);

// WebKit Array.of isn't generic
$export($export.S + $export.F * __webpack_require__(8)(function () {
  function F() { /* empty */ }
  return !(Array.of.call(F) instanceof F);
}), 'Array', {
  // 22.1.2.3 Array.of( ...items)
  of: function of(/* ...args */) {
    var index = 0;
    var aLen = arguments.length;
    var result = new (typeof this == 'function' ? this : Array)(aLen);
    while (aLen > index) createProperty(result, index, arguments[index++]);
    result.length = aLen;
    return result;
  }
});


/***/ }),
/* 170 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.13 Array.prototype.join(separator)
var $export = __webpack_require__(9);
var toIObject = __webpack_require__(34);
var arrayJoin = [].join;

// fallback for not array-like strings
$export($export.P + $export.F * (__webpack_require__(35) != Object || !__webpack_require__(171)(arrayJoin)), 'Array', {
  join: function join(separator) {
    return arrayJoin.call(toIObject(this), separator === undefined ? ',' : separator);
  }
});


/***/ }),
/* 171 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var fails = __webpack_require__(8);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () { /* empty */ }, 1) : method.call(null);
  });
};


/***/ }),
/* 172 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(9);
var html = __webpack_require__(50);
var cof = __webpack_require__(36);
var toAbsoluteIndex = __webpack_require__(41);
var toLength = __webpack_require__(39);
var arraySlice = [].slice;

// fallback for not array-like ES3 strings and DOM objects
$export($export.P + $export.F * __webpack_require__(8)(function () {
  if (html) arraySlice.call(html);
}), 'Array', {
  slice: function slice(begin, end) {
    var len = toLength(this.length);
    var klass = cof(this);
    end = end === undefined ? len : end;
    if (klass == 'Array') return arraySlice.call(this, begin, end);
    var start = toAbsoluteIndex(begin, len);
    var upTo = toAbsoluteIndex(end, len);
    var size = toLength(upTo - start);
    var cloned = new Array(size);
    var i = 0;
    for (; i < size; i++) cloned[i] = klass == 'String'
      ? this.charAt(start + i)
      : this[start + i];
    return cloned;
  }
});


/***/ }),
/* 173 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(9);
var aFunction = __webpack_require__(25);
var toObject = __webpack_require__(47);
var fails = __webpack_require__(8);
var $sort = [].sort;
var test = [1, 2, 3];

$export($export.P + $export.F * (fails(function () {
  // IE8-
  test.sort(undefined);
}) || !fails(function () {
  // V8 bug
  test.sort(null);
  // Old WebKit
}) || !__webpack_require__(171)($sort)), 'Array', {
  // 22.1.3.25 Array.prototype.sort(comparefn)
  sort: function sort(comparefn) {
    return comparefn === undefined
      ? $sort.call(toObject(this))
      : $sort.call(toObject(this), aFunction(comparefn));
  }
});


/***/ }),
/* 174 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(9);
var $forEach = __webpack_require__(175)(0);
var STRICT = __webpack_require__(171)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn /* , thisArg */) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 175 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(24);
var IObject = __webpack_require__(35);
var toObject = __webpack_require__(47);
var toLength = __webpack_require__(39);
var asc = __webpack_require__(176);
module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;
    for (;length > index; index++) if (NO_HOLES || index in self) {
      val = self[index];
      res = f(val, index, O);
      if (TYPE) {
        if (IS_MAP) result[index] = res;   // map
        else if (res) switch (TYPE) {
          case 3: return true;             // some
          case 5: return val;              // find
          case 6: return index;            // findIndex
          case 2: result.push(val);        // filter
        } else if (IS_EVERY) return false; // every
      }
    }
    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};


/***/ }),
/* 176 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(177);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};


/***/ }),
/* 177 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(14);
var isArray = __webpack_require__(46);
var SPECIES = __webpack_require__(28)('species');

module.exports = function (original) {
  var C;
  if (isArray(original)) {
    C = original.constructor;
    // cross-realm fallback
    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;
    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  } return C === undefined ? Array : C;
};


/***/ }),
/* 178 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(9);
var $map = __webpack_require__(175)(1);

$export($export.P + $export.F * !__webpack_require__(171)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn /* , thisArg */) {
    return $map(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 179 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(9);
var $filter = __webpack_require__(175)(2);

$export($export.P + $export.F * !__webpack_require__(171)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn /* , thisArg */) {
    return $filter(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 180 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(9);
var $some = __webpack_require__(175)(3);

$export($export.P + $export.F * !__webpack_require__(171)([].some, true), 'Array', {
  // 22.1.3.23 / 15.4.4.17 Array.prototype.some(callbackfn [, thisArg])
  some: function some(callbackfn /* , thisArg */) {
    return $some(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 181 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(9);
var $every = __webpack_require__(175)(4);

$export($export.P + $export.F * !__webpack_require__(171)([].every, true), 'Array', {
  // 22.1.3.5 / 15.4.4.16 Array.prototype.every(callbackfn [, thisArg])
  every: function every(callbackfn /* , thisArg */) {
    return $every(this, callbackfn, arguments[1]);
  }
});


/***/ }),
/* 182 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(9);
var $reduce = __webpack_require__(183);

$export($export.P + $export.F * !__webpack_require__(171)([].reduce, true), 'Array', {
  // 22.1.3.18 / 15.4.4.21 Array.prototype.reduce(callbackfn [, initialValue])
  reduce: function reduce(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], false);
  }
});


/***/ }),
/* 183 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var aFunction = __webpack_require__(25);
var toObject = __webpack_require__(47);
var IObject = __webpack_require__(35);
var toLength = __webpack_require__(39);

module.exports = function (that, callbackfn, aLen, memo, isRight) {
  aFunction(callbackfn);
  var O = toObject(that);
  var self = IObject(O);
  var length = toLength(O.length);
  var index = isRight ? length - 1 : 0;
  var i = isRight ? -1 : 1;
  if (aLen < 2) for (;;) {
    if (index in self) {
      memo = self[index];
      index += i;
      break;
    }
    index += i;
    if (isRight ? index < 0 : length <= index) {
      throw TypeError('Reduce of empty array with no initial value');
    }
  }
  for (;isRight ? index >= 0 : length > index; index += i) if (index in self) {
    memo = callbackfn(memo, self[index], index, O);
  }
  return memo;
};


/***/ }),
/* 184 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(9);
var $reduce = __webpack_require__(183);

$export($export.P + $export.F * !__webpack_require__(171)([].reduceRight, true), 'Array', {
  // 22.1.3.19 / 15.4.4.22 Array.prototype.reduceRight(callbackfn [, initialValue])
  reduceRight: function reduceRight(callbackfn /* , initialValue */) {
    return $reduce(this, callbackfn, arguments.length, arguments[1], true);
  }
});


/***/ }),
/* 185 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(9);
var $indexOf = __webpack_require__(38)(false);
var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(171)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement /* , fromIndex = 0 */) {
    return NEGATIVE_ZERO
      // convert -0 to +0
      ? $native.apply(this, arguments) || 0
      : $indexOf(this, searchElement, arguments[1]);
  }
});


/***/ }),
/* 186 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(9);
var toIObject = __webpack_require__(34);
var toInteger = __webpack_require__(40);
var toLength = __webpack_require__(39);
var $native = [].lastIndexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].lastIndexOf(1, -0) < 0;

$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(171)($native)), 'Array', {
  // 22.1.3.14 / 15.4.4.15 Array.prototype.lastIndexOf(searchElement [, fromIndex])
  lastIndexOf: function lastIndexOf(searchElement /* , fromIndex = @[*-1] */) {
    // convert -0 to +0
    if (NEGATIVE_ZERO) return $native.apply(this, arguments) || 0;
    var O = toIObject(this);
    var length = toLength(O.length);
    var index = length - 1;
    if (arguments.length > 1) index = Math.min(index, toInteger(arguments[1]));
    if (index < 0) index = length + index;
    for (;index >= 0; index--) if (index in O) if (O[index] === searchElement) return index || 0;
    return -1;
  }
});


/***/ }),
/* 187 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)
var $export = __webpack_require__(9);

$export($export.P, 'Array', { copyWithin: __webpack_require__(188) });

__webpack_require__(189)('copyWithin');


/***/ }),
/* 188 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.3 Array.prototype.copyWithin(target, start, end = this.length)

var toObject = __webpack_require__(47);
var toAbsoluteIndex = __webpack_require__(41);
var toLength = __webpack_require__(39);

module.exports = [].copyWithin || function copyWithin(target /* = 0 */, start /* = 0, end = @length */) {
  var O = toObject(this);
  var len = toLength(O.length);
  var to = toAbsoluteIndex(target, len);
  var from = toAbsoluteIndex(start, len);
  var end = arguments.length > 2 ? arguments[2] : undefined;
  var count = Math.min((end === undefined ? len : toAbsoluteIndex(end, len)) - from, len - to);
  var inc = 1;
  if (from < to && to < from + count) {
    inc = -1;
    from += count - 1;
    to += count - 1;
  }
  while (count-- > 0) {
    if (from in O) O[to] = O[from];
    else delete O[to];
    to += inc;
    from += inc;
  } return O;
};


/***/ }),
/* 189 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(28)('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(11)(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),
/* 190 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)
var $export = __webpack_require__(9);

$export($export.P, 'Array', { fill: __webpack_require__(191) });

__webpack_require__(189)('fill');


/***/ }),
/* 191 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// 22.1.3.6 Array.prototype.fill(value, start = 0, end = this.length)

var toObject = __webpack_require__(47);
var toAbsoluteIndex = __webpack_require__(41);
var toLength = __webpack_require__(39);
module.exports = function fill(value /* , start = 0, end = @length */) {
  var O = toObject(this);
  var length = toLength(O.length);
  var aLen = arguments.length;
  var index = toAbsoluteIndex(aLen > 1 ? arguments[1] : undefined, length);
  var end = aLen > 2 ? arguments[2] : undefined;
  var endPos = end === undefined ? length : toAbsoluteIndex(end, length);
  while (endPos > index) O[index++] = value;
  return O;
};


/***/ }),
/* 192 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.8 Array.prototype.find(predicate, thisArg = undefined)
var $export = __webpack_require__(9);
var $find = __webpack_require__(175)(5);
var KEY = 'find';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  find: function find(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(189)(KEY);


/***/ }),
/* 193 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 22.1.3.9 Array.prototype.findIndex(predicate, thisArg = undefined)
var $export = __webpack_require__(9);
var $find = __webpack_require__(175)(6);
var KEY = 'findIndex';
var forced = true;
// Shouldn't skip holes
if (KEY in []) Array(1)[KEY](function () { forced = false; });
$export($export.P + $export.F * forced, 'Array', {
  findIndex: function findIndex(callbackfn /* , that = undefined */) {
    return $find(this, callbackfn, arguments.length > 1 ? arguments[1] : undefined);
  }
});
__webpack_require__(189)(KEY);


/***/ }),
/* 194 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(195)('Array');


/***/ }),
/* 195 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(5);
var dP = __webpack_require__(12);
var DESCRIPTORS = __webpack_require__(7);
var SPECIES = __webpack_require__(28)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),
/* 196 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var addToUnscopables = __webpack_require__(189);
var step = __webpack_require__(197);
var Iterators = __webpack_require__(131);
var toIObject = __webpack_require__(34);

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(130)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),
/* 197 */
/***/ ((module) => {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),
/* 198 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(5);
var inheritIfRequired = __webpack_require__(89);
var dP = __webpack_require__(12).f;
var gOPN = __webpack_require__(52).f;
var isRegExp = __webpack_require__(136);
var $flags = __webpack_require__(199);
var $RegExp = global.RegExp;
var Base = $RegExp;
var proto = $RegExp.prototype;
var re1 = /a/g;
var re2 = /a/g;
// "new" creates a new object, old webkit buggy here
var CORRECT_NEW = new $RegExp(re1) !== re1;

if (__webpack_require__(7) && (!CORRECT_NEW || __webpack_require__(8)(function () {
  re2[__webpack_require__(28)('match')] = false;
  // RegExp constructor can alter flags and IsRegExp works correct with @@match
  return $RegExp(re1) != re1 || $RegExp(re2) == re2 || $RegExp(re1, 'i') != '/a/i';
}))) {
  $RegExp = function RegExp(p, f) {
    var tiRE = this instanceof $RegExp;
    var piRE = isRegExp(p);
    var fiU = f === undefined;
    return !tiRE && piRE && p.constructor === $RegExp && fiU ? p
      : inheritIfRequired(CORRECT_NEW
        ? new Base(piRE && !fiU ? p.source : p, f)
        : Base((piRE = p instanceof $RegExp) ? p.source : p, piRE && fiU ? $flags.call(p) : f)
      , tiRE ? this : proto, $RegExp);
  };
  var proxy = function (key) {
    key in $RegExp || dP($RegExp, key, {
      configurable: true,
      get: function () { return Base[key]; },
      set: function (it) { Base[key] = it; }
    });
  };
  for (var keys = gOPN(Base), i = 0; keys.length > i;) proxy(keys[i++]);
  proto.constructor = $RegExp;
  $RegExp.prototype = proto;
  __webpack_require__(19)(global, 'RegExp', $RegExp);
}

__webpack_require__(195)('RegExp');


/***/ }),
/* 199 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(13);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),
/* 200 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var regexpExec = __webpack_require__(201);
__webpack_require__(9)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),
/* 201 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var regexpFlags = __webpack_require__(199);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),
/* 202 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(203);
var anObject = __webpack_require__(13);
var $flags = __webpack_require__(199);
var DESCRIPTORS = __webpack_require__(7);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(19)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(8)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),
/* 203 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(7) && /./g.flags != 'g') __webpack_require__(12).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(199)
});


/***/ }),
/* 204 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(13);
var toLength = __webpack_require__(39);
var advanceStringIndex = __webpack_require__(205);
var regExpExec = __webpack_require__(206);

// @@match logic
__webpack_require__(207)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [
    // `String.prototype.match` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.match
    function match(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[MATCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
    },
    // `RegExp.prototype[@@match]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
    function (regexp) {
      var res = maybeCallNative($match, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      if (!rx.global) return regExpExec(rx, S);
      var fullUnicode = rx.unicode;
      rx.lastIndex = 0;
      var A = [];
      var n = 0;
      var result;
      while ((result = regExpExec(rx, S)) !== null) {
        var matchStr = String(result[0]);
        A[n] = matchStr;
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
        n++;
      }
      return n === 0 ? null : A;
    }
  ];
});


/***/ }),
/* 205 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var at = __webpack_require__(129)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),
/* 206 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var classof = __webpack_require__(76);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),
/* 207 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(200);
var redefine = __webpack_require__(19);
var hide = __webpack_require__(11);
var fails = __webpack_require__(8);
var defined = __webpack_require__(37);
var wks = __webpack_require__(28);
var regexpExec = __webpack_require__(201);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),
/* 208 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(13);
var toObject = __webpack_require__(47);
var toLength = __webpack_require__(39);
var toInteger = __webpack_require__(40);
var advanceStringIndex = __webpack_require__(205);
var regExpExec = __webpack_require__(206);
var max = Math.max;
var min = Math.min;
var floor = Math.floor;
var SUBSTITUTION_SYMBOLS = /\$([$&`']|\d\d?|<[^>]*>)/g;
var SUBSTITUTION_SYMBOLS_NO_NAMED = /\$([$&`']|\d\d?)/g;

var maybeToString = function (it) {
  return it === undefined ? it : String(it);
};

// @@replace logic
__webpack_require__(207)('replace', 2, function (defined, REPLACE, $replace, maybeCallNative) {
  return [
    // `String.prototype.replace` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.replace
    function replace(searchValue, replaceValue) {
      var O = defined(this);
      var fn = searchValue == undefined ? undefined : searchValue[REPLACE];
      return fn !== undefined
        ? fn.call(searchValue, O, replaceValue)
        : $replace.call(String(O), searchValue, replaceValue);
    },
    // `RegExp.prototype[@@replace]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@replace
    function (regexp, replaceValue) {
      var res = maybeCallNative($replace, regexp, this, replaceValue);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var functionalReplace = typeof replaceValue === 'function';
      if (!functionalReplace) replaceValue = String(replaceValue);
      var global = rx.global;
      if (global) {
        var fullUnicode = rx.unicode;
        rx.lastIndex = 0;
      }
      var results = [];
      while (true) {
        var result = regExpExec(rx, S);
        if (result === null) break;
        results.push(result);
        if (!global) break;
        var matchStr = String(result[0]);
        if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      }
      var accumulatedResult = '';
      var nextSourcePosition = 0;
      for (var i = 0; i < results.length; i++) {
        result = results[i];
        var matched = String(result[0]);
        var position = max(min(toInteger(result.index), S.length), 0);
        var captures = [];
        // NOTE: This is equivalent to
        //   captures = result.slice(1).map(maybeToString)
        // but for some reason `nativeSlice.call(result, 1, result.length)` (called in
        // the slice polyfill when slicing native arrays) "doesn't work" in safari 9 and
        // causes a crash (https://pastebin.com/N21QzeQA) when trying to debug it.
        for (var j = 1; j < result.length; j++) captures.push(maybeToString(result[j]));
        var namedCaptures = result.groups;
        if (functionalReplace) {
          var replacerArgs = [matched].concat(captures, position, S);
          if (namedCaptures !== undefined) replacerArgs.push(namedCaptures);
          var replacement = String(replaceValue.apply(undefined, replacerArgs));
        } else {
          replacement = getSubstitution(matched, S, position, captures, namedCaptures, replaceValue);
        }
        if (position >= nextSourcePosition) {
          accumulatedResult += S.slice(nextSourcePosition, position) + replacement;
          nextSourcePosition = position + matched.length;
        }
      }
      return accumulatedResult + S.slice(nextSourcePosition);
    }
  ];

    // https://tc39.github.io/ecma262/#sec-getsubstitution
  function getSubstitution(matched, str, position, captures, namedCaptures, replacement) {
    var tailPos = position + matched.length;
    var m = captures.length;
    var symbols = SUBSTITUTION_SYMBOLS_NO_NAMED;
    if (namedCaptures !== undefined) {
      namedCaptures = toObject(namedCaptures);
      symbols = SUBSTITUTION_SYMBOLS;
    }
    return $replace.call(replacement, symbols, function (match, ch) {
      var capture;
      switch (ch.charAt(0)) {
        case '$': return '$';
        case '&': return matched;
        case '`': return str.slice(0, position);
        case "'": return str.slice(tailPos);
        case '<':
          capture = namedCaptures[ch.slice(1, -1)];
          break;
        default: // \d\d?
          var n = +ch;
          if (n === 0) return match;
          if (n > m) {
            var f = floor(n / 10);
            if (f === 0) return match;
            if (f <= m) return captures[f - 1] === undefined ? ch.charAt(1) : captures[f - 1] + ch.charAt(1);
            return match;
          }
          capture = captures[n - 1];
      }
      return capture === undefined ? '' : capture;
    });
  }
});


/***/ }),
/* 209 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var anObject = __webpack_require__(13);
var sameValue = __webpack_require__(72);
var regExpExec = __webpack_require__(206);

// @@search logic
__webpack_require__(207)('search', 1, function (defined, SEARCH, $search, maybeCallNative) {
  return [
    // `String.prototype.search` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.search
    function search(regexp) {
      var O = defined(this);
      var fn = regexp == undefined ? undefined : regexp[SEARCH];
      return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[SEARCH](String(O));
    },
    // `RegExp.prototype[@@search]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@search
    function (regexp) {
      var res = maybeCallNative($search, regexp, this);
      if (res.done) return res.value;
      var rx = anObject(regexp);
      var S = String(this);
      var previousLastIndex = rx.lastIndex;
      if (!sameValue(previousLastIndex, 0)) rx.lastIndex = 0;
      var result = regExpExec(rx, S);
      if (!sameValue(rx.lastIndex, previousLastIndex)) rx.lastIndex = previousLastIndex;
      return result === null ? -1 : result.index;
    }
  ];
});


/***/ }),
/* 210 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


var isRegExp = __webpack_require__(136);
var anObject = __webpack_require__(13);
var speciesConstructor = __webpack_require__(211);
var advanceStringIndex = __webpack_require__(205);
var toLength = __webpack_require__(39);
var callRegExpExec = __webpack_require__(206);
var regexpExec = __webpack_require__(201);
var fails = __webpack_require__(8);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(207)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),
/* 211 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(13);
var aFunction = __webpack_require__(25);
var SPECIES = __webpack_require__(28)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),
/* 212 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var LIBRARY = __webpack_require__(23);
var global = __webpack_require__(5);
var ctx = __webpack_require__(24);
var classof = __webpack_require__(76);
var $export = __webpack_require__(9);
var isObject = __webpack_require__(14);
var aFunction = __webpack_require__(25);
var anInstance = __webpack_require__(213);
var forOf = __webpack_require__(214);
var speciesConstructor = __webpack_require__(211);
var task = __webpack_require__(215).set;
var microtask = __webpack_require__(216)();
var newPromiseCapabilityModule = __webpack_require__(217);
var perform = __webpack_require__(218);
var userAgent = __webpack_require__(219);
var promiseResolve = __webpack_require__(220);
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(28)('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function')
      && promise.then(empty) instanceof FakePromise
      // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
      // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
      // we can't detect it synchronously, so just check versions
      && v8.indexOf('6.6') !== 0
      && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(221)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(27)($Promise, PROMISE);
__webpack_require__(195)(PROMISE);
Wrapper = __webpack_require__(10)[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(168)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),
/* 213 */
/***/ ((module) => {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),
/* 214 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(24);
var call = __webpack_require__(164);
var isArrayIter = __webpack_require__(165);
var anObject = __webpack_require__(13);
var toLength = __webpack_require__(39);
var getIterFn = __webpack_require__(167);
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),
/* 215 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ctx = __webpack_require__(24);
var invoke = __webpack_require__(79);
var html = __webpack_require__(50);
var cel = __webpack_require__(16);
var global = __webpack_require__(5);
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(36)(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),
/* 216 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(5);
var macrotask = __webpack_require__(215).set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(36)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),
/* 217 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(25);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),
/* 218 */
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),
/* 219 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(5);
var navigator = global.navigator;

module.exports = navigator && navigator.userAgent || '';


/***/ }),
/* 220 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var anObject = __webpack_require__(13);
var isObject = __webpack_require__(14);
var newPromiseCapability = __webpack_require__(217);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),
/* 221 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var redefine = __webpack_require__(19);
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),
/* 222 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(223);
var validate = __webpack_require__(224);
var MAP = 'Map';

// 23.1 Map Objects
module.exports = __webpack_require__(225)(MAP, function (get) {
  return function Map() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);


/***/ }),
/* 223 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var dP = __webpack_require__(12).f;
var create = __webpack_require__(48);
var redefineAll = __webpack_require__(221);
var ctx = __webpack_require__(24);
var anInstance = __webpack_require__(213);
var forOf = __webpack_require__(214);
var $iterDefine = __webpack_require__(130);
var step = __webpack_require__(197);
var setSpecies = __webpack_require__(195);
var DESCRIPTORS = __webpack_require__(7);
var fastKey = __webpack_require__(26).fastKey;
var validate = __webpack_require__(224);
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),
/* 224 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(14);
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),
/* 225 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(5);
var $export = __webpack_require__(9);
var redefine = __webpack_require__(19);
var redefineAll = __webpack_require__(221);
var meta = __webpack_require__(26);
var forOf = __webpack_require__(214);
var anInstance = __webpack_require__(213);
var isObject = __webpack_require__(14);
var fails = __webpack_require__(8);
var $iterDetect = __webpack_require__(168);
var setToStringTag = __webpack_require__(27);
var inheritIfRequired = __webpack_require__(89);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),
/* 226 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var strong = __webpack_require__(223);
var validate = __webpack_require__(224);
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(225)(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),
/* 227 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(5);
var each = __webpack_require__(175)(0);
var redefine = __webpack_require__(19);
var meta = __webpack_require__(26);
var assign = __webpack_require__(70);
var weak = __webpack_require__(228);
var isObject = __webpack_require__(14);
var validate = __webpack_require__(224);
var NATIVE_WEAK_MAP = __webpack_require__(224);
var IS_IE11 = !global.ActiveXObject && 'ActiveXObject' in global;
var WEAK_MAP = 'WeakMap';
var getWeak = meta.getWeak;
var isExtensible = Object.isExtensible;
var uncaughtFrozenStore = weak.ufstore;
var InternalMap;

var wrapper = function (get) {
  return function WeakMap() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
};

var methods = {
  // 23.3.3.3 WeakMap.prototype.get(key)
  get: function get(key) {
    if (isObject(key)) {
      var data = getWeak(key);
      if (data === true) return uncaughtFrozenStore(validate(this, WEAK_MAP)).get(key);
      return data ? data[this._i] : undefined;
    }
  },
  // 23.3.3.5 WeakMap.prototype.set(key, value)
  set: function set(key, value) {
    return weak.def(validate(this, WEAK_MAP), key, value);
  }
};

// 23.3 WeakMap Objects
var $WeakMap = module.exports = __webpack_require__(225)(WEAK_MAP, wrapper, methods, weak, true, true);

// IE11 WeakMap frozen keys fix
if (NATIVE_WEAK_MAP && IS_IE11) {
  InternalMap = weak.getConstructor(wrapper, WEAK_MAP);
  assign(InternalMap.prototype, methods);
  meta.NEED = true;
  each(['delete', 'has', 'get', 'set'], function (key) {
    var proto = $WeakMap.prototype;
    var method = proto[key];
    redefine(proto, key, function (a, b) {
      // store frozen objects on internal weakmap shim
      if (isObject(a) && !isExtensible(a)) {
        if (!this._f) this._f = new InternalMap();
        var result = this._f[key](a, b);
        return key == 'set' ? this : result;
      // store all the rest on native weakmap
      } return method.call(this, a, b);
    });
  });
}


/***/ }),
/* 228 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var redefineAll = __webpack_require__(221);
var getWeak = __webpack_require__(26).getWeak;
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(14);
var anInstance = __webpack_require__(213);
var forOf = __webpack_require__(214);
var createArrayMethod = __webpack_require__(175);
var $has = __webpack_require__(6);
var validate = __webpack_require__(224);
var arrayFind = createArrayMethod(5);
var arrayFindIndex = createArrayMethod(6);
var id = 0;

// fallback for uncaught frozen keys
var uncaughtFrozenStore = function (that) {
  return that._l || (that._l = new UncaughtFrozenStore());
};
var UncaughtFrozenStore = function () {
  this.a = [];
};
var findUncaughtFrozen = function (store, key) {
  return arrayFind(store.a, function (it) {
    return it[0] === key;
  });
};
UncaughtFrozenStore.prototype = {
  get: function (key) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) return entry[1];
  },
  has: function (key) {
    return !!findUncaughtFrozen(this, key);
  },
  set: function (key, value) {
    var entry = findUncaughtFrozen(this, key);
    if (entry) entry[1] = value;
    else this.a.push([key, value]);
  },
  'delete': function (key) {
    var index = arrayFindIndex(this.a, function (it) {
      return it[0] === key;
    });
    if (~index) this.a.splice(index, 1);
    return !!~index;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;      // collection type
      that._i = id++;      // collection id
      that._l = undefined; // leak store for uncaught frozen objects
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.3.3.2 WeakMap.prototype.delete(key)
      // 23.4.3.3 WeakSet.prototype.delete(value)
      'delete': function (key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME))['delete'](key);
        return data && $has(data, this._i) && delete data[this._i];
      },
      // 23.3.3.4 WeakMap.prototype.has(key)
      // 23.4.3.4 WeakSet.prototype.has(value)
      has: function has(key) {
        if (!isObject(key)) return false;
        var data = getWeak(key);
        if (data === true) return uncaughtFrozenStore(validate(this, NAME)).has(key);
        return data && $has(data, this._i);
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var data = getWeak(anObject(key), true);
    if (data === true) uncaughtFrozenStore(that).set(key, value);
    else data[that._i] = value;
    return that;
  },
  ufstore: uncaughtFrozenStore
};


/***/ }),
/* 229 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var weak = __webpack_require__(228);
var validate = __webpack_require__(224);
var WEAK_SET = 'WeakSet';

// 23.4 WeakSet Objects
__webpack_require__(225)(WEAK_SET, function (get) {
  return function WeakSet() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.4.3.1 WeakSet.prototype.add(value)
  add: function add(value) {
    return weak.def(validate(this, WEAK_SET), value, true);
  }
}, weak, false, true);


/***/ }),
/* 230 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

var $export = __webpack_require__(9);
var $typed = __webpack_require__(231);
var buffer = __webpack_require__(232);
var anObject = __webpack_require__(13);
var toAbsoluteIndex = __webpack_require__(41);
var toLength = __webpack_require__(39);
var isObject = __webpack_require__(14);
var ArrayBuffer = __webpack_require__(5).ArrayBuffer;
var speciesConstructor = __webpack_require__(211);
var $ArrayBuffer = buffer.ArrayBuffer;
var $DataView = buffer.DataView;
var $isView = $typed.ABV && ArrayBuffer.isView;
var $slice = $ArrayBuffer.prototype.slice;
var VIEW = $typed.VIEW;
var ARRAY_BUFFER = 'ArrayBuffer';

$export($export.G + $export.W + $export.F * (ArrayBuffer !== $ArrayBuffer), { ArrayBuffer: $ArrayBuffer });

$export($export.S + $export.F * !$typed.CONSTR, ARRAY_BUFFER, {
  // 24.1.3.1 ArrayBuffer.isView(arg)
  isView: function isView(it) {
    return $isView && $isView(it) || isObject(it) && VIEW in it;
  }
});

$export($export.P + $export.U + $export.F * __webpack_require__(8)(function () {
  return !new $ArrayBuffer(2).slice(1, undefined).byteLength;
}), ARRAY_BUFFER, {
  // 24.1.4.3 ArrayBuffer.prototype.slice(start, end)
  slice: function slice(start, end) {
    if ($slice !== undefined && end === undefined) return $slice.call(anObject(this), start); // FF fix
    var len = anObject(this).byteLength;
    var first = toAbsoluteIndex(start, len);
    var fin = toAbsoluteIndex(end === undefined ? len : end, len);
    var result = new (speciesConstructor(this, $ArrayBuffer))(toLength(fin - first));
    var viewS = new $DataView(this);
    var viewT = new $DataView(result);
    var index = 0;
    while (first < fin) {
      viewT.setUint8(index++, viewS.getUint8(first++));
    } return result;
  }
});

__webpack_require__(195)(ARRAY_BUFFER);


/***/ }),
/* 231 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(5);
var hide = __webpack_require__(11);
var uid = __webpack_require__(20);
var TYPED = uid('typed_array');
var VIEW = uid('view');
var ABV = !!(global.ArrayBuffer && global.DataView);
var CONSTR = ABV;
var i = 0;
var l = 9;
var Typed;

var TypedArrayConstructors = (
  'Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array'
).split(',');

while (i < l) {
  if (Typed = global[TypedArrayConstructors[i++]]) {
    hide(Typed.prototype, TYPED, true);
    hide(Typed.prototype, VIEW, true);
  } else CONSTR = false;
}

module.exports = {
  ABV: ABV,
  CONSTR: CONSTR,
  TYPED: TYPED,
  VIEW: VIEW
};


/***/ }),
/* 232 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

var global = __webpack_require__(5);
var DESCRIPTORS = __webpack_require__(7);
var LIBRARY = __webpack_require__(23);
var $typed = __webpack_require__(231);
var hide = __webpack_require__(11);
var redefineAll = __webpack_require__(221);
var fails = __webpack_require__(8);
var anInstance = __webpack_require__(213);
var toInteger = __webpack_require__(40);
var toLength = __webpack_require__(39);
var toIndex = __webpack_require__(233);
var gOPN = __webpack_require__(52).f;
var dP = __webpack_require__(12).f;
var arrayFill = __webpack_require__(191);
var setToStringTag = __webpack_require__(27);
var ARRAY_BUFFER = 'ArrayBuffer';
var DATA_VIEW = 'DataView';
var PROTOTYPE = 'prototype';
var WRONG_LENGTH = 'Wrong length!';
var WRONG_INDEX = 'Wrong index!';
var $ArrayBuffer = global[ARRAY_BUFFER];
var $DataView = global[DATA_VIEW];
var Math = global.Math;
var RangeError = global.RangeError;
// eslint-disable-next-line no-shadow-restricted-names
var Infinity = global.Infinity;
var BaseBuffer = $ArrayBuffer;
var abs = Math.abs;
var pow = Math.pow;
var floor = Math.floor;
var log = Math.log;
var LN2 = Math.LN2;
var BUFFER = 'buffer';
var BYTE_LENGTH = 'byteLength';
var BYTE_OFFSET = 'byteOffset';
var $BUFFER = DESCRIPTORS ? '_b' : BUFFER;
var $LENGTH = DESCRIPTORS ? '_l' : BYTE_LENGTH;
var $OFFSET = DESCRIPTORS ? '_o' : BYTE_OFFSET;

// IEEE754 conversions based on https://github.com/feross/ieee754
function packIEEE754(value, mLen, nBytes) {
  var buffer = new Array(nBytes);
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var rt = mLen === 23 ? pow(2, -24) - pow(2, -77) : 0;
  var i = 0;
  var s = value < 0 || value === 0 && 1 / value < 0 ? 1 : 0;
  var e, m, c;
  value = abs(value);
  // eslint-disable-next-line no-self-compare
  if (value != value || value === Infinity) {
    // eslint-disable-next-line no-self-compare
    m = value != value ? 1 : 0;
    e = eMax;
  } else {
    e = floor(log(value) / LN2);
    if (value * (c = pow(2, -e)) < 1) {
      e--;
      c *= 2;
    }
    if (e + eBias >= 1) {
      value += rt / c;
    } else {
      value += rt * pow(2, 1 - eBias);
    }
    if (value * c >= 2) {
      e++;
      c /= 2;
    }
    if (e + eBias >= eMax) {
      m = 0;
      e = eMax;
    } else if (e + eBias >= 1) {
      m = (value * c - 1) * pow(2, mLen);
      e = e + eBias;
    } else {
      m = value * pow(2, eBias - 1) * pow(2, mLen);
      e = 0;
    }
  }
  for (; mLen >= 8; buffer[i++] = m & 255, m /= 256, mLen -= 8);
  e = e << mLen | m;
  eLen += mLen;
  for (; eLen > 0; buffer[i++] = e & 255, e /= 256, eLen -= 8);
  buffer[--i] |= s * 128;
  return buffer;
}
function unpackIEEE754(buffer, mLen, nBytes) {
  var eLen = nBytes * 8 - mLen - 1;
  var eMax = (1 << eLen) - 1;
  var eBias = eMax >> 1;
  var nBits = eLen - 7;
  var i = nBytes - 1;
  var s = buffer[i--];
  var e = s & 127;
  var m;
  s >>= 7;
  for (; nBits > 0; e = e * 256 + buffer[i], i--, nBits -= 8);
  m = e & (1 << -nBits) - 1;
  e >>= -nBits;
  nBits += mLen;
  for (; nBits > 0; m = m * 256 + buffer[i], i--, nBits -= 8);
  if (e === 0) {
    e = 1 - eBias;
  } else if (e === eMax) {
    return m ? NaN : s ? -Infinity : Infinity;
  } else {
    m = m + pow(2, mLen);
    e = e - eBias;
  } return (s ? -1 : 1) * m * pow(2, e - mLen);
}

function unpackI32(bytes) {
  return bytes[3] << 24 | bytes[2] << 16 | bytes[1] << 8 | bytes[0];
}
function packI8(it) {
  return [it & 0xff];
}
function packI16(it) {
  return [it & 0xff, it >> 8 & 0xff];
}
function packI32(it) {
  return [it & 0xff, it >> 8 & 0xff, it >> 16 & 0xff, it >> 24 & 0xff];
}
function packF64(it) {
  return packIEEE754(it, 52, 8);
}
function packF32(it) {
  return packIEEE754(it, 23, 4);
}

function addGetter(C, key, internal) {
  dP(C[PROTOTYPE], key, { get: function () { return this[internal]; } });
}

function get(view, bytes, index, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = store.slice(start, start + bytes);
  return isLittleEndian ? pack : pack.reverse();
}
function set(view, bytes, index, conversion, value, isLittleEndian) {
  var numIndex = +index;
  var intIndex = toIndex(numIndex);
  if (intIndex + bytes > view[$LENGTH]) throw RangeError(WRONG_INDEX);
  var store = view[$BUFFER]._b;
  var start = intIndex + view[$OFFSET];
  var pack = conversion(+value);
  for (var i = 0; i < bytes; i++) store[start + i] = pack[isLittleEndian ? i : bytes - i - 1];
}

if (!$typed.ABV) {
  $ArrayBuffer = function ArrayBuffer(length) {
    anInstance(this, $ArrayBuffer, ARRAY_BUFFER);
    var byteLength = toIndex(length);
    this._b = arrayFill.call(new Array(byteLength), 0);
    this[$LENGTH] = byteLength;
  };

  $DataView = function DataView(buffer, byteOffset, byteLength) {
    anInstance(this, $DataView, DATA_VIEW);
    anInstance(buffer, $ArrayBuffer, DATA_VIEW);
    var bufferLength = buffer[$LENGTH];
    var offset = toInteger(byteOffset);
    if (offset < 0 || offset > bufferLength) throw RangeError('Wrong offset!');
    byteLength = byteLength === undefined ? bufferLength - offset : toLength(byteLength);
    if (offset + byteLength > bufferLength) throw RangeError(WRONG_LENGTH);
    this[$BUFFER] = buffer;
    this[$OFFSET] = offset;
    this[$LENGTH] = byteLength;
  };

  if (DESCRIPTORS) {
    addGetter($ArrayBuffer, BYTE_LENGTH, '_l');
    addGetter($DataView, BUFFER, '_b');
    addGetter($DataView, BYTE_LENGTH, '_l');
    addGetter($DataView, BYTE_OFFSET, '_o');
  }

  redefineAll($DataView[PROTOTYPE], {
    getInt8: function getInt8(byteOffset) {
      return get(this, 1, byteOffset)[0] << 24 >> 24;
    },
    getUint8: function getUint8(byteOffset) {
      return get(this, 1, byteOffset)[0];
    },
    getInt16: function getInt16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return (bytes[1] << 8 | bytes[0]) << 16 >> 16;
    },
    getUint16: function getUint16(byteOffset /* , littleEndian */) {
      var bytes = get(this, 2, byteOffset, arguments[1]);
      return bytes[1] << 8 | bytes[0];
    },
    getInt32: function getInt32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1]));
    },
    getUint32: function getUint32(byteOffset /* , littleEndian */) {
      return unpackI32(get(this, 4, byteOffset, arguments[1])) >>> 0;
    },
    getFloat32: function getFloat32(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 4, byteOffset, arguments[1]), 23, 4);
    },
    getFloat64: function getFloat64(byteOffset /* , littleEndian */) {
      return unpackIEEE754(get(this, 8, byteOffset, arguments[1]), 52, 8);
    },
    setInt8: function setInt8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setUint8: function setUint8(byteOffset, value) {
      set(this, 1, byteOffset, packI8, value);
    },
    setInt16: function setInt16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setUint16: function setUint16(byteOffset, value /* , littleEndian */) {
      set(this, 2, byteOffset, packI16, value, arguments[2]);
    },
    setInt32: function setInt32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setUint32: function setUint32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packI32, value, arguments[2]);
    },
    setFloat32: function setFloat32(byteOffset, value /* , littleEndian */) {
      set(this, 4, byteOffset, packF32, value, arguments[2]);
    },
    setFloat64: function setFloat64(byteOffset, value /* , littleEndian */) {
      set(this, 8, byteOffset, packF64, value, arguments[2]);
    }
  });
} else {
  if (!fails(function () {
    $ArrayBuffer(1);
  }) || !fails(function () {
    new $ArrayBuffer(-1); // eslint-disable-line no-new
  }) || fails(function () {
    new $ArrayBuffer(); // eslint-disable-line no-new
    new $ArrayBuffer(1.5); // eslint-disable-line no-new
    new $ArrayBuffer(NaN); // eslint-disable-line no-new
    return $ArrayBuffer.name != ARRAY_BUFFER;
  })) {
    $ArrayBuffer = function ArrayBuffer(length) {
      anInstance(this, $ArrayBuffer);
      return new BaseBuffer(toIndex(length));
    };
    var ArrayBufferProto = $ArrayBuffer[PROTOTYPE] = BaseBuffer[PROTOTYPE];
    for (var keys = gOPN(BaseBuffer), j = 0, key; keys.length > j;) {
      if (!((key = keys[j++]) in $ArrayBuffer)) hide($ArrayBuffer, key, BaseBuffer[key]);
    }
    if (!LIBRARY) ArrayBufferProto.constructor = $ArrayBuffer;
  }
  // iOS Safari 7.x bug
  var view = new $DataView(new $ArrayBuffer(2));
  var $setInt8 = $DataView[PROTOTYPE].setInt8;
  view.setInt8(0, 2147483648);
  view.setInt8(1, 2147483649);
  if (view.getInt8(0) || !view.getInt8(1)) redefineAll($DataView[PROTOTYPE], {
    setInt8: function setInt8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    },
    setUint8: function setUint8(byteOffset, value) {
      $setInt8.call(this, byteOffset, value << 24 >> 24);
    }
  }, true);
}
setToStringTag($ArrayBuffer, ARRAY_BUFFER);
setToStringTag($DataView, DATA_VIEW);
hide($DataView[PROTOTYPE], $typed.VIEW, true);
exports[ARRAY_BUFFER] = $ArrayBuffer;
exports[DATA_VIEW] = $DataView;


/***/ }),
/* 233 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://tc39.github.io/ecma262/#sec-toindex
var toInteger = __webpack_require__(40);
var toLength = __webpack_require__(39);
module.exports = function (it) {
  if (it === undefined) return 0;
  var number = toInteger(it);
  var length = toLength(number);
  if (number !== length) throw RangeError('Wrong length!');
  return length;
};


/***/ }),
/* 234 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(9);
$export($export.G + $export.W + $export.F * !__webpack_require__(231).ABV, {
  DataView: __webpack_require__(232).DataView
});


/***/ }),
/* 235 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(236)('Int8', 1, function (init) {
  return function Int8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 236 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

if (__webpack_require__(7)) {
  var LIBRARY = __webpack_require__(23);
  var global = __webpack_require__(5);
  var fails = __webpack_require__(8);
  var $export = __webpack_require__(9);
  var $typed = __webpack_require__(231);
  var $buffer = __webpack_require__(232);
  var ctx = __webpack_require__(24);
  var anInstance = __webpack_require__(213);
  var propertyDesc = __webpack_require__(18);
  var hide = __webpack_require__(11);
  var redefineAll = __webpack_require__(221);
  var toInteger = __webpack_require__(40);
  var toLength = __webpack_require__(39);
  var toIndex = __webpack_require__(233);
  var toAbsoluteIndex = __webpack_require__(41);
  var toPrimitive = __webpack_require__(17);
  var has = __webpack_require__(6);
  var classof = __webpack_require__(76);
  var isObject = __webpack_require__(14);
  var toObject = __webpack_require__(47);
  var isArrayIter = __webpack_require__(165);
  var create = __webpack_require__(48);
  var getPrototypeOf = __webpack_require__(60);
  var gOPN = __webpack_require__(52).f;
  var getIterFn = __webpack_require__(167);
  var uid = __webpack_require__(20);
  var wks = __webpack_require__(28);
  var createArrayMethod = __webpack_require__(175);
  var createArrayIncludes = __webpack_require__(38);
  var speciesConstructor = __webpack_require__(211);
  var ArrayIterators = __webpack_require__(196);
  var Iterators = __webpack_require__(131);
  var $iterDetect = __webpack_require__(168);
  var setSpecies = __webpack_require__(195);
  var arrayFill = __webpack_require__(191);
  var arrayCopyWithin = __webpack_require__(188);
  var $DP = __webpack_require__(12);
  var $GOPD = __webpack_require__(53);
  var dP = $DP.f;
  var gOPD = $GOPD.f;
  var RangeError = global.RangeError;
  var TypeError = global.TypeError;
  var Uint8Array = global.Uint8Array;
  var ARRAY_BUFFER = 'ArrayBuffer';
  var SHARED_BUFFER = 'Shared' + ARRAY_BUFFER;
  var BYTES_PER_ELEMENT = 'BYTES_PER_ELEMENT';
  var PROTOTYPE = 'prototype';
  var ArrayProto = Array[PROTOTYPE];
  var $ArrayBuffer = $buffer.ArrayBuffer;
  var $DataView = $buffer.DataView;
  var arrayForEach = createArrayMethod(0);
  var arrayFilter = createArrayMethod(2);
  var arraySome = createArrayMethod(3);
  var arrayEvery = createArrayMethod(4);
  var arrayFind = createArrayMethod(5);
  var arrayFindIndex = createArrayMethod(6);
  var arrayIncludes = createArrayIncludes(true);
  var arrayIndexOf = createArrayIncludes(false);
  var arrayValues = ArrayIterators.values;
  var arrayKeys = ArrayIterators.keys;
  var arrayEntries = ArrayIterators.entries;
  var arrayLastIndexOf = ArrayProto.lastIndexOf;
  var arrayReduce = ArrayProto.reduce;
  var arrayReduceRight = ArrayProto.reduceRight;
  var arrayJoin = ArrayProto.join;
  var arraySort = ArrayProto.sort;
  var arraySlice = ArrayProto.slice;
  var arrayToString = ArrayProto.toString;
  var arrayToLocaleString = ArrayProto.toLocaleString;
  var ITERATOR = wks('iterator');
  var TAG = wks('toStringTag');
  var TYPED_CONSTRUCTOR = uid('typed_constructor');
  var DEF_CONSTRUCTOR = uid('def_constructor');
  var ALL_CONSTRUCTORS = $typed.CONSTR;
  var TYPED_ARRAY = $typed.TYPED;
  var VIEW = $typed.VIEW;
  var WRONG_LENGTH = 'Wrong length!';

  var $map = createArrayMethod(1, function (O, length) {
    return allocate(speciesConstructor(O, O[DEF_CONSTRUCTOR]), length);
  });

  var LITTLE_ENDIAN = fails(function () {
    // eslint-disable-next-line no-undef
    return new Uint8Array(new Uint16Array([1]).buffer)[0] === 1;
  });

  var FORCED_SET = !!Uint8Array && !!Uint8Array[PROTOTYPE].set && fails(function () {
    new Uint8Array(1).set({});
  });

  var toOffset = function (it, BYTES) {
    var offset = toInteger(it);
    if (offset < 0 || offset % BYTES) throw RangeError('Wrong offset!');
    return offset;
  };

  var validate = function (it) {
    if (isObject(it) && TYPED_ARRAY in it) return it;
    throw TypeError(it + ' is not a typed array!');
  };

  var allocate = function (C, length) {
    if (!(isObject(C) && TYPED_CONSTRUCTOR in C)) {
      throw TypeError('It is not a typed array constructor!');
    } return new C(length);
  };

  var speciesFromList = function (O, list) {
    return fromList(speciesConstructor(O, O[DEF_CONSTRUCTOR]), list);
  };

  var fromList = function (C, list) {
    var index = 0;
    var length = list.length;
    var result = allocate(C, length);
    while (length > index) result[index] = list[index++];
    return result;
  };

  var addGetter = function (it, key, internal) {
    dP(it, key, { get: function () { return this._d[internal]; } });
  };

  var $from = function from(source /* , mapfn, thisArg */) {
    var O = toObject(source);
    var aLen = arguments.length;
    var mapfn = aLen > 1 ? arguments[1] : undefined;
    var mapping = mapfn !== undefined;
    var iterFn = getIterFn(O);
    var i, length, values, result, step, iterator;
    if (iterFn != undefined && !isArrayIter(iterFn)) {
      for (iterator = iterFn.call(O), values = [], i = 0; !(step = iterator.next()).done; i++) {
        values.push(step.value);
      } O = values;
    }
    if (mapping && aLen > 2) mapfn = ctx(mapfn, arguments[2], 2);
    for (i = 0, length = toLength(O.length), result = allocate(this, length); length > i; i++) {
      result[i] = mapping ? mapfn(O[i], i) : O[i];
    }
    return result;
  };

  var $of = function of(/* ...items */) {
    var index = 0;
    var length = arguments.length;
    var result = allocate(this, length);
    while (length > index) result[index] = arguments[index++];
    return result;
  };

  // iOS Safari 6.x fails here
  var TO_LOCALE_BUG = !!Uint8Array && fails(function () { arrayToLocaleString.call(new Uint8Array(1)); });

  var $toLocaleString = function toLocaleString() {
    return arrayToLocaleString.apply(TO_LOCALE_BUG ? arraySlice.call(validate(this)) : validate(this), arguments);
  };

  var proto = {
    copyWithin: function copyWithin(target, start /* , end */) {
      return arrayCopyWithin.call(validate(this), target, start, arguments.length > 2 ? arguments[2] : undefined);
    },
    every: function every(callbackfn /* , thisArg */) {
      return arrayEvery(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    fill: function fill(value /* , start, end */) { // eslint-disable-line no-unused-vars
      return arrayFill.apply(validate(this), arguments);
    },
    filter: function filter(callbackfn /* , thisArg */) {
      return speciesFromList(this, arrayFilter(validate(this), callbackfn,
        arguments.length > 1 ? arguments[1] : undefined));
    },
    find: function find(predicate /* , thisArg */) {
      return arrayFind(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    findIndex: function findIndex(predicate /* , thisArg */) {
      return arrayFindIndex(validate(this), predicate, arguments.length > 1 ? arguments[1] : undefined);
    },
    forEach: function forEach(callbackfn /* , thisArg */) {
      arrayForEach(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    indexOf: function indexOf(searchElement /* , fromIndex */) {
      return arrayIndexOf(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    includes: function includes(searchElement /* , fromIndex */) {
      return arrayIncludes(validate(this), searchElement, arguments.length > 1 ? arguments[1] : undefined);
    },
    join: function join(separator) { // eslint-disable-line no-unused-vars
      return arrayJoin.apply(validate(this), arguments);
    },
    lastIndexOf: function lastIndexOf(searchElement /* , fromIndex */) { // eslint-disable-line no-unused-vars
      return arrayLastIndexOf.apply(validate(this), arguments);
    },
    map: function map(mapfn /* , thisArg */) {
      return $map(validate(this), mapfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    reduce: function reduce(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduce.apply(validate(this), arguments);
    },
    reduceRight: function reduceRight(callbackfn /* , initialValue */) { // eslint-disable-line no-unused-vars
      return arrayReduceRight.apply(validate(this), arguments);
    },
    reverse: function reverse() {
      var that = this;
      var length = validate(that).length;
      var middle = Math.floor(length / 2);
      var index = 0;
      var value;
      while (index < middle) {
        value = that[index];
        that[index++] = that[--length];
        that[length] = value;
      } return that;
    },
    some: function some(callbackfn /* , thisArg */) {
      return arraySome(validate(this), callbackfn, arguments.length > 1 ? arguments[1] : undefined);
    },
    sort: function sort(comparefn) {
      return arraySort.call(validate(this), comparefn);
    },
    subarray: function subarray(begin, end) {
      var O = validate(this);
      var length = O.length;
      var $begin = toAbsoluteIndex(begin, length);
      return new (speciesConstructor(O, O[DEF_CONSTRUCTOR]))(
        O.buffer,
        O.byteOffset + $begin * O.BYTES_PER_ELEMENT,
        toLength((end === undefined ? length : toAbsoluteIndex(end, length)) - $begin)
      );
    }
  };

  var $slice = function slice(start, end) {
    return speciesFromList(this, arraySlice.call(validate(this), start, end));
  };

  var $set = function set(arrayLike /* , offset */) {
    validate(this);
    var offset = toOffset(arguments[1], 1);
    var length = this.length;
    var src = toObject(arrayLike);
    var len = toLength(src.length);
    var index = 0;
    if (len + offset > length) throw RangeError(WRONG_LENGTH);
    while (index < len) this[offset + index] = src[index++];
  };

  var $iterators = {
    entries: function entries() {
      return arrayEntries.call(validate(this));
    },
    keys: function keys() {
      return arrayKeys.call(validate(this));
    },
    values: function values() {
      return arrayValues.call(validate(this));
    }
  };

  var isTAIndex = function (target, key) {
    return isObject(target)
      && target[TYPED_ARRAY]
      && typeof key != 'symbol'
      && key in target
      && String(+key) == String(key);
  };
  var $getDesc = function getOwnPropertyDescriptor(target, key) {
    return isTAIndex(target, key = toPrimitive(key, true))
      ? propertyDesc(2, target[key])
      : gOPD(target, key);
  };
  var $setDesc = function defineProperty(target, key, desc) {
    if (isTAIndex(target, key = toPrimitive(key, true))
      && isObject(desc)
      && has(desc, 'value')
      && !has(desc, 'get')
      && !has(desc, 'set')
      // TODO: add validation descriptor w/o calling accessors
      && !desc.configurable
      && (!has(desc, 'writable') || desc.writable)
      && (!has(desc, 'enumerable') || desc.enumerable)
    ) {
      target[key] = desc.value;
      return target;
    } return dP(target, key, desc);
  };

  if (!ALL_CONSTRUCTORS) {
    $GOPD.f = $getDesc;
    $DP.f = $setDesc;
  }

  $export($export.S + $export.F * !ALL_CONSTRUCTORS, 'Object', {
    getOwnPropertyDescriptor: $getDesc,
    defineProperty: $setDesc
  });

  if (fails(function () { arrayToString.call({}); })) {
    arrayToString = arrayToLocaleString = function toString() {
      return arrayJoin.call(this);
    };
  }

  var $TypedArrayPrototype$ = redefineAll({}, proto);
  redefineAll($TypedArrayPrototype$, $iterators);
  hide($TypedArrayPrototype$, ITERATOR, $iterators.values);
  redefineAll($TypedArrayPrototype$, {
    slice: $slice,
    set: $set,
    constructor: function () { /* noop */ },
    toString: arrayToString,
    toLocaleString: $toLocaleString
  });
  addGetter($TypedArrayPrototype$, 'buffer', 'b');
  addGetter($TypedArrayPrototype$, 'byteOffset', 'o');
  addGetter($TypedArrayPrototype$, 'byteLength', 'l');
  addGetter($TypedArrayPrototype$, 'length', 'e');
  dP($TypedArrayPrototype$, TAG, {
    get: function () { return this[TYPED_ARRAY]; }
  });

  // eslint-disable-next-line max-statements
  module.exports = function (KEY, BYTES, wrapper, CLAMPED) {
    CLAMPED = !!CLAMPED;
    var NAME = KEY + (CLAMPED ? 'Clamped' : '') + 'Array';
    var GETTER = 'get' + KEY;
    var SETTER = 'set' + KEY;
    var TypedArray = global[NAME];
    var Base = TypedArray || {};
    var TAC = TypedArray && getPrototypeOf(TypedArray);
    var FORCED = !TypedArray || !$typed.ABV;
    var O = {};
    var TypedArrayPrototype = TypedArray && TypedArray[PROTOTYPE];
    var getter = function (that, index) {
      var data = that._d;
      return data.v[GETTER](index * BYTES + data.o, LITTLE_ENDIAN);
    };
    var setter = function (that, index, value) {
      var data = that._d;
      if (CLAMPED) value = (value = Math.round(value)) < 0 ? 0 : value > 0xff ? 0xff : value & 0xff;
      data.v[SETTER](index * BYTES + data.o, value, LITTLE_ENDIAN);
    };
    var addElement = function (that, index) {
      dP(that, index, {
        get: function () {
          return getter(this, index);
        },
        set: function (value) {
          return setter(this, index, value);
        },
        enumerable: true
      });
    };
    if (FORCED) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME, '_d');
        var index = 0;
        var offset = 0;
        var buffer, byteLength, length, klass;
        if (!isObject(data)) {
          length = toIndex(data);
          byteLength = length * BYTES;
          buffer = new $ArrayBuffer(byteLength);
        } else if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          buffer = data;
          offset = toOffset($offset, BYTES);
          var $len = data.byteLength;
          if ($length === undefined) {
            if ($len % BYTES) throw RangeError(WRONG_LENGTH);
            byteLength = $len - offset;
            if (byteLength < 0) throw RangeError(WRONG_LENGTH);
          } else {
            byteLength = toLength($length) * BYTES;
            if (byteLength + offset > $len) throw RangeError(WRONG_LENGTH);
          }
          length = byteLength / BYTES;
        } else if (TYPED_ARRAY in data) {
          return fromList(TypedArray, data);
        } else {
          return $from.call(TypedArray, data);
        }
        hide(that, '_d', {
          b: buffer,
          o: offset,
          l: byteLength,
          e: length,
          v: new $DataView(buffer)
        });
        while (index < length) addElement(that, index++);
      });
      TypedArrayPrototype = TypedArray[PROTOTYPE] = create($TypedArrayPrototype$);
      hide(TypedArrayPrototype, 'constructor', TypedArray);
    } else if (!fails(function () {
      TypedArray(1);
    }) || !fails(function () {
      new TypedArray(-1); // eslint-disable-line no-new
    }) || !$iterDetect(function (iter) {
      new TypedArray(); // eslint-disable-line no-new
      new TypedArray(null); // eslint-disable-line no-new
      new TypedArray(1.5); // eslint-disable-line no-new
      new TypedArray(iter); // eslint-disable-line no-new
    }, true)) {
      TypedArray = wrapper(function (that, data, $offset, $length) {
        anInstance(that, TypedArray, NAME);
        var klass;
        // `ws` module bug, temporarily remove validation length for Uint8Array
        // https://github.com/websockets/ws/pull/645
        if (!isObject(data)) return new Base(toIndex(data));
        if (data instanceof $ArrayBuffer || (klass = classof(data)) == ARRAY_BUFFER || klass == SHARED_BUFFER) {
          return $length !== undefined
            ? new Base(data, toOffset($offset, BYTES), $length)
            : $offset !== undefined
              ? new Base(data, toOffset($offset, BYTES))
              : new Base(data);
        }
        if (TYPED_ARRAY in data) return fromList(TypedArray, data);
        return $from.call(TypedArray, data);
      });
      arrayForEach(TAC !== Function.prototype ? gOPN(Base).concat(gOPN(TAC)) : gOPN(Base), function (key) {
        if (!(key in TypedArray)) hide(TypedArray, key, Base[key]);
      });
      TypedArray[PROTOTYPE] = TypedArrayPrototype;
      if (!LIBRARY) TypedArrayPrototype.constructor = TypedArray;
    }
    var $nativeIterator = TypedArrayPrototype[ITERATOR];
    var CORRECT_ITER_NAME = !!$nativeIterator
      && ($nativeIterator.name == 'values' || $nativeIterator.name == undefined);
    var $iterator = $iterators.values;
    hide(TypedArray, TYPED_CONSTRUCTOR, true);
    hide(TypedArrayPrototype, TYPED_ARRAY, NAME);
    hide(TypedArrayPrototype, VIEW, true);
    hide(TypedArrayPrototype, DEF_CONSTRUCTOR, TypedArray);

    if (CLAMPED ? new TypedArray(1)[TAG] != NAME : !(TAG in TypedArrayPrototype)) {
      dP(TypedArrayPrototype, TAG, {
        get: function () { return NAME; }
      });
    }

    O[NAME] = TypedArray;

    $export($export.G + $export.W + $export.F * (TypedArray != Base), O);

    $export($export.S, NAME, {
      BYTES_PER_ELEMENT: BYTES
    });

    $export($export.S + $export.F * fails(function () { Base.of.call(TypedArray, 1); }), NAME, {
      from: $from,
      of: $of
    });

    if (!(BYTES_PER_ELEMENT in TypedArrayPrototype)) hide(TypedArrayPrototype, BYTES_PER_ELEMENT, BYTES);

    $export($export.P, NAME, proto);

    setSpecies(NAME);

    $export($export.P + $export.F * FORCED_SET, NAME, { set: $set });

    $export($export.P + $export.F * !CORRECT_ITER_NAME, NAME, $iterators);

    if (!LIBRARY && TypedArrayPrototype.toString != arrayToString) TypedArrayPrototype.toString = arrayToString;

    $export($export.P + $export.F * fails(function () {
      new TypedArray(1).slice();
    }), NAME, { slice: $slice });

    $export($export.P + $export.F * (fails(function () {
      return [1, 2].toLocaleString() != new TypedArray([1, 2]).toLocaleString();
    }) || !fails(function () {
      TypedArrayPrototype.toLocaleString.call([1, 2]);
    })), NAME, { toLocaleString: $toLocaleString });

    Iterators[NAME] = CORRECT_ITER_NAME ? $nativeIterator : $iterator;
    if (!LIBRARY && !CORRECT_ITER_NAME) hide(TypedArrayPrototype, ITERATOR, $iterator);
  };
} else module.exports = function () { /* empty */ };


/***/ }),
/* 237 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(236)('Uint8', 1, function (init) {
  return function Uint8Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 238 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(236)('Uint8', 1, function (init) {
  return function Uint8ClampedArray(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
}, true);


/***/ }),
/* 239 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(236)('Int16', 2, function (init) {
  return function Int16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 240 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(236)('Uint16', 2, function (init) {
  return function Uint16Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 241 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(236)('Int32', 4, function (init) {
  return function Int32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 242 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(236)('Uint32', 4, function (init) {
  return function Uint32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 243 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(236)('Float32', 4, function (init) {
  return function Float32Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 244 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(236)('Float64', 8, function (init) {
  return function Float64Array(data, byteOffset, length) {
    return init(this, data, byteOffset, length);
  };
});


/***/ }),
/* 245 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.1 Reflect.apply(target, thisArgument, argumentsList)
var $export = __webpack_require__(9);
var aFunction = __webpack_require__(25);
var anObject = __webpack_require__(13);
var rApply = (__webpack_require__(5).Reflect || {}).apply;
var fApply = Function.apply;
// MS Edge argumentsList argument is optional
$export($export.S + $export.F * !__webpack_require__(8)(function () {
  rApply(function () { /* empty */ });
}), 'Reflect', {
  apply: function apply(target, thisArgument, argumentsList) {
    var T = aFunction(target);
    var L = anObject(argumentsList);
    return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
  }
});


/***/ }),
/* 246 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(9);
var create = __webpack_require__(48);
var aFunction = __webpack_require__(25);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(14);
var fails = __webpack_require__(8);
var bind = __webpack_require__(78);
var rConstruct = (__webpack_require__(5).Reflect || {}).construct;

// MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it
var NEW_TARGET_BUG = fails(function () {
  function F() { /* empty */ }
  return !(rConstruct(function () { /* empty */ }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () { /* empty */ });
});

$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args /* , newTarget */) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0: return new Target();
        case 1: return new Target(args[0]);
        case 2: return new Target(args[0], args[1]);
        case 3: return new Target(args[0], args[1], args[2]);
        case 4: return new Target(args[0], args[1], args[2], args[3]);
      }
      // w/o altered newTarget, lot of arguments case
      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    }
    // with altered newTarget, not support built-in constructors
    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});


/***/ }),
/* 247 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)
var dP = __webpack_require__(12);
var $export = __webpack_require__(9);
var anObject = __webpack_require__(13);
var toPrimitive = __webpack_require__(17);

// MS Edge has broken Reflect.defineProperty - throwing instead of returning false
$export($export.S + $export.F * __webpack_require__(8)(function () {
  // eslint-disable-next-line no-undef
  Reflect.defineProperty(dP.f({}, 1, { value: 1 }), 1, { value: 2 });
}), 'Reflect', {
  defineProperty: function defineProperty(target, propertyKey, attributes) {
    anObject(target);
    propertyKey = toPrimitive(propertyKey, true);
    anObject(attributes);
    try {
      dP.f(target, propertyKey, attributes);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 248 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.4 Reflect.deleteProperty(target, propertyKey)
var $export = __webpack_require__(9);
var gOPD = __webpack_require__(53).f;
var anObject = __webpack_require__(13);

$export($export.S, 'Reflect', {
  deleteProperty: function deleteProperty(target, propertyKey) {
    var desc = gOPD(anObject(target), propertyKey);
    return desc && !desc.configurable ? false : delete target[propertyKey];
  }
});


/***/ }),
/* 249 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// 26.1.5 Reflect.enumerate(target)
var $export = __webpack_require__(9);
var anObject = __webpack_require__(13);
var Enumerate = function (iterated) {
  this._t = anObject(iterated); // target
  this._i = 0;                  // next index
  var keys = this._k = [];      // keys
  var key;
  for (key in iterated) keys.push(key);
};
__webpack_require__(132)(Enumerate, 'Object', function () {
  var that = this;
  var keys = that._k;
  var key;
  do {
    if (that._i >= keys.length) return { value: undefined, done: true };
  } while (!((key = keys[that._i++]) in that._t));
  return { value: key, done: false };
});

$export($export.S, 'Reflect', {
  enumerate: function enumerate(target) {
    return new Enumerate(target);
  }
});


/***/ }),
/* 250 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.6 Reflect.get(target, propertyKey [, receiver])
var gOPD = __webpack_require__(53);
var getPrototypeOf = __webpack_require__(60);
var has = __webpack_require__(6);
var $export = __webpack_require__(9);
var isObject = __webpack_require__(14);
var anObject = __webpack_require__(13);

function get(target, propertyKey /* , receiver */) {
  var receiver = arguments.length < 3 ? target : arguments[2];
  var desc, proto;
  if (anObject(target) === receiver) return target[propertyKey];
  if (desc = gOPD.f(target, propertyKey)) return has(desc, 'value')
    ? desc.value
    : desc.get !== undefined
      ? desc.get.call(receiver)
      : undefined;
  if (isObject(proto = getPrototypeOf(target))) return get(proto, propertyKey, receiver);
}

$export($export.S, 'Reflect', { get: get });


/***/ }),
/* 251 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)
var gOPD = __webpack_require__(53);
var $export = __webpack_require__(9);
var anObject = __webpack_require__(13);

$export($export.S, 'Reflect', {
  getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
    return gOPD.f(anObject(target), propertyKey);
  }
});


/***/ }),
/* 252 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.8 Reflect.getPrototypeOf(target)
var $export = __webpack_require__(9);
var getProto = __webpack_require__(60);
var anObject = __webpack_require__(13);

$export($export.S, 'Reflect', {
  getPrototypeOf: function getPrototypeOf(target) {
    return getProto(anObject(target));
  }
});


/***/ }),
/* 253 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.9 Reflect.has(target, propertyKey)
var $export = __webpack_require__(9);

$export($export.S, 'Reflect', {
  has: function has(target, propertyKey) {
    return propertyKey in target;
  }
});


/***/ }),
/* 254 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.10 Reflect.isExtensible(target)
var $export = __webpack_require__(9);
var anObject = __webpack_require__(13);
var $isExtensible = Object.isExtensible;

$export($export.S, 'Reflect', {
  isExtensible: function isExtensible(target) {
    anObject(target);
    return $isExtensible ? $isExtensible(target) : true;
  }
});


/***/ }),
/* 255 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.11 Reflect.ownKeys(target)
var $export = __webpack_require__(9);

$export($export.S, 'Reflect', { ownKeys: __webpack_require__(256) });


/***/ }),
/* 256 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(52);
var gOPS = __webpack_require__(44);
var anObject = __webpack_require__(13);
var Reflect = __webpack_require__(5).Reflect;
module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};


/***/ }),
/* 257 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.12 Reflect.preventExtensions(target)
var $export = __webpack_require__(9);
var anObject = __webpack_require__(13);
var $preventExtensions = Object.preventExtensions;

$export($export.S, 'Reflect', {
  preventExtensions: function preventExtensions(target) {
    anObject(target);
    try {
      if ($preventExtensions) $preventExtensions(target);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 258 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.13 Reflect.set(target, propertyKey, V [, receiver])
var dP = __webpack_require__(12);
var gOPD = __webpack_require__(53);
var getPrototypeOf = __webpack_require__(60);
var has = __webpack_require__(6);
var $export = __webpack_require__(9);
var createDesc = __webpack_require__(18);
var anObject = __webpack_require__(13);
var isObject = __webpack_require__(14);

function set(target, propertyKey, V /* , receiver */) {
  var receiver = arguments.length < 4 ? target : arguments[3];
  var ownDesc = gOPD.f(anObject(target), propertyKey);
  var existingDescriptor, proto;
  if (!ownDesc) {
    if (isObject(proto = getPrototypeOf(target))) {
      return set(proto, propertyKey, V, receiver);
    }
    ownDesc = createDesc(0);
  }
  if (has(ownDesc, 'value')) {
    if (ownDesc.writable === false || !isObject(receiver)) return false;
    if (existingDescriptor = gOPD.f(receiver, propertyKey)) {
      if (existingDescriptor.get || existingDescriptor.set || existingDescriptor.writable === false) return false;
      existingDescriptor.value = V;
      dP.f(receiver, propertyKey, existingDescriptor);
    } else dP.f(receiver, propertyKey, createDesc(0, V));
    return true;
  }
  return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
}

$export($export.S, 'Reflect', { set: set });


/***/ }),
/* 259 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// 26.1.14 Reflect.setPrototypeOf(target, proto)
var $export = __webpack_require__(9);
var setProto = __webpack_require__(74);

if (setProto) $export($export.S, 'Reflect', {
  setPrototypeOf: function setPrototypeOf(target, proto) {
    setProto.check(target, proto);
    try {
      setProto.set(target, proto);
      return true;
    } catch (e) {
      return false;
    }
  }
});


/***/ }),
/* 260 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(261);
module.exports = __webpack_require__(10).Array.includes;


/***/ }),
/* 261 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/Array.prototype.includes
var $export = __webpack_require__(9);
var $includes = __webpack_require__(38)(true);

$export($export.P, 'Array', {
  includes: function includes(el /* , fromIndex = 0 */) {
    return $includes(this, el, arguments.length > 1 ? arguments[1] : undefined);
  }
});

__webpack_require__(189)('includes');


/***/ }),
/* 262 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(263);
module.exports = __webpack_require__(10).Array.flatMap;


/***/ }),
/* 263 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-Array.prototype.flatMap
var $export = __webpack_require__(9);
var flattenIntoArray = __webpack_require__(264);
var toObject = __webpack_require__(47);
var toLength = __webpack_require__(39);
var aFunction = __webpack_require__(25);
var arraySpeciesCreate = __webpack_require__(176);

$export($export.P, 'Array', {
  flatMap: function flatMap(callbackfn /* , thisArg */) {
    var O = toObject(this);
    var sourceLen, A;
    aFunction(callbackfn);
    sourceLen = toLength(O.length);
    A = arraySpeciesCreate(O, 0);
    flattenIntoArray(A, O, O, sourceLen, 0, 1, callbackfn, arguments[1]);
    return A;
  }
});

__webpack_require__(189)('flatMap');


/***/ }),
/* 264 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://tc39.github.io/proposal-flatMap/#sec-FlattenIntoArray
var isArray = __webpack_require__(46);
var isObject = __webpack_require__(14);
var toLength = __webpack_require__(39);
var ctx = __webpack_require__(24);
var IS_CONCAT_SPREADABLE = __webpack_require__(28)('isConcatSpreadable');

function flattenIntoArray(target, original, source, sourceLen, start, depth, mapper, thisArg) {
  var targetIndex = start;
  var sourceIndex = 0;
  var mapFn = mapper ? ctx(mapper, thisArg, 3) : false;
  var element, spreadable;

  while (sourceIndex < sourceLen) {
    if (sourceIndex in source) {
      element = mapFn ? mapFn(source[sourceIndex], sourceIndex, original) : source[sourceIndex];

      spreadable = false;
      if (isObject(element)) {
        spreadable = element[IS_CONCAT_SPREADABLE];
        spreadable = spreadable !== undefined ? !!spreadable : isArray(element);
      }

      if (spreadable && depth > 0) {
        targetIndex = flattenIntoArray(target, original, element, toLength(element.length), targetIndex, depth - 1) - 1;
      } else {
        if (targetIndex >= 0x1fffffffffffff) throw TypeError();
        target[targetIndex] = element;
      }

      targetIndex++;
    }
    sourceIndex++;
  }
  return targetIndex;
}

module.exports = flattenIntoArray;


/***/ }),
/* 265 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(266);
module.exports = __webpack_require__(10).String.padStart;


/***/ }),
/* 266 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(9);
var $pad = __webpack_require__(267);
var userAgent = __webpack_require__(219);

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padStart: function padStart(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, true);
  }
});


/***/ }),
/* 267 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-string-pad-start-end
var toLength = __webpack_require__(39);
var repeat = __webpack_require__(92);
var defined = __webpack_require__(37);

module.exports = function (that, maxLength, fillString, left) {
  var S = String(defined(that));
  var stringLength = S.length;
  var fillStr = fillString === undefined ? ' ' : String(fillString);
  var intMaxLength = toLength(maxLength);
  if (intMaxLength <= stringLength || fillStr == '') return S;
  var fillLen = intMaxLength - stringLength;
  var stringFiller = repeat.call(fillStr, Math.ceil(fillLen / fillStr.length));
  if (stringFiller.length > fillLen) stringFiller = stringFiller.slice(0, fillLen);
  return left ? stringFiller + S : S + stringFiller;
};


/***/ }),
/* 268 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(269);
module.exports = __webpack_require__(10).String.padEnd;


/***/ }),
/* 269 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/tc39/proposal-string-pad-start-end
var $export = __webpack_require__(9);
var $pad = __webpack_require__(267);
var userAgent = __webpack_require__(219);

// https://github.com/zloirock/core-js/issues/280
var WEBKIT_BUG = /Version\/10\.\d+(\.\d+)?( Mobile\/\w+)? Safari\//.test(userAgent);

$export($export.P + $export.F * WEBKIT_BUG, 'String', {
  padEnd: function padEnd(maxLength /* , fillString = ' ' */) {
    return $pad(this, maxLength, arguments.length > 1 ? arguments[1] : undefined, false);
  }
});


/***/ }),
/* 270 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(271);
module.exports = __webpack_require__(10).String.trimLeft;


/***/ }),
/* 271 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(84)('trimLeft', function ($trim) {
  return function trimLeft() {
    return $trim(this, 1);
  };
}, 'trimStart');


/***/ }),
/* 272 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(273);
module.exports = __webpack_require__(10).String.trimRight;


/***/ }),
/* 273 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

// https://github.com/sebmarkbage/ecmascript-string-left-right-trim
__webpack_require__(84)('trimRight', function ($trim) {
  return function trimRight() {
    return $trim(this, 2);
  };
}, 'trimEnd');


/***/ }),
/* 274 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(275);
module.exports = __webpack_require__(29).f('asyncIterator');


/***/ }),
/* 275 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(30)('asyncIterator');


/***/ }),
/* 276 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(277);
module.exports = __webpack_require__(10).Object.getOwnPropertyDescriptors;


/***/ }),
/* 277 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(9);
var ownKeys = __webpack_require__(256);
var toIObject = __webpack_require__(34);
var gOPD = __webpack_require__(53);
var createProperty = __webpack_require__(166);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;
    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }
    return result;
  }
});


/***/ }),
/* 278 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(279);
module.exports = __webpack_require__(10).Object.values;


/***/ }),
/* 279 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(9);
var $values = __webpack_require__(280)(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ }),
/* 280 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DESCRIPTORS = __webpack_require__(7);
var getKeys = __webpack_require__(32);
var toIObject = __webpack_require__(34);
var isEnum = __webpack_require__(45).f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),
/* 281 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(282);
module.exports = __webpack_require__(10).Object.entries;


/***/ }),
/* 282 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(9);
var $entries = __webpack_require__(280)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});


/***/ }),
/* 283 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

__webpack_require__(212);
__webpack_require__(284);
module.exports = __webpack_require__(10).Promise.finally;


/***/ }),
/* 284 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(9);
var core = __webpack_require__(10);
var global = __webpack_require__(5);
var speciesConstructor = __webpack_require__(211);
var promiseResolve = __webpack_require__(220);

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),
/* 285 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(286);
__webpack_require__(287);
__webpack_require__(288);
module.exports = __webpack_require__(10);


/***/ }),
/* 286 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// ie9- setTimeout & setInterval additional parameters fix
var global = __webpack_require__(5);
var $export = __webpack_require__(9);
var userAgent = __webpack_require__(219);
var slice = [].slice;
var MSIE = /MSIE .\./.test(userAgent); // <- dirty ie9- check
var wrap = function (set) {
  return function (fn, time /* , ...args */) {
    var boundArgs = arguments.length > 2;
    var args = boundArgs ? slice.call(arguments, 2) : false;
    return set(boundArgs ? function () {
      // eslint-disable-next-line no-new-func
      (typeof fn == 'function' ? fn : Function(fn)).apply(this, args);
    } : fn, time);
  };
};
$export($export.G + $export.B + $export.F * MSIE, {
  setTimeout: wrap(global.setTimeout),
  setInterval: wrap(global.setInterval)
});


/***/ }),
/* 287 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $export = __webpack_require__(9);
var $task = __webpack_require__(215);
$export($export.G + $export.B, {
  setImmediate: $task.set,
  clearImmediate: $task.clear
});


/***/ }),
/* 288 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

var $iterators = __webpack_require__(196);
var getKeys = __webpack_require__(32);
var redefine = __webpack_require__(19);
var global = __webpack_require__(5);
var hide = __webpack_require__(11);
var Iterators = __webpack_require__(131);
var wks = __webpack_require__(28);
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),
/* 289 */
/***/ ((module) => {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),
/* 290 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

__webpack_require__(291);
module.exports = __webpack_require__(294).global;


/***/ }),
/* 291 */
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

// https://github.com/tc39/proposal-global
var $export = __webpack_require__(292);

$export($export.G, { global: __webpack_require__(293) });


/***/ }),
/* 292 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var global = __webpack_require__(293);
var core = __webpack_require__(294);
var ctx = __webpack_require__(295);
var hide = __webpack_require__(297);
var has = __webpack_require__(307);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && has(exports, key)) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),
/* 293 */
/***/ ((module) => {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 294 */
/***/ ((module) => {

var core = module.exports = { version: '2.6.12' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 295 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// optional / simple context binding
var aFunction = __webpack_require__(296);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),
/* 296 */
/***/ ((module) => {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 297 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var dP = __webpack_require__(298);
var createDesc = __webpack_require__(306);
module.exports = __webpack_require__(302) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 298 */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

var anObject = __webpack_require__(299);
var IE8_DOM_DEFINE = __webpack_require__(301);
var toPrimitive = __webpack_require__(305);
var dP = Object.defineProperty;

exports.f = __webpack_require__(302) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),
/* 299 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(300);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 300 */
/***/ ((module) => {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 301 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = !__webpack_require__(302) && !__webpack_require__(303)(function () {
  return Object.defineProperty(__webpack_require__(304)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 302 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(303)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 303 */
/***/ ((module) => {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 304 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(300);
var document = __webpack_require__(293).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 305 */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(300);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),
/* 306 */
/***/ ((module) => {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),
/* 307 */
/***/ ((module) => {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 308 */,
/* 309 */
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

    this.username = document.querySelector("#" + fields.username);
    this.password = document.querySelector("#" + fields.password);
    this.form = document.querySelector("#" + fields.form);
    this.msgError = document.querySelector("#" + fields.form + " #msgError");
  }

  _createClass(LoginForm, [{
    key: "sendForm",
    value: function () {
      var _sendForm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var baseUrl, formData, loginResponse, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                baseUrl = this.form.dataset.url;
                formData = new FormData(this.form);
                _context.prev = 2;
                _context.next = 5;
                return fetch(baseUrl + "/login/loginUser", {
                  method: 'post',
                  body: formData
                });

              case 5:
                loginResponse = _context.sent;
                _context.next = 8;
                return loginResponse.json();

              case 8:
                response = _context.sent;
                console.log(response);

                if (!(response.status === false)) {
                  _context.next = 14;
                  break;
                }

                this.msgError.classList.add('d-block');
                this.msgError.innerHTML = response.msg;
                return _context.abrupt("return");

              case 14:
                console.log('baseUrl: ', baseUrl);
                window.location.href = baseUrl + "/calendar";
                _context.next = 21;
                break;

              case 18:
                _context.prev = 18;
                _context.t0 = _context["catch"](2);
                console.log(_context.t0);

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[2, 18]]);
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
/* 310 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Register": () => (/* binding */ Register)
/* harmony export */ });
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Register = /*#__PURE__*/function () {
  function Register(fields) {
    var _this = this;

    _classCallCheck(this, Register);

    _defineProperty(this, "init", function () {
      _this.listeners();

      _this.listCourses();
    });

    this.form = document.querySelector("#" + fields.form);
    this.registerBtn = document.querySelector("#" + fields.form + " #registerBtn");
    this.fields = document.querySelectorAll('.form-control');
    this.coursesSelector = document.querySelector("#" + fields.coursesSelector);
    this.baseURL = fields.baseUrl;
  }

  _createClass(Register, [{
    key: "listCourses",
    value: function () {
      var _listCourses = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var _this2 = this;

        var url, listCoursesResponse, response;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                url = this.baseURL + "/Register/registerListCourses";
                _context.prev = 1;
                _context.next = 4;
                return fetch(url, {
                  method: 'GET',
                  headers: {
                    'content-type': 'application/json'
                  }
                });

              case 4:
                listCoursesResponse = _context.sent;
                _context.next = 7;
                return listCoursesResponse.json();

              case 7:
                response = _context.sent;
                response.forEach(function (item) {
                  var option = document.createElement('option');
                  option.value = item.id_course;
                  var optionValue = document.createTextNode(item.name);
                  option.appendChild(optionValue);

                  _this2.coursesSelector.appendChild(option);
                });
                _context.next = 14;
                break;

              case 11:
                _context.prev = 11;
                _context.t0 = _context["catch"](1);
                console.log(_context.t0);

              case 14:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[1, 11]]);
      }));

      function listCourses() {
        return _listCourses.apply(this, arguments);
      }

      return listCourses;
    }()
  }, {
    key: "sendForm",
    value: function () {
      var _sendForm = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
        var url, formData, registerResponse, response;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                url = this.form.dataset.url;
                console.log(url);
                formData = new FormData(this.form);
                console.log(formData);
                _context2.prev = 4;
                _context2.next = 7;
                return fetch(url, {
                  method: 'post',
                  body: formData
                });

              case 7:
                registerResponse = _context2.sent;
                _context2.next = 10;
                return registerResponse.json();

              case 10:
                response = _context2.sent;
                console.log(response);

                if (response.status === false) {
                  this.msgError.classList.add('d-block');
                  this.msgError.innerHTML = response.msg;
                }

                _context2.next = 18;
                break;

              case 15:
                _context2.prev = 15;
                _context2.t0 = _context2["catch"](4);
                console.log(_context2.t0);

              case 18:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this, [[4, 15]]);
      }));

      function sendForm() {
        return _sendForm.apply(this, arguments);
      }

      return sendForm;
    }()
  }, {
    key: "checkForm",
    value: function checkForm() {
      // Borramos los anteriores mensajes de error
      var errorMgDivs = this.form.querySelectorAll('.invalid-feedback');
      errorMgDivs.forEach(function (errorMsg) {
        return errorMsg.remove();
      }); // Validamos formulario y añadimos mensajes de error

      this.form.classList.add('was-validated');
      this.fields.forEach(function (field) {
        var msgError = document.createElement('div');
        msgError.className = "invalid-feedback";
        msgError.innerHTML = field.validationMessage;
        field.parentNode.appendChild(msgError);
      });
    }
  }, {
    key: "listeners",
    value: function listeners() {
      var _this3 = this;

      this.form.addEventListener('submit', function (e) {
        e.preventDefault();
        e.stopPropagation();

        _this3.checkForm();
      });
    }
  }]);

  return Register;
}();

/***/ }),
/* 311 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Schedule": () => (/* binding */ Schedule)
/* harmony export */ });
/* harmony import */ var _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(312);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(321);
/* harmony import */ var _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(323);
/* harmony import */ var _fullcalendar_core_locales_es__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(325);
/* harmony import */ var _fullcalendar_list__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(326);
function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var Schedule = /*#__PURE__*/function () {
  function Schedule(fields) {
    var _this = this;

    _classCallCheck(this, Schedule);

    _defineProperty(this, "init", function () {
      _this.listeners();
    });

    _defineProperty(this, "render", function () {
      _this.calendar.render();
    });

    this.calendarWrapper = document.querySelector("#" + fields.calendarEl);
    this.calendar = null;
    this.config = fields.config;
  }

  _createClass(Schedule, [{
    key: "listeners",
    value: function listeners() {
      this.calendar = new _fullcalendar_core__WEBPACK_IMPORTED_MODULE_0__.Calendar(this.calendarWrapper, _extends({
        locale: _fullcalendar_core_locales_es__WEBPACK_IMPORTED_MODULE_3__.default,
        themeSystem: 'bootstrap',
        plugins: [_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_1__.default, _fullcalendar_timegrid__WEBPACK_IMPORTED_MODULE_2__.default, _fullcalendar_list__WEBPACK_IMPORTED_MODULE_4__.default],
        initialView: 'dayGridMonth',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        }
      }, this.config));
    }
  }]);

  return Schedule;
}();

/***/ }),
/* 312 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BASE_OPTION_DEFAULTS": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BASE_OPTION_DEFAULTS),
/* harmony export */   "BASE_OPTION_REFINERS": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BASE_OPTION_REFINERS),
/* harmony export */   "BaseComponent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent),
/* harmony export */   "BgEvent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BgEvent),
/* harmony export */   "CalendarApi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarApi),
/* harmony export */   "CalendarContent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarContent),
/* harmony export */   "CalendarDataManager": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarDataManager),
/* harmony export */   "CalendarDataProvider": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarDataProvider),
/* harmony export */   "CalendarRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarRoot),
/* harmony export */   "Component": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "ContentHook": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ContentHook),
/* harmony export */   "CustomContentRenderContext": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CustomContentRenderContext),
/* harmony export */   "DateComponent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent),
/* harmony export */   "DateEnv": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateEnv),
/* harmony export */   "DateProfileGenerator": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateProfileGenerator),
/* harmony export */   "DayCellContent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellContent),
/* harmony export */   "DayCellRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellRoot),
/* harmony export */   "DayHeader": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayHeader),
/* harmony export */   "DaySeriesModel": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DaySeriesModel),
/* harmony export */   "DayTableModel": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayTableModel),
/* harmony export */   "DelayedRunner": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DelayedRunner),
/* harmony export */   "ElementDragging": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ElementDragging),
/* harmony export */   "ElementScrollController": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ElementScrollController),
/* harmony export */   "Emitter": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Emitter),
/* harmony export */   "EventApi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.EventApi),
/* harmony export */   "EventRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.EventRoot),
/* harmony export */   "EventSourceApi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.EventSourceApi),
/* harmony export */   "Fragment": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment),
/* harmony export */   "Interaction": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Interaction),
/* harmony export */   "MoreLinkRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.MoreLinkRoot),
/* harmony export */   "MountHook": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.MountHook),
/* harmony export */   "NamedTimeZoneImpl": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NamedTimeZoneImpl),
/* harmony export */   "NowIndicatorRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowIndicatorRoot),
/* harmony export */   "NowTimer": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowTimer),
/* harmony export */   "PositionCache": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache),
/* harmony export */   "RefMap": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap),
/* harmony export */   "RenderHook": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook),
/* harmony export */   "ScrollController": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ScrollController),
/* harmony export */   "ScrollResponder": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ScrollResponder),
/* harmony export */   "Scroller": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Scroller),
/* harmony export */   "SegHierarchy": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SegHierarchy),
/* harmony export */   "SimpleScrollGrid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SimpleScrollGrid),
/* harmony export */   "Slicer": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Slicer),
/* harmony export */   "Splitter": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Splitter),
/* harmony export */   "StandardEvent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.StandardEvent),
/* harmony export */   "TableDateCell": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.TableDateCell),
/* harmony export */   "TableDowCell": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.TableDowCell),
/* harmony export */   "Theme": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Theme),
/* harmony export */   "ViewApi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewApi),
/* harmony export */   "ViewContextType": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewContextType),
/* harmony export */   "ViewRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot),
/* harmony export */   "WeekNumberRoot": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.WeekNumberRoot),
/* harmony export */   "WindowScrollController": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.WindowScrollController),
/* harmony export */   "addDays": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDays),
/* harmony export */   "addDurations": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDurations),
/* harmony export */   "addMs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addMs),
/* harmony export */   "addWeeks": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addWeeks),
/* harmony export */   "allowContextMenu": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.allowContextMenu),
/* harmony export */   "allowSelection": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.allowSelection),
/* harmony export */   "applyMutationToEventStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.applyMutationToEventStore),
/* harmony export */   "applyStyle": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.applyStyle),
/* harmony export */   "applyStyleProp": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.applyStyleProp),
/* harmony export */   "asCleanDays": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asCleanDays),
/* harmony export */   "asRoughMinutes": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMinutes),
/* harmony export */   "asRoughMs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs),
/* harmony export */   "asRoughSeconds": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughSeconds),
/* harmony export */   "binarySearch": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.binarySearch),
/* harmony export */   "buildClassNameNormalizer": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildClassNameNormalizer),
/* harmony export */   "buildEntryKey": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey),
/* harmony export */   "buildEventApis": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEventApis),
/* harmony export */   "buildEventRangeKey": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEventRangeKey),
/* harmony export */   "buildHashFromArray": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildHashFromArray),
/* harmony export */   "buildIsoString": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildIsoString),
/* harmony export */   "buildNavLinkData": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkData),
/* harmony export */   "buildSegCompareObj": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegCompareObj),
/* harmony export */   "buildSegTimeText": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegTimeText),
/* harmony export */   "collectFromHash": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.collectFromHash),
/* harmony export */   "combineEventUis": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.combineEventUis),
/* harmony export */   "compareByFieldSpec": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.compareByFieldSpec),
/* harmony export */   "compareByFieldSpecs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.compareByFieldSpecs),
/* harmony export */   "compareNumbers": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.compareNumbers),
/* harmony export */   "compareObjs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.compareObjs),
/* harmony export */   "computeEarliestSegStart": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeEarliestSegStart),
/* harmony export */   "computeEdges": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeEdges),
/* harmony export */   "computeFallbackHeaderFormat": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeFallbackHeaderFormat),
/* harmony export */   "computeHeightAndMargins": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeHeightAndMargins),
/* harmony export */   "computeInnerRect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeInnerRect),
/* harmony export */   "computeRect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeRect),
/* harmony export */   "computeSegDraggable": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeSegDraggable),
/* harmony export */   "computeSegEndResizable": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeSegEndResizable),
/* harmony export */   "computeSegStartResizable": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeSegStartResizable),
/* harmony export */   "computeShrinkWidth": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeShrinkWidth),
/* harmony export */   "computeSmallestCellWidth": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeSmallestCellWidth),
/* harmony export */   "computeVisibleDayRange": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeVisibleDayRange),
/* harmony export */   "config": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.config),
/* harmony export */   "constrainPoint": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.constrainPoint),
/* harmony export */   "createContext": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createContext),
/* harmony export */   "createDuration": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createDuration),
/* harmony export */   "createElement": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement),
/* harmony export */   "createEmptyEventStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createEmptyEventStore),
/* harmony export */   "createEventInstance": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createEventInstance),
/* harmony export */   "createEventUi": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createEventUi),
/* harmony export */   "createFormatter": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter),
/* harmony export */   "createPlugin": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createPlugin),
/* harmony export */   "createPortal": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createPortal),
/* harmony export */   "createRef": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef),
/* harmony export */   "diffDates": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffDates),
/* harmony export */   "diffDayAndTime": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffDayAndTime),
/* harmony export */   "diffDays": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffDays),
/* harmony export */   "diffPoints": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffPoints),
/* harmony export */   "diffWeeks": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffWeeks),
/* harmony export */   "diffWholeDays": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffWholeDays),
/* harmony export */   "diffWholeWeeks": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffWholeWeeks),
/* harmony export */   "disableCursor": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.disableCursor),
/* harmony export */   "elementClosest": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.elementClosest),
/* harmony export */   "elementMatches": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.elementMatches),
/* harmony export */   "enableCursor": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.enableCursor),
/* harmony export */   "eventTupleToStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.eventTupleToStore),
/* harmony export */   "filterEventStoreDefs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.filterEventStoreDefs),
/* harmony export */   "filterHash": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.filterHash),
/* harmony export */   "findDirectChildren": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.findDirectChildren),
/* harmony export */   "findElements": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.findElements),
/* harmony export */   "flexibleCompare": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.flexibleCompare),
/* harmony export */   "flushToDom": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.flushToDom),
/* harmony export */   "formatDate": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatDate),
/* harmony export */   "formatDayString": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatDayString),
/* harmony export */   "formatIsoTimeString": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatIsoTimeString),
/* harmony export */   "formatRange": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatRange),
/* harmony export */   "getAllowYScrolling": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getAllowYScrolling),
/* harmony export */   "getCanVGrowWithinCell": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getCanVGrowWithinCell),
/* harmony export */   "getClippingParents": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getClippingParents),
/* harmony export */   "getDateMeta": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getDateMeta),
/* harmony export */   "getDayClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getDayClassNames),
/* harmony export */   "getDefaultEventEnd": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getDefaultEventEnd),
/* harmony export */   "getElSeg": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getElSeg),
/* harmony export */   "getEntrySpanEnd": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getEntrySpanEnd),
/* harmony export */   "getEventClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getEventClassNames),
/* harmony export */   "getIsRtlScrollbarOnLeft": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getIsRtlScrollbarOnLeft),
/* harmony export */   "getRectCenter": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getRectCenter),
/* harmony export */   "getRelevantEvents": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getRelevantEvents),
/* harmony export */   "getScrollGridClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getScrollGridClassNames),
/* harmony export */   "getScrollbarWidths": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getScrollbarWidths),
/* harmony export */   "getSectionClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSectionClassNames),
/* harmony export */   "getSectionHasLiquidHeight": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSectionHasLiquidHeight),
/* harmony export */   "getSegMeta": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta),
/* harmony export */   "getSlotClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSlotClassNames),
/* harmony export */   "getStickyFooterScrollbar": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyFooterScrollbar),
/* harmony export */   "getStickyHeaderDates": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyHeaderDates),
/* harmony export */   "getUnequalProps": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getUnequalProps),
/* harmony export */   "globalLocales": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.globalLocales),
/* harmony export */   "globalPlugins": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.globalPlugins),
/* harmony export */   "greatestDurationDenominator": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.greatestDurationDenominator),
/* harmony export */   "groupIntersectingEntries": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.groupIntersectingEntries),
/* harmony export */   "guid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.guid),
/* harmony export */   "hasBgRendering": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.hasBgRendering),
/* harmony export */   "hasShrinkWidth": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.hasShrinkWidth),
/* harmony export */   "identity": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.identity),
/* harmony export */   "interactionSettingsStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.interactionSettingsStore),
/* harmony export */   "interactionSettingsToStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.interactionSettingsToStore),
/* harmony export */   "intersectRanges": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectRanges),
/* harmony export */   "intersectRects": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectRects),
/* harmony export */   "isArraysEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isArraysEqual),
/* harmony export */   "isColPropsEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isColPropsEqual),
/* harmony export */   "isDateSelectionValid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isDateSelectionValid),
/* harmony export */   "isDateSpansEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isDateSpansEqual),
/* harmony export */   "isInt": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isInt),
/* harmony export */   "isInteractionValid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isInteractionValid),
/* harmony export */   "isMultiDayRange": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isMultiDayRange),
/* harmony export */   "isPropsEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isPropsEqual),
/* harmony export */   "isPropsValid": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isPropsValid),
/* harmony export */   "isValidDate": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isValidDate),
/* harmony export */   "listenBySelector": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.listenBySelector),
/* harmony export */   "mapHash": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.mapHash),
/* harmony export */   "memoize": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize),
/* harmony export */   "memoizeArraylike": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoizeArraylike),
/* harmony export */   "memoizeHashlike": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoizeHashlike),
/* harmony export */   "memoizeObjArg": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoizeObjArg),
/* harmony export */   "mergeEventStores": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.mergeEventStores),
/* harmony export */   "multiplyDuration": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.multiplyDuration),
/* harmony export */   "padStart": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.padStart),
/* harmony export */   "parseBusinessHours": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseBusinessHours),
/* harmony export */   "parseClassNames": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseClassNames),
/* harmony export */   "parseDragMeta": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseDragMeta),
/* harmony export */   "parseEventDef": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseEventDef),
/* harmony export */   "parseFieldSpecs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseFieldSpecs),
/* harmony export */   "parseMarker": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.parseMarker),
/* harmony export */   "pointInsideRect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.pointInsideRect),
/* harmony export */   "preventContextMenu": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.preventContextMenu),
/* harmony export */   "preventDefault": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.preventDefault),
/* harmony export */   "preventSelection": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.preventSelection),
/* harmony export */   "rangeContainsMarker": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangeContainsMarker),
/* harmony export */   "rangeContainsRange": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangeContainsRange),
/* harmony export */   "rangesEqual": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangesEqual),
/* harmony export */   "rangesIntersect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangesIntersect),
/* harmony export */   "refineEventDef": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.refineEventDef),
/* harmony export */   "refineProps": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.refineProps),
/* harmony export */   "removeElement": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.removeElement),
/* harmony export */   "removeExact": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.removeExact),
/* harmony export */   "render": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   "renderChunkContent": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderChunkContent),
/* harmony export */   "renderFill": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderFill),
/* harmony export */   "renderMicroColGroup": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderMicroColGroup),
/* harmony export */   "renderScrollShim": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderScrollShim),
/* harmony export */   "requestJson": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.requestJson),
/* harmony export */   "sanitizeShrinkWidth": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sanitizeShrinkWidth),
/* harmony export */   "setElSeg": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setElSeg),
/* harmony export */   "setRef": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setRef),
/* harmony export */   "sliceEventStore": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sliceEventStore),
/* harmony export */   "sliceEvents": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sliceEvents),
/* harmony export */   "sortEventSegs": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sortEventSegs),
/* harmony export */   "startOfDay": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.startOfDay),
/* harmony export */   "translateRect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.translateRect),
/* harmony export */   "triggerDateSelect": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.triggerDateSelect),
/* harmony export */   "unmountComponentAtNode": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode),
/* harmony export */   "unpromisify": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.unpromisify),
/* harmony export */   "version": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.version),
/* harmony export */   "whenTransitionDone": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.whenTransitionDone),
/* harmony export */   "wholeDivideDurations": () => (/* reexport safe */ _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.wholeDivideDurations),
/* harmony export */   "Calendar": () => (/* binding */ Calendar)
/* harmony export */ });
/* harmony import */ var _vdom_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(313);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(317);
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(318);
/*!
FullCalendar v5.7.0
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/





var Calendar = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(Calendar, _super);
    function Calendar(el, optionOverrides) {
        if (optionOverrides === void 0) { optionOverrides = {}; }
        var _this = _super.call(this) || this;
        _this.isRendering = false;
        _this.isRendered = false;
        _this.currentClassNames = [];
        _this.customContentRenderId = 0; // will affect custom generated classNames?
        _this.handleAction = function (action) {
            // actions we know we want to render immediately
            switch (action.type) {
                case 'SET_EVENT_DRAG':
                case 'SET_EVENT_RESIZE':
                    _this.renderRunner.tryDrain();
            }
        };
        _this.handleData = function (data) {
            _this.currentData = data;
            _this.renderRunner.request(data.calendarOptions.rerenderDelay);
        };
        _this.handleRenderRequest = function () {
            if (_this.isRendering) {
                _this.isRendered = true;
                var currentData_1 = _this.currentData;
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.render)((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarRoot, { options: currentData_1.calendarOptions, theme: currentData_1.theme, emitter: currentData_1.emitter }, function (classNames, height, isHeightAuto, forPrint) {
                    _this.setClassNames(classNames);
                    _this.setHeight(height);
                    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CustomContentRenderContext.Provider, { value: _this.customContentRenderId },
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarContent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ isHeightAuto: isHeightAuto, forPrint: forPrint }, currentData_1))));
                }), _this.el);
            }
            else if (_this.isRendered) {
                _this.isRendered = false;
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode)(_this.el);
                _this.setClassNames([]);
                _this.setHeight('');
            }
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.flushToDom)();
        };
        _this.el = el;
        _this.renderRunner = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DelayedRunner(_this.handleRenderRequest);
        new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarDataManager({
            optionOverrides: optionOverrides,
            calendarApi: _this,
            onAction: _this.handleAction,
            onData: _this.handleData,
        });
        return _this;
    }
    Object.defineProperty(Calendar.prototype, "view", {
        get: function () { return this.currentData.viewApi; } // for public API
        ,
        enumerable: false,
        configurable: true
    });
    Calendar.prototype.render = function () {
        var wasRendering = this.isRendering;
        if (!wasRendering) {
            this.isRendering = true;
        }
        else {
            this.customContentRenderId += 1;
        }
        this.renderRunner.request();
        if (wasRendering) {
            this.updateSize();
        }
    };
    Calendar.prototype.destroy = function () {
        if (this.isRendering) {
            this.isRendering = false;
            this.renderRunner.request();
        }
    };
    Calendar.prototype.updateSize = function () {
        _super.prototype.updateSize.call(this);
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.flushToDom)();
    };
    Calendar.prototype.batchRendering = function (func) {
        this.renderRunner.pause('batchRendering');
        func();
        this.renderRunner.resume('batchRendering');
    };
    Calendar.prototype.pauseRendering = function () {
        this.renderRunner.pause('pauseRendering');
    };
    Calendar.prototype.resumeRendering = function () {
        this.renderRunner.resume('pauseRendering', true);
    };
    Calendar.prototype.resetOptions = function (optionOverrides, append) {
        this.currentDataManager.resetOptions(optionOverrides, append);
    };
    Calendar.prototype.setClassNames = function (classNames) {
        if (!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isArraysEqual)(classNames, this.currentClassNames)) {
            var classList = this.el.classList;
            for (var _i = 0, _a = this.currentClassNames; _i < _a.length; _i++) {
                var className = _a[_i];
                classList.remove(className);
            }
            for (var _b = 0, classNames_1 = classNames; _b < classNames_1.length; _b++) {
                var className = classNames_1[_b];
                classList.add(className);
            }
            this.currentClassNames = classNames;
        }
    };
    Calendar.prototype.setHeight = function (height) {
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.applyStyleProp)(this.el, 'height', height);
    };
    return Calendar;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.CalendarApi));


//# sourceMappingURL=main.js.map


/***/ }),
/* 313 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(317);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(314);
/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(315);




var globalObj = typeof globalThis !== 'undefined' ? globalThis : window; // // TODO: streamline when killing IE11 support
if (globalObj.FullCalendarVDom) {
    console.warn('FullCalendar VDOM already loaded');
}
else {
    globalObj.FullCalendarVDom = {
        Component: preact__WEBPACK_IMPORTED_MODULE_0__.Component,
        createElement: preact__WEBPACK_IMPORTED_MODULE_0__.createElement,
        render: preact__WEBPACK_IMPORTED_MODULE_0__.render,
        createRef: preact__WEBPACK_IMPORTED_MODULE_0__.createRef,
        Fragment: preact__WEBPACK_IMPORTED_MODULE_0__.Fragment,
        createContext: createContext,
        createPortal: preact_compat__WEBPACK_IMPORTED_MODULE_1__.createPortal,
        flushToDom: flushToDom,
        unmountComponentAtNode: unmountComponentAtNode,
    };
}
// HACKS...
// TODO: lock version
// TODO: link gh issues
function flushToDom() {
    var oldDebounceRendering = preact__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering; // orig
    var callbackQ = [];
    function execCallbackSync(callback) {
        callbackQ.push(callback);
    }
    preact__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering = execCallbackSync;
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)((0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)(FakeComponent, {}), document.createElement('div'));
    while (callbackQ.length) {
        callbackQ.shift()();
    }
    preact__WEBPACK_IMPORTED_MODULE_0__.options.debounceRendering = oldDebounceRendering;
}
var FakeComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(FakeComponent, _super);
    function FakeComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FakeComponent.prototype.render = function () { return (0,preact__WEBPACK_IMPORTED_MODULE_0__.createElement)('div', {}); };
    FakeComponent.prototype.componentDidMount = function () { this.setState({}); };
    return FakeComponent;
}(preact__WEBPACK_IMPORTED_MODULE_0__.Component));
function createContext(defaultValue) {
    var ContextType = (0,preact__WEBPACK_IMPORTED_MODULE_0__.createContext)(defaultValue);
    var origProvider = ContextType.Provider;
    ContextType.Provider = function () {
        var _this = this;
        var isNew = !this.getChildContext;
        var children = origProvider.apply(this, arguments); // eslint-disable-line prefer-rest-params
        if (isNew) {
            var subs_1 = [];
            this.shouldComponentUpdate = function (_props) {
                if (_this.props.value !== _props.value) {
                    subs_1.forEach(function (c) {
                        c.context = _props.value;
                        c.forceUpdate();
                    });
                }
            };
            this.sub = function (c) {
                subs_1.push(c);
                var old = c.componentWillUnmount;
                c.componentWillUnmount = function () {
                    subs_1.splice(subs_1.indexOf(c), 1);
                    old && old.call(c);
                };
            };
        }
        return children;
    };
    return ContextType;
}
function unmountComponentAtNode(node) {
    (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(null, node);
}


/***/ }),
/* 314 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ N),
/* harmony export */   "hydrate": () => (/* binding */ O),
/* harmony export */   "createElement": () => (/* binding */ a),
/* harmony export */   "h": () => (/* binding */ a),
/* harmony export */   "Fragment": () => (/* binding */ y),
/* harmony export */   "createRef": () => (/* binding */ h),
/* harmony export */   "isValidElement": () => (/* binding */ l),
/* harmony export */   "Component": () => (/* binding */ p),
/* harmony export */   "cloneElement": () => (/* binding */ S),
/* harmony export */   "createContext": () => (/* binding */ q),
/* harmony export */   "toChildArray": () => (/* binding */ w),
/* harmony export */   "options": () => (/* binding */ n)
/* harmony export */ });
var n,l,u,i,t,o,r={},f=[],e=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function c(n,l){for(var u in l)n[u]=l[u];return n}function s(n){var l=n.parentNode;l&&l.removeChild(n)}function a(n,l,u){var i,t,o,r=arguments,f={};for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);if(null!=u&&(f.children=u),"function"==typeof n&&null!=n.defaultProps)for(o in n.defaultProps)void 0===f[o]&&(f[o]=n.defaultProps[o]);return v(n,f,i,t,null)}function v(l,u,i,t,o){var r={type:l,props:u,key:i,ref:t,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:null==o?++n.__v:o};return null!=n.vnode&&n.vnode(r),r}function h(){return{current:null}}function y(n){return n.children}function p(n,l){this.props=n,this.context=l}function d(n,l){if(null==l)return n.__?d(n.__,n.__.__k.indexOf(n)+1):null;for(var u;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e)return u.__e;return"function"==typeof n.type?d(n):null}function _(n){var l,u;if(null!=(n=n.__)&&null!=n.__c){for(n.__e=n.__c.base=null,l=0;l<n.__k.length;l++)if(null!=(u=n.__k[l])&&null!=u.__e){n.__e=n.__c.base=u.__e;break}return _(n)}}function k(l){(!l.__d&&(l.__d=!0)&&u.push(l)&&!b.__r++||t!==n.debounceRendering)&&((t=n.debounceRendering)||i)(b)}function b(){for(var n;b.__r=u.length;)n=u.sort(function(n,l){return n.__v.__b-l.__v.__b}),u=[],n.some(function(n){var l,u,i,t,o,r;n.__d&&(o=(t=(l=n).__v).__e,(r=l.__P)&&(u=[],(i=c({},t)).__v=t.__v+1,I(r,t,i,l.__n,void 0!==r.ownerSVGElement,null!=t.__h?[o]:null,u,null==o?d(t):o,t.__h),T(u,t),t.__e!=o&&_(t)))})}function m(n,l,u,i,t,o,e,c,s,a){var h,p,_,k,b,m,w,A=i&&i.__k||f,P=A.length;for(u.__k=[],h=0;h<l.length;h++)if(null!=(k=u.__k[h]=null==(k=l[h])||"boolean"==typeof k?null:"string"==typeof k||"number"==typeof k||"bigint"==typeof k?v(null,k,null,null,k):Array.isArray(k)?v(y,{children:k},null,null,null):k.__b>0?v(k.type,k.props,k.key,null,k.__v):k)){if(k.__=u,k.__b=u.__b+1,null===(_=A[h])||_&&k.key==_.key&&k.type===_.type)A[h]=void 0;else for(p=0;p<P;p++){if((_=A[p])&&k.key==_.key&&k.type===_.type){A[p]=void 0;break}_=null}I(n,k,_=_||r,t,o,e,c,s,a),b=k.__e,(p=k.ref)&&_.ref!=p&&(w||(w=[]),_.ref&&w.push(_.ref,null,k),w.push(p,k.__c||b,k)),null!=b?(null==m&&(m=b),"function"==typeof k.type&&null!=k.__k&&k.__k===_.__k?k.__d=s=g(k,s,n):s=x(n,k,_,A,b,s),a||"option"!==u.type?"function"==typeof u.type&&(u.__d=s):n.value=""):s&&_.__e==s&&s.parentNode!=n&&(s=d(_))}for(u.__e=m,h=P;h--;)null!=A[h]&&("function"==typeof u.type&&null!=A[h].__e&&A[h].__e==u.__d&&(u.__d=d(i,h+1)),L(A[h],A[h]));if(w)for(h=0;h<w.length;h++)z(w[h],w[++h],w[++h])}function g(n,l,u){var i,t;for(i=0;i<n.__k.length;i++)(t=n.__k[i])&&(t.__=n,l="function"==typeof t.type?g(t,l,u):x(u,t,t,n.__k,t.__e,l));return l}function w(n,l){return l=l||[],null==n||"boolean"==typeof n||(Array.isArray(n)?n.some(function(n){w(n,l)}):l.push(n)),l}function x(n,l,u,i,t,o){var r,f,e;if(void 0!==l.__d)r=l.__d,l.__d=void 0;else if(null==u||t!=o||null==t.parentNode)n:if(null==o||o.parentNode!==n)n.appendChild(t),r=null;else{for(f=o,e=0;(f=f.nextSibling)&&e<i.length;e+=2)if(f==t)break n;n.insertBefore(t,o),r=o}return void 0!==r?r:t.nextSibling}function A(n,l,u,i,t){var o;for(o in u)"children"===o||"key"===o||o in l||C(n,o,null,u[o],i);for(o in l)t&&"function"!=typeof l[o]||"children"===o||"key"===o||"value"===o||"checked"===o||u[o]===l[o]||C(n,o,l[o],u[o],i)}function P(n,l,u){"-"===l[0]?n.setProperty(l,u):n[l]=null==u?"":"number"!=typeof u||e.test(l)?u:u+"px"}function C(n,l,u,i,t){var o;n:if("style"===l)if("string"==typeof u)n.style.cssText=u;else{if("string"==typeof i&&(n.style.cssText=i=""),i)for(l in i)u&&l in u||P(n.style,l,"");if(u)for(l in u)i&&u[l]===i[l]||P(n.style,l,u[l])}else if("o"===l[0]&&"n"===l[1])o=l!==(l=l.replace(/Capture$/,"")),l=l.toLowerCase()in n?l.toLowerCase().slice(2):l.slice(2),n.l||(n.l={}),n.l[l+o]=u,u?i||n.addEventListener(l,o?H:$,o):n.removeEventListener(l,o?H:$,o);else if("dangerouslySetInnerHTML"!==l){if(t)l=l.replace(/xlink[H:h]/,"h").replace(/sName$/,"s");else if("href"!==l&&"list"!==l&&"form"!==l&&"tabIndex"!==l&&"download"!==l&&l in n)try{n[l]=null==u?"":u;break n}catch(n){}"function"==typeof u||(null!=u&&(!1!==u||"a"===l[0]&&"r"===l[1])?n.setAttribute(l,u):n.removeAttribute(l))}}function $(l){this.l[l.type+!1](n.event?n.event(l):l)}function H(l){this.l[l.type+!0](n.event?n.event(l):l)}function I(l,u,i,t,o,r,f,e,s){var a,v,h,d,_,k,b,g,w,x,A,P=u.type;if(void 0!==u.constructor)return null;null!=i.__h&&(s=i.__h,e=u.__e=i.__e,u.__h=null,r=[e]),(a=n.__b)&&a(u);try{n:if("function"==typeof P){if(g=u.props,w=(a=P.contextType)&&t[a.__c],x=a?w?w.props.value:a.__:t,i.__c?b=(v=u.__c=i.__c).__=v.__E:("prototype"in P&&P.prototype.render?u.__c=v=new P(g,x):(u.__c=v=new p(g,x),v.constructor=P,v.render=M),w&&w.sub(v),v.props=g,v.state||(v.state={}),v.context=x,v.__n=t,h=v.__d=!0,v.__h=[]),null==v.__s&&(v.__s=v.state),null!=P.getDerivedStateFromProps&&(v.__s==v.state&&(v.__s=c({},v.__s)),c(v.__s,P.getDerivedStateFromProps(g,v.__s))),d=v.props,_=v.state,h)null==P.getDerivedStateFromProps&&null!=v.componentWillMount&&v.componentWillMount(),null!=v.componentDidMount&&v.__h.push(v.componentDidMount);else{if(null==P.getDerivedStateFromProps&&g!==d&&null!=v.componentWillReceiveProps&&v.componentWillReceiveProps(g,x),!v.__e&&null!=v.shouldComponentUpdate&&!1===v.shouldComponentUpdate(g,v.__s,x)||u.__v===i.__v){v.props=g,v.state=v.__s,u.__v!==i.__v&&(v.__d=!1),v.__v=u,u.__e=i.__e,u.__k=i.__k,u.__k.forEach(function(n){n&&(n.__=u)}),v.__h.length&&f.push(v);break n}null!=v.componentWillUpdate&&v.componentWillUpdate(g,v.__s,x),null!=v.componentDidUpdate&&v.__h.push(function(){v.componentDidUpdate(d,_,k)})}v.context=x,v.props=g,v.state=v.__s,(a=n.__r)&&a(u),v.__d=!1,v.__v=u,v.__P=l,a=v.render(v.props,v.state,v.context),v.state=v.__s,null!=v.getChildContext&&(t=c(c({},t),v.getChildContext())),h||null==v.getSnapshotBeforeUpdate||(k=v.getSnapshotBeforeUpdate(d,_)),A=null!=a&&a.type===y&&null==a.key?a.props.children:a,m(l,Array.isArray(A)?A:[A],u,i,t,o,r,f,e,s),v.base=u.__e,u.__h=null,v.__h.length&&f.push(v),b&&(v.__E=v.__=null),v.__e=!1}else null==r&&u.__v===i.__v?(u.__k=i.__k,u.__e=i.__e):u.__e=j(i.__e,u,i,t,o,r,f,s);(a=n.diffed)&&a(u)}catch(l){u.__v=null,(s||null!=r)&&(u.__e=e,u.__h=!!s,r[r.indexOf(e)]=null),n.__e(l,u,i)}}function T(l,u){n.__c&&n.__c(u,l),l.some(function(u){try{l=u.__h,u.__h=[],l.some(function(n){n.call(u)})}catch(l){n.__e(l,u.__v)}})}function j(n,l,u,i,t,o,e,c){var a,v,h,y,p=u.props,d=l.props,_=l.type,k=0;if("svg"===_&&(t=!0),null!=o)for(;k<o.length;k++)if((a=o[k])&&(a===n||(_?a.localName==_:3==a.nodeType))){n=a,o[k]=null;break}if(null==n){if(null===_)return document.createTextNode(d);n=t?document.createElementNS("http://www.w3.org/2000/svg",_):document.createElement(_,d.is&&d),o=null,c=!1}if(null===_)p===d||c&&n.data===d||(n.data=d);else{if(o=o&&f.slice.call(n.childNodes),v=(p=u.props||r).dangerouslySetInnerHTML,h=d.dangerouslySetInnerHTML,!c){if(null!=o)for(p={},y=0;y<n.attributes.length;y++)p[n.attributes[y].name]=n.attributes[y].value;(h||v)&&(h&&(v&&h.__html==v.__html||h.__html===n.innerHTML)||(n.innerHTML=h&&h.__html||""))}if(A(n,d,p,t,c),h)l.__k=[];else if(k=l.props.children,m(n,Array.isArray(k)?k:[k],l,u,i,t&&"foreignObject"!==_,o,e,n.firstChild,c),null!=o)for(k=o.length;k--;)null!=o[k]&&s(o[k]);c||("value"in d&&void 0!==(k=d.value)&&(k!==n.value||"progress"===_&&!k)&&C(n,"value",k,p.value,!1),"checked"in d&&void 0!==(k=d.checked)&&k!==n.checked&&C(n,"checked",k,p.checked,!1))}return n}function z(l,u,i){try{"function"==typeof l?l(u):l.current=u}catch(l){n.__e(l,i)}}function L(l,u,i){var t,o,r;if(n.unmount&&n.unmount(l),(t=l.ref)&&(t.current&&t.current!==l.__e||z(t,null,u)),i||"function"==typeof l.type||(i=null!=(o=l.__e)),l.__e=l.__d=void 0,null!=(t=l.__c)){if(t.componentWillUnmount)try{t.componentWillUnmount()}catch(l){n.__e(l,u)}t.base=t.__P=null}if(t=l.__k)for(r=0;r<t.length;r++)t[r]&&L(t[r],u,i);null!=o&&s(o)}function M(n,l,u){return this.constructor(n,u)}function N(l,u,i){var t,o,e;n.__&&n.__(l,u),o=(t="function"==typeof i)?null:i&&i.__k||u.__k,e=[],I(u,l=(!t&&i||u).__k=a(y,null,[l]),o||r,r,void 0!==u.ownerSVGElement,!t&&i?[i]:o?null:u.firstChild?f.slice.call(u.childNodes):null,e,!t&&i?i:o?o.__e:u.firstChild,t),T(e,l)}function O(n,l){N(n,l,O)}function S(n,l,u){var i,t,o,r=arguments,f=c({},n.props);for(o in l)"key"==o?i=l[o]:"ref"==o?t=l[o]:f[o]=l[o];if(arguments.length>3)for(u=[u],o=3;o<arguments.length;o++)u.push(r[o]);return null!=u&&(f.children=u),v(n.type,f,i||n.key,t||n.ref,null)}function q(n,l){var u={__c:l="__cC"+o++,__:n,Consumer:function(n,l){return n.children(l)},Provider:function(n){var u,i;return this.getChildContext||(u=[],(i={})[l]=this,this.getChildContext=function(){return i},this.shouldComponentUpdate=function(n){this.props.value!==n.value&&u.some(k)},this.sub=function(n){u.push(n);var l=n.componentWillUnmount;n.componentWillUnmount=function(){u.splice(u.indexOf(n),1),l&&l.call(n)}}),n.children}};return u.Provider.__=u.Consumer.contextType=u}n={__e:function(n,l){for(var u,i,t;l=l.__;)if((u=l.__c)&&!u.__)try{if((i=u.constructor)&&null!=i.getDerivedStateFromError&&(u.setState(i.getDerivedStateFromError(n)),t=u.__d),null!=u.componentDidCatch&&(u.componentDidCatch(n),t=u.__d),t)return u.__E=u}catch(l){n=l}throw n},__v:0},l=function(n){return null!=n&&void 0===n.constructor},p.prototype.setState=function(n,l){var u;u=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=c({},this.state),"function"==typeof n&&(n=n(c({},u),this.props)),n&&c(u,n),null!=n&&this.__v&&(l&&this.__h.push(l),k(this))},p.prototype.forceUpdate=function(n){this.__v&&(this.__e=!0,n&&this.__h.push(n),k(this))},p.prototype.render=y,u=[],i="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,b.__r=0,o=0;
//# sourceMappingURL=preact.module.js.map


/***/ }),
/* 315 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useCallback": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback),
/* harmony export */   "useContext": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext),
/* harmony export */   "useDebugValue": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue),
/* harmony export */   "useEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect),
/* harmony export */   "useErrorBoundary": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useErrorBoundary),
/* harmony export */   "useImperativeHandle": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle),
/* harmony export */   "useLayoutEffect": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect),
/* harmony export */   "useMemo": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo),
/* harmony export */   "useReducer": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer),
/* harmony export */   "useRef": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef),
/* harmony export */   "useState": () => (/* reexport safe */ preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState),
/* harmony export */   "createElement": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createElement),
/* harmony export */   "createContext": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createContext),
/* harmony export */   "createRef": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.createRef),
/* harmony export */   "Fragment": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Fragment),
/* harmony export */   "Component": () => (/* reexport safe */ preact__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "version": () => (/* binding */ ln),
/* harmony export */   "Children": () => (/* binding */ k),
/* harmony export */   "render": () => (/* binding */ z),
/* harmony export */   "hydrate": () => (/* binding */ B),
/* harmony export */   "unmountComponentAtNode": () => (/* binding */ sn),
/* harmony export */   "createPortal": () => (/* binding */ I),
/* harmony export */   "createFactory": () => (/* binding */ fn),
/* harmony export */   "cloneElement": () => (/* binding */ an),
/* harmony export */   "isValidElement": () => (/* binding */ cn),
/* harmony export */   "findDOMNode": () => (/* binding */ hn),
/* harmony export */   "PureComponent": () => (/* binding */ E),
/* harmony export */   "memo": () => (/* binding */ g),
/* harmony export */   "forwardRef": () => (/* binding */ x),
/* harmony export */   "unstable_batchedUpdates": () => (/* binding */ pn),
/* harmony export */   "StrictMode": () => (/* binding */ vn),
/* harmony export */   "Suspense": () => (/* binding */ L),
/* harmony export */   "SuspenseList": () => (/* binding */ F),
/* harmony export */   "lazy": () => (/* binding */ D),
/* harmony export */   "__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED": () => (/* binding */ Q),
/* harmony export */   "unstable_ImmediatePriority": () => (/* binding */ X),
/* harmony export */   "unstable_UserBlockingPriority": () => (/* binding */ nn),
/* harmony export */   "unstable_NormalPriority": () => (/* binding */ tn),
/* harmony export */   "unstable_LowPriority": () => (/* binding */ en),
/* harmony export */   "unstable_IdlePriority": () => (/* binding */ rn),
/* harmony export */   "unstable_runWithPriority": () => (/* binding */ un),
/* harmony export */   "unstable_now": () => (/* binding */ on)
/* harmony export */ });
/* harmony import */ var preact_hooks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(316);
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(314);
function C(n,t){for(var e in t)n[e]=t[e];return n}function S(n,t){for(var e in n)if("__source"!==e&&!(e in t))return!0;for(var r in t)if("__source"!==r&&n[r]!==t[r])return!0;return!1}function E(n){this.props=n}function g(n,t){function e(n){var e=this.props.ref,r=e==n.ref;return!r&&e&&(e.call?e(null):e.current=null),t?!t(this.props,n)||!r:S(this.props,n)}function r(t){return this.shouldComponentUpdate=e,(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(n,t)}return r.displayName="Memo("+(n.displayName||n.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r}(E.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).isPureReactComponent=!0,E.prototype.shouldComponentUpdate=function(n,t){return S(this.props,n)||S(this.state,t)};var w=preact__WEBPACK_IMPORTED_MODULE_1__.options.__b;preact__WEBPACK_IMPORTED_MODULE_1__.options.__b=function(n){n.type&&n.type.__f&&n.ref&&(n.props.ref=n.ref,n.ref=null),w&&w(n)};var R="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function x(n){function t(t,e){var r=C({},t);return delete r.ref,n(r,(e=t.ref||e)&&("object"!=typeof e||"current"in e)?e:null)}return t.$$typeof=R,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(n.displayName||n.name)+")",t}var N=function(n,t){return null==n?null:(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)((0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n).map(t))},k={map:N,forEach:N,count:function(n){return n?(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n).length:0},only:function(n){var t=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n);if(1!==t.length)throw"Children.only";return t[0]},toArray:preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray},A=preact__WEBPACK_IMPORTED_MODULE_1__.options.__e;preact__WEBPACK_IMPORTED_MODULE_1__.options.__e=function(n,t,e){if(n.then)for(var r,u=t;u=u.__;)if((r=u.__c)&&r.__c)return null==t.__e&&(t.__e=e.__e,t.__k=e.__k),r.__c(n,t);A(n,t,e)};var O=preact__WEBPACK_IMPORTED_MODULE_1__.options.unmount;function L(){this.__u=0,this.t=null,this.__b=null}function U(n){var t=n.__.__c;return t&&t.__e&&t.__e(n)}function D(n){var t,e,r;function u(u){if(t||(t=n()).then(function(n){e=n.default||n},function(n){r=n}),r)throw r;if(!e)throw t;return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(e,u)}return u.displayName="Lazy",u.__f=!0,u}function F(){this.u=null,this.o=null}preact__WEBPACK_IMPORTED_MODULE_1__.options.unmount=function(n){var t=n.__c;t&&t.__R&&t.__R(),t&&!0===n.__h&&(n.type=null),O&&O(n)},(L.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).__c=function(n,t){var e=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(e);var u=U(r.__v),o=!1,i=function(){o||(o=!0,e.__R=null,u?u(l):l())};e.__R=i;var l=function(){if(!--r.__u){if(r.state.__e){var n=r.state.__e;r.__v.__k[0]=function n(t,e,r){return t&&(t.__v=null,t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)}),t.__c&&t.__c.__P===e&&(t.__e&&r.insertBefore(t.__e,t.__d),t.__c.__e=!0,t.__c.__P=r)),t}(n,n.__c.__P,n.__c.__O)}var t;for(r.setState({__e:r.__b=null});t=r.t.pop();)t.forceUpdate()}},f=!0===t.__h;r.__u++||f||r.setState({__e:r.__b=r.__v.__k[0]}),n.then(i,i)},L.prototype.componentWillUnmount=function(){this.t=[]},L.prototype.render=function(n,t){if(this.__b){if(this.__v.__k){var e=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=function n(t,e,r){return t&&(t.__c&&t.__c.__H&&(t.__c.__H.__.forEach(function(n){"function"==typeof n.__c&&n.__c()}),t.__c.__H=null),null!=(t=C({},t)).__c&&(t.__c.__P===r&&(t.__c.__P=e),t.__c=null),t.__k=t.__k&&t.__k.map(function(t){return n(t,e,r)})),t}(this.__b,e,r.__O=r.__P)}this.__b=null}var u=t.__e&&(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,n.fallback);return u&&(u.__h=null),[(0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,null,t.__e?null:n.children),u]};var M=function(n,t,e){if(++e[1]===e[0]&&n.o.delete(t),n.props.revealOrder&&("t"!==n.props.revealOrder[0]||!n.o.size))for(e=n.u;e;){for(;e.length>3;)e.pop()();if(e[1]<e[0])break;n.u=e=e[2]}};function T(n){return this.getChildContext=function(){return n.context},n.children}function j(n){var t=this,e=n.i;t.componentWillUnmount=function(){(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null,t.l),t.l=null,t.i=null},t.i&&t.i!==e&&t.componentWillUnmount(),n.__v?(t.l||(t.i=e,t.l={nodeType:1,parentNode:e,childNodes:[],appendChild:function(n){this.childNodes.push(n),t.i.appendChild(n)},insertBefore:function(n,e){this.childNodes.push(n),t.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),t.i.removeChild(n)}}),(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)((0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(T,{context:t.context},n.__v),t.l)):t.l&&t.componentWillUnmount()}function I(n,t){return (0,preact__WEBPACK_IMPORTED_MODULE_1__.createElement)(j,{__v:n,i:t})}(F.prototype=new preact__WEBPACK_IMPORTED_MODULE_1__.Component).__e=function(n){var t=this,e=U(t.__v),r=t.o.get(n);return r[0]++,function(u){var o=function(){t.props.revealOrder?(r.push(u),M(t,n,r)):u()};e?e(o):o()}},F.prototype.render=function(n){this.u=null,this.o=new Map;var t=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(n.children);n.revealOrder&&"b"===n.revealOrder[0]&&t.reverse();for(var e=t.length;e--;)this.o.set(t[e],this.u=[1,0,this.u]);return n.children},F.prototype.componentDidUpdate=F.prototype.componentDidMount=function(){var n=this;this.o.forEach(function(t,e){M(n,e,t)})};var W="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,P=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,V=function(n){return("undefined"!=typeof Symbol&&"symbol"==typeof Symbol()?/fil|che|rad/i:/fil|che|ra/i).test(n)};function z(n,t,e){return null==t.__k&&(t.textContent=""),(0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(n,t),"function"==typeof e&&e(),n?n.__c:null}function B(n,t,e){return (0,preact__WEBPACK_IMPORTED_MODULE_1__.hydrate)(n,t),"function"==typeof e&&e(),n?n.__c:null}preact__WEBPACK_IMPORTED_MODULE_1__.Component.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(n){Object.defineProperty(preact__WEBPACK_IMPORTED_MODULE_1__.Component.prototype,n,{configurable:!0,get:function(){return this["UNSAFE_"+n]},set:function(t){Object.defineProperty(this,n,{configurable:!0,writable:!0,value:t})}})});var H=preact__WEBPACK_IMPORTED_MODULE_1__.options.event;function Z(){}function Y(){return this.cancelBubble}function $(){return this.defaultPrevented}preact__WEBPACK_IMPORTED_MODULE_1__.options.event=function(n){return H&&(n=H(n)),n.persist=Z,n.isPropagationStopped=Y,n.isDefaultPrevented=$,n.nativeEvent=n};var q,G={configurable:!0,get:function(){return this.class}},J=preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode;preact__WEBPACK_IMPORTED_MODULE_1__.options.vnode=function(n){var t=n.type,e=n.props,r=e;if("string"==typeof t){for(var u in r={},e){var o=e[u];"value"===u&&"defaultValue"in e&&null==o||("defaultValue"===u&&"value"in e&&null==e.value?u="value":"download"===u&&!0===o?o="":/ondoubleclick/i.test(u)?u="ondblclick":/^onchange(textarea|input)/i.test(u+t)&&!V(e.type)?u="oninput":/^on(Ani|Tra|Tou|BeforeInp)/.test(u)?u=u.toLowerCase():P.test(u)?u=u.replace(/[A-Z0-9]/,"-$&").toLowerCase():null===o&&(o=void 0),r[u]=o)}"select"==t&&r.multiple&&Array.isArray(r.value)&&(r.value=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(e.children).forEach(function(n){n.props.selected=-1!=r.value.indexOf(n.props.value)})),"select"==t&&null!=r.defaultValue&&(r.value=(0,preact__WEBPACK_IMPORTED_MODULE_1__.toChildArray)(e.children).forEach(function(n){n.props.selected=r.multiple?-1!=r.defaultValue.indexOf(n.props.value):r.defaultValue==n.props.value})),n.props=r}t&&e.class!=e.className&&(G.enumerable="className"in e,null!=e.className&&(r.class=e.className),Object.defineProperty(r,"className",G)),n.$$typeof=W,J&&J(n)};var K=preact__WEBPACK_IMPORTED_MODULE_1__.options.__r;preact__WEBPACK_IMPORTED_MODULE_1__.options.__r=function(n){K&&K(n),q=n.__c};var Q={ReactCurrentDispatcher:{current:{readContext:function(n){return q.__n[n.__c].props.value}}}},X=1,nn=2,tn=3,en=4,rn=5;function un(n,t){return t()}var on="object"==typeof performance&&"function"==typeof performance.now?performance.now.bind(performance):function(){return Date.now()},ln="16.8.0";function fn(n){return preact__WEBPACK_IMPORTED_MODULE_1__.createElement.bind(null,n)}function cn(n){return!!n&&n.$$typeof===W}function an(n){return cn(n)?preact__WEBPACK_IMPORTED_MODULE_1__.cloneElement.apply(null,arguments):n}function sn(n){return!!n.__k&&((0,preact__WEBPACK_IMPORTED_MODULE_1__.render)(null,n),!0)}function hn(n){return n&&(n.base||1===n.nodeType&&n)||null}var pn=function(n,t){return n(t)},vn=preact__WEBPACK_IMPORTED_MODULE_1__.Fragment;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({useState:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useState,useReducer:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useReducer,useEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useEffect,useLayoutEffect:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect,useRef:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useRef,useImperativeHandle:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle,useMemo:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useMemo,useCallback:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useCallback,useContext:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useContext,useDebugValue:preact_hooks__WEBPACK_IMPORTED_MODULE_0__.useDebugValue,version:"16.8.0",Children:k,render:z,hydrate:B,unmountComponentAtNode:sn,createPortal:I,createElement:preact__WEBPACK_IMPORTED_MODULE_1__.createElement,createContext:preact__WEBPACK_IMPORTED_MODULE_1__.createContext,createFactory:fn,cloneElement:an,createRef:preact__WEBPACK_IMPORTED_MODULE_1__.createRef,Fragment:preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,isValidElement:cn,findDOMNode:hn,Component:preact__WEBPACK_IMPORTED_MODULE_1__.Component,PureComponent:E,memo:g,forwardRef:x,unstable_batchedUpdates:pn,StrictMode:preact__WEBPACK_IMPORTED_MODULE_1__.Fragment,Suspense:L,SuspenseList:F,lazy:D,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:Q});
//# sourceMappingURL=compat.module.js.map


/***/ }),
/* 316 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useState": () => (/* binding */ l),
/* harmony export */   "useReducer": () => (/* binding */ p),
/* harmony export */   "useEffect": () => (/* binding */ y),
/* harmony export */   "useLayoutEffect": () => (/* binding */ h),
/* harmony export */   "useRef": () => (/* binding */ s),
/* harmony export */   "useImperativeHandle": () => (/* binding */ _),
/* harmony export */   "useMemo": () => (/* binding */ d),
/* harmony export */   "useCallback": () => (/* binding */ A),
/* harmony export */   "useContext": () => (/* binding */ F),
/* harmony export */   "useDebugValue": () => (/* binding */ T),
/* harmony export */   "useErrorBoundary": () => (/* binding */ q)
/* harmony export */ });
/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(314);
var t,u,r,o=0,i=[],c=preact__WEBPACK_IMPORTED_MODULE_0__.options.__b,f=preact__WEBPACK_IMPORTED_MODULE_0__.options.__r,e=preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed,a=preact__WEBPACK_IMPORTED_MODULE_0__.options.__c,v=preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount;function m(t,r){preact__WEBPACK_IMPORTED_MODULE_0__.options.__h&&preact__WEBPACK_IMPORTED_MODULE_0__.options.__h(u,t,o||r),o=0;var i=u.__H||(u.__H={__:[],__h:[]});return t>=i.__.length&&i.__.push({}),i.__[t]}function l(n){return o=1,p(w,n)}function p(n,r,o){var i=m(t++,2);return i.t=n,i.__c||(i.__=[o?o(r):w(void 0,r),function(n){var t=i.t(i.__[0],n);i.__[0]!==t&&(i.__=[t,i.__[1]],i.__c.setState({}))}],i.__c=u),i.__}function y(r,o){var i=m(t++,3);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__H.__h.push(i))}function h(r,o){var i=m(t++,4);!preact__WEBPACK_IMPORTED_MODULE_0__.options.__s&&k(i.__H,o)&&(i.__=r,i.__H=o,u.__h.push(i))}function s(n){return o=5,d(function(){return{current:n}},[])}function _(n,t,u){o=6,h(function(){"function"==typeof n?n(t()):n&&(n.current=t())},null==u?u:u.concat(n))}function d(n,u){var r=m(t++,7);return k(r.__H,u)&&(r.__=n(),r.__H=u,r.__h=n),r.__}function A(n,t){return o=8,d(function(){return n},t)}function F(n){var r=u.context[n.__c],o=m(t++,9);return o.__c=n,r?(null==o.__&&(o.__=!0,r.sub(u)),r.props.value):n.__}function T(t,u){preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue&&preact__WEBPACK_IMPORTED_MODULE_0__.options.useDebugValue(u?u(t):t)}function q(n){var r=m(t++,10),o=l();return r.__=n,u.componentDidCatch||(u.componentDidCatch=function(n){r.__&&r.__(n),o[1](n)}),[o[0],function(){o[1](void 0)}]}function x(){i.forEach(function(t){if(t.__P)try{t.__H.__h.forEach(g),t.__H.__h.forEach(j),t.__H.__h=[]}catch(u){t.__H.__h=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(u,t.__v)}}),i=[]}preact__WEBPACK_IMPORTED_MODULE_0__.options.__b=function(n){u=null,c&&c(n)},preact__WEBPACK_IMPORTED_MODULE_0__.options.__r=function(n){f&&f(n),t=0;var r=(u=n.__c).__H;r&&(r.__h.forEach(g),r.__h.forEach(j),r.__h=[])},preact__WEBPACK_IMPORTED_MODULE_0__.options.diffed=function(t){e&&e(t);var o=t.__c;o&&o.__H&&o.__H.__h.length&&(1!==i.push(o)&&r===preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame||((r=preact__WEBPACK_IMPORTED_MODULE_0__.options.requestAnimationFrame)||function(n){var t,u=function(){clearTimeout(r),b&&cancelAnimationFrame(t),setTimeout(n)},r=setTimeout(u,100);b&&(t=requestAnimationFrame(u))})(x)),u=void 0},preact__WEBPACK_IMPORTED_MODULE_0__.options.__c=function(t,u){u.some(function(t){try{t.__h.forEach(g),t.__h=t.__h.filter(function(n){return!n.__||j(n)})}catch(r){u.some(function(n){n.__h&&(n.__h=[])}),u=[],preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(r,t.__v)}}),a&&a(t,u)},preact__WEBPACK_IMPORTED_MODULE_0__.options.unmount=function(t){v&&v(t);var u=t.__c;if(u&&u.__H)try{u.__H.__.forEach(g)}catch(t){preact__WEBPACK_IMPORTED_MODULE_0__.options.__e(t,u.__v)}};var b="function"==typeof requestAnimationFrame;function g(n){var t=u;"function"==typeof n.__c&&n.__c(),u=t}function j(n){var t=u;n.__c=n.__(),u=t}function k(n,t){return!n||n.length!==t.length||t.some(function(t,u){return t!==n[u]})}function w(n,t){return"function"==typeof t?t(n):t}
//# sourceMappingURL=hooks.module.js.map


/***/ }),
/* 317 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__extends": () => (/* binding */ __extends),
/* harmony export */   "__assign": () => (/* binding */ __assign),
/* harmony export */   "__rest": () => (/* binding */ __rest),
/* harmony export */   "__decorate": () => (/* binding */ __decorate),
/* harmony export */   "__param": () => (/* binding */ __param),
/* harmony export */   "__metadata": () => (/* binding */ __metadata),
/* harmony export */   "__awaiter": () => (/* binding */ __awaiter),
/* harmony export */   "__generator": () => (/* binding */ __generator),
/* harmony export */   "__createBinding": () => (/* binding */ __createBinding),
/* harmony export */   "__exportStar": () => (/* binding */ __exportStar),
/* harmony export */   "__values": () => (/* binding */ __values),
/* harmony export */   "__read": () => (/* binding */ __read),
/* harmony export */   "__spread": () => (/* binding */ __spread),
/* harmony export */   "__spreadArrays": () => (/* binding */ __spreadArrays),
/* harmony export */   "__spreadArray": () => (/* binding */ __spreadArray),
/* harmony export */   "__await": () => (/* binding */ __await),
/* harmony export */   "__asyncGenerator": () => (/* binding */ __asyncGenerator),
/* harmony export */   "__asyncDelegator": () => (/* binding */ __asyncDelegator),
/* harmony export */   "__asyncValues": () => (/* binding */ __asyncValues),
/* harmony export */   "__makeTemplateObject": () => (/* binding */ __makeTemplateObject),
/* harmony export */   "__importStar": () => (/* binding */ __importStar),
/* harmony export */   "__importDefault": () => (/* binding */ __importDefault),
/* harmony export */   "__classPrivateFieldGet": () => (/* binding */ __classPrivateFieldGet),
/* harmony export */   "__classPrivateFieldSet": () => (/* binding */ __classPrivateFieldSet)
/* harmony export */ });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
});

function __exportStar(m, o) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

/** @deprecated */
function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

/** @deprecated */
function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}


/***/ }),
/* 318 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_1__.Component),
/* harmony export */   "Fragment": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_1__.Fragment),
/* harmony export */   "createContext": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createContext),
/* harmony export */   "createElement": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement),
/* harmony export */   "createPortal": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createPortal),
/* harmony export */   "createRef": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createRef),
/* harmony export */   "flushToDom": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_1__.flushToDom),
/* harmony export */   "render": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_1__.render),
/* harmony export */   "unmountComponentAtNode": () => (/* reexport safe */ _vdom_js__WEBPACK_IMPORTED_MODULE_1__.unmountComponentAtNode),
/* harmony export */   "BASE_OPTION_DEFAULTS": () => (/* binding */ BASE_OPTION_DEFAULTS),
/* harmony export */   "BASE_OPTION_REFINERS": () => (/* binding */ BASE_OPTION_REFINERS),
/* harmony export */   "BaseComponent": () => (/* binding */ BaseComponent),
/* harmony export */   "BgEvent": () => (/* binding */ BgEvent),
/* harmony export */   "CalendarApi": () => (/* binding */ CalendarApi),
/* harmony export */   "CalendarContent": () => (/* binding */ CalendarContent),
/* harmony export */   "CalendarDataManager": () => (/* binding */ CalendarDataManager),
/* harmony export */   "CalendarDataProvider": () => (/* binding */ CalendarDataProvider),
/* harmony export */   "CalendarRoot": () => (/* binding */ CalendarRoot),
/* harmony export */   "ContentHook": () => (/* binding */ ContentHook),
/* harmony export */   "CustomContentRenderContext": () => (/* binding */ CustomContentRenderContext),
/* harmony export */   "DateComponent": () => (/* binding */ DateComponent),
/* harmony export */   "DateEnv": () => (/* binding */ DateEnv),
/* harmony export */   "DateProfileGenerator": () => (/* binding */ DateProfileGenerator),
/* harmony export */   "DayCellContent": () => (/* binding */ DayCellContent),
/* harmony export */   "DayCellRoot": () => (/* binding */ DayCellRoot),
/* harmony export */   "DayHeader": () => (/* binding */ DayHeader),
/* harmony export */   "DaySeriesModel": () => (/* binding */ DaySeriesModel),
/* harmony export */   "DayTableModel": () => (/* binding */ DayTableModel),
/* harmony export */   "DelayedRunner": () => (/* binding */ DelayedRunner),
/* harmony export */   "ElementDragging": () => (/* binding */ ElementDragging),
/* harmony export */   "ElementScrollController": () => (/* binding */ ElementScrollController),
/* harmony export */   "Emitter": () => (/* binding */ Emitter),
/* harmony export */   "EventApi": () => (/* binding */ EventApi),
/* harmony export */   "EventRoot": () => (/* binding */ EventRoot),
/* harmony export */   "EventSourceApi": () => (/* binding */ EventSourceApi),
/* harmony export */   "Interaction": () => (/* binding */ Interaction),
/* harmony export */   "MoreLinkRoot": () => (/* binding */ MoreLinkRoot),
/* harmony export */   "MountHook": () => (/* binding */ MountHook),
/* harmony export */   "NamedTimeZoneImpl": () => (/* binding */ NamedTimeZoneImpl),
/* harmony export */   "NowIndicatorRoot": () => (/* binding */ NowIndicatorRoot),
/* harmony export */   "NowTimer": () => (/* binding */ NowTimer),
/* harmony export */   "PositionCache": () => (/* binding */ PositionCache),
/* harmony export */   "RefMap": () => (/* binding */ RefMap),
/* harmony export */   "RenderHook": () => (/* binding */ RenderHook),
/* harmony export */   "ScrollController": () => (/* binding */ ScrollController),
/* harmony export */   "ScrollResponder": () => (/* binding */ ScrollResponder),
/* harmony export */   "Scroller": () => (/* binding */ Scroller),
/* harmony export */   "SegHierarchy": () => (/* binding */ SegHierarchy),
/* harmony export */   "SimpleScrollGrid": () => (/* binding */ SimpleScrollGrid),
/* harmony export */   "Slicer": () => (/* binding */ Slicer),
/* harmony export */   "Splitter": () => (/* binding */ Splitter),
/* harmony export */   "StandardEvent": () => (/* binding */ StandardEvent),
/* harmony export */   "TableDateCell": () => (/* binding */ TableDateCell),
/* harmony export */   "TableDowCell": () => (/* binding */ TableDowCell),
/* harmony export */   "Theme": () => (/* binding */ Theme),
/* harmony export */   "ViewApi": () => (/* binding */ ViewApi),
/* harmony export */   "ViewContextType": () => (/* binding */ ViewContextType),
/* harmony export */   "ViewRoot": () => (/* binding */ ViewRoot),
/* harmony export */   "WeekNumberRoot": () => (/* binding */ WeekNumberRoot),
/* harmony export */   "WindowScrollController": () => (/* binding */ WindowScrollController),
/* harmony export */   "addDays": () => (/* binding */ addDays),
/* harmony export */   "addDurations": () => (/* binding */ addDurations),
/* harmony export */   "addMs": () => (/* binding */ addMs),
/* harmony export */   "addWeeks": () => (/* binding */ addWeeks),
/* harmony export */   "allowContextMenu": () => (/* binding */ allowContextMenu),
/* harmony export */   "allowSelection": () => (/* binding */ allowSelection),
/* harmony export */   "applyMutationToEventStore": () => (/* binding */ applyMutationToEventStore),
/* harmony export */   "applyStyle": () => (/* binding */ applyStyle),
/* harmony export */   "applyStyleProp": () => (/* binding */ applyStyleProp),
/* harmony export */   "asCleanDays": () => (/* binding */ asCleanDays),
/* harmony export */   "asRoughMinutes": () => (/* binding */ asRoughMinutes),
/* harmony export */   "asRoughMs": () => (/* binding */ asRoughMs),
/* harmony export */   "asRoughSeconds": () => (/* binding */ asRoughSeconds),
/* harmony export */   "binarySearch": () => (/* binding */ binarySearch),
/* harmony export */   "buildClassNameNormalizer": () => (/* binding */ buildClassNameNormalizer),
/* harmony export */   "buildEntryKey": () => (/* binding */ buildEntryKey),
/* harmony export */   "buildEventApis": () => (/* binding */ buildEventApis),
/* harmony export */   "buildEventRangeKey": () => (/* binding */ buildEventRangeKey),
/* harmony export */   "buildHashFromArray": () => (/* binding */ buildHashFromArray),
/* harmony export */   "buildIsoString": () => (/* binding */ buildIsoString),
/* harmony export */   "buildNavLinkData": () => (/* binding */ buildNavLinkData),
/* harmony export */   "buildSegCompareObj": () => (/* binding */ buildSegCompareObj),
/* harmony export */   "buildSegTimeText": () => (/* binding */ buildSegTimeText),
/* harmony export */   "collectFromHash": () => (/* binding */ collectFromHash),
/* harmony export */   "combineEventUis": () => (/* binding */ combineEventUis),
/* harmony export */   "compareByFieldSpec": () => (/* binding */ compareByFieldSpec),
/* harmony export */   "compareByFieldSpecs": () => (/* binding */ compareByFieldSpecs),
/* harmony export */   "compareNumbers": () => (/* binding */ compareNumbers),
/* harmony export */   "compareObjs": () => (/* binding */ compareObjs),
/* harmony export */   "computeEarliestSegStart": () => (/* binding */ computeEarliestSegStart),
/* harmony export */   "computeEdges": () => (/* binding */ computeEdges),
/* harmony export */   "computeFallbackHeaderFormat": () => (/* binding */ computeFallbackHeaderFormat),
/* harmony export */   "computeHeightAndMargins": () => (/* binding */ computeHeightAndMargins),
/* harmony export */   "computeInnerRect": () => (/* binding */ computeInnerRect),
/* harmony export */   "computeRect": () => (/* binding */ computeRect),
/* harmony export */   "computeSegDraggable": () => (/* binding */ computeSegDraggable),
/* harmony export */   "computeSegEndResizable": () => (/* binding */ computeSegEndResizable),
/* harmony export */   "computeSegStartResizable": () => (/* binding */ computeSegStartResizable),
/* harmony export */   "computeShrinkWidth": () => (/* binding */ computeShrinkWidth),
/* harmony export */   "computeSmallestCellWidth": () => (/* binding */ computeSmallestCellWidth),
/* harmony export */   "computeVisibleDayRange": () => (/* binding */ computeVisibleDayRange),
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "constrainPoint": () => (/* binding */ constrainPoint),
/* harmony export */   "createDuration": () => (/* binding */ createDuration),
/* harmony export */   "createEmptyEventStore": () => (/* binding */ createEmptyEventStore),
/* harmony export */   "createEventInstance": () => (/* binding */ createEventInstance),
/* harmony export */   "createEventUi": () => (/* binding */ createEventUi),
/* harmony export */   "createFormatter": () => (/* binding */ createFormatter),
/* harmony export */   "createPlugin": () => (/* binding */ createPlugin),
/* harmony export */   "diffDates": () => (/* binding */ diffDates),
/* harmony export */   "diffDayAndTime": () => (/* binding */ diffDayAndTime),
/* harmony export */   "diffDays": () => (/* binding */ diffDays),
/* harmony export */   "diffPoints": () => (/* binding */ diffPoints),
/* harmony export */   "diffWeeks": () => (/* binding */ diffWeeks),
/* harmony export */   "diffWholeDays": () => (/* binding */ diffWholeDays),
/* harmony export */   "diffWholeWeeks": () => (/* binding */ diffWholeWeeks),
/* harmony export */   "disableCursor": () => (/* binding */ disableCursor),
/* harmony export */   "elementClosest": () => (/* binding */ elementClosest),
/* harmony export */   "elementMatches": () => (/* binding */ elementMatches),
/* harmony export */   "enableCursor": () => (/* binding */ enableCursor),
/* harmony export */   "eventTupleToStore": () => (/* binding */ eventTupleToStore),
/* harmony export */   "filterEventStoreDefs": () => (/* binding */ filterEventStoreDefs),
/* harmony export */   "filterHash": () => (/* binding */ filterHash),
/* harmony export */   "findDirectChildren": () => (/* binding */ findDirectChildren),
/* harmony export */   "findElements": () => (/* binding */ findElements),
/* harmony export */   "flexibleCompare": () => (/* binding */ flexibleCompare),
/* harmony export */   "formatDate": () => (/* binding */ formatDate),
/* harmony export */   "formatDayString": () => (/* binding */ formatDayString),
/* harmony export */   "formatIsoTimeString": () => (/* binding */ formatIsoTimeString),
/* harmony export */   "formatRange": () => (/* binding */ formatRange),
/* harmony export */   "getAllowYScrolling": () => (/* binding */ getAllowYScrolling),
/* harmony export */   "getCanVGrowWithinCell": () => (/* binding */ getCanVGrowWithinCell),
/* harmony export */   "getClippingParents": () => (/* binding */ getClippingParents),
/* harmony export */   "getDateMeta": () => (/* binding */ getDateMeta),
/* harmony export */   "getDayClassNames": () => (/* binding */ getDayClassNames),
/* harmony export */   "getDefaultEventEnd": () => (/* binding */ getDefaultEventEnd),
/* harmony export */   "getElSeg": () => (/* binding */ getElSeg),
/* harmony export */   "getEntrySpanEnd": () => (/* binding */ getEntrySpanEnd),
/* harmony export */   "getEventClassNames": () => (/* binding */ getEventClassNames),
/* harmony export */   "getIsRtlScrollbarOnLeft": () => (/* binding */ getIsRtlScrollbarOnLeft),
/* harmony export */   "getRectCenter": () => (/* binding */ getRectCenter),
/* harmony export */   "getRelevantEvents": () => (/* binding */ getRelevantEvents),
/* harmony export */   "getScrollGridClassNames": () => (/* binding */ getScrollGridClassNames),
/* harmony export */   "getScrollbarWidths": () => (/* binding */ getScrollbarWidths),
/* harmony export */   "getSectionClassNames": () => (/* binding */ getSectionClassNames),
/* harmony export */   "getSectionHasLiquidHeight": () => (/* binding */ getSectionHasLiquidHeight),
/* harmony export */   "getSegMeta": () => (/* binding */ getSegMeta),
/* harmony export */   "getSlotClassNames": () => (/* binding */ getSlotClassNames),
/* harmony export */   "getStickyFooterScrollbar": () => (/* binding */ getStickyFooterScrollbar),
/* harmony export */   "getStickyHeaderDates": () => (/* binding */ getStickyHeaderDates),
/* harmony export */   "getUnequalProps": () => (/* binding */ getUnequalProps),
/* harmony export */   "globalLocales": () => (/* binding */ globalLocales),
/* harmony export */   "globalPlugins": () => (/* binding */ globalPlugins),
/* harmony export */   "greatestDurationDenominator": () => (/* binding */ greatestDurationDenominator),
/* harmony export */   "groupIntersectingEntries": () => (/* binding */ groupIntersectingEntries),
/* harmony export */   "guid": () => (/* binding */ guid),
/* harmony export */   "hasBgRendering": () => (/* binding */ hasBgRendering),
/* harmony export */   "hasShrinkWidth": () => (/* binding */ hasShrinkWidth),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "interactionSettingsStore": () => (/* binding */ interactionSettingsStore),
/* harmony export */   "interactionSettingsToStore": () => (/* binding */ interactionSettingsToStore),
/* harmony export */   "intersectRanges": () => (/* binding */ intersectRanges),
/* harmony export */   "intersectRects": () => (/* binding */ intersectRects),
/* harmony export */   "isArraysEqual": () => (/* binding */ isArraysEqual),
/* harmony export */   "isColPropsEqual": () => (/* binding */ isColPropsEqual),
/* harmony export */   "isDateSelectionValid": () => (/* binding */ isDateSelectionValid),
/* harmony export */   "isDateSpansEqual": () => (/* binding */ isDateSpansEqual),
/* harmony export */   "isInt": () => (/* binding */ isInt),
/* harmony export */   "isInteractionValid": () => (/* binding */ isInteractionValid),
/* harmony export */   "isMultiDayRange": () => (/* binding */ isMultiDayRange),
/* harmony export */   "isPropsEqual": () => (/* binding */ isPropsEqual),
/* harmony export */   "isPropsValid": () => (/* binding */ isPropsValid),
/* harmony export */   "isValidDate": () => (/* binding */ isValidDate),
/* harmony export */   "listenBySelector": () => (/* binding */ listenBySelector),
/* harmony export */   "mapHash": () => (/* binding */ mapHash),
/* harmony export */   "memoize": () => (/* binding */ memoize),
/* harmony export */   "memoizeArraylike": () => (/* binding */ memoizeArraylike),
/* harmony export */   "memoizeHashlike": () => (/* binding */ memoizeHashlike),
/* harmony export */   "memoizeObjArg": () => (/* binding */ memoizeObjArg),
/* harmony export */   "mergeEventStores": () => (/* binding */ mergeEventStores),
/* harmony export */   "multiplyDuration": () => (/* binding */ multiplyDuration),
/* harmony export */   "padStart": () => (/* binding */ padStart),
/* harmony export */   "parseBusinessHours": () => (/* binding */ parseBusinessHours),
/* harmony export */   "parseClassNames": () => (/* binding */ parseClassNames),
/* harmony export */   "parseDragMeta": () => (/* binding */ parseDragMeta),
/* harmony export */   "parseEventDef": () => (/* binding */ parseEventDef),
/* harmony export */   "parseFieldSpecs": () => (/* binding */ parseFieldSpecs),
/* harmony export */   "parseMarker": () => (/* binding */ parse),
/* harmony export */   "pointInsideRect": () => (/* binding */ pointInsideRect),
/* harmony export */   "preventContextMenu": () => (/* binding */ preventContextMenu),
/* harmony export */   "preventDefault": () => (/* binding */ preventDefault),
/* harmony export */   "preventSelection": () => (/* binding */ preventSelection),
/* harmony export */   "rangeContainsMarker": () => (/* binding */ rangeContainsMarker),
/* harmony export */   "rangeContainsRange": () => (/* binding */ rangeContainsRange),
/* harmony export */   "rangesEqual": () => (/* binding */ rangesEqual),
/* harmony export */   "rangesIntersect": () => (/* binding */ rangesIntersect),
/* harmony export */   "refineEventDef": () => (/* binding */ refineEventDef),
/* harmony export */   "refineProps": () => (/* binding */ refineProps),
/* harmony export */   "removeElement": () => (/* binding */ removeElement),
/* harmony export */   "removeExact": () => (/* binding */ removeExact),
/* harmony export */   "renderChunkContent": () => (/* binding */ renderChunkContent),
/* harmony export */   "renderFill": () => (/* binding */ renderFill),
/* harmony export */   "renderMicroColGroup": () => (/* binding */ renderMicroColGroup),
/* harmony export */   "renderScrollShim": () => (/* binding */ renderScrollShim),
/* harmony export */   "requestJson": () => (/* binding */ requestJson),
/* harmony export */   "sanitizeShrinkWidth": () => (/* binding */ sanitizeShrinkWidth),
/* harmony export */   "setElSeg": () => (/* binding */ setElSeg),
/* harmony export */   "setRef": () => (/* binding */ setRef),
/* harmony export */   "sliceEventStore": () => (/* binding */ sliceEventStore),
/* harmony export */   "sliceEvents": () => (/* binding */ sliceEvents),
/* harmony export */   "sortEventSegs": () => (/* binding */ sortEventSegs),
/* harmony export */   "startOfDay": () => (/* binding */ startOfDay),
/* harmony export */   "translateRect": () => (/* binding */ translateRect),
/* harmony export */   "triggerDateSelect": () => (/* binding */ triggerDateSelect),
/* harmony export */   "unpromisify": () => (/* binding */ unpromisify),
/* harmony export */   "version": () => (/* binding */ version),
/* harmony export */   "whenTransitionDone": () => (/* binding */ whenTransitionDone),
/* harmony export */   "wholeDivideDurations": () => (/* binding */ wholeDivideDurations)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(319);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(317);
/* harmony import */ var _vdom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(320);
/*!
FullCalendar v5.7.0
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/






// no public types yet. when there are, export from:
// import {} from './api-type-deps'
var EventSourceApi = /** @class */ (function () {
    function EventSourceApi(context, internalEventSource) {
        this.context = context;
        this.internalEventSource = internalEventSource;
    }
    EventSourceApi.prototype.remove = function () {
        this.context.dispatch({
            type: 'REMOVE_EVENT_SOURCE',
            sourceId: this.internalEventSource.sourceId,
        });
    };
    EventSourceApi.prototype.refetch = function () {
        this.context.dispatch({
            type: 'FETCH_EVENT_SOURCES',
            sourceIds: [this.internalEventSource.sourceId],
            isRefetch: true,
        });
    };
    Object.defineProperty(EventSourceApi.prototype, "id", {
        get: function () {
            return this.internalEventSource.publicId;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventSourceApi.prototype, "url", {
        get: function () {
            return this.internalEventSource.meta.url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventSourceApi.prototype, "format", {
        get: function () {
            return this.internalEventSource.meta.format; // TODO: bad. not guaranteed
        },
        enumerable: false,
        configurable: true
    });
    return EventSourceApi;
}());

function removeElement(el) {
    if (el.parentNode) {
        el.parentNode.removeChild(el);
    }
}
// Querying
// ----------------------------------------------------------------------------------------------------------------
function elementClosest(el, selector) {
    if (el.closest) {
        return el.closest(selector);
        // really bad fallback for IE
        // from https://developer.mozilla.org/en-US/docs/Web/API/Element/closest
    }
    if (!document.documentElement.contains(el)) {
        return null;
    }
    do {
        if (elementMatches(el, selector)) {
            return el;
        }
        el = (el.parentElement || el.parentNode);
    } while (el !== null && el.nodeType === 1);
    return null;
}
function elementMatches(el, selector) {
    var method = el.matches || el.matchesSelector || el.msMatchesSelector;
    return method.call(el, selector);
}
// accepts multiple subject els
// returns a real array. good for methods like forEach
// TODO: accept the document
function findElements(container, selector) {
    var containers = container instanceof HTMLElement ? [container] : container;
    var allMatches = [];
    for (var i = 0; i < containers.length; i += 1) {
        var matches = containers[i].querySelectorAll(selector);
        for (var j = 0; j < matches.length; j += 1) {
            allMatches.push(matches[j]);
        }
    }
    return allMatches;
}
// accepts multiple subject els
// only queries direct child elements // TODO: rename to findDirectChildren!
function findDirectChildren(parent, selector) {
    var parents = parent instanceof HTMLElement ? [parent] : parent;
    var allMatches = [];
    for (var i = 0; i < parents.length; i += 1) {
        var childNodes = parents[i].children; // only ever elements
        for (var j = 0; j < childNodes.length; j += 1) {
            var childNode = childNodes[j];
            if (!selector || elementMatches(childNode, selector)) {
                allMatches.push(childNode);
            }
        }
    }
    return allMatches;
}
// Style
// ----------------------------------------------------------------------------------------------------------------
var PIXEL_PROP_RE = /(top|left|right|bottom|width|height)$/i;
function applyStyle(el, props) {
    for (var propName in props) {
        applyStyleProp(el, propName, props[propName]);
    }
}
function applyStyleProp(el, name, val) {
    if (val == null) {
        el.style[name] = '';
    }
    else if (typeof val === 'number' && PIXEL_PROP_RE.test(name)) {
        el.style[name] = val + "px";
    }
    else {
        el.style[name] = val;
    }
}
// Event Handling
// ----------------------------------------------------------------------------------------------------------------
// if intercepting bubbled events at the document/window/body level,
// and want to see originating element (the 'target'), use this util instead
// of `ev.target` because it goes within web-component boundaries.
function getEventTargetViaRoot(ev) {
    var _a, _b;
    return (_b = (_a = ev.composedPath) === null || _a === void 0 ? void 0 : _a.call(ev)[0]) !== null && _b !== void 0 ? _b : ev.target;
}

// Stops a mouse/touch event from doing it's native browser action
function preventDefault(ev) {
    ev.preventDefault();
}
// Event Delegation
// ----------------------------------------------------------------------------------------------------------------
function buildDelegationHandler(selector, handler) {
    return function (ev) {
        var matchedChild = elementClosest(ev.target, selector);
        if (matchedChild) {
            handler.call(matchedChild, ev, matchedChild);
        }
    };
}
function listenBySelector(container, eventType, selector, handler) {
    var attachedHandler = buildDelegationHandler(selector, handler);
    container.addEventListener(eventType, attachedHandler);
    return function () {
        container.removeEventListener(eventType, attachedHandler);
    };
}
function listenToHoverBySelector(container, selector, onMouseEnter, onMouseLeave) {
    var currentMatchedChild;
    return listenBySelector(container, 'mouseover', selector, function (mouseOverEv, matchedChild) {
        if (matchedChild !== currentMatchedChild) {
            currentMatchedChild = matchedChild;
            onMouseEnter(mouseOverEv, matchedChild);
            var realOnMouseLeave_1 = function (mouseLeaveEv) {
                currentMatchedChild = null;
                onMouseLeave(mouseLeaveEv, matchedChild);
                matchedChild.removeEventListener('mouseleave', realOnMouseLeave_1);
            };
            // listen to the next mouseleave, and then unattach
            matchedChild.addEventListener('mouseleave', realOnMouseLeave_1);
        }
    });
}
// Animation
// ----------------------------------------------------------------------------------------------------------------
var transitionEventNames = [
    'webkitTransitionEnd',
    'otransitionend',
    'oTransitionEnd',
    'msTransitionEnd',
    'transitionend',
];
// triggered only when the next single subsequent transition finishes
function whenTransitionDone(el, callback) {
    var realCallback = function (ev) {
        callback(ev);
        transitionEventNames.forEach(function (eventName) {
            el.removeEventListener(eventName, realCallback);
        });
    };
    transitionEventNames.forEach(function (eventName) {
        el.addEventListener(eventName, realCallback); // cross-browser way to determine when the transition finishes
    });
}

var guidNumber = 0;
function guid() {
    guidNumber += 1;
    return String(guidNumber);
}
/* FullCalendar-specific DOM Utilities
----------------------------------------------------------------------------------------------------------------------*/
// Make the mouse cursor express that an event is not allowed in the current area
function disableCursor() {
    document.body.classList.add('fc-not-allowed');
}
// Returns the mouse cursor to its original look
function enableCursor() {
    document.body.classList.remove('fc-not-allowed');
}
/* Selection
----------------------------------------------------------------------------------------------------------------------*/
function preventSelection(el) {
    el.classList.add('fc-unselectable');
    el.addEventListener('selectstart', preventDefault);
}
function allowSelection(el) {
    el.classList.remove('fc-unselectable');
    el.removeEventListener('selectstart', preventDefault);
}
/* Context Menu
----------------------------------------------------------------------------------------------------------------------*/
function preventContextMenu(el) {
    el.addEventListener('contextmenu', preventDefault);
}
function allowContextMenu(el) {
    el.removeEventListener('contextmenu', preventDefault);
}
function parseFieldSpecs(input) {
    var specs = [];
    var tokens = [];
    var i;
    var token;
    if (typeof input === 'string') {
        tokens = input.split(/\s*,\s*/);
    }
    else if (typeof input === 'function') {
        tokens = [input];
    }
    else if (Array.isArray(input)) {
        tokens = input;
    }
    for (i = 0; i < tokens.length; i += 1) {
        token = tokens[i];
        if (typeof token === 'string') {
            specs.push(token.charAt(0) === '-' ?
                { field: token.substring(1), order: -1 } :
                { field: token, order: 1 });
        }
        else if (typeof token === 'function') {
            specs.push({ func: token });
        }
    }
    return specs;
}
function compareByFieldSpecs(obj0, obj1, fieldSpecs) {
    var i;
    var cmp;
    for (i = 0; i < fieldSpecs.length; i += 1) {
        cmp = compareByFieldSpec(obj0, obj1, fieldSpecs[i]);
        if (cmp) {
            return cmp;
        }
    }
    return 0;
}
function compareByFieldSpec(obj0, obj1, fieldSpec) {
    if (fieldSpec.func) {
        return fieldSpec.func(obj0, obj1);
    }
    return flexibleCompare(obj0[fieldSpec.field], obj1[fieldSpec.field])
        * (fieldSpec.order || 1);
}
function flexibleCompare(a, b) {
    if (!a && !b) {
        return 0;
    }
    if (b == null) {
        return -1;
    }
    if (a == null) {
        return 1;
    }
    if (typeof a === 'string' || typeof b === 'string') {
        return String(a).localeCompare(String(b));
    }
    return a - b;
}
/* String Utilities
----------------------------------------------------------------------------------------------------------------------*/
function padStart(val, len) {
    var s = String(val);
    return '000'.substr(0, len - s.length) + s;
}
/* Number Utilities
----------------------------------------------------------------------------------------------------------------------*/
function compareNumbers(a, b) {
    return a - b;
}
function isInt(n) {
    return n % 1 === 0;
}
/* FC-specific DOM dimension stuff
----------------------------------------------------------------------------------------------------------------------*/
function computeSmallestCellWidth(cellEl) {
    var allWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-frame');
    var contentWidthEl = cellEl.querySelector('.fc-scrollgrid-shrink-cushion');
    if (!allWidthEl) {
        throw new Error('needs fc-scrollgrid-shrink-frame className'); // TODO: use const
    }
    if (!contentWidthEl) {
        throw new Error('needs fc-scrollgrid-shrink-cushion className');
    }
    return cellEl.getBoundingClientRect().width - allWidthEl.getBoundingClientRect().width + // the cell padding+border
        contentWidthEl.getBoundingClientRect().width;
}

var DAY_IDS = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat'];
// Adding
function addWeeks(m, n) {
    var a = dateToUtcArray(m);
    a[2] += n * 7;
    return arrayToUtcDate(a);
}
function addDays(m, n) {
    var a = dateToUtcArray(m);
    a[2] += n;
    return arrayToUtcDate(a);
}
function addMs(m, n) {
    var a = dateToUtcArray(m);
    a[6] += n;
    return arrayToUtcDate(a);
}
// Diffing (all return floats)
// TODO: why not use ranges?
function diffWeeks(m0, m1) {
    return diffDays(m0, m1) / 7;
}
function diffDays(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60 * 24);
}
function diffHours(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / (1000 * 60 * 60);
}
function diffMinutes(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / (1000 * 60);
}
function diffSeconds(m0, m1) {
    return (m1.valueOf() - m0.valueOf()) / 1000;
}
function diffDayAndTime(m0, m1) {
    var m0day = startOfDay(m0);
    var m1day = startOfDay(m1);
    return {
        years: 0,
        months: 0,
        days: Math.round(diffDays(m0day, m1day)),
        milliseconds: (m1.valueOf() - m1day.valueOf()) - (m0.valueOf() - m0day.valueOf()),
    };
}
// Diffing Whole Units
function diffWholeWeeks(m0, m1) {
    var d = diffWholeDays(m0, m1);
    if (d !== null && d % 7 === 0) {
        return d / 7;
    }
    return null;
}
function diffWholeDays(m0, m1) {
    if (timeAsMs(m0) === timeAsMs(m1)) {
        return Math.round(diffDays(m0, m1));
    }
    return null;
}
// Start-Of
function startOfDay(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate(),
    ]);
}
function startOfHour(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate(),
        m.getUTCHours(),
    ]);
}
function startOfMinute(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate(),
        m.getUTCHours(),
        m.getUTCMinutes(),
    ]);
}
function startOfSecond(m) {
    return arrayToUtcDate([
        m.getUTCFullYear(),
        m.getUTCMonth(),
        m.getUTCDate(),
        m.getUTCHours(),
        m.getUTCMinutes(),
        m.getUTCSeconds(),
    ]);
}
// Week Computation
function weekOfYear(marker, dow, doy) {
    var y = marker.getUTCFullYear();
    var w = weekOfGivenYear(marker, y, dow, doy);
    if (w < 1) {
        return weekOfGivenYear(marker, y - 1, dow, doy);
    }
    var nextW = weekOfGivenYear(marker, y + 1, dow, doy);
    if (nextW >= 1) {
        return Math.min(w, nextW);
    }
    return w;
}
function weekOfGivenYear(marker, year, dow, doy) {
    var firstWeekStart = arrayToUtcDate([year, 0, 1 + firstWeekOffset(year, dow, doy)]);
    var dayStart = startOfDay(marker);
    var days = Math.round(diffDays(firstWeekStart, dayStart));
    return Math.floor(days / 7) + 1; // zero-indexed
}
// start-of-first-week - start-of-year
function firstWeekOffset(year, dow, doy) {
    // first-week day -- which january is always in the first week (4 for iso, 1 for other)
    var fwd = 7 + dow - doy;
    // first-week day local weekday -- which local weekday is fwd
    var fwdlw = (7 + arrayToUtcDate([year, 0, fwd]).getUTCDay() - dow) % 7;
    return -fwdlw + fwd - 1;
}
// Array Conversion
function dateToLocalArray(date) {
    return [
        date.getFullYear(),
        date.getMonth(),
        date.getDate(),
        date.getHours(),
        date.getMinutes(),
        date.getSeconds(),
        date.getMilliseconds(),
    ];
}
function arrayToLocalDate(a) {
    return new Date(a[0], a[1] || 0, a[2] == null ? 1 : a[2], // day of month
    a[3] || 0, a[4] || 0, a[5] || 0);
}
function dateToUtcArray(date) {
    return [
        date.getUTCFullYear(),
        date.getUTCMonth(),
        date.getUTCDate(),
        date.getUTCHours(),
        date.getUTCMinutes(),
        date.getUTCSeconds(),
        date.getUTCMilliseconds(),
    ];
}
function arrayToUtcDate(a) {
    // according to web standards (and Safari), a month index is required.
    // massage if only given a year.
    if (a.length === 1) {
        a = a.concat([0]);
    }
    return new Date(Date.UTC.apply(Date, a));
}
// Other Utils
function isValidDate(m) {
    return !isNaN(m.valueOf());
}
function timeAsMs(m) {
    return m.getUTCHours() * 1000 * 60 * 60 +
        m.getUTCMinutes() * 1000 * 60 +
        m.getUTCSeconds() * 1000 +
        m.getUTCMilliseconds();
}

function createEventInstance(defId, range, forcedStartTzo, forcedEndTzo) {
    return {
        instanceId: guid(),
        defId: defId,
        range: range,
        forcedStartTzo: forcedStartTzo == null ? null : forcedStartTzo,
        forcedEndTzo: forcedEndTzo == null ? null : forcedEndTzo,
    };
}

var hasOwnProperty = Object.prototype.hasOwnProperty;
// Merges an array of objects into a single object.
// The second argument allows for an array of property names who's object values will be merged together.
function mergeProps(propObjs, complexPropsMap) {
    var dest = {};
    if (complexPropsMap) {
        for (var name_1 in complexPropsMap) {
            var complexObjs = [];
            // collect the trailing object values, stopping when a non-object is discovered
            for (var i = propObjs.length - 1; i >= 0; i -= 1) {
                var val = propObjs[i][name_1];
                if (typeof val === 'object' && val) { // non-null object
                    complexObjs.unshift(val);
                }
                else if (val !== undefined) {
                    dest[name_1] = val; // if there were no objects, this value will be used
                    break;
                }
            }
            // if the trailing values were objects, use the merged value
            if (complexObjs.length) {
                dest[name_1] = mergeProps(complexObjs);
            }
        }
    }
    // copy values into the destination, going from last to first
    for (var i = propObjs.length - 1; i >= 0; i -= 1) {
        var props = propObjs[i];
        for (var name_2 in props) {
            if (!(name_2 in dest)) { // if already assigned by previous props or complex props, don't reassign
                dest[name_2] = props[name_2];
            }
        }
    }
    return dest;
}
function filterHash(hash, func) {
    var filtered = {};
    for (var key in hash) {
        if (func(hash[key], key)) {
            filtered[key] = hash[key];
        }
    }
    return filtered;
}
function mapHash(hash, func) {
    var newHash = {};
    for (var key in hash) {
        newHash[key] = func(hash[key], key);
    }
    return newHash;
}
function arrayToHash(a) {
    var hash = {};
    for (var _i = 0, a_1 = a; _i < a_1.length; _i++) {
        var item = a_1[_i];
        hash[item] = true;
    }
    return hash;
}
function buildHashFromArray(a, func) {
    var hash = {};
    for (var i = 0; i < a.length; i += 1) {
        var tuple = func(a[i], i);
        hash[tuple[0]] = tuple[1];
    }
    return hash;
}
function hashValuesToArray(obj) {
    var a = [];
    for (var key in obj) {
        a.push(obj[key]);
    }
    return a;
}
function isPropsEqual(obj0, obj1) {
    if (obj0 === obj1) {
        return true;
    }
    for (var key in obj0) {
        if (hasOwnProperty.call(obj0, key)) {
            if (!(key in obj1)) {
                return false;
            }
        }
    }
    for (var key in obj1) {
        if (hasOwnProperty.call(obj1, key)) {
            if (obj0[key] !== obj1[key]) {
                return false;
            }
        }
    }
    return true;
}
function getUnequalProps(obj0, obj1) {
    var keys = [];
    for (var key in obj0) {
        if (hasOwnProperty.call(obj0, key)) {
            if (!(key in obj1)) {
                keys.push(key);
            }
        }
    }
    for (var key in obj1) {
        if (hasOwnProperty.call(obj1, key)) {
            if (obj0[key] !== obj1[key]) {
                keys.push(key);
            }
        }
    }
    return keys;
}
function compareObjs(oldProps, newProps, equalityFuncs) {
    if (equalityFuncs === void 0) { equalityFuncs = {}; }
    if (oldProps === newProps) {
        return true;
    }
    for (var key in newProps) {
        if (key in oldProps && isObjValsEqual(oldProps[key], newProps[key], equalityFuncs[key])) ;
        else {
            return false;
        }
    }
    // check for props that were omitted in the new
    for (var key in oldProps) {
        if (!(key in newProps)) {
            return false;
        }
    }
    return true;
}
/*
assumed "true" equality for handler names like "onReceiveSomething"
*/
function isObjValsEqual(val0, val1, comparator) {
    if (val0 === val1 || comparator === true) {
        return true;
    }
    if (comparator) {
        return comparator(val0, val1);
    }
    return false;
}
function collectFromHash(hash, startIndex, endIndex, step) {
    if (startIndex === void 0) { startIndex = 0; }
    if (step === void 0) { step = 1; }
    var res = [];
    if (endIndex == null) {
        endIndex = Object.keys(hash).length;
    }
    for (var i = startIndex; i < endIndex; i += step) {
        var val = hash[i];
        if (val !== undefined) { // will disregard undefined for sparse arrays
            res.push(val);
        }
    }
    return res;
}

function parseRecurring(refined, defaultAllDay, dateEnv, recurringTypes) {
    for (var i = 0; i < recurringTypes.length; i += 1) {
        var parsed = recurringTypes[i].parse(refined, dateEnv);
        if (parsed) {
            var allDay = refined.allDay;
            if (allDay == null) {
                allDay = defaultAllDay;
                if (allDay == null) {
                    allDay = parsed.allDayGuess;
                    if (allDay == null) {
                        allDay = false;
                    }
                }
            }
            return {
                allDay: allDay,
                duration: parsed.duration,
                typeData: parsed.typeData,
                typeId: i,
            };
        }
    }
    return null;
}
function expandRecurring(eventStore, framingRange, context) {
    var dateEnv = context.dateEnv, pluginHooks = context.pluginHooks, options = context.options;
    var defs = eventStore.defs, instances = eventStore.instances;
    // remove existing recurring instances
    // TODO: bad. always expand events as a second step
    instances = filterHash(instances, function (instance) { return !defs[instance.defId].recurringDef; });
    for (var defId in defs) {
        var def = defs[defId];
        if (def.recurringDef) {
            var duration = def.recurringDef.duration;
            if (!duration) {
                duration = def.allDay ?
                    options.defaultAllDayEventDuration :
                    options.defaultTimedEventDuration;
            }
            var starts = expandRecurringRanges(def, duration, framingRange, dateEnv, pluginHooks.recurringTypes);
            for (var _i = 0, starts_1 = starts; _i < starts_1.length; _i++) {
                var start = starts_1[_i];
                var instance = createEventInstance(defId, {
                    start: start,
                    end: dateEnv.add(start, duration),
                });
                instances[instance.instanceId] = instance;
            }
        }
    }
    return { defs: defs, instances: instances };
}
/*
Event MUST have a recurringDef
*/
function expandRecurringRanges(eventDef, duration, framingRange, dateEnv, recurringTypes) {
    var typeDef = recurringTypes[eventDef.recurringDef.typeId];
    var markers = typeDef.expand(eventDef.recurringDef.typeData, {
        start: dateEnv.subtract(framingRange.start, duration),
        end: framingRange.end,
    }, dateEnv);
    // the recurrence plugins don't guarantee that all-day events are start-of-day, so we have to
    if (eventDef.allDay) {
        markers = markers.map(startOfDay);
    }
    return markers;
}

var INTERNAL_UNITS = ['years', 'months', 'days', 'milliseconds'];
var PARSE_RE = /^(-?)(?:(\d+)\.)?(\d+):(\d\d)(?::(\d\d)(?:\.(\d\d\d))?)?/;
// Parsing and Creation
function createDuration(input, unit) {
    var _a;
    if (typeof input === 'string') {
        return parseString(input);
    }
    if (typeof input === 'object' && input) { // non-null object
        return parseObject(input);
    }
    if (typeof input === 'number') {
        return parseObject((_a = {}, _a[unit || 'milliseconds'] = input, _a));
    }
    return null;
}
function parseString(s) {
    var m = PARSE_RE.exec(s);
    if (m) {
        var sign = m[1] ? -1 : 1;
        return {
            years: 0,
            months: 0,
            days: sign * (m[2] ? parseInt(m[2], 10) : 0),
            milliseconds: sign * ((m[3] ? parseInt(m[3], 10) : 0) * 60 * 60 * 1000 + // hours
                (m[4] ? parseInt(m[4], 10) : 0) * 60 * 1000 + // minutes
                (m[5] ? parseInt(m[5], 10) : 0) * 1000 + // seconds
                (m[6] ? parseInt(m[6], 10) : 0) // ms
            ),
        };
    }
    return null;
}
function parseObject(obj) {
    var duration = {
        years: obj.years || obj.year || 0,
        months: obj.months || obj.month || 0,
        days: obj.days || obj.day || 0,
        milliseconds: (obj.hours || obj.hour || 0) * 60 * 60 * 1000 + // hours
            (obj.minutes || obj.minute || 0) * 60 * 1000 + // minutes
            (obj.seconds || obj.second || 0) * 1000 + // seconds
            (obj.milliseconds || obj.millisecond || obj.ms || 0),
    };
    var weeks = obj.weeks || obj.week;
    if (weeks) {
        duration.days += weeks * 7;
        duration.specifiedWeeks = true;
    }
    return duration;
}
// Equality
function durationsEqual(d0, d1) {
    return d0.years === d1.years &&
        d0.months === d1.months &&
        d0.days === d1.days &&
        d0.milliseconds === d1.milliseconds;
}
function asCleanDays(dur) {
    if (!dur.years && !dur.months && !dur.milliseconds) {
        return dur.days;
    }
    return 0;
}
// Simple Math
function addDurations(d0, d1) {
    return {
        years: d0.years + d1.years,
        months: d0.months + d1.months,
        days: d0.days + d1.days,
        milliseconds: d0.milliseconds + d1.milliseconds,
    };
}
function subtractDurations(d1, d0) {
    return {
        years: d1.years - d0.years,
        months: d1.months - d0.months,
        days: d1.days - d0.days,
        milliseconds: d1.milliseconds - d0.milliseconds,
    };
}
function multiplyDuration(d, n) {
    return {
        years: d.years * n,
        months: d.months * n,
        days: d.days * n,
        milliseconds: d.milliseconds * n,
    };
}
// Conversions
// "Rough" because they are based on average-case Gregorian months/years
function asRoughYears(dur) {
    return asRoughDays(dur) / 365;
}
function asRoughMonths(dur) {
    return asRoughDays(dur) / 30;
}
function asRoughDays(dur) {
    return asRoughMs(dur) / 864e5;
}
function asRoughMinutes(dur) {
    return asRoughMs(dur) / (1000 * 60);
}
function asRoughSeconds(dur) {
    return asRoughMs(dur) / 1000;
}
function asRoughMs(dur) {
    return dur.years * (365 * 864e5) +
        dur.months * (30 * 864e5) +
        dur.days * 864e5 +
        dur.milliseconds;
}
// Advanced Math
function wholeDivideDurations(numerator, denominator) {
    var res = null;
    for (var i = 0; i < INTERNAL_UNITS.length; i += 1) {
        var unit = INTERNAL_UNITS[i];
        if (denominator[unit]) {
            var localRes = numerator[unit] / denominator[unit];
            if (!isInt(localRes) || (res !== null && res !== localRes)) {
                return null;
            }
            res = localRes;
        }
        else if (numerator[unit]) {
            // needs to divide by something but can't!
            return null;
        }
    }
    return res;
}
function greatestDurationDenominator(dur) {
    var ms = dur.milliseconds;
    if (ms) {
        if (ms % 1000 !== 0) {
            return { unit: 'millisecond', value: ms };
        }
        if (ms % (1000 * 60) !== 0) {
            return { unit: 'second', value: ms / 1000 };
        }
        if (ms % (1000 * 60 * 60) !== 0) {
            return { unit: 'minute', value: ms / (1000 * 60) };
        }
        if (ms) {
            return { unit: 'hour', value: ms / (1000 * 60 * 60) };
        }
    }
    if (dur.days) {
        if (dur.specifiedWeeks && dur.days % 7 === 0) {
            return { unit: 'week', value: dur.days / 7 };
        }
        return { unit: 'day', value: dur.days };
    }
    if (dur.months) {
        return { unit: 'month', value: dur.months };
    }
    if (dur.years) {
        return { unit: 'year', value: dur.years };
    }
    return { unit: 'millisecond', value: 0 };
}

// timeZoneOffset is in minutes
function buildIsoString(marker, timeZoneOffset, stripZeroTime) {
    if (stripZeroTime === void 0) { stripZeroTime = false; }
    var s = marker.toISOString();
    s = s.replace('.000', '');
    if (stripZeroTime) {
        s = s.replace('T00:00:00Z', '');
    }
    if (s.length > 10) { // time part wasn't stripped, can add timezone info
        if (timeZoneOffset == null) {
            s = s.replace('Z', '');
        }
        else if (timeZoneOffset !== 0) {
            s = s.replace('Z', formatTimeZoneOffset(timeZoneOffset, true));
        }
        // otherwise, its UTC-0 and we want to keep the Z
    }
    return s;
}
// formats the date, but with no time part
// TODO: somehow merge with buildIsoString and stripZeroTime
// TODO: rename. omit "string"
function formatDayString(marker) {
    return marker.toISOString().replace(/T.*$/, '');
}
// TODO: use Date::toISOString and use everything after the T?
function formatIsoTimeString(marker) {
    return padStart(marker.getUTCHours(), 2) + ':' +
        padStart(marker.getUTCMinutes(), 2) + ':' +
        padStart(marker.getUTCSeconds(), 2);
}
function formatTimeZoneOffset(minutes, doIso) {
    if (doIso === void 0) { doIso = false; }
    var sign = minutes < 0 ? '-' : '+';
    var abs = Math.abs(minutes);
    var hours = Math.floor(abs / 60);
    var mins = Math.round(abs % 60);
    if (doIso) {
        return sign + padStart(hours, 2) + ":" + padStart(mins, 2);
    }
    return "GMT" + sign + hours + (mins ? ":" + padStart(mins, 2) : '');
}

// TODO: new util arrayify?
function removeExact(array, exactVal) {
    var removeCnt = 0;
    var i = 0;
    while (i < array.length) {
        if (array[i] === exactVal) {
            array.splice(i, 1);
            removeCnt += 1;
        }
        else {
            i += 1;
        }
    }
    return removeCnt;
}
function isArraysEqual(a0, a1, equalityFunc) {
    if (a0 === a1) {
        return true;
    }
    var len = a0.length;
    var i;
    if (len !== a1.length) { // not array? or not same length?
        return false;
    }
    for (i = 0; i < len; i += 1) {
        if (!(equalityFunc ? equalityFunc(a0[i], a1[i]) : a0[i] === a1[i])) {
            return false;
        }
    }
    return true;
}

function memoize(workerFunc, resEquality, teardownFunc) {
    var currentArgs;
    var currentRes;
    return function () {
        var newArgs = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            newArgs[_i] = arguments[_i];
        }
        if (!currentArgs) {
            currentRes = workerFunc.apply(this, newArgs);
        }
        else if (!isArraysEqual(currentArgs, newArgs)) {
            if (teardownFunc) {
                teardownFunc(currentRes);
            }
            var res = workerFunc.apply(this, newArgs);
            if (!resEquality || !resEquality(res, currentRes)) {
                currentRes = res;
            }
        }
        currentArgs = newArgs;
        return currentRes;
    };
}
function memoizeObjArg(workerFunc, resEquality, teardownFunc) {
    var _this = this;
    var currentArg;
    var currentRes;
    return function (newArg) {
        if (!currentArg) {
            currentRes = workerFunc.call(_this, newArg);
        }
        else if (!isPropsEqual(currentArg, newArg)) {
            if (teardownFunc) {
                teardownFunc(currentRes);
            }
            var res = workerFunc.call(_this, newArg);
            if (!resEquality || !resEquality(res, currentRes)) {
                currentRes = res;
            }
        }
        currentArg = newArg;
        return currentRes;
    };
}
function memoizeArraylike(// used at all?
workerFunc, resEquality, teardownFunc) {
    var _this = this;
    var currentArgSets = [];
    var currentResults = [];
    return function (newArgSets) {
        var currentLen = currentArgSets.length;
        var newLen = newArgSets.length;
        var i = 0;
        for (; i < currentLen; i += 1) {
            if (!newArgSets[i]) { // one of the old sets no longer exists
                if (teardownFunc) {
                    teardownFunc(currentResults[i]);
                }
            }
            else if (!isArraysEqual(currentArgSets[i], newArgSets[i])) {
                if (teardownFunc) {
                    teardownFunc(currentResults[i]);
                }
                var res = workerFunc.apply(_this, newArgSets[i]);
                if (!resEquality || !resEquality(res, currentResults[i])) {
                    currentResults[i] = res;
                }
            }
        }
        for (; i < newLen; i += 1) {
            currentResults[i] = workerFunc.apply(_this, newArgSets[i]);
        }
        currentArgSets = newArgSets;
        currentResults.splice(newLen); // remove excess
        return currentResults;
    };
}
function memoizeHashlike(// used?
workerFunc, resEquality, teardownFunc) {
    var _this = this;
    var currentArgHash = {};
    var currentResHash = {};
    return function (newArgHash) {
        var newResHash = {};
        for (var key in newArgHash) {
            if (!currentResHash[key]) {
                newResHash[key] = workerFunc.apply(_this, newArgHash[key]);
            }
            else if (!isArraysEqual(currentArgHash[key], newArgHash[key])) {
                if (teardownFunc) {
                    teardownFunc(currentResHash[key]);
                }
                var res = workerFunc.apply(_this, newArgHash[key]);
                newResHash[key] = (resEquality && resEquality(res, currentResHash[key]))
                    ? currentResHash[key]
                    : res;
            }
            else {
                newResHash[key] = currentResHash[key];
            }
        }
        currentArgHash = newArgHash;
        currentResHash = newResHash;
        return newResHash;
    };
}

var EXTENDED_SETTINGS_AND_SEVERITIES = {
    week: 3,
    separator: 0,
    omitZeroMinute: 0,
    meridiem: 0,
    omitCommas: 0,
};
var STANDARD_DATE_PROP_SEVERITIES = {
    timeZoneName: 7,
    era: 6,
    year: 5,
    month: 4,
    day: 2,
    weekday: 2,
    hour: 1,
    minute: 1,
    second: 1,
};
var MERIDIEM_RE = /\s*([ap])\.?m\.?/i; // eats up leading spaces too
var COMMA_RE = /,/g; // we need re for globalness
var MULTI_SPACE_RE = /\s+/g;
var LTR_RE = /\u200e/g; // control character
var UTC_RE = /UTC|GMT/;
var NativeFormatter = /** @class */ (function () {
    function NativeFormatter(formatSettings) {
        var standardDateProps = {};
        var extendedSettings = {};
        var severity = 0;
        for (var name_1 in formatSettings) {
            if (name_1 in EXTENDED_SETTINGS_AND_SEVERITIES) {
                extendedSettings[name_1] = formatSettings[name_1];
                severity = Math.max(EXTENDED_SETTINGS_AND_SEVERITIES[name_1], severity);
            }
            else {
                standardDateProps[name_1] = formatSettings[name_1];
                if (name_1 in STANDARD_DATE_PROP_SEVERITIES) { // TODO: what about hour12? no severity
                    severity = Math.max(STANDARD_DATE_PROP_SEVERITIES[name_1], severity);
                }
            }
        }
        this.standardDateProps = standardDateProps;
        this.extendedSettings = extendedSettings;
        this.severity = severity;
        this.buildFormattingFunc = memoize(buildFormattingFunc);
    }
    NativeFormatter.prototype.format = function (date, context) {
        return this.buildFormattingFunc(this.standardDateProps, this.extendedSettings, context)(date);
    };
    NativeFormatter.prototype.formatRange = function (start, end, context, betterDefaultSeparator) {
        var _a = this, standardDateProps = _a.standardDateProps, extendedSettings = _a.extendedSettings;
        var diffSeverity = computeMarkerDiffSeverity(start.marker, end.marker, context.calendarSystem);
        if (!diffSeverity) {
            return this.format(start, context);
        }
        var biggestUnitForPartial = diffSeverity;
        if (biggestUnitForPartial > 1 && // the two dates are different in a way that's larger scale than time
            (standardDateProps.year === 'numeric' || standardDateProps.year === '2-digit') &&
            (standardDateProps.month === 'numeric' || standardDateProps.month === '2-digit') &&
            (standardDateProps.day === 'numeric' || standardDateProps.day === '2-digit')) {
            biggestUnitForPartial = 1; // make it look like the dates are only different in terms of time
        }
        var full0 = this.format(start, context);
        var full1 = this.format(end, context);
        if (full0 === full1) {
            return full0;
        }
        var partialDateProps = computePartialFormattingOptions(standardDateProps, biggestUnitForPartial);
        var partialFormattingFunc = buildFormattingFunc(partialDateProps, extendedSettings, context);
        var partial0 = partialFormattingFunc(start);
        var partial1 = partialFormattingFunc(end);
        var insertion = findCommonInsertion(full0, partial0, full1, partial1);
        var separator = extendedSettings.separator || betterDefaultSeparator || context.defaultSeparator || '';
        if (insertion) {
            return insertion.before + partial0 + separator + partial1 + insertion.after;
        }
        return full0 + separator + full1;
    };
    NativeFormatter.prototype.getLargestUnit = function () {
        switch (this.severity) {
            case 7:
            case 6:
            case 5:
                return 'year';
            case 4:
                return 'month';
            case 3:
                return 'week';
            case 2:
                return 'day';
            default:
                return 'time'; // really?
        }
    };
    return NativeFormatter;
}());
function buildFormattingFunc(standardDateProps, extendedSettings, context) {
    var standardDatePropCnt = Object.keys(standardDateProps).length;
    if (standardDatePropCnt === 1 && standardDateProps.timeZoneName === 'short') {
        return function (date) { return (formatTimeZoneOffset(date.timeZoneOffset)); };
    }
    if (standardDatePropCnt === 0 && extendedSettings.week) {
        return function (date) { return (formatWeekNumber(context.computeWeekNumber(date.marker), context.weekText, context.locale, extendedSettings.week)); };
    }
    return buildNativeFormattingFunc(standardDateProps, extendedSettings, context);
}
function buildNativeFormattingFunc(standardDateProps, extendedSettings, context) {
    standardDateProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, standardDateProps); // copy
    extendedSettings = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, extendedSettings); // copy
    sanitizeSettings(standardDateProps, extendedSettings);
    standardDateProps.timeZone = 'UTC'; // we leverage the only guaranteed timeZone for our UTC markers
    var normalFormat = new Intl.DateTimeFormat(context.locale.codes, standardDateProps);
    var zeroFormat; // needed?
    if (extendedSettings.omitZeroMinute) {
        var zeroProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, standardDateProps);
        delete zeroProps.minute; // seconds and ms were already considered in sanitizeSettings
        zeroFormat = new Intl.DateTimeFormat(context.locale.codes, zeroProps);
    }
    return function (date) {
        var marker = date.marker;
        var format;
        if (zeroFormat && !marker.getUTCMinutes()) {
            format = zeroFormat;
        }
        else {
            format = normalFormat;
        }
        var s = format.format(marker);
        return postProcess(s, date, standardDateProps, extendedSettings, context);
    };
}
function sanitizeSettings(standardDateProps, extendedSettings) {
    // deal with a browser inconsistency where formatting the timezone
    // requires that the hour/minute be present.
    if (standardDateProps.timeZoneName) {
        if (!standardDateProps.hour) {
            standardDateProps.hour = '2-digit';
        }
        if (!standardDateProps.minute) {
            standardDateProps.minute = '2-digit';
        }
    }
    // only support short timezone names
    if (standardDateProps.timeZoneName === 'long') {
        standardDateProps.timeZoneName = 'short';
    }
    // if requesting to display seconds, MUST display minutes
    if (extendedSettings.omitZeroMinute && (standardDateProps.second || standardDateProps.millisecond)) {
        delete extendedSettings.omitZeroMinute;
    }
}
function postProcess(s, date, standardDateProps, extendedSettings, context) {
    s = s.replace(LTR_RE, ''); // remove left-to-right control chars. do first. good for other regexes
    if (standardDateProps.timeZoneName === 'short') {
        s = injectTzoStr(s, (context.timeZone === 'UTC' || date.timeZoneOffset == null) ?
            'UTC' : // important to normalize for IE, which does "GMT"
            formatTimeZoneOffset(date.timeZoneOffset));
    }
    if (extendedSettings.omitCommas) {
        s = s.replace(COMMA_RE, '').trim();
    }
    if (extendedSettings.omitZeroMinute) {
        s = s.replace(':00', ''); // zeroFormat doesn't always achieve this
    }
    // ^ do anything that might create adjacent spaces before this point,
    // because MERIDIEM_RE likes to eat up loading spaces
    if (extendedSettings.meridiem === false) {
        s = s.replace(MERIDIEM_RE, '').trim();
    }
    else if (extendedSettings.meridiem === 'narrow') { // a/p
        s = s.replace(MERIDIEM_RE, function (m0, m1) { return m1.toLocaleLowerCase(); });
    }
    else if (extendedSettings.meridiem === 'short') { // am/pm
        s = s.replace(MERIDIEM_RE, function (m0, m1) { return m1.toLocaleLowerCase() + "m"; });
    }
    else if (extendedSettings.meridiem === 'lowercase') { // other meridiem transformers already converted to lowercase
        s = s.replace(MERIDIEM_RE, function (m0) { return m0.toLocaleLowerCase(); });
    }
    s = s.replace(MULTI_SPACE_RE, ' ');
    s = s.trim();
    return s;
}
function injectTzoStr(s, tzoStr) {
    var replaced = false;
    s = s.replace(UTC_RE, function () {
        replaced = true;
        return tzoStr;
    });
    // IE11 doesn't include UTC/GMT in the original string, so append to end
    if (!replaced) {
        s += " " + tzoStr;
    }
    return s;
}
function formatWeekNumber(num, weekText, locale, display) {
    var parts = [];
    if (display === 'narrow') {
        parts.push(weekText);
    }
    else if (display === 'short') {
        parts.push(weekText, ' ');
    }
    // otherwise, considered 'numeric'
    parts.push(locale.simpleNumberFormat.format(num));
    if (locale.options.direction === 'rtl') { // TODO: use control characters instead?
        parts.reverse();
    }
    return parts.join('');
}
// Range Formatting Utils
// 0 = exactly the same
// 1 = different by time
// and bigger
function computeMarkerDiffSeverity(d0, d1, ca) {
    if (ca.getMarkerYear(d0) !== ca.getMarkerYear(d1)) {
        return 5;
    }
    if (ca.getMarkerMonth(d0) !== ca.getMarkerMonth(d1)) {
        return 4;
    }
    if (ca.getMarkerDay(d0) !== ca.getMarkerDay(d1)) {
        return 2;
    }
    if (timeAsMs(d0) !== timeAsMs(d1)) {
        return 1;
    }
    return 0;
}
function computePartialFormattingOptions(options, biggestUnit) {
    var partialOptions = {};
    for (var name_2 in options) {
        if (!(name_2 in STANDARD_DATE_PROP_SEVERITIES) || // not a date part prop (like timeZone)
            STANDARD_DATE_PROP_SEVERITIES[name_2] <= biggestUnit) {
            partialOptions[name_2] = options[name_2];
        }
    }
    return partialOptions;
}
function findCommonInsertion(full0, partial0, full1, partial1) {
    var i0 = 0;
    while (i0 < full0.length) {
        var found0 = full0.indexOf(partial0, i0);
        if (found0 === -1) {
            break;
        }
        var before0 = full0.substr(0, found0);
        i0 = found0 + partial0.length;
        var after0 = full0.substr(i0);
        var i1 = 0;
        while (i1 < full1.length) {
            var found1 = full1.indexOf(partial1, i1);
            if (found1 === -1) {
                break;
            }
            var before1 = full1.substr(0, found1);
            i1 = found1 + partial1.length;
            var after1 = full1.substr(i1);
            if (before0 === before1 && after0 === after1) {
                return {
                    before: before0,
                    after: after0,
                };
            }
        }
    }
    return null;
}

function expandZonedMarker(dateInfo, calendarSystem) {
    var a = calendarSystem.markerToArray(dateInfo.marker);
    return {
        marker: dateInfo.marker,
        timeZoneOffset: dateInfo.timeZoneOffset,
        array: a,
        year: a[0],
        month: a[1],
        day: a[2],
        hour: a[3],
        minute: a[4],
        second: a[5],
        millisecond: a[6],
    };
}

function createVerboseFormattingArg(start, end, context, betterDefaultSeparator) {
    var startInfo = expandZonedMarker(start, context.calendarSystem);
    var endInfo = end ? expandZonedMarker(end, context.calendarSystem) : null;
    return {
        date: startInfo,
        start: startInfo,
        end: endInfo,
        timeZone: context.timeZone,
        localeCodes: context.locale.codes,
        defaultSeparator: betterDefaultSeparator || context.defaultSeparator,
    };
}

/*
TODO: fix the terminology of "formatter" vs "formatting func"
*/
/*
At the time of instantiation, this object does not know which cmd-formatting system it will use.
It receives this at the time of formatting, as a setting.
*/
var CmdFormatter = /** @class */ (function () {
    function CmdFormatter(cmdStr) {
        this.cmdStr = cmdStr;
    }
    CmdFormatter.prototype.format = function (date, context, betterDefaultSeparator) {
        return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
    };
    CmdFormatter.prototype.formatRange = function (start, end, context, betterDefaultSeparator) {
        return context.cmdFormatter(this.cmdStr, createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
    };
    return CmdFormatter;
}());

var FuncFormatter = /** @class */ (function () {
    function FuncFormatter(func) {
        this.func = func;
    }
    FuncFormatter.prototype.format = function (date, context, betterDefaultSeparator) {
        return this.func(createVerboseFormattingArg(date, null, context, betterDefaultSeparator));
    };
    FuncFormatter.prototype.formatRange = function (start, end, context, betterDefaultSeparator) {
        return this.func(createVerboseFormattingArg(start, end, context, betterDefaultSeparator));
    };
    return FuncFormatter;
}());

function createFormatter(input) {
    if (typeof input === 'object' && input) { // non-null object
        return new NativeFormatter(input);
    }
    if (typeof input === 'string') {
        return new CmdFormatter(input);
    }
    if (typeof input === 'function') {
        return new FuncFormatter(input);
    }
    return null;
}

// base options
// ------------
var BASE_OPTION_REFINERS = {
    navLinkDayClick: identity,
    navLinkWeekClick: identity,
    duration: createDuration,
    bootstrapFontAwesome: identity,
    buttonIcons: identity,
    customButtons: identity,
    defaultAllDayEventDuration: createDuration,
    defaultTimedEventDuration: createDuration,
    nextDayThreshold: createDuration,
    scrollTime: createDuration,
    scrollTimeReset: Boolean,
    slotMinTime: createDuration,
    slotMaxTime: createDuration,
    dayPopoverFormat: createFormatter,
    slotDuration: createDuration,
    snapDuration: createDuration,
    headerToolbar: identity,
    footerToolbar: identity,
    defaultRangeSeparator: String,
    titleRangeSeparator: String,
    forceEventDuration: Boolean,
    dayHeaders: Boolean,
    dayHeaderFormat: createFormatter,
    dayHeaderClassNames: identity,
    dayHeaderContent: identity,
    dayHeaderDidMount: identity,
    dayHeaderWillUnmount: identity,
    dayCellClassNames: identity,
    dayCellContent: identity,
    dayCellDidMount: identity,
    dayCellWillUnmount: identity,
    initialView: String,
    aspectRatio: Number,
    weekends: Boolean,
    weekNumberCalculation: identity,
    weekNumbers: Boolean,
    weekNumberClassNames: identity,
    weekNumberContent: identity,
    weekNumberDidMount: identity,
    weekNumberWillUnmount: identity,
    editable: Boolean,
    viewClassNames: identity,
    viewDidMount: identity,
    viewWillUnmount: identity,
    nowIndicator: Boolean,
    nowIndicatorClassNames: identity,
    nowIndicatorContent: identity,
    nowIndicatorDidMount: identity,
    nowIndicatorWillUnmount: identity,
    showNonCurrentDates: Boolean,
    lazyFetching: Boolean,
    startParam: String,
    endParam: String,
    timeZoneParam: String,
    timeZone: String,
    locales: identity,
    locale: identity,
    themeSystem: String,
    dragRevertDuration: Number,
    dragScroll: Boolean,
    allDayMaintainDuration: Boolean,
    unselectAuto: Boolean,
    dropAccept: identity,
    eventOrder: parseFieldSpecs,
    eventOrderStrict: Boolean,
    handleWindowResize: Boolean,
    windowResizeDelay: Number,
    longPressDelay: Number,
    eventDragMinDistance: Number,
    expandRows: Boolean,
    height: identity,
    contentHeight: identity,
    direction: String,
    weekNumberFormat: createFormatter,
    eventResizableFromStart: Boolean,
    displayEventTime: Boolean,
    displayEventEnd: Boolean,
    weekText: String,
    progressiveEventRendering: Boolean,
    businessHours: identity,
    initialDate: identity,
    now: identity,
    eventDataTransform: identity,
    stickyHeaderDates: identity,
    stickyFooterScrollbar: identity,
    viewHeight: identity,
    defaultAllDay: Boolean,
    eventSourceFailure: identity,
    eventSourceSuccess: identity,
    eventDisplay: String,
    eventStartEditable: Boolean,
    eventDurationEditable: Boolean,
    eventOverlap: identity,
    eventConstraint: identity,
    eventAllow: identity,
    eventBackgroundColor: String,
    eventBorderColor: String,
    eventTextColor: String,
    eventColor: String,
    eventClassNames: identity,
    eventContent: identity,
    eventDidMount: identity,
    eventWillUnmount: identity,
    selectConstraint: identity,
    selectOverlap: identity,
    selectAllow: identity,
    droppable: Boolean,
    unselectCancel: String,
    slotLabelFormat: identity,
    slotLaneClassNames: identity,
    slotLaneContent: identity,
    slotLaneDidMount: identity,
    slotLaneWillUnmount: identity,
    slotLabelClassNames: identity,
    slotLabelContent: identity,
    slotLabelDidMount: identity,
    slotLabelWillUnmount: identity,
    dayMaxEvents: identity,
    dayMaxEventRows: identity,
    dayMinWidth: Number,
    slotLabelInterval: createDuration,
    allDayText: String,
    allDayClassNames: identity,
    allDayContent: identity,
    allDayDidMount: identity,
    allDayWillUnmount: identity,
    slotMinWidth: Number,
    navLinks: Boolean,
    eventTimeFormat: createFormatter,
    rerenderDelay: Number,
    moreLinkText: identity,
    selectMinDistance: Number,
    selectable: Boolean,
    selectLongPressDelay: Number,
    eventLongPressDelay: Number,
    selectMirror: Boolean,
    eventMaxStack: Number,
    eventMinHeight: Number,
    eventMinWidth: Number,
    eventShortHeight: Number,
    slotEventOverlap: Boolean,
    plugins: identity,
    firstDay: Number,
    dayCount: Number,
    dateAlignment: String,
    dateIncrement: createDuration,
    hiddenDays: identity,
    monthMode: Boolean,
    fixedWeekCount: Boolean,
    validRange: identity,
    visibleRange: identity,
    titleFormat: identity,
    // only used by list-view, but languages define the value, so we need it in base options
    noEventsText: String,
    moreLinkClick: identity,
    moreLinkClassNames: identity,
    moreLinkContent: identity,
    moreLinkDidMount: identity,
    moreLinkWillUnmount: identity,
};
// do NOT give a type here. need `typeof BASE_OPTION_DEFAULTS` to give real results.
// raw values.
var BASE_OPTION_DEFAULTS = {
    eventDisplay: 'auto',
    defaultRangeSeparator: ' - ',
    titleRangeSeparator: ' \u2013 ',
    defaultTimedEventDuration: '01:00:00',
    defaultAllDayEventDuration: { day: 1 },
    forceEventDuration: false,
    nextDayThreshold: '00:00:00',
    dayHeaders: true,
    initialView: '',
    aspectRatio: 1.35,
    headerToolbar: {
        start: 'title',
        center: '',
        end: 'today prev,next',
    },
    weekends: true,
    weekNumbers: false,
    weekNumberCalculation: 'local',
    editable: false,
    nowIndicator: false,
    scrollTime: '06:00:00',
    scrollTimeReset: true,
    slotMinTime: '00:00:00',
    slotMaxTime: '24:00:00',
    showNonCurrentDates: true,
    lazyFetching: true,
    startParam: 'start',
    endParam: 'end',
    timeZoneParam: 'timeZone',
    timeZone: 'local',
    locales: [],
    locale: '',
    themeSystem: 'standard',
    dragRevertDuration: 500,
    dragScroll: true,
    allDayMaintainDuration: false,
    unselectAuto: true,
    dropAccept: '*',
    eventOrder: 'start,-duration,allDay,title',
    dayPopoverFormat: { month: 'long', day: 'numeric', year: 'numeric' },
    handleWindowResize: true,
    windowResizeDelay: 100,
    longPressDelay: 1000,
    eventDragMinDistance: 5,
    expandRows: false,
    navLinks: false,
    selectable: false,
    eventMinHeight: 15,
    eventMinWidth: 30,
    eventShortHeight: 30,
};
// calendar listeners
// ------------------
var CALENDAR_LISTENER_REFINERS = {
    datesSet: identity,
    eventsSet: identity,
    eventAdd: identity,
    eventChange: identity,
    eventRemove: identity,
    windowResize: identity,
    eventClick: identity,
    eventMouseEnter: identity,
    eventMouseLeave: identity,
    select: identity,
    unselect: identity,
    loading: identity,
    // internal
    _unmount: identity,
    _beforeprint: identity,
    _afterprint: identity,
    _noEventDrop: identity,
    _noEventResize: identity,
    _resize: identity,
    _scrollRequest: identity,
};
// calendar-specific options
// -------------------------
var CALENDAR_OPTION_REFINERS = {
    buttonText: identity,
    views: identity,
    plugins: identity,
    initialEvents: identity,
    events: identity,
    eventSources: identity,
};
var COMPLEX_OPTION_COMPARATORS = {
    headerToolbar: isBoolComplexEqual,
    footerToolbar: isBoolComplexEqual,
    buttonText: isBoolComplexEqual,
    buttonIcons: isBoolComplexEqual,
};
function isBoolComplexEqual(a, b) {
    if (typeof a === 'object' && typeof b === 'object' && a && b) { // both non-null objects
        return isPropsEqual(a, b);
    }
    return a === b;
}
// view-specific options
// ---------------------
var VIEW_OPTION_REFINERS = {
    type: String,
    component: identity,
    buttonText: String,
    buttonTextKey: String,
    dateProfileGeneratorClass: identity,
    usesMinMaxTime: Boolean,
    classNames: identity,
    content: identity,
    didMount: identity,
    willUnmount: identity,
};
// util funcs
// ----------------------------------------------------------------------------------------------------
function mergeRawOptions(optionSets) {
    return mergeProps(optionSets, COMPLEX_OPTION_COMPARATORS);
}
function refineProps(input, refiners) {
    var refined = {};
    var extra = {};
    for (var propName in refiners) {
        if (propName in input) {
            refined[propName] = refiners[propName](input[propName]);
        }
    }
    for (var propName in input) {
        if (!(propName in refiners)) {
            extra[propName] = input[propName];
        }
    }
    return { refined: refined, extra: extra };
}
function identity(raw) {
    return raw;
}

function parseEvents(rawEvents, eventSource, context, allowOpenRange) {
    var eventStore = createEmptyEventStore();
    var eventRefiners = buildEventRefiners(context);
    for (var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
        var rawEvent = rawEvents_1[_i];
        var tuple = parseEvent(rawEvent, eventSource, context, allowOpenRange, eventRefiners);
        if (tuple) {
            eventTupleToStore(tuple, eventStore);
        }
    }
    return eventStore;
}
function eventTupleToStore(tuple, eventStore) {
    if (eventStore === void 0) { eventStore = createEmptyEventStore(); }
    eventStore.defs[tuple.def.defId] = tuple.def;
    if (tuple.instance) {
        eventStore.instances[tuple.instance.instanceId] = tuple.instance;
    }
    return eventStore;
}
// retrieves events that have the same groupId as the instance specified by `instanceId`
// or they are the same as the instance.
// why might instanceId not be in the store? an event from another calendar?
function getRelevantEvents(eventStore, instanceId) {
    var instance = eventStore.instances[instanceId];
    if (instance) {
        var def_1 = eventStore.defs[instance.defId];
        // get events/instances with same group
        var newStore = filterEventStoreDefs(eventStore, function (lookDef) { return isEventDefsGrouped(def_1, lookDef); });
        // add the original
        // TODO: wish we could use eventTupleToStore or something like it
        newStore.defs[def_1.defId] = def_1;
        newStore.instances[instance.instanceId] = instance;
        return newStore;
    }
    return createEmptyEventStore();
}
function isEventDefsGrouped(def0, def1) {
    return Boolean(def0.groupId && def0.groupId === def1.groupId);
}
function createEmptyEventStore() {
    return { defs: {}, instances: {} };
}
function mergeEventStores(store0, store1) {
    return {
        defs: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, store0.defs), store1.defs),
        instances: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, store0.instances), store1.instances),
    };
}
function filterEventStoreDefs(eventStore, filterFunc) {
    var defs = filterHash(eventStore.defs, filterFunc);
    var instances = filterHash(eventStore.instances, function (instance) { return (defs[instance.defId] // still exists?
    ); });
    return { defs: defs, instances: instances };
}
function excludeSubEventStore(master, sub) {
    var defs = master.defs, instances = master.instances;
    var filteredDefs = {};
    var filteredInstances = {};
    for (var defId in defs) {
        if (!sub.defs[defId]) { // not explicitly excluded
            filteredDefs[defId] = defs[defId];
        }
    }
    for (var instanceId in instances) {
        if (!sub.instances[instanceId] && // not explicitly excluded
            filteredDefs[instances[instanceId].defId] // def wasn't filtered away
        ) {
            filteredInstances[instanceId] = instances[instanceId];
        }
    }
    return {
        defs: filteredDefs,
        instances: filteredInstances,
    };
}

function normalizeConstraint(input, context) {
    if (Array.isArray(input)) {
        return parseEvents(input, null, context, true); // allowOpenRange=true
    }
    if (typeof input === 'object' && input) { // non-null object
        return parseEvents([input], null, context, true); // allowOpenRange=true
    }
    if (input != null) {
        return String(input);
    }
    return null;
}

function parseClassNames(raw) {
    if (Array.isArray(raw)) {
        return raw;
    }
    if (typeof raw === 'string') {
        return raw.split(/\s+/);
    }
    return [];
}

// TODO: better called "EventSettings" or "EventConfig"
// TODO: move this file into structs
// TODO: separate constraint/overlap/allow, because selection uses only that, not other props
var EVENT_UI_REFINERS = {
    display: String,
    editable: Boolean,
    startEditable: Boolean,
    durationEditable: Boolean,
    constraint: identity,
    overlap: identity,
    allow: identity,
    className: parseClassNames,
    classNames: parseClassNames,
    color: String,
    backgroundColor: String,
    borderColor: String,
    textColor: String,
};
var EMPTY_EVENT_UI = {
    display: null,
    startEditable: null,
    durationEditable: null,
    constraints: [],
    overlap: null,
    allows: [],
    backgroundColor: '',
    borderColor: '',
    textColor: '',
    classNames: [],
};
function createEventUi(refined, context) {
    var constraint = normalizeConstraint(refined.constraint, context);
    return {
        display: refined.display || null,
        startEditable: refined.startEditable != null ? refined.startEditable : refined.editable,
        durationEditable: refined.durationEditable != null ? refined.durationEditable : refined.editable,
        constraints: constraint != null ? [constraint] : [],
        overlap: refined.overlap != null ? refined.overlap : null,
        allows: refined.allow != null ? [refined.allow] : [],
        backgroundColor: refined.backgroundColor || refined.color || '',
        borderColor: refined.borderColor || refined.color || '',
        textColor: refined.textColor || '',
        classNames: (refined.className || []).concat(refined.classNames || []),
    };
}
// TODO: prevent against problems with <2 args!
function combineEventUis(uis) {
    return uis.reduce(combineTwoEventUis, EMPTY_EVENT_UI);
}
function combineTwoEventUis(item0, item1) {
    return {
        display: item1.display != null ? item1.display : item0.display,
        startEditable: item1.startEditable != null ? item1.startEditable : item0.startEditable,
        durationEditable: item1.durationEditable != null ? item1.durationEditable : item0.durationEditable,
        constraints: item0.constraints.concat(item1.constraints),
        overlap: typeof item1.overlap === 'boolean' ? item1.overlap : item0.overlap,
        allows: item0.allows.concat(item1.allows),
        backgroundColor: item1.backgroundColor || item0.backgroundColor,
        borderColor: item1.borderColor || item0.borderColor,
        textColor: item1.textColor || item0.textColor,
        classNames: item0.classNames.concat(item1.classNames),
    };
}

var EVENT_NON_DATE_REFINERS = {
    id: String,
    groupId: String,
    title: String,
    url: String,
};
var EVENT_DATE_REFINERS = {
    start: identity,
    end: identity,
    date: identity,
    allDay: Boolean,
};
var EVENT_REFINERS = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, EVENT_NON_DATE_REFINERS), EVENT_DATE_REFINERS), { extendedProps: identity });
function parseEvent(raw, eventSource, context, allowOpenRange, refiners) {
    if (refiners === void 0) { refiners = buildEventRefiners(context); }
    var _a = refineEventDef(raw, context, refiners), refined = _a.refined, extra = _a.extra;
    var defaultAllDay = computeIsDefaultAllDay(eventSource, context);
    var recurringRes = parseRecurring(refined, defaultAllDay, context.dateEnv, context.pluginHooks.recurringTypes);
    if (recurringRes) {
        var def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', recurringRes.allDay, Boolean(recurringRes.duration), context);
        def.recurringDef = {
            typeId: recurringRes.typeId,
            typeData: recurringRes.typeData,
            duration: recurringRes.duration,
        };
        return { def: def, instance: null };
    }
    var singleRes = parseSingle(refined, defaultAllDay, context, allowOpenRange);
    if (singleRes) {
        var def = parseEventDef(refined, extra, eventSource ? eventSource.sourceId : '', singleRes.allDay, singleRes.hasEnd, context);
        var instance = createEventInstance(def.defId, singleRes.range, singleRes.forcedStartTzo, singleRes.forcedEndTzo);
        return { def: def, instance: instance };
    }
    return null;
}
function refineEventDef(raw, context, refiners) {
    if (refiners === void 0) { refiners = buildEventRefiners(context); }
    return refineProps(raw, refiners);
}
function buildEventRefiners(context) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, EVENT_UI_REFINERS), EVENT_REFINERS), context.pluginHooks.eventRefiners);
}
/*
Will NOT populate extendedProps with the leftover properties.
Will NOT populate date-related props.
*/
function parseEventDef(refined, extra, sourceId, allDay, hasEnd, context) {
    var def = {
        title: refined.title || '',
        groupId: refined.groupId || '',
        publicId: refined.id || '',
        url: refined.url || '',
        recurringDef: null,
        defId: guid(),
        sourceId: sourceId,
        allDay: allDay,
        hasEnd: hasEnd,
        ui: createEventUi(refined, context),
        extendedProps: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, (refined.extendedProps || {})), extra),
    };
    for (var _i = 0, _a = context.pluginHooks.eventDefMemberAdders; _i < _a.length; _i++) {
        var memberAdder = _a[_i];
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(def, memberAdder(refined));
    }
    // help out EventApi from having user modify props
    Object.freeze(def.ui.classNames);
    Object.freeze(def.extendedProps);
    return def;
}
function parseSingle(refined, defaultAllDay, context, allowOpenRange) {
    var allDay = refined.allDay;
    var startMeta;
    var startMarker = null;
    var hasEnd = false;
    var endMeta;
    var endMarker = null;
    var startInput = refined.start != null ? refined.start : refined.date;
    startMeta = context.dateEnv.createMarkerMeta(startInput);
    if (startMeta) {
        startMarker = startMeta.marker;
    }
    else if (!allowOpenRange) {
        return null;
    }
    if (refined.end != null) {
        endMeta = context.dateEnv.createMarkerMeta(refined.end);
    }
    if (allDay == null) {
        if (defaultAllDay != null) {
            allDay = defaultAllDay;
        }
        else {
            // fall back to the date props LAST
            allDay = (!startMeta || startMeta.isTimeUnspecified) &&
                (!endMeta || endMeta.isTimeUnspecified);
        }
    }
    if (allDay && startMarker) {
        startMarker = startOfDay(startMarker);
    }
    if (endMeta) {
        endMarker = endMeta.marker;
        if (allDay) {
            endMarker = startOfDay(endMarker);
        }
        if (startMarker && endMarker <= startMarker) {
            endMarker = null;
        }
    }
    if (endMarker) {
        hasEnd = true;
    }
    else if (!allowOpenRange) {
        hasEnd = context.options.forceEventDuration || false;
        endMarker = context.dateEnv.add(startMarker, allDay ?
            context.options.defaultAllDayEventDuration :
            context.options.defaultTimedEventDuration);
    }
    return {
        allDay: allDay,
        hasEnd: hasEnd,
        range: { start: startMarker, end: endMarker },
        forcedStartTzo: startMeta ? startMeta.forcedTzo : null,
        forcedEndTzo: endMeta ? endMeta.forcedTzo : null,
    };
}
function computeIsDefaultAllDay(eventSource, context) {
    var res = null;
    if (eventSource) {
        res = eventSource.defaultAllDay;
    }
    if (res == null) {
        res = context.options.defaultAllDay;
    }
    return res;
}

/* Date stuff that doesn't belong in datelib core
----------------------------------------------------------------------------------------------------------------------*/
// given a timed range, computes an all-day range that has the same exact duration,
// but whose start time is aligned with the start of the day.
function computeAlignedDayRange(timedRange) {
    var dayCnt = Math.floor(diffDays(timedRange.start, timedRange.end)) || 1;
    var start = startOfDay(timedRange.start);
    var end = addDays(start, dayCnt);
    return { start: start, end: end };
}
// given a timed range, computes an all-day range based on how for the end date bleeds into the next day
// TODO: give nextDayThreshold a default arg
function computeVisibleDayRange(timedRange, nextDayThreshold) {
    if (nextDayThreshold === void 0) { nextDayThreshold = createDuration(0); }
    var startDay = null;
    var endDay = null;
    if (timedRange.end) {
        endDay = startOfDay(timedRange.end);
        var endTimeMS = timedRange.end.valueOf() - endDay.valueOf(); // # of milliseconds into `endDay`
        // If the end time is actually inclusively part of the next day and is equal to or
        // beyond the next day threshold, adjust the end to be the exclusive end of `endDay`.
        // Otherwise, leaving it as inclusive will cause it to exclude `endDay`.
        if (endTimeMS && endTimeMS >= asRoughMs(nextDayThreshold)) {
            endDay = addDays(endDay, 1);
        }
    }
    if (timedRange.start) {
        startDay = startOfDay(timedRange.start); // the beginning of the day the range starts
        // If end is within `startDay` but not past nextDayThreshold, assign the default duration of one day.
        if (endDay && endDay <= startDay) {
            endDay = addDays(startDay, 1);
        }
    }
    return { start: startDay, end: endDay };
}
// spans from one day into another?
function isMultiDayRange(range) {
    var visibleRange = computeVisibleDayRange(range);
    return diffDays(visibleRange.start, visibleRange.end) > 1;
}
function diffDates(date0, date1, dateEnv, largeUnit) {
    if (largeUnit === 'year') {
        return createDuration(dateEnv.diffWholeYears(date0, date1), 'year');
    }
    if (largeUnit === 'month') {
        return createDuration(dateEnv.diffWholeMonths(date0, date1), 'month');
    }
    return diffDayAndTime(date0, date1); // returns a duration
}

function parseRange(input, dateEnv) {
    var start = null;
    var end = null;
    if (input.start) {
        start = dateEnv.createMarker(input.start);
    }
    if (input.end) {
        end = dateEnv.createMarker(input.end);
    }
    if (!start && !end) {
        return null;
    }
    if (start && end && end < start) {
        return null;
    }
    return { start: start, end: end };
}
// SIDE-EFFECT: will mutate ranges.
// Will return a new array result.
function invertRanges(ranges, constraintRange) {
    var invertedRanges = [];
    var start = constraintRange.start; // the end of the previous range. the start of the new range
    var i;
    var dateRange;
    // ranges need to be in order. required for our date-walking algorithm
    ranges.sort(compareRanges);
    for (i = 0; i < ranges.length; i += 1) {
        dateRange = ranges[i];
        // add the span of time before the event (if there is any)
        if (dateRange.start > start) { // compare millisecond time (skip any ambig logic)
            invertedRanges.push({ start: start, end: dateRange.start });
        }
        if (dateRange.end > start) {
            start = dateRange.end;
        }
    }
    // add the span of time after the last event (if there is any)
    if (start < constraintRange.end) { // compare millisecond time (skip any ambig logic)
        invertedRanges.push({ start: start, end: constraintRange.end });
    }
    return invertedRanges;
}
function compareRanges(range0, range1) {
    return range0.start.valueOf() - range1.start.valueOf(); // earlier ranges go first
}
function intersectRanges(range0, range1) {
    var start = range0.start, end = range0.end;
    var newRange = null;
    if (range1.start !== null) {
        if (start === null) {
            start = range1.start;
        }
        else {
            start = new Date(Math.max(start.valueOf(), range1.start.valueOf()));
        }
    }
    if (range1.end != null) {
        if (end === null) {
            end = range1.end;
        }
        else {
            end = new Date(Math.min(end.valueOf(), range1.end.valueOf()));
        }
    }
    if (start === null || end === null || start < end) {
        newRange = { start: start, end: end };
    }
    return newRange;
}
function rangesEqual(range0, range1) {
    return (range0.start === null ? null : range0.start.valueOf()) === (range1.start === null ? null : range1.start.valueOf()) &&
        (range0.end === null ? null : range0.end.valueOf()) === (range1.end === null ? null : range1.end.valueOf());
}
function rangesIntersect(range0, range1) {
    return (range0.end === null || range1.start === null || range0.end > range1.start) &&
        (range0.start === null || range1.end === null || range0.start < range1.end);
}
function rangeContainsRange(outerRange, innerRange) {
    return (outerRange.start === null || (innerRange.start !== null && innerRange.start >= outerRange.start)) &&
        (outerRange.end === null || (innerRange.end !== null && innerRange.end <= outerRange.end));
}
function rangeContainsMarker(range, date) {
    return (range.start === null || date >= range.start) &&
        (range.end === null || date < range.end);
}
// If the given date is not within the given range, move it inside.
// (If it's past the end, make it one millisecond before the end).
function constrainMarkerToRange(date, range) {
    if (range.start != null && date < range.start) {
        return range.start;
    }
    if (range.end != null && date >= range.end) {
        return new Date(range.end.valueOf() - 1);
    }
    return date;
}

/*
Specifying nextDayThreshold signals that all-day ranges should be sliced.
*/
function sliceEventStore(eventStore, eventUiBases, framingRange, nextDayThreshold) {
    var inverseBgByGroupId = {};
    var inverseBgByDefId = {};
    var defByGroupId = {};
    var bgRanges = [];
    var fgRanges = [];
    var eventUis = compileEventUis(eventStore.defs, eventUiBases);
    for (var defId in eventStore.defs) {
        var def = eventStore.defs[defId];
        var ui = eventUis[def.defId];
        if (ui.display === 'inverse-background') {
            if (def.groupId) {
                inverseBgByGroupId[def.groupId] = [];
                if (!defByGroupId[def.groupId]) {
                    defByGroupId[def.groupId] = def;
                }
            }
            else {
                inverseBgByDefId[defId] = [];
            }
        }
    }
    for (var instanceId in eventStore.instances) {
        var instance = eventStore.instances[instanceId];
        var def = eventStore.defs[instance.defId];
        var ui = eventUis[def.defId];
        var origRange = instance.range;
        var normalRange = (!def.allDay && nextDayThreshold) ?
            computeVisibleDayRange(origRange, nextDayThreshold) :
            origRange;
        var slicedRange = intersectRanges(normalRange, framingRange);
        if (slicedRange) {
            if (ui.display === 'inverse-background') {
                if (def.groupId) {
                    inverseBgByGroupId[def.groupId].push(slicedRange);
                }
                else {
                    inverseBgByDefId[instance.defId].push(slicedRange);
                }
            }
            else if (ui.display !== 'none') {
                (ui.display === 'background' ? bgRanges : fgRanges).push({
                    def: def,
                    ui: ui,
                    instance: instance,
                    range: slicedRange,
                    isStart: normalRange.start && normalRange.start.valueOf() === slicedRange.start.valueOf(),
                    isEnd: normalRange.end && normalRange.end.valueOf() === slicedRange.end.valueOf(),
                });
            }
        }
    }
    for (var groupId in inverseBgByGroupId) { // BY GROUP
        var ranges = inverseBgByGroupId[groupId];
        var invertedRanges = invertRanges(ranges, framingRange);
        for (var _i = 0, invertedRanges_1 = invertedRanges; _i < invertedRanges_1.length; _i++) {
            var invertedRange = invertedRanges_1[_i];
            var def = defByGroupId[groupId];
            var ui = eventUis[def.defId];
            bgRanges.push({
                def: def,
                ui: ui,
                instance: null,
                range: invertedRange,
                isStart: false,
                isEnd: false,
            });
        }
    }
    for (var defId in inverseBgByDefId) {
        var ranges = inverseBgByDefId[defId];
        var invertedRanges = invertRanges(ranges, framingRange);
        for (var _a = 0, invertedRanges_2 = invertedRanges; _a < invertedRanges_2.length; _a++) {
            var invertedRange = invertedRanges_2[_a];
            bgRanges.push({
                def: eventStore.defs[defId],
                ui: eventUis[defId],
                instance: null,
                range: invertedRange,
                isStart: false,
                isEnd: false,
            });
        }
    }
    return { bg: bgRanges, fg: fgRanges };
}
function hasBgRendering(def) {
    return def.ui.display === 'background' || def.ui.display === 'inverse-background';
}
function setElSeg(el, seg) {
    el.fcSeg = seg;
}
function getElSeg(el) {
    return el.fcSeg ||
        el.parentNode.fcSeg || // for the harness
        null;
}
// event ui computation
function compileEventUis(eventDefs, eventUiBases) {
    return mapHash(eventDefs, function (eventDef) { return compileEventUi(eventDef, eventUiBases); });
}
function compileEventUi(eventDef, eventUiBases) {
    var uis = [];
    if (eventUiBases['']) {
        uis.push(eventUiBases['']);
    }
    if (eventUiBases[eventDef.defId]) {
        uis.push(eventUiBases[eventDef.defId]);
    }
    uis.push(eventDef.ui);
    return combineEventUis(uis);
}
function sortEventSegs(segs, eventOrderSpecs) {
    var objs = segs.map(buildSegCompareObj);
    objs.sort(function (obj0, obj1) { return compareByFieldSpecs(obj0, obj1, eventOrderSpecs); });
    return objs.map(function (c) { return c._seg; });
}
// returns a object with all primitive props that can be compared
function buildSegCompareObj(seg) {
    var eventRange = seg.eventRange;
    var eventDef = eventRange.def;
    var range = eventRange.instance ? eventRange.instance.range : eventRange.range;
    var start = range.start ? range.start.valueOf() : 0; // TODO: better support for open-range events
    var end = range.end ? range.end.valueOf() : 0; // "
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, eventDef.extendedProps), eventDef), { id: eventDef.publicId, start: start,
        end: end, duration: end - start, allDay: Number(eventDef.allDay), _seg: seg });
}
function computeSegDraggable(seg, context) {
    var pluginHooks = context.pluginHooks;
    var transformers = pluginHooks.isDraggableTransformers;
    var _a = seg.eventRange, def = _a.def, ui = _a.ui;
    var val = ui.startEditable;
    for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
        var transformer = transformers_1[_i];
        val = transformer(val, def, ui, context);
    }
    return val;
}
function computeSegStartResizable(seg, context) {
    return seg.isStart && seg.eventRange.ui.durationEditable && context.options.eventResizableFromStart;
}
function computeSegEndResizable(seg, context) {
    return seg.isEnd && seg.eventRange.ui.durationEditable;
}
function buildSegTimeText(seg, timeFormat, context, defaultDisplayEventTime, // defaults to true
defaultDisplayEventEnd, // defaults to true
startOverride, endOverride) {
    var dateEnv = context.dateEnv, options = context.options;
    var displayEventTime = options.displayEventTime, displayEventEnd = options.displayEventEnd;
    var eventDef = seg.eventRange.def;
    var eventInstance = seg.eventRange.instance;
    if (displayEventTime == null) {
        displayEventTime = defaultDisplayEventTime !== false;
    }
    if (displayEventEnd == null) {
        displayEventEnd = defaultDisplayEventEnd !== false;
    }
    var wholeEventStart = eventInstance.range.start;
    var wholeEventEnd = eventInstance.range.end;
    var segStart = startOverride || seg.start || seg.eventRange.range.start;
    var segEnd = endOverride || seg.end || seg.eventRange.range.end;
    var isStartDay = startOfDay(wholeEventStart).valueOf() === startOfDay(segStart).valueOf();
    var isEndDay = startOfDay(addMs(wholeEventEnd, -1)).valueOf() === startOfDay(addMs(segEnd, -1)).valueOf();
    if (displayEventTime && !eventDef.allDay && (isStartDay || isEndDay)) {
        segStart = isStartDay ? wholeEventStart : segStart;
        segEnd = isEndDay ? wholeEventEnd : segEnd;
        if (displayEventEnd && eventDef.hasEnd) {
            return dateEnv.formatRange(segStart, segEnd, timeFormat, {
                forcedStartTzo: startOverride ? null : eventInstance.forcedStartTzo,
                forcedEndTzo: endOverride ? null : eventInstance.forcedEndTzo,
            });
        }
        return dateEnv.format(segStart, timeFormat, {
            forcedTzo: startOverride ? null : eventInstance.forcedStartTzo,
        });
    }
    return '';
}
function getSegMeta(seg, todayRange, nowDate) {
    var segRange = seg.eventRange.range;
    return {
        isPast: segRange.end < (nowDate || todayRange.start),
        isFuture: segRange.start >= (nowDate || todayRange.end),
        isToday: todayRange && rangeContainsMarker(todayRange, segRange.start),
    };
}
function getEventClassNames(props) {
    var classNames = ['fc-event'];
    if (props.isMirror) {
        classNames.push('fc-event-mirror');
    }
    if (props.isDraggable) {
        classNames.push('fc-event-draggable');
    }
    if (props.isStartResizable || props.isEndResizable) {
        classNames.push('fc-event-resizable');
    }
    if (props.isDragging) {
        classNames.push('fc-event-dragging');
    }
    if (props.isResizing) {
        classNames.push('fc-event-resizing');
    }
    if (props.isSelected) {
        classNames.push('fc-event-selected');
    }
    if (props.isStart) {
        classNames.push('fc-event-start');
    }
    if (props.isEnd) {
        classNames.push('fc-event-end');
    }
    if (props.isPast) {
        classNames.push('fc-event-past');
    }
    if (props.isToday) {
        classNames.push('fc-event-today');
    }
    if (props.isFuture) {
        classNames.push('fc-event-future');
    }
    return classNames;
}
function buildEventRangeKey(eventRange) {
    return eventRange.instance
        ? eventRange.instance.instanceId
        : eventRange.def.defId + ":" + eventRange.range.start.toISOString();
    // inverse-background events don't have specific instances. TODO: better solution
}

var STANDARD_PROPS = {
    start: identity,
    end: identity,
    allDay: Boolean,
};
function parseDateSpan(raw, dateEnv, defaultDuration) {
    var span = parseOpenDateSpan(raw, dateEnv);
    var range = span.range;
    if (!range.start) {
        return null;
    }
    if (!range.end) {
        if (defaultDuration == null) {
            return null;
        }
        range.end = dateEnv.add(range.start, defaultDuration);
    }
    return span;
}
/*
TODO: somehow combine with parseRange?
Will return null if the start/end props were present but parsed invalidly.
*/
function parseOpenDateSpan(raw, dateEnv) {
    var _a = refineProps(raw, STANDARD_PROPS), standardProps = _a.refined, extra = _a.extra;
    var startMeta = standardProps.start ? dateEnv.createMarkerMeta(standardProps.start) : null;
    var endMeta = standardProps.end ? dateEnv.createMarkerMeta(standardProps.end) : null;
    var allDay = standardProps.allDay;
    if (allDay == null) {
        allDay = (startMeta && startMeta.isTimeUnspecified) &&
            (!endMeta || endMeta.isTimeUnspecified);
    }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ range: {
            start: startMeta ? startMeta.marker : null,
            end: endMeta ? endMeta.marker : null,
        }, allDay: allDay }, extra);
}
function isDateSpansEqual(span0, span1) {
    return rangesEqual(span0.range, span1.range) &&
        span0.allDay === span1.allDay &&
        isSpanPropsEqual(span0, span1);
}
// the NON-DATE-RELATED props
function isSpanPropsEqual(span0, span1) {
    for (var propName in span1) {
        if (propName !== 'range' && propName !== 'allDay') {
            if (span0[propName] !== span1[propName]) {
                return false;
            }
        }
    }
    // are there any props that span0 has that span1 DOESN'T have?
    // both have range/allDay, so no need to special-case.
    for (var propName in span0) {
        if (!(propName in span1)) {
            return false;
        }
    }
    return true;
}
function buildDateSpanApi(span, dateEnv) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, buildRangeApi(span.range, dateEnv, span.allDay)), { allDay: span.allDay });
}
function buildRangeApiWithTimeZone(range, dateEnv, omitTime) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, buildRangeApi(range, dateEnv, omitTime)), { timeZone: dateEnv.timeZone });
}
function buildRangeApi(range, dateEnv, omitTime) {
    return {
        start: dateEnv.toDate(range.start),
        end: dateEnv.toDate(range.end),
        startStr: dateEnv.formatIso(range.start, { omitTime: omitTime }),
        endStr: dateEnv.formatIso(range.end, { omitTime: omitTime }),
    };
}
function fabricateEventRange(dateSpan, eventUiBases, context) {
    var res = refineEventDef({ editable: false }, context);
    var def = parseEventDef(res.refined, res.extra, '', // sourceId
    dateSpan.allDay, true, // hasEnd
    context);
    return {
        def: def,
        ui: compileEventUi(def, eventUiBases),
        instance: createEventInstance(def.defId, dateSpan.range),
        range: dateSpan.range,
        isStart: true,
        isEnd: true,
    };
}

function triggerDateSelect(selection, pev, context) {
    context.emitter.trigger('select', (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, buildDateSpanApiWithContext(selection, context)), { jsEvent: pev ? pev.origEvent : null, view: context.viewApi || context.calendarApi.view }));
}
function triggerDateUnselect(pev, context) {
    context.emitter.trigger('unselect', {
        jsEvent: pev ? pev.origEvent : null,
        view: context.viewApi || context.calendarApi.view,
    });
}
function buildDateSpanApiWithContext(dateSpan, context) {
    var props = {};
    for (var _i = 0, _a = context.pluginHooks.dateSpanTransforms; _i < _a.length; _i++) {
        var transform = _a[_i];
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(props, transform(dateSpan, context));
    }
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(props, buildDateSpanApi(dateSpan, context.dateEnv));
    return props;
}
// Given an event's allDay status and start date, return what its fallback end date should be.
// TODO: rename to computeDefaultEventEnd
function getDefaultEventEnd(allDay, marker, context) {
    var dateEnv = context.dateEnv, options = context.options;
    var end = marker;
    if (allDay) {
        end = startOfDay(end);
        end = dateEnv.add(end, options.defaultAllDayEventDuration);
    }
    else {
        end = dateEnv.add(end, options.defaultTimedEventDuration);
    }
    return end;
}

// applies the mutation to ALL defs/instances within the event store
function applyMutationToEventStore(eventStore, eventConfigBase, mutation, context) {
    var eventConfigs = compileEventUis(eventStore.defs, eventConfigBase);
    var dest = createEmptyEventStore();
    for (var defId in eventStore.defs) {
        var def = eventStore.defs[defId];
        dest.defs[defId] = applyMutationToEventDef(def, eventConfigs[defId], mutation, context);
    }
    for (var instanceId in eventStore.instances) {
        var instance = eventStore.instances[instanceId];
        var def = dest.defs[instance.defId]; // important to grab the newly modified def
        dest.instances[instanceId] = applyMutationToEventInstance(instance, def, eventConfigs[instance.defId], mutation, context);
    }
    return dest;
}
function applyMutationToEventDef(eventDef, eventConfig, mutation, context) {
    var standardProps = mutation.standardProps || {};
    // if hasEnd has not been specified, guess a good value based on deltas.
    // if duration will change, there's no way the default duration will persist,
    // and thus, we need to mark the event as having a real end
    if (standardProps.hasEnd == null &&
        eventConfig.durationEditable &&
        (mutation.startDelta || mutation.endDelta)) {
        standardProps.hasEnd = true; // TODO: is this mutation okay?
    }
    var copy = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, eventDef), standardProps), { ui: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, eventDef.ui), standardProps.ui) });
    if (mutation.extendedProps) {
        copy.extendedProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, copy.extendedProps), mutation.extendedProps);
    }
    for (var _i = 0, _a = context.pluginHooks.eventDefMutationAppliers; _i < _a.length; _i++) {
        var applier = _a[_i];
        applier(copy, mutation, context);
    }
    if (!copy.hasEnd && context.options.forceEventDuration) {
        copy.hasEnd = true;
    }
    return copy;
}
function applyMutationToEventInstance(eventInstance, eventDef, // must first be modified by applyMutationToEventDef
eventConfig, mutation, context) {
    var dateEnv = context.dateEnv;
    var forceAllDay = mutation.standardProps && mutation.standardProps.allDay === true;
    var clearEnd = mutation.standardProps && mutation.standardProps.hasEnd === false;
    var copy = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, eventInstance);
    if (forceAllDay) {
        copy.range = computeAlignedDayRange(copy.range);
    }
    if (mutation.datesDelta && eventConfig.startEditable) {
        copy.range = {
            start: dateEnv.add(copy.range.start, mutation.datesDelta),
            end: dateEnv.add(copy.range.end, mutation.datesDelta),
        };
    }
    if (mutation.startDelta && eventConfig.durationEditable) {
        copy.range = {
            start: dateEnv.add(copy.range.start, mutation.startDelta),
            end: copy.range.end,
        };
    }
    if (mutation.endDelta && eventConfig.durationEditable) {
        copy.range = {
            start: copy.range.start,
            end: dateEnv.add(copy.range.end, mutation.endDelta),
        };
    }
    if (clearEnd) {
        copy.range = {
            start: copy.range.start,
            end: getDefaultEventEnd(eventDef.allDay, copy.range.start, context),
        };
    }
    // in case event was all-day but the supplied deltas were not
    // better util for this?
    if (eventDef.allDay) {
        copy.range = {
            start: startOfDay(copy.range.start),
            end: startOfDay(copy.range.end),
        };
    }
    // handle invalid durations
    if (copy.range.end < copy.range.start) {
        copy.range.end = getDefaultEventEnd(eventDef.allDay, copy.range.start, context);
    }
    return copy;
}

// no public types yet. when there are, export from:
// import {} from './api-type-deps'
var ViewApi = /** @class */ (function () {
    function ViewApi(type, getCurrentData, dateEnv) {
        this.type = type;
        this.getCurrentData = getCurrentData;
        this.dateEnv = dateEnv;
    }
    Object.defineProperty(ViewApi.prototype, "calendar", {
        get: function () {
            return this.getCurrentData().calendarApi;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewApi.prototype, "title", {
        get: function () {
            return this.getCurrentData().viewTitle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewApi.prototype, "activeStart", {
        get: function () {
            return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.start);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewApi.prototype, "activeEnd", {
        get: function () {
            return this.dateEnv.toDate(this.getCurrentData().dateProfile.activeRange.end);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewApi.prototype, "currentStart", {
        get: function () {
            return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.start);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ViewApi.prototype, "currentEnd", {
        get: function () {
            return this.dateEnv.toDate(this.getCurrentData().dateProfile.currentRange.end);
        },
        enumerable: false,
        configurable: true
    });
    ViewApi.prototype.getOption = function (name) {
        return this.getCurrentData().options[name]; // are the view-specific options
    };
    return ViewApi;
}());

var EVENT_SOURCE_REFINERS = {
    id: String,
    defaultAllDay: Boolean,
    url: String,
    format: String,
    events: identity,
    eventDataTransform: identity,
    // for any network-related sources
    success: identity,
    failure: identity,
};
function parseEventSource(raw, context, refiners) {
    if (refiners === void 0) { refiners = buildEventSourceRefiners(context); }
    var rawObj;
    if (typeof raw === 'string') {
        rawObj = { url: raw };
    }
    else if (typeof raw === 'function' || Array.isArray(raw)) {
        rawObj = { events: raw };
    }
    else if (typeof raw === 'object' && raw) { // not null
        rawObj = raw;
    }
    if (rawObj) {
        var _a = refineProps(rawObj, refiners), refined = _a.refined, extra = _a.extra;
        var metaRes = buildEventSourceMeta(refined, context);
        if (metaRes) {
            return {
                _raw: raw,
                isFetching: false,
                latestFetchId: '',
                fetchRange: null,
                defaultAllDay: refined.defaultAllDay,
                eventDataTransform: refined.eventDataTransform,
                success: refined.success,
                failure: refined.failure,
                publicId: refined.id || '',
                sourceId: guid(),
                sourceDefId: metaRes.sourceDefId,
                meta: metaRes.meta,
                ui: createEventUi(refined, context),
                extendedProps: extra,
            };
        }
    }
    return null;
}
function buildEventSourceRefiners(context) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, EVENT_UI_REFINERS), EVENT_SOURCE_REFINERS), context.pluginHooks.eventSourceRefiners);
}
function buildEventSourceMeta(raw, context) {
    var defs = context.pluginHooks.eventSourceDefs;
    for (var i = defs.length - 1; i >= 0; i -= 1) { // later-added plugins take precedence
        var def = defs[i];
        var meta = def.parseMeta(raw);
        if (meta) {
            return { sourceDefId: i, meta: meta };
        }
    }
    return null;
}

function reduceCurrentDate(currentDate, action) {
    switch (action.type) {
        case 'CHANGE_DATE':
            return action.dateMarker;
        default:
            return currentDate;
    }
}
function getInitialDate(options, dateEnv) {
    var initialDateInput = options.initialDate;
    // compute the initial ambig-timezone date
    if (initialDateInput != null) {
        return dateEnv.createMarker(initialDateInput);
    }
    return getNow(options.now, dateEnv); // getNow already returns unzoned
}
function getNow(nowInput, dateEnv) {
    if (typeof nowInput === 'function') {
        nowInput = nowInput();
    }
    if (nowInput == null) {
        return dateEnv.createNowMarker();
    }
    return dateEnv.createMarker(nowInput);
}

var CalendarApi = /** @class */ (function () {
    function CalendarApi() {
    }
    CalendarApi.prototype.getCurrentData = function () {
        return this.currentDataManager.getCurrentData();
    };
    CalendarApi.prototype.dispatch = function (action) {
        return this.currentDataManager.dispatch(action);
    };
    Object.defineProperty(CalendarApi.prototype, "view", {
        get: function () { return this.getCurrentData().viewApi; } // for public API
        ,
        enumerable: false,
        configurable: true
    });
    CalendarApi.prototype.batchRendering = function (callback) {
        callback();
    };
    CalendarApi.prototype.updateSize = function () {
        this.trigger('_resize', true);
    };
    // Options
    // -----------------------------------------------------------------------------------------------------------------
    CalendarApi.prototype.setOption = function (name, val) {
        this.dispatch({
            type: 'SET_OPTION',
            optionName: name,
            rawOptionValue: val,
        });
    };
    CalendarApi.prototype.getOption = function (name) {
        return this.currentDataManager.currentCalendarOptionsInput[name];
    };
    CalendarApi.prototype.getAvailableLocaleCodes = function () {
        return Object.keys(this.getCurrentData().availableRawLocales);
    };
    // Trigger
    // -----------------------------------------------------------------------------------------------------------------
    CalendarApi.prototype.on = function (handlerName, handler) {
        var currentDataManager = this.currentDataManager;
        if (currentDataManager.currentCalendarOptionsRefiners[handlerName]) {
            currentDataManager.emitter.on(handlerName, handler);
        }
        else {
            console.warn("Unknown listener name '" + handlerName + "'");
        }
    };
    CalendarApi.prototype.off = function (handlerName, handler) {
        this.currentDataManager.emitter.off(handlerName, handler);
    };
    // not meant for public use
    CalendarApi.prototype.trigger = function (handlerName) {
        var _a;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        (_a = this.currentDataManager.emitter).trigger.apply(_a, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)([handlerName], args));
    };
    // View
    // -----------------------------------------------------------------------------------------------------------------
    CalendarApi.prototype.changeView = function (viewType, dateOrRange) {
        var _this = this;
        this.batchRendering(function () {
            _this.unselect();
            if (dateOrRange) {
                if (dateOrRange.start && dateOrRange.end) { // a range
                    _this.dispatch({
                        type: 'CHANGE_VIEW_TYPE',
                        viewType: viewType,
                    });
                    _this.dispatch({
                        type: 'SET_OPTION',
                        optionName: 'visibleRange',
                        rawOptionValue: dateOrRange,
                    });
                }
                else {
                    var dateEnv = _this.getCurrentData().dateEnv;
                    _this.dispatch({
                        type: 'CHANGE_VIEW_TYPE',
                        viewType: viewType,
                        dateMarker: dateEnv.createMarker(dateOrRange),
                    });
                }
            }
            else {
                _this.dispatch({
                    type: 'CHANGE_VIEW_TYPE',
                    viewType: viewType,
                });
            }
        });
    };
    // Forces navigation to a view for the given date.
    // `viewType` can be a specific view name or a generic one like "week" or "day".
    // needs to change
    CalendarApi.prototype.zoomTo = function (dateMarker, viewType) {
        var state = this.getCurrentData();
        var spec;
        viewType = viewType || 'day'; // day is default zoom
        spec = state.viewSpecs[viewType] || this.getUnitViewSpec(viewType);
        this.unselect();
        if (spec) {
            this.dispatch({
                type: 'CHANGE_VIEW_TYPE',
                viewType: spec.type,
                dateMarker: dateMarker,
            });
        }
        else {
            this.dispatch({
                type: 'CHANGE_DATE',
                dateMarker: dateMarker,
            });
        }
    };
    // Given a duration singular unit, like "week" or "day", finds a matching view spec.
    // Preference is given to views that have corresponding buttons.
    CalendarApi.prototype.getUnitViewSpec = function (unit) {
        var _a = this.getCurrentData(), viewSpecs = _a.viewSpecs, toolbarConfig = _a.toolbarConfig;
        var viewTypes = [].concat(toolbarConfig.viewsWithButtons);
        var i;
        var spec;
        for (var viewType in viewSpecs) {
            viewTypes.push(viewType);
        }
        for (i = 0; i < viewTypes.length; i += 1) {
            spec = viewSpecs[viewTypes[i]];
            if (spec) {
                if (spec.singleUnit === unit) {
                    return spec;
                }
            }
        }
        return null;
    };
    // Current Date
    // -----------------------------------------------------------------------------------------------------------------
    CalendarApi.prototype.prev = function () {
        this.unselect();
        this.dispatch({ type: 'PREV' });
    };
    CalendarApi.prototype.next = function () {
        this.unselect();
        this.dispatch({ type: 'NEXT' });
    };
    CalendarApi.prototype.prevYear = function () {
        var state = this.getCurrentData();
        this.unselect();
        this.dispatch({
            type: 'CHANGE_DATE',
            dateMarker: state.dateEnv.addYears(state.currentDate, -1),
        });
    };
    CalendarApi.prototype.nextYear = function () {
        var state = this.getCurrentData();
        this.unselect();
        this.dispatch({
            type: 'CHANGE_DATE',
            dateMarker: state.dateEnv.addYears(state.currentDate, 1),
        });
    };
    CalendarApi.prototype.today = function () {
        var state = this.getCurrentData();
        this.unselect();
        this.dispatch({
            type: 'CHANGE_DATE',
            dateMarker: getNow(state.calendarOptions.now, state.dateEnv),
        });
    };
    CalendarApi.prototype.gotoDate = function (zonedDateInput) {
        var state = this.getCurrentData();
        this.unselect();
        this.dispatch({
            type: 'CHANGE_DATE',
            dateMarker: state.dateEnv.createMarker(zonedDateInput),
        });
    };
    CalendarApi.prototype.incrementDate = function (deltaInput) {
        var state = this.getCurrentData();
        var delta = createDuration(deltaInput);
        if (delta) { // else, warn about invalid input?
            this.unselect();
            this.dispatch({
                type: 'CHANGE_DATE',
                dateMarker: state.dateEnv.add(state.currentDate, delta),
            });
        }
    };
    // for external API
    CalendarApi.prototype.getDate = function () {
        var state = this.getCurrentData();
        return state.dateEnv.toDate(state.currentDate);
    };
    // Date Formatting Utils
    // -----------------------------------------------------------------------------------------------------------------
    CalendarApi.prototype.formatDate = function (d, formatter) {
        var dateEnv = this.getCurrentData().dateEnv;
        return dateEnv.format(dateEnv.createMarker(d), createFormatter(formatter));
    };
    // `settings` is for formatter AND isEndExclusive
    CalendarApi.prototype.formatRange = function (d0, d1, settings) {
        var dateEnv = this.getCurrentData().dateEnv;
        return dateEnv.formatRange(dateEnv.createMarker(d0), dateEnv.createMarker(d1), createFormatter(settings), settings);
    };
    CalendarApi.prototype.formatIso = function (d, omitTime) {
        var dateEnv = this.getCurrentData().dateEnv;
        return dateEnv.formatIso(dateEnv.createMarker(d), { omitTime: omitTime });
    };
    // Date Selection / Event Selection / DayClick
    // -----------------------------------------------------------------------------------------------------------------
    // this public method receives start/end dates in any format, with any timezone
    // NOTE: args were changed from v3
    CalendarApi.prototype.select = function (dateOrObj, endDate) {
        var selectionInput;
        if (endDate == null) {
            if (dateOrObj.start != null) {
                selectionInput = dateOrObj;
            }
            else {
                selectionInput = {
                    start: dateOrObj,
                    end: null,
                };
            }
        }
        else {
            selectionInput = {
                start: dateOrObj,
                end: endDate,
            };
        }
        var state = this.getCurrentData();
        var selection = parseDateSpan(selectionInput, state.dateEnv, createDuration({ days: 1 }));
        if (selection) { // throw parse error otherwise?
            this.dispatch({ type: 'SELECT_DATES', selection: selection });
            triggerDateSelect(selection, null, state);
        }
    };
    // public method
    CalendarApi.prototype.unselect = function (pev) {
        var state = this.getCurrentData();
        if (state.dateSelection) {
            this.dispatch({ type: 'UNSELECT_DATES' });
            triggerDateUnselect(pev, state);
        }
    };
    // Public Events API
    // -----------------------------------------------------------------------------------------------------------------
    CalendarApi.prototype.addEvent = function (eventInput, sourceInput) {
        if (eventInput instanceof EventApi) {
            var def = eventInput._def;
            var instance = eventInput._instance;
            var currentData = this.getCurrentData();
            // not already present? don't want to add an old snapshot
            if (!currentData.eventStore.defs[def.defId]) {
                this.dispatch({
                    type: 'ADD_EVENTS',
                    eventStore: eventTupleToStore({ def: def, instance: instance }),
                });
                this.triggerEventAdd(eventInput);
            }
            return eventInput;
        }
        var state = this.getCurrentData();
        var eventSource;
        if (sourceInput instanceof EventSourceApi) {
            eventSource = sourceInput.internalEventSource;
        }
        else if (typeof sourceInput === 'boolean') {
            if (sourceInput) { // true. part of the first event source
                eventSource = hashValuesToArray(state.eventSources)[0];
            }
        }
        else if (sourceInput != null) { // an ID. accepts a number too
            var sourceApi = this.getEventSourceById(sourceInput); // TODO: use an internal function
            if (!sourceApi) {
                console.warn("Could not find an event source with ID \"" + sourceInput + "\""); // TODO: test
                return null;
            }
            eventSource = sourceApi.internalEventSource;
        }
        var tuple = parseEvent(eventInput, eventSource, state, false);
        if (tuple) {
            var newEventApi = new EventApi(state, tuple.def, tuple.def.recurringDef ? null : tuple.instance);
            this.dispatch({
                type: 'ADD_EVENTS',
                eventStore: eventTupleToStore(tuple),
            });
            this.triggerEventAdd(newEventApi);
            return newEventApi;
        }
        return null;
    };
    CalendarApi.prototype.triggerEventAdd = function (eventApi) {
        var _this = this;
        var emitter = this.getCurrentData().emitter;
        emitter.trigger('eventAdd', {
            event: eventApi,
            relatedEvents: [],
            revert: function () {
                _this.dispatch({
                    type: 'REMOVE_EVENTS',
                    eventStore: eventApiToStore(eventApi),
                });
            },
        });
    };
    // TODO: optimize
    CalendarApi.prototype.getEventById = function (id) {
        var state = this.getCurrentData();
        var _a = state.eventStore, defs = _a.defs, instances = _a.instances;
        id = String(id);
        for (var defId in defs) {
            var def = defs[defId];
            if (def.publicId === id) {
                if (def.recurringDef) {
                    return new EventApi(state, def, null);
                }
                for (var instanceId in instances) {
                    var instance = instances[instanceId];
                    if (instance.defId === def.defId) {
                        return new EventApi(state, def, instance);
                    }
                }
            }
        }
        return null;
    };
    CalendarApi.prototype.getEvents = function () {
        var currentData = this.getCurrentData();
        return buildEventApis(currentData.eventStore, currentData);
    };
    CalendarApi.prototype.removeAllEvents = function () {
        this.dispatch({ type: 'REMOVE_ALL_EVENTS' });
    };
    // Public Event Sources API
    // -----------------------------------------------------------------------------------------------------------------
    CalendarApi.prototype.getEventSources = function () {
        var state = this.getCurrentData();
        var sourceHash = state.eventSources;
        var sourceApis = [];
        for (var internalId in sourceHash) {
            sourceApis.push(new EventSourceApi(state, sourceHash[internalId]));
        }
        return sourceApis;
    };
    CalendarApi.prototype.getEventSourceById = function (id) {
        var state = this.getCurrentData();
        var sourceHash = state.eventSources;
        id = String(id);
        for (var sourceId in sourceHash) {
            if (sourceHash[sourceId].publicId === id) {
                return new EventSourceApi(state, sourceHash[sourceId]);
            }
        }
        return null;
    };
    CalendarApi.prototype.addEventSource = function (sourceInput) {
        var state = this.getCurrentData();
        if (sourceInput instanceof EventSourceApi) {
            // not already present? don't want to add an old snapshot
            if (!state.eventSources[sourceInput.internalEventSource.sourceId]) {
                this.dispatch({
                    type: 'ADD_EVENT_SOURCES',
                    sources: [sourceInput.internalEventSource],
                });
            }
            return sourceInput;
        }
        var eventSource = parseEventSource(sourceInput, state);
        if (eventSource) { // TODO: error otherwise?
            this.dispatch({ type: 'ADD_EVENT_SOURCES', sources: [eventSource] });
            return new EventSourceApi(state, eventSource);
        }
        return null;
    };
    CalendarApi.prototype.removeAllEventSources = function () {
        this.dispatch({ type: 'REMOVE_ALL_EVENT_SOURCES' });
    };
    CalendarApi.prototype.refetchEvents = function () {
        this.dispatch({ type: 'FETCH_EVENT_SOURCES', isRefetch: true });
    };
    // Scroll
    // -----------------------------------------------------------------------------------------------------------------
    CalendarApi.prototype.scrollToTime = function (timeInput) {
        var time = createDuration(timeInput);
        if (time) {
            this.trigger('_scrollRequest', { time: time });
        }
    };
    return CalendarApi;
}());

var EventApi = /** @class */ (function () {
    // instance will be null if expressing a recurring event that has no current instances,
    // OR if trying to validate an incoming external event that has no dates assigned
    function EventApi(context, def, instance) {
        this._context = context;
        this._def = def;
        this._instance = instance || null;
    }
    /*
    TODO: make event struct more responsible for this
    */
    EventApi.prototype.setProp = function (name, val) {
        var _a, _b;
        if (name in EVENT_DATE_REFINERS) {
            console.warn('Could not set date-related prop \'name\'. Use one of the date-related methods instead.');
            // TODO: make proper aliasing system?
        }
        else if (name === 'id') {
            val = EVENT_NON_DATE_REFINERS[name](val);
            this.mutate({
                standardProps: { publicId: val },
            });
        }
        else if (name in EVENT_NON_DATE_REFINERS) {
            val = EVENT_NON_DATE_REFINERS[name](val);
            this.mutate({
                standardProps: (_a = {}, _a[name] = val, _a),
            });
        }
        else if (name in EVENT_UI_REFINERS) {
            var ui = EVENT_UI_REFINERS[name](val);
            if (name === 'color') {
                ui = { backgroundColor: val, borderColor: val };
            }
            else if (name === 'editable') {
                ui = { startEditable: val, durationEditable: val };
            }
            else {
                ui = (_b = {}, _b[name] = val, _b);
            }
            this.mutate({
                standardProps: { ui: ui },
            });
        }
        else {
            console.warn("Could not set prop '" + name + "'. Use setExtendedProp instead.");
        }
    };
    EventApi.prototype.setExtendedProp = function (name, val) {
        var _a;
        this.mutate({
            extendedProps: (_a = {}, _a[name] = val, _a),
        });
    };
    EventApi.prototype.setStart = function (startInput, options) {
        if (options === void 0) { options = {}; }
        var dateEnv = this._context.dateEnv;
        var start = dateEnv.createMarker(startInput);
        if (start && this._instance) { // TODO: warning if parsed bad
            var instanceRange = this._instance.range;
            var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity); // what if parsed bad!?
            if (options.maintainDuration) {
                this.mutate({ datesDelta: startDelta });
            }
            else {
                this.mutate({ startDelta: startDelta });
            }
        }
    };
    EventApi.prototype.setEnd = function (endInput, options) {
        if (options === void 0) { options = {}; }
        var dateEnv = this._context.dateEnv;
        var end;
        if (endInput != null) {
            end = dateEnv.createMarker(endInput);
            if (!end) {
                return; // TODO: warning if parsed bad
            }
        }
        if (this._instance) {
            if (end) {
                var endDelta = diffDates(this._instance.range.end, end, dateEnv, options.granularity);
                this.mutate({ endDelta: endDelta });
            }
            else {
                this.mutate({ standardProps: { hasEnd: false } });
            }
        }
    };
    EventApi.prototype.setDates = function (startInput, endInput, options) {
        if (options === void 0) { options = {}; }
        var dateEnv = this._context.dateEnv;
        var standardProps = { allDay: options.allDay };
        var start = dateEnv.createMarker(startInput);
        var end;
        if (!start) {
            return; // TODO: warning if parsed bad
        }
        if (endInput != null) {
            end = dateEnv.createMarker(endInput);
            if (!end) { // TODO: warning if parsed bad
                return;
            }
        }
        if (this._instance) {
            var instanceRange = this._instance.range;
            // when computing the diff for an event being converted to all-day,
            // compute diff off of the all-day values the way event-mutation does.
            if (options.allDay === true) {
                instanceRange = computeAlignedDayRange(instanceRange);
            }
            var startDelta = diffDates(instanceRange.start, start, dateEnv, options.granularity);
            if (end) {
                var endDelta = diffDates(instanceRange.end, end, dateEnv, options.granularity);
                if (durationsEqual(startDelta, endDelta)) {
                    this.mutate({ datesDelta: startDelta, standardProps: standardProps });
                }
                else {
                    this.mutate({ startDelta: startDelta, endDelta: endDelta, standardProps: standardProps });
                }
            }
            else { // means "clear the end"
                standardProps.hasEnd = false;
                this.mutate({ datesDelta: startDelta, standardProps: standardProps });
            }
        }
    };
    EventApi.prototype.moveStart = function (deltaInput) {
        var delta = createDuration(deltaInput);
        if (delta) { // TODO: warning if parsed bad
            this.mutate({ startDelta: delta });
        }
    };
    EventApi.prototype.moveEnd = function (deltaInput) {
        var delta = createDuration(deltaInput);
        if (delta) { // TODO: warning if parsed bad
            this.mutate({ endDelta: delta });
        }
    };
    EventApi.prototype.moveDates = function (deltaInput) {
        var delta = createDuration(deltaInput);
        if (delta) { // TODO: warning if parsed bad
            this.mutate({ datesDelta: delta });
        }
    };
    EventApi.prototype.setAllDay = function (allDay, options) {
        if (options === void 0) { options = {}; }
        var standardProps = { allDay: allDay };
        var maintainDuration = options.maintainDuration;
        if (maintainDuration == null) {
            maintainDuration = this._context.options.allDayMaintainDuration;
        }
        if (this._def.allDay !== allDay) {
            standardProps.hasEnd = maintainDuration;
        }
        this.mutate({ standardProps: standardProps });
    };
    EventApi.prototype.formatRange = function (formatInput) {
        var dateEnv = this._context.dateEnv;
        var instance = this._instance;
        var formatter = createFormatter(formatInput);
        if (this._def.hasEnd) {
            return dateEnv.formatRange(instance.range.start, instance.range.end, formatter, {
                forcedStartTzo: instance.forcedStartTzo,
                forcedEndTzo: instance.forcedEndTzo,
            });
        }
        return dateEnv.format(instance.range.start, formatter, {
            forcedTzo: instance.forcedStartTzo,
        });
    };
    EventApi.prototype.mutate = function (mutation) {
        var instance = this._instance;
        if (instance) {
            var def = this._def;
            var context_1 = this._context;
            var eventStore_1 = context_1.getCurrentData().eventStore;
            var relevantEvents = getRelevantEvents(eventStore_1, instance.instanceId);
            var eventConfigBase = {
                '': {
                    display: '',
                    startEditable: true,
                    durationEditable: true,
                    constraints: [],
                    overlap: null,
                    allows: [],
                    backgroundColor: '',
                    borderColor: '',
                    textColor: '',
                    classNames: [],
                },
            };
            relevantEvents = applyMutationToEventStore(relevantEvents, eventConfigBase, mutation, context_1);
            var oldEvent = new EventApi(context_1, def, instance); // snapshot
            this._def = relevantEvents.defs[def.defId];
            this._instance = relevantEvents.instances[instance.instanceId];
            context_1.dispatch({
                type: 'MERGE_EVENTS',
                eventStore: relevantEvents,
            });
            context_1.emitter.trigger('eventChange', {
                oldEvent: oldEvent,
                event: this,
                relatedEvents: buildEventApis(relevantEvents, context_1, instance),
                revert: function () {
                    context_1.dispatch({
                        type: 'RESET_EVENTS',
                        eventStore: eventStore_1,
                    });
                },
            });
        }
    };
    EventApi.prototype.remove = function () {
        var context = this._context;
        var asStore = eventApiToStore(this);
        context.dispatch({
            type: 'REMOVE_EVENTS',
            eventStore: asStore,
        });
        context.emitter.trigger('eventRemove', {
            event: this,
            relatedEvents: [],
            revert: function () {
                context.dispatch({
                    type: 'MERGE_EVENTS',
                    eventStore: asStore,
                });
            },
        });
    };
    Object.defineProperty(EventApi.prototype, "source", {
        get: function () {
            var sourceId = this._def.sourceId;
            if (sourceId) {
                return new EventSourceApi(this._context, this._context.getCurrentData().eventSources[sourceId]);
            }
            return null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "start", {
        get: function () {
            return this._instance ?
                this._context.dateEnv.toDate(this._instance.range.start) :
                null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "end", {
        get: function () {
            return (this._instance && this._def.hasEnd) ?
                this._context.dateEnv.toDate(this._instance.range.end) :
                null;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "startStr", {
        get: function () {
            var instance = this._instance;
            if (instance) {
                return this._context.dateEnv.formatIso(instance.range.start, {
                    omitTime: this._def.allDay,
                    forcedTzo: instance.forcedStartTzo,
                });
            }
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "endStr", {
        get: function () {
            var instance = this._instance;
            if (instance && this._def.hasEnd) {
                return this._context.dateEnv.formatIso(instance.range.end, {
                    omitTime: this._def.allDay,
                    forcedTzo: instance.forcedEndTzo,
                });
            }
            return '';
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "id", {
        // computable props that all access the def
        // TODO: find a TypeScript-compatible way to do this at scale
        get: function () { return this._def.publicId; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "groupId", {
        get: function () { return this._def.groupId; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "allDay", {
        get: function () { return this._def.allDay; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "title", {
        get: function () { return this._def.title; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "url", {
        get: function () { return this._def.url; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "display", {
        get: function () { return this._def.ui.display || 'auto'; } // bad. just normalize the type earlier
        ,
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "startEditable", {
        get: function () { return this._def.ui.startEditable; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "durationEditable", {
        get: function () { return this._def.ui.durationEditable; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "constraint", {
        get: function () { return this._def.ui.constraints[0] || null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "overlap", {
        get: function () { return this._def.ui.overlap; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "allow", {
        get: function () { return this._def.ui.allows[0] || null; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "backgroundColor", {
        get: function () { return this._def.ui.backgroundColor; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "borderColor", {
        get: function () { return this._def.ui.borderColor; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "textColor", {
        get: function () { return this._def.ui.textColor; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "classNames", {
        // NOTE: user can't modify these because Object.freeze was called in event-def parsing
        get: function () { return this._def.ui.classNames; },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(EventApi.prototype, "extendedProps", {
        get: function () { return this._def.extendedProps; },
        enumerable: false,
        configurable: true
    });
    EventApi.prototype.toPlainObject = function (settings) {
        if (settings === void 0) { settings = {}; }
        var def = this._def;
        var ui = def.ui;
        var _a = this, startStr = _a.startStr, endStr = _a.endStr;
        var res = {};
        if (def.title) {
            res.title = def.title;
        }
        if (startStr) {
            res.start = startStr;
        }
        if (endStr) {
            res.end = endStr;
        }
        if (def.publicId) {
            res.id = def.publicId;
        }
        if (def.groupId) {
            res.groupId = def.groupId;
        }
        if (def.url) {
            res.url = def.url;
        }
        if (ui.display && ui.display !== 'auto') {
            res.display = ui.display;
        }
        // TODO: what about recurring-event properties???
        // TODO: include startEditable/durationEditable/constraint/overlap/allow
        if (settings.collapseColor && ui.backgroundColor && ui.backgroundColor === ui.borderColor) {
            res.color = ui.backgroundColor;
        }
        else {
            if (ui.backgroundColor) {
                res.backgroundColor = ui.backgroundColor;
            }
            if (ui.borderColor) {
                res.borderColor = ui.borderColor;
            }
        }
        if (ui.textColor) {
            res.textColor = ui.textColor;
        }
        if (ui.classNames.length) {
            res.classNames = ui.classNames;
        }
        if (Object.keys(def.extendedProps).length) {
            if (settings.collapseExtendedProps) {
                (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(res, def.extendedProps);
            }
            else {
                res.extendedProps = def.extendedProps;
            }
        }
        return res;
    };
    EventApi.prototype.toJSON = function () {
        return this.toPlainObject();
    };
    return EventApi;
}());
function eventApiToStore(eventApi) {
    var _a, _b;
    var def = eventApi._def;
    var instance = eventApi._instance;
    return {
        defs: (_a = {}, _a[def.defId] = def, _a),
        instances: instance
            ? (_b = {}, _b[instance.instanceId] = instance, _b) : {},
    };
}
function buildEventApis(eventStore, context, excludeInstance) {
    var defs = eventStore.defs, instances = eventStore.instances;
    var eventApis = [];
    var excludeInstanceId = excludeInstance ? excludeInstance.instanceId : '';
    for (var id in instances) {
        var instance = instances[id];
        var def = defs[instance.defId];
        if (instance.instanceId !== excludeInstanceId) {
            eventApis.push(new EventApi(context, def, instance));
        }
    }
    return eventApis;
}

var calendarSystemClassMap = {};
function registerCalendarSystem(name, theClass) {
    calendarSystemClassMap[name] = theClass;
}
function createCalendarSystem(name) {
    return new calendarSystemClassMap[name]();
}
var GregorianCalendarSystem = /** @class */ (function () {
    function GregorianCalendarSystem() {
    }
    GregorianCalendarSystem.prototype.getMarkerYear = function (d) {
        return d.getUTCFullYear();
    };
    GregorianCalendarSystem.prototype.getMarkerMonth = function (d) {
        return d.getUTCMonth();
    };
    GregorianCalendarSystem.prototype.getMarkerDay = function (d) {
        return d.getUTCDate();
    };
    GregorianCalendarSystem.prototype.arrayToMarker = function (arr) {
        return arrayToUtcDate(arr);
    };
    GregorianCalendarSystem.prototype.markerToArray = function (marker) {
        return dateToUtcArray(marker);
    };
    return GregorianCalendarSystem;
}());
registerCalendarSystem('gregory', GregorianCalendarSystem);

var ISO_RE = /^\s*(\d{4})(-?(\d{2})(-?(\d{2})([T ](\d{2}):?(\d{2})(:?(\d{2})(\.(\d+))?)?(Z|(([-+])(\d{2})(:?(\d{2}))?))?)?)?)?$/;
function parse(str) {
    var m = ISO_RE.exec(str);
    if (m) {
        var marker = new Date(Date.UTC(Number(m[1]), m[3] ? Number(m[3]) - 1 : 0, Number(m[5] || 1), Number(m[7] || 0), Number(m[8] || 0), Number(m[10] || 0), m[12] ? Number("0." + m[12]) * 1000 : 0));
        if (isValidDate(marker)) {
            var timeZoneOffset = null;
            if (m[13]) {
                timeZoneOffset = (m[15] === '-' ? -1 : 1) * (Number(m[16] || 0) * 60 +
                    Number(m[18] || 0));
            }
            return {
                marker: marker,
                isTimeUnspecified: !m[6],
                timeZoneOffset: timeZoneOffset,
            };
        }
    }
    return null;
}

var DateEnv = /** @class */ (function () {
    function DateEnv(settings) {
        var timeZone = this.timeZone = settings.timeZone;
        var isNamedTimeZone = timeZone !== 'local' && timeZone !== 'UTC';
        if (settings.namedTimeZoneImpl && isNamedTimeZone) {
            this.namedTimeZoneImpl = new settings.namedTimeZoneImpl(timeZone);
        }
        this.canComputeOffset = Boolean(!isNamedTimeZone || this.namedTimeZoneImpl);
        this.calendarSystem = createCalendarSystem(settings.calendarSystem);
        this.locale = settings.locale;
        this.weekDow = settings.locale.week.dow;
        this.weekDoy = settings.locale.week.doy;
        if (settings.weekNumberCalculation === 'ISO') {
            this.weekDow = 1;
            this.weekDoy = 4;
        }
        if (typeof settings.firstDay === 'number') {
            this.weekDow = settings.firstDay;
        }
        if (typeof settings.weekNumberCalculation === 'function') {
            this.weekNumberFunc = settings.weekNumberCalculation;
        }
        this.weekText = settings.weekText != null ? settings.weekText : settings.locale.options.weekText;
        this.cmdFormatter = settings.cmdFormatter;
        this.defaultSeparator = settings.defaultSeparator;
    }
    // Creating / Parsing
    DateEnv.prototype.createMarker = function (input) {
        var meta = this.createMarkerMeta(input);
        if (meta === null) {
            return null;
        }
        return meta.marker;
    };
    DateEnv.prototype.createNowMarker = function () {
        if (this.canComputeOffset) {
            return this.timestampToMarker(new Date().valueOf());
        }
        // if we can't compute the current date val for a timezone,
        // better to give the current local date vals than UTC
        return arrayToUtcDate(dateToLocalArray(new Date()));
    };
    DateEnv.prototype.createMarkerMeta = function (input) {
        if (typeof input === 'string') {
            return this.parse(input);
        }
        var marker = null;
        if (typeof input === 'number') {
            marker = this.timestampToMarker(input);
        }
        else if (input instanceof Date) {
            input = input.valueOf();
            if (!isNaN(input)) {
                marker = this.timestampToMarker(input);
            }
        }
        else if (Array.isArray(input)) {
            marker = arrayToUtcDate(input);
        }
        if (marker === null || !isValidDate(marker)) {
            return null;
        }
        return { marker: marker, isTimeUnspecified: false, forcedTzo: null };
    };
    DateEnv.prototype.parse = function (s) {
        var parts = parse(s);
        if (parts === null) {
            return null;
        }
        var marker = parts.marker;
        var forcedTzo = null;
        if (parts.timeZoneOffset !== null) {
            if (this.canComputeOffset) {
                marker = this.timestampToMarker(marker.valueOf() - parts.timeZoneOffset * 60 * 1000);
            }
            else {
                forcedTzo = parts.timeZoneOffset;
            }
        }
        return { marker: marker, isTimeUnspecified: parts.isTimeUnspecified, forcedTzo: forcedTzo };
    };
    // Accessors
    DateEnv.prototype.getYear = function (marker) {
        return this.calendarSystem.getMarkerYear(marker);
    };
    DateEnv.prototype.getMonth = function (marker) {
        return this.calendarSystem.getMarkerMonth(marker);
    };
    // Adding / Subtracting
    DateEnv.prototype.add = function (marker, dur) {
        var a = this.calendarSystem.markerToArray(marker);
        a[0] += dur.years;
        a[1] += dur.months;
        a[2] += dur.days;
        a[6] += dur.milliseconds;
        return this.calendarSystem.arrayToMarker(a);
    };
    DateEnv.prototype.subtract = function (marker, dur) {
        var a = this.calendarSystem.markerToArray(marker);
        a[0] -= dur.years;
        a[1] -= dur.months;
        a[2] -= dur.days;
        a[6] -= dur.milliseconds;
        return this.calendarSystem.arrayToMarker(a);
    };
    DateEnv.prototype.addYears = function (marker, n) {
        var a = this.calendarSystem.markerToArray(marker);
        a[0] += n;
        return this.calendarSystem.arrayToMarker(a);
    };
    DateEnv.prototype.addMonths = function (marker, n) {
        var a = this.calendarSystem.markerToArray(marker);
        a[1] += n;
        return this.calendarSystem.arrayToMarker(a);
    };
    // Diffing Whole Units
    DateEnv.prototype.diffWholeYears = function (m0, m1) {
        var calendarSystem = this.calendarSystem;
        if (timeAsMs(m0) === timeAsMs(m1) &&
            calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1) &&
            calendarSystem.getMarkerMonth(m0) === calendarSystem.getMarkerMonth(m1)) {
            return calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0);
        }
        return null;
    };
    DateEnv.prototype.diffWholeMonths = function (m0, m1) {
        var calendarSystem = this.calendarSystem;
        if (timeAsMs(m0) === timeAsMs(m1) &&
            calendarSystem.getMarkerDay(m0) === calendarSystem.getMarkerDay(m1)) {
            return (calendarSystem.getMarkerMonth(m1) - calendarSystem.getMarkerMonth(m0)) +
                (calendarSystem.getMarkerYear(m1) - calendarSystem.getMarkerYear(m0)) * 12;
        }
        return null;
    };
    // Range / Duration
    DateEnv.prototype.greatestWholeUnit = function (m0, m1) {
        var n = this.diffWholeYears(m0, m1);
        if (n !== null) {
            return { unit: 'year', value: n };
        }
        n = this.diffWholeMonths(m0, m1);
        if (n !== null) {
            return { unit: 'month', value: n };
        }
        n = diffWholeWeeks(m0, m1);
        if (n !== null) {
            return { unit: 'week', value: n };
        }
        n = diffWholeDays(m0, m1);
        if (n !== null) {
            return { unit: 'day', value: n };
        }
        n = diffHours(m0, m1);
        if (isInt(n)) {
            return { unit: 'hour', value: n };
        }
        n = diffMinutes(m0, m1);
        if (isInt(n)) {
            return { unit: 'minute', value: n };
        }
        n = diffSeconds(m0, m1);
        if (isInt(n)) {
            return { unit: 'second', value: n };
        }
        return { unit: 'millisecond', value: m1.valueOf() - m0.valueOf() };
    };
    DateEnv.prototype.countDurationsBetween = function (m0, m1, d) {
        // TODO: can use greatestWholeUnit
        var diff;
        if (d.years) {
            diff = this.diffWholeYears(m0, m1);
            if (diff !== null) {
                return diff / asRoughYears(d);
            }
        }
        if (d.months) {
            diff = this.diffWholeMonths(m0, m1);
            if (diff !== null) {
                return diff / asRoughMonths(d);
            }
        }
        if (d.days) {
            diff = diffWholeDays(m0, m1);
            if (diff !== null) {
                return diff / asRoughDays(d);
            }
        }
        return (m1.valueOf() - m0.valueOf()) / asRoughMs(d);
    };
    // Start-Of
    // these DON'T return zoned-dates. only UTC start-of dates
    DateEnv.prototype.startOf = function (m, unit) {
        if (unit === 'year') {
            return this.startOfYear(m);
        }
        if (unit === 'month') {
            return this.startOfMonth(m);
        }
        if (unit === 'week') {
            return this.startOfWeek(m);
        }
        if (unit === 'day') {
            return startOfDay(m);
        }
        if (unit === 'hour') {
            return startOfHour(m);
        }
        if (unit === 'minute') {
            return startOfMinute(m);
        }
        if (unit === 'second') {
            return startOfSecond(m);
        }
        return null;
    };
    DateEnv.prototype.startOfYear = function (m) {
        return this.calendarSystem.arrayToMarker([
            this.calendarSystem.getMarkerYear(m),
        ]);
    };
    DateEnv.prototype.startOfMonth = function (m) {
        return this.calendarSystem.arrayToMarker([
            this.calendarSystem.getMarkerYear(m),
            this.calendarSystem.getMarkerMonth(m),
        ]);
    };
    DateEnv.prototype.startOfWeek = function (m) {
        return this.calendarSystem.arrayToMarker([
            this.calendarSystem.getMarkerYear(m),
            this.calendarSystem.getMarkerMonth(m),
            m.getUTCDate() - ((m.getUTCDay() - this.weekDow + 7) % 7),
        ]);
    };
    // Week Number
    DateEnv.prototype.computeWeekNumber = function (marker) {
        if (this.weekNumberFunc) {
            return this.weekNumberFunc(this.toDate(marker));
        }
        return weekOfYear(marker, this.weekDow, this.weekDoy);
    };
    // TODO: choke on timeZoneName: long
    DateEnv.prototype.format = function (marker, formatter, dateOptions) {
        if (dateOptions === void 0) { dateOptions = {}; }
        return formatter.format({
            marker: marker,
            timeZoneOffset: dateOptions.forcedTzo != null ?
                dateOptions.forcedTzo :
                this.offsetForMarker(marker),
        }, this);
    };
    DateEnv.prototype.formatRange = function (start, end, formatter, dateOptions) {
        if (dateOptions === void 0) { dateOptions = {}; }
        if (dateOptions.isEndExclusive) {
            end = addMs(end, -1);
        }
        return formatter.formatRange({
            marker: start,
            timeZoneOffset: dateOptions.forcedStartTzo != null ?
                dateOptions.forcedStartTzo :
                this.offsetForMarker(start),
        }, {
            marker: end,
            timeZoneOffset: dateOptions.forcedEndTzo != null ?
                dateOptions.forcedEndTzo :
                this.offsetForMarker(end),
        }, this, dateOptions.defaultSeparator);
    };
    /*
    DUMB: the omitTime arg is dumb. if we omit the time, we want to omit the timezone offset. and if we do that,
    might as well use buildIsoString or some other util directly
    */
    DateEnv.prototype.formatIso = function (marker, extraOptions) {
        if (extraOptions === void 0) { extraOptions = {}; }
        var timeZoneOffset = null;
        if (!extraOptions.omitTimeZoneOffset) {
            if (extraOptions.forcedTzo != null) {
                timeZoneOffset = extraOptions.forcedTzo;
            }
            else {
                timeZoneOffset = this.offsetForMarker(marker);
            }
        }
        return buildIsoString(marker, timeZoneOffset, extraOptions.omitTime);
    };
    // TimeZone
    DateEnv.prototype.timestampToMarker = function (ms) {
        if (this.timeZone === 'local') {
            return arrayToUtcDate(dateToLocalArray(new Date(ms)));
        }
        if (this.timeZone === 'UTC' || !this.namedTimeZoneImpl) {
            return new Date(ms);
        }
        return arrayToUtcDate(this.namedTimeZoneImpl.timestampToArray(ms));
    };
    DateEnv.prototype.offsetForMarker = function (m) {
        if (this.timeZone === 'local') {
            return -arrayToLocalDate(dateToUtcArray(m)).getTimezoneOffset(); // convert "inverse" offset to "normal" offset
        }
        if (this.timeZone === 'UTC') {
            return 0;
        }
        if (this.namedTimeZoneImpl) {
            return this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m));
        }
        return null;
    };
    // Conversion
    DateEnv.prototype.toDate = function (m, forcedTzo) {
        if (this.timeZone === 'local') {
            return arrayToLocalDate(dateToUtcArray(m));
        }
        if (this.timeZone === 'UTC') {
            return new Date(m.valueOf()); // make sure it's a copy
        }
        if (!this.namedTimeZoneImpl) {
            return new Date(m.valueOf() - (forcedTzo || 0));
        }
        return new Date(m.valueOf() -
            this.namedTimeZoneImpl.offsetForArray(dateToUtcArray(m)) * 1000 * 60);
    };
    return DateEnv;
}());

var globalLocales = [];

var RAW_EN_LOCALE = {
    code: 'en',
    week: {
        dow: 0,
        doy: 4,
    },
    direction: 'ltr',
    buttonText: {
        prev: 'prev',
        next: 'next',
        prevYear: 'prev year',
        nextYear: 'next year',
        year: 'year',
        today: 'today',
        month: 'month',
        week: 'week',
        day: 'day',
        list: 'list',
    },
    weekText: 'W',
    allDayText: 'all-day',
    moreLinkText: 'more',
    noEventsText: 'No events to display',
};
function organizeRawLocales(explicitRawLocales) {
    var defaultCode = explicitRawLocales.length > 0 ? explicitRawLocales[0].code : 'en';
    var allRawLocales = globalLocales.concat(explicitRawLocales);
    var rawLocaleMap = {
        en: RAW_EN_LOCALE,
    };
    for (var _i = 0, allRawLocales_1 = allRawLocales; _i < allRawLocales_1.length; _i++) {
        var rawLocale = allRawLocales_1[_i];
        rawLocaleMap[rawLocale.code] = rawLocale;
    }
    return {
        map: rawLocaleMap,
        defaultCode: defaultCode,
    };
}
function buildLocale(inputSingular, available) {
    if (typeof inputSingular === 'object' && !Array.isArray(inputSingular)) {
        return parseLocale(inputSingular.code, [inputSingular.code], inputSingular);
    }
    return queryLocale(inputSingular, available);
}
function queryLocale(codeArg, available) {
    var codes = [].concat(codeArg || []); // will convert to array
    var raw = queryRawLocale(codes, available) || RAW_EN_LOCALE;
    return parseLocale(codeArg, codes, raw);
}
function queryRawLocale(codes, available) {
    for (var i = 0; i < codes.length; i += 1) {
        var parts = codes[i].toLocaleLowerCase().split('-');
        for (var j = parts.length; j > 0; j -= 1) {
            var simpleId = parts.slice(0, j).join('-');
            if (available[simpleId]) {
                return available[simpleId];
            }
        }
    }
    return null;
}
function parseLocale(codeArg, codes, raw) {
    var merged = mergeProps([RAW_EN_LOCALE, raw], ['buttonText']);
    delete merged.code; // don't want this part of the options
    var week = merged.week;
    delete merged.week;
    return {
        codeArg: codeArg,
        codes: codes,
        week: week,
        simpleNumberFormat: new Intl.NumberFormat(codeArg),
        options: merged,
    };
}

function formatDate(dateInput, options) {
    if (options === void 0) { options = {}; }
    var dateEnv = buildDateEnv(options);
    var formatter = createFormatter(options);
    var dateMeta = dateEnv.createMarkerMeta(dateInput);
    if (!dateMeta) { // TODO: warning?
        return '';
    }
    return dateEnv.format(dateMeta.marker, formatter, {
        forcedTzo: dateMeta.forcedTzo,
    });
}
function formatRange(startInput, endInput, options) {
    var dateEnv = buildDateEnv(typeof options === 'object' && options ? options : {}); // pass in if non-null object
    var formatter = createFormatter(options);
    var startMeta = dateEnv.createMarkerMeta(startInput);
    var endMeta = dateEnv.createMarkerMeta(endInput);
    if (!startMeta || !endMeta) { // TODO: warning?
        return '';
    }
    return dateEnv.formatRange(startMeta.marker, endMeta.marker, formatter, {
        forcedStartTzo: startMeta.forcedTzo,
        forcedEndTzo: endMeta.forcedTzo,
        isEndExclusive: options.isEndExclusive,
        defaultSeparator: BASE_OPTION_DEFAULTS.defaultRangeSeparator,
    });
}
// TODO: more DRY and optimized
function buildDateEnv(settings) {
    var locale = buildLocale(settings.locale || 'en', organizeRawLocales([]).map); // TODO: don't hardcode 'en' everywhere
    return new DateEnv((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ timeZone: BASE_OPTION_DEFAULTS.timeZone, calendarSystem: 'gregory' }, settings), { locale: locale }));
}

var DEF_DEFAULTS = {
    startTime: '09:00',
    endTime: '17:00',
    daysOfWeek: [1, 2, 3, 4, 5],
    display: 'inverse-background',
    classNames: 'fc-non-business',
    groupId: '_businessHours',
};
/*
TODO: pass around as EventDefHash!!!
*/
function parseBusinessHours(input, context) {
    return parseEvents(refineInputs(input), null, context);
}
function refineInputs(input) {
    var rawDefs;
    if (input === true) {
        rawDefs = [{}]; // will get DEF_DEFAULTS verbatim
    }
    else if (Array.isArray(input)) {
        // if specifying an array, every sub-definition NEEDS a day-of-week
        rawDefs = input.filter(function (rawDef) { return rawDef.daysOfWeek; });
    }
    else if (typeof input === 'object' && input) { // non-null object
        rawDefs = [input];
    }
    else { // is probably false
        rawDefs = [];
    }
    rawDefs = rawDefs.map(function (rawDef) { return ((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, DEF_DEFAULTS), rawDef)); });
    return rawDefs;
}

function pointInsideRect(point, rect) {
    return point.left >= rect.left &&
        point.left < rect.right &&
        point.top >= rect.top &&
        point.top < rect.bottom;
}
// Returns a new rectangle that is the intersection of the two rectangles. If they don't intersect, returns false
function intersectRects(rect1, rect2) {
    var res = {
        left: Math.max(rect1.left, rect2.left),
        right: Math.min(rect1.right, rect2.right),
        top: Math.max(rect1.top, rect2.top),
        bottom: Math.min(rect1.bottom, rect2.bottom),
    };
    if (res.left < res.right && res.top < res.bottom) {
        return res;
    }
    return false;
}
function translateRect(rect, deltaX, deltaY) {
    return {
        left: rect.left + deltaX,
        right: rect.right + deltaX,
        top: rect.top + deltaY,
        bottom: rect.bottom + deltaY,
    };
}
// Returns a new point that will have been moved to reside within the given rectangle
function constrainPoint(point, rect) {
    return {
        left: Math.min(Math.max(point.left, rect.left), rect.right),
        top: Math.min(Math.max(point.top, rect.top), rect.bottom),
    };
}
// Returns a point that is the center of the given rectangle
function getRectCenter(rect) {
    return {
        left: (rect.left + rect.right) / 2,
        top: (rect.top + rect.bottom) / 2,
    };
}
// Subtracts point2's coordinates from point1's coordinates, returning a delta
function diffPoints(point1, point2) {
    return {
        left: point1.left - point2.left,
        top: point1.top - point2.top,
    };
}

var canVGrowWithinCell;
function getCanVGrowWithinCell() {
    if (canVGrowWithinCell == null) {
        canVGrowWithinCell = computeCanVGrowWithinCell();
    }
    return canVGrowWithinCell;
}
function computeCanVGrowWithinCell() {
    // for SSR, because this function is call immediately at top-level
    // TODO: just make this logic execute top-level, immediately, instead of doing lazily
    if (typeof document === 'undefined') {
        return true;
    }
    var el = document.createElement('div');
    el.style.position = 'absolute';
    el.style.top = '0px';
    el.style.left = '0px';
    el.innerHTML = '<table><tr><td><div></div></td></tr></table>';
    el.querySelector('table').style.height = '100px';
    el.querySelector('div').style.height = '100%';
    document.body.appendChild(el);
    var div = el.querySelector('div');
    var possible = div.offsetHeight > 0;
    document.body.removeChild(el);
    return possible;
}

var EMPTY_EVENT_STORE = createEmptyEventStore(); // for purecomponents. TODO: keep elsewhere
var Splitter = /** @class */ (function () {
    function Splitter() {
        this.getKeysForEventDefs = memoize(this._getKeysForEventDefs);
        this.splitDateSelection = memoize(this._splitDateSpan);
        this.splitEventStore = memoize(this._splitEventStore);
        this.splitIndividualUi = memoize(this._splitIndividualUi);
        this.splitEventDrag = memoize(this._splitInteraction);
        this.splitEventResize = memoize(this._splitInteraction);
        this.eventUiBuilders = {}; // TODO: typescript protection
    }
    Splitter.prototype.splitProps = function (props) {
        var _this = this;
        var keyInfos = this.getKeyInfo(props);
        var defKeys = this.getKeysForEventDefs(props.eventStore);
        var dateSelections = this.splitDateSelection(props.dateSelection);
        var individualUi = this.splitIndividualUi(props.eventUiBases, defKeys); // the individual *bases*
        var eventStores = this.splitEventStore(props.eventStore, defKeys);
        var eventDrags = this.splitEventDrag(props.eventDrag);
        var eventResizes = this.splitEventResize(props.eventResize);
        var splitProps = {};
        this.eventUiBuilders = mapHash(keyInfos, function (info, key) { return _this.eventUiBuilders[key] || memoize(buildEventUiForKey); });
        for (var key in keyInfos) {
            var keyInfo = keyInfos[key];
            var eventStore = eventStores[key] || EMPTY_EVENT_STORE;
            var buildEventUi = this.eventUiBuilders[key];
            splitProps[key] = {
                businessHours: keyInfo.businessHours || props.businessHours,
                dateSelection: dateSelections[key] || null,
                eventStore: eventStore,
                eventUiBases: buildEventUi(props.eventUiBases[''], keyInfo.ui, individualUi[key]),
                eventSelection: eventStore.instances[props.eventSelection] ? props.eventSelection : '',
                eventDrag: eventDrags[key] || null,
                eventResize: eventResizes[key] || null,
            };
        }
        return splitProps;
    };
    Splitter.prototype._splitDateSpan = function (dateSpan) {
        var dateSpans = {};
        if (dateSpan) {
            var keys = this.getKeysForDateSpan(dateSpan);
            for (var _i = 0, keys_1 = keys; _i < keys_1.length; _i++) {
                var key = keys_1[_i];
                dateSpans[key] = dateSpan;
            }
        }
        return dateSpans;
    };
    Splitter.prototype._getKeysForEventDefs = function (eventStore) {
        var _this = this;
        return mapHash(eventStore.defs, function (eventDef) { return _this.getKeysForEventDef(eventDef); });
    };
    Splitter.prototype._splitEventStore = function (eventStore, defKeys) {
        var defs = eventStore.defs, instances = eventStore.instances;
        var splitStores = {};
        for (var defId in defs) {
            for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
                var key = _a[_i];
                if (!splitStores[key]) {
                    splitStores[key] = createEmptyEventStore();
                }
                splitStores[key].defs[defId] = defs[defId];
            }
        }
        for (var instanceId in instances) {
            var instance = instances[instanceId];
            for (var _b = 0, _c = defKeys[instance.defId]; _b < _c.length; _b++) {
                var key = _c[_b];
                if (splitStores[key]) { // must have already been created
                    splitStores[key].instances[instanceId] = instance;
                }
            }
        }
        return splitStores;
    };
    Splitter.prototype._splitIndividualUi = function (eventUiBases, defKeys) {
        var splitHashes = {};
        for (var defId in eventUiBases) {
            if (defId) { // not the '' key
                for (var _i = 0, _a = defKeys[defId]; _i < _a.length; _i++) {
                    var key = _a[_i];
                    if (!splitHashes[key]) {
                        splitHashes[key] = {};
                    }
                    splitHashes[key][defId] = eventUiBases[defId];
                }
            }
        }
        return splitHashes;
    };
    Splitter.prototype._splitInteraction = function (interaction) {
        var splitStates = {};
        if (interaction) {
            var affectedStores_1 = this._splitEventStore(interaction.affectedEvents, this._getKeysForEventDefs(interaction.affectedEvents));
            // can't rely on defKeys because event data is mutated
            var mutatedKeysByDefId = this._getKeysForEventDefs(interaction.mutatedEvents);
            var mutatedStores_1 = this._splitEventStore(interaction.mutatedEvents, mutatedKeysByDefId);
            var populate = function (key) {
                if (!splitStates[key]) {
                    splitStates[key] = {
                        affectedEvents: affectedStores_1[key] || EMPTY_EVENT_STORE,
                        mutatedEvents: mutatedStores_1[key] || EMPTY_EVENT_STORE,
                        isEvent: interaction.isEvent,
                    };
                }
            };
            for (var key in affectedStores_1) {
                populate(key);
            }
            for (var key in mutatedStores_1) {
                populate(key);
            }
        }
        return splitStates;
    };
    return Splitter;
}());
function buildEventUiForKey(allUi, eventUiForKey, individualUi) {
    var baseParts = [];
    if (allUi) {
        baseParts.push(allUi);
    }
    if (eventUiForKey) {
        baseParts.push(eventUiForKey);
    }
    var stuff = {
        '': combineEventUis(baseParts),
    };
    if (individualUi) {
        (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(stuff, individualUi);
    }
    return stuff;
}

function getDateMeta(date, todayRange, nowDate, dateProfile) {
    return {
        dow: date.getUTCDay(),
        isDisabled: Boolean(dateProfile && !rangeContainsMarker(dateProfile.activeRange, date)),
        isOther: Boolean(dateProfile && !rangeContainsMarker(dateProfile.currentRange, date)),
        isToday: Boolean(todayRange && rangeContainsMarker(todayRange, date)),
        isPast: Boolean(nowDate ? (date < nowDate) : todayRange ? (date < todayRange.start) : false),
        isFuture: Boolean(nowDate ? (date > nowDate) : todayRange ? (date >= todayRange.end) : false),
    };
}
function getDayClassNames(meta, theme) {
    var classNames = [
        'fc-day',
        "fc-day-" + DAY_IDS[meta.dow],
    ];
    if (meta.isDisabled) {
        classNames.push('fc-day-disabled');
    }
    else {
        if (meta.isToday) {
            classNames.push('fc-day-today');
            classNames.push(theme.getClass('today'));
        }
        if (meta.isPast) {
            classNames.push('fc-day-past');
        }
        if (meta.isFuture) {
            classNames.push('fc-day-future');
        }
        if (meta.isOther) {
            classNames.push('fc-day-other');
        }
    }
    return classNames;
}
function getSlotClassNames(meta, theme) {
    var classNames = [
        'fc-slot',
        "fc-slot-" + DAY_IDS[meta.dow],
    ];
    if (meta.isDisabled) {
        classNames.push('fc-slot-disabled');
    }
    else {
        if (meta.isToday) {
            classNames.push('fc-slot-today');
            classNames.push(theme.getClass('today'));
        }
        if (meta.isPast) {
            classNames.push('fc-slot-past');
        }
        if (meta.isFuture) {
            classNames.push('fc-slot-future');
        }
    }
    return classNames;
}

function buildNavLinkData(date, type) {
    if (type === void 0) { type = 'day'; }
    return JSON.stringify({
        date: formatDayString(date),
        type: type,
    });
}

var _isRtlScrollbarOnLeft = null;
function getIsRtlScrollbarOnLeft() {
    if (_isRtlScrollbarOnLeft === null) {
        _isRtlScrollbarOnLeft = computeIsRtlScrollbarOnLeft();
    }
    return _isRtlScrollbarOnLeft;
}
function computeIsRtlScrollbarOnLeft() {
    var outerEl = document.createElement('div');
    applyStyle(outerEl, {
        position: 'absolute',
        top: -1000,
        left: 0,
        border: 0,
        padding: 0,
        overflow: 'scroll',
        direction: 'rtl',
    });
    outerEl.innerHTML = '<div></div>';
    document.body.appendChild(outerEl);
    var innerEl = outerEl.firstChild;
    var res = innerEl.getBoundingClientRect().left > outerEl.getBoundingClientRect().left;
    removeElement(outerEl);
    return res;
}

var _scrollbarWidths;
function getScrollbarWidths() {
    if (!_scrollbarWidths) {
        _scrollbarWidths = computeScrollbarWidths();
    }
    return _scrollbarWidths;
}
function computeScrollbarWidths() {
    var el = document.createElement('div');
    el.style.overflow = 'scroll';
    el.style.position = 'absolute';
    el.style.top = '-9999px';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    var res = computeScrollbarWidthsForEl(el);
    document.body.removeChild(el);
    return res;
}
// WARNING: will include border
function computeScrollbarWidthsForEl(el) {
    return {
        x: el.offsetHeight - el.clientHeight,
        y: el.offsetWidth - el.clientWidth,
    };
}

function computeEdges(el, getPadding) {
    if (getPadding === void 0) { getPadding = false; }
    var computedStyle = window.getComputedStyle(el);
    var borderLeft = parseInt(computedStyle.borderLeftWidth, 10) || 0;
    var borderRight = parseInt(computedStyle.borderRightWidth, 10) || 0;
    var borderTop = parseInt(computedStyle.borderTopWidth, 10) || 0;
    var borderBottom = parseInt(computedStyle.borderBottomWidth, 10) || 0;
    var badScrollbarWidths = computeScrollbarWidthsForEl(el); // includes border!
    var scrollbarLeftRight = badScrollbarWidths.y - borderLeft - borderRight;
    var scrollbarBottom = badScrollbarWidths.x - borderTop - borderBottom;
    var res = {
        borderLeft: borderLeft,
        borderRight: borderRight,
        borderTop: borderTop,
        borderBottom: borderBottom,
        scrollbarBottom: scrollbarBottom,
        scrollbarLeft: 0,
        scrollbarRight: 0,
    };
    if (getIsRtlScrollbarOnLeft() && computedStyle.direction === 'rtl') { // is the scrollbar on the left side?
        res.scrollbarLeft = scrollbarLeftRight;
    }
    else {
        res.scrollbarRight = scrollbarLeftRight;
    }
    if (getPadding) {
        res.paddingLeft = parseInt(computedStyle.paddingLeft, 10) || 0;
        res.paddingRight = parseInt(computedStyle.paddingRight, 10) || 0;
        res.paddingTop = parseInt(computedStyle.paddingTop, 10) || 0;
        res.paddingBottom = parseInt(computedStyle.paddingBottom, 10) || 0;
    }
    return res;
}
function computeInnerRect(el, goWithinPadding, doFromWindowViewport) {
    if (goWithinPadding === void 0) { goWithinPadding = false; }
    var outerRect = doFromWindowViewport ? el.getBoundingClientRect() : computeRect(el);
    var edges = computeEdges(el, goWithinPadding);
    var res = {
        left: outerRect.left + edges.borderLeft + edges.scrollbarLeft,
        right: outerRect.right - edges.borderRight - edges.scrollbarRight,
        top: outerRect.top + edges.borderTop,
        bottom: outerRect.bottom - edges.borderBottom - edges.scrollbarBottom,
    };
    if (goWithinPadding) {
        res.left += edges.paddingLeft;
        res.right -= edges.paddingRight;
        res.top += edges.paddingTop;
        res.bottom -= edges.paddingBottom;
    }
    return res;
}
function computeRect(el) {
    var rect = el.getBoundingClientRect();
    return {
        left: rect.left + window.pageXOffset,
        top: rect.top + window.pageYOffset,
        right: rect.right + window.pageXOffset,
        bottom: rect.bottom + window.pageYOffset,
    };
}
function computeClippedClientRect(el) {
    var clippingParents = getClippingParents(el);
    var rect = el.getBoundingClientRect();
    for (var _i = 0, clippingParents_1 = clippingParents; _i < clippingParents_1.length; _i++) {
        var clippingParent = clippingParents_1[_i];
        var intersection = intersectRects(rect, clippingParent.getBoundingClientRect());
        if (intersection) {
            rect = intersection;
        }
        else {
            return null;
        }
    }
    return rect;
}
function computeHeightAndMargins(el) {
    return el.getBoundingClientRect().height + computeVMargins(el);
}
function computeVMargins(el) {
    var computed = window.getComputedStyle(el);
    return parseInt(computed.marginTop, 10) +
        parseInt(computed.marginBottom, 10);
}
// does not return window
function getClippingParents(el) {
    var parents = [];
    while (el instanceof HTMLElement) { // will stop when gets to document or null
        var computedStyle = window.getComputedStyle(el);
        if (computedStyle.position === 'fixed') {
            break;
        }
        if ((/(auto|scroll)/).test(computedStyle.overflow + computedStyle.overflowY + computedStyle.overflowX)) {
            parents.push(el);
        }
        el = el.parentNode;
    }
    return parents;
}

// given a function that resolves a result asynchronously.
// the function can either call passed-in success and failure callbacks,
// or it can return a promise.
// if you need to pass additional params to func, bind them first.
function unpromisify(func, success, failure) {
    // guard against success/failure callbacks being called more than once
    // and guard against a promise AND callback being used together.
    var isResolved = false;
    var wrappedSuccess = function () {
        if (!isResolved) {
            isResolved = true;
            success.apply(this, arguments); // eslint-disable-line prefer-rest-params
        }
    };
    var wrappedFailure = function () {
        if (!isResolved) {
            isResolved = true;
            if (failure) {
                failure.apply(this, arguments); // eslint-disable-line prefer-rest-params
            }
        }
    };
    var res = func(wrappedSuccess, wrappedFailure);
    if (res && typeof res.then === 'function') {
        res.then(wrappedSuccess, wrappedFailure);
    }
}

var Emitter = /** @class */ (function () {
    function Emitter() {
        this.handlers = {};
        this.thisContext = null;
    }
    Emitter.prototype.setThisContext = function (thisContext) {
        this.thisContext = thisContext;
    };
    Emitter.prototype.setOptions = function (options) {
        this.options = options;
    };
    Emitter.prototype.on = function (type, handler) {
        addToHash(this.handlers, type, handler);
    };
    Emitter.prototype.off = function (type, handler) {
        removeFromHash(this.handlers, type, handler);
    };
    Emitter.prototype.trigger = function (type) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var attachedHandlers = this.handlers[type] || [];
        var optionHandler = this.options && this.options[type];
        var handlers = [].concat(optionHandler || [], attachedHandlers);
        for (var _a = 0, handlers_1 = handlers; _a < handlers_1.length; _a++) {
            var handler = handlers_1[_a];
            handler.apply(this.thisContext, args);
        }
    };
    Emitter.prototype.hasHandlers = function (type) {
        return (this.handlers[type] && this.handlers[type].length) ||
            (this.options && this.options[type]);
    };
    return Emitter;
}());
function addToHash(hash, type, handler) {
    (hash[type] || (hash[type] = []))
        .push(handler);
}
function removeFromHash(hash, type, handler) {
    if (handler) {
        if (hash[type]) {
            hash[type] = hash[type].filter(function (func) { return func !== handler; });
        }
    }
    else {
        delete hash[type]; // remove all handler funcs for this type
    }
}

/*
Records offset information for a set of elements, relative to an origin element.
Can record the left/right OR the top/bottom OR both.
Provides methods for querying the cache by position.
*/
var PositionCache = /** @class */ (function () {
    function PositionCache(originEl, els, isHorizontal, isVertical) {
        this.els = els;
        var originClientRect = this.originClientRect = originEl.getBoundingClientRect(); // relative to viewport top-left
        if (isHorizontal) {
            this.buildElHorizontals(originClientRect.left);
        }
        if (isVertical) {
            this.buildElVerticals(originClientRect.top);
        }
    }
    // Populates the left/right internal coordinate arrays
    PositionCache.prototype.buildElHorizontals = function (originClientLeft) {
        var lefts = [];
        var rights = [];
        for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
            var el = _a[_i];
            var rect = el.getBoundingClientRect();
            lefts.push(rect.left - originClientLeft);
            rights.push(rect.right - originClientLeft);
        }
        this.lefts = lefts;
        this.rights = rights;
    };
    // Populates the top/bottom internal coordinate arrays
    PositionCache.prototype.buildElVerticals = function (originClientTop) {
        var tops = [];
        var bottoms = [];
        for (var _i = 0, _a = this.els; _i < _a.length; _i++) {
            var el = _a[_i];
            var rect = el.getBoundingClientRect();
            tops.push(rect.top - originClientTop);
            bottoms.push(rect.bottom - originClientTop);
        }
        this.tops = tops;
        this.bottoms = bottoms;
    };
    // Given a left offset (from document left), returns the index of the el that it horizontally intersects.
    // If no intersection is made, returns undefined.
    PositionCache.prototype.leftToIndex = function (leftPosition) {
        var _a = this, lefts = _a.lefts, rights = _a.rights;
        var len = lefts.length;
        var i;
        for (i = 0; i < len; i += 1) {
            if (leftPosition >= lefts[i] && leftPosition < rights[i]) {
                return i;
            }
        }
        return undefined; // TODO: better
    };
    // Given a top offset (from document top), returns the index of the el that it vertically intersects.
    // If no intersection is made, returns undefined.
    PositionCache.prototype.topToIndex = function (topPosition) {
        var _a = this, tops = _a.tops, bottoms = _a.bottoms;
        var len = tops.length;
        var i;
        for (i = 0; i < len; i += 1) {
            if (topPosition >= tops[i] && topPosition < bottoms[i]) {
                return i;
            }
        }
        return undefined; // TODO: better
    };
    // Gets the width of the element at the given index
    PositionCache.prototype.getWidth = function (leftIndex) {
        return this.rights[leftIndex] - this.lefts[leftIndex];
    };
    // Gets the height of the element at the given index
    PositionCache.prototype.getHeight = function (topIndex) {
        return this.bottoms[topIndex] - this.tops[topIndex];
    };
    return PositionCache;
}());

/* eslint max-classes-per-file: "off" */
/*
An object for getting/setting scroll-related information for an element.
Internally, this is done very differently for window versus DOM element,
so this object serves as a common interface.
*/
var ScrollController = /** @class */ (function () {
    function ScrollController() {
    }
    ScrollController.prototype.getMaxScrollTop = function () {
        return this.getScrollHeight() - this.getClientHeight();
    };
    ScrollController.prototype.getMaxScrollLeft = function () {
        return this.getScrollWidth() - this.getClientWidth();
    };
    ScrollController.prototype.canScrollVertically = function () {
        return this.getMaxScrollTop() > 0;
    };
    ScrollController.prototype.canScrollHorizontally = function () {
        return this.getMaxScrollLeft() > 0;
    };
    ScrollController.prototype.canScrollUp = function () {
        return this.getScrollTop() > 0;
    };
    ScrollController.prototype.canScrollDown = function () {
        return this.getScrollTop() < this.getMaxScrollTop();
    };
    ScrollController.prototype.canScrollLeft = function () {
        return this.getScrollLeft() > 0;
    };
    ScrollController.prototype.canScrollRight = function () {
        return this.getScrollLeft() < this.getMaxScrollLeft();
    };
    return ScrollController;
}());
var ElementScrollController = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ElementScrollController, _super);
    function ElementScrollController(el) {
        var _this = _super.call(this) || this;
        _this.el = el;
        return _this;
    }
    ElementScrollController.prototype.getScrollTop = function () {
        return this.el.scrollTop;
    };
    ElementScrollController.prototype.getScrollLeft = function () {
        return this.el.scrollLeft;
    };
    ElementScrollController.prototype.setScrollTop = function (top) {
        this.el.scrollTop = top;
    };
    ElementScrollController.prototype.setScrollLeft = function (left) {
        this.el.scrollLeft = left;
    };
    ElementScrollController.prototype.getScrollWidth = function () {
        return this.el.scrollWidth;
    };
    ElementScrollController.prototype.getScrollHeight = function () {
        return this.el.scrollHeight;
    };
    ElementScrollController.prototype.getClientHeight = function () {
        return this.el.clientHeight;
    };
    ElementScrollController.prototype.getClientWidth = function () {
        return this.el.clientWidth;
    };
    return ElementScrollController;
}(ScrollController));
var WindowScrollController = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(WindowScrollController, _super);
    function WindowScrollController() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WindowScrollController.prototype.getScrollTop = function () {
        return window.pageYOffset;
    };
    WindowScrollController.prototype.getScrollLeft = function () {
        return window.pageXOffset;
    };
    WindowScrollController.prototype.setScrollTop = function (n) {
        window.scroll(window.pageXOffset, n);
    };
    WindowScrollController.prototype.setScrollLeft = function (n) {
        window.scroll(n, window.pageYOffset);
    };
    WindowScrollController.prototype.getScrollWidth = function () {
        return document.documentElement.scrollWidth;
    };
    WindowScrollController.prototype.getScrollHeight = function () {
        return document.documentElement.scrollHeight;
    };
    WindowScrollController.prototype.getClientHeight = function () {
        return document.documentElement.clientHeight;
    };
    WindowScrollController.prototype.getClientWidth = function () {
        return document.documentElement.clientWidth;
    };
    return WindowScrollController;
}(ScrollController));

var Theme = /** @class */ (function () {
    function Theme(calendarOptions) {
        if (this.iconOverrideOption) {
            this.setIconOverride(calendarOptions[this.iconOverrideOption]);
        }
    }
    Theme.prototype.setIconOverride = function (iconOverrideHash) {
        var iconClassesCopy;
        var buttonName;
        if (typeof iconOverrideHash === 'object' && iconOverrideHash) { // non-null object
            iconClassesCopy = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.iconClasses);
            for (buttonName in iconOverrideHash) {
                iconClassesCopy[buttonName] = this.applyIconOverridePrefix(iconOverrideHash[buttonName]);
            }
            this.iconClasses = iconClassesCopy;
        }
        else if (iconOverrideHash === false) {
            this.iconClasses = {};
        }
    };
    Theme.prototype.applyIconOverridePrefix = function (className) {
        var prefix = this.iconOverridePrefix;
        if (prefix && className.indexOf(prefix) !== 0) { // if not already present
            className = prefix + className;
        }
        return className;
    };
    Theme.prototype.getClass = function (key) {
        return this.classes[key] || '';
    };
    Theme.prototype.getIconClass = function (buttonName, isRtl) {
        var className;
        if (isRtl && this.rtlIconClasses) {
            className = this.rtlIconClasses[buttonName] || this.iconClasses[buttonName];
        }
        else {
            className = this.iconClasses[buttonName];
        }
        if (className) {
            return this.baseIconClass + " " + className;
        }
        return '';
    };
    Theme.prototype.getCustomButtonIconClass = function (customButtonProps) {
        var className;
        if (this.iconOverrideCustomButtonOption) {
            className = customButtonProps[this.iconOverrideCustomButtonOption];
            if (className) {
                return this.baseIconClass + " " + this.applyIconOverridePrefix(className);
            }
        }
        return '';
    };
    return Theme;
}());
Theme.prototype.classes = {};
Theme.prototype.iconClasses = {};
Theme.prototype.baseIconClass = '';
Theme.prototype.iconOverridePrefix = '';

var ScrollResponder = /** @class */ (function () {
    function ScrollResponder(execFunc, emitter, scrollTime, scrollTimeReset) {
        var _this = this;
        this.execFunc = execFunc;
        this.emitter = emitter;
        this.scrollTime = scrollTime;
        this.scrollTimeReset = scrollTimeReset;
        this.handleScrollRequest = function (request) {
            _this.queuedRequest = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, _this.queuedRequest || {}, request);
            _this.drain();
        };
        emitter.on('_scrollRequest', this.handleScrollRequest);
        this.fireInitialScroll();
    }
    ScrollResponder.prototype.detach = function () {
        this.emitter.off('_scrollRequest', this.handleScrollRequest);
    };
    ScrollResponder.prototype.update = function (isDatesNew) {
        if (isDatesNew && this.scrollTimeReset) {
            this.fireInitialScroll(); // will drain
        }
        else {
            this.drain();
        }
    };
    ScrollResponder.prototype.fireInitialScroll = function () {
        this.handleScrollRequest({
            time: this.scrollTime,
        });
    };
    ScrollResponder.prototype.drain = function () {
        if (this.queuedRequest && this.execFunc(this.queuedRequest)) {
            this.queuedRequest = null;
        }
    };
    return ScrollResponder;
}());

var ViewContextType = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createContext)({}); // for Components
function buildViewContext(viewSpec, viewApi, viewOptions, dateProfileGenerator, dateEnv, theme, pluginHooks, dispatch, getCurrentData, emitter, calendarApi, registerInteractiveComponent, unregisterInteractiveComponent) {
    return {
        dateEnv: dateEnv,
        options: viewOptions,
        pluginHooks: pluginHooks,
        emitter: emitter,
        dispatch: dispatch,
        getCurrentData: getCurrentData,
        calendarApi: calendarApi,
        viewSpec: viewSpec,
        viewApi: viewApi,
        dateProfileGenerator: dateProfileGenerator,
        theme: theme,
        isRtl: viewOptions.direction === 'rtl',
        addResizeHandler: function (handler) {
            emitter.on('_resize', handler);
        },
        removeResizeHandler: function (handler) {
            emitter.off('_resize', handler);
        },
        createScrollResponder: function (execFunc) {
            return new ScrollResponder(execFunc, emitter, createDuration(viewOptions.scrollTime), viewOptions.scrollTimeReset);
        },
        registerInteractiveComponent: registerInteractiveComponent,
        unregisterInteractiveComponent: unregisterInteractiveComponent,
    };
}

/* eslint max-classes-per-file: off */
var PureComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(PureComponent, _super);
    function PureComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PureComponent.prototype.shouldComponentUpdate = function (nextProps, nextState) {
        if (this.debug) {
            // eslint-disable-next-line no-console
            console.log(getUnequalProps(nextProps, this.props), getUnequalProps(nextState, this.state));
        }
        return !compareObjs(this.props, nextProps, this.propEquality) ||
            !compareObjs(this.state, nextState, this.stateEquality);
    };
    PureComponent.addPropsEquality = addPropsEquality;
    PureComponent.addStateEquality = addStateEquality;
    PureComponent.contextType = ViewContextType;
    return PureComponent;
}(_vdom_js__WEBPACK_IMPORTED_MODULE_1__.Component));
PureComponent.prototype.propEquality = {};
PureComponent.prototype.stateEquality = {};
var BaseComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(BaseComponent, _super);
    function BaseComponent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    BaseComponent.contextType = ViewContextType;
    return BaseComponent;
}(PureComponent));
function addPropsEquality(propEquality) {
    var hash = Object.create(this.prototype.propEquality);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(hash, propEquality);
    this.prototype.propEquality = hash;
}
function addStateEquality(stateEquality) {
    var hash = Object.create(this.prototype.stateEquality);
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(hash, stateEquality);
    this.prototype.stateEquality = hash;
}
// use other one
function setRef(ref, current) {
    if (typeof ref === 'function') {
        ref(current);
    }
    else if (ref) {
        // see https://github.com/facebook/react/issues/13029
        ref.current = current;
    }
}

/*
an INTERACTABLE date component

PURPOSES:
- hook up to fg, fill, and mirror renderers
- interface for dragging and hits
*/
var DateComponent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DateComponent, _super);
    function DateComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.uid = guid();
        return _this;
    }
    // Hit System
    // -----------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.prepareHits = function () {
    };
    DateComponent.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
        return null; // this should be abstract
    };
    // Pointer Interaction Utils
    // -----------------------------------------------------------------------------------------------------------------
    DateComponent.prototype.isValidSegDownEl = function (el) {
        return !this.props.eventDrag && // HACK
            !this.props.eventResize && // HACK
            !elementClosest(el, '.fc-event-mirror');
    };
    DateComponent.prototype.isValidDateDownEl = function (el) {
        return !elementClosest(el, '.fc-event:not(.fc-bg-event)') &&
            !elementClosest(el, '.fc-more-link') && // a "more.." link
            !elementClosest(el, 'a[data-navlink]') && // a clickable nav link
            !elementClosest(el, '.fc-popover'); // hack
    };
    return DateComponent;
}(BaseComponent));

// TODO: easier way to add new hooks? need to update a million things
function createPlugin(input) {
    return {
        id: guid(),
        deps: input.deps || [],
        reducers: input.reducers || [],
        isLoadingFuncs: input.isLoadingFuncs || [],
        contextInit: [].concat(input.contextInit || []),
        eventRefiners: input.eventRefiners || {},
        eventDefMemberAdders: input.eventDefMemberAdders || [],
        eventSourceRefiners: input.eventSourceRefiners || {},
        isDraggableTransformers: input.isDraggableTransformers || [],
        eventDragMutationMassagers: input.eventDragMutationMassagers || [],
        eventDefMutationAppliers: input.eventDefMutationAppliers || [],
        dateSelectionTransformers: input.dateSelectionTransformers || [],
        datePointTransforms: input.datePointTransforms || [],
        dateSpanTransforms: input.dateSpanTransforms || [],
        views: input.views || {},
        viewPropsTransformers: input.viewPropsTransformers || [],
        isPropsValid: input.isPropsValid || null,
        externalDefTransforms: input.externalDefTransforms || [],
        viewContainerAppends: input.viewContainerAppends || [],
        eventDropTransformers: input.eventDropTransformers || [],
        componentInteractions: input.componentInteractions || [],
        calendarInteractions: input.calendarInteractions || [],
        themeClasses: input.themeClasses || {},
        eventSourceDefs: input.eventSourceDefs || [],
        cmdFormatter: input.cmdFormatter,
        recurringTypes: input.recurringTypes || [],
        namedTimeZonedImpl: input.namedTimeZonedImpl,
        initialView: input.initialView || '',
        elementDraggingImpl: input.elementDraggingImpl,
        optionChangeHandlers: input.optionChangeHandlers || {},
        scrollGridImpl: input.scrollGridImpl || null,
        contentTypeHandlers: input.contentTypeHandlers || {},
        listenerRefiners: input.listenerRefiners || {},
        optionRefiners: input.optionRefiners || {},
        propSetHandlers: input.propSetHandlers || {},
    };
}
function buildPluginHooks(pluginDefs, globalDefs) {
    var isAdded = {};
    var hooks = {
        reducers: [],
        isLoadingFuncs: [],
        contextInit: [],
        eventRefiners: {},
        eventDefMemberAdders: [],
        eventSourceRefiners: {},
        isDraggableTransformers: [],
        eventDragMutationMassagers: [],
        eventDefMutationAppliers: [],
        dateSelectionTransformers: [],
        datePointTransforms: [],
        dateSpanTransforms: [],
        views: {},
        viewPropsTransformers: [],
        isPropsValid: null,
        externalDefTransforms: [],
        viewContainerAppends: [],
        eventDropTransformers: [],
        componentInteractions: [],
        calendarInteractions: [],
        themeClasses: {},
        eventSourceDefs: [],
        cmdFormatter: null,
        recurringTypes: [],
        namedTimeZonedImpl: null,
        initialView: '',
        elementDraggingImpl: null,
        optionChangeHandlers: {},
        scrollGridImpl: null,
        contentTypeHandlers: {},
        listenerRefiners: {},
        optionRefiners: {},
        propSetHandlers: {},
    };
    function addDefs(defs) {
        for (var _i = 0, defs_1 = defs; _i < defs_1.length; _i++) {
            var def = defs_1[_i];
            if (!isAdded[def.id]) {
                isAdded[def.id] = true;
                addDefs(def.deps);
                hooks = combineHooks(hooks, def);
            }
        }
    }
    if (pluginDefs) {
        addDefs(pluginDefs);
    }
    addDefs(globalDefs);
    return hooks;
}
function buildBuildPluginHooks() {
    var currentOverrideDefs = [];
    var currentGlobalDefs = [];
    var currentHooks;
    return function (overrideDefs, globalDefs) {
        if (!currentHooks || !isArraysEqual(overrideDefs, currentOverrideDefs) || !isArraysEqual(globalDefs, currentGlobalDefs)) {
            currentHooks = buildPluginHooks(overrideDefs, globalDefs);
        }
        currentOverrideDefs = overrideDefs;
        currentGlobalDefs = globalDefs;
        return currentHooks;
    };
}
function combineHooks(hooks0, hooks1) {
    return {
        reducers: hooks0.reducers.concat(hooks1.reducers),
        isLoadingFuncs: hooks0.isLoadingFuncs.concat(hooks1.isLoadingFuncs),
        contextInit: hooks0.contextInit.concat(hooks1.contextInit),
        eventRefiners: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hooks0.eventRefiners), hooks1.eventRefiners),
        eventDefMemberAdders: hooks0.eventDefMemberAdders.concat(hooks1.eventDefMemberAdders),
        eventSourceRefiners: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hooks0.eventSourceRefiners), hooks1.eventSourceRefiners),
        isDraggableTransformers: hooks0.isDraggableTransformers.concat(hooks1.isDraggableTransformers),
        eventDragMutationMassagers: hooks0.eventDragMutationMassagers.concat(hooks1.eventDragMutationMassagers),
        eventDefMutationAppliers: hooks0.eventDefMutationAppliers.concat(hooks1.eventDefMutationAppliers),
        dateSelectionTransformers: hooks0.dateSelectionTransformers.concat(hooks1.dateSelectionTransformers),
        datePointTransforms: hooks0.datePointTransforms.concat(hooks1.datePointTransforms),
        dateSpanTransforms: hooks0.dateSpanTransforms.concat(hooks1.dateSpanTransforms),
        views: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hooks0.views), hooks1.views),
        viewPropsTransformers: hooks0.viewPropsTransformers.concat(hooks1.viewPropsTransformers),
        isPropsValid: hooks1.isPropsValid || hooks0.isPropsValid,
        externalDefTransforms: hooks0.externalDefTransforms.concat(hooks1.externalDefTransforms),
        viewContainerAppends: hooks0.viewContainerAppends.concat(hooks1.viewContainerAppends),
        eventDropTransformers: hooks0.eventDropTransformers.concat(hooks1.eventDropTransformers),
        calendarInteractions: hooks0.calendarInteractions.concat(hooks1.calendarInteractions),
        componentInteractions: hooks0.componentInteractions.concat(hooks1.componentInteractions),
        themeClasses: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hooks0.themeClasses), hooks1.themeClasses),
        eventSourceDefs: hooks0.eventSourceDefs.concat(hooks1.eventSourceDefs),
        cmdFormatter: hooks1.cmdFormatter || hooks0.cmdFormatter,
        recurringTypes: hooks0.recurringTypes.concat(hooks1.recurringTypes),
        namedTimeZonedImpl: hooks1.namedTimeZonedImpl || hooks0.namedTimeZonedImpl,
        initialView: hooks0.initialView || hooks1.initialView,
        elementDraggingImpl: hooks0.elementDraggingImpl || hooks1.elementDraggingImpl,
        optionChangeHandlers: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hooks0.optionChangeHandlers), hooks1.optionChangeHandlers),
        scrollGridImpl: hooks1.scrollGridImpl || hooks0.scrollGridImpl,
        contentTypeHandlers: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hooks0.contentTypeHandlers), hooks1.contentTypeHandlers),
        listenerRefiners: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hooks0.listenerRefiners), hooks1.listenerRefiners),
        optionRefiners: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hooks0.optionRefiners), hooks1.optionRefiners),
        propSetHandlers: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, hooks0.propSetHandlers), hooks1.propSetHandlers),
    };
}

var StandardTheme = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(StandardTheme, _super);
    function StandardTheme() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return StandardTheme;
}(Theme));
StandardTheme.prototype.classes = {
    root: 'fc-theme-standard',
    tableCellShaded: 'fc-cell-shaded',
    buttonGroup: 'fc-button-group',
    button: 'fc-button fc-button-primary',
    buttonActive: 'fc-button-active',
};
StandardTheme.prototype.baseIconClass = 'fc-icon';
StandardTheme.prototype.iconClasses = {
    close: 'fc-icon-x',
    prev: 'fc-icon-chevron-left',
    next: 'fc-icon-chevron-right',
    prevYear: 'fc-icon-chevrons-left',
    nextYear: 'fc-icon-chevrons-right',
};
StandardTheme.prototype.rtlIconClasses = {
    prev: 'fc-icon-chevron-right',
    next: 'fc-icon-chevron-left',
    prevYear: 'fc-icon-chevrons-right',
    nextYear: 'fc-icon-chevrons-left',
};
StandardTheme.prototype.iconOverrideOption = 'buttonIcons'; // TODO: make TS-friendly
StandardTheme.prototype.iconOverrideCustomButtonOption = 'icon';
StandardTheme.prototype.iconOverridePrefix = 'fc-icon-';

function compileViewDefs(defaultConfigs, overrideConfigs) {
    var hash = {};
    var viewType;
    for (viewType in defaultConfigs) {
        ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
    }
    for (viewType in overrideConfigs) {
        ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs);
    }
    return hash;
}
function ensureViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
    if (hash[viewType]) {
        return hash[viewType];
    }
    var viewDef = buildViewDef(viewType, hash, defaultConfigs, overrideConfigs);
    if (viewDef) {
        hash[viewType] = viewDef;
    }
    return viewDef;
}
function buildViewDef(viewType, hash, defaultConfigs, overrideConfigs) {
    var defaultConfig = defaultConfigs[viewType];
    var overrideConfig = overrideConfigs[viewType];
    var queryProp = function (name) { return ((defaultConfig && defaultConfig[name] !== null) ? defaultConfig[name] :
        ((overrideConfig && overrideConfig[name] !== null) ? overrideConfig[name] : null)); };
    var theComponent = queryProp('component');
    var superType = queryProp('superType');
    var superDef = null;
    if (superType) {
        if (superType === viewType) {
            throw new Error('Can\'t have a custom view type that references itself');
        }
        superDef = ensureViewDef(superType, hash, defaultConfigs, overrideConfigs);
    }
    if (!theComponent && superDef) {
        theComponent = superDef.component;
    }
    if (!theComponent) {
        return null; // don't throw a warning, might be settings for a single-unit view
    }
    return {
        type: viewType,
        component: theComponent,
        defaults: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, (superDef ? superDef.defaults : {})), (defaultConfig ? defaultConfig.rawOptions : {})),
        overrides: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, (superDef ? superDef.overrides : {})), (overrideConfig ? overrideConfig.rawOptions : {})),
    };
}

/* eslint max-classes-per-file: off */
// NOTE: in JSX, you should always use this class with <HookProps> arg. otherwise, will default to any???
var RenderHook = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(RenderHook, _super);
    function RenderHook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootElRef = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.handleRootEl = function (el) {
            setRef(_this.rootElRef, el);
            if (_this.props.elRef) {
                setRef(_this.props.elRef, el);
            }
        };
        return _this;
    }
    RenderHook.prototype.render = function () {
        var _this = this;
        var props = this.props;
        var hookProps = props.hookProps;
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(MountHook, { hookProps: hookProps, didMount: props.didMount, willUnmount: props.willUnmount, elRef: this.handleRootEl }, function (rootElRef) { return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ContentHook, { hookProps: hookProps, content: props.content, defaultContent: props.defaultContent, backupElRef: _this.rootElRef }, function (innerElRef, innerContent) { return props.children(rootElRef, normalizeClassNames(props.classNames, hookProps), innerElRef, innerContent); })); }));
    };
    return RenderHook;
}(BaseComponent));
// TODO: rename to be about function, not default. use in above type
// for forcing rerender of components that use the ContentHook
var CustomContentRenderContext = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createContext)(0);
function ContentHook(props) {
    return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(CustomContentRenderContext.Consumer, null, function (renderId) { return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ContentHookInner, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ renderId: renderId }, props))); }));
}
var ContentHookInner = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ContentHookInner, _super);
    function ContentHookInner() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.innerElRef = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        return _this;
    }
    ContentHookInner.prototype.render = function () {
        return this.props.children(this.innerElRef, this.renderInnerContent());
    };
    ContentHookInner.prototype.componentDidMount = function () {
        this.updateCustomContent();
    };
    ContentHookInner.prototype.componentDidUpdate = function () {
        this.updateCustomContent();
    };
    ContentHookInner.prototype.componentWillUnmount = function () {
        if (this.customContentInfo && this.customContentInfo.destroy) {
            this.customContentInfo.destroy();
        }
    };
    ContentHookInner.prototype.renderInnerContent = function () {
        var contentTypeHandlers = this.context.pluginHooks.contentTypeHandlers;
        var _a = this, props = _a.props, customContentInfo = _a.customContentInfo;
        var rawVal = props.content;
        var innerContent = normalizeContent(rawVal, props.hookProps);
        var innerContentVDom = null;
        if (innerContent === undefined) { // use the default
            innerContent = normalizeContent(props.defaultContent, props.hookProps);
        }
        if (innerContent !== undefined) { // we allow custom content handlers to return nothing
            if (customContentInfo) {
                customContentInfo.contentVal = innerContent[customContentInfo.contentKey];
            }
            else if (typeof innerContent === 'object') {
                // look for a prop that would indicate a custom content handler is needed
                for (var contentKey in contentTypeHandlers) {
                    if (innerContent[contentKey] !== undefined) {
                        var stuff = contentTypeHandlers[contentKey]();
                        customContentInfo = this.customContentInfo = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ contentKey: contentKey, contentVal: innerContent[contentKey] }, stuff);
                        break;
                    }
                }
            }
            if (customContentInfo) {
                innerContentVDom = []; // signal that something was specified
            }
            else {
                innerContentVDom = innerContent; // assume a [p]react vdom node. use it
            }
        }
        return innerContentVDom;
    };
    ContentHookInner.prototype.updateCustomContent = function () {
        if (this.customContentInfo) {
            this.customContentInfo.render(this.innerElRef.current || this.props.backupElRef.current, // the element to render into
            this.customContentInfo.contentVal);
        }
    };
    return ContentHookInner;
}(BaseComponent));
var MountHook = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MountHook, _super);
    function MountHook() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleRootEl = function (rootEl) {
            _this.rootEl = rootEl;
            if (_this.props.elRef) {
                setRef(_this.props.elRef, rootEl);
            }
        };
        return _this;
    }
    MountHook.prototype.render = function () {
        return this.props.children(this.handleRootEl);
    };
    MountHook.prototype.componentDidMount = function () {
        var callback = this.props.didMount;
        if (callback) {
            callback((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.props.hookProps), { el: this.rootEl }));
        }
    };
    MountHook.prototype.componentWillUnmount = function () {
        var callback = this.props.willUnmount;
        if (callback) {
            callback((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, this.props.hookProps), { el: this.rootEl }));
        }
    };
    return MountHook;
}(BaseComponent));
function buildClassNameNormalizer() {
    var currentGenerator;
    var currentHookProps;
    var currentClassNames = [];
    return function (generator, hookProps) {
        if (!currentHookProps || !isPropsEqual(currentHookProps, hookProps) || generator !== currentGenerator) {
            currentGenerator = generator;
            currentHookProps = hookProps;
            currentClassNames = normalizeClassNames(generator, hookProps);
        }
        return currentClassNames;
    };
}
function normalizeClassNames(classNames, hookProps) {
    if (typeof classNames === 'function') {
        classNames = classNames(hookProps);
    }
    return parseClassNames(classNames);
}
function normalizeContent(input, hookProps) {
    if (typeof input === 'function') {
        return input(hookProps, _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement); // give the function the vdom-creation func
    }
    return input;
}

var ViewRoot = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ViewRoot, _super);
    function ViewRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.normalizeClassNames = buildClassNameNormalizer();
        return _this;
    }
    ViewRoot.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        var options = context.options;
        var hookProps = { view: context.viewApi };
        var customClassNames = this.normalizeClassNames(options.viewClassNames, hookProps);
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(MountHook, { hookProps: hookProps, didMount: options.viewDidMount, willUnmount: options.viewWillUnmount, elRef: props.elRef }, function (rootElRef) { return props.children(rootElRef, ["fc-" + props.viewSpec.type + "-view", 'fc-view'].concat(customClassNames)); }));
    };
    return ViewRoot;
}(BaseComponent));

function parseViewConfigs(inputs) {
    return mapHash(inputs, parseViewConfig);
}
function parseViewConfig(input) {
    var rawOptions = typeof input === 'function' ?
        { component: input } :
        input;
    var component = rawOptions.component;
    if (rawOptions.content) {
        component = createViewHookComponent(rawOptions);
        // TODO: remove content/classNames/didMount/etc from options?
    }
    return {
        superType: rawOptions.type,
        component: component,
        rawOptions: rawOptions,
    };
}
function createViewHookComponent(options) {
    return function (viewProps) { return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewContextType.Consumer, null, function (context) { return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewRoot, { viewSpec: context.viewSpec }, function (viewElRef, viewClassNames) {
        var hookProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, viewProps), { nextDayThreshold: context.options.nextDayThreshold });
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(RenderHook, { hookProps: hookProps, classNames: options.classNames, content: options.content, didMount: options.didMount, willUnmount: options.willUnmount, elRef: viewElRef }, function (rootElRef, customClassNames, innerElRef, innerContent) { return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: viewClassNames.concat(customClassNames).join(' '), ref: rootElRef }, innerContent)); }));
    })); })); };
}

function buildViewSpecs(defaultInputs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
    var defaultConfigs = parseViewConfigs(defaultInputs);
    var overrideConfigs = parseViewConfigs(optionOverrides.views);
    var viewDefs = compileViewDefs(defaultConfigs, overrideConfigs);
    return mapHash(viewDefs, function (viewDef) { return buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults); });
}
function buildViewSpec(viewDef, overrideConfigs, optionOverrides, dynamicOptionOverrides, localeDefaults) {
    var durationInput = viewDef.overrides.duration ||
        viewDef.defaults.duration ||
        dynamicOptionOverrides.duration ||
        optionOverrides.duration;
    var duration = null;
    var durationUnit = '';
    var singleUnit = '';
    var singleUnitOverrides = {};
    if (durationInput) {
        duration = createDurationCached(durationInput);
        if (duration) { // valid?
            var denom = greatestDurationDenominator(duration);
            durationUnit = denom.unit;
            if (denom.value === 1) {
                singleUnit = durationUnit;
                singleUnitOverrides = overrideConfigs[durationUnit] ? overrideConfigs[durationUnit].rawOptions : {};
            }
        }
    }
    var queryButtonText = function (optionsSubset) {
        var buttonTextMap = optionsSubset.buttonText || {};
        var buttonTextKey = viewDef.defaults.buttonTextKey;
        if (buttonTextKey != null && buttonTextMap[buttonTextKey] != null) {
            return buttonTextMap[buttonTextKey];
        }
        if (buttonTextMap[viewDef.type] != null) {
            return buttonTextMap[viewDef.type];
        }
        if (buttonTextMap[singleUnit] != null) {
            return buttonTextMap[singleUnit];
        }
        return null;
    };
    return {
        type: viewDef.type,
        component: viewDef.component,
        duration: duration,
        durationUnit: durationUnit,
        singleUnit: singleUnit,
        optionDefaults: viewDef.defaults,
        optionOverrides: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, singleUnitOverrides), viewDef.overrides),
        buttonTextOverride: queryButtonText(dynamicOptionOverrides) ||
            queryButtonText(optionOverrides) || // constructor-specified buttonText lookup hash takes precedence
            viewDef.overrides.buttonText,
        buttonTextDefault: queryButtonText(localeDefaults) ||
            viewDef.defaults.buttonText ||
            queryButtonText(BASE_OPTION_DEFAULTS) ||
            viewDef.type,
    };
}
// hack to get memoization working
var durationInputMap = {};
function createDurationCached(durationInput) {
    var json = JSON.stringify(durationInput);
    var res = durationInputMap[json];
    if (res === undefined) {
        res = createDuration(durationInput);
        durationInputMap[json] = res;
    }
    return res;
}

var DateProfileGenerator = /** @class */ (function () {
    function DateProfileGenerator(props) {
        this.props = props;
        this.nowDate = getNow(props.nowInput, props.dateEnv);
        this.initHiddenDays();
    }
    /* Date Range Computation
    ------------------------------------------------------------------------------------------------------------------*/
    // Builds a structure with info about what the dates/ranges will be for the "prev" view.
    DateProfileGenerator.prototype.buildPrev = function (currentDateProfile, currentDate, forceToValid) {
        var dateEnv = this.props.dateEnv;
        var prevDate = dateEnv.subtract(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
        currentDateProfile.dateIncrement);
        return this.build(prevDate, -1, forceToValid);
    };
    // Builds a structure with info about what the dates/ranges will be for the "next" view.
    DateProfileGenerator.prototype.buildNext = function (currentDateProfile, currentDate, forceToValid) {
        var dateEnv = this.props.dateEnv;
        var nextDate = dateEnv.add(dateEnv.startOf(currentDate, currentDateProfile.currentRangeUnit), // important for start-of-month
        currentDateProfile.dateIncrement);
        return this.build(nextDate, 1, forceToValid);
    };
    // Builds a structure holding dates/ranges for rendering around the given date.
    // Optional direction param indicates whether the date is being incremented/decremented
    // from its previous value. decremented = -1, incremented = 1 (default).
    DateProfileGenerator.prototype.build = function (currentDate, direction, forceToValid) {
        if (forceToValid === void 0) { forceToValid = true; }
        var props = this.props;
        var validRange;
        var currentInfo;
        var isRangeAllDay;
        var renderRange;
        var activeRange;
        var isValid;
        validRange = this.buildValidRange();
        validRange = this.trimHiddenDays(validRange);
        if (forceToValid) {
            currentDate = constrainMarkerToRange(currentDate, validRange);
        }
        currentInfo = this.buildCurrentRangeInfo(currentDate, direction);
        isRangeAllDay = /^(year|month|week|day)$/.test(currentInfo.unit);
        renderRange = this.buildRenderRange(this.trimHiddenDays(currentInfo.range), currentInfo.unit, isRangeAllDay);
        renderRange = this.trimHiddenDays(renderRange);
        activeRange = renderRange;
        if (!props.showNonCurrentDates) {
            activeRange = intersectRanges(activeRange, currentInfo.range);
        }
        activeRange = this.adjustActiveRange(activeRange);
        activeRange = intersectRanges(activeRange, validRange); // might return null
        // it's invalid if the originally requested date is not contained,
        // or if the range is completely outside of the valid range.
        isValid = rangesIntersect(currentInfo.range, validRange);
        return {
            // constraint for where prev/next operations can go and where events can be dragged/resized to.
            // an object with optional start and end properties.
            validRange: validRange,
            // range the view is formally responsible for.
            // for example, a month view might have 1st-31st, excluding padded dates
            currentRange: currentInfo.range,
            // name of largest unit being displayed, like "month" or "week"
            currentRangeUnit: currentInfo.unit,
            isRangeAllDay: isRangeAllDay,
            // dates that display events and accept drag-n-drop
            // will be `null` if no dates accept events
            activeRange: activeRange,
            // date range with a rendered skeleton
            // includes not-active days that need some sort of DOM
            renderRange: renderRange,
            // Duration object that denotes the first visible time of any given day
            slotMinTime: props.slotMinTime,
            // Duration object that denotes the exclusive visible end time of any given day
            slotMaxTime: props.slotMaxTime,
            isValid: isValid,
            // how far the current date will move for a prev/next operation
            dateIncrement: this.buildDateIncrement(currentInfo.duration),
        };
    };
    // Builds an object with optional start/end properties.
    // Indicates the minimum/maximum dates to display.
    // not responsible for trimming hidden days.
    DateProfileGenerator.prototype.buildValidRange = function () {
        var input = this.props.validRangeInput;
        var simpleInput = typeof input === 'function'
            ? input.call(this.props.calendarApi, this.nowDate)
            : input;
        return this.refineRange(simpleInput) ||
            { start: null, end: null }; // completely open-ended
    };
    // Builds a structure with info about the "current" range, the range that is
    // highlighted as being the current month for example.
    // See build() for a description of `direction`.
    // Guaranteed to have `range` and `unit` properties. `duration` is optional.
    DateProfileGenerator.prototype.buildCurrentRangeInfo = function (date, direction) {
        var props = this.props;
        var duration = null;
        var unit = null;
        var range = null;
        var dayCount;
        if (props.duration) {
            duration = props.duration;
            unit = props.durationUnit;
            range = this.buildRangeFromDuration(date, direction, duration, unit);
        }
        else if ((dayCount = this.props.dayCount)) {
            unit = 'day';
            range = this.buildRangeFromDayCount(date, direction, dayCount);
        }
        else if ((range = this.buildCustomVisibleRange(date))) {
            unit = props.dateEnv.greatestWholeUnit(range.start, range.end).unit;
        }
        else {
            duration = this.getFallbackDuration();
            unit = greatestDurationDenominator(duration).unit;
            range = this.buildRangeFromDuration(date, direction, duration, unit);
        }
        return { duration: duration, unit: unit, range: range };
    };
    DateProfileGenerator.prototype.getFallbackDuration = function () {
        return createDuration({ day: 1 });
    };
    // Returns a new activeRange to have time values (un-ambiguate)
    // slotMinTime or slotMaxTime causes the range to expand.
    DateProfileGenerator.prototype.adjustActiveRange = function (range) {
        var _a = this.props, dateEnv = _a.dateEnv, usesMinMaxTime = _a.usesMinMaxTime, slotMinTime = _a.slotMinTime, slotMaxTime = _a.slotMaxTime;
        var start = range.start, end = range.end;
        if (usesMinMaxTime) {
            // expand active range if slotMinTime is negative (why not when positive?)
            if (asRoughDays(slotMinTime) < 0) {
                start = startOfDay(start); // necessary?
                start = dateEnv.add(start, slotMinTime);
            }
            // expand active range if slotMaxTime is beyond one day (why not when negative?)
            if (asRoughDays(slotMaxTime) > 1) {
                end = startOfDay(end); // necessary?
                end = addDays(end, -1);
                end = dateEnv.add(end, slotMaxTime);
            }
        }
        return { start: start, end: end };
    };
    // Builds the "current" range when it is specified as an explicit duration.
    // `unit` is the already-computed greatestDurationDenominator unit of duration.
    DateProfileGenerator.prototype.buildRangeFromDuration = function (date, direction, duration, unit) {
        var _a = this.props, dateEnv = _a.dateEnv, dateAlignment = _a.dateAlignment;
        var start;
        var end;
        var res;
        // compute what the alignment should be
        if (!dateAlignment) {
            var dateIncrement = this.props.dateIncrement;
            if (dateIncrement) {
                // use the smaller of the two units
                if (asRoughMs(dateIncrement) < asRoughMs(duration)) {
                    dateAlignment = greatestDurationDenominator(dateIncrement).unit;
                }
                else {
                    dateAlignment = unit;
                }
            }
            else {
                dateAlignment = unit;
            }
        }
        // if the view displays a single day or smaller
        if (asRoughDays(duration) <= 1) {
            if (this.isHiddenDay(start)) {
                start = this.skipHiddenDays(start, direction);
                start = startOfDay(start);
            }
        }
        function computeRes() {
            start = dateEnv.startOf(date, dateAlignment);
            end = dateEnv.add(start, duration);
            res = { start: start, end: end };
        }
        computeRes();
        // if range is completely enveloped by hidden days, go past the hidden days
        if (!this.trimHiddenDays(res)) {
            date = this.skipHiddenDays(date, direction);
            computeRes();
        }
        return res;
    };
    // Builds the "current" range when a dayCount is specified.
    DateProfileGenerator.prototype.buildRangeFromDayCount = function (date, direction, dayCount) {
        var _a = this.props, dateEnv = _a.dateEnv, dateAlignment = _a.dateAlignment;
        var runningCount = 0;
        var start = date;
        var end;
        if (dateAlignment) {
            start = dateEnv.startOf(start, dateAlignment);
        }
        start = startOfDay(start);
        start = this.skipHiddenDays(start, direction);
        end = start;
        do {
            end = addDays(end, 1);
            if (!this.isHiddenDay(end)) {
                runningCount += 1;
            }
        } while (runningCount < dayCount);
        return { start: start, end: end };
    };
    // Builds a normalized range object for the "visible" range,
    // which is a way to define the currentRange and activeRange at the same time.
    DateProfileGenerator.prototype.buildCustomVisibleRange = function (date) {
        var props = this.props;
        var input = props.visibleRangeInput;
        var simpleInput = typeof input === 'function'
            ? input.call(props.calendarApi, props.dateEnv.toDate(date))
            : input;
        var range = this.refineRange(simpleInput);
        if (range && (range.start == null || range.end == null)) {
            return null;
        }
        return range;
    };
    // Computes the range that will represent the element/cells for *rendering*,
    // but which may have voided days/times.
    // not responsible for trimming hidden days.
    DateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
        return currentRange;
    };
    // Compute the duration value that should be added/substracted to the current date
    // when a prev/next operation happens.
    DateProfileGenerator.prototype.buildDateIncrement = function (fallback) {
        var dateIncrement = this.props.dateIncrement;
        var customAlignment;
        if (dateIncrement) {
            return dateIncrement;
        }
        if ((customAlignment = this.props.dateAlignment)) {
            return createDuration(1, customAlignment);
        }
        if (fallback) {
            return fallback;
        }
        return createDuration({ days: 1 });
    };
    DateProfileGenerator.prototype.refineRange = function (rangeInput) {
        if (rangeInput) {
            var range = parseRange(rangeInput, this.props.dateEnv);
            if (range) {
                range = computeVisibleDayRange(range);
            }
            return range;
        }
        return null;
    };
    /* Hidden Days
    ------------------------------------------------------------------------------------------------------------------*/
    // Initializes internal variables related to calculating hidden days-of-week
    DateProfileGenerator.prototype.initHiddenDays = function () {
        var hiddenDays = this.props.hiddenDays || []; // array of day-of-week indices that are hidden
        var isHiddenDayHash = []; // is the day-of-week hidden? (hash with day-of-week-index -> bool)
        var dayCnt = 0;
        var i;
        if (this.props.weekends === false) {
            hiddenDays.push(0, 6); // 0=sunday, 6=saturday
        }
        for (i = 0; i < 7; i += 1) {
            if (!(isHiddenDayHash[i] = hiddenDays.indexOf(i) !== -1)) {
                dayCnt += 1;
            }
        }
        if (!dayCnt) {
            throw new Error('invalid hiddenDays'); // all days were hidden? bad.
        }
        this.isHiddenDayHash = isHiddenDayHash;
    };
    // Remove days from the beginning and end of the range that are computed as hidden.
    // If the whole range is trimmed off, returns null
    DateProfileGenerator.prototype.trimHiddenDays = function (range) {
        var start = range.start, end = range.end;
        if (start) {
            start = this.skipHiddenDays(start);
        }
        if (end) {
            end = this.skipHiddenDays(end, -1, true);
        }
        if (start == null || end == null || start < end) {
            return { start: start, end: end };
        }
        return null;
    };
    // Is the current day hidden?
    // `day` is a day-of-week index (0-6), or a Date (used for UTC)
    DateProfileGenerator.prototype.isHiddenDay = function (day) {
        if (day instanceof Date) {
            day = day.getUTCDay();
        }
        return this.isHiddenDayHash[day];
    };
    // Incrementing the current day until it is no longer a hidden day, returning a copy.
    // DOES NOT CONSIDER validRange!
    // If the initial value of `date` is not a hidden day, don't do anything.
    // Pass `isExclusive` as `true` if you are dealing with an end date.
    // `inc` defaults to `1` (increment one day forward each time)
    DateProfileGenerator.prototype.skipHiddenDays = function (date, inc, isExclusive) {
        if (inc === void 0) { inc = 1; }
        if (isExclusive === void 0) { isExclusive = false; }
        while (this.isHiddenDayHash[(date.getUTCDay() + (isExclusive ? inc : 0) + 7) % 7]) {
            date = addDays(date, inc);
        }
        return date;
    };
    return DateProfileGenerator;
}());

function reduceViewType(viewType, action) {
    switch (action.type) {
        case 'CHANGE_VIEW_TYPE':
            viewType = action.viewType;
    }
    return viewType;
}

function reduceDynamicOptionOverrides(dynamicOptionOverrides, action) {
    var _a;
    switch (action.type) {
        case 'SET_OPTION':
            return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, dynamicOptionOverrides), (_a = {}, _a[action.optionName] = action.rawOptionValue, _a));
        default:
            return dynamicOptionOverrides;
    }
}

function reduceDateProfile(currentDateProfile, action, currentDate, dateProfileGenerator) {
    var dp;
    switch (action.type) {
        case 'CHANGE_VIEW_TYPE':
            return dateProfileGenerator.build(action.dateMarker || currentDate);
        case 'CHANGE_DATE':
            if (!currentDateProfile.activeRange ||
                !rangeContainsMarker(currentDateProfile.currentRange, action.dateMarker) // don't move if date already in view
            ) {
                return dateProfileGenerator.build(action.dateMarker);
            }
            break;
        case 'PREV':
            dp = dateProfileGenerator.buildPrev(currentDateProfile, currentDate);
            if (dp.isValid) {
                return dp;
            }
            break;
        case 'NEXT':
            dp = dateProfileGenerator.buildNext(currentDateProfile, currentDate);
            if (dp.isValid) {
                return dp;
            }
            break;
    }
    return currentDateProfile;
}

function initEventSources(calendarOptions, dateProfile, context) {
    var activeRange = dateProfile ? dateProfile.activeRange : null;
    return addSources({}, parseInitialSources(calendarOptions, context), activeRange, context);
}
function reduceEventSources(eventSources, action, dateProfile, context) {
    var activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?
    switch (action.type) {
        case 'ADD_EVENT_SOURCES': // already parsed
            return addSources(eventSources, action.sources, activeRange, context);
        case 'REMOVE_EVENT_SOURCE':
            return removeSource(eventSources, action.sourceId);
        case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
        case 'NEXT':
        case 'CHANGE_DATE':
        case 'CHANGE_VIEW_TYPE':
            if (dateProfile) {
                return fetchDirtySources(eventSources, activeRange, context);
            }
            return eventSources;
        case 'FETCH_EVENT_SOURCES':
            return fetchSourcesByIds(eventSources, action.sourceIds ? // why no type?
                arrayToHash(action.sourceIds) :
                excludeStaticSources(eventSources, context), activeRange, action.isRefetch || false, context);
        case 'RECEIVE_EVENTS':
        case 'RECEIVE_EVENT_ERROR':
            return receiveResponse(eventSources, action.sourceId, action.fetchId, action.fetchRange);
        case 'REMOVE_ALL_EVENT_SOURCES':
            return {};
        default:
            return eventSources;
    }
}
function reduceEventSourcesNewTimeZone(eventSources, dateProfile, context) {
    var activeRange = dateProfile ? dateProfile.activeRange : null; // need this check?
    return fetchSourcesByIds(eventSources, excludeStaticSources(eventSources, context), activeRange, true, context);
}
function computeEventSourcesLoading(eventSources) {
    for (var sourceId in eventSources) {
        if (eventSources[sourceId].isFetching) {
            return true;
        }
    }
    return false;
}
function addSources(eventSourceHash, sources, fetchRange, context) {
    var hash = {};
    for (var _i = 0, sources_1 = sources; _i < sources_1.length; _i++) {
        var source = sources_1[_i];
        hash[source.sourceId] = source;
    }
    if (fetchRange) {
        hash = fetchDirtySources(hash, fetchRange, context);
    }
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, eventSourceHash), hash);
}
function removeSource(eventSourceHash, sourceId) {
    return filterHash(eventSourceHash, function (eventSource) { return eventSource.sourceId !== sourceId; });
}
function fetchDirtySources(sourceHash, fetchRange, context) {
    return fetchSourcesByIds(sourceHash, filterHash(sourceHash, function (eventSource) { return isSourceDirty(eventSource, fetchRange, context); }), fetchRange, false, context);
}
function isSourceDirty(eventSource, fetchRange, context) {
    if (!doesSourceNeedRange(eventSource, context)) {
        return !eventSource.latestFetchId;
    }
    return !context.options.lazyFetching ||
        !eventSource.fetchRange ||
        eventSource.isFetching || // always cancel outdated in-progress fetches
        fetchRange.start < eventSource.fetchRange.start ||
        fetchRange.end > eventSource.fetchRange.end;
}
function fetchSourcesByIds(prevSources, sourceIdHash, fetchRange, isRefetch, context) {
    var nextSources = {};
    for (var sourceId in prevSources) {
        var source = prevSources[sourceId];
        if (sourceIdHash[sourceId]) {
            nextSources[sourceId] = fetchSource(source, fetchRange, isRefetch, context);
        }
        else {
            nextSources[sourceId] = source;
        }
    }
    return nextSources;
}
function fetchSource(eventSource, fetchRange, isRefetch, context) {
    var options = context.options, calendarApi = context.calendarApi;
    var sourceDef = context.pluginHooks.eventSourceDefs[eventSource.sourceDefId];
    var fetchId = guid();
    sourceDef.fetch({
        eventSource: eventSource,
        range: fetchRange,
        isRefetch: isRefetch,
        context: context,
    }, function (res) {
        var rawEvents = res.rawEvents;
        if (options.eventSourceSuccess) {
            rawEvents = options.eventSourceSuccess.call(calendarApi, rawEvents, res.xhr) || rawEvents;
        }
        if (eventSource.success) {
            rawEvents = eventSource.success.call(calendarApi, rawEvents, res.xhr) || rawEvents;
        }
        context.dispatch({
            type: 'RECEIVE_EVENTS',
            sourceId: eventSource.sourceId,
            fetchId: fetchId,
            fetchRange: fetchRange,
            rawEvents: rawEvents,
        });
    }, function (error) {
        console.warn(error.message, error);
        if (options.eventSourceFailure) {
            options.eventSourceFailure.call(calendarApi, error);
        }
        if (eventSource.failure) {
            eventSource.failure(error);
        }
        context.dispatch({
            type: 'RECEIVE_EVENT_ERROR',
            sourceId: eventSource.sourceId,
            fetchId: fetchId,
            fetchRange: fetchRange,
            error: error,
        });
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, eventSource), { isFetching: true, latestFetchId: fetchId });
}
function receiveResponse(sourceHash, sourceId, fetchId, fetchRange) {
    var _a;
    var eventSource = sourceHash[sourceId];
    if (eventSource && // not already removed
        fetchId === eventSource.latestFetchId) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, sourceHash), (_a = {}, _a[sourceId] = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, eventSource), { isFetching: false, fetchRange: fetchRange }), _a));
    }
    return sourceHash;
}
function excludeStaticSources(eventSources, context) {
    return filterHash(eventSources, function (eventSource) { return doesSourceNeedRange(eventSource, context); });
}
function parseInitialSources(rawOptions, context) {
    var refiners = buildEventSourceRefiners(context);
    var rawSources = [].concat(rawOptions.eventSources || []);
    var sources = []; // parsed
    if (rawOptions.initialEvents) {
        rawSources.unshift(rawOptions.initialEvents);
    }
    if (rawOptions.events) {
        rawSources.unshift(rawOptions.events);
    }
    for (var _i = 0, rawSources_1 = rawSources; _i < rawSources_1.length; _i++) {
        var rawSource = rawSources_1[_i];
        var source = parseEventSource(rawSource, context, refiners);
        if (source) {
            sources.push(source);
        }
    }
    return sources;
}
function doesSourceNeedRange(eventSource, context) {
    var defs = context.pluginHooks.eventSourceDefs;
    return !defs[eventSource.sourceDefId].ignoreRange;
}

function reduceEventStore(eventStore, action, eventSources, dateProfile, context) {
    switch (action.type) {
        case 'RECEIVE_EVENTS': // raw
            return receiveRawEvents(eventStore, eventSources[action.sourceId], action.fetchId, action.fetchRange, action.rawEvents, context);
        case 'ADD_EVENTS': // already parsed, but not expanded
            return addEvent(eventStore, action.eventStore, // new ones
            dateProfile ? dateProfile.activeRange : null, context);
        case 'RESET_EVENTS':
            return action.eventStore;
        case 'MERGE_EVENTS': // already parsed and expanded
            return mergeEventStores(eventStore, action.eventStore);
        case 'PREV': // TODO: how do we track all actions that affect dateProfile :(
        case 'NEXT':
        case 'CHANGE_DATE':
        case 'CHANGE_VIEW_TYPE':
            if (dateProfile) {
                return expandRecurring(eventStore, dateProfile.activeRange, context);
            }
            return eventStore;
        case 'REMOVE_EVENTS':
            return excludeSubEventStore(eventStore, action.eventStore);
        case 'REMOVE_EVENT_SOURCE':
            return excludeEventsBySourceId(eventStore, action.sourceId);
        case 'REMOVE_ALL_EVENT_SOURCES':
            return filterEventStoreDefs(eventStore, function (eventDef) { return (!eventDef.sourceId // only keep events with no source id
            ); });
        case 'REMOVE_ALL_EVENTS':
            return createEmptyEventStore();
        default:
            return eventStore;
    }
}
function receiveRawEvents(eventStore, eventSource, fetchId, fetchRange, rawEvents, context) {
    if (eventSource && // not already removed
        fetchId === eventSource.latestFetchId // TODO: wish this logic was always in event-sources
    ) {
        var subset = parseEvents(transformRawEvents(rawEvents, eventSource, context), eventSource, context);
        if (fetchRange) {
            subset = expandRecurring(subset, fetchRange, context);
        }
        return mergeEventStores(excludeEventsBySourceId(eventStore, eventSource.sourceId), subset);
    }
    return eventStore;
}
function transformRawEvents(rawEvents, eventSource, context) {
    var calEachTransform = context.options.eventDataTransform;
    var sourceEachTransform = eventSource ? eventSource.eventDataTransform : null;
    if (sourceEachTransform) {
        rawEvents = transformEachRawEvent(rawEvents, sourceEachTransform);
    }
    if (calEachTransform) {
        rawEvents = transformEachRawEvent(rawEvents, calEachTransform);
    }
    return rawEvents;
}
function transformEachRawEvent(rawEvents, func) {
    var refinedEvents;
    if (!func) {
        refinedEvents = rawEvents;
    }
    else {
        refinedEvents = [];
        for (var _i = 0, rawEvents_1 = rawEvents; _i < rawEvents_1.length; _i++) {
            var rawEvent = rawEvents_1[_i];
            var refinedEvent = func(rawEvent);
            if (refinedEvent) {
                refinedEvents.push(refinedEvent);
            }
            else if (refinedEvent == null) {
                refinedEvents.push(rawEvent);
            } // if a different falsy value, do nothing
        }
    }
    return refinedEvents;
}
function addEvent(eventStore, subset, expandRange, context) {
    if (expandRange) {
        subset = expandRecurring(subset, expandRange, context);
    }
    return mergeEventStores(eventStore, subset);
}
function rezoneEventStoreDates(eventStore, oldDateEnv, newDateEnv) {
    var defs = eventStore.defs;
    var instances = mapHash(eventStore.instances, function (instance) {
        var def = defs[instance.defId];
        if (def.allDay || def.recurringDef) {
            return instance; // isn't dependent on timezone
        }
        return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, instance), { range: {
                start: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.start, instance.forcedStartTzo)),
                end: newDateEnv.createMarker(oldDateEnv.toDate(instance.range.end, instance.forcedEndTzo)),
            }, forcedStartTzo: newDateEnv.canComputeOffset ? null : instance.forcedStartTzo, forcedEndTzo: newDateEnv.canComputeOffset ? null : instance.forcedEndTzo });
    });
    return { defs: defs, instances: instances };
}
function excludeEventsBySourceId(eventStore, sourceId) {
    return filterEventStoreDefs(eventStore, function (eventDef) { return eventDef.sourceId !== sourceId; });
}
// QUESTION: why not just return instances? do a general object-property-exclusion util
function excludeInstances(eventStore, removals) {
    return {
        defs: eventStore.defs,
        instances: filterHash(eventStore.instances, function (instance) { return !removals[instance.instanceId]; }),
    };
}

function reduceDateSelection(currentSelection, action) {
    switch (action.type) {
        case 'UNSELECT_DATES':
            return null;
        case 'SELECT_DATES':
            return action.selection;
        default:
            return currentSelection;
    }
}

function reduceSelectedEvent(currentInstanceId, action) {
    switch (action.type) {
        case 'UNSELECT_EVENT':
            return '';
        case 'SELECT_EVENT':
            return action.eventInstanceId;
        default:
            return currentInstanceId;
    }
}

function reduceEventDrag(currentDrag, action) {
    var newDrag;
    switch (action.type) {
        case 'UNSET_EVENT_DRAG':
            return null;
        case 'SET_EVENT_DRAG':
            newDrag = action.state;
            return {
                affectedEvents: newDrag.affectedEvents,
                mutatedEvents: newDrag.mutatedEvents,
                isEvent: newDrag.isEvent,
            };
        default:
            return currentDrag;
    }
}

function reduceEventResize(currentResize, action) {
    var newResize;
    switch (action.type) {
        case 'UNSET_EVENT_RESIZE':
            return null;
        case 'SET_EVENT_RESIZE':
            newResize = action.state;
            return {
                affectedEvents: newResize.affectedEvents,
                mutatedEvents: newResize.mutatedEvents,
                isEvent: newResize.isEvent,
            };
        default:
            return currentResize;
    }
}

function parseToolbars(calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi) {
    var viewsWithButtons = [];
    var headerToolbar = calendarOptions.headerToolbar ? parseToolbar(calendarOptions.headerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi, viewsWithButtons) : null;
    var footerToolbar = calendarOptions.footerToolbar ? parseToolbar(calendarOptions.footerToolbar, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi, viewsWithButtons) : null;
    return { headerToolbar: headerToolbar, footerToolbar: footerToolbar, viewsWithButtons: viewsWithButtons };
}
function parseToolbar(sectionStrHash, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi, viewsWithButtons) {
    return mapHash(sectionStrHash, function (sectionStr) { return parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi, viewsWithButtons); });
}
/*
BAD: querying icons and text here. should be done at render time
*/
function parseSection(sectionStr, calendarOptions, calendarOptionOverrides, theme, viewSpecs, calendarApi, viewsWithButtons) {
    var isRtl = calendarOptions.direction === 'rtl';
    var calendarCustomButtons = calendarOptions.customButtons || {};
    var calendarButtonTextOverrides = calendarOptionOverrides.buttonText || {};
    var calendarButtonText = calendarOptions.buttonText || {};
    var sectionSubstrs = sectionStr ? sectionStr.split(' ') : [];
    return sectionSubstrs.map(function (buttonGroupStr) { return (buttonGroupStr.split(',').map(function (buttonName) {
        if (buttonName === 'title') {
            return { buttonName: buttonName };
        }
        var customButtonProps;
        var viewSpec;
        var buttonClick;
        var buttonIcon; // only one of these will be set
        var buttonText; // "
        if ((customButtonProps = calendarCustomButtons[buttonName])) {
            buttonClick = function (ev) {
                if (customButtonProps.click) {
                    customButtonProps.click.call(ev.target, ev, ev.target); // TODO: use Calendar this context?
                }
            };
            (buttonIcon = theme.getCustomButtonIconClass(customButtonProps)) ||
                (buttonIcon = theme.getIconClass(buttonName, isRtl)) ||
                (buttonText = customButtonProps.text);
        }
        else if ((viewSpec = viewSpecs[buttonName])) {
            viewsWithButtons.push(buttonName);
            buttonClick = function () {
                calendarApi.changeView(buttonName);
            };
            (buttonText = viewSpec.buttonTextOverride) ||
                (buttonIcon = theme.getIconClass(buttonName, isRtl)) ||
                (buttonText = viewSpec.buttonTextDefault);
        }
        else if (calendarApi[buttonName]) { // a calendarApi method
            buttonClick = function () {
                calendarApi[buttonName]();
            };
            (buttonText = calendarButtonTextOverrides[buttonName]) ||
                (buttonIcon = theme.getIconClass(buttonName, isRtl)) ||
                (buttonText = calendarButtonText[buttonName]);
            //            ^ everything else is considered default
        }
        return { buttonName: buttonName, buttonClick: buttonClick, buttonIcon: buttonIcon, buttonText: buttonText };
    })); });
}

var eventSourceDef = {
    ignoreRange: true,
    parseMeta: function (refined) {
        if (Array.isArray(refined.events)) {
            return refined.events;
        }
        return null;
    },
    fetch: function (arg, success) {
        success({
            rawEvents: arg.eventSource.meta,
        });
    },
};
var arrayEventSourcePlugin = createPlugin({
    eventSourceDefs: [eventSourceDef],
});

var eventSourceDef$1 = {
    parseMeta: function (refined) {
        if (typeof refined.events === 'function') {
            return refined.events;
        }
        return null;
    },
    fetch: function (arg, success, failure) {
        var dateEnv = arg.context.dateEnv;
        var func = arg.eventSource.meta;
        unpromisify(func.bind(null, buildRangeApiWithTimeZone(arg.range, dateEnv)), function (rawEvents) {
            success({ rawEvents: rawEvents }); // needs an object response
        }, failure);
    },
};
var funcEventSourcePlugin = createPlugin({
    eventSourceDefs: [eventSourceDef$1],
});

function requestJson(method, url, params, successCallback, failureCallback) {
    method = method.toUpperCase();
    var body = null;
    if (method === 'GET') {
        url = injectQueryStringParams(url, params);
    }
    else {
        body = encodeParams(params);
    }
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    if (method !== 'GET') {
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    xhr.onload = function () {
        if (xhr.status >= 200 && xhr.status < 400) {
            var parsed = false;
            var res = void 0;
            try {
                res = JSON.parse(xhr.responseText);
                parsed = true;
            }
            catch (err) {
                // will handle parsed=false
            }
            if (parsed) {
                successCallback(res, xhr);
            }
            else {
                failureCallback('Failure parsing JSON', xhr);
            }
        }
        else {
            failureCallback('Request failed', xhr);
        }
    };
    xhr.onerror = function () {
        failureCallback('Request failed', xhr);
    };
    xhr.send(body);
}
function injectQueryStringParams(url, params) {
    return url +
        (url.indexOf('?') === -1 ? '?' : '&') +
        encodeParams(params);
}
function encodeParams(params) {
    var parts = [];
    for (var key in params) {
        parts.push(encodeURIComponent(key) + "=" + encodeURIComponent(params[key]));
    }
    return parts.join('&');
}

var JSON_FEED_EVENT_SOURCE_REFINERS = {
    method: String,
    extraParams: identity,
    startParam: String,
    endParam: String,
    timeZoneParam: String,
};

var eventSourceDef$2 = {
    parseMeta: function (refined) {
        if (refined.url && (refined.format === 'json' || !refined.format)) {
            return {
                url: refined.url,
                format: 'json',
                method: (refined.method || 'GET').toUpperCase(),
                extraParams: refined.extraParams,
                startParam: refined.startParam,
                endParam: refined.endParam,
                timeZoneParam: refined.timeZoneParam,
            };
        }
        return null;
    },
    fetch: function (arg, success, failure) {
        var meta = arg.eventSource.meta;
        var requestParams = buildRequestParams(meta, arg.range, arg.context);
        requestJson(meta.method, meta.url, requestParams, function (rawEvents, xhr) {
            success({ rawEvents: rawEvents, xhr: xhr });
        }, function (errorMessage, xhr) {
            failure({ message: errorMessage, xhr: xhr });
        });
    },
};
var jsonFeedEventSourcePlugin = createPlugin({
    eventSourceRefiners: JSON_FEED_EVENT_SOURCE_REFINERS,
    eventSourceDefs: [eventSourceDef$2],
});
function buildRequestParams(meta, range, context) {
    var dateEnv = context.dateEnv, options = context.options;
    var startParam;
    var endParam;
    var timeZoneParam;
    var customRequestParams;
    var params = {};
    startParam = meta.startParam;
    if (startParam == null) {
        startParam = options.startParam;
    }
    endParam = meta.endParam;
    if (endParam == null) {
        endParam = options.endParam;
    }
    timeZoneParam = meta.timeZoneParam;
    if (timeZoneParam == null) {
        timeZoneParam = options.timeZoneParam;
    }
    // retrieve any outbound GET/POST data from the options
    if (typeof meta.extraParams === 'function') {
        // supplied as a function that returns a key/value object
        customRequestParams = meta.extraParams();
    }
    else {
        // probably supplied as a straight key/value object
        customRequestParams = meta.extraParams || {};
    }
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(params, customRequestParams);
    params[startParam] = dateEnv.formatIso(range.start);
    params[endParam] = dateEnv.formatIso(range.end);
    if (dateEnv.timeZone !== 'local') {
        params[timeZoneParam] = dateEnv.timeZone;
    }
    return params;
}

var SIMPLE_RECURRING_REFINERS = {
    daysOfWeek: identity,
    startTime: createDuration,
    endTime: createDuration,
    duration: createDuration,
    startRecur: identity,
    endRecur: identity,
};

var recurring = {
    parse: function (refined, dateEnv) {
        if (refined.daysOfWeek || refined.startTime || refined.endTime || refined.startRecur || refined.endRecur) {
            var recurringData = {
                daysOfWeek: refined.daysOfWeek || null,
                startTime: refined.startTime || null,
                endTime: refined.endTime || null,
                startRecur: refined.startRecur ? dateEnv.createMarker(refined.startRecur) : null,
                endRecur: refined.endRecur ? dateEnv.createMarker(refined.endRecur) : null,
            };
            var duration = void 0;
            if (refined.duration) {
                duration = refined.duration;
            }
            if (!duration && refined.startTime && refined.endTime) {
                duration = subtractDurations(refined.endTime, refined.startTime);
            }
            return {
                allDayGuess: Boolean(!refined.startTime && !refined.endTime),
                duration: duration,
                typeData: recurringData,
            };
        }
        return null;
    },
    expand: function (typeData, framingRange, dateEnv) {
        var clippedFramingRange = intersectRanges(framingRange, { start: typeData.startRecur, end: typeData.endRecur });
        if (clippedFramingRange) {
            return expandRanges(typeData.daysOfWeek, typeData.startTime, clippedFramingRange, dateEnv);
        }
        return [];
    },
};
var simpleRecurringEventsPlugin = createPlugin({
    recurringTypes: [recurring],
    eventRefiners: SIMPLE_RECURRING_REFINERS,
});
function expandRanges(daysOfWeek, startTime, framingRange, dateEnv) {
    var dowHash = daysOfWeek ? arrayToHash(daysOfWeek) : null;
    var dayMarker = startOfDay(framingRange.start);
    var endMarker = framingRange.end;
    var instanceStarts = [];
    while (dayMarker < endMarker) {
        var instanceStart 
        // if everyday, or this particular day-of-week
        = void 0;
        // if everyday, or this particular day-of-week
        if (!dowHash || dowHash[dayMarker.getUTCDay()]) {
            if (startTime) {
                instanceStart = dateEnv.add(dayMarker, startTime);
            }
            else {
                instanceStart = dayMarker;
            }
            instanceStarts.push(instanceStart);
        }
        dayMarker = addDays(dayMarker, 1);
    }
    return instanceStarts;
}

var changeHandlerPlugin = createPlugin({
    optionChangeHandlers: {
        events: function (events, context) {
            handleEventSources([events], context);
        },
        eventSources: handleEventSources,
    },
});
/*
BUG: if `event` was supplied, all previously-given `eventSources` will be wiped out
*/
function handleEventSources(inputs, context) {
    var unfoundSources = hashValuesToArray(context.getCurrentData().eventSources);
    var newInputs = [];
    for (var _i = 0, inputs_1 = inputs; _i < inputs_1.length; _i++) {
        var input = inputs_1[_i];
        var inputFound = false;
        for (var i = 0; i < unfoundSources.length; i += 1) {
            if (unfoundSources[i]._raw === input) {
                unfoundSources.splice(i, 1); // delete
                inputFound = true;
                break;
            }
        }
        if (!inputFound) {
            newInputs.push(input);
        }
    }
    for (var _a = 0, unfoundSources_1 = unfoundSources; _a < unfoundSources_1.length; _a++) {
        var unfoundSource = unfoundSources_1[_a];
        context.dispatch({
            type: 'REMOVE_EVENT_SOURCE',
            sourceId: unfoundSource.sourceId,
        });
    }
    for (var _b = 0, newInputs_1 = newInputs; _b < newInputs_1.length; _b++) {
        var newInput = newInputs_1[_b];
        context.calendarApi.addEventSource(newInput);
    }
}

function handleDateProfile(dateProfile, context) {
    context.emitter.trigger('datesSet', (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, buildRangeApiWithTimeZone(dateProfile.activeRange, context.dateEnv)), { view: context.viewApi }));
}

function handleEventStore(eventStore, context) {
    var emitter = context.emitter;
    if (emitter.hasHandlers('eventsSet')) {
        emitter.trigger('eventsSet', buildEventApis(eventStore, context));
    }
}

/*
this array is exposed on the root namespace so that UMD plugins can add to it.
see the rollup-bundles script.
*/
var globalPlugins = [
    arrayEventSourcePlugin,
    funcEventSourcePlugin,
    jsonFeedEventSourcePlugin,
    simpleRecurringEventsPlugin,
    changeHandlerPlugin,
    createPlugin({
        isLoadingFuncs: [
            function (state) { return computeEventSourcesLoading(state.eventSources); },
        ],
        contentTypeHandlers: {
            html: function () { return ({ render: injectHtml }); },
            domNodes: function () { return ({ render: injectDomNodes }); },
        },
        propSetHandlers: {
            dateProfile: handleDateProfile,
            eventStore: handleEventStore,
        },
    }),
];
function injectHtml(el, html) {
    el.innerHTML = html;
}
function injectDomNodes(el, domNodes) {
    var oldNodes = Array.prototype.slice.call(el.childNodes); // TODO: use array util
    var newNodes = Array.prototype.slice.call(domNodes); // TODO: use array util
    if (!isArraysEqual(oldNodes, newNodes)) {
        for (var _i = 0, newNodes_1 = newNodes; _i < newNodes_1.length; _i++) {
            var newNode = newNodes_1[_i];
            el.appendChild(newNode);
        }
        oldNodes.forEach(removeElement);
    }
}

var DelayedRunner = /** @class */ (function () {
    function DelayedRunner(drainedOption) {
        this.drainedOption = drainedOption;
        this.isRunning = false;
        this.isDirty = false;
        this.pauseDepths = {};
        this.timeoutId = 0;
    }
    DelayedRunner.prototype.request = function (delay) {
        this.isDirty = true;
        if (!this.isPaused()) {
            this.clearTimeout();
            if (delay == null) {
                this.tryDrain();
            }
            else {
                this.timeoutId = setTimeout(// NOT OPTIMAL! TODO: look at debounce
                this.tryDrain.bind(this), delay);
            }
        }
    };
    DelayedRunner.prototype.pause = function (scope) {
        if (scope === void 0) { scope = ''; }
        var pauseDepths = this.pauseDepths;
        pauseDepths[scope] = (pauseDepths[scope] || 0) + 1;
        this.clearTimeout();
    };
    DelayedRunner.prototype.resume = function (scope, force) {
        if (scope === void 0) { scope = ''; }
        var pauseDepths = this.pauseDepths;
        if (scope in pauseDepths) {
            if (force) {
                delete pauseDepths[scope];
            }
            else {
                pauseDepths[scope] -= 1;
                var depth = pauseDepths[scope];
                if (depth <= 0) {
                    delete pauseDepths[scope];
                }
            }
            this.tryDrain();
        }
    };
    DelayedRunner.prototype.isPaused = function () {
        return Object.keys(this.pauseDepths).length;
    };
    DelayedRunner.prototype.tryDrain = function () {
        if (!this.isRunning && !this.isPaused()) {
            this.isRunning = true;
            while (this.isDirty) {
                this.isDirty = false;
                this.drained(); // might set isDirty to true again
            }
            this.isRunning = false;
        }
    };
    DelayedRunner.prototype.clear = function () {
        this.clearTimeout();
        this.isDirty = false;
        this.pauseDepths = {};
    };
    DelayedRunner.prototype.clearTimeout = function () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
            this.timeoutId = 0;
        }
    };
    DelayedRunner.prototype.drained = function () {
        if (this.drainedOption) {
            this.drainedOption();
        }
    };
    return DelayedRunner;
}());

var TaskRunner = /** @class */ (function () {
    function TaskRunner(runTaskOption, drainedOption) {
        this.runTaskOption = runTaskOption;
        this.drainedOption = drainedOption;
        this.queue = [];
        this.delayedRunner = new DelayedRunner(this.drain.bind(this));
    }
    TaskRunner.prototype.request = function (task, delay) {
        this.queue.push(task);
        this.delayedRunner.request(delay);
    };
    TaskRunner.prototype.pause = function (scope) {
        this.delayedRunner.pause(scope);
    };
    TaskRunner.prototype.resume = function (scope, force) {
        this.delayedRunner.resume(scope, force);
    };
    TaskRunner.prototype.drain = function () {
        var queue = this.queue;
        while (queue.length) {
            var completedTasks = [];
            var task = void 0;
            while ((task = queue.shift())) {
                this.runTask(task);
                completedTasks.push(task);
            }
            this.drained(completedTasks);
        } // keep going, in case new tasks were added in the drained handler
    };
    TaskRunner.prototype.runTask = function (task) {
        if (this.runTaskOption) {
            this.runTaskOption(task);
        }
    };
    TaskRunner.prototype.drained = function (completedTasks) {
        if (this.drainedOption) {
            this.drainedOption(completedTasks);
        }
    };
    return TaskRunner;
}());

// Computes what the title at the top of the calendarApi should be for this view
function buildTitle(dateProfile, viewOptions, dateEnv) {
    var range;
    // for views that span a large unit of time, show the proper interval, ignoring stray days before and after
    if (/^(year|month)$/.test(dateProfile.currentRangeUnit)) {
        range = dateProfile.currentRange;
    }
    else { // for day units or smaller, use the actual day range
        range = dateProfile.activeRange;
    }
    return dateEnv.formatRange(range.start, range.end, createFormatter(viewOptions.titleFormat || buildTitleFormat(dateProfile)), {
        isEndExclusive: dateProfile.isRangeAllDay,
        defaultSeparator: viewOptions.titleRangeSeparator,
    });
}
// Generates the format string that should be used to generate the title for the current date range.
// Attempts to compute the most appropriate format if not explicitly specified with `titleFormat`.
function buildTitleFormat(dateProfile) {
    var currentRangeUnit = dateProfile.currentRangeUnit;
    if (currentRangeUnit === 'year') {
        return { year: 'numeric' };
    }
    if (currentRangeUnit === 'month') {
        return { year: 'numeric', month: 'long' }; // like "September 2014"
    }
    var days = diffWholeDays(dateProfile.currentRange.start, dateProfile.currentRange.end);
    if (days !== null && days > 1) {
        // multi-day range. shorter, like "Sep 9 - 10 2014"
        return { year: 'numeric', month: 'short', day: 'numeric' };
    }
    // one day. longer, like "September 9 2014"
    return { year: 'numeric', month: 'long', day: 'numeric' };
}

// in future refactor, do the redux-style function(state=initial) for initial-state
// also, whatever is happening in constructor, have it happen in action queue too
var CalendarDataManager = /** @class */ (function () {
    function CalendarDataManager(props) {
        var _this = this;
        this.computeOptionsData = memoize(this._computeOptionsData);
        this.computeCurrentViewData = memoize(this._computeCurrentViewData);
        this.organizeRawLocales = memoize(organizeRawLocales);
        this.buildLocale = memoize(buildLocale);
        this.buildPluginHooks = buildBuildPluginHooks();
        this.buildDateEnv = memoize(buildDateEnv$1);
        this.buildTheme = memoize(buildTheme);
        this.parseToolbars = memoize(parseToolbars);
        this.buildViewSpecs = memoize(buildViewSpecs);
        this.buildDateProfileGenerator = memoizeObjArg(buildDateProfileGenerator);
        this.buildViewApi = memoize(buildViewApi);
        this.buildViewUiProps = memoizeObjArg(buildViewUiProps);
        this.buildEventUiBySource = memoize(buildEventUiBySource, isPropsEqual);
        this.buildEventUiBases = memoize(buildEventUiBases);
        this.parseContextBusinessHours = memoizeObjArg(parseContextBusinessHours);
        this.buildTitle = memoize(buildTitle);
        this.emitter = new Emitter();
        this.actionRunner = new TaskRunner(this._handleAction.bind(this), this.updateData.bind(this));
        this.currentCalendarOptionsInput = {};
        this.currentCalendarOptionsRefined = {};
        this.currentViewOptionsInput = {};
        this.currentViewOptionsRefined = {};
        this.currentCalendarOptionsRefiners = {};
        this.getCurrentData = function () { return _this.data; };
        this.dispatch = function (action) {
            _this.actionRunner.request(action); // protects against recursive calls to _handleAction
        };
        this.props = props;
        this.actionRunner.pause();
        var dynamicOptionOverrides = {};
        var optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
        var currentViewType = optionsData.calendarOptions.initialView || optionsData.pluginHooks.initialView;
        var currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
        // wire things up
        // TODO: not DRY
        props.calendarApi.currentDataManager = this;
        this.emitter.setThisContext(props.calendarApi);
        this.emitter.setOptions(currentViewData.options);
        var currentDate = getInitialDate(optionsData.calendarOptions, optionsData.dateEnv);
        var dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
        if (!rangeContainsMarker(dateProfile.activeRange, currentDate)) {
            currentDate = dateProfile.currentRange.start;
        }
        var calendarContext = {
            dateEnv: optionsData.dateEnv,
            options: optionsData.calendarOptions,
            pluginHooks: optionsData.pluginHooks,
            calendarApi: props.calendarApi,
            dispatch: this.dispatch,
            emitter: this.emitter,
            getCurrentData: this.getCurrentData,
        };
        // needs to be after setThisContext
        for (var _i = 0, _a = optionsData.pluginHooks.contextInit; _i < _a.length; _i++) {
            var callback = _a[_i];
            callback(calendarContext);
        }
        // NOT DRY
        var eventSources = initEventSources(optionsData.calendarOptions, dateProfile, calendarContext);
        var initialState = {
            dynamicOptionOverrides: dynamicOptionOverrides,
            currentViewType: currentViewType,
            currentDate: currentDate,
            dateProfile: dateProfile,
            businessHours: this.parseContextBusinessHours(calendarContext),
            eventSources: eventSources,
            eventUiBases: {},
            eventStore: createEmptyEventStore(),
            renderableEventStore: createEmptyEventStore(),
            dateSelection: null,
            eventSelection: '',
            eventDrag: null,
            eventResize: null,
            selectionConfig: this.buildViewUiProps(calendarContext).selectionConfig,
        };
        var contextAndState = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, calendarContext), initialState);
        for (var _b = 0, _c = optionsData.pluginHooks.reducers; _b < _c.length; _b++) {
            var reducer = _c[_b];
            (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(initialState, reducer(null, null, contextAndState));
        }
        if (computeIsLoading(initialState, calendarContext)) {
            this.emitter.trigger('loading', true); // NOT DRY
        }
        this.state = initialState;
        this.updateData();
        this.actionRunner.resume();
    }
    CalendarDataManager.prototype.resetOptions = function (optionOverrides, append) {
        var props = this.props;
        props.optionOverrides = append
            ? (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, props.optionOverrides), optionOverrides) : optionOverrides;
        this.actionRunner.request({
            type: 'NOTHING',
        });
    };
    CalendarDataManager.prototype._handleAction = function (action) {
        var _a = this, props = _a.props, state = _a.state, emitter = _a.emitter;
        var dynamicOptionOverrides = reduceDynamicOptionOverrides(state.dynamicOptionOverrides, action);
        var optionsData = this.computeOptionsData(props.optionOverrides, dynamicOptionOverrides, props.calendarApi);
        var currentViewType = reduceViewType(state.currentViewType, action);
        var currentViewData = this.computeCurrentViewData(currentViewType, optionsData, props.optionOverrides, dynamicOptionOverrides);
        // wire things up
        // TODO: not DRY
        props.calendarApi.currentDataManager = this;
        emitter.setThisContext(props.calendarApi);
        emitter.setOptions(currentViewData.options);
        var calendarContext = {
            dateEnv: optionsData.dateEnv,
            options: optionsData.calendarOptions,
            pluginHooks: optionsData.pluginHooks,
            calendarApi: props.calendarApi,
            dispatch: this.dispatch,
            emitter: emitter,
            getCurrentData: this.getCurrentData,
        };
        var currentDate = state.currentDate, dateProfile = state.dateProfile;
        if (this.data && this.data.dateProfileGenerator !== currentViewData.dateProfileGenerator) { // hack
            dateProfile = currentViewData.dateProfileGenerator.build(currentDate);
        }
        currentDate = reduceCurrentDate(currentDate, action);
        dateProfile = reduceDateProfile(dateProfile, action, currentDate, currentViewData.dateProfileGenerator);
        if (!rangeContainsMarker(dateProfile.currentRange, currentDate)) {
            currentDate = dateProfile.currentRange.start;
        }
        var eventSources = reduceEventSources(state.eventSources, action, dateProfile, calendarContext);
        var eventStore = reduceEventStore(state.eventStore, action, eventSources, dateProfile, calendarContext);
        var isEventsLoading = computeEventSourcesLoading(eventSources); // BAD. also called in this func in computeIsLoading
        var renderableEventStore = (isEventsLoading && !currentViewData.options.progressiveEventRendering) ?
            (state.renderableEventStore || eventStore) : // try from previous state
            eventStore;
        var _b = this.buildViewUiProps(calendarContext), eventUiSingleBase = _b.eventUiSingleBase, selectionConfig = _b.selectionConfig; // will memoize obj
        var eventUiBySource = this.buildEventUiBySource(eventSources);
        var eventUiBases = this.buildEventUiBases(renderableEventStore.defs, eventUiSingleBase, eventUiBySource);
        var newState = {
            dynamicOptionOverrides: dynamicOptionOverrides,
            currentViewType: currentViewType,
            currentDate: currentDate,
            dateProfile: dateProfile,
            eventSources: eventSources,
            eventStore: eventStore,
            renderableEventStore: renderableEventStore,
            selectionConfig: selectionConfig,
            eventUiBases: eventUiBases,
            businessHours: this.parseContextBusinessHours(calendarContext),
            dateSelection: reduceDateSelection(state.dateSelection, action),
            eventSelection: reduceSelectedEvent(state.eventSelection, action),
            eventDrag: reduceEventDrag(state.eventDrag, action),
            eventResize: reduceEventResize(state.eventResize, action),
        };
        var contextAndState = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, calendarContext), newState);
        for (var _i = 0, _c = optionsData.pluginHooks.reducers; _i < _c.length; _i++) {
            var reducer = _c[_i];
            (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(newState, reducer(state, action, contextAndState)); // give the OLD state, for old value
        }
        var wasLoading = computeIsLoading(state, calendarContext);
        var isLoading = computeIsLoading(newState, calendarContext);
        // TODO: use propSetHandlers in plugin system
        if (!wasLoading && isLoading) {
            emitter.trigger('loading', true);
        }
        else if (wasLoading && !isLoading) {
            emitter.trigger('loading', false);
        }
        this.state = newState;
        if (props.onAction) {
            props.onAction(action);
        }
    };
    CalendarDataManager.prototype.updateData = function () {
        var _a = this, props = _a.props, state = _a.state;
        var oldData = this.data;
        var optionsData = this.computeOptionsData(props.optionOverrides, state.dynamicOptionOverrides, props.calendarApi);
        var currentViewData = this.computeCurrentViewData(state.currentViewType, optionsData, props.optionOverrides, state.dynamicOptionOverrides);
        var data = this.data = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ viewTitle: this.buildTitle(state.dateProfile, currentViewData.options, optionsData.dateEnv), calendarApi: props.calendarApi, dispatch: this.dispatch, emitter: this.emitter, getCurrentData: this.getCurrentData }, optionsData), currentViewData), state);
        var changeHandlers = optionsData.pluginHooks.optionChangeHandlers;
        var oldCalendarOptions = oldData && oldData.calendarOptions;
        var newCalendarOptions = optionsData.calendarOptions;
        if (oldCalendarOptions && oldCalendarOptions !== newCalendarOptions) {
            if (oldCalendarOptions.timeZone !== newCalendarOptions.timeZone) {
                // hack
                state.eventSources = data.eventSources = reduceEventSourcesNewTimeZone(data.eventSources, state.dateProfile, data);
                state.eventStore = data.eventStore = rezoneEventStoreDates(data.eventStore, oldData.dateEnv, data.dateEnv);
            }
            for (var optionName in changeHandlers) {
                if (oldCalendarOptions[optionName] !== newCalendarOptions[optionName]) {
                    changeHandlers[optionName](newCalendarOptions[optionName], data);
                }
            }
        }
        if (props.onData) {
            props.onData(data);
        }
    };
    CalendarDataManager.prototype._computeOptionsData = function (optionOverrides, dynamicOptionOverrides, calendarApi) {
        // TODO: blacklist options that are handled by optionChangeHandlers
        var _a = this.processRawCalendarOptions(optionOverrides, dynamicOptionOverrides), refinedOptions = _a.refinedOptions, pluginHooks = _a.pluginHooks, localeDefaults = _a.localeDefaults, availableLocaleData = _a.availableLocaleData, extra = _a.extra;
        warnUnknownOptions(extra);
        var dateEnv = this.buildDateEnv(refinedOptions.timeZone, refinedOptions.locale, refinedOptions.weekNumberCalculation, refinedOptions.firstDay, refinedOptions.weekText, pluginHooks, availableLocaleData, refinedOptions.defaultRangeSeparator);
        var viewSpecs = this.buildViewSpecs(pluginHooks.views, optionOverrides, dynamicOptionOverrides, localeDefaults);
        var theme = this.buildTheme(refinedOptions, pluginHooks);
        var toolbarConfig = this.parseToolbars(refinedOptions, optionOverrides, theme, viewSpecs, calendarApi);
        return {
            calendarOptions: refinedOptions,
            pluginHooks: pluginHooks,
            dateEnv: dateEnv,
            viewSpecs: viewSpecs,
            theme: theme,
            toolbarConfig: toolbarConfig,
            localeDefaults: localeDefaults,
            availableRawLocales: availableLocaleData.map,
        };
    };
    // always called from behind a memoizer
    CalendarDataManager.prototype.processRawCalendarOptions = function (optionOverrides, dynamicOptionOverrides) {
        var _a = mergeRawOptions([
            BASE_OPTION_DEFAULTS,
            optionOverrides,
            dynamicOptionOverrides,
        ]), locales = _a.locales, locale = _a.locale;
        var availableLocaleData = this.organizeRawLocales(locales);
        var availableRawLocales = availableLocaleData.map;
        var localeDefaults = this.buildLocale(locale || availableLocaleData.defaultCode, availableRawLocales).options;
        var pluginHooks = this.buildPluginHooks(optionOverrides.plugins || [], globalPlugins);
        var refiners = this.currentCalendarOptionsRefiners = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
        var extra = {};
        var raw = mergeRawOptions([
            BASE_OPTION_DEFAULTS,
            localeDefaults,
            optionOverrides,
            dynamicOptionOverrides,
        ]);
        var refined = {};
        var currentRaw = this.currentCalendarOptionsInput;
        var currentRefined = this.currentCalendarOptionsRefined;
        var anyChanges = false;
        for (var optionName in raw) {
            if (optionName !== 'plugins') { // because plugins is special-cased
                if (raw[optionName] === currentRaw[optionName] ||
                    (COMPLEX_OPTION_COMPARATORS[optionName] &&
                        (optionName in currentRaw) &&
                        COMPLEX_OPTION_COMPARATORS[optionName](currentRaw[optionName], raw[optionName]))) {
                    refined[optionName] = currentRefined[optionName];
                }
                else if (refiners[optionName]) {
                    refined[optionName] = refiners[optionName](raw[optionName]);
                    anyChanges = true;
                }
                else {
                    extra[optionName] = currentRaw[optionName];
                }
            }
        }
        if (anyChanges) {
            this.currentCalendarOptionsInput = raw;
            this.currentCalendarOptionsRefined = refined;
        }
        return {
            rawOptions: this.currentCalendarOptionsInput,
            refinedOptions: this.currentCalendarOptionsRefined,
            pluginHooks: pluginHooks,
            availableLocaleData: availableLocaleData,
            localeDefaults: localeDefaults,
            extra: extra,
        };
    };
    CalendarDataManager.prototype._computeCurrentViewData = function (viewType, optionsData, optionOverrides, dynamicOptionOverrides) {
        var viewSpec = optionsData.viewSpecs[viewType];
        if (!viewSpec) {
            throw new Error("viewType \"" + viewType + "\" is not available. Please make sure you've loaded all neccessary plugins");
        }
        var _a = this.processRawViewOptions(viewSpec, optionsData.pluginHooks, optionsData.localeDefaults, optionOverrides, dynamicOptionOverrides), refinedOptions = _a.refinedOptions, extra = _a.extra;
        warnUnknownOptions(extra);
        var dateProfileGenerator = this.buildDateProfileGenerator({
            dateProfileGeneratorClass: viewSpec.optionDefaults.dateProfileGeneratorClass,
            duration: viewSpec.duration,
            durationUnit: viewSpec.durationUnit,
            usesMinMaxTime: viewSpec.optionDefaults.usesMinMaxTime,
            dateEnv: optionsData.dateEnv,
            calendarApi: this.props.calendarApi,
            slotMinTime: refinedOptions.slotMinTime,
            slotMaxTime: refinedOptions.slotMaxTime,
            showNonCurrentDates: refinedOptions.showNonCurrentDates,
            dayCount: refinedOptions.dayCount,
            dateAlignment: refinedOptions.dateAlignment,
            dateIncrement: refinedOptions.dateIncrement,
            hiddenDays: refinedOptions.hiddenDays,
            weekends: refinedOptions.weekends,
            nowInput: refinedOptions.now,
            validRangeInput: refinedOptions.validRange,
            visibleRangeInput: refinedOptions.visibleRange,
            monthMode: refinedOptions.monthMode,
            fixedWeekCount: refinedOptions.fixedWeekCount,
        });
        var viewApi = this.buildViewApi(viewType, this.getCurrentData, optionsData.dateEnv);
        return { viewSpec: viewSpec, options: refinedOptions, dateProfileGenerator: dateProfileGenerator, viewApi: viewApi };
    };
    CalendarDataManager.prototype.processRawViewOptions = function (viewSpec, pluginHooks, localeDefaults, optionOverrides, dynamicOptionOverrides) {
        var raw = mergeRawOptions([
            BASE_OPTION_DEFAULTS,
            viewSpec.optionDefaults,
            localeDefaults,
            optionOverrides,
            viewSpec.optionOverrides,
            dynamicOptionOverrides,
        ]);
        var refiners = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, BASE_OPTION_REFINERS), CALENDAR_LISTENER_REFINERS), CALENDAR_OPTION_REFINERS), VIEW_OPTION_REFINERS), pluginHooks.listenerRefiners), pluginHooks.optionRefiners);
        var refined = {};
        var currentRaw = this.currentViewOptionsInput;
        var currentRefined = this.currentViewOptionsRefined;
        var anyChanges = false;
        var extra = {};
        for (var optionName in raw) {
            if (raw[optionName] === currentRaw[optionName]) {
                refined[optionName] = currentRefined[optionName];
            }
            else {
                if (raw[optionName] === this.currentCalendarOptionsInput[optionName]) {
                    if (optionName in this.currentCalendarOptionsRefined) { // might be an "extra" prop
                        refined[optionName] = this.currentCalendarOptionsRefined[optionName];
                    }
                }
                else if (refiners[optionName]) {
                    refined[optionName] = refiners[optionName](raw[optionName]);
                }
                else {
                    extra[optionName] = raw[optionName];
                }
                anyChanges = true;
            }
        }
        if (anyChanges) {
            this.currentViewOptionsInput = raw;
            this.currentViewOptionsRefined = refined;
        }
        return {
            rawOptions: this.currentViewOptionsInput,
            refinedOptions: this.currentViewOptionsRefined,
            extra: extra,
        };
    };
    return CalendarDataManager;
}());
function buildDateEnv$1(timeZone, explicitLocale, weekNumberCalculation, firstDay, weekText, pluginHooks, availableLocaleData, defaultSeparator) {
    var locale = buildLocale(explicitLocale || availableLocaleData.defaultCode, availableLocaleData.map);
    return new DateEnv({
        calendarSystem: 'gregory',
        timeZone: timeZone,
        namedTimeZoneImpl: pluginHooks.namedTimeZonedImpl,
        locale: locale,
        weekNumberCalculation: weekNumberCalculation,
        firstDay: firstDay,
        weekText: weekText,
        cmdFormatter: pluginHooks.cmdFormatter,
        defaultSeparator: defaultSeparator,
    });
}
function buildTheme(options, pluginHooks) {
    var ThemeClass = pluginHooks.themeClasses[options.themeSystem] || StandardTheme;
    return new ThemeClass(options);
}
function buildDateProfileGenerator(props) {
    var DateProfileGeneratorClass = props.dateProfileGeneratorClass || DateProfileGenerator;
    return new DateProfileGeneratorClass(props);
}
function buildViewApi(type, getCurrentData, dateEnv) {
    return new ViewApi(type, getCurrentData, dateEnv);
}
function buildEventUiBySource(eventSources) {
    return mapHash(eventSources, function (eventSource) { return eventSource.ui; });
}
function buildEventUiBases(eventDefs, eventUiSingleBase, eventUiBySource) {
    var eventUiBases = { '': eventUiSingleBase };
    for (var defId in eventDefs) {
        var def = eventDefs[defId];
        if (def.sourceId && eventUiBySource[def.sourceId]) {
            eventUiBases[defId] = eventUiBySource[def.sourceId];
        }
    }
    return eventUiBases;
}
function buildViewUiProps(calendarContext) {
    var options = calendarContext.options;
    return {
        eventUiSingleBase: createEventUi({
            display: options.eventDisplay,
            editable: options.editable,
            startEditable: options.eventStartEditable,
            durationEditable: options.eventDurationEditable,
            constraint: options.eventConstraint,
            overlap: typeof options.eventOverlap === 'boolean' ? options.eventOverlap : undefined,
            allow: options.eventAllow,
            backgroundColor: options.eventBackgroundColor,
            borderColor: options.eventBorderColor,
            textColor: options.eventTextColor,
            color: options.eventColor,
        }, calendarContext),
        selectionConfig: createEventUi({
            constraint: options.selectConstraint,
            overlap: typeof options.selectOverlap === 'boolean' ? options.selectOverlap : undefined,
            allow: options.selectAllow,
        }, calendarContext),
    };
}
function computeIsLoading(state, context) {
    for (var _i = 0, _a = context.pluginHooks.isLoadingFuncs; _i < _a.length; _i++) {
        var isLoadingFunc = _a[_i];
        if (isLoadingFunc(state)) {
            return true;
        }
    }
    return false;
}
function parseContextBusinessHours(calendarContext) {
    return parseBusinessHours(calendarContext.options.businessHours, calendarContext);
}
function warnUnknownOptions(options, viewName) {
    for (var optionName in options) {
        console.warn("Unknown option '" + optionName + "'" +
            (viewName ? " for view '" + viewName + "'" : ''));
    }
}

// TODO: move this to react plugin?
var CalendarDataProvider = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(CalendarDataProvider, _super);
    function CalendarDataProvider(props) {
        var _this = _super.call(this, props) || this;
        _this.handleData = function (data) {
            if (!_this.dataManager) { // still within initial run, before assignment in constructor
                // eslint-disable-next-line react/no-direct-mutation-state
                _this.state = data; // can't use setState yet
            }
            else {
                _this.setState(data);
            }
        };
        _this.dataManager = new CalendarDataManager({
            optionOverrides: props.optionOverrides,
            calendarApi: props.calendarApi,
            onData: _this.handleData,
        });
        return _this;
    }
    CalendarDataProvider.prototype.render = function () {
        return this.props.children(this.state);
    };
    CalendarDataProvider.prototype.componentDidUpdate = function (prevProps) {
        var newOptionOverrides = this.props.optionOverrides;
        if (newOptionOverrides !== prevProps.optionOverrides) { // prevent recursive handleData
            this.dataManager.resetOptions(newOptionOverrides);
        }
    };
    return CalendarDataProvider;
}(_vdom_js__WEBPACK_IMPORTED_MODULE_1__.Component));

// HELPERS
/*
if nextDayThreshold is specified, slicing is done in an all-day fashion.
you can get nextDayThreshold from context.nextDayThreshold
*/
function sliceEvents(props, allDay) {
    return sliceEventStore(props.eventStore, props.eventUiBases, props.dateProfile.activeRange, allDay ? props.nextDayThreshold : null).fg;
}

var NamedTimeZoneImpl = /** @class */ (function () {
    function NamedTimeZoneImpl(timeZoneName) {
        this.timeZoneName = timeZoneName;
    }
    return NamedTimeZoneImpl;
}());

var SegHierarchy = /** @class */ (function () {
    function SegHierarchy() {
        // settings
        this.strictOrder = false;
        this.allowReslicing = false;
        this.maxCoord = -1; // -1 means no max
        this.maxStackCnt = -1; // -1 means no max
        this.levelCoords = []; // ordered
        this.entriesByLevel = []; // parallel with levelCoords
        this.stackCnts = {}; // TODO: use better technique!?
    }
    SegHierarchy.prototype.addSegs = function (segInputs) {
        var hiddenEntries = [];
        for (var _i = 0, segInputs_1 = segInputs; _i < segInputs_1.length; _i++) {
            var segInput = segInputs_1[_i];
            this.insertEntry({
                segInput: segInput,
                spanStart: segInput.spanStart,
                spanEnd: segInput.spanEnd,
                thickness: segInput.thickness,
            }, hiddenEntries);
        }
        return hiddenEntries;
    };
    SegHierarchy.prototype.insertEntry = function (entry, hiddenEntries) {
        var insertion = this.findInsertion(entry);
        if (this.isInsertionValid(insertion, entry)) {
            this.insertEntryAt(entry, insertion);
            return 1;
        }
        return this.handleInvalidInsertion(insertion, entry, hiddenEntries);
    };
    SegHierarchy.prototype.isInsertionValid = function (insertion, entry) {
        return (this.maxCoord === -1 || insertion.levelCoord + entry.thickness <= this.maxCoord) &&
            (this.maxStackCnt === -1 || insertion.stackCnt < this.maxStackCnt);
    };
    SegHierarchy.prototype.handleInvalidInsertion = function (insertion, entry, hiddenEntries) {
        if (this.allowReslicing && insertion.touchingEntry) {
            return this.splitEntry(entry, insertion.touchingEntry, hiddenEntries);
        }
        hiddenEntries.push(entry);
        return 0;
    };
    SegHierarchy.prototype.splitEntry = function (entry, barrier, hiddenEntries) {
        var partCnt = 0;
        var splitHiddenEntries = [];
        if (entry.spanStart < barrier.spanStart) {
            partCnt += this.insertEntry((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, entry), { spanStart: entry.spanStart, spanEnd: barrier.spanStart }), splitHiddenEntries);
        }
        if (barrier.spanEnd < entry.spanEnd) {
            partCnt += this.insertEntry((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, entry), { spanStart: barrier.spanEnd, spanEnd: entry.spanEnd }), splitHiddenEntries);
        }
        if (partCnt) {
            hiddenEntries.push.apply(hiddenEntries, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)([(0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, entry), { spanStart: Math.max(barrier.spanStart, entry.spanStart), spanEnd: Math.min(barrier.spanEnd, entry.spanEnd) })], splitHiddenEntries));
            return partCnt;
        }
        hiddenEntries.push(entry);
        return 0;
    };
    SegHierarchy.prototype.insertEntryAt = function (entry, insertion) {
        var nextLevel = insertion.nextLevel;
        // create a new level
        if (!nextLevel || this.levelCoords[nextLevel - 1] < insertion.levelCoord) {
            insertAt(this.levelCoords, nextLevel, insertion.levelCoord);
            insertAt(this.entriesByLevel, nextLevel, [entry]);
            // insert into existing level
        }
        else {
            insertAt(this.entriesByLevel[nextLevel - 1], insertion.lateralEnd, entry);
        }
        this.stackCnts[buildEntryKey(entry)] = insertion.stackCnt;
    };
    SegHierarchy.prototype.findInsertion = function (newEntry) {
        var _a = this, levelCoords = _a.levelCoords, entriesByLevel = _a.entriesByLevel, stackCnts = _a.stackCnts, strictOrder = _a.strictOrder;
        var levelCnt = levelCoords.length;
        var level; // running value while iterating all segs
        var levelCoord; // "
        var lateralStart = 0; // "
        var lateralEnd = 0; // "
        var resCoord = 0; // the levelCoord for newSeg
        var touchingEntry = null;
        for (level = 0; level < levelCnt; level += 1) {
            levelCoord = levelCoords[level];
            // if the current level is past the placed entry, we have found a good
            // empty space and can stop. only if not strict-ordering mode.
            if (!strictOrder && levelCoord >= resCoord + newEntry.thickness) {
                break;
            }
            var entries = entriesByLevel[level];
            var entry = void 0;
            var searchRes = binarySearch(entries, newEntry.spanStart, getEntrySpanEnd);
            lateralStart = searchRes[0] + searchRes[1]; // if exact match (which doesn't collide), go to next one
            lateralEnd = lateralStart;
            while ( // loop through entries that horizontally intersect
            (entry = entries[lateralEnd]) && // but not past the whole entry list
                entry.spanStart < newEntry.spanEnd) {
                if (strictOrder ||
                    ( // vertically intersects?
                    resCoord < levelCoord + entry.thickness &&
                        resCoord + newEntry.thickness > levelCoord)) {
                    // push down the potential destination
                    touchingEntry = entry;
                    resCoord = levelCoord + entry.thickness; // move to bottom of colliding entry
                }
                lateralEnd += 1;
            }
        }
        return {
            levelCoord: resCoord,
            nextLevel: level,
            lateralStart: lateralStart,
            lateralEnd: lateralEnd,
            touchingEntry: touchingEntry,
            stackCnt: touchingEntry ? stackCnts[buildEntryKey(touchingEntry)] + 1 : 0,
        };
    };
    // sorted by levelCoord (lowest to highest)
    SegHierarchy.prototype.toRects = function () {
        var _a = this, entriesByLevel = _a.entriesByLevel, levelCoords = _a.levelCoords;
        var levelCnt = entriesByLevel.length;
        var rects = [];
        for (var level = 0; level < levelCnt; level += 1) {
            var entries = entriesByLevel[level];
            var levelCoord = levelCoords[level];
            for (var _i = 0, entries_1 = entries; _i < entries_1.length; _i++) {
                var entry = entries_1[_i];
                rects.push((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, entry), { levelCoord: levelCoord }));
            }
        }
        return rects;
    };
    return SegHierarchy;
}());
function getEntrySpanEnd(entry) {
    return entry.spanEnd;
}
function buildEntryKey(entry) {
    return entry.segInput.index + ':' + entry.spanStart;
}
// returns groups with entries sorted by input order
function groupIntersectingEntries(entries) {
    var merges = [];
    for (var _i = 0, entries_2 = entries; _i < entries_2.length; _i++) {
        var entry = entries_2[_i];
        var filteredMerges = [];
        var hungryMerge = {
            spanStart: entry.spanStart,
            spanEnd: entry.spanEnd,
            entries: [entry],
        };
        for (var _a = 0, merges_1 = merges; _a < merges_1.length; _a++) {
            var merge = merges_1[_a];
            if (merge.spanStart < hungryMerge.spanEnd && merge.spanEnd > hungryMerge.spanStart) { // collides?
                hungryMerge = {
                    spanStart: Math.min(merge.spanStart, hungryMerge.spanStart),
                    spanEnd: Math.max(merge.spanEnd, hungryMerge.spanEnd),
                    entries: merge.entries.concat(hungryMerge.entries),
                };
            }
            else {
                filteredMerges.push(merge);
            }
        }
        filteredMerges.push(hungryMerge);
        merges = filteredMerges;
    }
    return merges;
}
// general util
// ---------------------------------------------------------------------------------------------------------------------
function insertAt(arr, index, item) {
    arr.splice(index, 0, item);
}
function binarySearch(a, searchVal, getItemVal) {
    var startIndex = 0;
    var endIndex = a.length; // exclusive
    if (!endIndex || searchVal < getItemVal(a[startIndex])) { // no items OR before first item
        return [0, 0];
    }
    if (searchVal > getItemVal(a[endIndex - 1])) { // after last item
        return [endIndex, 0];
    }
    while (startIndex < endIndex) {
        var middleIndex = Math.floor(startIndex + (endIndex - startIndex) / 2);
        var middleVal = getItemVal(a[middleIndex]);
        if (searchVal < middleVal) {
            endIndex = middleIndex;
        }
        else if (searchVal > middleVal) {
            startIndex = middleIndex + 1;
        }
        else { // equal!
            return [middleIndex, 1];
        }
    }
    return [startIndex, 0];
}

var Interaction = /** @class */ (function () {
    function Interaction(settings) {
        this.component = settings.component;
        this.isHitComboAllowed = settings.isHitComboAllowed || null;
    }
    Interaction.prototype.destroy = function () {
    };
    return Interaction;
}());
function parseInteractionSettings(component, input) {
    return {
        component: component,
        el: input.el,
        useEventCenter: input.useEventCenter != null ? input.useEventCenter : true,
        isHitComboAllowed: input.isHitComboAllowed || null,
    };
}
function interactionSettingsToStore(settings) {
    var _a;
    return _a = {},
        _a[settings.component.uid] = settings,
        _a;
}
// global state
var interactionSettingsStore = {};

/*
An abstraction for a dragging interaction originating on an event.
Does higher-level things than PointerDragger, such as possibly:
- a "mirror" that moves with the pointer
- a minimum number of pixels or other criteria for a true drag to begin

subclasses must emit:
- pointerdown
- dragstart
- dragmove
- pointerup
- dragend
*/
var ElementDragging = /** @class */ (function () {
    function ElementDragging(el, selector) {
        this.emitter = new Emitter();
    }
    ElementDragging.prototype.destroy = function () {
    };
    ElementDragging.prototype.setMirrorIsVisible = function (bool) {
        // optional if subclass doesn't want to support a mirror
    };
    ElementDragging.prototype.setMirrorNeedsRevert = function (bool) {
        // optional if subclass doesn't want to support a mirror
    };
    ElementDragging.prototype.setAutoScrollEnabled = function (bool) {
        // optional
    };
    return ElementDragging;
}());

// TODO: get rid of this in favor of options system,
// tho it's really easy to access this globally rather than pass thru options.
var config = {};

/*
Information about what will happen when an external element is dragged-and-dropped
onto a calendar. Contains information for creating an event.
*/
var DRAG_META_REFINERS = {
    startTime: createDuration,
    duration: createDuration,
    create: Boolean,
    sourceId: String,
};
function parseDragMeta(raw) {
    var _a = refineProps(raw, DRAG_META_REFINERS), refined = _a.refined, extra = _a.extra;
    return {
        startTime: refined.startTime || null,
        duration: refined.duration || null,
        create: refined.create != null ? refined.create : true,
        sourceId: refined.sourceId,
        leftoverProps: extra,
    };
}

var ToolbarSection = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ToolbarSection, _super);
    function ToolbarSection() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ToolbarSection.prototype.render = function () {
        var _this = this;
        var children = this.props.widgetGroups.map(function (widgetGroup) { return _this.renderWidgetGroup(widgetGroup); });
        return _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)(['div', { className: 'fc-toolbar-chunk' }], children));
    };
    ToolbarSection.prototype.renderWidgetGroup = function (widgetGroup) {
        var props = this.props;
        var theme = this.context.theme;
        var children = [];
        var isOnlyButtons = true;
        for (var _i = 0, widgetGroup_1 = widgetGroup; _i < widgetGroup_1.length; _i++) {
            var widget = widgetGroup_1[_i];
            var buttonName = widget.buttonName, buttonClick = widget.buttonClick, buttonText = widget.buttonText, buttonIcon = widget.buttonIcon;
            if (buttonName === 'title') {
                isOnlyButtons = false;
                children.push((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("h2", { className: "fc-toolbar-title" }, props.title));
            }
            else {
                var ariaAttrs = buttonIcon ? { 'aria-label': buttonName } : {};
                var buttonClasses = ["fc-" + buttonName + "-button", theme.getClass('button')];
                if (buttonName === props.activeButton) {
                    buttonClasses.push(theme.getClass('buttonActive'));
                }
                var isDisabled = (!props.isTodayEnabled && buttonName === 'today') ||
                    (!props.isPrevEnabled && buttonName === 'prev') ||
                    (!props.isNextEnabled && buttonName === 'next');
                children.push((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("button", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ disabled: isDisabled, className: buttonClasses.join(' '), onClick: buttonClick, type: "button" }, ariaAttrs), buttonText || (buttonIcon ? (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { className: buttonIcon }) : '')));
            }
        }
        if (children.length > 1) {
            var groupClassName = (isOnlyButtons && theme.getClass('buttonGroup')) || '';
            return _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)(['div', { className: groupClassName }], children));
        }
        return children[0];
    };
    return ToolbarSection;
}(BaseComponent));

var Toolbar = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(Toolbar, _super);
    function Toolbar() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Toolbar.prototype.render = function () {
        var _a = this.props, model = _a.model, extraClassName = _a.extraClassName;
        var forceLtr = false;
        var startContent;
        var endContent;
        var centerContent = model.center;
        if (model.left) {
            forceLtr = true;
            startContent = model.left;
        }
        else {
            startContent = model.start;
        }
        if (model.right) {
            forceLtr = true;
            endContent = model.right;
        }
        else {
            endContent = model.end;
        }
        var classNames = [
            extraClassName || '',
            'fc-toolbar',
            forceLtr ? 'fc-toolbar-ltr' : '',
        ];
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: classNames.join(' ') },
            this.renderSection('start', startContent || []),
            this.renderSection('center', centerContent || []),
            this.renderSection('end', endContent || [])));
    };
    Toolbar.prototype.renderSection = function (key, widgetGroups) {
        var props = this.props;
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ToolbarSection, { key: key, widgetGroups: widgetGroups, title: props.title, activeButton: props.activeButton, isTodayEnabled: props.isTodayEnabled, isPrevEnabled: props.isPrevEnabled, isNextEnabled: props.isNextEnabled }));
    };
    return Toolbar;
}(BaseComponent));

// TODO: do function component?
var ViewContainer = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ViewContainer, _super);
    function ViewContainer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            availableWidth: null,
        };
        _this.handleEl = function (el) {
            _this.el = el;
            setRef(_this.props.elRef, el);
            _this.updateAvailableWidth();
        };
        _this.handleResize = function () {
            _this.updateAvailableWidth();
        };
        return _this;
    }
    ViewContainer.prototype.render = function () {
        var _a = this, props = _a.props, state = _a.state;
        var aspectRatio = props.aspectRatio;
        var classNames = [
            'fc-view-harness',
            (aspectRatio || props.liquid || props.height)
                ? 'fc-view-harness-active' // harness controls the height
                : 'fc-view-harness-passive',
        ];
        var height = '';
        var paddingBottom = '';
        if (aspectRatio) {
            if (state.availableWidth !== null) {
                height = state.availableWidth / aspectRatio;
            }
            else {
                // while waiting to know availableWidth, we can't set height to *zero*
                // because will cause lots of unnecessary scrollbars within scrollgrid.
                // BETTER: don't start rendering ANYTHING yet until we know container width
                // NOTE: why not always use paddingBottom? Causes height oscillation (issue 5606)
                paddingBottom = (1 / aspectRatio) * 100 + "%";
            }
        }
        else {
            height = props.height || '';
        }
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: this.handleEl, onClick: props.onClick, className: classNames.join(' '), style: { height: height, paddingBottom: paddingBottom } }, props.children));
    };
    ViewContainer.prototype.componentDidMount = function () {
        this.context.addResizeHandler(this.handleResize);
    };
    ViewContainer.prototype.componentWillUnmount = function () {
        this.context.removeResizeHandler(this.handleResize);
    };
    ViewContainer.prototype.updateAvailableWidth = function () {
        if (this.el && // needed. but why?
            this.props.aspectRatio // aspectRatio is the only height setting that needs availableWidth
        ) {
            this.setState({ availableWidth: this.el.offsetWidth });
        }
    };
    return ViewContainer;
}(BaseComponent));

/*
Detects when the user clicks on an event within a DateComponent
*/
var EventClicking = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(EventClicking, _super);
    function EventClicking(settings) {
        var _this = _super.call(this, settings) || this;
        _this.handleSegClick = function (ev, segEl) {
            var component = _this.component;
            var context = component.context;
            var seg = getElSeg(segEl);
            if (seg && // might be the <div> surrounding the more link
                component.isValidSegDownEl(ev.target)) {
                // our way to simulate a link click for elements that can't be <a> tags
                // grab before trigger fired in case trigger trashes DOM thru rerendering
                var hasUrlContainer = elementClosest(ev.target, '.fc-event-forced-url');
                var url = hasUrlContainer ? hasUrlContainer.querySelector('a[href]').href : '';
                context.emitter.trigger('eventClick', {
                    el: segEl,
                    event: new EventApi(component.context, seg.eventRange.def, seg.eventRange.instance),
                    jsEvent: ev,
                    view: context.viewApi,
                });
                if (url && !ev.defaultPrevented) {
                    window.location.href = url;
                }
            }
        };
        _this.destroy = listenBySelector(settings.el, 'click', '.fc-event', // on both fg and bg events
        _this.handleSegClick);
        return _this;
    }
    return EventClicking;
}(Interaction));

/*
Triggers events and adds/removes core classNames when the user's pointer
enters/leaves event-elements of a component.
*/
var EventHovering = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(EventHovering, _super);
    function EventHovering(settings) {
        var _this = _super.call(this, settings) || this;
        // for simulating an eventMouseLeave when the event el is destroyed while mouse is over it
        _this.handleEventElRemove = function (el) {
            if (el === _this.currentSegEl) {
                _this.handleSegLeave(null, _this.currentSegEl);
            }
        };
        _this.handleSegEnter = function (ev, segEl) {
            if (getElSeg(segEl)) { // TODO: better way to make sure not hovering over more+ link or its wrapper
                _this.currentSegEl = segEl;
                _this.triggerEvent('eventMouseEnter', ev, segEl);
            }
        };
        _this.handleSegLeave = function (ev, segEl) {
            if (_this.currentSegEl) {
                _this.currentSegEl = null;
                _this.triggerEvent('eventMouseLeave', ev, segEl);
            }
        };
        _this.removeHoverListeners = listenToHoverBySelector(settings.el, '.fc-event', // on both fg and bg events
        _this.handleSegEnter, _this.handleSegLeave);
        return _this;
    }
    EventHovering.prototype.destroy = function () {
        this.removeHoverListeners();
    };
    EventHovering.prototype.triggerEvent = function (publicEvName, ev, segEl) {
        var component = this.component;
        var context = component.context;
        var seg = getElSeg(segEl);
        if (!ev || component.isValidSegDownEl(ev.target)) {
            context.emitter.trigger(publicEvName, {
                el: segEl,
                event: new EventApi(context, seg.eventRange.def, seg.eventRange.instance),
                jsEvent: ev,
                view: context.viewApi,
            });
        }
    };
    return EventHovering;
}(Interaction));

var CalendarContent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(CalendarContent, _super);
    function CalendarContent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buildViewContext = memoize(buildViewContext);
        _this.buildViewPropTransformers = memoize(buildViewPropTransformers);
        _this.buildToolbarProps = memoize(buildToolbarProps);
        _this.handleNavLinkClick = buildDelegationHandler('a[data-navlink]', _this._handleNavLinkClick.bind(_this));
        _this.headerRef = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.footerRef = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.interactionsStore = {};
        // Component Registration
        // -----------------------------------------------------------------------------------------------------------------
        _this.registerInteractiveComponent = function (component, settingsInput) {
            var settings = parseInteractionSettings(component, settingsInput);
            var DEFAULT_INTERACTIONS = [
                EventClicking,
                EventHovering,
            ];
            var interactionClasses = DEFAULT_INTERACTIONS.concat(_this.props.pluginHooks.componentInteractions);
            var interactions = interactionClasses.map(function (TheInteractionClass) { return new TheInteractionClass(settings); });
            _this.interactionsStore[component.uid] = interactions;
            interactionSettingsStore[component.uid] = settings;
        };
        _this.unregisterInteractiveComponent = function (component) {
            for (var _i = 0, _a = _this.interactionsStore[component.uid]; _i < _a.length; _i++) {
                var listener = _a[_i];
                listener.destroy();
            }
            delete _this.interactionsStore[component.uid];
            delete interactionSettingsStore[component.uid];
        };
        // Resizing
        // -----------------------------------------------------------------------------------------------------------------
        _this.resizeRunner = new DelayedRunner(function () {
            _this.props.emitter.trigger('_resize', true); // should window resizes be considered "forced" ?
            _this.props.emitter.trigger('windowResize', { view: _this.props.viewApi });
        });
        _this.handleWindowResize = function (ev) {
            var options = _this.props.options;
            if (options.handleWindowResize &&
                ev.target === window // avoid jqui events
            ) {
                _this.resizeRunner.request(options.windowResizeDelay);
            }
        };
        return _this;
    }
    /*
    renders INSIDE of an outer div
    */
    CalendarContent.prototype.render = function () {
        var props = this.props;
        var toolbarConfig = props.toolbarConfig, options = props.options;
        var toolbarProps = this.buildToolbarProps(props.viewSpec, props.dateProfile, props.dateProfileGenerator, props.currentDate, getNow(props.options.now, props.dateEnv), // TODO: use NowTimer????
        props.viewTitle);
        var viewVGrow = false;
        var viewHeight = '';
        var viewAspectRatio;
        if (props.isHeightAuto || props.forPrint) {
            viewHeight = '';
        }
        else if (options.height != null) {
            viewVGrow = true;
        }
        else if (options.contentHeight != null) {
            viewHeight = options.contentHeight;
        }
        else {
            viewAspectRatio = Math.max(options.aspectRatio, 0.5); // prevent from getting too tall
        }
        var viewContext = this.buildViewContext(props.viewSpec, props.viewApi, props.options, props.dateProfileGenerator, props.dateEnv, props.theme, props.pluginHooks, props.dispatch, props.getCurrentData, props.emitter, props.calendarApi, this.registerInteractiveComponent, this.unregisterInteractiveComponent);
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewContextType.Provider, { value: viewContext },
            toolbarConfig.headerToolbar && ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(Toolbar, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ ref: this.headerRef, extraClassName: "fc-header-toolbar", model: toolbarConfig.headerToolbar }, toolbarProps))),
            (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewContainer, { liquid: viewVGrow, height: viewHeight, aspectRatio: viewAspectRatio, onClick: this.handleNavLinkClick },
                this.renderView(props),
                this.buildAppendContent()),
            toolbarConfig.footerToolbar && ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(Toolbar, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ ref: this.footerRef, extraClassName: "fc-footer-toolbar", model: toolbarConfig.footerToolbar }, toolbarProps)))));
    };
    CalendarContent.prototype.componentDidMount = function () {
        var props = this.props;
        this.calendarInteractions = props.pluginHooks.calendarInteractions
            .map(function (CalendarInteractionClass) { return new CalendarInteractionClass(props); });
        window.addEventListener('resize', this.handleWindowResize);
        var propSetHandlers = props.pluginHooks.propSetHandlers;
        for (var propName in propSetHandlers) {
            propSetHandlers[propName](props[propName], props);
        }
    };
    CalendarContent.prototype.componentDidUpdate = function (prevProps) {
        var props = this.props;
        var propSetHandlers = props.pluginHooks.propSetHandlers;
        for (var propName in propSetHandlers) {
            if (props[propName] !== prevProps[propName]) {
                propSetHandlers[propName](props[propName], props);
            }
        }
    };
    CalendarContent.prototype.componentWillUnmount = function () {
        window.removeEventListener('resize', this.handleWindowResize);
        this.resizeRunner.clear();
        for (var _i = 0, _a = this.calendarInteractions; _i < _a.length; _i++) {
            var interaction = _a[_i];
            interaction.destroy();
        }
        this.props.emitter.trigger('_unmount');
    };
    CalendarContent.prototype._handleNavLinkClick = function (ev, anchorEl) {
        var _a = this.props, dateEnv = _a.dateEnv, options = _a.options, calendarApi = _a.calendarApi;
        var navLinkOptions = anchorEl.getAttribute('data-navlink');
        navLinkOptions = navLinkOptions ? JSON.parse(navLinkOptions) : {};
        var dateMarker = dateEnv.createMarker(navLinkOptions.date);
        var viewType = navLinkOptions.type;
        var customAction = viewType === 'day' ? options.navLinkDayClick :
            viewType === 'week' ? options.navLinkWeekClick : null;
        if (typeof customAction === 'function') {
            customAction.call(calendarApi, dateEnv.toDate(dateMarker), ev);
        }
        else {
            if (typeof customAction === 'string') {
                viewType = customAction;
            }
            calendarApi.zoomTo(dateMarker, viewType);
        }
    };
    CalendarContent.prototype.buildAppendContent = function () {
        var props = this.props;
        var children = props.pluginHooks.viewContainerAppends.map(function (buildAppendContent) { return buildAppendContent(props); });
        return _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)([_vdom_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}], children));
    };
    CalendarContent.prototype.renderView = function (props) {
        var pluginHooks = props.pluginHooks;
        var viewSpec = props.viewSpec;
        var viewProps = {
            dateProfile: props.dateProfile,
            businessHours: props.businessHours,
            eventStore: props.renderableEventStore,
            eventUiBases: props.eventUiBases,
            dateSelection: props.dateSelection,
            eventSelection: props.eventSelection,
            eventDrag: props.eventDrag,
            eventResize: props.eventResize,
            isHeightAuto: props.isHeightAuto,
            forPrint: props.forPrint,
        };
        var transformers = this.buildViewPropTransformers(pluginHooks.viewPropsTransformers);
        for (var _i = 0, transformers_1 = transformers; _i < transformers_1.length; _i++) {
            var transformer = transformers_1[_i];
            (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)(viewProps, transformer.transform(viewProps, props));
        }
        var ViewComponent = viewSpec.component;
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewComponent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, viewProps)));
    };
    return CalendarContent;
}(PureComponent));
function buildToolbarProps(viewSpec, dateProfile, dateProfileGenerator, currentDate, now, title) {
    // don't force any date-profiles to valid date profiles (the `false`) so that we can tell if it's invalid
    var todayInfo = dateProfileGenerator.build(now, undefined, false); // TODO: need `undefined` or else INFINITE LOOP for some reason
    var prevInfo = dateProfileGenerator.buildPrev(dateProfile, currentDate, false);
    var nextInfo = dateProfileGenerator.buildNext(dateProfile, currentDate, false);
    return {
        title: title,
        activeButton: viewSpec.type,
        isTodayEnabled: todayInfo.isValid && !rangeContainsMarker(dateProfile.currentRange, now),
        isPrevEnabled: prevInfo.isValid,
        isNextEnabled: nextInfo.isValid,
    };
}
// Plugin
// -----------------------------------------------------------------------------------------------------------------
function buildViewPropTransformers(theClasses) {
    return theClasses.map(function (TheClass) { return new TheClass(); });
}

var CalendarRoot = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(CalendarRoot, _super);
    function CalendarRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            forPrint: false,
        };
        _this.handleBeforePrint = function () {
            _this.setState({ forPrint: true });
        };
        _this.handleAfterPrint = function () {
            _this.setState({ forPrint: false });
        };
        return _this;
    }
    CalendarRoot.prototype.render = function () {
        var props = this.props;
        var options = props.options;
        var forPrint = this.state.forPrint;
        var isHeightAuto = forPrint || options.height === 'auto' || options.contentHeight === 'auto';
        var height = (!isHeightAuto && options.height != null) ? options.height : '';
        var classNames = [
            'fc',
            forPrint ? 'fc-media-print' : 'fc-media-screen',
            "fc-direction-" + options.direction,
            props.theme.getClass('root'),
        ];
        if (!getCanVGrowWithinCell()) {
            classNames.push('fc-liquid-hack');
        }
        return props.children(classNames, height, isHeightAuto, forPrint);
    };
    CalendarRoot.prototype.componentDidMount = function () {
        var emitter = this.props.emitter;
        emitter.on('_beforeprint', this.handleBeforePrint);
        emitter.on('_afterprint', this.handleAfterPrint);
    };
    CalendarRoot.prototype.componentWillUnmount = function () {
        var emitter = this.props.emitter;
        emitter.off('_beforeprint', this.handleBeforePrint);
        emitter.off('_afterprint', this.handleAfterPrint);
    };
    return CalendarRoot;
}(BaseComponent));

// Computes a default column header formatting string if `colFormat` is not explicitly defined
function computeFallbackHeaderFormat(datesRepDistinctDays, dayCnt) {
    // if more than one week row, or if there are a lot of columns with not much space,
    // put just the day numbers will be in each cell
    if (!datesRepDistinctDays || dayCnt > 10) {
        return createFormatter({ weekday: 'short' }); // "Sat"
    }
    if (dayCnt > 1) {
        return createFormatter({ weekday: 'short', month: 'numeric', day: 'numeric', omitCommas: true }); // "Sat 11/12"
    }
    return createFormatter({ weekday: 'long' }); // "Saturday"
}

var CLASS_NAME = 'fc-col-header-cell'; // do the cushion too? no
function renderInner(hookProps) {
    return hookProps.text;
}

var TableDateCell = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableDateCell, _super);
    function TableDateCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableDateCell.prototype.render = function () {
        var _a = this.context, dateEnv = _a.dateEnv, options = _a.options, theme = _a.theme, viewApi = _a.viewApi;
        var props = this.props;
        var date = props.date, dateProfile = props.dateProfile;
        var dayMeta = getDateMeta(date, props.todayRange, null, dateProfile);
        var classNames = [CLASS_NAME].concat(getDayClassNames(dayMeta, theme));
        var text = dateEnv.format(date, props.dayHeaderFormat);
        // if colCnt is 1, we are already in a day-view and don't need a navlink
        var navLinkAttrs = (options.navLinks && !dayMeta.isDisabled && props.colCnt > 1)
            ? { 'data-navlink': buildNavLinkData(date), tabIndex: 0 }
            : {};
        var hookProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ date: dateEnv.toDate(date), view: viewApi }, props.extraHookProps), { text: text }), dayMeta);
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(RenderHook, { hookProps: hookProps, classNames: options.dayHeaderClassNames, content: options.dayHeaderContent, defaultContent: renderInner, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ ref: rootElRef, className: classNames.concat(customClassNames).join(' '), "data-date": !dayMeta.isDisabled ? formatDayString(date) : undefined, colSpan: props.colSpan }, props.extraDataAttrs),
            (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-scrollgrid-sync-inner" }, !dayMeta.isDisabled && ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ ref: innerElRef, className: [
                    'fc-col-header-cell-cushion',
                    props.isSticky ? 'fc-sticky' : '',
                ].join(' ') }, navLinkAttrs), innerContent))))); }));
    };
    return TableDateCell;
}(BaseComponent));

var TableDowCell = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableDowCell, _super);
    function TableDowCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableDowCell.prototype.render = function () {
        var props = this.props;
        var _a = this.context, dateEnv = _a.dateEnv, theme = _a.theme, viewApi = _a.viewApi, options = _a.options;
        var date = addDays(new Date(259200000), props.dow); // start with Sun, 04 Jan 1970 00:00:00 GMT
        var dateMeta = {
            dow: props.dow,
            isDisabled: false,
            isFuture: false,
            isPast: false,
            isToday: false,
            isOther: false,
        };
        var classNames = [CLASS_NAME].concat(getDayClassNames(dateMeta, theme), props.extraClassNames || []);
        var text = dateEnv.format(date, props.dayHeaderFormat);
        var hookProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ // TODO: make this public?
            date: date }, dateMeta), { view: viewApi }), props.extraHookProps), { text: text });
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(RenderHook, { hookProps: hookProps, classNames: options.dayHeaderClassNames, content: options.dayHeaderContent, defaultContent: renderInner, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ ref: rootElRef, className: classNames.concat(customClassNames).join(' '), colSpan: props.colSpan }, props.extraDataAttrs),
            (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-scrollgrid-sync-inner" },
                (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", { className: [
                        'fc-col-header-cell-cushion',
                        props.isSticky ? 'fc-sticky' : '',
                    ].join(' '), ref: innerElRef }, innerContent)))); }));
    };
    return TableDowCell;
}(BaseComponent));

var NowTimer = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(NowTimer, _super);
    function NowTimer(props, context) {
        var _this = _super.call(this, props, context) || this;
        _this.initialNowDate = getNow(context.options.now, context.dateEnv);
        _this.initialNowQueriedMs = new Date().valueOf();
        _this.state = _this.computeTiming().currentState;
        return _this;
    }
    NowTimer.prototype.render = function () {
        var _a = this, props = _a.props, state = _a.state;
        return props.children(state.nowDate, state.todayRange);
    };
    NowTimer.prototype.componentDidMount = function () {
        this.setTimeout();
    };
    NowTimer.prototype.componentDidUpdate = function (prevProps) {
        if (prevProps.unit !== this.props.unit) {
            this.clearTimeout();
            this.setTimeout();
        }
    };
    NowTimer.prototype.componentWillUnmount = function () {
        this.clearTimeout();
    };
    NowTimer.prototype.computeTiming = function () {
        var _a = this, props = _a.props, context = _a.context;
        var unroundedNow = addMs(this.initialNowDate, new Date().valueOf() - this.initialNowQueriedMs);
        var currentUnitStart = context.dateEnv.startOf(unroundedNow, props.unit);
        var nextUnitStart = context.dateEnv.add(currentUnitStart, createDuration(1, props.unit));
        var waitMs = nextUnitStart.valueOf() - unroundedNow.valueOf();
        // there is a max setTimeout ms value (https://stackoverflow.com/a/3468650/96342)
        // ensure no longer than a day
        waitMs = Math.min(1000 * 60 * 60 * 24, waitMs);
        return {
            currentState: { nowDate: currentUnitStart, todayRange: buildDayRange(currentUnitStart) },
            nextState: { nowDate: nextUnitStart, todayRange: buildDayRange(nextUnitStart) },
            waitMs: waitMs,
        };
    };
    NowTimer.prototype.setTimeout = function () {
        var _this = this;
        var _a = this.computeTiming(), nextState = _a.nextState, waitMs = _a.waitMs;
        this.timeoutId = setTimeout(function () {
            _this.setState(nextState, function () {
                _this.setTimeout();
            });
        }, waitMs);
    };
    NowTimer.prototype.clearTimeout = function () {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    };
    NowTimer.contextType = ViewContextType;
    return NowTimer;
}(_vdom_js__WEBPACK_IMPORTED_MODULE_1__.Component));
function buildDayRange(date) {
    var start = startOfDay(date);
    var end = addDays(start, 1);
    return { start: start, end: end };
}

var DayHeader = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DayHeader, _super);
    function DayHeader() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.createDayHeaderFormatter = memoize(createDayHeaderFormatter);
        return _this;
    }
    DayHeader.prototype.render = function () {
        var context = this.context;
        var _a = this.props, dates = _a.dates, dateProfile = _a.dateProfile, datesRepDistinctDays = _a.datesRepDistinctDays, renderIntro = _a.renderIntro;
        var dayHeaderFormat = this.createDayHeaderFormatter(context.options.dayHeaderFormat, datesRepDistinctDays, dates.length);
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(NowTimer, { unit: "day" }, function (nowDate, todayRange) { return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", null,
            renderIntro && renderIntro('day'),
            dates.map(function (date) { return (datesRepDistinctDays ? ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableDateCell, { key: date.toISOString(), date: date, dateProfile: dateProfile, todayRange: todayRange, colCnt: dates.length, dayHeaderFormat: dayHeaderFormat })) : ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableDowCell, { key: date.getUTCDay(), dow: date.getUTCDay(), dayHeaderFormat: dayHeaderFormat }))); }))); }));
    };
    return DayHeader;
}(BaseComponent));
function createDayHeaderFormatter(explicitFormat, datesRepDistinctDays, dateCnt) {
    return explicitFormat || computeFallbackHeaderFormat(datesRepDistinctDays, dateCnt);
}

var DaySeriesModel = /** @class */ (function () {
    function DaySeriesModel(range, dateProfileGenerator) {
        var date = range.start;
        var end = range.end;
        var indices = [];
        var dates = [];
        var dayIndex = -1;
        while (date < end) { // loop each day from start to end
            if (dateProfileGenerator.isHiddenDay(date)) {
                indices.push(dayIndex + 0.5); // mark that it's between indices
            }
            else {
                dayIndex += 1;
                indices.push(dayIndex);
                dates.push(date);
            }
            date = addDays(date, 1);
        }
        this.dates = dates;
        this.indices = indices;
        this.cnt = dates.length;
    }
    DaySeriesModel.prototype.sliceRange = function (range) {
        var firstIndex = this.getDateDayIndex(range.start); // inclusive first index
        var lastIndex = this.getDateDayIndex(addDays(range.end, -1)); // inclusive last index
        var clippedFirstIndex = Math.max(0, firstIndex);
        var clippedLastIndex = Math.min(this.cnt - 1, lastIndex);
        // deal with in-between indices
        clippedFirstIndex = Math.ceil(clippedFirstIndex); // in-between starts round to next cell
        clippedLastIndex = Math.floor(clippedLastIndex); // in-between ends round to prev cell
        if (clippedFirstIndex <= clippedLastIndex) {
            return {
                firstIndex: clippedFirstIndex,
                lastIndex: clippedLastIndex,
                isStart: firstIndex === clippedFirstIndex,
                isEnd: lastIndex === clippedLastIndex,
            };
        }
        return null;
    };
    // Given a date, returns its chronolocial cell-index from the first cell of the grid.
    // If the date lies between cells (because of hiddenDays), returns a floating-point value between offsets.
    // If before the first offset, returns a negative number.
    // If after the last offset, returns an offset past the last cell offset.
    // Only works for *start* dates of cells. Will not work for exclusive end dates for cells.
    DaySeriesModel.prototype.getDateDayIndex = function (date) {
        var indices = this.indices;
        var dayOffset = Math.floor(diffDays(this.dates[0], date));
        if (dayOffset < 0) {
            return indices[0] - 1;
        }
        if (dayOffset >= indices.length) {
            return indices[indices.length - 1] + 1;
        }
        return indices[dayOffset];
    };
    return DaySeriesModel;
}());

var DayTableModel = /** @class */ (function () {
    function DayTableModel(daySeries, breakOnWeeks) {
        var dates = daySeries.dates;
        var daysPerRow;
        var firstDay;
        var rowCnt;
        if (breakOnWeeks) {
            // count columns until the day-of-week repeats
            firstDay = dates[0].getUTCDay();
            for (daysPerRow = 1; daysPerRow < dates.length; daysPerRow += 1) {
                if (dates[daysPerRow].getUTCDay() === firstDay) {
                    break;
                }
            }
            rowCnt = Math.ceil(dates.length / daysPerRow);
        }
        else {
            rowCnt = 1;
            daysPerRow = dates.length;
        }
        this.rowCnt = rowCnt;
        this.colCnt = daysPerRow;
        this.daySeries = daySeries;
        this.cells = this.buildCells();
        this.headerDates = this.buildHeaderDates();
    }
    DayTableModel.prototype.buildCells = function () {
        var rows = [];
        for (var row = 0; row < this.rowCnt; row += 1) {
            var cells = [];
            for (var col = 0; col < this.colCnt; col += 1) {
                cells.push(this.buildCell(row, col));
            }
            rows.push(cells);
        }
        return rows;
    };
    DayTableModel.prototype.buildCell = function (row, col) {
        var date = this.daySeries.dates[row * this.colCnt + col];
        return {
            key: date.toISOString(),
            date: date,
        };
    };
    DayTableModel.prototype.buildHeaderDates = function () {
        var dates = [];
        for (var col = 0; col < this.colCnt; col += 1) {
            dates.push(this.cells[0][col].date);
        }
        return dates;
    };
    DayTableModel.prototype.sliceRange = function (range) {
        var colCnt = this.colCnt;
        var seriesSeg = this.daySeries.sliceRange(range);
        var segs = [];
        if (seriesSeg) {
            var firstIndex = seriesSeg.firstIndex, lastIndex = seriesSeg.lastIndex;
            var index = firstIndex;
            while (index <= lastIndex) {
                var row = Math.floor(index / colCnt);
                var nextIndex = Math.min((row + 1) * colCnt, lastIndex + 1);
                segs.push({
                    row: row,
                    firstCol: index % colCnt,
                    lastCol: (nextIndex - 1) % colCnt,
                    isStart: seriesSeg.isStart && index === firstIndex,
                    isEnd: seriesSeg.isEnd && (nextIndex - 1) === lastIndex,
                });
                index = nextIndex;
            }
        }
        return segs;
    };
    return DayTableModel;
}());

var Slicer = /** @class */ (function () {
    function Slicer() {
        this.sliceBusinessHours = memoize(this._sliceBusinessHours);
        this.sliceDateSelection = memoize(this._sliceDateSpan);
        this.sliceEventStore = memoize(this._sliceEventStore);
        this.sliceEventDrag = memoize(this._sliceInteraction);
        this.sliceEventResize = memoize(this._sliceInteraction);
        this.forceDayIfListItem = false; // hack
    }
    Slicer.prototype.sliceProps = function (props, dateProfile, nextDayThreshold, context) {
        var extraArgs = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            extraArgs[_i - 4] = arguments[_i];
        }
        var eventUiBases = props.eventUiBases;
        var eventSegs = this.sliceEventStore.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)([props.eventStore, eventUiBases, dateProfile, nextDayThreshold], extraArgs));
        return {
            dateSelectionSegs: this.sliceDateSelection.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)([props.dateSelection, eventUiBases, context], extraArgs)),
            businessHourSegs: this.sliceBusinessHours.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)([props.businessHours, dateProfile, nextDayThreshold, context], extraArgs)),
            fgEventSegs: eventSegs.fg,
            bgEventSegs: eventSegs.bg,
            eventDrag: this.sliceEventDrag.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)([props.eventDrag, eventUiBases, dateProfile, nextDayThreshold], extraArgs)),
            eventResize: this.sliceEventResize.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)([props.eventResize, eventUiBases, dateProfile, nextDayThreshold], extraArgs)),
            eventSelection: props.eventSelection,
        }; // TODO: give interactionSegs?
    };
    Slicer.prototype.sliceNowDate = function (// does not memoize
    date, context) {
        var extraArgs = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            extraArgs[_i - 2] = arguments[_i];
        }
        return this._sliceDateSpan.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)([{ range: { start: date, end: addMs(date, 1) }, allDay: false },
            {},
            context], extraArgs));
    };
    Slicer.prototype._sliceBusinessHours = function (businessHours, dateProfile, nextDayThreshold, context) {
        var extraArgs = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            extraArgs[_i - 4] = arguments[_i];
        }
        if (!businessHours) {
            return [];
        }
        return this._sliceEventStore.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)([expandRecurring(businessHours, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), context),
            {},
            dateProfile,
            nextDayThreshold], extraArgs)).bg;
    };
    Slicer.prototype._sliceEventStore = function (eventStore, eventUiBases, dateProfile, nextDayThreshold) {
        var extraArgs = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            extraArgs[_i - 4] = arguments[_i];
        }
        if (eventStore) {
            var rangeRes = sliceEventStore(eventStore, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
            return {
                bg: this.sliceEventRanges(rangeRes.bg, extraArgs),
                fg: this.sliceEventRanges(rangeRes.fg, extraArgs),
            };
        }
        return { bg: [], fg: [] };
    };
    Slicer.prototype._sliceInteraction = function (interaction, eventUiBases, dateProfile, nextDayThreshold) {
        var extraArgs = [];
        for (var _i = 4; _i < arguments.length; _i++) {
            extraArgs[_i - 4] = arguments[_i];
        }
        if (!interaction) {
            return null;
        }
        var rangeRes = sliceEventStore(interaction.mutatedEvents, eventUiBases, computeActiveRange(dateProfile, Boolean(nextDayThreshold)), nextDayThreshold);
        return {
            segs: this.sliceEventRanges(rangeRes.fg, extraArgs),
            affectedInstances: interaction.affectedEvents.instances,
            isEvent: interaction.isEvent,
        };
    };
    Slicer.prototype._sliceDateSpan = function (dateSpan, eventUiBases, context) {
        var extraArgs = [];
        for (var _i = 3; _i < arguments.length; _i++) {
            extraArgs[_i - 3] = arguments[_i];
        }
        if (!dateSpan) {
            return [];
        }
        var eventRange = fabricateEventRange(dateSpan, eventUiBases, context);
        var segs = this.sliceRange.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)([dateSpan.range], extraArgs));
        for (var _a = 0, segs_1 = segs; _a < segs_1.length; _a++) {
            var seg = segs_1[_a];
            seg.eventRange = eventRange;
        }
        return segs;
    };
    /*
    "complete" seg means it has component and eventRange
    */
    Slicer.prototype.sliceEventRanges = function (eventRanges, extraArgs) {
        var segs = [];
        for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
            var eventRange = eventRanges_1[_i];
            segs.push.apply(segs, this.sliceEventRange(eventRange, extraArgs));
        }
        return segs;
    };
    /*
    "complete" seg means it has component and eventRange
    */
    Slicer.prototype.sliceEventRange = function (eventRange, extraArgs) {
        var dateRange = eventRange.range;
        // hack to make multi-day events that are being force-displayed as list-items to take up only one day
        if (this.forceDayIfListItem && eventRange.ui.display === 'list-item') {
            dateRange = {
                start: dateRange.start,
                end: addDays(dateRange.start, 1),
            };
        }
        var segs = this.sliceRange.apply(this, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)([dateRange], extraArgs));
        for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
            var seg = segs_2[_i];
            seg.eventRange = eventRange;
            seg.isStart = eventRange.isStart && seg.isStart;
            seg.isEnd = eventRange.isEnd && seg.isEnd;
        }
        return segs;
    };
    return Slicer;
}());
/*
for incorporating slotMinTime/slotMaxTime if appropriate
TODO: should be part of DateProfile!
TimelineDateProfile already does this btw
*/
function computeActiveRange(dateProfile, isComponentAllDay) {
    var range = dateProfile.activeRange;
    if (isComponentAllDay) {
        return range;
    }
    return {
        start: addMs(range.start, dateProfile.slotMinTime.milliseconds),
        end: addMs(range.end, dateProfile.slotMaxTime.milliseconds - 864e5),
    };
}

// high-level segmenting-aware tester functions
// ------------------------------------------------------------------------------------------------------------------------
function isInteractionValid(interaction, dateProfile, context) {
    var instances = interaction.mutatedEvents.instances;
    for (var instanceId in instances) {
        if (!rangeContainsRange(dateProfile.validRange, instances[instanceId].range)) {
            return false;
        }
    }
    return isNewPropsValid({ eventDrag: interaction }, context); // HACK: the eventDrag props is used for ALL interactions
}
function isDateSelectionValid(dateSelection, dateProfile, context) {
    if (!rangeContainsRange(dateProfile.validRange, dateSelection.range)) {
        return false;
    }
    return isNewPropsValid({ dateSelection: dateSelection }, context);
}
function isNewPropsValid(newProps, context) {
    var calendarState = context.getCurrentData();
    var props = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ businessHours: calendarState.businessHours, dateSelection: '', eventStore: calendarState.eventStore, eventUiBases: calendarState.eventUiBases, eventSelection: '', eventDrag: null, eventResize: null }, newProps);
    return (context.pluginHooks.isPropsValid || isPropsValid)(props, context);
}
function isPropsValid(state, context, dateSpanMeta, filterConfig) {
    if (dateSpanMeta === void 0) { dateSpanMeta = {}; }
    if (state.eventDrag && !isInteractionPropsValid(state, context, dateSpanMeta, filterConfig)) {
        return false;
    }
    if (state.dateSelection && !isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig)) {
        return false;
    }
    return true;
}
// Moving Event Validation
// ------------------------------------------------------------------------------------------------------------------------
function isInteractionPropsValid(state, context, dateSpanMeta, filterConfig) {
    var currentState = context.getCurrentData();
    var interaction = state.eventDrag; // HACK: the eventDrag props is used for ALL interactions
    var subjectEventStore = interaction.mutatedEvents;
    var subjectDefs = subjectEventStore.defs;
    var subjectInstances = subjectEventStore.instances;
    var subjectConfigs = compileEventUis(subjectDefs, interaction.isEvent ?
        state.eventUiBases :
        { '': currentState.selectionConfig });
    if (filterConfig) {
        subjectConfigs = mapHash(subjectConfigs, filterConfig);
    }
    // exclude the subject events. TODO: exclude defs too?
    var otherEventStore = excludeInstances(state.eventStore, interaction.affectedEvents.instances);
    var otherDefs = otherEventStore.defs;
    var otherInstances = otherEventStore.instances;
    var otherConfigs = compileEventUis(otherDefs, state.eventUiBases);
    for (var subjectInstanceId in subjectInstances) {
        var subjectInstance = subjectInstances[subjectInstanceId];
        var subjectRange = subjectInstance.range;
        var subjectConfig = subjectConfigs[subjectInstance.defId];
        var subjectDef = subjectDefs[subjectInstance.defId];
        // constraint
        if (!allConstraintsPass(subjectConfig.constraints, subjectRange, otherEventStore, state.businessHours, context)) {
            return false;
        }
        // overlap
        var eventOverlap = context.options.eventOverlap;
        var eventOverlapFunc = typeof eventOverlap === 'function' ? eventOverlap : null;
        for (var otherInstanceId in otherInstances) {
            var otherInstance = otherInstances[otherInstanceId];
            // intersect! evaluate
            if (rangesIntersect(subjectRange, otherInstance.range)) {
                var otherOverlap = otherConfigs[otherInstance.defId].overlap;
                // consider the other event's overlap. only do this if the subject event is a "real" event
                if (otherOverlap === false && interaction.isEvent) {
                    return false;
                }
                if (subjectConfig.overlap === false) {
                    return false;
                }
                if (eventOverlapFunc && !eventOverlapFunc(new EventApi(context, otherDefs[otherInstance.defId], otherInstance), // still event
                new EventApi(context, subjectDef, subjectInstance))) {
                    return false;
                }
            }
        }
        // allow (a function)
        var calendarEventStore = currentState.eventStore; // need global-to-calendar, not local to component (splittable)state
        for (var _i = 0, _a = subjectConfig.allows; _i < _a.length; _i++) {
            var subjectAllow = _a[_i];
            var subjectDateSpan = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, dateSpanMeta), { range: subjectInstance.range, allDay: subjectDef.allDay });
            var origDef = calendarEventStore.defs[subjectDef.defId];
            var origInstance = calendarEventStore.instances[subjectInstanceId];
            var eventApi = void 0;
            if (origDef) { // was previously in the calendar
                eventApi = new EventApi(context, origDef, origInstance);
            }
            else { // was an external event
                eventApi = new EventApi(context, subjectDef); // no instance, because had no dates
            }
            if (!subjectAllow(buildDateSpanApiWithContext(subjectDateSpan, context), eventApi)) {
                return false;
            }
        }
    }
    return true;
}
// Date Selection Validation
// ------------------------------------------------------------------------------------------------------------------------
function isDateSelectionPropsValid(state, context, dateSpanMeta, filterConfig) {
    var relevantEventStore = state.eventStore;
    var relevantDefs = relevantEventStore.defs;
    var relevantInstances = relevantEventStore.instances;
    var selection = state.dateSelection;
    var selectionRange = selection.range;
    var selectionConfig = context.getCurrentData().selectionConfig;
    if (filterConfig) {
        selectionConfig = filterConfig(selectionConfig);
    }
    // constraint
    if (!allConstraintsPass(selectionConfig.constraints, selectionRange, relevantEventStore, state.businessHours, context)) {
        return false;
    }
    // overlap
    var selectOverlap = context.options.selectOverlap;
    var selectOverlapFunc = typeof selectOverlap === 'function' ? selectOverlap : null;
    for (var relevantInstanceId in relevantInstances) {
        var relevantInstance = relevantInstances[relevantInstanceId];
        // intersect! evaluate
        if (rangesIntersect(selectionRange, relevantInstance.range)) {
            if (selectionConfig.overlap === false) {
                return false;
            }
            if (selectOverlapFunc && !selectOverlapFunc(new EventApi(context, relevantDefs[relevantInstance.defId], relevantInstance), null)) {
                return false;
            }
        }
    }
    // allow (a function)
    for (var _i = 0, _a = selectionConfig.allows; _i < _a.length; _i++) {
        var selectionAllow = _a[_i];
        var fullDateSpan = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, dateSpanMeta), selection);
        if (!selectionAllow(buildDateSpanApiWithContext(fullDateSpan, context), null)) {
            return false;
        }
    }
    return true;
}
// Constraint Utils
// ------------------------------------------------------------------------------------------------------------------------
function allConstraintsPass(constraints, subjectRange, otherEventStore, businessHoursUnexpanded, context) {
    for (var _i = 0, constraints_1 = constraints; _i < constraints_1.length; _i++) {
        var constraint = constraints_1[_i];
        if (!anyRangesContainRange(constraintToRanges(constraint, subjectRange, otherEventStore, businessHoursUnexpanded, context), subjectRange)) {
            return false;
        }
    }
    return true;
}
function constraintToRanges(constraint, subjectRange, // for expanding a recurring constraint, or expanding business hours
otherEventStore, // for if constraint is an even group ID
businessHoursUnexpanded, // for if constraint is 'businessHours'
context) {
    if (constraint === 'businessHours') {
        return eventStoreToRanges(expandRecurring(businessHoursUnexpanded, subjectRange, context));
    }
    if (typeof constraint === 'string') { // an group ID
        return eventStoreToRanges(filterEventStoreDefs(otherEventStore, function (eventDef) { return eventDef.groupId === constraint; }));
    }
    if (typeof constraint === 'object' && constraint) { // non-null object
        return eventStoreToRanges(expandRecurring(constraint, subjectRange, context));
    }
    return []; // if it's false
}
// TODO: move to event-store file?
function eventStoreToRanges(eventStore) {
    var instances = eventStore.instances;
    var ranges = [];
    for (var instanceId in instances) {
        ranges.push(instances[instanceId].range);
    }
    return ranges;
}
// TODO: move to geom file?
function anyRangesContainRange(outerRanges, innerRange) {
    for (var _i = 0, outerRanges_1 = outerRanges; _i < outerRanges_1.length; _i++) {
        var outerRange = outerRanges_1[_i];
        if (rangeContainsRange(outerRange, innerRange)) {
            return true;
        }
    }
    return false;
}

var VISIBLE_HIDDEN_RE = /^(visible|hidden)$/;
var Scroller = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(Scroller, _super);
    function Scroller() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleEl = function (el) {
            _this.el = el;
            setRef(_this.props.elRef, el);
        };
        return _this;
    }
    Scroller.prototype.render = function () {
        var props = this.props;
        var liquid = props.liquid, liquidIsAbsolute = props.liquidIsAbsolute;
        var isAbsolute = liquid && liquidIsAbsolute;
        var className = ['fc-scroller'];
        if (liquid) {
            if (liquidIsAbsolute) {
                className.push('fc-scroller-liquid-absolute');
            }
            else {
                className.push('fc-scroller-liquid');
            }
        }
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: this.handleEl, className: className.join(' '), style: {
                overflowX: props.overflowX,
                overflowY: props.overflowY,
                left: (isAbsolute && -(props.overcomeLeft || 0)) || '',
                right: (isAbsolute && -(props.overcomeRight || 0)) || '',
                bottom: (isAbsolute && -(props.overcomeBottom || 0)) || '',
                marginLeft: (!isAbsolute && -(props.overcomeLeft || 0)) || '',
                marginRight: (!isAbsolute && -(props.overcomeRight || 0)) || '',
                marginBottom: (!isAbsolute && -(props.overcomeBottom || 0)) || '',
                maxHeight: props.maxHeight || '',
            } }, props.children));
    };
    Scroller.prototype.needsXScrolling = function () {
        if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
            return false;
        }
        // testing scrollWidth>clientWidth is unreliable cross-browser when pixel heights aren't integers.
        // much more reliable to see if children are taller than the scroller, even tho doesn't account for
        // inner-child margins and absolute positioning
        var el = this.el;
        var realClientWidth = this.el.getBoundingClientRect().width - this.getYScrollbarWidth();
        var children = el.children;
        for (var i = 0; i < children.length; i += 1) {
            var childEl = children[i];
            if (childEl.getBoundingClientRect().width > realClientWidth) {
                return true;
            }
        }
        return false;
    };
    Scroller.prototype.needsYScrolling = function () {
        if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
            return false;
        }
        // testing scrollHeight>clientHeight is unreliable cross-browser when pixel heights aren't integers.
        // much more reliable to see if children are taller than the scroller, even tho doesn't account for
        // inner-child margins and absolute positioning
        var el = this.el;
        var realClientHeight = this.el.getBoundingClientRect().height - this.getXScrollbarWidth();
        var children = el.children;
        for (var i = 0; i < children.length; i += 1) {
            var childEl = children[i];
            if (childEl.getBoundingClientRect().height > realClientHeight) {
                return true;
            }
        }
        return false;
    };
    Scroller.prototype.getXScrollbarWidth = function () {
        if (VISIBLE_HIDDEN_RE.test(this.props.overflowX)) {
            return 0;
        }
        return this.el.offsetHeight - this.el.clientHeight; // only works because we guarantee no borders. TODO: add to CSS with important?
    };
    Scroller.prototype.getYScrollbarWidth = function () {
        if (VISIBLE_HIDDEN_RE.test(this.props.overflowY)) {
            return 0;
        }
        return this.el.offsetWidth - this.el.clientWidth; // only works because we guarantee no borders. TODO: add to CSS with important?
    };
    return Scroller;
}(BaseComponent));

/*
TODO: somehow infer OtherArgs from masterCallback?
TODO: infer RefType from masterCallback if provided
*/
var RefMap = /** @class */ (function () {
    function RefMap(masterCallback) {
        var _this = this;
        this.masterCallback = masterCallback;
        this.currentMap = {};
        this.depths = {};
        this.callbackMap = {};
        this.handleValue = function (val, key) {
            var _a = _this, depths = _a.depths, currentMap = _a.currentMap;
            var removed = false;
            var added = false;
            if (val !== null) {
                // for bug... ACTUALLY: can probably do away with this now that callers don't share numeric indices anymore
                removed = (key in currentMap);
                currentMap[key] = val;
                depths[key] = (depths[key] || 0) + 1;
                added = true;
            }
            else {
                depths[key] -= 1;
                if (!depths[key]) {
                    delete currentMap[key];
                    delete _this.callbackMap[key];
                    removed = true;
                }
            }
            if (_this.masterCallback) {
                if (removed) {
                    _this.masterCallback(null, String(key));
                }
                if (added) {
                    _this.masterCallback(val, String(key));
                }
            }
        };
    }
    RefMap.prototype.createRef = function (key) {
        var _this = this;
        var refCallback = this.callbackMap[key];
        if (!refCallback) {
            refCallback = this.callbackMap[key] = function (val) {
                _this.handleValue(val, String(key));
            };
        }
        return refCallback;
    };
    // TODO: check callers that don't care about order. should use getAll instead
    // NOTE: this method has become less valuable now that we are encouraged to map order by some other index
    // TODO: provide ONE array-export function, buildArray, which fails on non-numeric indexes. caller can manipulate and "collect"
    RefMap.prototype.collect = function (startIndex, endIndex, step) {
        return collectFromHash(this.currentMap, startIndex, endIndex, step);
    };
    RefMap.prototype.getAll = function () {
        return hashValuesToArray(this.currentMap);
    };
    return RefMap;
}());

function computeShrinkWidth(chunkEls) {
    var shrinkCells = findElements(chunkEls, '.fc-scrollgrid-shrink');
    var largestWidth = 0;
    for (var _i = 0, shrinkCells_1 = shrinkCells; _i < shrinkCells_1.length; _i++) {
        var shrinkCell = shrinkCells_1[_i];
        largestWidth = Math.max(largestWidth, computeSmallestCellWidth(shrinkCell));
    }
    return Math.ceil(largestWidth); // <table> elements work best with integers. round up to ensure contents fits
}
function getSectionHasLiquidHeight(props, sectionConfig) {
    return props.liquid && sectionConfig.liquid; // does the section do liquid-height? (need to have whole scrollgrid liquid-height as well)
}
function getAllowYScrolling(props, sectionConfig) {
    return sectionConfig.maxHeight != null || // if its possible for the height to max out, we might need scrollbars
        getSectionHasLiquidHeight(props, sectionConfig); // if the section is liquid height, it might condense enough to require scrollbars
}
// TODO: ONLY use `arg`. force out internal function to use same API
function renderChunkContent(sectionConfig, chunkConfig, arg) {
    var expandRows = arg.expandRows;
    var content = typeof chunkConfig.content === 'function' ?
        chunkConfig.content(arg) :
        (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('table', {
            className: [
                chunkConfig.tableClassName,
                sectionConfig.syncRowHeights ? 'fc-scrollgrid-sync-table' : '',
            ].join(' '),
            style: {
                minWidth: arg.tableMinWidth,
                width: arg.clientWidth,
                height: expandRows ? arg.clientHeight : '',
            },
        }, arg.tableColGroupNode, (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('tbody', {}, typeof chunkConfig.rowContent === 'function' ? chunkConfig.rowContent(arg) : chunkConfig.rowContent));
    return content;
}
function isColPropsEqual(cols0, cols1) {
    return isArraysEqual(cols0, cols1, isPropsEqual);
}
function renderMicroColGroup(cols, shrinkWidth) {
    var colNodes = [];
    /*
    for ColProps with spans, it would have been great to make a single <col span="">
    HOWEVER, Chrome was getting messing up distributing the width to <td>/<th> elements with colspans.
    SOLUTION: making individual <col> elements makes Chrome behave.
    */
    for (var _i = 0, cols_1 = cols; _i < cols_1.length; _i++) {
        var colProps = cols_1[_i];
        var span = colProps.span || 1;
        for (var i = 0; i < span; i += 1) {
            colNodes.push((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("col", { style: {
                    width: colProps.width === 'shrink' ? sanitizeShrinkWidth(shrinkWidth) : (colProps.width || ''),
                    minWidth: colProps.minWidth || '',
                } }));
        }
    }
    return _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)(['colgroup', {}], colNodes));
}
function sanitizeShrinkWidth(shrinkWidth) {
    /* why 4? if we do 0, it will kill any border, which are needed for computeSmallestCellWidth
    4 accounts for 2 2-pixel borders. TODO: better solution? */
    return shrinkWidth == null ? 4 : shrinkWidth;
}
function hasShrinkWidth(cols) {
    for (var _i = 0, cols_2 = cols; _i < cols_2.length; _i++) {
        var col = cols_2[_i];
        if (col.width === 'shrink') {
            return true;
        }
    }
    return false;
}
function getScrollGridClassNames(liquid, context) {
    var classNames = [
        'fc-scrollgrid',
        context.theme.getClass('table'),
    ];
    if (liquid) {
        classNames.push('fc-scrollgrid-liquid');
    }
    return classNames;
}
function getSectionClassNames(sectionConfig, wholeTableVGrow) {
    var classNames = [
        'fc-scrollgrid-section',
        "fc-scrollgrid-section-" + sectionConfig.type,
        sectionConfig.className,
    ];
    if (wholeTableVGrow && sectionConfig.liquid && sectionConfig.maxHeight == null) {
        classNames.push('fc-scrollgrid-section-liquid');
    }
    if (sectionConfig.isSticky) {
        classNames.push('fc-scrollgrid-section-sticky');
    }
    return classNames;
}
function renderScrollShim(arg) {
    return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-scrollgrid-sticky-shim", style: {
            width: arg.clientWidth,
            minWidth: arg.tableMinWidth,
        } }));
}
function getStickyHeaderDates(options) {
    var stickyHeaderDates = options.stickyHeaderDates;
    if (stickyHeaderDates == null || stickyHeaderDates === 'auto') {
        stickyHeaderDates = options.height === 'auto' || options.viewHeight === 'auto';
    }
    return stickyHeaderDates;
}
function getStickyFooterScrollbar(options) {
    var stickyFooterScrollbar = options.stickyFooterScrollbar;
    if (stickyFooterScrollbar == null || stickyFooterScrollbar === 'auto') {
        stickyFooterScrollbar = options.height === 'auto' || options.viewHeight === 'auto';
    }
    return stickyFooterScrollbar;
}

var SimpleScrollGrid = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(SimpleScrollGrid, _super);
    function SimpleScrollGrid() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.processCols = memoize(function (a) { return a; }, isColPropsEqual); // so we get same `cols` props every time
        // yucky to memoize VNodes, but much more efficient for consumers
        _this.renderMicroColGroup = memoize(renderMicroColGroup);
        _this.scrollerRefs = new RefMap();
        _this.scrollerElRefs = new RefMap(_this._handleScrollerEl.bind(_this));
        _this.state = {
            shrinkWidth: null,
            forceYScrollbars: false,
            scrollerClientWidths: {},
            scrollerClientHeights: {},
        };
        // TODO: can do a really simple print-view. dont need to join rows
        _this.handleSizing = function () {
            _this.setState((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ shrinkWidth: _this.computeShrinkWidth() }, _this.computeScrollerDims()));
        };
        return _this;
    }
    SimpleScrollGrid.prototype.render = function () {
        var _a = this, props = _a.props, state = _a.state, context = _a.context;
        var sectionConfigs = props.sections || [];
        var cols = this.processCols(props.cols);
        var microColGroupNode = this.renderMicroColGroup(cols, state.shrinkWidth);
        var classNames = getScrollGridClassNames(props.liquid, context);
        if (props.collapsibleWidth) {
            classNames.push('fc-scrollgrid-collapsible');
        }
        // TODO: make DRY
        var configCnt = sectionConfigs.length;
        var configI = 0;
        var currentConfig;
        var headSectionNodes = [];
        var bodySectionNodes = [];
        var footSectionNodes = [];
        while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'header') {
            headSectionNodes.push(this.renderSection(currentConfig, microColGroupNode));
            configI += 1;
        }
        while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'body') {
            bodySectionNodes.push(this.renderSection(currentConfig, microColGroupNode));
            configI += 1;
        }
        while (configI < configCnt && (currentConfig = sectionConfigs[configI]).type === 'footer') {
            footSectionNodes.push(this.renderSection(currentConfig, microColGroupNode));
            configI += 1;
        }
        // firefox bug: when setting height on table and there is a thead or tfoot,
        // the necessary height:100% on the liquid-height body section forces the *whole* table to be taller. (bug #5524)
        // use getCanVGrowWithinCell as a way to detect table-stupid firefox.
        // if so, use a simpler dom structure, jam everything into a lone tbody.
        var isBuggy = !getCanVGrowWithinCell();
        return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)('table', {
            className: classNames.join(' '),
            style: { height: props.height },
        }, Boolean(!isBuggy && headSectionNodes.length) && _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)(['thead', {}], headSectionNodes)), Boolean(!isBuggy && bodySectionNodes.length) && _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)(['tbody', {}], bodySectionNodes)), Boolean(!isBuggy && footSectionNodes.length) && _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)(['tfoot', {}], footSectionNodes)), isBuggy && _vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)(['tbody', {}], headSectionNodes, bodySectionNodes, footSectionNodes)));
    };
    SimpleScrollGrid.prototype.renderSection = function (sectionConfig, microColGroupNode) {
        if ('outerContent' in sectionConfig) {
            return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_vdom_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, { key: sectionConfig.key }, sectionConfig.outerContent));
        }
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { key: sectionConfig.key, className: getSectionClassNames(sectionConfig, this.props.liquid).join(' ') }, this.renderChunkTd(sectionConfig, microColGroupNode, sectionConfig.chunk)));
    };
    SimpleScrollGrid.prototype.renderChunkTd = function (sectionConfig, microColGroupNode, chunkConfig) {
        if ('outerContent' in chunkConfig) {
            return chunkConfig.outerContent;
        }
        var props = this.props;
        var _a = this.state, forceYScrollbars = _a.forceYScrollbars, scrollerClientWidths = _a.scrollerClientWidths, scrollerClientHeights = _a.scrollerClientHeights;
        var needsYScrolling = getAllowYScrolling(props, sectionConfig); // TODO: do lazily. do in section config?
        var isLiquid = getSectionHasLiquidHeight(props, sectionConfig);
        // for `!props.liquid` - is WHOLE scrollgrid natural height?
        // TODO: do same thing in advanced scrollgrid? prolly not b/c always has horizontal scrollbars
        var overflowY = !props.liquid ? 'visible' :
            forceYScrollbars ? 'scroll' :
                !needsYScrolling ? 'hidden' :
                    'auto';
        var sectionKey = sectionConfig.key;
        var content = renderChunkContent(sectionConfig, chunkConfig, {
            tableColGroupNode: microColGroupNode,
            tableMinWidth: '',
            clientWidth: (!props.collapsibleWidth && scrollerClientWidths[sectionKey] !== undefined) ? scrollerClientWidths[sectionKey] : null,
            clientHeight: scrollerClientHeights[sectionKey] !== undefined ? scrollerClientHeights[sectionKey] : null,
            expandRows: sectionConfig.expandRows,
            syncRowHeights: false,
            rowSyncHeights: [],
            reportRowHeightChange: function () { },
        });
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { ref: chunkConfig.elRef },
            (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-scroller-harness" + (isLiquid ? ' fc-scroller-harness-liquid' : '') },
                (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(Scroller, { ref: this.scrollerRefs.createRef(sectionKey), elRef: this.scrollerElRefs.createRef(sectionKey), overflowY: overflowY, overflowX: !props.liquid ? 'visible' : 'hidden' /* natural height? */, maxHeight: sectionConfig.maxHeight, liquid: isLiquid, liquidIsAbsolute // because its within a harness
                    : true }, content))));
    };
    SimpleScrollGrid.prototype._handleScrollerEl = function (scrollerEl, key) {
        var section = getSectionByKey(this.props.sections, key);
        if (section) {
            setRef(section.chunk.scrollerElRef, scrollerEl);
        }
    };
    SimpleScrollGrid.prototype.componentDidMount = function () {
        this.handleSizing();
        this.context.addResizeHandler(this.handleSizing);
    };
    SimpleScrollGrid.prototype.componentDidUpdate = function () {
        // TODO: need better solution when state contains non-sizing things
        this.handleSizing();
    };
    SimpleScrollGrid.prototype.componentWillUnmount = function () {
        this.context.removeResizeHandler(this.handleSizing);
    };
    SimpleScrollGrid.prototype.computeShrinkWidth = function () {
        return hasShrinkWidth(this.props.cols)
            ? computeShrinkWidth(this.scrollerElRefs.getAll())
            : 0;
    };
    SimpleScrollGrid.prototype.computeScrollerDims = function () {
        var scrollbarWidth = getScrollbarWidths();
        var _a = this, scrollerRefs = _a.scrollerRefs, scrollerElRefs = _a.scrollerElRefs;
        var forceYScrollbars = false;
        var scrollerClientWidths = {};
        var scrollerClientHeights = {};
        for (var sectionKey in scrollerRefs.currentMap) {
            var scroller = scrollerRefs.currentMap[sectionKey];
            if (scroller && scroller.needsYScrolling()) {
                forceYScrollbars = true;
                break;
            }
        }
        for (var _i = 0, _b = this.props.sections; _i < _b.length; _i++) {
            var section = _b[_i];
            var sectionKey = section.key;
            var scrollerEl = scrollerElRefs.currentMap[sectionKey];
            if (scrollerEl) {
                var harnessEl = scrollerEl.parentNode; // TODO: weird way to get this. need harness b/c doesn't include table borders
                scrollerClientWidths[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().width - (forceYScrollbars
                    ? scrollbarWidth.y // use global because scroller might not have scrollbars yet but will need them in future
                    : 0));
                scrollerClientHeights[sectionKey] = Math.floor(harnessEl.getBoundingClientRect().height);
            }
        }
        return { forceYScrollbars: forceYScrollbars, scrollerClientWidths: scrollerClientWidths, scrollerClientHeights: scrollerClientHeights };
    };
    return SimpleScrollGrid;
}(BaseComponent));
SimpleScrollGrid.addStateEquality({
    scrollerClientWidths: isPropsEqual,
    scrollerClientHeights: isPropsEqual,
});
function getSectionByKey(sections, key) {
    for (var _i = 0, sections_1 = sections; _i < sections_1.length; _i++) {
        var section = sections_1[_i];
        if (section.key === key) {
            return section;
        }
    }
    return null;
}

var EventRoot = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(EventRoot, _super);
    function EventRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.elRef = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        return _this;
    }
    EventRoot.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        var options = context.options;
        var seg = props.seg;
        var eventRange = seg.eventRange;
        var ui = eventRange.ui;
        var hookProps = {
            event: new EventApi(context, eventRange.def, eventRange.instance),
            view: context.viewApi,
            timeText: props.timeText,
            textColor: ui.textColor,
            backgroundColor: ui.backgroundColor,
            borderColor: ui.borderColor,
            isDraggable: !props.disableDragging && computeSegDraggable(seg, context),
            isStartResizable: !props.disableResizing && computeSegStartResizable(seg, context),
            isEndResizable: !props.disableResizing && computeSegEndResizable(seg),
            isMirror: Boolean(props.isDragging || props.isResizing || props.isDateSelecting),
            isStart: Boolean(seg.isStart),
            isEnd: Boolean(seg.isEnd),
            isPast: Boolean(props.isPast),
            isFuture: Boolean(props.isFuture),
            isToday: Boolean(props.isToday),
            isSelected: Boolean(props.isSelected),
            isDragging: Boolean(props.isDragging),
            isResizing: Boolean(props.isResizing),
        };
        var standardClassNames = getEventClassNames(hookProps).concat(ui.classNames);
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(RenderHook, { hookProps: hookProps, classNames: options.eventClassNames, content: options.eventContent, defaultContent: props.defaultContent, didMount: options.eventDidMount, willUnmount: options.eventWillUnmount, elRef: this.elRef }, function (rootElRef, customClassNames, innerElRef, innerContent) { return props.children(rootElRef, standardClassNames.concat(customClassNames), innerElRef, innerContent, hookProps); }));
    };
    EventRoot.prototype.componentDidMount = function () {
        setElSeg(this.elRef.current, this.props.seg);
    };
    /*
    need to re-assign seg to the element if seg changes, even if the element is the same
    */
    EventRoot.prototype.componentDidUpdate = function (prevProps) {
        var seg = this.props.seg;
        if (seg !== prevProps.seg) {
            setElSeg(this.elRef.current, seg);
        }
    };
    return EventRoot;
}(BaseComponent));

// should not be a purecomponent
var StandardEvent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(StandardEvent, _super);
    function StandardEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StandardEvent.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        var seg = props.seg;
        var timeFormat = context.options.eventTimeFormat || props.defaultTimeFormat;
        var timeText = buildSegTimeText(seg, timeFormat, context, props.defaultDisplayEventTime, props.defaultDisplayEventEnd);
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(EventRoot, { seg: seg, timeText: timeText, disableDragging: props.disableDragging, disableResizing: props.disableResizing, defaultContent: props.defaultContent || renderInnerContent, isDragging: props.isDragging, isResizing: props.isResizing, isDateSelecting: props.isDateSelecting, isSelected: props.isSelected, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday }, function (rootElRef, classNames, innerElRef, innerContent, hookProps) { return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ className: props.extraClassNames.concat(classNames).join(' '), style: {
                borderColor: hookProps.borderColor,
                backgroundColor: hookProps.backgroundColor,
            }, ref: rootElRef }, getSegAnchorAttrs(seg)),
            (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-event-main", ref: innerElRef, style: { color: hookProps.textColor } }, innerContent),
            hookProps.isStartResizable &&
                (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-event-resizer fc-event-resizer-start" }),
            hookProps.isEndResizable &&
                (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-event-resizer fc-event-resizer-end" }))); }));
    };
    return StandardEvent;
}(BaseComponent));
function renderInnerContent(innerProps) {
    return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-event-main-frame" },
        innerProps.timeText && ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-event-time" }, innerProps.timeText)),
        (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-event-title-container" },
            (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-event-title fc-sticky" }, innerProps.event.title || (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_vdom_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0")))));
}
function getSegAnchorAttrs(seg) {
    var url = seg.eventRange.def.url;
    return url ? { href: url } : {};
}

var NowIndicatorRoot = function (props) { return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewContextType.Consumer, null, function (context) {
    var options = context.options;
    var hookProps = {
        isAxis: props.isAxis,
        date: context.dateEnv.toDate(props.date),
        view: context.viewApi,
    };
    return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(RenderHook, { hookProps: hookProps, classNames: options.nowIndicatorClassNames, content: options.nowIndicatorContent, didMount: options.nowIndicatorDidMount, willUnmount: options.nowIndicatorWillUnmount }, props.children));
})); };

var DAY_NUM_FORMAT = createFormatter({ day: 'numeric' });
var DayCellContent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DayCellContent, _super);
    function DayCellContent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayCellContent.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        var options = context.options;
        var hookProps = refineDayCellHookProps({
            date: props.date,
            dateProfile: props.dateProfile,
            todayRange: props.todayRange,
            showDayNumber: props.showDayNumber,
            extraProps: props.extraHookProps,
            viewApi: context.viewApi,
            dateEnv: context.dateEnv,
        });
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ContentHook, { hookProps: hookProps, content: options.dayCellContent, defaultContent: props.defaultContent }, props.children));
    };
    return DayCellContent;
}(BaseComponent));
function refineDayCellHookProps(raw) {
    var date = raw.date, dateEnv = raw.dateEnv;
    var dayMeta = getDateMeta(date, raw.todayRange, null, raw.dateProfile);
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ date: dateEnv.toDate(date), view: raw.viewApi }, dayMeta), { dayNumberText: raw.showDayNumber ? dateEnv.format(date, DAY_NUM_FORMAT) : '' }), raw.extraProps);
}

var DayCellRoot = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DayCellRoot, _super);
    function DayCellRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.refineHookProps = memoizeObjArg(refineDayCellHookProps);
        _this.normalizeClassNames = buildClassNameNormalizer();
        return _this;
    }
    DayCellRoot.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        var options = context.options;
        var hookProps = this.refineHookProps({
            date: props.date,
            dateProfile: props.dateProfile,
            todayRange: props.todayRange,
            showDayNumber: props.showDayNumber,
            extraProps: props.extraHookProps,
            viewApi: context.viewApi,
            dateEnv: context.dateEnv,
        });
        var classNames = getDayClassNames(hookProps, context.theme).concat(hookProps.isDisabled
            ? [] // don't use custom classNames if disabled
            : this.normalizeClassNames(options.dayCellClassNames, hookProps));
        var dataAttrs = hookProps.isDisabled ? {} : {
            'data-date': formatDayString(props.date),
        };
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(MountHook, { hookProps: hookProps, didMount: options.dayCellDidMount, willUnmount: options.dayCellWillUnmount, elRef: props.elRef }, function (rootElRef) { return props.children(rootElRef, classNames, dataAttrs, hookProps.isDisabled); }));
    };
    return DayCellRoot;
}(BaseComponent));

function renderFill(fillType) {
    return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-" + fillType }));
}
var BgEvent = function (props) { return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(EventRoot, { defaultContent: renderInnerContent$1, seg: props.seg /* uselesss i think */, timeText: "", disableDragging: true, disableResizing: true, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday }, function (rootElRef, classNames, innerElRef, innerContent, hookProps) { return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: ['fc-bg-event'].concat(classNames).join(' '), style: {
        backgroundColor: hookProps.backgroundColor,
    } }, innerContent)); })); };
function renderInnerContent$1(props) {
    var title = props.event.title;
    return title && ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-event-title" }, props.event.title));
}

var WeekNumberRoot = function (props) { return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewContextType.Consumer, null, function (context) {
    var dateEnv = context.dateEnv, options = context.options;
    var date = props.date;
    var format = options.weekNumberFormat || props.defaultFormat;
    var num = dateEnv.computeWeekNumber(date); // TODO: somehow use for formatting as well?
    var text = dateEnv.format(date, format);
    var hookProps = { num: num, text: text, date: date };
    return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(RenderHook, { hookProps: hookProps, classNames: options.weekNumberClassNames, content: options.weekNumberContent, defaultContent: renderInner$1, didMount: options.weekNumberDidMount, willUnmount: options.weekNumberWillUnmount }, props.children));
})); };
function renderInner$1(innerProps) {
    return innerProps.text;
}

var PADDING_FROM_VIEWPORT = 10;
var Popover = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(Popover, _super);
    function Popover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleRootEl = function (el) {
            _this.rootEl = el;
            if (_this.props.elRef) {
                setRef(_this.props.elRef, el);
            }
        };
        // Triggered when the user clicks *anywhere* in the document, for the autoHide feature
        _this.handleDocumentMousedown = function (ev) {
            // only hide the popover if the click happened outside the popover
            var target = getEventTargetViaRoot(ev);
            if (!_this.rootEl.contains(target)) {
                _this.handleCloseClick();
            }
        };
        _this.handleCloseClick = function () {
            var onClose = _this.props.onClose;
            if (onClose) {
                onClose();
            }
        };
        return _this;
    }
    Popover.prototype.render = function () {
        var theme = this.context.theme;
        var props = this.props;
        var classNames = [
            'fc-popover',
            theme.getClass('popover'),
        ].concat(props.extraClassNames || []);
        return (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createPortal)((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ className: classNames.join(' ') }, props.extraAttrs, { ref: this.handleRootEl }),
            (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: 'fc-popover-header ' + theme.getClass('popoverHeader') },
                (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { className: "fc-popover-title" }, props.title),
                (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { className: 'fc-popover-close ' + theme.getIconClass('close'), onClick: this.handleCloseClick })),
            (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: 'fc-popover-body ' + theme.getClass('popoverContent') }, props.children)), props.parentEl);
    };
    Popover.prototype.componentDidMount = function () {
        document.addEventListener('mousedown', this.handleDocumentMousedown);
        this.updateSize();
    };
    Popover.prototype.componentWillUnmount = function () {
        document.removeEventListener('mousedown', this.handleDocumentMousedown);
    };
    Popover.prototype.updateSize = function () {
        var isRtl = this.context.isRtl;
        var _a = this.props, alignmentEl = _a.alignmentEl, alignGridTop = _a.alignGridTop;
        var rootEl = this.rootEl;
        var alignmentRect = computeClippedClientRect(alignmentEl);
        if (alignmentRect) {
            var popoverDims = rootEl.getBoundingClientRect();
            // position relative to viewport
            var popoverTop = alignGridTop
                ? elementClosest(alignmentEl, '.fc-scrollgrid').getBoundingClientRect().top
                : alignmentRect.top;
            var popoverLeft = isRtl ? alignmentRect.right - popoverDims.width : alignmentRect.left;
            // constrain
            popoverTop = Math.max(popoverTop, PADDING_FROM_VIEWPORT);
            popoverLeft = Math.min(popoverLeft, document.documentElement.clientWidth - PADDING_FROM_VIEWPORT - popoverDims.width);
            popoverLeft = Math.max(popoverLeft, PADDING_FROM_VIEWPORT);
            var origin_1 = rootEl.offsetParent.getBoundingClientRect();
            applyStyle(rootEl, {
                top: popoverTop - origin_1.top,
                left: popoverLeft - origin_1.left,
            });
        }
    };
    return Popover;
}(BaseComponent));

var MorePopover = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MorePopover, _super);
    function MorePopover() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleRootEl = function (rootEl) {
            _this.rootEl = rootEl;
            if (rootEl) {
                _this.context.registerInteractiveComponent(_this, {
                    el: rootEl,
                    useEventCenter: false,
                });
            }
            else {
                _this.context.unregisterInteractiveComponent(_this);
            }
        };
        return _this;
    }
    MorePopover.prototype.render = function () {
        var _a = this.context, options = _a.options, dateEnv = _a.dateEnv;
        var props = this.props;
        var startDate = props.startDate, todayRange = props.todayRange, dateProfile = props.dateProfile;
        var title = dateEnv.format(startDate, options.dayPopoverFormat);
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayCellRoot, { date: startDate, dateProfile: dateProfile, todayRange: todayRange, elRef: this.handleRootEl }, function (rootElRef, dayClassNames, dataAttrs) { return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(Popover, { elRef: rootElRef, title: title, extraClassNames: ['fc-more-popover'].concat(dayClassNames), extraAttrs: dataAttrs /* TODO: make these time-based when not whole-day? */, parentEl: props.parentEl, alignmentEl: props.alignmentEl, alignGridTop: props.alignGridTop, onClose: props.onClose },
            (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayCellContent, { date: startDate, dateProfile: dateProfile, todayRange: todayRange }, function (innerElRef, innerContent) { return (innerContent &&
                (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-more-popover-misc", ref: innerElRef }, innerContent)); }),
            props.children)); }));
    };
    MorePopover.prototype.queryHit = function (positionLeft, positionTop, elWidth, elHeight) {
        var _a = this, rootEl = _a.rootEl, props = _a.props;
        if (positionLeft >= 0 && positionLeft < elWidth &&
            positionTop >= 0 && positionTop < elHeight) {
            return {
                dateProfile: props.dateProfile,
                dateSpan: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ allDay: true, range: {
                        start: props.startDate,
                        end: props.endDate,
                    } }, props.extraDateSpan),
                dayEl: rootEl,
                rect: {
                    left: 0,
                    top: 0,
                    right: elWidth,
                    bottom: elHeight,
                },
                layer: 1,
            };
        }
        return null;
    };
    return MorePopover;
}(DateComponent));

var MoreLinkRoot = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(MoreLinkRoot, _super);
    function MoreLinkRoot() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.linkElRef = (0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.state = {
            isPopoverOpen: false,
        };
        _this.handleClick = function (ev) {
            var _a = _this, props = _a.props, context = _a.context;
            var moreLinkClick = context.options.moreLinkClick;
            var date = computeRange(props).start;
            function buildPublicSeg(seg) {
                var _a = seg.eventRange, def = _a.def, instance = _a.instance, range = _a.range;
                return {
                    event: new EventApi(context, def, instance),
                    start: context.dateEnv.toDate(range.start),
                    end: context.dateEnv.toDate(range.end),
                    isStart: seg.isStart,
                    isEnd: seg.isEnd,
                };
            }
            if (typeof moreLinkClick === 'function') {
                moreLinkClick = moreLinkClick({
                    date: date,
                    allDay: Boolean(props.allDayDate),
                    allSegs: props.allSegs.map(buildPublicSeg),
                    hiddenSegs: props.hiddenSegs.map(buildPublicSeg),
                    jsEvent: ev,
                    view: context.viewApi,
                });
            }
            if (!moreLinkClick || moreLinkClick === 'popover') {
                _this.setState({ isPopoverOpen: true });
            }
            else if (typeof moreLinkClick === 'string') { // a view name
                context.calendarApi.zoomTo(date, moreLinkClick);
            }
        };
        _this.handlePopoverClose = function () {
            _this.setState({ isPopoverOpen: false });
        };
        return _this;
    }
    MoreLinkRoot.prototype.render = function () {
        var _this = this;
        var props = this.props;
        return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(ViewContextType.Consumer, null, function (context) {
            var viewApi = context.viewApi, options = context.options, calendarApi = context.calendarApi;
            var moreLinkText = options.moreLinkText;
            var moreCnt = props.moreCnt;
            var range = computeRange(props);
            var hookProps = {
                num: moreCnt,
                shortText: "+" + moreCnt,
                text: typeof moreLinkText === 'function'
                    ? moreLinkText.call(calendarApi, moreCnt)
                    : "+" + moreCnt + " " + moreLinkText,
                view: viewApi,
            };
            return ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(_vdom_js__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                Boolean(props.moreCnt) && ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(RenderHook, { elRef: _this.linkElRef, hookProps: hookProps, classNames: options.moreLinkClassNames, content: options.moreLinkContent, defaultContent: props.defaultContent || renderMoreLinkInner, didMount: options.moreLinkDidMount, willUnmount: options.moreLinkWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return props.children(rootElRef, ['fc-more-link'].concat(customClassNames), innerElRef, innerContent, _this.handleClick); })),
                _this.state.isPopoverOpen && ((0,_vdom_js__WEBPACK_IMPORTED_MODULE_1__.createElement)(MorePopover, { startDate: range.start, endDate: range.end, dateProfile: props.dateProfile, todayRange: props.todayRange, extraDateSpan: props.extraDateSpan, parentEl: _this.parentEl, alignmentEl: props.alignmentElRef.current, alignGridTop: props.alignGridTop, onClose: _this.handlePopoverClose }, props.popoverContent()))));
        }));
    };
    MoreLinkRoot.prototype.componentDidMount = function () {
        this.updateParentEl();
    };
    MoreLinkRoot.prototype.componentDidUpdate = function () {
        this.updateParentEl();
    };
    MoreLinkRoot.prototype.updateParentEl = function () {
        if (this.linkElRef.current) {
            this.parentEl = elementClosest(this.linkElRef.current, '.fc-view-harness');
        }
    };
    return MoreLinkRoot;
}(BaseComponent));
function renderMoreLinkInner(props) {
    return props.text;
}
function computeRange(props) {
    if (props.allDayDate) {
        return {
            start: props.allDayDate,
            end: addDays(props.allDayDate, 1),
        };
    }
    var hiddenSegs = props.hiddenSegs;
    return {
        start: computeEarliestSegStart(hiddenSegs),
        end: computeLatestSegEnd(hiddenSegs),
    };
}
function computeEarliestSegStart(segs) {
    return segs.reduce(pickEarliestStart).eventRange.range.start;
}
function pickEarliestStart(seg0, seg1) {
    return seg0.eventRange.range.start < seg1.eventRange.range.start ? seg0 : seg1;
}
function computeLatestSegEnd(segs) {
    return segs.reduce(pickLatestEnd).eventRange.range.end;
}
function pickLatestEnd(seg0, seg1) {
    return seg0.eventRange.range.end > seg1.eventRange.range.end ? seg0 : seg1;
}

// exports
// --------------------------------------------------------------------------------------------------
var version = '5.7.0'; // important to type it, so .d.ts has generic string


//# sourceMappingURL=main.js.map


/***/ }),
/* 319 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 320 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Component": () => (/* binding */ Component),
/* harmony export */   "Fragment": () => (/* binding */ Fragment),
/* harmony export */   "createContext": () => (/* binding */ createContext),
/* harmony export */   "createElement": () => (/* binding */ createElement),
/* harmony export */   "createPortal": () => (/* binding */ createPortal),
/* harmony export */   "createRef": () => (/* binding */ createRef),
/* harmony export */   "flushToDom": () => (/* binding */ flushToDom),
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "unmountComponentAtNode": () => (/* binding */ unmountComponentAtNode)
/* harmony export */ });
/// <reference types="@fullcalendar/core-preact" />
if (typeof FullCalendarVDom === 'undefined') {
    throw new Error('Please import the top-level fullcalendar lib before attempting to import a plugin.');
}
var Component = FullCalendarVDom.Component;
var createElement = FullCalendarVDom.createElement;
var render = FullCalendarVDom.render;
var createRef = FullCalendarVDom.createRef;
var Fragment = FullCalendarVDom.Fragment;
var createContext = FullCalendarVDom.createContext;
var createPortal = FullCalendarVDom.createPortal;
var flushToDom = FullCalendarVDom.flushToDom;
var unmountComponentAtNode = FullCalendarVDom.unmountComponentAtNode;




/***/ }),
/* 321 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "DayGridView": () => (/* binding */ DayTableView),
/* harmony export */   "DayTable": () => (/* binding */ DayTable),
/* harmony export */   "DayTableSlicer": () => (/* binding */ DayTableSlicer),
/* harmony export */   "Table": () => (/* binding */ Table),
/* harmony export */   "TableView": () => (/* binding */ TableView),
/* harmony export */   "buildDayTableModel": () => (/* binding */ buildDayTableModel)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(322);
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(318);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(317);
/*!
FullCalendar v5.7.0
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/





/* An abstract class for the daygrid views, as well as month view. Renders one or more rows of day cells.
----------------------------------------------------------------------------------------------------------------------*/
// It is a manager for a Table subcomponent, which does most of the heavy lifting.
// It is responsible for managing width/height.
var TableView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableView, _super);
    function TableView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.headerElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        return _this;
    }
    TableView.prototype.renderSimpleLayout = function (headerRowContent, bodyContent) {
        var _a = this, props = _a.props, context = _a.context;
        var sections = [];
        var stickyHeaderDates = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyHeaderDates)(context.options);
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                chunk: {
                    elRef: this.headerElRef,
                    tableClassName: 'fc-col-header',
                    rowContent: headerRowContent,
                },
            });
        }
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            chunk: { content: bodyContent },
        });
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot, { viewSpec: context.viewSpec }, function (rootElRef, classNames) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: ['fc-daygrid'].concat(classNames).join(' ') },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SimpleScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [] /* TODO: make optional? */, sections: sections }))); }));
    };
    TableView.prototype.renderHScrollLayout = function (headerRowContent, bodyContent, colCnt, dayMinWidth) {
        var ScrollGrid = this.context.pluginHooks.scrollGridImpl;
        if (!ScrollGrid) {
            throw new Error('No ScrollGrid implementation');
        }
        var _a = this, props = _a.props, context = _a.context;
        var stickyHeaderDates = !props.forPrint && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyHeaderDates)(context.options);
        var stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyFooterScrollbar)(context.options);
        var sections = [];
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                chunks: [{
                        key: 'main',
                        elRef: this.headerElRef,
                        tableClassName: 'fc-col-header',
                        rowContent: headerRowContent,
                    }],
            });
        }
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            chunks: [{
                    key: 'main',
                    content: bodyContent,
                }],
        });
        if (stickyFooterScrollbar) {
            sections.push({
                type: 'footer',
                key: 'footer',
                isSticky: true,
                chunks: [{
                        key: 'main',
                        content: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderScrollShim,
                    }],
            });
        }
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot, { viewSpec: context.viewSpec }, function (rootElRef, classNames) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: ['fc-daygrid'].concat(classNames).join(' ') },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, colGroups: [{ cols: [{ span: colCnt, minWidth: dayMinWidth }] }], sections: sections }))); }));
    };
    return TableView;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));

function splitSegsByRow(segs, rowCnt) {
    var byRow = [];
    for (var i = 0; i < rowCnt; i += 1) {
        byRow[i] = [];
    }
    for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
        var seg = segs_1[_i];
        byRow[seg.row].push(seg);
    }
    return byRow;
}
function splitSegsByFirstCol(segs, colCnt) {
    var byCol = [];
    for (var i = 0; i < colCnt; i += 1) {
        byCol[i] = [];
    }
    for (var _i = 0, segs_2 = segs; _i < segs_2.length; _i++) {
        var seg = segs_2[_i];
        byCol[seg.firstCol].push(seg);
    }
    return byCol;
}
function splitInteractionByRow(ui, rowCnt) {
    var byRow = [];
    if (!ui) {
        for (var i = 0; i < rowCnt; i += 1) {
            byRow[i] = null;
        }
    }
    else {
        for (var i = 0; i < rowCnt; i += 1) {
            byRow[i] = {
                affectedInstances: ui.affectedInstances,
                isEvent: ui.isEvent,
                segs: [],
            };
        }
        for (var _i = 0, _a = ui.segs; _i < _a.length; _i++) {
            var seg = _a[_i];
            byRow[seg.row].segs.push(seg);
        }
    }
    return byRow;
}

var TableCellTop = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableCellTop, _super);
    function TableCellTop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableCellTop.prototype.render = function () {
        var props = this.props;
        var navLinkAttrs = this.context.options.navLinks
            ? { 'data-navlink': (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkData)(props.date), tabIndex: 0 }
            : {};
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellContent, { date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, showDayNumber: props.showDayNumber, extraHookProps: props.extraHookProps, defaultContent: renderTopInner }, function (innerElRef, innerContent) { return ((innerContent || props.forceDayTop) && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-top", ref: innerElRef },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ className: "fc-daygrid-day-number" }, navLinkAttrs), innerContent || (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0"))))); }));
    };
    return TableCellTop;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function renderTopInner(props) {
    return props.dayNumberText;
}

var DEFAULT_TABLE_EVENT_TIME_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)({
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: true,
    meridiem: 'narrow',
});
function hasListItemDisplay(seg) {
    var display = seg.eventRange.ui.display;
    return display === 'list-item' || (display === 'auto' &&
        !seg.eventRange.def.allDay &&
        seg.firstCol === seg.lastCol && // can't be multi-day
        seg.isStart && // "
        seg.isEnd // "
    );
}

var TableBlockEvent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableBlockEvent, _super);
    function TableBlockEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableBlockEvent.prototype.render = function () {
        var props = this.props;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.StandardEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, props, { extraClassNames: ['fc-daygrid-event', 'fc-daygrid-block-event', 'fc-h-event'], defaultTimeFormat: DEFAULT_TABLE_EVENT_TIME_FORMAT, defaultDisplayEventEnd: props.defaultDisplayEventEnd, disableResizing: !props.seg.eventRange.def.allDay })));
    };
    return TableBlockEvent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));

var TableListItemEvent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableListItemEvent, _super);
    function TableListItemEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableListItemEvent.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        var timeFormat = context.options.eventTimeFormat || DEFAULT_TABLE_EVENT_TIME_FORMAT;
        var timeText = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegTimeText)(props.seg, timeFormat, context, true, props.defaultDisplayEventEnd);
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.EventRoot, { seg: props.seg, timeText: timeText, defaultContent: renderInnerContent, isDragging: props.isDragging, isResizing: false, isDateSelecting: false, isSelected: props.isSelected, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday }, function (rootElRef, classNames, innerElRef, innerContent) { return ( // we don't use styles!
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ className: ['fc-daygrid-event', 'fc-daygrid-dot-event'].concat(classNames).join(' '), ref: rootElRef }, getSegAnchorAttrs(props.seg)), innerContent)); }));
    };
    return TableListItemEvent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function renderInnerContent(innerProps) {
    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-event-dot", style: { borderColor: innerProps.borderColor || innerProps.backgroundColor } }),
        innerProps.timeText && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-event-time" }, innerProps.timeText)),
        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-event-title" }, innerProps.event.title || (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, "\u00A0"))));
}
function getSegAnchorAttrs(seg) {
    var url = seg.eventRange.def.url;
    return url ? { href: url } : {};
}

var TableCellMoreLink = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableCellMoreLink, _super);
    function TableCellMoreLink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.compileSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(compileSegs);
        return _this;
    }
    TableCellMoreLink.prototype.render = function () {
        var props = this.props;
        var _a = this.compileSegs(props.singlePlacements), allSegs = _a.allSegs, invisibleSegs = _a.invisibleSegs;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.MoreLinkRoot, { dateProfile: props.dateProfile, todayRange: props.todayRange, allDayDate: props.allDayDate, moreCnt: props.moreCnt, allSegs: allSegs, hiddenSegs: invisibleSegs, alignmentElRef: props.alignmentElRef, alignGridTop: props.alignGridTop, extraDateSpan: props.extraDateSpan, popoverContent: function () {
                var isForcedInvisible = (props.eventDrag ? props.eventDrag.affectedInstances : null) ||
                    (props.eventResize ? props.eventResize.affectedInstances : null) ||
                    {};
                return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, allSegs.map(function (seg) {
                    var instanceId = seg.eventRange.instance.instanceId;
                    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-event-harness", key: instanceId, style: {
                            visibility: isForcedInvisible[instanceId] ? 'hidden' : '',
                        } }, hasListItemDisplay(seg) ? ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableListItemEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ seg: seg, isDragging: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, props.todayRange)))) : ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableBlockEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === props.eventSelection, defaultDisplayEventEnd: false }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, props.todayRange))))));
                })));
            } }, function (rootElRef, classNames, innerElRef, innerContent, handleClick) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", { ref: rootElRef, className: ['fc-daygrid-more-link'].concat(classNames).join(' '), onClick: handleClick }, innerContent)); }));
    };
    return TableCellMoreLink;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function compileSegs(singlePlacements) {
    var allSegs = [];
    var invisibleSegs = [];
    for (var _i = 0, singlePlacements_1 = singlePlacements; _i < singlePlacements_1.length; _i++) {
        var placement = singlePlacements_1[_i];
        allSegs.push(placement.seg);
        if (!placement.isVisible) {
            invisibleSegs.push(placement.seg);
        }
    }
    return { allSegs: allSegs, invisibleSegs: invisibleSegs };
}

var DEFAULT_WEEK_NUM_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)({ week: 'narrow' });
var TableCell = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableCell, _super);
    function TableCell() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.handleRootEl = function (el) {
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setRef)(_this.rootElRef, el);
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setRef)(_this.props.elRef, el);
        };
        return _this;
    }
    TableCell.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context, rootElRef = _a.rootElRef;
        var options = context.options;
        var date = props.date, dateProfile = props.dateProfile;
        var navLinkAttrs = options.navLinks
            ? { 'data-navlink': (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkData)(date, 'week'), tabIndex: 0 }
            : {};
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellRoot, { date: date, dateProfile: dateProfile, todayRange: props.todayRange, showDayNumber: props.showDayNumber, extraHookProps: props.extraHookProps, elRef: this.handleRootEl }, function (dayElRef, dayClassNames, rootDataAttrs, isDisabled) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ ref: dayElRef, className: ['fc-daygrid-day'].concat(dayClassNames, props.extraClassNames || []).join(' ') }, rootDataAttrs, props.extraDataAttrs),
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-frame fc-scrollgrid-sync-inner", ref: props.innerElRef /* different from hook system! RENAME */ },
                props.showWeekNumber && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.WeekNumberRoot, { date: date, defaultFormat: DEFAULT_WEEK_NUM_FORMAT }, function (weekElRef, weekClassNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ ref: weekElRef, className: ['fc-daygrid-week-number'].concat(weekClassNames).join(' ') }, navLinkAttrs), innerContent)); })),
                !isDisabled && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableCellTop, { date: date, dateProfile: dateProfile, showDayNumber: props.showDayNumber, forceDayTop: props.forceDayTop, todayRange: props.todayRange, extraHookProps: props.extraHookProps })),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-events", ref: props.fgContentElRef },
                    props.fgContent,
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-bottom", style: { marginTop: props.moreMarginTop } },
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableCellMoreLink, { allDayDate: date, singlePlacements: props.singlePlacements, moreCnt: props.moreCnt, alignmentElRef: rootElRef, alignGridTop: !props.showDayNumber, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange }))),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-daygrid-day-bg" }, props.bgContent)))); }));
    };
    return TableCell;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));

function computeFgSegPlacement(segs, // assumed already sorted
dayMaxEvents, dayMaxEventRows, strictOrder, eventInstanceHeights, maxContentHeight, cells) {
    var hierarchy = new DayGridSegHierarchy();
    hierarchy.allowReslicing = true;
    hierarchy.strictOrder = strictOrder;
    if (dayMaxEvents === true || dayMaxEventRows === true) {
        hierarchy.maxCoord = maxContentHeight;
        hierarchy.hiddenConsumes = true;
    }
    else if (typeof dayMaxEvents === 'number') {
        hierarchy.maxStackCnt = dayMaxEvents;
    }
    else if (typeof dayMaxEventRows === 'number') {
        hierarchy.maxStackCnt = dayMaxEventRows;
        hierarchy.hiddenConsumes = true;
    }
    // create segInputs only for segs with known heights
    var segInputs = [];
    var unknownHeightSegs = [];
    for (var i = 0; i < segs.length; i += 1) {
        var seg = segs[i];
        var instanceId = seg.eventRange.instance.instanceId;
        var eventHeight = eventInstanceHeights[instanceId];
        if (eventHeight != null) {
            segInputs.push({
                index: i,
                spanStart: seg.firstCol,
                spanEnd: seg.lastCol + 1,
                thickness: eventHeight,
            });
        }
        else {
            unknownHeightSegs.push(seg);
        }
    }
    var hiddenEntries = hierarchy.addSegs(segInputs);
    var segRects = hierarchy.toRects();
    var _a = placeRects(segRects, segs, cells), singleColPlacements = _a.singleColPlacements, multiColPlacements = _a.multiColPlacements, leftoverMargins = _a.leftoverMargins;
    var moreCnts = [];
    var moreMarginTops = [];
    // add segs with unknown heights
    for (var _i = 0, unknownHeightSegs_1 = unknownHeightSegs; _i < unknownHeightSegs_1.length; _i++) {
        var seg = unknownHeightSegs_1[_i];
        multiColPlacements[seg.firstCol].push({
            seg: seg,
            isVisible: false,
            isAbsolute: true,
            absoluteTop: 0,
            marginTop: 0,
        });
        for (var col = seg.firstCol; col <= seg.lastCol; col += 1) {
            singleColPlacements[col].push({
                seg: resliceSeg(seg, col, col + 1, cells),
                isVisible: false,
                isAbsolute: false,
                absoluteTop: 0,
                marginTop: 0,
            });
        }
    }
    // add the hidden entries
    for (var col = 0; col < cells.length; col += 1) {
        moreCnts.push(0);
    }
    for (var _b = 0, hiddenEntries_1 = hiddenEntries; _b < hiddenEntries_1.length; _b++) {
        var hiddenEntry = hiddenEntries_1[_b];
        var seg = segs[hiddenEntry.segInput.index];
        multiColPlacements[hiddenEntry.spanStart].push({
            seg: seg,
            isVisible: false,
            isAbsolute: true,
            absoluteTop: 0,
            marginTop: 0,
        });
        for (var col = hiddenEntry.spanStart; col < hiddenEntry.spanEnd; col += 1) {
            moreCnts[col] += 1;
            singleColPlacements[col].push({
                seg: resliceSeg(seg, col, col + 1, cells),
                isVisible: false,
                isAbsolute: false,
                absoluteTop: 0,
                marginTop: 0,
            });
        }
    }
    // deal with leftover margins
    for (var col = 0; col < cells.length; col += 1) {
        moreMarginTops.push(leftoverMargins[col]);
    }
    return { singleColPlacements: singleColPlacements, multiColPlacements: multiColPlacements, moreCnts: moreCnts, moreMarginTops: moreMarginTops };
}
// rects ordered by top coord, then left
function placeRects(allRects, segs, cells) {
    var rectsByEachCol = groupRectsByEachCol(allRects, cells.length);
    var singleColPlacements = [];
    var multiColPlacements = [];
    var leftoverMargins = [];
    for (var col = 0; col < cells.length; col += 1) {
        var rects = rectsByEachCol[col];
        // compute all static segs in singlePlacements
        var singlePlacements = [];
        var currentHeight = 0;
        var currentMarginTop = 0;
        for (var _i = 0, rects_1 = rects; _i < rects_1.length; _i++) {
            var rect = rects_1[_i];
            var seg = segs[rect.segInput.index];
            singlePlacements.push({
                seg: resliceSeg(seg, col, col + 1, cells),
                isVisible: true,
                isAbsolute: false,
                absoluteTop: 0,
                marginTop: rect.levelCoord - currentHeight,
            });
            currentHeight = rect.levelCoord + rect.thickness;
        }
        // compute mixed static/absolute segs in multiPlacements
        var multiPlacements = [];
        currentHeight = 0;
        currentMarginTop = 0;
        for (var _a = 0, rects_2 = rects; _a < rects_2.length; _a++) {
            var rect = rects_2[_a];
            var seg = segs[rect.segInput.index];
            var isAbsolute = rect.spanEnd - rect.spanStart > 1; // multi-column?
            var isFirstCol = rect.spanStart === col;
            currentMarginTop += rect.levelCoord - currentHeight; // amount of space since bottom of previous seg
            currentHeight = rect.levelCoord + rect.thickness; // height will now be bottom of current seg
            if (isAbsolute) {
                currentMarginTop += rect.thickness;
                if (isFirstCol) {
                    multiPlacements.push({
                        seg: resliceSeg(seg, rect.spanStart, rect.spanEnd, cells),
                        isVisible: true,
                        isAbsolute: true,
                        absoluteTop: rect.levelCoord,
                        marginTop: 0,
                    });
                }
            }
            else if (isFirstCol) {
                multiPlacements.push({
                    seg: resliceSeg(seg, rect.spanStart, rect.spanEnd, cells),
                    isVisible: true,
                    isAbsolute: false,
                    absoluteTop: 0,
                    marginTop: currentMarginTop,
                });
                currentMarginTop = 0;
            }
        }
        singleColPlacements.push(singlePlacements);
        multiColPlacements.push(multiPlacements);
        leftoverMargins.push(currentMarginTop);
    }
    return { singleColPlacements: singleColPlacements, multiColPlacements: multiColPlacements, leftoverMargins: leftoverMargins };
}
function groupRectsByEachCol(rects, colCnt) {
    var rectsByEachCol = [];
    for (var col = 0; col < colCnt; col += 1) {
        rectsByEachCol.push([]);
    }
    for (var _i = 0, rects_3 = rects; _i < rects_3.length; _i++) {
        var rect = rects_3[_i];
        for (var col = rect.spanStart; col < rect.spanEnd; col += 1) {
            rectsByEachCol[col].push(rect);
        }
    }
    return rectsByEachCol;
}
function resliceSeg(seg, spanStart, spanEnd, cells) {
    if (seg.firstCol === spanStart && seg.lastCol === spanEnd - 1) {
        return seg;
    }
    var eventRange = seg.eventRange;
    var origRange = eventRange.range;
    var slicedRange = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectRanges)(origRange, {
        start: cells[spanStart].date,
        end: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDays)(cells[spanEnd - 1].date, 1),
    });
    return (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, seg), { firstCol: spanStart, lastCol: spanEnd - 1, eventRange: {
            def: eventRange.def,
            ui: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, eventRange.ui), { durationEditable: false }),
            instance: eventRange.instance,
            range: slicedRange,
        }, isStart: seg.isStart && slicedRange.start.valueOf() === origRange.start.valueOf(), isEnd: seg.isEnd && slicedRange.end.valueOf() === origRange.end.valueOf() });
}
var DayGridSegHierarchy = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DayGridSegHierarchy, _super);
    function DayGridSegHierarchy() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // config
        _this.hiddenConsumes = false;
        // allows us to keep hidden entries in the hierarchy so they take up space
        _this.forceHidden = {};
        return _this;
    }
    DayGridSegHierarchy.prototype.addSegs = function (segInputs) {
        var _this = this;
        var hiddenSegs = _super.prototype.addSegs.call(this, segInputs);
        var entriesByLevel = this.entriesByLevel;
        var excludeHidden = function (entry) { return !_this.forceHidden[(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey)(entry)]; };
        // remove the forced-hidden segs
        for (var level = 0; level < entriesByLevel.length; level += 1) {
            entriesByLevel[level] = entriesByLevel[level].filter(excludeHidden);
        }
        return hiddenSegs;
    };
    DayGridSegHierarchy.prototype.handleInvalidInsertion = function (insertion, entry, hiddenEntries) {
        var _a = this, entriesByLevel = _a.entriesByLevel, forceHidden = _a.forceHidden;
        var level = insertion.nextLevel - 1;
        if (this.hiddenConsumes && level >= 0) {
            for (var lateral = insertion.lateralStart; lateral < insertion.lateralEnd; lateral += 1) {
                var leadingEntry = entriesByLevel[level][lateral];
                if (this.allowReslicing) {
                    var placeholderEntry = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, leadingEntry), { spanStart: Math.max(leadingEntry.spanStart, entry.spanStart), spanEnd: Math.min(leadingEntry.spanEnd, entry.spanEnd) });
                    var placeholderEntryId = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey)(placeholderEntry);
                    if (!forceHidden[placeholderEntryId]) {
                        forceHidden[placeholderEntryId] = true;
                        entriesByLevel[level][lateral] = placeholderEntry;
                        this.splitEntry(leadingEntry, entry, hiddenEntries); // split up the leadingEntry
                    }
                }
                else {
                    var placeholderEntryId = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey)(leadingEntry);
                    if (!forceHidden[placeholderEntryId]) {
                        forceHidden[placeholderEntryId] = true;
                        hiddenEntries.push(leadingEntry);
                    }
                }
            }
        }
        return _super.prototype.handleInvalidInsertion.call(this, insertion, entry, hiddenEntries);
    };
    return DayGridSegHierarchy;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SegHierarchy));

var TableRow = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableRow, _super);
    function TableRow() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.cellElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap(); // the <td>
        _this.frameElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap(); // the fc-daygrid-day-frame
        _this.fgElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap(); // the fc-daygrid-day-events
        _this.segHarnessRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap(); // indexed by "instanceId:firstCol"
        _this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.state = {
            framePositions: null,
            maxContentHeight: null,
            eventInstanceHeights: {},
        };
        return _this;
    }
    TableRow.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, state = _a.state, context = _a.context;
        var options = context.options;
        var colCnt = props.cells.length;
        var businessHoursByCol = splitSegsByFirstCol(props.businessHourSegs, colCnt);
        var bgEventSegsByCol = splitSegsByFirstCol(props.bgEventSegs, colCnt);
        var highlightSegsByCol = splitSegsByFirstCol(this.getHighlightSegs(), colCnt);
        var mirrorSegsByCol = splitSegsByFirstCol(this.getMirrorSegs(), colCnt);
        var _b = computeFgSegPlacement((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sortEventSegs)(props.fgEventSegs, options.eventOrder), props.dayMaxEvents, props.dayMaxEventRows, options.eventOrderStrict, state.eventInstanceHeights, state.maxContentHeight, props.cells), singleColPlacements = _b.singleColPlacements, multiColPlacements = _b.multiColPlacements, moreCnts = _b.moreCnts, moreMarginTops = _b.moreMarginTops;
        var isForcedInvisible = // TODO: messy way to compute this
         (props.eventDrag && props.eventDrag.affectedInstances) ||
            (props.eventResize && props.eventResize.affectedInstances) ||
            {};
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { ref: this.rootElRef },
            props.renderIntro && props.renderIntro(),
            props.cells.map(function (cell, col) {
                var normalFgNodes = _this.renderFgSegs(col, props.forPrint ? singleColPlacements[col] : multiColPlacements[col], props.todayRange, isForcedInvisible);
                var mirrorFgNodes = _this.renderFgSegs(col, buildMirrorPlacements(mirrorSegsByCol[col], multiColPlacements), props.todayRange, {}, Boolean(props.eventDrag), Boolean(props.eventResize), false);
                return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableCell, { key: cell.key, elRef: _this.cellElRefs.createRef(cell.key), innerElRef: _this.frameElRefs.createRef(cell.key) /* FF <td> problem, but okay to use for left/right. TODO: rename prop */, dateProfile: props.dateProfile, date: cell.date, showDayNumber: props.showDayNumbers, showWeekNumber: props.showWeekNumbers && col === 0, forceDayTop: props.showWeekNumbers /* even displaying weeknum for row, not necessarily day */, todayRange: props.todayRange, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, extraHookProps: cell.extraHookProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, moreCnt: moreCnts[col], moreMarginTop: moreMarginTops[col], singlePlacements: singleColPlacements[col], fgContentElRef: _this.fgElRefs.createRef(cell.key), fgContent: ( // Fragment scopes the keys
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, normalFgNodes),
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, mirrorFgNodes))), bgContent: ( // Fragment scopes the keys
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                        _this.renderFillSegs(highlightSegsByCol[col], 'highlight'),
                        _this.renderFillSegs(businessHoursByCol[col], 'non-business'),
                        _this.renderFillSegs(bgEventSegsByCol[col], 'bg-event'))) }));
            })));
    };
    TableRow.prototype.componentDidMount = function () {
        this.updateSizing(true);
    };
    TableRow.prototype.componentDidUpdate = function (prevProps, prevState) {
        var currentProps = this.props;
        this.updateSizing(!(0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isPropsEqual)(prevProps, currentProps));
    };
    TableRow.prototype.getHighlightSegs = function () {
        var props = this.props;
        if (props.eventDrag && props.eventDrag.segs.length) { // messy check
            return props.eventDrag.segs;
        }
        if (props.eventResize && props.eventResize.segs.length) { // messy check
            return props.eventResize.segs;
        }
        return props.dateSelectionSegs;
    };
    TableRow.prototype.getMirrorSegs = function () {
        var props = this.props;
        if (props.eventResize && props.eventResize.segs.length) { // messy check
            return props.eventResize.segs;
        }
        return [];
    };
    TableRow.prototype.renderFgSegs = function (col, segPlacements, todayRange, isForcedInvisible, isDragging, isResizing, isDateSelecting) {
        var context = this.context;
        var eventSelection = this.props.eventSelection;
        var framePositions = this.state.framePositions;
        var defaultDisplayEventEnd = this.props.cells.length === 1; // colCnt === 1
        var isMirror = isDragging || isResizing || isDateSelecting;
        var nodes = [];
        if (framePositions) {
            for (var _i = 0, segPlacements_1 = segPlacements; _i < segPlacements_1.length; _i++) {
                var placement = segPlacements_1[_i];
                var seg = placement.seg;
                var instanceId = seg.eventRange.instance.instanceId;
                var key = instanceId + ':' + col;
                var isVisible = placement.isVisible && !isForcedInvisible[instanceId];
                var isAbsolute = placement.isAbsolute;
                var left = '';
                var right = '';
                if (isAbsolute) {
                    if (context.isRtl) {
                        right = 0;
                        left = framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol];
                    }
                    else {
                        left = 0;
                        right = framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol];
                    }
                }
                /*
                known bug: events that are force to be list-item but span multiple days still take up space in later columns
                todo: in print view, for multi-day events, don't display title within non-start/end segs
                */
                nodes.push((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: 'fc-daygrid-event-harness' + (isAbsolute ? ' fc-daygrid-event-harness-abs' : ''), key: key, ref: isMirror ? null : this.segHarnessRefs.createRef(key), style: {
                        visibility: isVisible ? '' : 'hidden',
                        marginTop: isAbsolute ? '' : placement.marginTop,
                        top: isAbsolute ? placement.absoluteTop : '',
                        left: left,
                        right: right,
                    } }, hasListItemDisplay(seg) ? ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableListItemEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ seg: seg, isDragging: isDragging, isSelected: instanceId === eventSelection, defaultDisplayEventEnd: defaultDisplayEventEnd }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, todayRange)))) : ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableBlockEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ seg: seg, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, defaultDisplayEventEnd: defaultDisplayEventEnd }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, todayRange))))));
            }
        }
        return nodes;
    };
    TableRow.prototype.renderFillSegs = function (segs, fillType) {
        var isRtl = this.context.isRtl;
        var todayRange = this.props.todayRange;
        var framePositions = this.state.framePositions;
        var nodes = [];
        if (framePositions) {
            for (var _i = 0, segs_1 = segs; _i < segs_1.length; _i++) {
                var seg = segs_1[_i];
                var leftRightCss = isRtl ? {
                    right: 0,
                    left: framePositions.lefts[seg.lastCol] - framePositions.lefts[seg.firstCol],
                } : {
                    left: 0,
                    right: framePositions.rights[seg.firstCol] - framePositions.rights[seg.lastCol],
                };
                nodes.push((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { key: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEventRangeKey)(seg.eventRange), className: "fc-daygrid-bg-harness", style: leftRightCss }, fillType === 'bg-event' ?
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BgEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ seg: seg }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, todayRange))) :
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderFill)(fillType)));
            }
        }
        return _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement.apply(void 0, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__spreadArrays)([_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, {}], nodes));
    };
    TableRow.prototype.updateSizing = function (isExternalSizingChange) {
        var _a = this, props = _a.props, frameElRefs = _a.frameElRefs;
        if (!props.forPrint &&
            props.clientWidth !== null // positioning ready?
        ) {
            if (isExternalSizingChange) {
                var frameEls = props.cells.map(function (cell) { return frameElRefs.currentMap[cell.key]; });
                if (frameEls.length) {
                    var originEl = this.rootElRef.current;
                    this.setState({
                        framePositions: new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache(originEl, frameEls, true, // isHorizontal
                        false),
                    });
                }
            }
            var limitByContentHeight = props.dayMaxEvents === true || props.dayMaxEventRows === true;
            this.setState({
                eventInstanceHeights: this.queryEventInstanceHeights(),
                maxContentHeight: limitByContentHeight ? this.computeMaxContentHeight() : null,
            });
        }
    };
    TableRow.prototype.queryEventInstanceHeights = function () {
        var segElMap = this.segHarnessRefs.currentMap;
        var eventInstanceHeights = {};
        // get the max height amongst instance segs
        for (var key in segElMap) {
            var height = Math.round(segElMap[key].getBoundingClientRect().height);
            var instanceId = key.split(':')[0]; // deconstruct how renderFgSegs makes the key
            eventInstanceHeights[instanceId] = Math.max(eventInstanceHeights[instanceId] || 0, height);
        }
        return eventInstanceHeights;
    };
    TableRow.prototype.computeMaxContentHeight = function () {
        var firstKey = this.props.cells[0].key;
        var cellEl = this.cellElRefs.currentMap[firstKey];
        var fcContainerEl = this.fgElRefs.currentMap[firstKey];
        return cellEl.getBoundingClientRect().bottom - fcContainerEl.getBoundingClientRect().top;
    };
    TableRow.prototype.getCellEls = function () {
        var elMap = this.cellElRefs.currentMap;
        return this.props.cells.map(function (cell) { return elMap[cell.key]; });
    };
    return TableRow;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));
TableRow.addStateEquality({
    eventInstanceHeights: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isPropsEqual,
});
function buildMirrorPlacements(mirrorSegs, colPlacements) {
    if (!mirrorSegs.length) {
        return [];
    }
    var topsByInstanceId = buildAbsoluteTopHash(colPlacements); // TODO: cache this at first render?
    return mirrorSegs.map(function (seg) { return ({
        seg: seg,
        isVisible: true,
        isAbsolute: true,
        absoluteTop: topsByInstanceId[seg.eventRange.instance.instanceId],
        marginTop: 0,
    }); });
}
function buildAbsoluteTopHash(colPlacements) {
    var topsByInstanceId = {};
    for (var _i = 0, colPlacements_1 = colPlacements; _i < colPlacements_1.length; _i++) {
        var placements = colPlacements_1[_i];
        for (var _a = 0, placements_1 = placements; _a < placements_1.length; _a++) {
            var placement = placements_1[_a];
            topsByInstanceId[placement.seg.eventRange.instance.instanceId] = placement.absoluteTop;
        }
    }
    return colPlacements;
}

var Table = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(Table, _super);
    function Table() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.splitBusinessHourSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByRow);
        _this.splitBgEventSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByRow);
        _this.splitFgEventSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByRow);
        _this.splitDateSelectionSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByRow);
        _this.splitEventDrag = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitInteractionByRow);
        _this.splitEventResize = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitInteractionByRow);
        _this.rowRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap();
        _this.handleRootEl = function (rootEl) {
            _this.rootEl = rootEl;
            if (rootEl) {
                _this.context.registerInteractiveComponent(_this, {
                    el: rootEl,
                    isHitComboAllowed: _this.props.isHitComboAllowed,
                });
            }
            else {
                _this.context.unregisterInteractiveComponent(_this);
            }
        };
        return _this;
    }
    Table.prototype.render = function () {
        var _this = this;
        var props = this.props;
        var dateProfile = props.dateProfile, dayMaxEventRows = props.dayMaxEventRows, dayMaxEvents = props.dayMaxEvents, expandRows = props.expandRows;
        var rowCnt = props.cells.length;
        var businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, rowCnt);
        var bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, rowCnt);
        var fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, rowCnt);
        var dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, rowCnt);
        var eventDragByRow = this.splitEventDrag(props.eventDrag, rowCnt);
        var eventResizeByRow = this.splitEventResize(props.eventResize, rowCnt);
        var limitViaBalanced = dayMaxEvents === true || dayMaxEventRows === true;
        // if rows can't expand to fill fixed height, can't do balanced-height event limit
        // TODO: best place to normalize these options?
        if (limitViaBalanced && !expandRows) {
            limitViaBalanced = false;
            dayMaxEventRows = null;
            dayMaxEvents = null;
        }
        var classNames = [
            'fc-daygrid-body',
            limitViaBalanced ? 'fc-daygrid-body-balanced' : 'fc-daygrid-body-unbalanced',
            expandRows ? '' : 'fc-daygrid-body-natural',
        ];
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: classNames.join(' '), ref: this.handleRootEl, style: {
                // these props are important to give this wrapper correct dimensions for interactions
                // TODO: if we set it here, can we avoid giving to inner tables?
                width: props.clientWidth,
                minWidth: props.tableMinWidth,
            } },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowTimer, { unit: "day" }, function (nowDate, todayRange) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { className: "fc-scrollgrid-sync-table", style: {
                        width: props.clientWidth,
                        minWidth: props.tableMinWidth,
                        height: expandRows ? props.clientHeight : '',
                    } },
                    props.colGroupNode,
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, props.cells.map(function (cells, row) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TableRow, { ref: _this.rowRefs.createRef(row), key: cells.length
                            ? cells[0].date.toISOString() /* best? or put key on cell? or use diff formatter? */
                            : row // in case there are no cells (like when resource view is loading)
                        , showDayNumbers: rowCnt > 1, showWeekNumbers: props.showWeekNumbers, todayRange: todayRange, dateProfile: dateProfile, cells: cells, renderIntro: props.renderRowIntro, businessHourSegs: businessHourSegsByRow[row], eventSelection: props.eventSelection, bgEventSegs: bgEventSegsByRow[row].filter(isSegAllDay) /* hack */, fgEventSegs: fgEventSegsByRow[row], dateSelectionSegs: dateSelectionSegsByRow[row], eventDrag: eventDragByRow[row], eventResize: eventResizeByRow[row], dayMaxEvents: dayMaxEvents, dayMaxEventRows: dayMaxEventRows, clientWidth: props.clientWidth, clientHeight: props.clientHeight, forPrint: props.forPrint })); }))))); })));
    };
    // Hit System
    // ----------------------------------------------------------------------------------------------------
    Table.prototype.prepareHits = function () {
        this.rowPositions = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache(this.rootEl, this.rowRefs.collect().map(function (rowObj) { return rowObj.getCellEls()[0]; }), // first cell el in each row. TODO: not optimal
        false, true);
        this.colPositions = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache(this.rootEl, this.rowRefs.currentMap[0].getCellEls(), // cell els in first row
        true, // horizontal
        false);
    };
    Table.prototype.queryHit = function (positionLeft, positionTop) {
        var _a = this, colPositions = _a.colPositions, rowPositions = _a.rowPositions;
        var col = colPositions.leftToIndex(positionLeft);
        var row = rowPositions.topToIndex(positionTop);
        if (row != null && col != null) {
            var cell = this.props.cells[row][col];
            return {
                dateProfile: this.props.dateProfile,
                dateSpan: (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ range: this.getCellRange(row, col), allDay: true }, cell.extraDateSpan),
                dayEl: this.getCellEl(row, col),
                rect: {
                    left: colPositions.lefts[col],
                    right: colPositions.rights[col],
                    top: rowPositions.tops[row],
                    bottom: rowPositions.bottoms[row],
                },
                layer: 0,
            };
        }
        return null;
    };
    Table.prototype.getCellEl = function (row, col) {
        return this.rowRefs.currentMap[row].getCellEls()[col]; // TODO: not optimal
    };
    Table.prototype.getCellRange = function (row, col) {
        var start = this.props.cells[row][col].date;
        var end = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDays)(start, 1);
        return { start: start, end: end };
    };
    return Table;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));
function isSegAllDay(seg) {
    return seg.eventRange.def.allDay;
}

var DayTableSlicer = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DayTableSlicer, _super);
    function DayTableSlicer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.forceDayIfListItem = true;
        return _this;
    }
    DayTableSlicer.prototype.sliceRange = function (dateRange, dayTableModel) {
        return dayTableModel.sliceRange(dateRange);
    };
    return DayTableSlicer;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Slicer));

var DayTable = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DayTable, _super);
    function DayTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.slicer = new DayTableSlicer();
        _this.tableRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        return _this;
    }
    DayTable.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(Table, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ ref: this.tableRef }, this.slicer.sliceProps(props, props.dateProfile, props.nextDayThreshold, context, props.dayTableModel), { dateProfile: props.dateProfile, cells: props.dayTableModel.cells, colGroupNode: props.colGroupNode, tableMinWidth: props.tableMinWidth, renderRowIntro: props.renderRowIntro, dayMaxEvents: props.dayMaxEvents, dayMaxEventRows: props.dayMaxEventRows, showWeekNumbers: props.showWeekNumbers, expandRows: props.expandRows, headerAlignElRef: props.headerAlignElRef, clientWidth: props.clientWidth, clientHeight: props.clientHeight, forPrint: props.forPrint })));
    };
    return DayTable;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));

var DayTableView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(DayTableView, _super);
    function DayTableView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buildDayTableModel = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(buildDayTableModel);
        _this.headerRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.tableRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        return _this;
    }
    DayTableView.prototype.render = function () {
        var _this = this;
        var _a = this.context, options = _a.options, dateProfileGenerator = _a.dateProfileGenerator;
        var props = this.props;
        var dayTableModel = this.buildDayTableModel(props.dateProfile, dateProfileGenerator);
        var headerContent = options.dayHeaders && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayHeader, { ref: this.headerRef, dateProfile: props.dateProfile, dates: dayTableModel.headerDates, datesRepDistinctDays: dayTableModel.rowCnt === 1 }));
        var bodyContent = function (contentArg) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayTable, { ref: _this.tableRef, dateProfile: props.dateProfile, dayTableModel: dayTableModel, businessHours: props.businessHours, dateSelection: props.dateSelection, eventStore: props.eventStore, eventUiBases: props.eventUiBases, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, nextDayThreshold: options.nextDayThreshold, colGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, dayMaxEvents: options.dayMaxEvents, dayMaxEventRows: options.dayMaxEventRows, showWeekNumbers: options.weekNumbers, expandRows: !props.isHeightAuto, headerAlignElRef: _this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint })); };
        return options.dayMinWidth
            ? this.renderHScrollLayout(headerContent, bodyContent, dayTableModel.colCnt, options.dayMinWidth)
            : this.renderSimpleLayout(headerContent, bodyContent);
    };
    return DayTableView;
}(TableView));
function buildDayTableModel(dateProfile, dateProfileGenerator) {
    var daySeries = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
    return new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayTableModel(daySeries, /year|month|week/.test(dateProfile.currentRangeUnit));
}

var TableDateProfileGenerator = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(TableDateProfileGenerator, _super);
    function TableDateProfileGenerator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // Computes the date range that will be rendered.
    TableDateProfileGenerator.prototype.buildRenderRange = function (currentRange, currentRangeUnit, isRangeAllDay) {
        var dateEnv = this.props.dateEnv;
        var renderRange = _super.prototype.buildRenderRange.call(this, currentRange, currentRangeUnit, isRangeAllDay);
        var start = renderRange.start;
        var end = renderRange.end;
        var endOfWeek;
        // year and month views should be aligned with weeks. this is already done for week
        if (/^(year|month)$/.test(currentRangeUnit)) {
            start = dateEnv.startOfWeek(start);
            // make end-of-week if not already
            endOfWeek = dateEnv.startOfWeek(end);
            if (endOfWeek.valueOf() !== end.valueOf()) {
                end = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addWeeks)(endOfWeek, 1);
            }
        }
        // ensure 6 weeks
        if (this.props.monthMode &&
            this.props.fixedWeekCount) {
            var rowCnt = Math.ceil(// could be partial weeks due to hiddenDays
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffWeeks)(start, end));
            end = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addWeeks)(end, 6 - rowCnt);
        }
        return { start: start, end: end };
    };
    return TableDateProfileGenerator;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateProfileGenerator));

var main = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createPlugin)({
    initialView: 'dayGridMonth',
    views: {
        dayGrid: {
            component: DayTableView,
            dateProfileGeneratorClass: TableDateProfileGenerator,
        },
        dayGridDay: {
            type: 'dayGrid',
            duration: { days: 1 },
        },
        dayGridWeek: {
            type: 'dayGrid',
            duration: { weeks: 1 },
        },
        dayGridMonth: {
            type: 'dayGrid',
            duration: { months: 1 },
            monthMode: true,
            fixedWeekCount: true,
        },
    },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);

//# sourceMappingURL=main.js.map


/***/ }),
/* 322 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 323 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "DayTimeCols": () => (/* binding */ DayTimeCols),
/* harmony export */   "DayTimeColsSlicer": () => (/* binding */ DayTimeColsSlicer),
/* harmony export */   "DayTimeColsView": () => (/* binding */ DayTimeColsView),
/* harmony export */   "TimeCols": () => (/* binding */ TimeCols),
/* harmony export */   "TimeColsSlatsCoords": () => (/* binding */ TimeColsSlatsCoords),
/* harmony export */   "TimeColsView": () => (/* binding */ TimeColsView),
/* harmony export */   "buildDayRanges": () => (/* binding */ buildDayRanges),
/* harmony export */   "buildSlatMetas": () => (/* binding */ buildSlatMetas),
/* harmony export */   "buildTimeColsModel": () => (/* binding */ buildTimeColsModel)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(324);
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(318);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(317);
/* harmony import */ var _fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(321);
/*!
FullCalendar v5.7.0
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/






var AllDaySplitter = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(AllDaySplitter, _super);
    function AllDaySplitter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AllDaySplitter.prototype.getKeyInfo = function () {
        return {
            allDay: {},
            timed: {},
        };
    };
    AllDaySplitter.prototype.getKeysForDateSpan = function (dateSpan) {
        if (dateSpan.allDay) {
            return ['allDay'];
        }
        return ['timed'];
    };
    AllDaySplitter.prototype.getKeysForEventDef = function (eventDef) {
        if (!eventDef.allDay) {
            return ['timed'];
        }
        if ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.hasBgRendering)(eventDef)) {
            return ['timed', 'allDay'];
        }
        return ['allDay'];
    };
    return AllDaySplitter;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Splitter));

var DEFAULT_SLAT_LABEL_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)({
    hour: 'numeric',
    minute: '2-digit',
    omitZeroMinute: true,
    meridiem: 'short',
});
function TimeColsAxisCell(props) {
    var classNames = [
        'fc-timegrid-slot',
        'fc-timegrid-slot-label',
        props.isLabeled ? 'fc-scrollgrid-shrink' : 'fc-timegrid-slot-minor',
    ];
    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewContextType.Consumer, null, function (context) {
        if (!props.isLabeled) {
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { className: classNames.join(' '), "data-time": props.isoTimeStr }));
        }
        var dateEnv = context.dateEnv, options = context.options, viewApi = context.viewApi;
        var labelFormat = // TODO: fully pre-parse
         options.slotLabelFormat == null ? DEFAULT_SLAT_LABEL_FORMAT :
            Array.isArray(options.slotLabelFormat) ? (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)(options.slotLabelFormat[0]) :
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)(options.slotLabelFormat);
        var hookProps = {
            level: 0,
            time: props.time,
            date: dateEnv.toDate(props.date),
            view: viewApi,
            text: dateEnv.format(props.date, labelFormat),
        };
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook, { hookProps: hookProps, classNames: options.slotLabelClassNames, content: options.slotLabelContent, defaultContent: renderInnerContent, didMount: options.slotLabelDidMount, willUnmount: options.slotLabelWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { ref: rootElRef, className: classNames.concat(customClassNames).join(' '), "data-time": props.isoTimeStr },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-slot-label-frame fc-scrollgrid-shrink-frame" },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-slot-label-cushion fc-scrollgrid-shrink-cushion", ref: innerElRef }, innerContent)))); }));
    }));
}
function renderInnerContent(props) {
    return props.text;
}

var TimeBodyAxis = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeBodyAxis, _super);
    function TimeBodyAxis() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeBodyAxis.prototype.render = function () {
        return this.props.slatMetas.map(function (slatMeta) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { key: slatMeta.key },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsAxisCell, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, slatMeta)))); });
    };
    return TimeBodyAxis;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));

var DEFAULT_WEEK_NUM_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)({ week: 'short' });
var AUTO_ALL_DAY_MAX_EVENT_ROWS = 5;
var TimeColsView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColsView, _super);
    function TimeColsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.allDaySplitter = new AllDaySplitter(); // for use by subclasses
        _this.headerElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.scrollerElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.state = {
            slatCoords: null,
        };
        _this.handleScrollTopRequest = function (scrollTop) {
            var scrollerEl = _this.scrollerElRef.current;
            if (scrollerEl) { // TODO: not sure how this could ever be null. weirdness with the reducer
                scrollerEl.scrollTop = scrollTop;
            }
        };
        /* Header Render Methods
        ------------------------------------------------------------------------------------------------------------------*/
        _this.renderHeadAxis = function (rowKey, frameHeight) {
            if (frameHeight === void 0) { frameHeight = ''; }
            var options = _this.context.options;
            var dateProfile = _this.props.dateProfile;
            var range = dateProfile.renderRange;
            var dayCnt = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.diffDays)(range.start, range.end);
            var navLinkAttrs = (options.navLinks && dayCnt === 1) // only do in day views (to avoid doing in week views that dont need it)
                ? { 'data-navlink': (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkData)(range.start, 'week'), tabIndex: 0 }
                : {};
            if (options.weekNumbers && rowKey === 'day') {
                return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.WeekNumberRoot, { date: range.start, defaultFormat: DEFAULT_WEEK_NUM_FORMAT }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { ref: rootElRef, className: [
                        'fc-timegrid-axis',
                        'fc-scrollgrid-shrink',
                    ].concat(classNames).join(' ') },
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-axis-frame fc-scrollgrid-shrink-frame fc-timegrid-axis-frame-liquid", style: { height: frameHeight } },
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ ref: innerElRef, className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner" }, navLinkAttrs), innerContent)))); }));
            }
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { className: "fc-timegrid-axis" },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-axis-frame", style: { height: frameHeight } })));
        };
        /* Table Component Render Methods
        ------------------------------------------------------------------------------------------------------------------*/
        // only a one-way height sync. we don't send the axis inner-content height to the DayGrid,
        // but DayGrid still needs to have classNames on inner elements in order to measure.
        _this.renderTableRowAxis = function (rowHeight) {
            var _a = _this.context, options = _a.options, viewApi = _a.viewApi;
            var hookProps = {
                text: options.allDayText,
                view: viewApi,
            };
            return (
            // TODO: make reusable hook. used in list view too
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook, { hookProps: hookProps, classNames: options.allDayClassNames, content: options.allDayContent, defaultContent: renderAllDayInner, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { ref: rootElRef, className: [
                    'fc-timegrid-axis',
                    'fc-scrollgrid-shrink',
                ].concat(classNames).join(' ') },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: 'fc-timegrid-axis-frame fc-scrollgrid-shrink-frame' + (rowHeight == null ? ' fc-timegrid-axis-frame-liquid' : ''), style: { height: rowHeight } },
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { className: "fc-timegrid-axis-cushion fc-scrollgrid-shrink-cushion fc-scrollgrid-sync-inner", ref: innerElRef }, innerContent)))); }));
        };
        _this.handleSlatCoords = function (slatCoords) {
            _this.setState({ slatCoords: slatCoords });
        };
        return _this;
    }
    // rendering
    // ----------------------------------------------------------------------------------------------------
    TimeColsView.prototype.renderSimpleLayout = function (headerRowContent, allDayContent, timeContent) {
        var _a = this, context = _a.context, props = _a.props;
        var sections = [];
        var stickyHeaderDates = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyHeaderDates)(context.options);
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                chunk: {
                    elRef: this.headerElRef,
                    tableClassName: 'fc-col-header',
                    rowContent: headerRowContent,
                },
            });
        }
        if (allDayContent) {
            sections.push({
                type: 'body',
                key: 'all-day',
                chunk: { content: allDayContent },
            });
            sections.push({
                type: 'body',
                key: 'all-day-divider',
                outerContent: ( // TODO: rename to cellContent so don't need to define <tr>?
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { className: "fc-scrollgrid-section" },
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded') }))),
            });
        }
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            expandRows: Boolean(context.options.expandRows),
            chunk: {
                scrollerElRef: this.scrollerElRef,
                content: timeContent,
            },
        });
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot, { viewSpec: context.viewSpec, elRef: this.rootElRef }, function (rootElRef, classNames) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: ['fc-timegrid'].concat(classNames).join(' '), ref: rootElRef },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SimpleScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: props.forPrint, cols: [{ width: 'shrink' }], sections: sections }))); }));
    };
    TimeColsView.prototype.renderHScrollLayout = function (headerRowContent, allDayContent, timeContent, colCnt, dayMinWidth, slatMetas, slatCoords) {
        var _this = this;
        var ScrollGrid = this.context.pluginHooks.scrollGridImpl;
        if (!ScrollGrid) {
            throw new Error('No ScrollGrid implementation');
        }
        var _a = this, context = _a.context, props = _a.props;
        var stickyHeaderDates = !props.forPrint && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyHeaderDates)(context.options);
        var stickyFooterScrollbar = !props.forPrint && (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getStickyFooterScrollbar)(context.options);
        var sections = [];
        if (headerRowContent) {
            sections.push({
                type: 'header',
                key: 'header',
                isSticky: stickyHeaderDates,
                syncRowHeights: true,
                chunks: [
                    {
                        key: 'axis',
                        rowContent: function (arg) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", null, _this.renderHeadAxis('day', arg.rowSyncHeights[0]))); },
                    },
                    {
                        key: 'cols',
                        elRef: this.headerElRef,
                        tableClassName: 'fc-col-header',
                        rowContent: headerRowContent,
                    },
                ],
            });
        }
        if (allDayContent) {
            sections.push({
                type: 'body',
                key: 'all-day',
                syncRowHeights: true,
                chunks: [
                    {
                        key: 'axis',
                        rowContent: function (contentArg) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", null, _this.renderTableRowAxis(contentArg.rowSyncHeights[0]))); },
                    },
                    {
                        key: 'cols',
                        content: allDayContent,
                    },
                ],
            });
            sections.push({
                key: 'all-day-divider',
                type: 'body',
                outerContent: ( // TODO: rename to cellContent so don't need to define <tr>?
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { className: "fc-scrollgrid-section" },
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { colSpan: 2, className: 'fc-timegrid-divider ' + context.theme.getClass('tableCellShaded') }))),
            });
        }
        var isNowIndicator = context.options.nowIndicator;
        sections.push({
            type: 'body',
            key: 'body',
            liquid: true,
            expandRows: Boolean(context.options.expandRows),
            chunks: [
                {
                    key: 'axis',
                    content: function (arg) { return (
                    // TODO: make this now-indicator arrow more DRY with TimeColsContent
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-axis-chunk" },
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { style: { height: arg.expandRows ? arg.clientHeight : '' } },
                            arg.tableColGroupNode,
                            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null,
                                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeBodyAxis, { slatMetas: slatMetas }))),
                        (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-now-indicator-container" },
                            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowTimer, { unit: isNowIndicator ? 'minute' : 'day' /* hacky */ }, function (nowDate) {
                                var nowIndicatorTop = isNowIndicator &&
                                    slatCoords &&
                                    slatCoords.safeComputeTop(nowDate); // might return void
                                if (typeof nowIndicatorTop === 'number') {
                                    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowIndicatorRoot, { isAxis: true, date: nowDate }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: ['fc-timegrid-now-indicator-arrow'].concat(classNames).join(' '), style: { top: nowIndicatorTop } }, innerContent)); }));
                                }
                                return null;
                            })))); },
                },
                {
                    key: 'cols',
                    scrollerElRef: this.scrollerElRef,
                    content: timeContent,
                },
            ],
        });
        if (stickyFooterScrollbar) {
            sections.push({
                key: 'footer',
                type: 'footer',
                isSticky: true,
                chunks: [
                    {
                        key: 'axis',
                        content: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderScrollShim,
                    },
                    {
                        key: 'cols',
                        content: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderScrollShim,
                    },
                ],
            });
        }
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot, { viewSpec: context.viewSpec, elRef: this.rootElRef }, function (rootElRef, classNames) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: ['fc-timegrid'].concat(classNames).join(' '), ref: rootElRef },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(ScrollGrid, { liquid: !props.isHeightAuto && !props.forPrint, collapsibleWidth: false, colGroups: [
                    { width: 'shrink', cols: [{ width: 'shrink' }] },
                    { cols: [{ span: colCnt, minWidth: dayMinWidth }] },
                ], sections: sections }))); }));
    };
    /* Dimensions
    ------------------------------------------------------------------------------------------------------------------*/
    TimeColsView.prototype.getAllDayMaxEventProps = function () {
        var _a = this.context.options, dayMaxEvents = _a.dayMaxEvents, dayMaxEventRows = _a.dayMaxEventRows;
        if (dayMaxEvents === true || dayMaxEventRows === true) { // is auto?
            dayMaxEvents = undefined;
            dayMaxEventRows = AUTO_ALL_DAY_MAX_EVENT_ROWS; // make sure "auto" goes to a real number
        }
        return { dayMaxEvents: dayMaxEvents, dayMaxEventRows: dayMaxEventRows };
    };
    return TimeColsView;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));
function renderAllDayInner(hookProps) {
    return hookProps.text;
}

var TimeColsSlatsCoords = /** @class */ (function () {
    function TimeColsSlatsCoords(positions, dateProfile, slotDuration) {
        this.positions = positions;
        this.dateProfile = dateProfile;
        this.slotDuration = slotDuration;
    }
    TimeColsSlatsCoords.prototype.safeComputeTop = function (date) {
        var dateProfile = this.dateProfile;
        if ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.rangeContainsMarker)(dateProfile.currentRange, date)) {
            var startOfDayDate = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(date);
            var timeMs = date.valueOf() - startOfDayDate.valueOf();
            if (timeMs >= (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs)(dateProfile.slotMinTime) &&
                timeMs < (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs)(dateProfile.slotMaxTime)) {
                return this.computeTimeTop((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createDuration)(timeMs));
            }
        }
        return null;
    };
    // Computes the top coordinate, relative to the bounds of the grid, of the given date.
    // A `startOfDayDate` must be given for avoiding ambiguity over how to treat midnight.
    TimeColsSlatsCoords.prototype.computeDateTop = function (when, startOfDayDate) {
        if (!startOfDayDate) {
            startOfDayDate = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(when);
        }
        return this.computeTimeTop((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createDuration)(when.valueOf() - startOfDayDate.valueOf()));
    };
    // Computes the top coordinate, relative to the bounds of the grid, of the given time (a Duration).
    // This is a makeshify way to compute the time-top. Assumes all slatMetas dates are uniform.
    // Eventually allow computation with arbirary slat dates.
    TimeColsSlatsCoords.prototype.computeTimeTop = function (duration) {
        var _a = this, positions = _a.positions, dateProfile = _a.dateProfile;
        var len = positions.els.length;
        // floating-point value of # of slots covered
        var slatCoverage = (duration.milliseconds - (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs)(dateProfile.slotMinTime)) / (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs)(this.slotDuration);
        var slatIndex;
        var slatRemainder;
        // compute a floating-point number for how many slats should be progressed through.
        // from 0 to number of slats (inclusive)
        // constrained because slotMinTime/slotMaxTime might be customized.
        slatCoverage = Math.max(0, slatCoverage);
        slatCoverage = Math.min(len, slatCoverage);
        // an integer index of the furthest whole slat
        // from 0 to number slats (*exclusive*, so len-1)
        slatIndex = Math.floor(slatCoverage);
        slatIndex = Math.min(slatIndex, len - 1);
        // how much further through the slatIndex slat (from 0.0-1.0) must be covered in addition.
        // could be 1.0 if slatCoverage is covering *all* the slots
        slatRemainder = slatCoverage - slatIndex;
        return positions.tops[slatIndex] +
            positions.getHeight(slatIndex) * slatRemainder;
    };
    return TimeColsSlatsCoords;
}());

var TimeColsSlatsBody = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColsSlatsBody, _super);
    function TimeColsSlatsBody() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeColsSlatsBody.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        var options = context.options;
        var slatElRefs = props.slatElRefs;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, props.slatMetas.map(function (slatMeta, i) {
            var hookProps = {
                time: slatMeta.time,
                date: context.dateEnv.toDate(slatMeta.date),
                view: context.viewApi,
            };
            var classNames = [
                'fc-timegrid-slot',
                'fc-timegrid-slot-lane',
                slatMeta.isLabeled ? '' : 'fc-timegrid-slot-minor',
            ];
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { key: slatMeta.key, ref: slatElRefs.createRef(slatMeta.key) },
                props.axis && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsAxisCell, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, slatMeta))),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook, { hookProps: hookProps, classNames: options.slotLaneClassNames, content: options.slotLaneContent, didMount: options.slotLaneDidMount, willUnmount: options.slotLaneWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { ref: rootElRef, className: classNames.concat(customClassNames).join(' '), "data-time": slatMeta.isoTimeStr }, innerContent)); })));
        })));
    };
    return TimeColsSlatsBody;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));

/*
for the horizontal "slats" that run width-wise. Has a time axis on a side. Depends on RTL.
*/
var TimeColsSlats = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColsSlats, _super);
    function TimeColsSlats() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.slatElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap();
        return _this;
    }
    TimeColsSlats.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-slots", ref: this.rootElRef },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { className: context.theme.getClass('table'), style: {
                    minWidth: props.tableMinWidth,
                    width: props.clientWidth,
                    height: props.minHeight,
                } },
                props.tableColGroupNode /* relies on there only being a single <col> for the axis */,
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsSlatsBody, { slatElRefs: this.slatElRefs, axis: props.axis, slatMetas: props.slatMetas }))));
    };
    TimeColsSlats.prototype.componentDidMount = function () {
        this.updateSizing();
    };
    TimeColsSlats.prototype.componentDidUpdate = function () {
        this.updateSizing();
    };
    TimeColsSlats.prototype.componentWillUnmount = function () {
        if (this.props.onCoords) {
            this.props.onCoords(null);
        }
    };
    TimeColsSlats.prototype.updateSizing = function () {
        var _a = this, context = _a.context, props = _a.props;
        if (props.onCoords &&
            props.clientWidth !== null // means sizing has stabilized
        ) {
            var rootEl = this.rootElRef.current;
            if (rootEl.offsetHeight) { // not hidden by css
                props.onCoords(new TimeColsSlatsCoords(new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache(this.rootElRef.current, collectSlatEls(this.slatElRefs.currentMap, props.slatMetas), false, true), this.props.dateProfile, context.options.slotDuration));
            }
        }
    };
    return TimeColsSlats;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function collectSlatEls(elMap, slatMetas) {
    return slatMetas.map(function (slatMeta) { return elMap[slatMeta.key]; });
}

function splitSegsByCol(segs, colCnt) {
    var segsByCol = [];
    var i;
    for (i = 0; i < colCnt; i += 1) {
        segsByCol.push([]);
    }
    if (segs) {
        for (i = 0; i < segs.length; i += 1) {
            segsByCol[segs[i].col].push(segs[i]);
        }
    }
    return segsByCol;
}
function splitInteractionByCol(ui, colCnt) {
    var byRow = [];
    if (!ui) {
        for (var i = 0; i < colCnt; i += 1) {
            byRow[i] = null;
        }
    }
    else {
        for (var i = 0; i < colCnt; i += 1) {
            byRow[i] = {
                affectedInstances: ui.affectedInstances,
                isEvent: ui.isEvent,
                segs: [],
            };
        }
        for (var _i = 0, _a = ui.segs; _i < _a.length; _i++) {
            var seg = _a[_i];
            byRow[seg.col].segs.push(seg);
        }
    }
    return byRow;
}

var TimeColMoreLink = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColMoreLink, _super);
    function TimeColMoreLink() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        return _this;
    }
    TimeColMoreLink.prototype.render = function () {
        var _this = this;
        var props = this.props;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.MoreLinkRoot, { allDayDate: null, moreCnt: props.hiddenSegs.length, allSegs: props.hiddenSegs, hiddenSegs: props.hiddenSegs, alignmentElRef: this.rootElRef, defaultContent: renderMoreLinkInner, extraDateSpan: props.extraDateSpan, dateProfile: props.dateProfile, todayRange: props.todayRange, popoverContent: function () { return renderPlainFgSegs(props.hiddenSegs, props); } }, function (rootElRef, classNames, innerElRef, innerContent, handleClick) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", { ref: function (el) {
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setRef)(rootElRef, el);
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.setRef)(_this.rootElRef, el);
            }, className: ['fc-timegrid-more-link'].concat(classNames).join(' '), style: { top: props.top, bottom: props.bottom }, onClick: handleClick },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: innerElRef, className: "fc-timegrid-more-link-inner fc-sticky" }, innerContent))); }));
    };
    return TimeColMoreLink;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function renderMoreLinkInner(props) {
    return props.shortText;
}

// segInputs assumed sorted
function computeFgSegPlacements(segInputs, strictOrder, maxStackCnt) {
    var hierarchy = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.SegHierarchy();
    if (strictOrder != null) {
        hierarchy.strictOrder = strictOrder;
    }
    if (maxStackCnt != null) {
        hierarchy.maxStackCnt = maxStackCnt;
    }
    var hiddenEntries = hierarchy.addSegs(segInputs);
    var hiddenGroups = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.groupIntersectingEntries)(hiddenEntries);
    var web = buildWeb(hierarchy);
    web = stretchWeb(web, 1); // all levelCoords/thickness will have 0.0-1.0
    var segRects = webToRects(web);
    return { segRects: segRects, hiddenGroups: hiddenGroups };
}
function buildWeb(hierarchy) {
    var entriesByLevel = hierarchy.entriesByLevel;
    var buildNode = cacheable(function (level, lateral) { return level + ':' + lateral; }, function (level, lateral) {
        var siblingRange = findNextLevelSegs(hierarchy, level, lateral);
        var nextLevelRes = buildNodes(siblingRange, buildNode);
        var entry = entriesByLevel[level][lateral];
        return [
            (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, entry), { nextLevelNodes: nextLevelRes[0] }),
            entry.thickness + nextLevelRes[1],
        ];
    });
    return buildNodes(entriesByLevel.length
        ? { level: 0, lateralStart: 0, lateralEnd: entriesByLevel[0].length }
        : null, buildNode)[0];
}
function buildNodes(siblingRange, buildNode) {
    if (!siblingRange) {
        return [[], 0];
    }
    var level = siblingRange.level, lateralStart = siblingRange.lateralStart, lateralEnd = siblingRange.lateralEnd;
    var lateral = lateralStart;
    var pairs = [];
    while (lateral < lateralEnd) {
        pairs.push(buildNode(level, lateral));
        lateral += 1;
    }
    pairs.sort(cmpDescPressures);
    return [
        pairs.map(extractNode),
        pairs[0][1],
    ];
}
function cmpDescPressures(a, b) {
    return b[1] - a[1];
}
function extractNode(a) {
    return a[0];
}
function findNextLevelSegs(hierarchy, subjectLevel, subjectLateral) {
    var levelCoords = hierarchy.levelCoords, entriesByLevel = hierarchy.entriesByLevel;
    var subjectEntry = entriesByLevel[subjectLevel][subjectLateral];
    var afterSubject = levelCoords[subjectLevel] + subjectEntry.thickness;
    var levelCnt = levelCoords.length;
    var level = subjectLevel;
    // skip past levels that are too high up
    for (; level < levelCnt && levelCoords[level] < afterSubject; level += 1)
        ; // do nothing
    for (; level < levelCnt; level += 1) {
        var entries = entriesByLevel[level];
        var entry = void 0;
        var searchIndex = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.binarySearch)(entries, subjectEntry.spanStart, _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getEntrySpanEnd);
        var lateralStart = searchIndex[0] + searchIndex[1]; // if exact match (which doesn't collide), go to next one
        var lateralEnd = lateralStart;
        while ( // loop through entries that horizontally intersect
        (entry = entries[lateralEnd]) && // but not past the whole seg list
            entry.spanStart < subjectEntry.spanEnd) {
            lateralEnd += 1;
        }
        if (lateralStart < lateralEnd) {
            return { level: level, lateralStart: lateralStart, lateralEnd: lateralEnd };
        }
    }
    return null;
}
function stretchWeb(topLevelNodes, totalThickness) {
    var stretchNode = cacheable(function (node, startCoord, prevThickness) { return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey)(node); }, function (node, startCoord, prevThickness) {
        var nextLevelNodes = node.nextLevelNodes, thickness = node.thickness;
        var allThickness = thickness + prevThickness;
        var thicknessFraction = thickness / allThickness;
        var endCoord;
        var newChildren = [];
        if (!nextLevelNodes.length) {
            endCoord = totalThickness;
        }
        else {
            for (var _i = 0, nextLevelNodes_1 = nextLevelNodes; _i < nextLevelNodes_1.length; _i++) {
                var childNode = nextLevelNodes_1[_i];
                if (endCoord === undefined) {
                    var res = stretchNode(childNode, startCoord, allThickness);
                    endCoord = res[0];
                    newChildren.push(res[1]);
                }
                else {
                    var res = stretchNode(childNode, endCoord, 0);
                    newChildren.push(res[1]);
                }
            }
        }
        var newThickness = (endCoord - startCoord) * thicknessFraction;
        return [endCoord - newThickness, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, node), { thickness: newThickness, nextLevelNodes: newChildren })];
    });
    return topLevelNodes.map(function (node) { return stretchNode(node, 0, 0)[1]; });
}
// not sorted in any particular order
function webToRects(topLevelNodes) {
    var rects = [];
    var processNode = cacheable(function (node, levelCoord, stackDepth) { return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEntryKey)(node); }, function (node, levelCoord, stackDepth) {
        var rect = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, node), { levelCoord: levelCoord,
            stackDepth: stackDepth, stackForward: 0 });
        rects.push(rect);
        return (rect.stackForward = processNodes(node.nextLevelNodes, levelCoord + node.thickness, stackDepth + 1) + 1);
    });
    function processNodes(nodes, levelCoord, stackDepth) {
        var stackForward = 0;
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            stackForward = Math.max(processNode(node, levelCoord, stackDepth), stackForward);
        }
        return stackForward;
    }
    processNodes(topLevelNodes, 0, 0);
    return rects; // TODO: sort rects by levelCoord to be consistent with toRects?
}
// TODO: move to general util
function cacheable(keyFunc, workFunc) {
    var cache = {};
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var key = keyFunc.apply(void 0, args);
        return (key in cache)
            ? cache[key]
            : (cache[key] = workFunc.apply(void 0, args));
    };
}

var DEFAULT_TIME_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)({
    hour: 'numeric',
    minute: '2-digit',
    meridiem: false,
});
var TimeColEvent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColEvent, _super);
    function TimeColEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeColEvent.prototype.render = function () {
        var classNames = [
            'fc-timegrid-event',
            'fc-v-event',
        ];
        if (this.props.isShort) {
            classNames.push('fc-timegrid-event-short');
        }
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.StandardEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, this.props, { defaultTimeFormat: DEFAULT_TIME_FORMAT, extraClassNames: classNames })));
    };
    return TimeColEvent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));

var TimeColMisc = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColMisc, _super);
    function TimeColMisc() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TimeColMisc.prototype.render = function () {
        var props = this.props;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellContent, { date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraHookProps: props.extraHookProps }, function (innerElRef, innerContent) { return (innerContent &&
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-misc", ref: innerElRef }, innerContent)); }));
    };
    return TimeColMisc;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));

var TimeCol = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeCol, _super);
    function TimeCol() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sortEventSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sortEventSegs);
        _this.computeFgSegPlacements = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(computeFgSegPlacements); // only for non-print, non-mirror
        return _this;
    }
    TimeCol.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, context = _a.context;
        var isSelectMirror = context.options.selectMirror;
        var mirrorSegs = (props.eventDrag && props.eventDrag.segs) ||
            (props.eventResize && props.eventResize.segs) ||
            (isSelectMirror && props.dateSelectionSegs) ||
            [];
        var interactionAffectedInstances = // TODO: messy way to compute this
         (props.eventDrag && props.eventDrag.affectedInstances) ||
            (props.eventResize && props.eventResize.affectedInstances) ||
            {};
        var sortedFgSegs = this.sortEventSegs(props.fgEventSegs, context.options.eventOrder);
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayCellRoot, { elRef: props.elRef, date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraHookProps: props.extraHookProps }, function (rootElRef, classNames, dataAttrs) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ ref: rootElRef, className: ['fc-timegrid-col'].concat(classNames, props.extraClassNames || []).join(' ') }, dataAttrs, props.extraDataAttrs),
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-frame" },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-bg" },
                    _this.renderFillSegs(props.businessHourSegs, 'non-business'),
                    _this.renderFillSegs(props.bgEventSegs, 'bg-event'),
                    _this.renderFillSegs(props.dateSelectionSegs, 'highlight')),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-events" }, _this.renderFgSegs(sortedFgSegs, interactionAffectedInstances)),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-events" }, _this.renderFgSegs(mirrorSegs, {}, Boolean(props.eventDrag), Boolean(props.eventResize), Boolean(isSelectMirror))),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-now-indicator-container" }, _this.renderNowIndicator(props.nowIndicatorSegs)),
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColMisc, { date: props.date, dateProfile: props.dateProfile, todayRange: props.todayRange, extraHookProps: props.extraHookProps })))); }));
    };
    TimeCol.prototype.renderFgSegs = function (sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting) {
        var props = this.props;
        if (props.forPrint) {
            return renderPlainFgSegs(sortedFgSegs, props);
        }
        if (props.slatCoords) {
            return this.renderPositionedFgSegs(sortedFgSegs, segIsInvisible, isDragging, isResizing, isDateSelecting);
        }
        return null;
    };
    TimeCol.prototype.renderPositionedFgSegs = function (segs, // if not mirror, needs to be sorted
    segIsInvisible, isDragging, isResizing, isDateSelecting) {
        var _this = this;
        var _a = this.context.options, eventMaxStack = _a.eventMaxStack, eventShortHeight = _a.eventShortHeight, eventOrderStrict = _a.eventOrderStrict;
        var _b = this.props, eventSelection = _b.eventSelection, todayRange = _b.todayRange, nowDate = _b.nowDate;
        var isMirror = isDragging || isResizing || isDateSelecting;
        var segInputs = this.buildSegInputs(segs);
        var _c = isMirror ? computeFgSegPlacements(segInputs) : // don't use memoized
            this.computeFgSegPlacements(segInputs, eventOrderStrict, eventMaxStack), segRects = _c.segRects, hiddenGroups = _c.hiddenGroups;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
            this.renderHiddenGroups(hiddenGroups, segs),
            segRects.map(function (segRect) {
                var seg = segs[segRect.segInput.index];
                var instanceId = seg.eventRange.instance.instanceId;
                var positionCss = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)((0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, _this.computeSegTopBottomCss(segRect.segInput)), (isMirror ? { left: 0, right: 0 } : _this.computeSegLeftRightCss(segRect)));
                return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: 'fc-timegrid-event-harness' + (segRect.stackForward > 0 ? ' fc-timegrid-event-harness-inset' : ''), key: instanceId, style: (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ visibility: segIsInvisible[instanceId] ? 'hidden' : '' }, positionCss) },
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ seg: seg, isDragging: isDragging, isResizing: isResizing, isDateSelecting: isDateSelecting, isSelected: instanceId === eventSelection, isShort: (segRect.spanEnd - segRect.spanStart) < eventShortHeight }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, todayRange, nowDate)))));
            })));
    };
    // will already have eventMinHeight applied because segInputs already had it
    TimeCol.prototype.renderHiddenGroups = function (hiddenGroups, segs) {
        var _this = this;
        var _a = this.props, extraDateSpan = _a.extraDateSpan, dateProfile = _a.dateProfile, todayRange = _a.todayRange, nowDate = _a.nowDate, eventSelection = _a.eventSelection, eventDrag = _a.eventDrag, eventResize = _a.eventResize;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, hiddenGroups.map(function (hiddenGroup) {
            var positionCss = _this.computeSegTopBottomCss(hiddenGroup);
            var hiddenSegs = compileSegsFromEntries(hiddenGroup.entries, segs);
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColMoreLink, { key: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildIsoString)((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.computeEarliestSegStart)(hiddenSegs)), hiddenSegs: hiddenSegs, top: positionCss.top, bottom: positionCss.bottom, extraDateSpan: extraDateSpan, dateProfile: dateProfile, todayRange: todayRange, nowDate: nowDate, eventSelection: eventSelection, eventDrag: eventDrag, eventResize: eventResize }));
        })));
    };
    TimeCol.prototype.buildSegInputs = function (segs) {
        var _a = this.props, date = _a.date, slatCoords = _a.slatCoords;
        var eventMinHeight = this.context.options.eventMinHeight;
        var segInputs = [];
        for (var i = 0; i < segs.length; i += 1) {
            var seg = segs[i];
            var spanStart = slatCoords.computeDateTop(seg.start, date);
            var spanEnd = Math.max(spanStart + (eventMinHeight || 0), // yuck
            slatCoords.computeDateTop(seg.end, date));
            segInputs.push({
                index: i,
                spanStart: Math.round(spanStart),
                spanEnd: Math.round(spanEnd),
                thickness: 1,
            });
        }
        return segInputs;
    };
    TimeCol.prototype.renderFillSegs = function (segs, fillType) {
        var _this = this;
        var props = this.props;
        if (!props.slatCoords) {
            return null;
        }
        var segInputs = this.buildSegInputs(segs);
        var children = segInputs.map(function (segInput) {
            var seg = segs[segInput.index];
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { key: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildEventRangeKey)(seg.eventRange), className: "fc-timegrid-bg-harness", style: _this.computeSegTopBottomCss(segInput) }, fillType === 'bg-event' ?
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BgEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ seg: seg }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, props.todayRange, props.nowDate))) :
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.renderFill)(fillType)));
        });
        return (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, children);
    };
    TimeCol.prototype.renderNowIndicator = function (segs) {
        var _a = this.props, slatCoords = _a.slatCoords, date = _a.date;
        if (!slatCoords) {
            return null;
        }
        return segs.map(function (seg, i) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowIndicatorRoot, { isAxis: false, date: date, 
            // key doesn't matter. will only ever be one
            key: i }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: ['fc-timegrid-now-indicator-line'].concat(classNames).join(' '), style: { top: slatCoords.computeDateTop(seg.start, date) } }, innerContent)); })); });
    };
    TimeCol.prototype.computeSegTopBottomCss = function (segLike) {
        return {
            top: segLike.spanStart,
            bottom: -segLike.spanEnd,
        };
    };
    TimeCol.prototype.computeSegLeftRightCss = function (segRect) {
        var _a = this.context, isRtl = _a.isRtl, options = _a.options;
        var shouldOverlap = options.slotEventOverlap;
        var nearCoord = segRect.levelCoord; // the left side if LTR. the right side if RTL. floating-point
        var farCoord = segRect.levelCoord + segRect.thickness; // the right side if LTR. the left side if RTL. floating-point
        var left; // amount of space from left edge, a fraction of the total width
        var right; // amount of space from right edge, a fraction of the total width
        if (shouldOverlap) {
            // double the width, but don't go beyond the maximum forward coordinate (1.0)
            farCoord = Math.min(1, nearCoord + (farCoord - nearCoord) * 2);
        }
        if (isRtl) {
            left = 1 - farCoord;
            right = nearCoord;
        }
        else {
            left = nearCoord;
            right = 1 - farCoord;
        }
        var props = {
            zIndex: segRect.stackDepth + 1,
            left: left * 100 + '%',
            right: right * 100 + '%',
        };
        if (shouldOverlap && !segRect.stackForward) {
            // add padding to the edge so that forward stacked events don't cover the resizer's icon
            props[isRtl ? 'marginLeft' : 'marginRight'] = 10 * 2; // 10 is a guesstimate of the icon's width
        }
        return props;
    };
    return TimeCol;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function renderPlainFgSegs(sortedFgSegs, _a) {
    var todayRange = _a.todayRange, nowDate = _a.nowDate, eventSelection = _a.eventSelection, eventDrag = _a.eventDrag, eventResize = _a.eventResize;
    var hiddenInstances = (eventDrag ? eventDrag.affectedInstances : null) ||
        (eventResize ? eventResize.affectedInstances : null) ||
        {};
    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null, sortedFgSegs.map(function (seg) {
        var instanceId = seg.eventRange.instance.instanceId;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { key: instanceId, style: { visibility: hiddenInstances[instanceId] ? 'hidden' : '' } },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColEvent, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: instanceId === eventSelection, isShort: false }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, todayRange, nowDate)))));
    })));
}
function compileSegsFromEntries(segEntries, allSegs) {
    return segEntries.map(function (segEntry) { return allSegs[segEntry.segInput.index]; });
}

var TimeColsContent = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeColsContent, _super);
    function TimeColsContent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.splitFgEventSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByCol);
        _this.splitBgEventSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByCol);
        _this.splitBusinessHourSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByCol);
        _this.splitNowIndicatorSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByCol);
        _this.splitDateSelectionSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitSegsByCol);
        _this.splitEventDrag = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitInteractionByCol);
        _this.splitEventResize = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(splitInteractionByCol);
        _this.rootElRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        _this.cellElRefs = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RefMap();
        return _this;
    }
    TimeColsContent.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, context = _a.context;
        var nowIndicatorTop = context.options.nowIndicator &&
            props.slatCoords &&
            props.slatCoords.safeComputeTop(props.nowDate); // might return void
        var colCnt = props.cells.length;
        var fgEventSegsByRow = this.splitFgEventSegs(props.fgEventSegs, colCnt);
        var bgEventSegsByRow = this.splitBgEventSegs(props.bgEventSegs, colCnt);
        var businessHourSegsByRow = this.splitBusinessHourSegs(props.businessHourSegs, colCnt);
        var nowIndicatorSegsByRow = this.splitNowIndicatorSegs(props.nowIndicatorSegs, colCnt);
        var dateSelectionSegsByRow = this.splitDateSelectionSegs(props.dateSelectionSegs, colCnt);
        var eventDragByRow = this.splitEventDrag(props.eventDrag, colCnt);
        var eventResizeByRow = this.splitEventResize(props.eventResize, colCnt);
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-cols", ref: this.rootElRef },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { style: {
                    minWidth: props.tableMinWidth,
                    width: props.clientWidth,
                } },
                props.tableColGroupNode,
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null,
                    (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", null,
                        props.axis && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { className: "fc-timegrid-col fc-timegrid-axis" },
                            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-col-frame" },
                                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-now-indicator-container" }, typeof nowIndicatorTop === 'number' && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowIndicatorRoot, { isAxis: true, date: props.nowDate }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: ['fc-timegrid-now-indicator-arrow'].concat(classNames).join(' '), style: { top: nowIndicatorTop } }, innerContent)); })))))),
                        props.cells.map(function (cell, i) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeCol, { key: cell.key, elRef: _this.cellElRefs.createRef(cell.key), dateProfile: props.dateProfile, date: cell.date, nowDate: props.nowDate, todayRange: props.todayRange, extraHookProps: cell.extraHookProps, extraDataAttrs: cell.extraDataAttrs, extraClassNames: cell.extraClassNames, extraDateSpan: cell.extraDateSpan, fgEventSegs: fgEventSegsByRow[i], bgEventSegs: bgEventSegsByRow[i], businessHourSegs: businessHourSegsByRow[i], nowIndicatorSegs: nowIndicatorSegsByRow[i], dateSelectionSegs: dateSelectionSegsByRow[i], eventDrag: eventDragByRow[i], eventResize: eventResizeByRow[i], slatCoords: props.slatCoords, eventSelection: props.eventSelection, forPrint: props.forPrint })); }))))));
    };
    TimeColsContent.prototype.componentDidMount = function () {
        this.updateCoords();
    };
    TimeColsContent.prototype.componentDidUpdate = function () {
        this.updateCoords();
    };
    TimeColsContent.prototype.updateCoords = function () {
        var props = this.props;
        if (props.onColCoords &&
            props.clientWidth !== null // means sizing has stabilized
        ) {
            props.onColCoords(new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.PositionCache(this.rootElRef.current, collectCellEls(this.cellElRefs.currentMap, props.cells), true, // horizontal
            false));
        }
    };
    return TimeColsContent;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function collectCellEls(elMap, cells) {
    return cells.map(function (cell) { return elMap[cell.key]; });
}

/* A component that renders one or more columns of vertical time slots
----------------------------------------------------------------------------------------------------------------------*/
var TimeCols = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(TimeCols, _super);
    function TimeCols() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.processSlotOptions = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(processSlotOptions);
        _this.state = {
            slatCoords: null,
        };
        _this.handleRootEl = function (el) {
            if (el) {
                _this.context.registerInteractiveComponent(_this, {
                    el: el,
                    isHitComboAllowed: _this.props.isHitComboAllowed,
                });
            }
            else {
                _this.context.unregisterInteractiveComponent(_this);
            }
        };
        _this.handleScrollRequest = function (request) {
            var onScrollTopRequest = _this.props.onScrollTopRequest;
            var slatCoords = _this.state.slatCoords;
            if (onScrollTopRequest && slatCoords) {
                if (request.time) {
                    var top_1 = slatCoords.computeTimeTop(request.time);
                    top_1 = Math.ceil(top_1); // zoom can give weird floating-point values. rather scroll a little bit further
                    if (top_1) {
                        top_1 += 1; // to overcome top border that slots beyond the first have. looks better
                    }
                    onScrollTopRequest(top_1);
                }
                return true;
            }
            return false;
        };
        _this.handleColCoords = function (colCoords) {
            _this.colCoords = colCoords;
        };
        _this.handleSlatCoords = function (slatCoords) {
            _this.setState({ slatCoords: slatCoords });
            if (_this.props.onSlatCoords) {
                _this.props.onSlatCoords(slatCoords);
            }
        };
        return _this;
    }
    TimeCols.prototype.render = function () {
        var _a = this, props = _a.props, state = _a.state;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-timegrid-body", ref: this.handleRootEl, style: {
                // these props are important to give this wrapper correct dimensions for interactions
                // TODO: if we set it here, can we avoid giving to inner tables?
                width: props.clientWidth,
                minWidth: props.tableMinWidth,
            } },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsSlats, { axis: props.axis, dateProfile: props.dateProfile, slatMetas: props.slatMetas, clientWidth: props.clientWidth, minHeight: props.expandRows ? props.clientHeight : '', tableMinWidth: props.tableMinWidth, tableColGroupNode: props.axis ? props.tableColGroupNode : null /* axis depends on the colgroup's shrinking */, onCoords: this.handleSlatCoords }),
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeColsContent, { cells: props.cells, axis: props.axis, dateProfile: props.dateProfile, businessHourSegs: props.businessHourSegs, bgEventSegs: props.bgEventSegs, fgEventSegs: props.fgEventSegs, dateSelectionSegs: props.dateSelectionSegs, eventSelection: props.eventSelection, eventDrag: props.eventDrag, eventResize: props.eventResize, todayRange: props.todayRange, nowDate: props.nowDate, nowIndicatorSegs: props.nowIndicatorSegs, clientWidth: props.clientWidth, tableMinWidth: props.tableMinWidth, tableColGroupNode: props.tableColGroupNode, slatCoords: state.slatCoords, onColCoords: this.handleColCoords, forPrint: props.forPrint })));
    };
    TimeCols.prototype.componentDidMount = function () {
        this.scrollResponder = this.context.createScrollResponder(this.handleScrollRequest);
    };
    TimeCols.prototype.componentDidUpdate = function (prevProps) {
        this.scrollResponder.update(prevProps.dateProfile !== this.props.dateProfile);
    };
    TimeCols.prototype.componentWillUnmount = function () {
        this.scrollResponder.detach();
    };
    TimeCols.prototype.queryHit = function (positionLeft, positionTop) {
        var _a = this.context, dateEnv = _a.dateEnv, options = _a.options;
        var colCoords = this.colCoords;
        var dateProfile = this.props.dateProfile;
        var slatCoords = this.state.slatCoords;
        var _b = this.processSlotOptions(this.props.slotDuration, options.snapDuration), snapDuration = _b.snapDuration, snapsPerSlot = _b.snapsPerSlot;
        var colIndex = colCoords.leftToIndex(positionLeft);
        var slatIndex = slatCoords.positions.topToIndex(positionTop);
        if (colIndex != null && slatIndex != null) {
            var cell = this.props.cells[colIndex];
            var slatTop = slatCoords.positions.tops[slatIndex];
            var slatHeight = slatCoords.positions.getHeight(slatIndex);
            var partial = (positionTop - slatTop) / slatHeight; // floating point number between 0 and 1
            var localSnapIndex = Math.floor(partial * snapsPerSlot); // the snap # relative to start of slat
            var snapIndex = slatIndex * snapsPerSlot + localSnapIndex;
            var dayDate = this.props.cells[colIndex].date;
            var time = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDurations)(dateProfile.slotMinTime, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.multiplyDuration)(snapDuration, snapIndex));
            var start = dateEnv.add(dayDate, time);
            var end = dateEnv.add(start, snapDuration);
            return {
                dateProfile: dateProfile,
                dateSpan: (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ range: { start: start, end: end }, allDay: false }, cell.extraDateSpan),
                dayEl: colCoords.els[colIndex],
                rect: {
                    left: colCoords.lefts[colIndex],
                    right: colCoords.rights[colIndex],
                    top: slatTop,
                    bottom: slatTop + slatHeight,
                },
                layer: 0,
            };
        }
        return null;
    };
    return TimeCols;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));
function processSlotOptions(slotDuration, snapDurationOverride) {
    var snapDuration = snapDurationOverride || slotDuration;
    var snapsPerSlot = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.wholeDivideDurations)(slotDuration, snapDuration);
    if (snapsPerSlot === null) {
        snapDuration = slotDuration;
        snapsPerSlot = 1;
        // TODO: say warning?
    }
    return { snapDuration: snapDuration, snapsPerSlot: snapsPerSlot };
}

var DayTimeColsSlicer = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(DayTimeColsSlicer, _super);
    function DayTimeColsSlicer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DayTimeColsSlicer.prototype.sliceRange = function (range, dayRanges) {
        var segs = [];
        for (var col = 0; col < dayRanges.length; col += 1) {
            var segRange = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectRanges)(range, dayRanges[col]);
            if (segRange) {
                segs.push({
                    start: segRange.start,
                    end: segRange.end,
                    isStart: segRange.start.valueOf() === range.start.valueOf(),
                    isEnd: segRange.end.valueOf() === range.end.valueOf(),
                    col: col,
                });
            }
        }
        return segs;
    };
    return DayTimeColsSlicer;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Slicer));

var DayTimeCols = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(DayTimeCols, _super);
    function DayTimeCols() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buildDayRanges = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(buildDayRanges);
        _this.slicer = new DayTimeColsSlicer();
        _this.timeColsRef = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createRef)();
        return _this;
    }
    DayTimeCols.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, context = _a.context;
        var dateProfile = props.dateProfile, dayTableModel = props.dayTableModel;
        var isNowIndicator = context.options.nowIndicator;
        var dayRanges = this.buildDayRanges(dayTableModel, dateProfile, context.dateEnv);
        // give it the first row of cells
        // TODO: would move this further down hierarchy, but sliceNowDate needs it
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowTimer, { unit: isNowIndicator ? 'minute' : 'day' }, function (nowDate, todayRange) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(TimeCols, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({ ref: _this.timeColsRef }, _this.slicer.sliceProps(props, dateProfile, null, context, dayRanges), { forPrint: props.forPrint, axis: props.axis, dateProfile: dateProfile, slatMetas: props.slatMetas, slotDuration: props.slotDuration, cells: dayTableModel.cells[0], tableColGroupNode: props.tableColGroupNode, tableMinWidth: props.tableMinWidth, clientWidth: props.clientWidth, clientHeight: props.clientHeight, expandRows: props.expandRows, nowDate: nowDate, nowIndicatorSegs: isNowIndicator && _this.slicer.sliceNowDate(nowDate, context, dayRanges), todayRange: todayRange, onScrollTopRequest: props.onScrollTopRequest, onSlatCoords: props.onSlatCoords }))); }));
    };
    return DayTimeCols;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));
function buildDayRanges(dayTableModel, dateProfile, dateEnv) {
    var ranges = [];
    for (var _i = 0, _a = dayTableModel.headerDates; _i < _a.length; _i++) {
        var date = _a[_i];
        ranges.push({
            start: dateEnv.add(date, dateProfile.slotMinTime),
            end: dateEnv.add(date, dateProfile.slotMaxTime),
        });
    }
    return ranges;
}

// potential nice values for the slot-duration and interval-duration
// from largest to smallest
var STOCK_SUB_DURATIONS = [
    { hours: 1 },
    { minutes: 30 },
    { minutes: 15 },
    { seconds: 30 },
    { seconds: 15 },
];
function buildSlatMetas(slotMinTime, slotMaxTime, explicitLabelInterval, slotDuration, dateEnv) {
    var dayStart = new Date(0);
    var slatTime = slotMinTime;
    var slatIterator = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createDuration)(0);
    var labelInterval = explicitLabelInterval || computeLabelInterval(slotDuration);
    var metas = [];
    while ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs)(slatTime) < (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.asRoughMs)(slotMaxTime)) {
        var date = dateEnv.add(dayStart, slatTime);
        var isLabeled = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.wholeDivideDurations)(slatIterator, labelInterval) !== null;
        metas.push({
            date: date,
            time: slatTime,
            key: date.toISOString(),
            isoTimeStr: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatIsoTimeString)(date),
            isLabeled: isLabeled,
        });
        slatTime = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDurations)(slatTime, slotDuration);
        slatIterator = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDurations)(slatIterator, slotDuration);
    }
    return metas;
}
// Computes an automatic value for slotLabelInterval
function computeLabelInterval(slotDuration) {
    var i;
    var labelInterval;
    var slotsPerLabel;
    // find the smallest stock label interval that results in more than one slots-per-label
    for (i = STOCK_SUB_DURATIONS.length - 1; i >= 0; i -= 1) {
        labelInterval = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createDuration)(STOCK_SUB_DURATIONS[i]);
        slotsPerLabel = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.wholeDivideDurations)(labelInterval, slotDuration);
        if (slotsPerLabel !== null && slotsPerLabel > 1) {
            return labelInterval;
        }
    }
    return slotDuration; // fall back
}

var DayTimeColsView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__extends)(DayTimeColsView, _super);
    function DayTimeColsView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.buildTimeColsModel = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(buildTimeColsModel);
        _this.buildSlatMetas = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(buildSlatMetas);
        return _this;
    }
    DayTimeColsView.prototype.render = function () {
        var _this = this;
        var _a = this.context, options = _a.options, dateEnv = _a.dateEnv, dateProfileGenerator = _a.dateProfileGenerator;
        var props = this.props;
        var dateProfile = props.dateProfile;
        var dayTableModel = this.buildTimeColsModel(dateProfile, dateProfileGenerator);
        var splitProps = this.allDaySplitter.splitProps(props);
        var slatMetas = this.buildSlatMetas(dateProfile.slotMinTime, dateProfile.slotMaxTime, options.slotLabelInterval, options.slotDuration, dateEnv);
        var dayMinWidth = options.dayMinWidth;
        var hasAttachedAxis = !dayMinWidth;
        var hasDetachedAxis = dayMinWidth;
        var headerContent = options.dayHeaders && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayHeader, { dates: dayTableModel.headerDates, dateProfile: dateProfile, datesRepDistinctDays: true, renderIntro: hasAttachedAxis ? this.renderHeadAxis : null }));
        var allDayContent = (options.allDaySlot !== false) && (function (contentArg) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_daygrid__WEBPACK_IMPORTED_MODULE_2__.DayTable, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, splitProps.allDay, { dateProfile: dateProfile, dayTableModel: dayTableModel, nextDayThreshold: options.nextDayThreshold, tableMinWidth: contentArg.tableMinWidth, colGroupNode: contentArg.tableColGroupNode, renderRowIntro: hasAttachedAxis ? _this.renderTableRowAxis : null, showWeekNumbers: false, expandRows: false, headerAlignElRef: _this.headerElRef, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, forPrint: props.forPrint }, _this.getAllDayMaxEventProps()))); });
        var timeGridContent = function (contentArg) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(DayTimeCols, (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__assign)({}, splitProps.timed, { dayTableModel: dayTableModel, dateProfile: dateProfile, axis: hasAttachedAxis, slotDuration: options.slotDuration, slatMetas: slatMetas, forPrint: props.forPrint, tableColGroupNode: contentArg.tableColGroupNode, tableMinWidth: contentArg.tableMinWidth, clientWidth: contentArg.clientWidth, clientHeight: contentArg.clientHeight, onSlatCoords: _this.handleSlatCoords, expandRows: contentArg.expandRows, onScrollTopRequest: _this.handleScrollTopRequest }))); };
        return hasDetachedAxis
            ? this.renderHScrollLayout(headerContent, allDayContent, timeGridContent, dayTableModel.colCnt, dayMinWidth, slatMetas, this.state.slatCoords)
            : this.renderSimpleLayout(headerContent, allDayContent, timeGridContent);
    };
    return DayTimeColsView;
}(TimeColsView));
function buildTimeColsModel(dateProfile, dateProfileGenerator) {
    var daySeries = new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DaySeriesModel(dateProfile.renderRange, dateProfileGenerator);
    return new _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DayTableModel(daySeries, false);
}

var OPTION_REFINERS = {
    allDaySlot: Boolean,
};

var main = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createPlugin)({
    initialView: 'timeGridWeek',
    optionRefiners: OPTION_REFINERS,
    views: {
        timeGrid: {
            component: DayTimeColsView,
            usesMinMaxTime: true,
            allDaySlot: true,
            slotDuration: '00:30:00',
            slotEventOverlap: true,
        },
        timeGridDay: {
            type: 'timeGrid',
            duration: { days: 1 },
        },
        timeGridWeek: {
            type: 'timeGrid',
            duration: { weeks: 1 },
        },
    },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);

//# sourceMappingURL=main.js.map


/***/ }),
/* 324 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),
/* 325 */
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({ value: true }));

var es = {
  code: 'es',
  week: {
    dow: 1, // Monday is the first day of the week.
    doy: 4, // The week that contains Jan 4th is the first week of the year.
  },
  buttonText: {
    prev: 'Ant',
    next: 'Sig',
    today: 'Hoy',
    month: 'Mes',
    week: 'Semana',
    day: 'Día',
    list: 'Agenda',
  },
  weekText: 'Sm',
  allDayText: 'Todo el día',
  moreLinkText: 'más',
  noEventsText: 'No hay eventos para mostrar',
};

exports.default = es;


/***/ }),
/* 326 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "ListView": () => (/* binding */ ListView)
/* harmony export */ });
/* harmony import */ var _main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(327);
/* harmony import */ var _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(318);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(317);
/*!
FullCalendar v5.7.0
Docs & License: https://fullcalendar.io/
(c) 2021 Adam Shaw
*/





var ListViewHeaderRow = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ListViewHeaderRow, _super);
    function ListViewHeaderRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListViewHeaderRow.prototype.render = function () {
        var _a = this.props, dayDate = _a.dayDate, todayRange = _a.todayRange;
        var _b = this.context, theme = _b.theme, dateEnv = _b.dateEnv, options = _b.options, viewApi = _b.viewApi;
        var dayMeta = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getDateMeta)(dayDate, todayRange);
        // will ever be falsy?
        var text = options.listDayFormat ? dateEnv.format(dayDate, options.listDayFormat) : '';
        // will ever be falsy? also, BAD NAME "alt"
        var sideText = options.listDaySideFormat ? dateEnv.format(dayDate, options.listDaySideFormat) : '';
        var navLinkData = options.navLinks
            ? (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildNavLinkData)(dayDate)
            : null;
        var hookProps = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ date: dateEnv.toDate(dayDate), view: viewApi, text: text,
            sideText: sideText,
            navLinkData: navLinkData }, dayMeta);
        var classNames = ['fc-list-day'].concat((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getDayClassNames)(dayMeta, theme));
        // TODO: make a reusable HOC for dayHeader (used in daygrid/timegrid too)
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook, { hookProps: hookProps, classNames: options.dayHeaderClassNames, content: options.dayHeaderContent, defaultContent: renderInnerContent, didMount: options.dayHeaderDidMount, willUnmount: options.dayHeaderWillUnmount }, function (rootElRef, customClassNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { ref: rootElRef, className: classNames.concat(customClassNames).join(' '), "data-date": (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.formatDayString)(dayDate) },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("th", { colSpan: 3 },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: 'fc-list-day-cushion ' + theme.getClass('tableCellShaded'), ref: innerElRef }, innerContent)))); }));
    };
    return ListViewHeaderRow;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function renderInnerContent(props) {
    var navLinkAttrs = props.navLinkData // is there a type for this?
        ? { 'data-navlink': props.navLinkData, tabIndex: 0 }
        : {};
    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Fragment, null,
        props.text && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ className: "fc-list-day-text" }, navLinkAttrs), props.text)),
        props.sideText && ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ className: "fc-list-day-side-text" }, navLinkAttrs), props.sideText))));
}

var DEFAULT_TIME_FORMAT = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)({
    hour: 'numeric',
    minute: '2-digit',
    meridiem: 'short',
});
var ListViewEventRow = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ListViewEventRow, _super);
    function ListViewEventRow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ListViewEventRow.prototype.render = function () {
        var _a = this, props = _a.props, context = _a.context;
        var seg = props.seg;
        var timeFormat = context.options.eventTimeFormat || DEFAULT_TIME_FORMAT;
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.EventRoot, { seg: seg, timeText: "" // BAD. because of all-day content
            , disableDragging: true, disableResizing: true, defaultContent: renderEventInnerContent, isPast: props.isPast, isFuture: props.isFuture, isToday: props.isToday, isSelected: props.isSelected, isDragging: props.isDragging, isResizing: props.isResizing, isDateSelecting: props.isDateSelecting }, function (rootElRef, classNames, innerElRef, innerContent, hookProps) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tr", { className: ['fc-list-event', hookProps.event.url ? 'fc-event-forced-url' : ''].concat(classNames).join(' '), ref: rootElRef },
            buildTimeContent(seg, timeFormat, context),
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { className: "fc-list-event-graphic" },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("span", { className: "fc-list-event-dot", style: { borderColor: hookProps.borderColor || hookProps.backgroundColor } })),
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { className: "fc-list-event-title", ref: innerElRef }, innerContent))); }));
    };
    return ListViewEventRow;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.BaseComponent));
function renderEventInnerContent(props) {
    var event = props.event;
    var url = event.url;
    var anchorAttrs = url ? { href: url } : {};
    return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("a", (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({}, anchorAttrs), event.title));
}
function buildTimeContent(seg, timeFormat, context) {
    var options = context.options;
    if (options.displayEventTime !== false) {
        var eventDef = seg.eventRange.def;
        var eventInstance = seg.eventRange.instance;
        var doAllDay = false;
        var timeText = void 0;
        if (eventDef.allDay) {
            doAllDay = true;
        }
        else if ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.isMultiDayRange)(seg.eventRange.range)) { // TODO: use (!isStart || !isEnd) instead?
            if (seg.isStart) {
                timeText = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegTimeText)(seg, timeFormat, context, null, null, eventInstance.range.start, seg.end);
            }
            else if (seg.isEnd) {
                timeText = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegTimeText)(seg, timeFormat, context, null, null, seg.start, eventInstance.range.end);
            }
            else {
                doAllDay = true;
            }
        }
        else {
            timeText = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.buildSegTimeText)(seg, timeFormat, context);
        }
        if (doAllDay) {
            var hookProps = {
                text: context.options.allDayText,
                view: context.viewApi,
            };
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook, { hookProps: hookProps, classNames: options.allDayClassNames, content: options.allDayContent, defaultContent: renderAllDayInner, didMount: options.allDayDidMount, willUnmount: options.allDayWillUnmount }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { className: ['fc-list-event-time'].concat(classNames).join(' '), ref: rootElRef }, innerContent)); }));
        }
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("td", { className: "fc-list-event-time" }, timeText));
    }
    return null;
}
function renderAllDayInner(hookProps) {
    return hookProps.text;
}

/*
Responsible for the scroller, and forwarding event-related actions into the "grid".
*/
var ListView = /** @class */ (function (_super) {
    (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__extends)(ListView, _super);
    function ListView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.computeDateVars = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(computeDateVars);
        _this.eventStoreToSegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.memoize)(_this._eventStoreToSegs);
        _this.setRootEl = function (rootEl) {
            if (rootEl) {
                _this.context.registerInteractiveComponent(_this, {
                    el: rootEl,
                });
            }
            else {
                _this.context.unregisterInteractiveComponent(_this);
            }
        };
        return _this;
    }
    ListView.prototype.render = function () {
        var _this = this;
        var _a = this, props = _a.props, context = _a.context;
        var extraClassNames = [
            'fc-list',
            context.theme.getClass('table'),
            context.options.stickyHeaderDates !== false ? 'fc-list-sticky' : '',
        ];
        var _b = this.computeDateVars(props.dateProfile), dayDates = _b.dayDates, dayRanges = _b.dayRanges;
        var eventSegs = this.eventStoreToSegs(props.eventStore, props.eventUiBases, dayRanges);
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.ViewRoot, { viewSpec: context.viewSpec, elRef: this.setRootEl }, function (rootElRef, classNames) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { ref: rootElRef, className: extraClassNames.concat(classNames).join(' ') },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.Scroller, { liquid: !props.isHeightAuto, overflowX: props.isHeightAuto ? 'visible' : 'hidden', overflowY: props.isHeightAuto ? 'visible' : 'auto' }, eventSegs.length > 0 ?
                _this.renderSegList(eventSegs, dayDates) :
                _this.renderEmptyMessage()))); }));
    };
    ListView.prototype.renderEmptyMessage = function () {
        var _a = this.context, options = _a.options, viewApi = _a.viewApi;
        var hookProps = {
            text: options.noEventsText,
            view: viewApi,
        };
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.RenderHook, { hookProps: hookProps, classNames: options.noEventsClassNames, content: options.noEventsContent, defaultContent: renderNoEventsInner, didMount: options.noEventsDidMount, willUnmount: options.noEventsWillUnmount }, function (rootElRef, classNames, innerElRef, innerContent) { return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: ['fc-list-empty'].concat(classNames).join(' '), ref: rootElRef },
            (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("div", { className: "fc-list-empty-cushion", ref: innerElRef }, innerContent))); }));
    };
    ListView.prototype.renderSegList = function (allSegs, dayDates) {
        var _a = this.context, theme = _a.theme, options = _a.options;
        var segsByDay = groupSegsByDay(allSegs); // sparse array
        return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.NowTimer, { unit: "day" }, function (nowDate, todayRange) {
            var innerNodes = [];
            for (var dayIndex = 0; dayIndex < segsByDay.length; dayIndex += 1) {
                var daySegs = segsByDay[dayIndex];
                if (daySegs) { // sparse array, so might be undefined
                    var dayStr = dayDates[dayIndex].toISOString();
                    // append a day header
                    innerNodes.push((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(ListViewHeaderRow, { key: dayStr, dayDate: dayDates[dayIndex], todayRange: todayRange }));
                    daySegs = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sortEventSegs)(daySegs, options.eventOrder);
                    for (var _i = 0, daySegs_1 = daySegs; _i < daySegs_1.length; _i++) {
                        var seg = daySegs_1[_i];
                        innerNodes.push((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)(ListViewEventRow, (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__assign)({ key: dayStr + ':' + seg.eventRange.instance.instanceId /* are multiple segs for an instanceId */, seg: seg, isDragging: false, isResizing: false, isDateSelecting: false, isSelected: false }, (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.getSegMeta)(seg, todayRange, nowDate))));
                    }
                }
            }
            return ((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("table", { className: 'fc-list-table ' + theme.getClass('table') },
                (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createElement)("tbody", null, innerNodes)));
        }));
    };
    ListView.prototype._eventStoreToSegs = function (eventStore, eventUiBases, dayRanges) {
        return this.eventRangesToSegs((0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.sliceEventStore)(eventStore, eventUiBases, this.props.dateProfile.activeRange, this.context.options.nextDayThreshold).fg, dayRanges);
    };
    ListView.prototype.eventRangesToSegs = function (eventRanges, dayRanges) {
        var segs = [];
        for (var _i = 0, eventRanges_1 = eventRanges; _i < eventRanges_1.length; _i++) {
            var eventRange = eventRanges_1[_i];
            segs.push.apply(segs, this.eventRangeToSegs(eventRange, dayRanges));
        }
        return segs;
    };
    ListView.prototype.eventRangeToSegs = function (eventRange, dayRanges) {
        var dateEnv = this.context.dateEnv;
        var nextDayThreshold = this.context.options.nextDayThreshold;
        var range = eventRange.range;
        var allDay = eventRange.def.allDay;
        var dayIndex;
        var segRange;
        var seg;
        var segs = [];
        for (dayIndex = 0; dayIndex < dayRanges.length; dayIndex += 1) {
            segRange = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.intersectRanges)(range, dayRanges[dayIndex]);
            if (segRange) {
                seg = {
                    component: this,
                    eventRange: eventRange,
                    start: segRange.start,
                    end: segRange.end,
                    isStart: eventRange.isStart && segRange.start.valueOf() === range.start.valueOf(),
                    isEnd: eventRange.isEnd && segRange.end.valueOf() === range.end.valueOf(),
                    dayIndex: dayIndex,
                };
                segs.push(seg);
                // detect when range won't go fully into the next day,
                // and mutate the latest seg to the be the end.
                if (!seg.isEnd && !allDay &&
                    dayIndex + 1 < dayRanges.length &&
                    range.end <
                        dateEnv.add(dayRanges[dayIndex + 1].start, nextDayThreshold)) {
                    seg.end = range.end;
                    seg.isEnd = true;
                    break;
                }
            }
        }
        return segs;
    };
    return ListView;
}(_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.DateComponent));
function renderNoEventsInner(hookProps) {
    return hookProps.text;
}
function computeDateVars(dateProfile) {
    var dayStart = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.startOfDay)(dateProfile.renderRange.start);
    var viewEnd = dateProfile.renderRange.end;
    var dayDates = [];
    var dayRanges = [];
    while (dayStart < viewEnd) {
        dayDates.push(dayStart);
        dayRanges.push({
            start: dayStart,
            end: (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDays)(dayStart, 1),
        });
        dayStart = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.addDays)(dayStart, 1);
    }
    return { dayDates: dayDates, dayRanges: dayRanges };
}
// Returns a sparse array of arrays, segs grouped by their dayIndex
function groupSegsByDay(segs) {
    var segsByDay = []; // sparse array
    var i;
    var seg;
    for (i = 0; i < segs.length; i += 1) {
        seg = segs[i];
        (segsByDay[seg.dayIndex] || (segsByDay[seg.dayIndex] = []))
            .push(seg);
    }
    return segsByDay;
}

var OPTION_REFINERS = {
    listDayFormat: createFalsableFormatter,
    listDaySideFormat: createFalsableFormatter,
    noEventsClassNames: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.identity,
    noEventsContent: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.identity,
    noEventsDidMount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.identity,
    noEventsWillUnmount: _fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.identity,
};
function createFalsableFormatter(input) {
    return input === false ? null : (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createFormatter)(input);
}

var main = (0,_fullcalendar_common__WEBPACK_IMPORTED_MODULE_1__.createPlugin)({
    optionRefiners: OPTION_REFINERS,
    views: {
        list: {
            component: ListView,
            buttonTextKey: 'list',
            listDayFormat: { month: 'long', day: 'numeric', year: 'numeric' },
        },
        listDay: {
            type: 'list',
            duration: { days: 1 },
            listDayFormat: { weekday: 'long' },
        },
        listWeek: {
            type: 'list',
            duration: { weeks: 1 },
            listDayFormat: { weekday: 'long' },
            listDaySideFormat: { month: 'long', day: 'numeric', year: 'numeric' },
        },
        listMonth: {
            type: 'list',
            duration: { month: 1 },
            listDaySideFormat: { weekday: 'long' },
        },
        listYear: {
            type: 'list',
            duration: { year: 1 },
            listDaySideFormat: { weekday: 'long' },
        },
    },
});

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (main);

//# sourceMappingURL=main.js.map


/***/ }),
/* 327 */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";


__webpack_require__(2);

var _global = _interopRequireDefault(__webpack_require__(290));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

if (_global["default"]._babelPolyfill && typeof console !== "undefined" && console.warn) {
  console.warn("@babel/polyfill is loaded more than once on this page. This is probably not desirable/intended " + "and may have consequences if different versions of the polyfills are applied sequentially. " + "If you do need to load the polyfill more than once, use @babel/polyfill/noConflict " + "instead to bypass the warning.");
}

_global["default"]._babelPolyfill = true;
})();

// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginForm": () => (/* reexport safe */ _js_LoginForm_js__WEBPACK_IMPORTED_MODULE_0__.LoginForm),
/* harmony export */   "Register": () => (/* reexport safe */ _js_RegisterForm_js__WEBPACK_IMPORTED_MODULE_1__.Register),
/* harmony export */   "Schedule": () => (/* reexport safe */ _js_Schedule_js__WEBPACK_IMPORTED_MODULE_2__.Schedule)
/* harmony export */ });
/* harmony import */ var _js_LoginForm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(309);
/* harmony import */ var _js_RegisterForm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(310);
/* harmony import */ var _js_Schedule_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(311);



})();

/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map