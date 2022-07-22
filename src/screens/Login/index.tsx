import { Banner } from '@asset/img';
import { Button, Gap } from '@component/index';
import { colors, fonts } from '@utils/Style';
import React from 'react';
import { Image, KeyboardAvoidingView, Platform, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TextInput, View } from 'react-native';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

const Login: React.FC = () => {

  const [number, setNumber] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <SafeAreaView style={styles.page}>
      <StatusBar backgroundColor={'transparent'} translucent barStyle="dark-content" />
      <View style={styles.imgCover}>
        <Image source={Banner} style={styles.bannerSty} resizeMode={'stretch'} />
      </View>
      <ScrollView>
        <KeyboardAvoidingView behavior='padding'>
          <View style={styles.content}>
            <View style={styles.headerTxt}>
              <Text style={styles.header}>Mediflash Personal</Text>
              <Text style={styles.subheader}>Entry yout Card Number end Password to Login</Text>
            </View>
            <View style={styles.inputContent}>
              <View>
                <Text style={styles.label}>Card Number</Text>
                <TextInput placeholder='Type your card number' style={styles.txtInpt} value={number} onChangeText={(val) => setNumber(val)} />
              </View>
              <Gap height={2} />
              <View>
                <Text style={styles.label}>Password</Text>
                <TextInput placeholder='Type your password' style={styles.txtInpt} value={password} secureTextEntry
                  onChangeText={(val) => setPassword(val)} />
              </View>
              <Gap height={4} />
              <Button title='Login' enable={number == '' && password == '' ? false : true} />
              <Gap height={4} />
              <Text style={styles.copyright}>copyright © 2022 Mediaflash Personal</Text>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: colors.white },
  imgCover: { height: hp(30) },
  bannerSty: { height: '100%', width: '100%' },
  content: { flex: 1 },
  headerTxt: { height: hp(15), alignItems: 'center', justifyContent: 'center' },
  header: { fontSize: 18, fontFamily: fonts.Medium, color: colors.black },
  subheader: { fontSize: 13, fontFamily: fonts.Regular, color: colors.grey },
  inputContent: { height: '80%', paddingHorizontal: 16 },
  label: { fontFamily: fonts.Medium, fontSize: 16, color: colors.black },
  txtInpt: {
    backgroundColor: colors.landingBackground, paddingHorizontal: 8, borderRadius: 6, marginTop: 5,
    fontSize: 14, fontFamily: fonts.Regular, paddingVertical: 14, elevation: 1
  },
  copyright: { textAlign: 'center', fontFamily: fonts.Medium, fontSize: 13 }
});
