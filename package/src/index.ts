import {Platform} from 'react-native';
import SlideriOS from './Slider';
import SliderAndroid from './android/Slider';

const RNCSlider = Platform.OS === 'ios' ? SlideriOS : SliderAndroid;

export default RNCSlider;
