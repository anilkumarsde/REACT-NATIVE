import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Hooks = () => {
    const [value, setValue] = useState(0)
    // useEffect(() => {
    //     console.log("hello i will be calling always")
    // },)
    useEffect(() => {
        console.log("hello1 i will be calling only for one time when page will be updated")
    },[])
    useEffect(() => {
        console.log("hello2 i will be calling when value will be updated")
    },[value])
    return (
        <View style={styles.container}>
            <Text>{value}</Text>
            <TouchableOpacity style={styles.Button}
                onPress={() => {
                    setValue(value + 1)
                }}
            >
                <Text>Increase count</Text>

            </TouchableOpacity>
        </View>
    )
}

export default Hooks

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    Button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        height: 60,
        width: 200,
        marginTop: 40
    }
})