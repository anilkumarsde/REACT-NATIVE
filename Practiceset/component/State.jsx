import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const State = () => {
    const [name, setName] = useState("Anil");
    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>{name}</Text>
                <Button title='Pressme' onPress={() => setName("kumar")} />
            </View>
        </View>
    )
}

export default State

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: "center",
        height: 400,
        width: 400,
        backgroundColor: '#b3b3f1'

    },
    text: {
        fontSize: 50,
        fontWeight: "bold"
    }
})