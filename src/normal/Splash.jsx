import { StyleSheet, Text, View } from 'react-native'
import React, {useEffect} from 'react'




const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Parent')
        },2000)
    }, [])
  return (
    <View>
      <Text style={{color:'black'}}>Splash</Text>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})