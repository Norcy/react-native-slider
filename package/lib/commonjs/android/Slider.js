/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * 
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _react = _interopRequireDefault(require("react"));
var _reactNative = require("react-native");
var _index = _interopRequireDefault(require("./index"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
//@ts-ignore

//@ts-ignore

//@ts-ignore

//@ts-ignore

/**
 * A component used to select a single value from a range of values.
 *
 * ### Usage
 *
 * The example below shows how to use `Slider` to change
 * a value used by `Text`. The value is stored using
 * the state of the root component (`App`). The same component
 * subscribes to the `onValueChange`  of `Slider` and changes
 * the value using `setState`.
 *
 *```
 * import React from 'react';
 * import { StyleSheet, Text, View, Slider } from 'react-native';
 *
 * export default class App extends React.Component {
 *   constructor(props) {
 *     super(props);
 *     this.state = {
 *       value: 50
 *     }
 *   }
 *
 *   change(value) {
 *     this.setState(() => {
 *       return {
 *         value: parseFloat(value)
 *       };
 *     });
 *   }
 *
 *   render() {
 *     const {value} = this.state;
 *     return (
 *       <View style={styles.container}>
 *         <Text style={styles.text}>{String(value)}</Text>
 *         <Slider
 *           step={1}
 *           maximumValue={100}
 *           onValueChange={this.change.bind(this)}
 *           value={value} />
 *       </View>
 *     );
 *   }
 * }
 *
 * const styles = StyleSheet.create({
 *   container: {
 *     flex: 1,
 *     flexDirection: 'column',
 *     justifyContent: 'center'
 *   },
 *   text: {
 *     fontSize: 50,
 *     textAlign: 'center'
 *   }
 * });
 *```
 *
 */
const SliderComponent = (props, forwardedRef) => {
  var _props$accessibilityS;
  const style = _reactNative.StyleSheet.compose(styles.slider, props.style);
  const {
    onValueChange,
    onSlidingStart,
    onSlidingComplete,
    onAccessibilityAction,
    ...localProps
  } = props;
  const onValueChangeEvent = onValueChange ? event => {
    onValueChange(event.nativeEvent.value);
  } : null;
  const _disabled = typeof props.disabled === 'boolean' ? props.disabled : ((_props$accessibilityS = props.accessibilityState) === null || _props$accessibilityS === void 0 ? void 0 : _props$accessibilityS.disabled) === true;
  const _accessibilityState = typeof props.disabled === 'boolean' ? {
    ...props.accessibilityState,
    disabled: props.disabled
  } : props.accessibilityState;
  const onChangeEvent = onValueChangeEvent;
  const onSlidingStartEvent = onSlidingStart ? event => {
    onSlidingStart(event.nativeEvent.value);
  } : null;
  const onSlidingCompleteEvent = onSlidingComplete ? event => {
    onSlidingComplete(event.nativeEvent.value);
  } : null;
  return /*#__PURE__*/_react.default.createElement(_index.default, _extends({}, localProps, {
    accessibilityState: _accessibilityState,
    thumbImage: _reactNative.Platform.OS === 'web' ? props.thumbImage : _reactNative.Image.resolveAssetSource(props.thumbImage),
    ref: forwardedRef,
    style: style,
    onChange: onChangeEvent,
    onRNCSliderSlidingStart: onSlidingStartEvent,
    onRNCSliderSlidingComplete: onSlidingCompleteEvent,
    onRNCSliderValueChange: onValueChangeEvent,
    enabled: !_disabled,
    disabled: _disabled,
    onStartShouldSetResponder: () => true,
    onResponderTerminationRequest: () => false
  }));
};
const SliderWithRef = /*#__PURE__*/_react.default.forwardRef(SliderComponent);

/* $FlowFixMe(>=0.89.0 site=react_native_fb) This comment suppresses an error
 * found when Flow v0.89 was deployed. To see the error, delete this comment
 * and run Flow. */

SliderWithRef.defaultProps = {
  value: 0,
  minimumValue: 0,
  maximumValue: 1,
  step: 0,
  inverted: false,
  tapToSeek: false
};
let styles = _reactNative.StyleSheet.create(_reactNative.Platform.OS === 'ios' ? {
  slider: {
    height: 40
  }
} : {
  slider: {}
});
var _default = exports.default = SliderWithRef;
//# sourceMappingURL=Slider.js.map