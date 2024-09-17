import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ElevatedCard = () => {
  return (
    <View>
      <Text style={styles.TextHeading}>ElevatedCard</Text>
      <ScrollView horizontal={true} style={styles.container} >
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.Text}>Tap</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.Text}>Me</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.Text}>For</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.Text}>More</Text>
        </View>
        <View style={[styles.card, styles.cardElevated]}>
          <Text style={styles.Text}>And more</Text>
        </View> 
      </ScrollView>

    </View>
  )
}

export default ElevatedCard

const styles = StyleSheet.create({
  TextHeading: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 8
  },
  container: {
    margin: 8,
    flexDirection:"row"
  },
  card: {
    height: 100,
    width: 100,
    borderRadius: 8,
    margin: 8,
    display:"flex",
    justifyContent: 'center',
    alignItems: 'center'
  },
  cardElevated: {
    backgroundColor: "#a11692"
  },
  Text: {
    fontSize: 15,
    fontWeight: 'bold'
  }
})