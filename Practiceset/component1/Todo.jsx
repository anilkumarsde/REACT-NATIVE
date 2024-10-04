import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Todo = () => {
    const [item, setItem] = useState([])
    const[text,setText]=useState('')
    const additem = () => {

        setItem([...item, text])
        setText('')
    }

    return (
        <View style={styles.container}>
            <Text style={styles.fonts}>Todo</Text>
            <TextInput placeholder='Enter item....' value={text} onChangeText={(text)=>setText(text)}
                placeholderTextColor={'blue'}
                style={styles.inputField}/>

            <TouchableOpacity style={styles.button} onPress={additem}>
                <Text style={styles.fonts}>Add Item</Text>
            </TouchableOpacity>
            {
                item.map((val, index) => <View key={index}
                style={styles.ItemBox}>
                    <Text>{val}</Text>
                </View>)
            }
        </View>
    )
}

export default Todo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems:'center'


    },
    fonts: {
        fontSize: 16,
        color: 'white',
        fontWeight: '300'
    },
    button: {
        height: '5%',
        width: '50%',
        backgroundColor: 'skyblue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,

    },
    ItemBox:{
        height:'5%',
        width:'50%',
        backgroundColor:'tomato',
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:'1%'
    },
    inputField:{
        fontSize:16,
        width:'50%',
        borderWidth:1,
        marginVertical:10,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:10,
        fontWeight:'300',
        paddingHorizontal:10
    }
})