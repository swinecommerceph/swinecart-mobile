import RToast from 'react-native-root-toast';
import { computeLineHeight } from 'utils';
import { colors, sizes } from 'constants/theme';

class Toast {

  show(message, callback) {
    RToast.show(message, {
      duration: 1500,
      position: 25,
      shadow: false,
      animation: false,
      hideOnPress: true,
      delay: 0,
      containerStyle: {
        borderRadius: 5,
        backgroundColor: colors.black1,
        padding: sizes.padding / 2
      },
      textStyle: {
        fontFamily: 'OpenSans-SemiBold',
        fontSize: 12,
        lineHeight: computeLineHeight(12),
      },
      onHidden: () => {
        callback &&
        callback();
      }
    });
  }
}


export default new Toast();