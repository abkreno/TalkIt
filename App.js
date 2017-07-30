import ImageComponent from './app/components/Image';
import LoggedIn from './app/layouts/LoggedIn';
import Button from './app/components/Button'

import {StackNavigator} from 'react-navigation';
import Meteor, { createContainer } from 'react-native-meteor';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

Meteor.connect('ws://localhost:3000/websocket');//do this only once

class MainScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Hello, Chat App!</Text>
        <Button
          onPress={() => navigate('LoggedIn')}
          text="Go to Details!"
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App = StackNavigator({
  Main: { screen: MainScreen },
  LoggedIn: { screen: LoggedIn }
});
