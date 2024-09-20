import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Use2 = () => {
    const [show, setShow] = useState(false)
    return (
        <View>
            <Text style={{ fontSize: 25, color: 'blue' }}>UseEffect in component did Mount Phase</Text>
            <Button title='Press me' onPress={() => {
                setShow(!show)
            }} />
            {
                show ? <Student /> : null
            }
        </View>
    )
}
const Student = () => {
    let timer = setInterval(() => {
        console.warn("I'm called")
    }, 2000)
    useEffect(() => {
        return () => clearInterval(timer)
    })
    return (
        <View>
            <Text style={{ fontSize: 20, color: 'green', }}>Lorem ipsum dolor sit amet.</Text>
        </View>
    )
}
export default Use2

const styles = StyleSheet.create({})