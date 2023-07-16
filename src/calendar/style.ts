import {StyleSheet} from 'react-native';
import * as defaultStyle from '../style';
import {Theme} from '../types';

// TODO: change week height size in month view
export default function getStyle(theme: Theme = {}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    container: {
      paddingLeft: 5,
      paddingRight: 5,
      backgroundColor: appStyle.calendarBackground,
      overflow: 'visible'
    },
    dayContainer: {
      flex: 1,
      alignItems: 'center',
      borderWidth: 0.4,
      borderColor: '#F36F67',
      backgroundColor: 'yellow',
      overflow: 'visible'
    },
    emptyDayContainer: {
      flex: 1
    },
    monthView: {
      backgroundColor: appStyle.calendarBackground
    },
    week: {
      borderWidth: 0.4,
      borderColor: '#F36F67',
      minHeight: 100,
      // backgroundColor: 'red',
      // marginVertical: appStyle.weekVerticalMargin,
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    ...(theme['stylesheet.calendar.main'] || {})
  });
}
