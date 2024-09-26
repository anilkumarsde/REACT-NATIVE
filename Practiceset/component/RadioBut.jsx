import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const RadioBut = () => {
    const [radio1, setRadio1] = useState(1)
    return (
        <View style={styles.Conatainer}>
            <Text style={styles.fonts}>Radio Button in React Native</Text>
            <TouchableOpacity onPress={() => setRadio1(1)}>
                <View style={styles.ButnWrapper}>
                    <View style={styles.button}>
                        {
                            radio1 === 1 ? <View style={styles.buttonColor}></View> : null
                        }
                    </View>
                    <Text style={styles.fonts}>Radio 1</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setRadio1(2)}>
                <View style={styles.ButnWrapper}>
                    <View style={styles.button}>
                        {
                            radio1 === 2 ? <View style={styles.buttonColor}></View> : null
                        }
                    </View>
                    <Text style={styles.fonts}>Radio 2</Text>
                </View>
            </TouchableOpacity>



        </View>
    )
}

export default RadioBut

const styles = StyleSheet.create({
    Conatainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    ButnWrapper: {
        flexDirection: 'row',
        alignItems: 'center'

    },
    button: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderRadius: 20,
        margin: 10,
        borderColor:'#574b90'
    },
    fonts: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#574b90'
    },
    buttonColor: {
        height: 32,
        width: 32,
        backgroundColor: '#574b90',
        borderRadius: 16,
        margin: 3

    }

})