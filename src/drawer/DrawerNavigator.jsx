import { StyleSheet, Text, View ,Image} from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from './Home';
import Bookings from './Bookings';
import Chats from './Chats';
import MyAccount from './MyAccount';
import About from './About';
import Themes from './Themes';
import  Icon  from 'react-native-vector-icons/AntDesign';
import  SecIcon  from 'react-native-vector-icons/Entypo';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
   <Drawer.Navigator>
        <Drawer.Screen name='Home' component={Home} 
        options={
          {headerShown:true,
          headerTitleAlign: 'center',
          title:'Home',
          drawerLabel: 'Home',
          drawerIcon: () => (
            <Icon
               name="home"
               size={28}
               color='black'
            />
         ),          }
          }
          />
        <Drawer.Screen name='Bookings' component={Bookings}         
        options={
          {headerShown:true,
          headerTitleAlign: 'center',
          title:'Bookings',
          drawerLabel: 'Bookings',
          drawerIcon: () => (
            <Icon
               name="book"
               size={28}
               color='black'
            />
         ),          }
          }/>
        <Drawer.Screen name='Chats' component={Chats}         
        options={
          {headerShown:true,
          headerTitleAlign: 'center',
          title:'Chats',
          drawerLabel: 'Chats',
          drawerIcon: () => (
            <SecIcon
               name="chat"
               size={28}
               color='black'
            />
         ),          }
          }/>
        <Drawer.Screen name='MyAccount' component={MyAccount}         
        options={
          {headerShown:true,
          headerTitleAlign: 'center',
          title:'My Account',
          drawerLabel: 'My Account',
          drawerIcon: () => (
            <Icon
               name="user"
               size={28}
               color='black'
            />
         ),          }
          }/>
        <Drawer.Screen name='About' component={About}         
        options={
          {headerShown:true,
          headerTitleAlign: 'center',
          title:'About',
          drawerLabel: 'About',
          drawerIcon: () => (
            <Icon
               name="infocirlceo"
               size={28}
               color='black'
            />
         ),          }
          }/>
   </Drawer.Navigator>
  )
}
export default DrawerNavigator

const styles = StyleSheet.create({
  icon:{
    width:'20%',
    height:undefined,
    aspectRatio:1,

    backgroundColor:'yellow'
  }
})