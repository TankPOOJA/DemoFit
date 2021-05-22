import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  StatusBar,
} from 'react-native';
import {Splash} from '../splash/index';
import Button from '../Components/Button/index'
import {styles} from './style'

export class Welcome extends Component<{}> {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
  }
  Hide_Splash_Screen = () => {
    this.setState({
      isVisible: false,
    });
  };

  componentDidMount() {
    var that = this;
    setTimeout(function () {
      that.Hide_Splash_Screen();
    }, 2000);
  }

  render() {
    const {navigate} = this.props.navigation;

    return (
      <View style={styles.MainContainer}>
        <StatusBar
          hidden={true}
          backgroundColor="transparent"
          translucent={true}
        />
        <Text
          style={styles.textWelcome}>
          Welcome to
        </Text>
        <Text
          style={styles.textFitClub}>
          Fit Club
        </Text>
        <Text
          style={styles.textFHH}>
          Fitter, Healthier, Happier
        </Text>

        <View
          style={styles.viewAuth}>
            <Button name='SIGNUP' onPress={()=>navigate('Login')}></Button>
            <Button name='LOGIN' onPress={()=>navigate('Login')}></Button>
        
</View>
        {this.state.isVisible === true ? <Splash /> : null}
      </View>
    );
  }
}
