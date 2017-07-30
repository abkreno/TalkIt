import React from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';

class LoggedIn extends React.Component {
  static navigationOptions = {
    title: 'Logged In',
  };
  render() {
    return (
      <View>
        <Text>You are now logged in!</Text>
      </View>
    );
  }
}

export default LoggedIn;
