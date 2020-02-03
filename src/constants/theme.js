import { light } from '@eva-design/eva';

const colors = {

  ...light,

  'color-primary-100': '#C6F7DF',
  'color-primary-200': '#90F0C9',
  'color-primary-300': '#54D2AB',
  'color-primary-400': '#29A48A',
  'color-primary-500': '#00695C',
  'color-primary-600': '#005A57',
  'color-primary-700': '#00464B',
  'color-primary-800': '#00333C',
  'color-primary-900': '#002632',
  'color-success-100': '#CBFBD0',
  'color-success-200': '#98F8AD',
  'color-success-300': '#63EA8D',
  'color-success-400': '#3BD57B',
  'color-success-500': '#07BA63',
  'color-success-600': '#059F64',
  'color-success-700': '#038560',
  'color-success-800': '#026B58',
  'color-success-900': '#015951',
  'color-info-100': '#CDE9FE',
  'color-info-200': '#9CCFFD',
  'color-info-300': '#6AB0FA',
  'color-info-400': '#4593F5',
  'color-info-500': '#0B67EF',
  'color-info-600': '#084FCD',
  'color-info-700': '#053BAC',
  'color-info-800': '#03298A',
  'color-info-900': '#021D72',
  'color-warning-100': '#FFFBCF',
  'color-warning-200': '#FFF79F',
  'color-warning-300': '#FFF16F',
  'color-warning-400': '#FFEC4B',
  'color-warning-500': '#FFE30F',
  'color-warning-600': '#DBC00A',
  'color-warning-700': '#B79E07',
  'color-warning-800': '#937D04',
  'color-warning-900': '#7A6602',
  'color-danger-100': '#FDD8D0',
  'color-danger-200': '#FCAAA3',
  'color-danger-300': '#F67475',
  'color-danger-400': '#ED5061',
  'color-danger-500': '#E21B43',
  'color-danger-600': '#C21347',
  'color-danger-700': '#A20D47',
  'color-danger-800': '#830844',
  'color-danger-900': '#6C0541',

  primary: '#00695C',

  danger: '#E21B43',

  'white1': '#FFFFFF',
  'white2': '#FAFAFA',

  'gray1': '#F2F2F2',
  'gray2': '#F7F9FC',
  'gray3': '#6F6F6F',
  'gray4': '#CFCFCF',
  'gray5': '#8F9BB3',

  black1: '#000000',


};

const textStyles = {
  headline: {
    fontFamily: 'OpenSans-Bold',
    fontWeight: 'normal',
    fontSize: 18,
    lineHeight: 23,
    letterSpacing: 1
  },
  subtitle: {
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: 'normal',
    fontSize: 16,
    letterSpacing: 0.5
  },
  paragraph: {
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: 'normal',
    fontSize: 14
  },
  caption1: {
    fontFamily: 'OpenSans-Regular',
    fontWeight: 'normal'
  },
  caption2: {
    fontFamily: 'OpenSans-SemiBold',
    fontWeight: 'normal',
  },
  label: {
    fontFamily: 'OpenSans-Bold',
    fontWeight: 'normal',
    fontSize: 12
  },
  button: {
    fontFamily: 'OpenSans-Regular',
    letterSpacing: 1,
  },
};

const sizes = {
  margin: 16,
  padding: 16
};

const shadows = {
  shadow1: {
    shadowColor: colors.gray2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 2,
  },
  shadow2: {
    shadowColor: colors.gray2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  },
  shadow3: {
    shadowColor: colors.gray2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.00,

    elevation: 1,
  }
}


export {
  colors,
  sizes,
  shadows,
  textStyles,
}