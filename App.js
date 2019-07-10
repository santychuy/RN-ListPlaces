import React, {Component} from 'react';
import { StyleSheet, View} from 'react-native';

import PlaceInput from './src/components/PlaceInput/PlaceInput';
import PlaceList from './src/components/PlaceList/PlaceList';

class App extends Component{

  state = {
    places: []
  }

  actionButton = placeName => {
    this.setState(prevState => {
      return {
        places: prevState.places.concat({
          key: Math.random().toString(),
          value: placeName
        })
      };
    })
  }

  placeDeleted = key => {
    this.setState(prevState => {
      return {
        places: prevState.places.filter(place => {
          return place.key !== key;
        })
      }
    });
  }

  render() {
    return(
      <View style={styles.sectionContainer}>
        <PlaceInput onPlaceAdded={this.actionButton} />
        <PlaceList places={this.state.places} onItemDeleted={this.placeDeleted} />
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
