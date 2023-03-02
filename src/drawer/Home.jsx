import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = ({navigation}) => {
  return (
    <View style={{flex:1 ,justifyContent:'center', alignItems:'center'}}>
      <Text style={{color:'black',fontSize:24}}
        onPress={()=>navigation.toggleDrawer()}
      >Go To Drawer Navigation</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})