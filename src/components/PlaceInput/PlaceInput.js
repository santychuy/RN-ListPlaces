import React, { Component } from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

export default class PlaceInput extends Component {
    
    state = {
        TFValue: ''
    }
    
    placeNameChangedHandler = val => {
        this.setState({
            TFValue: val
        });
    }

    actionAddPlace = () => {
        if (this.state.TFValue.trim() === ""){
            alert('Necesitas agregar una ciudad');
            return;
        }
    
        this.props.onPlaceAdded(this.state.TFValue);

        this.setState({
            TFValue: ''
        })
    }
    
    render() {
        return (
            <View style={styles.inputContainer} >
                <TextInput  style={styles.textinput} 
                            placeholder="Escribe la ciudad..."
                            onChangeText={this.placeNameChangedHandler}
                            value={this.state.TFValue} />
                <Button title="Save"
                        color="#000000"
                        style={styles.button}
                        onPress={this.actionAddPlace} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    textinput: {
        height: 40,
        width: "70%",
        borderColor: Colors.black,
        borderWidth: 1
    },
    button : {
        width: "30%"
    },
    inputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        marginTop: 20
    }
});
