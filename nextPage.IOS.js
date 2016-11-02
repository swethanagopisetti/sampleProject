'use strict';
import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, TouchableHighlight, View, AppRegistry, StyleSheet } from 'react-native';

class Register extends Component {
    render() {
        return (
          <View style={styles.container}>
                <Text style={styles.text}>My value: {this.props.myElement}</Text>
                <Text>any text</Text>
            </View>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});
module.exports = Register;