import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image, 
    ScrollView
} from 'react-native';

import Separator from './shared_components/Separator';

const Show = ({route}) => {
    
    return(
        <ScrollView contentContainerStyle = {[styles.container, {justifyContent: 'center'}]}>
            <View style = {styles.boxContainer}>
                <Text style = {styles.heading}>{route.params.show.name}</Text>
                <Image 
                    source = {{uri: route.params.show.image.original}}
                    style = {styles.image}
                />
                <Separator/>
                <Text style = {styles.subHeading}>Schedule</Text>
                <Text><Text style={{fontWeight: 'bold'}}>Time</Text> {route.params.show.schedule.time}</Text>
                <Text><Text style={{fontWeight: 'bold'}}>Days</Text> {route.params.show.schedule.days.toString()}</Text>
                <Separator/>
                <Text style = {styles.subHeading}>Rating</Text>
                <Text> {route.params.show.rating.average}</Text>
                <Separator/>
                <Text style = {styles.subHeading}>Language</Text>
                <Text> {route.params.show.language}</Text>
                <Separator/>
                <Text style = {styles.subHeading}>Genres</Text>
                <Text> {route.params.show.genres.toString()}</Text>
                <Separator/>
                <Text style = {styles.subHeading}>Summary</Text>
                <Text style = {{textAlign: 'justify'}}> {route.params.show.summary.replace(/(<([^>]+)>)/ig, "")}</Text>
                
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        marginTop: 32,
        paddingHorizontal: 24,
      },
      image: {
          height: 220,
          width: 160,
          alignSelf: 'center',
          marginBottom: 20
      },
      heading: {
        marginBottom: 20,
        color: 'orange',
        fontSize: 30,
        textAlign: 'center'
    },
    content: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: '10%'
        
    },
    boxContainer: {
        flex: 1, // 1:3
        justifyContent: 'center',
        paddingBottom: 100
    },
    subHeading: {
        color: 'orange',
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    
})

export default Show;