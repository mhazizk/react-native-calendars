import {StyleSheet} from 'react-native';
import * as defaultStyle from '../../style';
import {Theme} from '../../../types';

export default function styleConstructor(theme: Theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    dots: {
      flexDirection: 'row'
    },
    periods: {
      alignSelf: 'stretch'
    },
    /**
     * TODO:
     * For the monthly calendar, we need to do the following:
     * 1. find grid-style and modify the height
     * 2. add client name to be included inside of the multi-line period view
     * 3. auto generate color for the period-bar or read from the given props outside the package
     * 4. hide or move the header section so it only shows the monthly calendar
     *
     * For the weekly calendar, we need to do the following:
     *
     * For the daily calendar, we need to do the following:
     *
     */
    // TODO: below is used in multi-period calendar
    period: {
      height: 16, //TODO: change this height to accomodate client name
      paddingRight: 10,
      // borderColor: appStyle.dotColor,
      marginVertical: 1,
      backgroundColor: appStyle.dotColor,
      zIndex: 10000
    },
    startingDay: {
      borderTopLeftRadius: 2,
      borderBottomLeftRadius: 2,
      marginLeft: 4
    },
    endingDay: {
      borderTopRightRadius: 2,
      borderBottomRightRadius: 2,
      marginRight: 4
    },
    ...(theme['stylesheet.marking'] || {})
  });
}
