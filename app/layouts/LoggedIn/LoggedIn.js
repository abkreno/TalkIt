import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {StackNavigator} from 'react-navigation';
import Button from '../../components/Button';
import Meteor from 'react-native-meteor';

class LoggedIn extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
          onPress={() => console.log("Hello")}
          text="Start Game"
        />
        <Button
          onPress={() => console.log("Hello")}
          text="Options"
        />
        <Button
          onPress={() => Meteor.logout()}
          text="Log Out"
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


export default LoggedIn;
