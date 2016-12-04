'use strict';
import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, TouchableHighlight, View, AppRegistry, StyleSheet, Image } from 'react-native';

var homePage = require('./homePage.ios');
class sampleProject extends Component {
  render() {
    return (
        <NavigatorIOS
            style = {styles.container}
            initialRoute={{
          title: "Home",
          navigationBarHidden: true,
          component:homePage
          }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('sampleProject', () => sampleProject);