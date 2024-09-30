import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Usest = () => {
    const [name, setName] = useState('Anil')
    const [count, setCount] = useState(0);
    const changeName = () => {
        setName("Mandal")
    }
    return (
        <View style={styles.container}>
            <Text style={styles.fontS}>{name}</Text>
            <Button title='Press me' onPress={changeName} />
            <Text style={styles.fontS}>{count}</Text>
            <TouchableOpacity style={styles.butt} onPress={() => setCount(count + 1)}>
                <View >
                    <Text style={styles.font}>increase</Text>

                </View>
            </TouchableOpacity>
        </View>
    )
}

export default Usest

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fontS: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    butt: {
        height: 50,
        width: 100,
        backgroundColor: 'tomato',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5

    },
    font: {
        fontSize: 16,
        color: 'white',
        fontWeight: '300'
    }
})