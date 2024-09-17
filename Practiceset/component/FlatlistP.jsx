import {FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const FlatlistP = () => {
  const user = [
    {
      id: 1,
      name: 'Anil Kumar',
      mail: 'anilkumar@gmail.com',
      Number: 9199245122,
    },
    {
      id: 2,
      name: 'Sunil Kumar',
      mail: 'Sunilkumar@gmail.com',
      Number: 9199255557,
    },
    {
      id: 3,
      name: 'Praveen Kumar',
      mail: 'Praveenkumar@gmail.com',
      Number: 9199244343,
    },
    {
      id: 4,
      name: 'Vivek Kumar',
      mail: 'Vivekkumar@gmail.com',
      Number: 9199254544,
    },
    {
      id: 6,
      name: 'Mukesh Kumar',
      mail: 'Mukeshkumar@gmail.com',
      Number: 9199245454,
    },
    {
      id: 7,
      name: 'Mukesh Kumar',
      mail: 'Mukeshkumar@gmail.com',
      Number: 9199245454,
    },
    {
      id: 8,
      name: 'Mukesh Kumar',
      mail: 'Mukeshkumar@gmail.com',
      Number: 9199245454,
    },
    {
      id: 9,
      name: 'Mukesh Kumar',
      mail: 'Mukeshkumar@gmail.com',
      Number: 9199245454,
    },
    {
      id: 10,
      name: 'Mukesh Kumar',
      mail: 'Mukeshkumar@gmail.com',
      Number: 9199245454,
    },
    {
      id: 11,
      name: 'Mukesh Kumar',
      mail: 'Mukeshkumar@gmail.com',
      Number: 9199245454,
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>Flatlist in React Native</Text>
      <View>
        <FlatList
          data={user}
          renderItem={({item}) => (
            <View style={styles.listItem}>
              <Text style={styles.StyleName}>Name:{item.name}</Text>
              <Text style={styles.StyleMail}>MailId:{item.mail}</Text>
              <Text style={styles.StyleNumber}>Phone{item.Number}</Text>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};
export default FlatlistP;
const styles = StyleSheet.create({
  headingText: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 15,
  },
  container: {
    // height: 1000,
    // width: 380,
  },
  listItem: {
    height: 100,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#6c5ce7',
    margin: 10,
    borderRadius: 5,
  },
  StyleName: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#dfe6e9',
  },
  StyleMail: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#dfe6e9',
  },
  StyleNumber: {
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#dfe6e9',
  },
});
