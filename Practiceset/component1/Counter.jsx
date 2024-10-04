import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);
    const increaseCount=()=>{
        if(count<10){
            setCount(count+1) 
        }

    }
    return (
        <View style={styles.container}>
            <Text style={styles.textStyle}>Count: {count}</Text>
            <TouchableOpacity style={styles.button}
            onPress={increaseCount} >
                <Text style={[styles.textStyle, styles.textStyleS]}>Press me</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Counter

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white'
    },
    textStyle: {
        fontSize: 20,
        fontWeight: 'bold',
        color:'black'
    },
    button: {
        height: '10%',
        backgroundColor: 'tomato',
        width: '30%',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: '10%'

    },
    textStyleS: {
        fontSize: 14,
        color: 'black'
    }

})