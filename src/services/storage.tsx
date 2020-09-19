import AsyncStorage from '@react-native-community/async-storage';
import React, { useState } from 'react';

async function SaveItem(name:string, item:string) {

    try {

      const response =  await AsyncStorage.setItem(name, item); 
      return response
  
    } catch (error) {
  
      console.log("Error to get saved data");
  
    }
};

async function GetItem(item:string) {

  try {

    const response =  await AsyncStorage.getItem(item); 
    return response;

  } catch (error) {

    console.log("Error to get saved data");

  }
};

export async function saveActivities(activities:Array<Object>){
  try {

    await AsyncStorage.setItem('activities', JSON.stringify(activities)); 
    console.log('saved!');

  } catch (error) {

    console.log("Error to get saved data");

  }
}

export async function getActivities(){
  const [list, setList] = useState(null)
  try {

    const value =  await AsyncStorage.getItem('activities'); 
    setList(value);

  } catch (error) {

    console.log("Error to get saved data");

  };
  if(list !== null){
    return JSON.parse(list);
  };
}