import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const name = "anil"
const age = 45
const email = 'anilkumarlks@gmail.com'
function sum1() {
    return 5 + 1
}
const sum = (a, b) => {
    return a + b
}
(fName, surName) => {
    return fName + ' ' + surName
}
const Test = () => {
    return (
        <View>
            <Text>Test</Text>
            <View>
                <Text>{name}</Text>
                <Text>{email}</Text>
                <Text>{age == 20 ? "you are old" : "you are not old"}</Text>
                <Text>{sum(5, 6)}</Text>
                <Text>{name('anil', 'kumar')}</Text>
            </View>
        </View>
    )
}

export default Test

const styles = StyleSheet.create({})