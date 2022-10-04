import React, { useState } from 'react';
import { FlatList, Text, ImageBackground, TouchableOpacity, Modal, View, StyleSheet, Keyboard, TouchableWithoutFeedback } from 'react-native';
import Card from '../shared/card';
import { globalStyles } from '../styles/global'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './reviewForm';

export default function Home({ navigation }) {
  const [modalOpen, setModalOpen] = useState(false)
  const [reviews, setReviews] = useState([
    { key: 1, title: 'Zelda, Breath of Fresh Air', rating: 5, body: 'Lorem Ipsum' },
    { key: 2, title: 'Gotta Catch Them All (again)', rating: 4, body: 'Lorem Ipsum' },
    { key: 3, title: 'Not So "Final" Fantasy', rating: 3, body: 'Lorem Ipsum' },
    { key: 4, title: 'Fallout 4', rating: 4, body: 'Lorem Ipsum' },
  ])

  const addReview = (review) => {
    review.key = Math.random().toString()
    setReviews((currentReviews) => {
      return [review, ...currentReviews]
    })
    setModalOpen(false)
  }

  const deleteReview = (key) => {
    setReviews(() => {
      return reviews.filter(reviewList => reviewList.key != key)
    })
  }

  return (
    <ImageBackground source={require('../assets/game_bg.png')} style={globalStyles.container}>
      <Modal visible={modalOpen} animationType='slide'>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={styles.modelContent}>
            <MaterialIcons
              name='close'
              size={24}
              style={{ ...styles.modalToggle, ...styles.modalClose }}
              onPress={() => setModalOpen(false)}
            />
            <ReviewForm addReview={addReview} />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <MaterialIcons
        name='add'
        size={24}
        style={styles.modalToggle}
        onPress={() => setModalOpen(true)}
      />
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <View style={styles.review}>
            <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('ReviewDetails', item)}>
              <Card>
                <Text style={globalStyles.title}>{item.title}</Text>
              </Card>
            </TouchableOpacity>
            <MaterialIcons
              name='delete'
              size={24}
              style={styles.delete}
              onPress={() => deleteReview(item.key)}
            />
          </View>
        )}
      />
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  modelContent: {
    flex: 1
  },
  modalToggle: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#f2f2f2',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'center',
    backgroundColor: 'green'
  },
  modalClose: {
    marginTop: 20,
    marginBottom: 0,
    backgroundColor: 'crimson'
  },
  review: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: '85%'
  },
  delete: {
    width: 40,
    height: 40,
    padding: 8,
    backgroundColor: 'crimson',
    borderRadius: 10
  }
})