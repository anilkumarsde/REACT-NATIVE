import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveScreenWidth, responsiveWidth } from 'react-native-responsive-dimensions'
const Ui = () => {
    return (
        <View style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                <Text style={styles.stylesFont}>Lorem ipsum dolor sit amet.</Text>
            </View>
            {/* main */}
            <View style={styles.main}>
                <View style={styles.section1}></View>
                <View style={styles.section2}></View>
            </View>
            {/* footer */}
            <View style={styles.footer}>
                <TouchableOpacity style={styles.button} onPress={()=>{
                    console.warn('hi')
                }}>
                    <Text>Press me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{
                    console.warn('hi')
                }}>
                    <Text>Press me</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={()=>{
                    console.warn('hi')
                }}>
                    <Text>Press me</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Ui
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flex: 1,
        backgroundColor: 'skyblue'
    },
    main: {
        flex: 2,
        flexDirection: 'row'
    },
    section1: {
        flex: 1,
        backgroundColor: 'orange'
    },
    section2: {
        flex: 1,
        backgroundColor: 'tomato'
    },
    footer: {
        flex:1,
        backgroundColor: 'grey',
        flexDirection:'row',
        paddingHorizontal:responsiveWidth(2),
        paddingVertical:responsiveScreenWidth(2),

    },
    stylesFont:{
        textAlign:'center',
        fontSize:responsiveFontSize(4)

    },
    button:{
        height:responsiveHeight(5),
        backgroundColor:'#D980FA',
        width:responsiveScreenWidth(20),
        justifyContent:'center',
        alignItems:'center',
        borderRadius:responsiveWidth(1)
    }

})