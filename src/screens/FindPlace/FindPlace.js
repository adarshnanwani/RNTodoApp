import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import PlaceList from '../../components/PlaceList/PlaceList';
import { Navigation } from 'react-native-navigation';

class FindPlaceScreen extends Component {

    itemSelectedHandler = key => {
        const place = [...this.props.places].find(place => place.key === key)
        Navigation.push(this.props.componentId, {
            component: {
                name: 'awesomeplaces.PlaceDetailScreen',
                passProps: {
                    selectedItem: place
                },
                options: {
                    topBar: {
                        title: {
                            text: place.name
                        }
                    }
                }
            }
        });
    }
    render() {
        return (
            <View>
                <PlaceList places={this.props.places} onItemSelected={this.itemSelectedHandler} />
            </View>
        )
    }
}

const mapStateToProps = state => {
    return {
        places: state.places.places
    }
}

export default connect(mapStateToProps, null)(FindPlaceScreen);