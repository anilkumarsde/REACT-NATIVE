import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [number, setNumaber] = useState('');
    const [Display, setDisplay] = useState(false);

    const ClearData=()=>{
        setName("")
        setEmail("")
        setPassword("")
        setNumaber("")
    }
    return (
        <View>
            <ScrollView>
                <View style={styles.container}>
                    <View style={styles.innnerContainer}>
                        <View style={styles.headerText}>
                            <Text style={styles.Text}>Form in React-Native</Text>
                        </View>
                        <TextInput
                            placeholder="Enter User's Name"
                            onChangeText={(text) => setName(text)}
                            value={name}
                            style={styles.TextInputBox} />
                        <TextInput
                            placeholder="Enter User's Email"
                            keyboardType='email-address'
                            onChangeText={(text) => setEmail(text)}
                            value={email}
                            style={styles.TextInputBox} />
                        <TextInput
                            placeholder="Enter User's password"
                            secureTextEntry={true}
                            onChangeText={(text) => setPassword(text)}
                            value={password}

                            style={styles.TextInputBox} />
                        <TextInput
                            placeholder="Enter User's Number"
                            keyboardType='number-pad'
                            onChangeText={(text) => setNumaber(text)}
                            value={number}
                            style={styles.TextInputBox} />
                        <View style={styles.FooterContainer}>
                            <View style={styles.ButtonConatiner}>
                                <View style={styles.Button}>
                                    <Button title='Display DATA'
                                        onPress={() => setDisplay(true)} />
                                </View>
                                <View style={styles.Button}>
                                    <Button title='Clear DATA'
                                    onPress={()=>ClearData()}/>
                                    <View>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.dataDisplay}>
                    {Display ?
                    <View >
                        <Text style={styles.showData}>{name}</Text>
                        <Text style={styles.showData}>{email}</Text>
                        <Text style={styles.showData}>{password}</Text>
                        <Text style={styles.showData}>{number}</Text>
                    </View> : null}
                </View>
                </View >
            </ScrollView>
        </View>
    )
}

export default Form

const styles = StyleSheet.create({
    container: {
        height: 900,
        width: 380,
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: "center",

    },
    innnerContainer: {
        height: 400,
        width: 300,
        backgroundColor: '#ff784f',
        borderRadius: 10,
        margin:10

    },
    headerText: {
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    Text: {
        fontSize: 24,
        fontWeight: 'bold',
        margin: 10,

    },
    TextInputBox: {
        fontWeight: 'bold',
        paddingHorizontal: 15,
        fontSize: 15,
        borderWidth: 1,
        borderColor: 'black',
        margin: 10,
        borderRadius: 8
    },
    FooterContainer: {

    },
    ButtonConatiner: {
        height: 100,
        width: 500,
        flexDirection: 'row',
        paddingHorizontal: 40,
        paddingVertical: 10
    },
    dataDisplay: {
        height: 280,
        width: 300,
        backgroundColor: '#ff784f',
        borderRadius: 10,
        margin:10,
    },
    showData:{
        fontSize:20,
        fontWeight:'bold',
        margin:15,
        paddingHorizontal:10,
    }

})