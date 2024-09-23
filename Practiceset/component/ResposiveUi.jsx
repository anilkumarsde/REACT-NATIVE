import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
const { height, width } = Dimensions.get("window");
const ResposiveUi = () => {
  return (
    <View style={styles.container}>
      {/* header */}
      <View style={styles.header}></View>
      {/* main */}
      <View style={styles.main}>
        <View style={styles.section1}></View>
        <View style={styles.section2}>
          <Text style={styles.Texts

          }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium rem consequuntur cum minus possimus harum, sint a ullam suscipit recusandae tempora provident alias quo, dolor et quos officiis esse inventore nulla ipsam natus velit nobis quis nostrum! Facilis quis dolorem, expedita nemo consectetur, sit, tempora aut eveniet voluptatibus facere placeat?</Text>
        </View>
      </View>
      {/* footer */}
      <View style={styles.footer}></View>

    </View>
  )
}

export default ResposiveUi

const styles = StyleSheet.create({
  container: {
    // height: hp(100)
    flex:1

  },
  header: {
    // height: hp(15),
    flex:1,
    backgroundColor: 'tomato'
  },
  main: {
    // height: hp(70),
    flex:3,
    display: 'flex',
    flexDirection: 'row'
  },
  section1: {
    // width: wp(50),
    flex:1,
    backgroundColor: 'orange'
  },
  section2: {
    // width: wp(50),
    flex:1,

    backgroundColor: 'skyblue'
  },
  footer: {
    // height: hp(15),
    flex:1,
    backgroundColor: 'lightgreen'
  },
  Texts:{
    fontSize:hp(5)
  }
})