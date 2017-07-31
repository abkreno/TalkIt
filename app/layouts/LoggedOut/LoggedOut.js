import React from 'react';
import {AppRegistry, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import SignIn from '../../routes/SignIn';

class LoggedOut extends React.Component {
  render() {
    return (<SignIn/>);
  }
}

export default LoggedOut;
