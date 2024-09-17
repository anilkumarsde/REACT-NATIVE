import { Button, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'

const Colormode = () => {
  const isDarkMode = useColorScheme() === 'dark'
  return (
    <View>
      <View style={styles.container}>
        <Text style={isDarkMode ? styles.whiteText : styles.blackText}>Hello world</Text>
      </View>
    </View>
  )
}

export default Colormode

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  whiteText: {
    color: "white",
    fontSize: 50
  },
  blackText: {
    color: "black",
    fontSize: 50
  }
})
