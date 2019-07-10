import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';
import PlaceDetail from './src/components/PlaceDetail/PlaceDetail'; 

class App extends Component{

  state = {
    places: [],
    selectedPlace: null
  }

  actionButton = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          value: placeName,
          img: {
            uri: "https://img1.10bestmedia.com/Images/Photos/352450/GettyImages-913753556_54_990x660.jpg"
          }
        })
      };
    })
  }

  placeSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedPlace: prevState.places.find(place => {
          return place.key === key;
        })
      }
    });
  }

  placeDeleted = () => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== prevState.selectedPlace.key;
        }),
        selectedPlace: null
      }
    });
  }

  modalClosed = () => {
    this.setState({
      selectedPlace: null
    });
  }

  render() {
    return(
      <View style={styles.sectionContainer}>
        <PlaceDetail selectedPlace={this.state.selectedPlace} onItemDeleted={this.placeDeleted} onModalClosed={this.modalClosed} />
        <PlaceInput onPlaceAdded={this.actionButton} />
        <PlaceList places={this.state.places} onItemSelected={this.placeSelectedHandler} />
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

export default App;
