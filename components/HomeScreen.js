import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import Slider from './Slider.js'
import Cards from './Card'

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.home} >
      <ScrollView>      
        <View >
        <Slider/>
        </View>
        <View>
          <Cards/>
          
        </View>
        </ScrollView>
     </View>
    )
  }
}

const styles = StyleSheet.create({
    home: {
        flex: 1,
    backgroundColor: 'black'
    }
})

export default HomeScreen