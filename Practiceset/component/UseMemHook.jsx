import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useMemo, useState } from 'react'

const UseMemHook = () => {
    const [count, setCount] = useState(0)
    const [count1, setCount1] = useState(0)
    const Evencheck = useMemo(() => {
        console.warn('i am calling when count updated')
        return count % 2 === 0
    }, [count])
    return (
        <View style={styles.container}>
            <View style={styles.box1}>
                <Text style={styles.fontsy}>{count}</Text>
                <Button title='press me' onPress={() => setCount(count + 1)} />
                {
                    Evencheck ? <Text style={styles.fontsy}>Even</Text> : <Text style={styles.fontsy}>Odd</Text>
                }
            </View>
            <View style={styles.box2}>
                <Text style={styles.fontsy}>{count1}</Text>
                <Button title='press me' onPress={() => setCount1(count1 + 1)} />
            </View>

        </View>
    )
}

export default UseMemHook

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    fontsy: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    box1: {

        // justifyContent: 'center',
        alignItems: 'center',
        marginBottom:50
    },

    box2: {
        // justifyContent: 'center',
        alignItems: 'center' 
    }
})