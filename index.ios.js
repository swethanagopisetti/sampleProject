import React, { Component, PropTypes } from 'react'; 
import { AppRegistry, Text, Image, StyleSheet, View, TouchableHighlight, NavigatorIOS } from 'react-native';

export default class NavigatorIOSApp extends Component {
    render() {
        return (
            <NavigatorIOS
              initialRoute={{
                component: SurveyScene, 
                title: 'Survey Scene'
              }}
              renderScene={(route, navigator) => {
                return <SurveyScene title={route.title} 
                // Function to call when a new scene should be displayed           
                onForward={ () => {    
                  const nextIndex = route.index + 1;
                  navigator.push({
                    title: 'Scene ' + nextIndex,
                    index: nextIndex,
                  });
                }}

                // Function to call to go back to the previous scene
                onBack={() => {
                  if (route.index > 0) {
                    navigator.pop();
                  }
                }}
                />
              }}
            />
        )
    }
}

class sampleProject extends Component {
    state = {
        initialLatitude: 'unknown',
        lastLatitude: 'unknown',
        initialLongitude: 'unknown',
        lastLongitude: 'unknown'
    };
    getMoviesFromApiAsync() {
        return fetch('https://facebook.github.io/react-native/movies.json')
          .then((response) => response.json())
          .then((responseJson) => {
            for (i=0; i<5; i++) {
                console.log("Name: "+responseJson.movies[i].title+", Year: "+responseJson.movies[i].releaseYear+" \n ");   
            }
            //return responseJson.movies;
          })
          .catch((error) => {
            console.error(error);
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
    render() {
        let pic = {
            uri: 'https://static.squarespace.com/static/50305c7684ae7fae2e65756a/5220048ee4b053b3578fc38a/52200493e4b053b3578fe989/1277125524713/1000w/KC%20skyline%20night%20HDR%202.jpg' 
        };
        return (
            <Image style = {styles.image} source = {pic}>
                <View style= {styles.view} >
                    <Text style = {styles.heading} >Welcome to TALKville!</Text>
                    <Text style = {styles.tip} >👀 First tip: The first tip is to be displayed here.</Text>
                    <Text style = {styles.tip} >❓ Second tip: The second tip is to be displayed here.</Text>
                    <Text style = {styles.tip} >💕 Third tip: The third tip is to be displayed here.</Text>            
                    <TouchableHighlight style = {styles.button} onPress={this.getMoviesFromApiAsync}>
                        <Text>Load JSON</Text>
                    </TouchableHighlight>
                    <Text style={styles.tip} >
                      <Text>Initial position: {"\n"}</Text>
                      Lat = {this.state.initialLatitude} Long = {this.state.initialLongitude}
                    </Text>
                    <Text style={styles.tip}>
                      <Text>Current position: {"\n"}</Text>
                      Lat = {this.state.lastLatitude} Long = {this.state.lastLongitude}
                    </Text>
                    
                </View>
            </Image>
        );
    }
}
const styles = StyleSheet.create({
    view: {
        flex: 1,
        flexDirection: 'column'
    },
    image:{ 
        marginTop: 20,
        //width: 275,
        height: 635,
        alignSelf: 'center'
    },
    heading:{ 
        marginTop: 5,
        alignSelf: 'center',
        marginBottom: 10
    },
    tip:{ 
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

AppRegistry.registerComponent('sampleProject', () => sampleProject); 

/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/*import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class sampleProject extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Talkville!
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.ios.js
        </Text>
        <Text style={styles.instructions}>
          Press Cmd+R to reload,{'\n'}
          Cmd+D or shake for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('sampleProject', () => sampleProject);
*/