import axios from 'axios';

import React, {Component} from 'react';
import { FlatList, View, StyleSheet, ActivityIndicator } from 'react-native';

import SingleItem from './shared_components/SingleItem';
import {usingAxios} from '../apis/FetchMovies';

class ShowsList extends Component {
    constructor(){
        super();
        this.state = {
            shows: [],
            loading: true
        }
        // this.usingFetch = this.usingFetch.bind(this);
        // this.usingAxios = this.usingAxios.bind(this);
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

    // usingFetch() {
    //     this.setState({
    //         loading: true
    //     });
    //     fetch('https://api.tvmaze.com/shows')
    //         .then((response) => response.json())
    //         .then((json) => {
    //             //console.warn(json);
    //             this.setState({
    //                 shows: json,
    //                 loading: false,
    //             });
    //             //console.warn(this.state.shows)
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    // usingAxios() {
    //     this.setState({
    //         loading: true
    //     });
    //     axios.get('https://api.tvmaze.com/shows')
    //         .then(response =>  {
    //             this.setState({
    //                 shows: response.data,
    //                 loading: false,
    //             });
    //         })
    //         .catch((error) => {
    //             console.error(error);
    //         });
    // }

    async componentDidMount() {
          usingAxios().then(data=>{
            console.log("API Response = ",data);
          })

         
         
        // this.setState({
        //     shows: data,
        //     loading: false
        // });
        // console.warn(this.state.shows)
        /*usingAxios().then(data => {
            console.warn(data)
            this.setState({
                shows: data,
                loading: false
            });
        })*/
        //console.warn(this.state.shows)
        if(this.props.route.params.method === 'fetch'){
            //this.usingFetch();
        }
        if(this.props.route.params.method === 'axios'){
            //this.usingAxios();
        }
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