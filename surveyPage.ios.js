'use strict';
import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, TouchableHighlight, View, AppRegistry, StyleSheet, Image } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var styles = require('./styleSheet.ios.js');
var radio_props_one = [
    {label: 'Yes', value:0 },
    {label: 'No', value:1 }
], radio_props_two = [
    {label: 'Everyday', value:0 },
    {label: 'Once a week', value:1 }
]; 

class Survey extends Component { 
    state = {
        response: ''
    };
    goSomethingWithSurveyResult() {
        // TODO: (May be) save the survey answers in database
        this.setState({response: "Thanks for submitting your response."});
    }
    render() {
        let pic = {
            uri: 'https://static.squarespace.com/static/50305c7684ae7fae2e65756a/5220048ee4b053b3578fc38a/52200493e4b053b3578fe989/1277125524713/1000w/KC%20skyline%20night%20HDR%202.jpg' 
        };
        return (
            <Image style = {styles.image} source = {pic}>
                <View style= {styles.view} >
                    <Text style = {styles.heading} >Welcome to TALKville!</Text>
                    <Text style = {styles.text} >Do you like the app?</Text>
                    <RadioForm radio_props={radio_props_one} initial={0} onPress={(value) => {this.setState({value:value})}} formHorizontal={true}/>
                    <Text style = {styles.text} >How often do you use the app?</Text>
                    <RadioForm radio_props={radio_props_two} initial={0} onPress={(value) => {this.setState({value:value})}} labelColor={'#8A2BE2'} buttonColor={'#8A2BE2'}/>
                    <TouchableHighlight style = {styles.button} onPress={() => this.goSomethingWithSurveyResult()}>
                        <Text>Submit</Text>
                    </TouchableHighlight>
                    <Text style={styles.text} > {this.state.response} </Text>
                </View>
            </Image>
        );
    }
}

module.exports = Survey;