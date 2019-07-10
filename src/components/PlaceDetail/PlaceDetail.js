import React from 'react';
import { Modal, View, Image, Text, Button, StyleSheet } from 'react-native';

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
                    <Button title="Delete" color="red" onPress={props.onItemDeleted} />
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