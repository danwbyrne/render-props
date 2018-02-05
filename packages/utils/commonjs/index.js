"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "perf", {
  enumerable: true,
  get: function get() {
    return _perf2.default;
  }
});
Object.defineProperty(exports, "requestAnimationFrame", {
  enumerable: true,
  get: function get() {
    return _requestAnimationFrame2.default;
  }
});
Object.defineProperty(exports, "cancelAnimationFrame", {
  enumerable: true,
  get: function get() {
    return _requestAnimationFrame2.cancelAnimationFrame;
  }
});
Object.defineProperty(exports, "requestInterval", {
  enumerable: true,
  get: function get() {
    return _requestInterval2.default;
  }
});
Object.defineProperty(exports, "clearRequestInterval", {
  enumerable: true,
  get: function get() {
    return _requestInterval2.clearRequestInterval;
  }
});
Object.defineProperty(exports, "requestTimeout", {
  enumerable: true,
  get: function get() {
    return _requestTimeout2.default;
  }
});
Object.defineProperty(exports, "clearRequestTimeout", {
  enumerable: true,
  get: function get() {
    return _requestTimeout2.clearRequestTimeout;
  }
});

var _perf2 = _interopRequireDefault(require("./perf"));

var _requestAnimationFrame2 = _interopRequireWildcard(require("./requestAnimationFrame"));

var _requestInterval2 = _interopRequireWildcard(require("./requestInterval"));

var _requestTimeout2 = _interopRequireWildcard(require("./requestTimeout"));