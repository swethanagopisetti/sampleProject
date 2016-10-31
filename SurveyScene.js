import React, { Component, PropTypes } from 'react'; 
import { Text, View, NavigatorIOS, TouchableHighlight } from 'react-native'; 
    
class SurveyScene extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        navigator: PropTypes.object.isRequired
    }
    constructor (props, context) {
        super(props, context);
        this._onForward = this._onForward.bind(this);
    }
    _onForward() {
        this.props.navigator.push({
            title: 'Scene'+nextIndex
        });
    }
    render() {
        return (
            <View>
                <Text>Current Scene: { this.props.title }</Text>
                <TouchableHighlight onPress={this._onForward}>
                  <Text>Tap me to load the next scene</Text>
                </TouchableHighlight>
            </View>
        );
    }
}