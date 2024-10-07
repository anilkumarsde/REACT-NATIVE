import { Alert, Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

const Todo = () => {
    const [item, setItem] = useState([]) // step 1 for storing Data
    const[text,setText]=useState('')
    const additem = () => { // step 2 for adding new data into the array
        let newItem = { id: item.length + 1, name: text };
        if(text){
            setItem([...item, newItem])
            setText('')

        }
    }
    const renderItem = ({ item }) => <View style={styles.item}>
        <Text style={styles.buttonText}>{item.name}</Text>
    </View>
    return (
        <View style={styles.container}>
            <Text>Todo</Text>
            <TextInput  placeholder='Enter Something'
            placeholderTextColor={'red'}
            value={text}
            onChangeText={(value)=>setText(value)}
            />

            <TouchableOpacity style={styles.button}
                onPress={additem}>
                <Text style={styles.buttonText}>Add item</Text>
            </TouchableOpacity>
            {/* {
                item.map((val, index) =>
                    <View key={index} style={styles.list}>
                        <Text>{val}</Text>

                    </View>)
            } */}
            <FlatList style={styles.Renderlist}
                data={item}
                keyExtractor={item => item.id}
                renderItem={renderItem} />

        </View>
    )
}

export default Todo

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: '10%'
    },
    button: {
        backgroundColor: 'tomato',
        height: '5%',
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    buttonText: {
        fontSize: 16,
        fontWeight: '500',
        color: 'white'
    },
    Renderlist:{
        flex:1,
        // backgroundColor:'red',


    },
    item:{
        backgroundColor:'green',
       height:50,
       width:'90%',
      marginVertical:'10%',
       justifyContent:'center',
       alignItems:'center',
       borderRadius:10
    }
})