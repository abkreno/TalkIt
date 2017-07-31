import ImageComponent from './app/components/Image';
import LoggedIn from './app/layouts/LoggedIn';
import LoggedOut from './app/layouts/LoggedOut';

import Button from './app/components/Button';

import {StackNavigator} from 'react-navigation';
import Meteor, { createContainer } from 'react-native-meteor';

import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

Meteor.connect('ws://localhost:3000/websocket');//do this only once

const App = (props) => {
  const { status, user, loggingIn } = props;

  if (status.connected === false || loggingIn) {
    return (<View style={styles.container}>
            <Text>'Loading!'</Text>
            </View>);
  } else if (user !== null) {
    return <LoggedIn />;
  }
  return <LoggedOut />;
};

App.propTypes = {
  status: React.PropTypes.object,
  user: React.PropTypes.object,
  loggingIn: React.PropTypes.bool,
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default createContainer(() => {
  return {
    status: Meteor.status(),
    user: Meteor.user(),
    loggingIn: Meteor.loggingIn(),
  };
}, App);
