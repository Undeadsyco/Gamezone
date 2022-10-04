import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'
import About from '../screens/about'
import Header from '../shared/header'

const screens = {
  About: {
    screen: About,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: () => <Header title='About GameZone' navigation={navigation}/>
      }
    }
  }
}

const AboutStack = createStackNavigator(screens, {
  defaultNavigationOptions: {
    headerTintColor: 'coral',
    headerStyle: {
      backgroundColor: 'gray',
      height: 100
    }
  }
})

export default AboutStack