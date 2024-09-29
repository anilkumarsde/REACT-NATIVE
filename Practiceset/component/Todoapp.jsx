import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useState } from 'react'
const data = [
    { id: 1, title: 'sleep' }
]
const Todoapp = () => {
  const[todolist,setTodolist]=useState(data)
    const [todo, setTodo] = useState('')
    const addTodo=useCallback(()=>{
        const obj={
            id:Math.random(),
            title:todo
        }
        console.log(data)
        // data.push(obj)
        setTodolist((predata)=>[...predata,obj])

    },[todo])
    const addTask = () => {
        const obj={
            id:Math.random(),
            title:todo
        }
        console.log(data)
        data.push(obj)
    }
    const removeTask = () => {

    }

    return (


        <View style={styles.mainContainer}>
            <Text style={styles.heading}>todo app</Text>
            <View style={styles.container}>

                <TextInput
                    style={styles.textbox}
                    placeholder='Enter Task'
                    placeholderTextColor={"red"}
                    value={todo}
                    onChangeText={(text)=>setTodo(text)}
                    />

                <TouchableOpacity style={styles.button} onPress={addTodo}>

                    <Text style={styles.Textst}>Add Task</Text>
                </TouchableOpacity>
                {
                    todolist.map((item) => (
                        <View style={styles.TaskAdder}>
                            <Text style={styles.Textst}>{item.title}</Text>
                            <View style={styles.Button1}>
                                <TouchableOpacity style={styles.button2}>
                                    <Text style={styles.Textst1}>Edit</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button2}>
                                    <Text style={styles.Textst1}>Remove</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))
                }
            </View>

        </View>





    )
}

export default Todoapp

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#dcdde1'

    },
    container: {
        width: '95%',
        margin: 10
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        color: 'black'

    },
    textbox: {

        paddingHorizontal: 10,
        height: 50,
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#2f3640',



    },
    button: {
        height: 40,
        // backgroundColor:'red',
        width: 100,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#2f3640',
        marginVertical: 10,
        marginHorizontal: 1
    },
    Textst: {
        fontSize: 14,
        fontWeight: '500',

        color: '#2f3640'
    },
    TaskAdder: {
        height: 50,
        flexDirection: 'row',

        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#f5f6fa',
        borderRadius: 4,
        marginBottom: 10


    },
    Button1: {
        flexDirection: 'row',
        alignItems: 'center',
        height: 50,
        width: '85%',
        justifyContent: 'flex-end'

    },
    button2: {
        height: 40,
        backgroundColor: '#273c75',
        width: 70,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
        marginHorizontal: 5
    },
    Textst1: {
        fontSize: 14,
        fontWeight: '600'
    }


})