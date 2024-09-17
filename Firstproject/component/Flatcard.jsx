import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Flatcard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Flatcard</Text>
            <View style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text style={styles.Text}>CardOne</Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text style={styles.Text}>CardTwo</Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text style={styles.Text}>CardThree</Text>
                </View>
            </View>
        </View>
    )
}

export default Flatcard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    container: {
        flex: 1,
        flexDirection: "row"
    },
    card: {
        height: 100,
        width: 500,
        borderRadius: 8,
        margin: 8,
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    cardOne: {
        backgroundColor: "#c1121f"
    },
    cardTwo: {
        backgroundColor: "#003049"
    },
    cardThree: {
        backgroundColor: "#669bbc"
    },
    Text: {
        fontSize: 15,
        fontWeight: 'bold'
      }
})