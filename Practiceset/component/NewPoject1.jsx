import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NewPoject1 = () => {
    return (
        <ScrollView style={styles.parentContainer}>
            <Text style={styles.headingText}>My House</Text>
            <View style={styles.container}>
                <View style={[styles.Box, styles.box1]}>
                    <Text style={styles.heading1}>22 C </Text>
                    <Text style={styles.heading2}>Avg House Temp </Text>
                </View>
                <View style={[styles.Box, styles.box2]}>
                    <Text style={styles.heading1}>30 C</Text>
                    <Text style={styles.heading2}>Outside Temp</Text>
                </View>
                <View style={[styles.Box, styles.box3]}>
                    <Text style={styles.heading1}>60 % </Text>
                    <Text style={styles.heading2}>Humidity</Text>
                </View>
                <View style={[styles.Box, styles.box4]}>
                    <Text style={styles.heading1}>3</Text>
                    <Text style={styles.heading2}>Divices on</Text>
                </View>

            </View>

            {/* room container */}

            <Text style={styles.headingText}>My Room</Text>
            <View style={styles.Roomcontainer}>
                <View style={styles.roomBox}>
                    <Text style={styles.heading2}>Master Bed room</Text>
                </View>
                <View style={styles.roomBox}>
                    <Text style={styles.heading2}>Bed Room</Text>
                </View>
                <View style={styles.roomBox}>
                    <Text style={styles.heading2}>Kids Room</Text>
                </View>
                <View style={styles.roomBox}>
                    <Text style={styles.heading2}>Drawing Room</Text>
                </View>


            </View>
            <Text style={styles.headingText}>Daily Routeens</Text>
            <ScrollView horizontal={true} style={styles.ScrolContainer}>
                <View style={styles.ElevatedCard}>
                    <Text style={styles.heading2}>Morning</Text>
                </View>
                <View style={styles.ElevatedCard1}>
                    <Text style={styles.heading2}>Meditation</Text>
                </View>
                <View style={styles.ElevatedCard1}>
                    <Text style={styles.heading2}>I'm Out</Text>
                </View>
                <View style={styles.ElevatedCard1}>
                    <Text style={styles.heading2}>Back Home</Text>
                </View>
                <View style={styles.ElevatedCard1}>
                    <Text style={styles.heading2}>WorkOut</Text>
                </View>
                <View style={styles.ElevatedCard1}>
                    <Text style={styles.heading2}>Dinner</Text>
                </View>
                <View style={styles.ElevatedCard1}>
                    <Text style={styles.heading2}>Sleep</Text>
                </View>



            </ScrollView>


        </ScrollView>
    )
}

export default NewPoject1

const styles = StyleSheet.create({
    parentContainer: {
        height:800,
        backgroundColor: '#4b4b4b'

    },
    headingText: {
        paddingHorizontal: 22,
        marginVertical: 5,
        fontSize: 18,
        fontWeight: 'bold',
        color: '#f0932b'
    },
    container: {
        height: 200,
        width: 380,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingTop: 15,

    },
    Box: {
        height: 80,
        width: 170,
        backgroundColor: '#f0932b',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 1,
        marginVertical: 1,
    },
    box1: {
        borderTopLeftRadius: 10,

    },
    box2: {
        borderTopRightRadius: 10
    },
    box3: {
        borderBottomLeftRadius: 10
    },
    box4: {
        borderBottomRightRadius: 10
    },
    heading1: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 16
    },
    heading2: {
        color: 'black',
        fontSize: 11,
        fontWeight: 'bold'
    },
    Roomcontainer: {
        height: 150,
        width: 380,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        paddingTop: 15,
        // backgroundColor: 'green'


    },
    roomBox: {
        height: 45,
        width: '44%',
        backgroundColor: '#f0932b',
        marginVertical: 7,
        marginHorizontal: 5,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,

    },
    ScrolContainer: {
        marginHorizontal: 9
    },
    ElevatedCard: {
        height: 70,
        width: 80,
        backgroundColor: '#f0932b',
        margin: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 1,
    },
    ElevatedCard1: {
        height: 70,
        width: 80,
        backgroundColor:'#3d3d3d',

        margin: 10,
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowRadius: 1,
    }


})