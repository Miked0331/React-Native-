import React from 'react';
import Component from 'react'
import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { ScrollView } from 'react-native-gesture-handler';


const users = [
 {
    name: 'brynn',
    avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
    image: require('../assets/images/Black_Friday.png')
    
 },
 {
     name: 'mike',
     avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 },
 {
   name: 'Jim',
   avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
 }
  // more users here
]





const Cards = (props) => {

    return (
      <View style={{flex: 1, flexDirection: 'row', flexWrap: 'wrap'}}>
      
      <View style={styles.card}>
        <Card 
  title='HELLO WORLD'
  image={require('../assets/images/Black_Friday.png')} style={{width: 200}}>
  <Text style={{marginBottom: 10}}>
    Bracelet
  </Text>
  <Button
    icon={<Icon name='g-translate' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
</View>

<View style={styles.card}>
 <Card 
  title='HELLO WORLD'
  image={require('../assets/images/Black_Friday.png')} style={{width: 200}}>
  <Text style={{marginBottom: 10}}>
    Bracelet
  </Text>
  <Button
    icon={<Icon name='g-translate' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card>
</View>

<View style={styles.card}>
<Card title={users[0].name}>
  {
    users.map((u, i) => {
      return (
        <View key={i} style={styles.user}>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{ uri: u.avatar }}
          />
         
          <Text >{props.name}</Text>
        </View>
      );
    })
  }
</Card>
</View>

   
      </View>
    );
  }

const styles = StyleSheet.create({
  card :{width: 180


  }
})

export default Cards