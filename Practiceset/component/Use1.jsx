import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const Use1 = () => {
    const [count, setCount] = useState(1);
    const [data, setData] = useState(100);
    // useEffect(() => {
    //     console.warn("do some animation")
    // }, [count])
    // useEffect(() => {
    //     console.warn("do call API")
    // }, [data])
    return (
        <View>
            <Text>Use1</Text>
            <Text style={{ fontSize: 24 }}>UseEffect in Update State {count}</Text>
            <Text style={{ fontSize: 24 }}>UseEffect in Update State {data}</Text>
            <Button title='Update count' onPress={() => setCount(count + 1)} />
            <Button title='Update Data' onPress={() => setData(data + 1)} />
            <User info={{ count, data }} />
        </View>
    )
}
const User = (props) => {
    useEffect(() => {
        console.warn("run this when data prop is updated")
    }, [props.info.data])
    return (
        <View>
            <Text style={{ fontSize: 30 }}>{props.info.data}</Text>
        </View>

    )
}

export default Use1

const styles = StyleSheet.create({})