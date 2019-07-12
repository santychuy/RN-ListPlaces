import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail';
import {addPlace, deletePlace, selectPlace, deselectPlace} from './src/store/actions/index'; 

class App extends Component{

  actionButton = placeName => {
    this.props.onAddPlace(placeName);
  }

  placeSelectedHandler = key => {
    this.props.onSelectPlace(key);
  }

  placeDeleted = () => {
    this.props.onDeletePlace();
  }

  modalClosed = () => {
    this.props.onDeselectPlace();
  }

  render() {
    return(
      <View style={styles.sectionContainer}>
        <PlaceDetail selectedPlace={this.props.selectedPlace} onItemDeleted={this.placeDeleted} onModalClosed={this.modalClosed} />
        <PlaceInput onPlaceAdded={this.actionButton} />
        <PlaceList places={this.props.places} onItemSelected={this.placeSelectedHandler} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    padding: 40,
    alignItems: "center",
    justifyContent: "flex-start"
  }
});

const mapStateToProps = state => {
  return {
    places: state.places.places,
    selectedPlace: state.places.selectedPlace
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onAddPlace: (name) => dispatch(addPlace(name)),
    onDeletePlace: () => dispatch(deletePlace()),
    onSelectPlace: (key) => dispatch(selectPlace(key)),
    onDeselectPlace: () => dispatch(deselectPlace())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
