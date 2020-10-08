import AsyncStorage from '@react-native-community/async-storage';
import { exempleData } from '../exemples'
//import React, { useState } from 'react';

export async function SaveItem(name:string, item:string) {

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

export function changeItem(nameDay:string, DataOfday:Array<Object>, setDay:Function, item:Object, time:string){
  var dataEdit = DataOfday;

  for(var i in dataEdit){
    if(dataEdit[i].time==time){
      dataEdit[i] = {
      time:time, 
      name:item.name, 
      color:item.color, 
      colorText:item.colorText
      };
    };
  };
  setDay(dataEdit);
  try {
    AsyncStorage.setItem(nameDay, JSON.stringify(dataEdit));
    console.log("Data Changed");
  } catch (error) {
    console.log("Error to save data");
    console.log(error);
  };
};
