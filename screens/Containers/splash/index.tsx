import React from 'react';
import {View, Image, StatusBar, StyleSheet, Text} from 'react-native';

export const Splash = () => {
  return (
    <View style={styles.SplashScreen_RootView}>
      <StatusBar
        hidden={true}
        backgroundColor="transparent"
        translucent={true}
      />
      <Text style={styles.SplashScreen_ChildView}>
        Fitter, Healthier, Happier
      </Text>
     
    </View>
  );
};
const styles = StyleSheet.create({
  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'white',
  },

  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#203354',
    fontSize: 25,
    alignContent: 'center',
    alignSelf: 'center',
  },
});
