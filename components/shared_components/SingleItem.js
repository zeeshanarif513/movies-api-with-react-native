import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet, Image } from 'react-native';


const SingleItem = (props) => {
    function handlePress() {
        props.navigation.navigate('Show', {show: props.show});
    }
    return (
        <TouchableOpacity onPress = {handlePress}>
            <View style = {styles.container}>
                <View style = {styles.content}>
                    <Text style = {styles.name}>{props.show.name}</Text>
                    <Text style = {styles.summary}>{props.show.summary.replace(/(<([^>]+)>)/ig, "")}</Text>
                    <Text><Text style={{fontWeight: 'bold'}}>Rating</Text> {props.show.rating.average}</Text>
                    <Text  style = {{fontWeight: 'bold', color: 'orange'}}><Text style={{color: 'black'}}>Genres</Text> {props.show.genres.toString()}</Text>
                </View>
                <View style = {styles.image}>
                    <Image 
                        source = {{uri: props.show.image.original}}
                        style = {{height: 220, width: 160}}
                    />
                </View>
            </View>
        </TouchableOpacity>
    );
}


const styles  =  StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    content: {
        flex: 2
    },
    image: {
        flex: 1,
        marginTop: 25,
        margin: 10
    },
    name: {
        color: 'orange',
        fontSize: 20,
        fontWeight: 'bold'
    },
    summary: {
        textAlign: 'justify'
    }
});

export default SingleItem;