/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Button, StyleSheet, Text, TextInput, View} from 'react-native';

export default class App extends Component {
  state = {
    name_input: ""
  };
  
  changeNameDef = val => {
    this.setState({
      name_input: val
    })
  };
  render() {
    return (
      <View style={styles.container}>
        <Text>title</Text>
        <View style = {styles.inputContainer}>

          <TextInput 
          value = {this.state.name_input}
          style = {{width: 300}}
          placeholder = 'Place to hold text'
          onChangeText = {this.changeNameDef}
          />
          <Button title = "add"/>

        </View>


      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // we later learn how to defin for specific ios or android
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
    //flexDirection: 'row', //fix the button aside of the textInput
    //justifyContent: 'space-between', //take space between button and textInput
    //alignItems: 'center', //the button look beter now
    //padding: 10 //took 10 pixel between the title and inputView
    //width: '100%' //the different from flex is its give 100% just for the witdh and not height to
  },
  inputHolder: {
    width: '300'
    //width: '70%' //by precent and no pixels
  },
  buttonStyle: {
    //width: '30%'
  }

});
