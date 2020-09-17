import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';


import home from './home';
import activities from './activities';
import settings from './settings';




const drawer = createDrawerNavigator();


export default function () {
    return (
    <drawer.Navigator>
        <drawer.Screen name="home" component={home} />
        <drawer.Screen name="activities" component={activities} />
        <drawer.Screen name="settings" component={settings} />
    </drawer.Navigator>
    );
  }