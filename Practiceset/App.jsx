import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { Profiler } from 'react'
import FlatlistP from './component/FlatlistP'
const App = () => {
  return (
    <ScrollView>
      <FlatlistP />
    </ScrollView>
  )
}

export default App

const styles = StyleSheet.create({})
