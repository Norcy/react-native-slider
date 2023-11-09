import {Platform} from 'react-native';
import RNCSliderNativeComponent from './RNCSliderNativeComponent';
import AndroidRNCSliderNativeComponent from './android/RNCSliderNativeComponent';
import {SliderProps} from './Slider';

const RNCSlider: SliderProps =
  Platform.OS == 'ios'
    ? RNCSliderNativeComponent
    : AndroidRNCSliderNativeComponent;

export default RNCSlider;
