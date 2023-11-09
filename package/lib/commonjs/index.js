"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _reactNative = require("react-native");
let RNCSlider = null;
if (_reactNative.Platform.OS == 'ios') {
  RNCSlider = require('./RNCSliderNativeComponent').default;
} else {
  RNCSlider = require('./android/index').default;
}
var _default = exports.default = RNCSlider;
//# sourceMappingURL=index.js.map