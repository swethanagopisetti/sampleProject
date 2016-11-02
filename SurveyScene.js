import React, { Component, PropTypes } from 'react';
import { Text, TouchableHighlight, View, StyleSheet } from 'react-native';

export default class SurveyScene extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    onForward: PropTypes.func.isRequired,
    onBack: PropTypes.func.isRequired
  }

  render() {
    return (
      <View style = {styles.view}>
        <Text style = {styles.tip}>Current Scene: { this.props.title }</Text>
        <TouchableHighlight style = {styles.button} onPress={this.props.onForward}>
          <Text style = {styles.tip} >Load Survey</Text>
        </TouchableHighlight>
        <TouchableHighlight style = {styles.button} onPress={this.props.onBack}>
          <Text style = {styles.tip}>Go Home</Text>
        </TouchableHighlight>
      </View>
    )
  }
}
const styles = StyleSheet.create({
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