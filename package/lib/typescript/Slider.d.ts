import React from 'react';
import { ViewProps, ViewStyle, ColorValue, StyleProp } from 'react-native';
declare const SliderWithRef: React.ForwardRefExoticComponent<ViewProps & Readonly<{
    /**
     * Assigns a single image for the track. Only static images are supported.
     * The center pixel of the image will be stretched to fill the track.
     */
    trackImage?: any;
    /**
     * Assigns a minimum track image. Only static images are supported. The
     * rightmost pixel of the image will be stretched to fill the track.
     */
    minimumTrackImage?: any;
    /**
     * Assigns a maximum track image. Only static images are supported. The
     * leftmost pixel of the image will be stretched to fill the track.
     */
    maximumTrackImage?: any;
    /**
     * Permits tapping on the slider track to set the thumb position.
     * Defaults to false on iOS. No effect on Android or Windows.
     */
    tapToSeek?: boolean | undefined;
}> & Readonly<{
    /**
     * If true the slider will be inverted.
     * Default value is false.
     */
    vertical?: boolean | undefined;
}> & Readonly<{
    /**
     * Used to style and layout the `Slider`.  See `StyleSheet.js` and
     * `DeprecatedViewStylePropTypes.js` for more info.
     */
    style?: StyleProp<ViewStyle>;
    /**
     * Write-only property representing the value of the slider.
     * Can be used to programmatically control the position of the thumb.
     * Entered once at the beginning still acts as an initial value.
     * The value should be between minimumValue and maximumValue,
     * which default to 0 and 1 respectively.
     * Default value is 0.
     *
     * This is not a controlled component, you don't need to update the
     * value during dragging.
     */
    value?: number | undefined;
    /**
     * Step value of the slider. The value should be
     * between 0 and (maximumValue - minimumValue).
     * Default value is 0.
     */
    step?: number | undefined;
    /**
     * Initial minimum value of the slider. Default value is 0.
     */
    minimumValue?: number | undefined;
    /**
     * Initial maximum value of the slider. Default value is 1.
     */
    maximumValue?: number | undefined;
    /**
     * The lower limit value of the slider. The user won't be able to slide below this limit.
     */
    lowerLimit?: number | undefined;
    /**
     * The upper limit value of the slider. The user won't be able to slide above this limit.
     */
    upperLimit?: number | undefined;
    /**
     * The color used for the track to the left of the button.
     * Overrides the default blue gradient image on iOS.
     */
    minimumTrackTintColor?: ColorValue | undefined;
    /**
     * The color used for the track to the right of the button.
     * Overrides the default blue gradient image on iOS.
     */
    maximumTrackTintColor?: ColorValue | undefined;
    /**
     * The color used to tint the default thumb images on iOS, or the
     * color of the foreground switch grip on Android.
     */
    thumbTintColor?: ColorValue | undefined;
    /**
     * If true the user won't be able to move the slider.
     * Default value is false.
     */
    disabled?: boolean | undefined;
    /**
     * Callback continuously called while the user is dragging the slider.
     */
    onValueChange?: ((value: number) => void) | undefined;
    /**
     * Callback that is called when the user touches the slider,
     * regardless if the value has changed. The current value is passed
     * as an argument to the callback handler.
     */
    onSlidingStart?: ((value: number) => void) | undefined;
    /**
     * Callback that is called when the user releases the slider,
     * regardless if the value has changed. The current value is passed
     * as an argument to the callback handler.
     */
    onSlidingComplete?: ((value: number) => void) | undefined;
    /**
     * Used to locate this view in UI automation tests.
     */
    testID?: string | undefined;
    /**
     * Sets an image for the thumb. Only static images are supported.
     */
    thumbImage?: any;
    /**
     * If true the slider will be inverted.
     * Default value is false.
     */
    inverted?: boolean | undefined;
    /**
     * A string of one or more words to be announced by the screen reader.
     * Otherwise, it will announce the value as a percentage.
     * Requires passing a value to `accessibilityIncrements` to work correctly.
     * Should be a plural word, as singular units will be handled.
     */
    accessibilityUnits?: string | undefined;
    /**
     * An array of values that represent the different increments displayed
     * by the slider. All the values passed into this prop must be strings.
     * Requires passing a value to `accessibilityUnits` to work correctly.
     * The number of elements must be the same as `maximumValue`.
     */
    accessibilityIncrements?: string[] | undefined;
}> & React.RefAttributes<import("react-native").HostComponent<import("./RNCSliderNativeComponent").NativeProps>>>;
export default SliderWithRef;
