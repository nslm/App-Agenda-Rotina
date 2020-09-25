import React, { useRef, useEffect, useState } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import { SaveItem } from '../../../services/storage'
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { TouchableOpacity as RNGHTouchableOpacity } from 'react-native-gesture-handler';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { exempleData, exempleActivities } from '../../../exemples'
import {styles} from '../styles'


const Item = ({ item, onPress, style, styleText }) => (
  <TouchableOpacity style={[styles.item, style]} onPress={onPress}>
    <Text style={[styles.title, styleText]}> {item.time} </Text>
    <Text style={[styles.title, styleText]}> {item.name} </Text>
  </TouchableOpacity>
);

const Item2 = ({ item, onPress, style, styleText }) => (
  <RNGHTouchableOpacity style={[styles.item, style]} onPress={onPress}>
    <Text style={[styles.title, styleText]}> {item.name} </Text>
  </RNGHTouchableOpacity>
);




const screen = () => {
  const bs = useRef(null);
  const fall = new Animated.Value(1);

  const [data, setData] = useState(exempleData);       
  const [activities, setActivities] = useState(exempleActivities);
  const [time, setTime] = useState('06:00');
   
  function saveChanges(){
    SaveItem('monday',  JSON.stringify(data));
    bs.current?.snapTo(0);
  };

  function changeTime(time){
    bs.current?.snapTo(2);
    setTime(time);
  };

  function changeItem(item){
    bs.current?.snapTo(1);
    var day = data;
    for(var i in day){
      if(day[i].time==time){
        day[i] = {
        time:time, 
        name:item.name, 
        color:item.color, 
        colorText:item.colorText
        };
      };
    };
    console.log(day);
    setData(day);
  };

  useEffect(() => {

  try {
  
    AsyncStorage.getItem('monday').then((response) => {
    const value = response;
    if(value !== null){ 
      console.log('Data found')
      setData(JSON.parse(value));
    };
  });
      
  } catch (error) {  
    console.log("Error to get saved data");
    console.log(error)  
  };
  try {
  
    AsyncStorage.getItem('activities').then((response) => {
    const value = response;
    if(value !== null){ 
      setActivities(JSON.parse(value));
    };
  });
      
  } catch (error) {  
    console.log("Error to get saved data");
    console.log(error)  
  };

  }, []);



  const renderItem = ({ item }) => {
    const backgroundColor = item.color;
    const color = item.colorText;

    return (
      <Item
        item={item}
        onPress={ () => changeTime(item.time) }
        style={{ backgroundColor }}
        styleText={{ color }}
      />
    );
  };

  const renderItem2 = ({ item }) => {
    const backgroundColor = item.color;
    const color = item.colorText;

    return (
      <Item2
        item={item}
        onPress={ () => changeItem(item) }
        style={{ backgroundColor }}
        styleText={{ color }}
      />
    );
  };

  const renderInner = () => (
    <View style={styles.panel}>
      <View style={{alignItems: 'center'}}>
        <Text style={styles.panelTitle}>
          Selecione a Atividade
        </Text>
        <Text style={styles.panelSubtitle}>
          Só Será salva clicando em "salvar alterações"
        </Text>
        <Text style={styles.panelTitle}>
          {time}
        </Text>
        <FlatList
          data={activities}
          renderItem={renderItem2}
          keyExtractor={(item) => item.name}
        />
      </View>
      <View> 
        <Text style={{fontSize:70}}
          // gambirra pra arrumar o bug d flatlist no buttomsheet
        >          
        </Text>
      </View>
    </View>
  );

  const renderHeader = () => (
    <View style={styles.header}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={styles.item2} onPress={saveChanges}>
        <Text>
          Salvar alterações
        </Text>
      </TouchableOpacity>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.time}
        extraData={setData}
      />
        <Text style={{fontSize:36}}>
        </Text>
      <BottomSheet
        ref={bs}
        componentType="FlatList"
        snapPoints={['7%','26%','65%']}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={0}
        callbackNode={fall}
        enabledGestureInteraction={true}
      />
    </SafeAreaView>
  );
};


export default screen;