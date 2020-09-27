import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import now from './now';
import next from './next';
import overview from './overview';




const Tab = createBottomTabNavigator();


export default function () {
    return (
    <Tab.Navigator
        screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
            if (route.name === 'Now') {
                return (
                <Entypo
                    name="gauge" 
                    size={23} 
                    color={color}
                />
                );
            } else if (route.name === 'Next') {
                return (
                    <Entypo
                    name="list" 
                    size={26} 
                    color={color}
                />
                );
            } else if (route.name === 'Overview') {
                return (
                    <AntDesign
                    name="piechart" 
                    size={21} 
                    color={color}
                />
                );
            }
            },
        })}
        tabBarOptions={{
            activeTintColor: '#ffffff',
            inactiveTintColor: '#000000',
            style:{
            backgroundColor: '#9ACD32',
            alignItems: 'center',
            justfyContext: 'center'
            }
        }}
    >
        <Tab.Screen name="Now" component={now} />
        <Tab.Screen name="Next" component={next}  options={{ tabBarBadge: 3 }} />
        <Tab.Screen name="Overview" component={overview} />
    </Tab.Navigator>
    );
  }