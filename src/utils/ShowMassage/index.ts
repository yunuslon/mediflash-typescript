import {showMessage as showToast} from 'react-native-flash-message';
import {colors} from '../Style';

export const showMessage = (message: string, type: string) => {
  showToast({
    message: message,
    type: type === 'success' ? 'success' : 'danger',
    backgroundColor: type === 'success' ? colors.primary : colors.red,
  });
};
