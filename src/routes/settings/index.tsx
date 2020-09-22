import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from "react";
import monday from './monday';
import tuesday from './tuesday';
import wednesday from './wednesday';
import thursday from './thursday';
import friday from './friday';
import saturday from './saturday';
import sunday from './sunday';


const Tab = createMaterialTopTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
    tabBarOptions={{
      labelStyle: { fontSize: 12 },
      tabStyle: { width: 100 },
      style: { backgroundColor: '#9ACD32' },
      scrollEnabled: true,
    }}
    >
      <Tab.Screen name="segunda" component={monday} />
      <Tab.Screen name="terça" component={tuesday} />
      <Tab.Screen name="quarta" component={wednesday} />
      <Tab.Screen name="quinta" component={thursday} />
      <Tab.Screen name="sexta" component={friday} />
      <Tab.Screen name="sabado" component={saturday} />
      <Tab.Screen name="domingo" component={sunday} />
    </Tab.Navigator>
  );
}


export default MyTabs;