'use strict';
import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, TouchableHighlight, View, AppRegistry, StyleSheet, Dimensions } from 'react-native';

var NextPage = require('./nextPage.IOS.js');

class RootPage extends Component {
    goDerper() {
        this.props.navigator.push({
            title: 'nextPage',
            component: NextPage,
            navigationBarHidden: true,
            passProps: {myElement: 'text'}
        });
    }
    render(){
        return(
            <View style={styles.container}>
                <TouchableHighlight
                    onPress={() => this.goDerper()}>
                    <Text>We must go derper</Text>
                </TouchableHighlight>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    }
});
module.exports = RootPage;