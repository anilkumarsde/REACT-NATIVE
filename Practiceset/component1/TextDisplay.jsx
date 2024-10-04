import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const TextDisplay = () => {
    const[text,setText]=useState('')
    const addte=(tex)=>{
        setText(tex)
    }
  return (
    <View style={styles.container}>
      <Text style={styles.TextSt}>TextDisplay</Text>
      <TextInput placeholder='Enter something ...'
      value={text}
      onChangeText={addte}
      style={styles.inputBox}/>
      <Text style={styles.TextSt}>You are writing</Text>
      <Text style={styles.TextSt}>{text}</Text>
    </View>
  )
}

export default TextDisplay

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingHorizontal:'10%',
        paddingVertical:'10%',
        justifyContent:'center',
      
        backgroundColor:'white'

    },
    inputBox:{
        height:'10%',
        width:'90%',
        backgroundColor:'tomato',
        borderRadius:5,
        fontSize:16,
        fontWeight:'bold',
        paddingHorizontal:10

    },
    TextSt:{
        fontSize:20,
        fontWeight:'500',
        color:'black',
       marginVertical:'10%'
    }
})
