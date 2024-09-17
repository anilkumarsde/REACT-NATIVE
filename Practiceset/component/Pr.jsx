import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Pr = () => {
    const Fruit = (val) => {
        return (
            console.log(val)
        )
    }
    return (
        <View>
            <Text>Pr</Text>
            <Button title='Press me' onPress={Fruit} />
            <Button title='Press me' onPress={() => Fruit("Hello Anil")} />
        </View>
    )
}

export default Pr

const styles = StyleSheet.create({})