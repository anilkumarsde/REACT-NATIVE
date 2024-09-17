import { Image, Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Actioncard = () => {
    const openwebsite = (websitelink) => {
        Linking.openURL(websitelink)
    }
    return (
        <View>
            <Text style={styles.headingText}>Blog card</Text>
            <View style={[styles.card, styles.elevatedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}>What's New in javascript</Text>
                </View>
                <Image
                    source={{ uri: "https://www.freecodecamp.org/news/content/images/2023/11/What-s-new.png" }}
                    style={styles.cardImage}
                />
                <View style={styles.bodyContainer}>
                    <Text
                    style={styles.text} numberOfLines={3}>  The latest update is ECMAScript 2023 (ES14), which came out in June 2023. It brings in new features like top-level await, handy array methods such as findLast() , ways to safely share data between threads, and better ways to work with text.</Text>
                </View>
                <View style={styles.footerContainer}>
                    <TouchableOpacity onPress={() => openwebsite("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/new")}>
                        <Text style={styles.socialLink}>Read more</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => openwebsite("https://www.linkedin.com/in/anil-kumar-2800a71a9/")}>
                        <Text style={styles.socialLink}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Actioncard

const styles = StyleSheet.create({
    headingText: {
      fontSize:24,
      fontWeight:'bold',
      paddingHorizontal:8
    },
    card: {
        width:360,
        height:400,
        marginHorizontal:14,
        marginVertical:15,
        borderRadius:6  
    },
    elevatedCard: {
        backgroundColor:"#d0fef5",
        elevation:3,
        shadowOffset:{
            width:1,
            height:1
        },
        shadowColor:"green",
        shadowOpacity:0.4
    },
    headingContainer: {
        height:50,
        flexDirection:'row',
        justifyContent:"center",
        alignItems:'center',
    },
    headerText:{
        fontSize:20,
        fontFamily:'Georgia',
        color:'#181616',
        fontWeight:'bold'
    },
    cardImage: {
        height: 200,
        borderRadius:10,
        margin:5

    },
    bodyContainer: {
        margin:10,
    },
    text:{
        fontSize:15,
        fontWeight:'bold',
        color:"#830a48"
    },
    footerContainer: {
        padding:8,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center'

    },
    socialLink: {
        color:'black',
        borderRadius:5,
        paddingVertical:6,
        paddingHorizontal:16,
        fontSize:16,
        backgroundColor:'#BD77FF',
        fontWeight:'bold',
        fontStyle:'italic'

    }

})