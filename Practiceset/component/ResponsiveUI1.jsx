import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {
    responsiveHeight,
    responsiveWidth,
    responsiveFontSize
} from "react-native-responsive-dimensions";
const ResponsiveUI1 = () => {
    return (
        <View style={styles.Container}>
            <View style={styles.Header}>
                 <Text style={styles.Textst}>Lorem ipsum dolor sit
                 </Text>

            </View>

            <View style={styles.main}>
                <View style={styles.box1}>

                </View>
                <View style={styles.box2}>

                </View>

            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.fonts}>Pres me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.fonts}>Pres me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button1}>
                    <Text style={styles.fonts}>Pres me</Text>
                </TouchableOpacity>

            </View>

        </View>
    )
}
export default ResponsiveUI1
const styles = StyleSheet.create({

    Container: {
        flex:1
    },
    Header:{
        height:responsiveHeight(15),

    },
    Textst: {
        fontSize: responsiveFontSize(5)
    },
    main: {
        height:responsiveHeight(70),
        flexDirection: 'row'
    },
    box1: {
        backgroundColor: 'tomato',
        height: responsiveHeight(70),
        width: responsiveWidth(50)
    },
    box2: {
        backgroundColor: 'skyblue',
        height: responsiveHeight(70),
        width: responsiveWidth(50)
    },
    footer: {
        height:responsiveHeight(15),
        backgroundColor: 'blue',
        flexDirection:'row'
    },
    button1:{
        height:responsiveHeight(10),
        width:responsiveWidth(50),
        backgroundColor:'red',
        borderRadius:responsiveWidth(5),
        justifyContent:'center',
        alignItems:'center',
        marginTop:responsiveHeight(1),
    },
    fonts:{
        fontSize:responsiveFontSize(3),
        fontWeight:'bold'
    }
})