import React from 'react';
import { View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { connect } from 'react-redux';

const placeDetail = (props) => {
    return (
        <View style={styles.modalContainer}>
            <View>
                <Image source={props.selectedItem.image} style={styles.placeImage} />
                <Text style={styles.placeName}>{props.selectedItem.name}</Text>
            </View>
            <View>
                <TouchableOpacity onPress={props.onItemDeleted} style={styles.deleteButton}>
                    <Icon size={30} name="ios-trash" color="red" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    modalContainer: {
        margin: 25
    },
    placeImage: {
        width: '100%',
        height: 200
    },
    placeName: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28
    },
    deleteButton: {
        alignItems: "center"
    }
});

const mapDispatchToProps = dispatch => {
    return {
        onDeletePlace = key => deletePlace(key)
    };
}

export default connect(null,mapDispatchToProps)(placeDetail);