import {Image, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import React from 'react';
import {colors, fonts} from '@utils/Style';
import {Logo} from '@asset/img';

const Splash = () => {
  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor={'transparent'} translucent barStyle="dark-content" />
      <Image source={Logo} style={styles.imgSty} />
      <Text style={styles.title}>
        Mediflash <Text style={styles.subtitle}>Personal</Text>
      </Text>
    </SafeAreaView>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: colors.white},
  title: {fontSize: 26, color: colors.primary, fontFamily: fonts.Medium},
  subtitle: {fontSize: 26, color: colors.black, fontFamily: fonts.Light},
  imgSty: {height: '20%', width: '28%'},
});
