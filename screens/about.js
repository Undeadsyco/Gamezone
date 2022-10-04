import React from 'react';
import { Text, ImageBackground } from 'react-native';
import { globalStyles } from '../styles/global'

export default function About() {
  return(
    <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>
      <Text>About Screen</Text>
    </ImageBackground>
  )
}