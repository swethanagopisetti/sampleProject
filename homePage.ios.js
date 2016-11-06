'use strict';
import React, { Component, PropTypes } from 'react';
import { NavigatorIOS, Text, TouchableHighlight, View, AppRegistry, StyleSheet, Dimensions, Image } from 'react-native';

var surveyPage = require('./surveyPage.ios.js');
var styles = require('./styleSheet.ios.js');

class HomePage extends Component {
    state = {
        initialLatitude: 'unknown',
        lastLatitude: 'unknown',
        initialLongitude: 'unknown',
        lastLongitude: 'unknown'
    };
    goToSurveyPage() {
        this.props.navigator.push({
            title: 'Survey',
            component: surveyPage,
            navigationBarHidden: true,
            passProps: {myElement: 'text'}
        });
    }
    watchID: ?number = null;

      componentDidMount() {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            var initialLatitude = JSON.stringify(position.coords.latitude);
            var initialLongitude = JSON.stringify(position.coords.longitude);
            this.setState({initialLatitude});
            this.setState({initialLongitude});
          },
          (error) => alert(JSON.stringify(error)),
          {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
        );
        this.watchID = navigator.geolocation.watchPosition((position) => {
          var lastLatitude = JSON.stringify(position.coords.latitude);
          var lastLongitude = JSON.stringify(position.coords.longitude);
          this.setState({lastLatitude});
          this.setState({lastLongitude});
        });
      }

      componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchID);
      } 
    render(){
        let pic = {
            uri: 'https://static.squarespace.com/static/50305c7684ae7fae2e65756a/5220048ee4b053b3578fc38a/52200493e4b053b3578fe989/1277125524713/1000w/KC%20skyline%20night%20HDR%202.jpg' 
        };
        return(
            <Image style = {styles.image} source = {pic}>
                <View style= {styles.view} >
                    <Text style = {styles.heading} >Welcome to TALKville!</Text>
                    <Text style = {styles.text} >👀 First tip: The first tip is to be displayed here.</Text>
                    <Text style = {styles.text} >❓ Second tip: The second tip is to be displayed here.</Text>
                    <Text style = {styles.text} >💕 Third tip: The third tip is to be displayed here.</Text>            
                    <TouchableHighlight style = {styles.button} onPress={() => this.goToSurveyPage()}>
                        <Text>Load Survey</Text>
                    </TouchableHighlight>
                    <Text style={styles.text} >
                      <Text>Initial position: {"\n"}</Text>
                      Lat = {this.state.initialLatitude} Long = {this.state.initialLongitude}
                    </Text>
                    <Text style={styles.text}>
                      <Text>Current position: {"\n"}</Text>
                      Lat = {this.state.lastLatitude} Long = {this.state.lastLongitude}
                    </Text>                     
                </View>
            </Image>                                  
        );
    }
}

module.exports = HomePage;