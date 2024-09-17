import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Colormode from './component/Colormode';
import Flatcard from './component/Flatcard';
import ElevatedCard from './component/ElevatedCard';
import FancyCard from './component/FancyCard';
import Actioncard from './component/Actioncard';
import Contactlist from './component/Contactlist';


const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Flatcard />
        <ElevatedCard />
        <FancyCard />
        <Contactlist />
        <Actioncard />
      </ScrollView>
      <Text>hi</Text>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
