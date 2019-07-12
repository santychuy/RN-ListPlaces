import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const placeDetail = props => {
    let modalContent = null;

    if (props.selectedPlace) {
        modalContent = (
            <View>
                <Image source={props.selectedPlace.img} style={styles.imgDetail} />
                <Text style={styles.namePlace}>{props.selectedPlace.value}</Text>
            </View>
        );
    }
    
    return (
        <Modal onRequestClose={props.onModalClosed} visible={props.selectedPlace !== null} animationType="slide">
            <View style={styles.modalContainer}>
                {modalContent}
                <View>
                    <TouchableOpacity>
                        <Icon size={30} name="ios-trash" color="red" />
                    </TouchableOpacity>
                    <Button title="Close" onPress={props.onModalClosed} />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        marginTop: 50
    },
    imgDetail: {
        width: "100%",
        height: 200
    },
    namePlace : {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 28,
        marginTop: 20
    }
})

export default placeDetail;