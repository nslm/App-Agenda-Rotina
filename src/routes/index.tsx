import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';


import now from './now';
import today from './today';
import overview from './overview';
import settings from './settings';



const Tab = createBottomTabNavigator();


export default function ProvasRoutes() {
    return (
    <Tab.Navigator>
        <Tab.Screen name="now" component={now} />
        <Tab.Screen name="today" component={today} />
        <Tab.Screen name="overview" component={overview} />
        <Tab.Screen name="settings" component={settings} />
    </Tab.Navigator>
    );
  }