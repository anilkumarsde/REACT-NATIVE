import { Button, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Toggle = () => {
    const [show,setShow]=useState(false)
  return (
    <View>
      <Text>Toggle</Text>
      <Button title='Show Data' onPress={()=>setShow(!show)}/>
        {
            show?<User />:null
        }
    </View>
  )
}
const User=()=>{
    return(
        <View>
            <Text style={{fontSize:30,color:'red'
            }}>Hi i'm Here</Text>
        </View>
    )
}

export default Toggle

const styles = StyleSheet.create({})