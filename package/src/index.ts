import {Platform} from 'react-native';

const RNCSlider =
  Platform.OS === 'ios'
    ? require('./Slider').default
    : require('./android/Slider').default;

export default RNCSlider;
