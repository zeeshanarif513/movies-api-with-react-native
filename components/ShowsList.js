import axios from 'axios';

import React, {Component} from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';

import SingleItem from './shared_components/SingleItem';
import {usingAxiosAPI,usingFetchAPI} from '../apis/FetchMovies';

class ShowsList extends Component {
    constructor(){
        super();
        this.state = {
            shows: [],
            loading: true
        }
        
        //this.usingFetch = this.usingFetch.bind(this);
        //this.usingAxios = this.usingAxios.bind(this);
    }
    FlatListItemSeparator = () => {
        return (
          <View
            style={{
              height: 1,
              width: "100%",
              backgroundColor: '#DDD',
            }}
          />
        );
      }

    

    async componentDidMount() {

        //const data = await usingFetchAPI();
        const data = await usingAxiosAPI();
        
        this.setState({shows:data,loading:false});
    }

    render(){
        return(
            <View style = {styles.container}>
                <FlatList
                    data={this.state.shows}
                    renderItem={({item}) => (
                        <SingleItem
                            show = {item}
                            navigation={this.props.navigation}/>
                    )}
                    keyExtractor = {item => item.id}
                    ItemSeparatorComponent={this.FlatListItemSeparator}
                    >
                </FlatList>
                {this.state.loading && 
                    <View style = {styles.loading}>
                        <ActivityIndicator size="large" color="orange"/>
                    </View>
                }
            </View>
        );
    }
}

styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        padding: 10
    },
    loading: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
      }
});

export default ShowsList;