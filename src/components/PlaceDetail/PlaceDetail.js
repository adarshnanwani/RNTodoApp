import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = (props) => {
    let modalContent = null;
    if (props.selectedItem) {
        modalContent = (
            <View>
                <Image source={props.selectedItem.image} style={styles.placeImage} />
                <Text style={styles.placeName}>{props.selectedItem.name}</Text>
            </View>
        );
    }
    return (
        <Modal visible={props.selectedItem !== null} animationType="slide" onRequestClose={props.onModalClosed}>
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <TouchableOpacity onPress={props.onItemDeleted} style={styles.deleteButton}>
                        <Icon size={30} name="ios-trash" color="red"/>
                    </TouchableOpacity>
                    <Button title="Close" onPress={props.onModalClosed}/>
                </View>
            </View>
        </Modal>
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
    deleteButton:{
        alignItems: "center"
    }
});

export default placeDetail;