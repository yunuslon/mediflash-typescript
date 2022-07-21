import React from 'react';
import {StyleSheet, View} from 'react-native';

import NavigationRoot from '@nav/index';
import {Provider, useSelector} from 'react-redux';
import store from '@redux/store';
import {GlobalState} from '@redux/staterReducer/global';

import FlashMessage from 'react-native-flash-message';

import {Loading} from '@component/index';

interface AppState {
  globalReducer: GlobalState;
}

const MainApp = () => {
  const {isLoading} = useSelector((state: AppState) => state.globalReducer);

  return (
    <View style={styles.page}>
      <FlashMessage position="top" />
      <NavigationRoot />
      {isLoading && <Loading />}
    </View>
  );
};

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
});
