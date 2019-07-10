import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

const listItem = (props) => (
    <TouchableOpacity onPress={props.onItemPressed} >
        <View style={styles.listItem} >
            <Text>{props.TFValue}</Text>
        </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    listItem: {
        width: "100%",
        padding: 10,
        marginTop: 15,
        marginBottom: 5,
        backgroundColor: "#eee"
    }
});

export default listItem;
