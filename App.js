import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import { connect } from 'react-redux';
import { addPlace, deletePlace, selectPlace, deselectPlace } from './src/store/actions/index';
// import placeImage from './src/assets/b1.jpg';

class App extends Component {
    placeSubmitHandler = (placeName) => {
        this.props.onAddPlace(placeName);
        console.log("Place added");
    };
    // deleteItemHandler = key => {
    // const newPlaces = [...this.state.places];
    // const newPlacesArr = newPlaces.filter(place => {
    // return place.key !== key;
    // });
    // this.setState({
    // places: newPlacesArr
    // });
    // };
    selectItemHandler = key => {
        this.props.onSelectPlace(key);
    };
    itemDeletedHandler = () => {
        this.props.onDeletePlace();
    };
    modalClosedHandler = () => {
        this.props.onDeselectPlace();
    };
    render() {
        return (
            <View style={styles.container}>
                <PlaceDetail
                    selectedItem={this.props.selectedItem}
                    onItemDeleted={this.itemDeletedHandler}
                    onModalClosed={this.modalClosedHandler} />
                <PlaceInput
                    placeName={this.props.placeName}
                    onPlaceNameChange={this.placeNameChangeHandler}
                    onPlaceSubmit={this.placeSubmitHandler} />
                <PlaceList
                    places={this.props.places}
                    onItemSelected={this.selectItemHandler} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    }
});

const mapStateToProps = state => {
    return {
        placeName: state.places.placeName,
        places: state.places.places,
        selectedItem: state.places.selectedItem
    };
};
const mapDispatchToProps = dispatch => {
    return {
        onAddPlace: (placeName) => dispatch(addPlace(placeName)),
        onDeletePlace: () => dispatch(deletePlace()),
        onSelectPlace: (placeKey) => dispatch(selectPlace(placeKey)),
        onDeselectPlace: () => dispatch(deselectPlace())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(App);