import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
const arr = [
    { id: 1, name: 'Pawan' },
    { id: 2, name: 'Vivek' },
    { id: 3, name: 'Susil' },
    { id: 4, name: 'Kumar' },
    { id: 5, name: 'Mandal' },

]
const arr1 = [
    {
        id: 1, name: 'Anil', age: 23
    },
    {
        id: 2, name: 'Suni', age: 89
    },
    {
        id: 3, name: 'Vipin', age: 24
    },
    {
        id: 4, name: 'Pawan', age: 20
    },
];
const arr2 = arr1.filter((val) => {
    return val.age > 18
})

const Data = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.fontS}>Data</Text>
            {
                arr.map((val) => (
                    <View key={val.id} style={styles.item}>
                        <Text style={styles.fontS}>{val.id}</Text>
                        <Text style={styles.fontS}>{val.name}</Text>
                    </View>
                ))
            }
            {
                arr2.map((val) => (
                    <View style={styles.item} key={val.id}>
                        <Text style={styles.fontS}>{val.id}</Text>
                        <Text style={styles.fontS}>{val.name}</Text>
                    </View>
                ))
            }
        </View>
    )
}

export default Data

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    item: {
        height: '10%',
        width: '90%',
        backgroundColor: 'skyblue',
        marginVertical: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    fontS: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'black',
        textAlign: 'center',
        paddingHorizontal: 10
    }
})
