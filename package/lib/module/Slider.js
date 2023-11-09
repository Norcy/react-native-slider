function _extends() { _extends = Object.assign ? Object.assign.bind() : function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }
import React from 'react';
import { Image, Platform, StyleSheet } from 'react-native';
import RCTSliderNativeComponent from './RNCSliderNativeComponent';
//@ts-ignore

const LIMIT_MIN_VALUE = Number.MIN_SAFE_INTEGER;
const LIMIT_MAX_VALUE = Number.MAX_SAFE_INTEGER;
const SliderComponent = (props, forwardedRef) => {
  var _props$accessibilityS;
  const style = StyleSheet.compose(props.style, styles.slider);
  const {
    onValueChange,
    onSlidingStart,
    onSlidingComplete,
    onAccessibilityAction,
    ...localProps
  } = props;
  const onValueChangeEvent = onValueChange ? event => {
    onValueChange(event.nativeEvent.value);
  } : () => {};
  const _disabled = typeof props.disabled === 'boolean' ? props.disabled : ((_props$accessibilityS = props.accessibilityState) === null || _props$accessibilityS === void 0 ? void 0 : _props$accessibilityS.disabled) === true;
  const _accessibilityState = typeof props.disabled === 'boolean' ? {
    ...props.accessibilityState,
    disabled: props.disabled
  } : props.accessibilityState;
  const onSlidingStartEvent = onSlidingStart ? event => {
    onSlidingStart(event.nativeEvent.value);
  } : () => {};
  const onSlidingCompleteEvent = onSlidingComplete ? event => {
    onSlidingComplete(event.nativeEvent.value);
  } : () => {};
  const onAccessibilityActionEvent = onAccessibilityAction ? event => {
    onAccessibilityAction(event);
  } : () => {};
  const lowerLimit = !!localProps.lowerLimit || localProps.lowerLimit === 0 ? localProps.lowerLimit : LIMIT_MIN_VALUE;
  const upperLimit = !!localProps.upperLimit || localProps.upperLimit === 0 ? localProps.upperLimit : LIMIT_MAX_VALUE;
  return /*#__PURE__*/React.createElement(RCTSliderNativeComponent, _extends({}, localProps, {
    lowerLimit: lowerLimit,
    upperLimit: upperLimit,
    accessibilityState: _accessibilityState,
    thumbImage: Platform.OS === 'web' ? props.thumbImage : props.thumbImage ? Image.resolveAssetSource(props.thumbImage) : undefined
    // ref={forwardedRef}
    ,
    style: style,
    onChange: onValueChangeEvent,
    onRNCSliderSlidingStart: onSlidingStartEvent,
    onRNCSliderSlidingComplete: onSlidingCompleteEvent,
    onRNCSliderValueChange: onValueChangeEvent,
    disabled: _disabled,
    onStartShouldSetResponder: () => true,
    onResponderTerminationRequest: () => false
  }));
};
const SliderWithRef = /*#__PURE__*/React.forwardRef(SliderComponent);
SliderWithRef.defaultProps = {
  value: 0,
  minimumValue: 0,
  maximumValue: 1,
  step: 0,
  inverted: false,
  tapToSeek: false,
  lowerLimit: LIMIT_MIN_VALUE,
  upperLimit: LIMIT_MAX_VALUE
};
let styles = StyleSheet.create(Platform.OS === 'ios' ? {
  slider: {
    height: 40
  }
} : {
  slider: {}
});
export default SliderWithRef;
//# sourceMappingURL=Slider.js.map