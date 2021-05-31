import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { Ionicons } from '@expo/vector-icons'
import { Home, MyLinks } from './pages'

const Drawer = createDrawerNavigator()

export const Routes = () => {
  return (
    <Drawer.Navigator
      drawerContentOptions={{
        activeBackgroundColor: '#2CCBB9',
        activeTintColor: '#FFF',
        marginTop: 16,
        labelStyle: {
          fontSize: 20
        }
      }}
    >
      <Drawer.Screen component={Home} name='Home' options={{title: 'Encurtar Link', 
        drawerIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? 'cube': 'cube-outline' } size={size} color={color} />
      )}} />
      <Drawer.Screen component={MyLinks} name='MyLinks' options={{title: 'Meus Links', 
        drawerIcon: ({ focused, color, size }) => (
          <Ionicons name={focused ? 'stats-chart': 'stats-chart-outline' } size={size} color={color} />
     )}} />
    </Drawer.Navigator>
  )
}
