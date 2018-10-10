import React, { Component } from 'react';
import { View, Button, TextInput, StyleSheet } from 'react-native';

class PlaceInput extends Component {

    state = {
        placeName: ''
    };

    placeNameChangeHandler = value => {
        this.setState({
            placeName: value
        });
    };

    onPlaceSubmitHandler = () => {
        if (this.state.placeName.trim() === '') {
            return;
        }

        this.props.onPlaceSubmit(this.state.placeName);

        this.setState({
            placeName: ''
        });
    }

    render() {
        return (
            <View style={styles.inputContainer}>
                <TextInput
                    style={styles.placeInput}
                    value={this.state.placeName}
                    placeholder="An awesome place"
                    onChangeText={this.placeNameChangeHandler} />
                <Button
                    style={styles.placeButton}
                    title="Add"
                    onPress={this.onPlaceSubmitHandler} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    inputContainer: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    placeInput: {
        width: "70%",
    },
    placeButton: {
        width: "30%"
    }
});

export default PlaceInput;