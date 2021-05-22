import React, {Component} from 'react';
import {
  Platform,
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StatusBar,
  TextInput,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {Splash} from '../splash';
import {
  responsiveHeight,
  responsiveWidth,
  responsiveFontSize,
} from 'react-native-responsive-dimensions'
import ButtomLogin from '../Components/ButtonLogin/index'
import {styles} from './style'

export const Login = () => {
  return (
    <View style={styles.MainContainer}>
      <SafeAreaView style={styles.MainContainer}>
        <View style={{flex: 0.9}}>
          <StatusBar
            hidden={true}
            backgroundColor="transparent"
            translucent={true}
          />
          <Text
            style={styles.textFitClub}>
            Fit Club
          </Text>
          <Text
            style={styles.textFHH}>
            Fitter, Healthier, Happier
          </Text>
          <Text
            style={styles.textUserLogin}>
            User Login
          </Text>

          <TextInput
            style={styles._numberInput}
            blurOnSubmit
            placeholder="Username"
            placeholderTextColor="lightgray"></TextInput>
          <TextInput
            style={styles._passwordInput}
            blurOnSubmit
            secureTextEntry={true} 
            placeholder="Password"
            placeholderTextColor="lightgray"></TextInput>
          <ButtomLogin name='LOGIN'></ButtomLogin>
        </View>
        <View style={{flex: 0.1}}>
          <Text
            style={styles.textDHA}>
            Don't have account?
          </Text>
          <Text
            style={styles.textSignup}>
            SIGNUP
          </Text>
        </View>
      </SafeAreaView>
    </View>
  );
};

