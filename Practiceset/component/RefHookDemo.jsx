import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useRef } from 'react'

const RefHookDemo = () => {
    const reference = useRef()
    return (
        <View>
            <Text>RefHookDemo</Text>
            <TextInput placeholder='Enter name' ref={reference}
            style={styles.TextInputBox} />
            <Text onPress={() => {
                reference.current.focus()
               
            }}
            style={styles.Textstyles}>Focus</Text>

        </View>
    )
}

export default RefHookDemo

const styles = StyleSheet.create({
    TextInputBox:{
        borderWidth:1,
        textAlign:'center',
        margin:15
    },
    Textstyles:{
        fontSize:20,
        fontWeight:'bold',
        textAlign:'center'
    }
})