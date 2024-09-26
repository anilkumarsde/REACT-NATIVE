import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const RadioBut = () => {
    const [radio1, setRadio1] = useState(1)
    const skill = [
        {
            id: 1,
            name: 'JAVA'
        },
        {
            id: 2,
            name: 'JS'
        },
        {
            id: 3,
            name: 'SQL'
        },
        {
            id: 4,
            name: 'PYTHON'
        },
        {
            id: 5,
            name: 'PHP'
        },
        {
            id: 6,
            name: 'HTML'
        },
        {
            id: 7,
            name: 'C++'
        },
        {
            id: 8,
            name: 'C'
        },
    ]
    return (
        <View style={styles.Conatainer}>
            <Text style={styles.fonts}> Dynamic   Radio Button in React Native</Text>
            {
                skill.map((item, index) => <TouchableOpacity
                    key={index} onPress={() => setRadio1(item.id)}>
                    <View style={styles.ButnWrapper}>
                        <View style={styles.button}>
                            {
                                radio1 === item.id ? <View style={styles.buttonColor}></View> : null
                            }
                        </View>
                        <Text style={styles.fonts}>{item.name}</Text>
                    </View>
                </TouchableOpacity>)
            }

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
        alignItems: 'center',
        height:50,
        width:100,
        marginTop:10

    },
    button: {
        height: 40,
        width: 40,
        borderWidth: 1,
        borderRadius: 20,
        margin: 10,
        borderColor: '#0984e3'
    },
    fonts: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#0984e3'
    },
    buttonColor: {
        height: 32,
        width: 32,
        backgroundColor: '#0984e3',
        borderRadius: 16,
        margin: 3

    }

})