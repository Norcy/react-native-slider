import { Platform } from 'react-native';
let RNCSlider = null;
if (Platform.OS == 'ios') {
    RNCSlider = require('./RNCSliderNativeComponent').default;
}
else {
    RNCSlider = require('./android/index').default;
}
export default RNCSlider;
