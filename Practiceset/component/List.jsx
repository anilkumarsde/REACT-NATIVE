import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const List = () => {
    const User=[
        {
            id:1,
            name:"Anil"
        },
        {
            id:2,
            name:"Sunil"

        },

        {
            id:3,
            name:"Amit"

        },
        {
            id:4,
            name:"Sumita"
        },
        {
            id:5,
            name:"Robin"

        },
        {
            id:6,
            name:"Punit"

        },
   

    ]
  return (
    <View>
      <Text style={styles.headingText}>List With FlatList</Text>
       <View  style={styles.Listbox}>
       <FlatList

        data={User}
        renderItem={({item})=><Text style={styles.textbox}>{item.name}</Text>}
        />
       </View>
    </View>
  )
}

export default List

const styles = StyleSheet.create({
    headingText:{
        fontSize:24,
        fontWeight:'bold',
        paddingHorizontal:8
    },
    Listbox:{
        height:500,
        width:320,
        backgroundColor:'#fc6471',
        paddingHorizontal:50,
        margin:30,
        borderRadius:10,
        paddingVertical:10,



    },
    textbox:{
        fontSize:24,
        fontWeight:'bold',
        borderWidth:1,
        margin:10,
        padding:10,
        borderRadius:5

    },

})