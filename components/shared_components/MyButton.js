import React, {Component} from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

class MyButton extends Component {
    constructor(){
        super();
    }
    render() {
        return(
            <TouchableOpacity
                style = {styles.button}
                onPress = {this.props.handlePress}>
                <Text style = {styles.title}>{this.props.title}</Text>

            </TouchableOpacity>
        );
    }

   
}

const styles = StyleSheet.create({
    button: {
        alignItems: "center",
        backgroundColor: "orange",
        padding: 10,
        margin: 10
    },
    title: {
        color: 'white'
    }
});

export default MyButton;