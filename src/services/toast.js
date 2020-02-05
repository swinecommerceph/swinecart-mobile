import RToast from 'react-native-root-toast';
import { computeLineHeight } from 'utils';
import { colors, sizes } from 'constants/theme';

class Toast {

  show(message, callback) {
    RToast.show(message, {
      duration: 1500,
      position: 75,
      shadow: false,
      animation: false,
      hideOnPress: false,
      delay: 0,
      containerStyle: {
        borderRadius: 5,
        backgroundColor: colors.black1,
        padding: sizes.padding / 2
      },
      textStyle: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 14,
        lineHeight: computeLineHeight(14),
      },
      onHidden: () => {
        callback &&
        callback();
      }
    });
  }
}


export default new Toast();