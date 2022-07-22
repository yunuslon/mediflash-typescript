import React from 'react';
import {View, StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {SafeAreaView} from 'react-native-safe-area-context';
// import {colors, fonts} from '@utils/index';
// import {BarIndicator} from 'react-native-indicators';
const Loading: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.wrapper}>
        {/* <BarIndicator color={colors.primary} size={wp(10)} count={3} /> */}
      </View>
    </SafeAreaView>
  );
};

export default Loading;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
    width: wp(100),
    height: hp(110),
  },
  wrapper: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: wp(25),
    height: wp(25),
    borderRadius: wp(4),
  },
  text: {
    fontSize: 18,
    // fontFamily: fonts.medium,
    marginBottom: wp(2),
    // color: colors.text.primary,
    textAlign: 'center',
  },
});
