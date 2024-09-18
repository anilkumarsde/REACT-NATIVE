import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'

const UseE = () => {
  const [count ,setCount]=useState(1);
  useEffect(()=>{
    console.warn("hi");
  },[])
  return (
    <View>
      <Text>anil kumar</Text>
      <Text>{count}</Text>
      <Button title='press me' onPress={()=>setCount(count+1)} />
    </View>
  )
}

export default UseE

const styles = StyleSheet.create({})