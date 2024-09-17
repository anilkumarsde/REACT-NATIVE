import { Button, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
const NewProject = () => {

  return (
    <ScrollView style={styles.screen}>
      <View style={styles.container}>
        <View style={styles.ProfileContainer}>
          <Image
            source={{
              uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHDokgeAAruOyE2ecQr-9DuSuvHI50t4diPsFXgoR6T8KRhhQ0QEPAKVFIllCxSLQ0BWs&usqp=CAU',
            }}
            style={styles.Imagecard}
          />
          <View style={styles.profile}>
            <Text style={styles.Name}>John Doe</Text>
            <Text style={styles.address}>Rudrapur City Uttrakhand</Text>
            <Text style={styles.dob}>+91 919924XXXX
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.courseContainer}>
        <View style={styles.hedingBox}>
          <Text style={styles.text}>My Courses</Text>
          <Text style={styles.text}>View All</Text>
        </View>
        <View style={styles.ListBox}>
          <Text style={styles.Featuers}>Payment</Text>
          <Text style={styles.Featuers}>Courses</Text>
          <View style={styles.notificationBox}>
            <Text style={styles.Featuers}>Notifications</Text>
            <TouchableOpacity >
              <Text style={styles.Featuers}>Click me</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.Featuers}>Whislist</Text>
        </View>
      </View>
      <View style={styles.footerContainer}>
        <Text style={styles.headingText}>Address</Text>
        <View style={styles.description}>
          <Text style={styles.stylesDescrption}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, cum, veniam similique natus perferendis repellat nisi iusto itaque, nemo blanditiis ex deserunt dignissimos illo voluptas labore nesciunt soluta explicabo hic inventore exercitationem modi! Obcaecati eum hic, ex ad necessitatibus eaque.</Text>
        </View>
          <View style={styles.buttonStyle}>
            <Button title='Log Out'></Button>
          </View>

      </View>

    </ScrollView>
  );
};
export default NewProject;
const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#dcdde1',
  },
  container: {
    height: 300,
    width: 380,
    justifyContent: 'center',
    paddingHorizontal: 10,

  },
  ProfileContainer: {
    flexDirection: 'row',
  },
  Imagecard: {
    height: 80,
    width: 60,
    borderRadius: 10,
    marginHorizontal: 10,
    backgroundColor: 'red'
  },
  profile: {
    height: 80,
    marginLeft: 10
  },
  Name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2f3640',
  },
  address: {
    fontSize: 12,
    color: '#2f3640',
    paddingBottom: 10,
    fontWeight: 'bold'
  },
  dob: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#2f3640',
  },
  courseContainer: {
    height: 200,
    width: 380,

    paddingHorizontal: 10,

  },
  hedingBox: {
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,

  },
  text: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#2f3640',
  },
  ListBox: {
    height: 200,
    width: 380,
    paddingHorizontal: 24,
    paddingVertical: 5,
  },
  Featuers: {
    paddingVertical: 4,
    fontSize: 12,
    fontWeight: 'bold',
    color: '#2f3640',
  },
  notificationBox: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  headingText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2f3640',
    paddingHorizontal: 10
  },
  footerContainer: {
    height: 300,
    width: 380,
    paddingHorizontal: 10
  },
  description: {
    height: 150,
    width: 370,
  padding:10,
  margin:10
  },
  stylesDescrption:{
    fontSize:12,
    color: '#2f3640',

  },
  buttonStyle:{
    color:'red',
    width:300,
    marginHorizontal:25,



  }


});
