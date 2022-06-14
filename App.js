/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  useColorScheme,
  View,
} from 'react-native';
import LottieView from 'lottie-react-native';

const Lotties = () => {
  return (
    <View>
      <LottieView
        autoPlay
        loop
        source={require('./animations/earth_loading.json')}
        style={styles.animation1}
      />
      <LottieView
        autoPlay
        loop
        source={require('./animations/success.json')}
        style={styles.animation2}
      />
      <LottieView
        autoPlay
        loop
        source={require('./animations/3_nfc_scan')}
        style={styles.animation3}
      />
    </View>
  );
};

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{backgroundColor: '#996600', flex: 1}}>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <Lotties />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  animation1: {
    // width: '80%',
    width: '80%',
    alignSelf: 'center',
  },
  animation2: {
    width: '80%',
    alignSelf: 'center',
  },
  animation3: {
    width: '80%',
    alignSelf: 'center',
    // overflow: 'visible',
  },
});

export default App;
