'use strict';
import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, TouchableHighlight, View, AppRegistry, StyleSheet, Image } from 'react-native';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel} from 'react-native-simple-radio-button';

var radio_props = [
    {label: 'Yes', value:0 },
    {label: 'No', value:1 }
];
class Register extends Component {   
    getInitialState (){
        return {
            value:0,
        }
    }
    render() {
        let pic = {
            uri: 'https://static.squarespace.com/static/50305c7684ae7fae2e65756a/5220048ee4b053b3578fc38a/52200493e4b053b3578fe989/1277125524713/1000w/KC%20skyline%20night%20HDR%202.jpg' 
        };
        return (
            <Image style = {styles.image} source = {pic}>
                <View style= {styles.view} >
                    <Text style = {styles.heading} >Welcome to TALKville!</Text>
                    <Text style = {styles.text} > Do you like the app?</Text>
                    <RadioForm radio_props={radio_props} initial={0} onPress={(value) => {this.setState({value:value})}} />
                    <Text style = {styles.text} >❓ How often do you use the app?</Text>
                </View>
            </Image>
        );
    }
}
var styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20
    },
    view: {
        flex: 1,
        flexDirection: 'column'
    },
    image:{ 
        marginTop: 20,        
        height: 635,
        alignSelf: 'center'
    },
    heading:{ 
        marginTop: 5,
        alignSelf: 'center',
        marginBottom: 10
    },
    text:{ 
        marginTop: 20,
        marginLeft: 5,
        marginRight: 5,
        alignSelf: 'flex-start'
    },
    button:{
        marginTop: 50,
        alignSelf: 'center',
        backgroundColor: 'powderblue'
    }
});
module.exports = Register;