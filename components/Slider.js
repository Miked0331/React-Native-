import { SliderBox } from "react-native-image-slider-box";
import {Component} from 'react'

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        require('../assets/images/Black_Friday.png'),
        require('../assets/images/Charged_Slide.png')        
      ]
    };
  }
  render() {
    return (      
      <View style={{justifyContent: 'center', alignContent: 'center'}}>        
        <SliderBox
  images={this.state.images}
  sliderBoxHeight={200}
  paginationBoxVerticalPadding={20}  
  autoplay
/>
        </View>     
    )
  }
}

