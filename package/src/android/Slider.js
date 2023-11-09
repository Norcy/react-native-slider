/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 * @flow
 */
'use strict';
import React from 'react';
import { Image, Platform, StyleSheet, } from 'react-native';
import RCTSliderNativeComponent from './index';
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
    const style = StyleSheet.compose(styles.slider, props.style);
    const { onValueChange, onSlidingStart, onSlidingComplete, onAccessibilityAction, ...localProps } = props;
    const onValueChangeEvent = onValueChange
        ? (event) => {
            onValueChange(event.nativeEvent.value);
        }
        : null;
    const _disabled = typeof props.disabled === 'boolean'
        ? props.disabled
        : props.accessibilityState?.disabled === true;
    const _accessibilityState = typeof props.disabled === 'boolean'
        ? { ...props.accessibilityState, disabled: props.disabled }
        : props.accessibilityState;
    const onChangeEvent = onValueChangeEvent;
    const onSlidingStartEvent = onSlidingStart
        ? (event) => {
            onSlidingStart(event.nativeEvent.value);
        }
        : null;
    const onSlidingCompleteEvent = onSlidingComplete
        ? (event) => {
            onSlidingComplete(event.nativeEvent.value);
        }
        : null;
    return (React.createElement(RCTSliderNativeComponent, { ...localProps, accessibilityState: _accessibilityState, thumbImage: Platform.OS === 'web'
            ? props.thumbImage
            : Image.resolveAssetSource(props.thumbImage), ref: forwardedRef, style: style, onChange: onChangeEvent, onRNCSliderSlidingStart: onSlidingStartEvent, onRNCSliderSlidingComplete: onSlidingCompleteEvent, onRNCSliderValueChange: onValueChangeEvent, enabled: !_disabled, disabled: _disabled, onStartShouldSetResponder: () => true, onResponderTerminationRequest: () => false }));
};
const SliderWithRef = React.forwardRef(SliderComponent);
/* $FlowFixMe(>=0.89.0 site=react_native_fb) This comment suppresses an error
 * found when Flow v0.89 was deployed. To see the error, delete this comment
 * and run Flow. */
SliderWithRef.defaultProps = {
    value: 0,
    minimumValue: 0,
    maximumValue: 1,
    step: 0,
    inverted: false,
    tapToSeek: false,
};
let styles = StyleSheet.create(Platform.OS === 'ios' ? { slider: { height: 40 } } : { slider: {} });
export default SliderWithRef;
