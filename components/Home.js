import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import MyButton from './shared_components/MyButton';

const Home = ({navigation}) => {

    function gotoFetch() {
        navigation.navigate('All Shows', {method: 'fetch'});
    }
    function gotoAxios() {
        navigation.navigate('All Shows', {method: 'axios'});
    }
    return (
        <View style = {styles.container}>
            <Text style = {styles.heading}>TV Maze Shows</Text>
            <MyButton title="Get Data using Fetch" handlePress={gotoFetch}/>
            <MyButton title="Get Data using Axios" handlePress={gotoAxios}/>
        </View>
    );
}

styles  = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        paddingHorizontal: 10
    },
    heading: {
        marginBottom: 150,
        color: 'orange',
        fontSize: 50,
        textAlign: 'center'
    }
});


export default Home;