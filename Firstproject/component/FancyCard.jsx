import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const FancyCard = () => {
    return (
        <View>
            <Text style={styles.headingText}>Trending Place</Text>
            <View style={[styles.card, styles.FancyCard]}>
                <Image source={{ uri: 'https://media.istockphoto.com/id/1291961188/photo/stunning-view-of-the-hawa-mahal-at-sunset-with-blurred-people-walking-during-the-covid-19.jpg?s=612x612&w=0&k=20&c=6au0sGRJARDE3Y6sjuZotM2aMJR3X2AUc9zUP37lcBk=' }} style={styles.cardImage}></Image>
                <View style={styles.cardBody}>
                    <Text style={styles.cardTitle}>Hawa Mahal</Text>
                    <Text style={styles.cardLabel}>Pink City</Text>
                    <Text style={styles.cardDescription}>Hawa mahal is an iconic pink sandstone palace known for its unique five-story façade with 953 small windows, or "jharokhas." Built in 1799 by Maharaja Sawai Pratap Singh, the structure was designed to allow royal women to observe street festivals without being seen, maintaining their privacy according to the purdah system. The palace is a stunning example of Rajput architecture, blending Hindu and Islamic styles.</Text>
                    <Text style={styles.cardFooter}>12 min away</Text>
                </View>
            </View>
        </View>
    )
}

export default FancyCard

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8
    },
    card: {
        height: 550,
        width: 360,
        borderRadius: 8,
        marginVertical: 12,
        marginHorizontal: 14,

    },
    FancyCard: {
        backgroundColor: '#ffffff',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1
        }
    },
    cardImage: {
        height: 250,
        marginBottom: 8,
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    cardTitle: {
        fontSize: 22,
        color: 'black',
        fontWeight: 'bold',
        marginBottom: 4
    },
    cardLabel: {
        color: "#f28482",
        fontSize: 17,
        fontWeight: "bold",
        marginBottom: 6
    },
    cardDescription: {
        color: "#003049",
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 12,

    },
    cardFooter: {
        color: "#000000",
        fontSize: 12,
        fontWeight: 'bold'
    }
})