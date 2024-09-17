import { Button, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState} from 'react'
const Textin = () => {
  const [name, setName] = useState("")
  const [email,setEmail]=useState("")
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.headingText}>Textinput in React-native</Text>
        <Text style={styles.headingText}>{name}</Text>
        <View style={styles.innercontainer}>
          <TextInput style={styles.textbox}
            placeholder='Enter your name'
            value={name}
           autoCapitalize='words'
           maxLength={20}
            onChangeText={(text) => setName(text)}
          />
          <TextInput style={styles.textbox}
            placeholder='Enter your email'
            value={email}
            inputMode='email'
            keyboardType='email'
            onChangeText={(text) => setEmail(text)}
          />
          <Button title='Press me'
            onPress={() => setName("")}></Button>
        </View>
      </View>
    </View>
  )
}
export default Textin
const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    paddingHorizontal: 20,
    color: '#0C061B',
    marginTop: 10
  },
  container: {
    backgroundColor: "#90bede",
    height: 500,
    width: 350,
    margin: 15,
    borderRadius: 10
  },
  innercontainer: {
    height: 400,
    width: 320,
    marginLeft: 16,
  },
  textbox: {
    paddingHorizontal: 15,
    fontSize: 15,
    fontWeight: "bold",
    marginTop: 15,
    borderWidth: 1,
    borderColor: "#e5e1ee",
    borderRadius: 10,
    marginBottom: 15
  }
})