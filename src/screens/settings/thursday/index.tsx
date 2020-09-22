import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import { SaveItem } from '../../../services/storage'
import { FlatList, SafeAreaView, ScrollView , StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";


function saveChanges(){
    SaveItem('thursday',  JSON.stringify(defaultData));
};

function changeItem(data, time, name, color, colorText){
  var day = data
  for(var prop in day){
      if(prop['time']==time){
        prop = {time:time, name:name, color:color, colorText:colorText};
      }
  }
};

const Item = ({ item, onPress, style, styleText }) => (
  <TouchableOpacity style={[styles.item, style]} onPress={onPress}>
    <Text style={[styles.title, styleText]}> {item.time} </Text>
    <Text style={[styles.title, styleText]}> {item.name} </Text>
  </TouchableOpacity>
);

const ItemActivities = ({ item, onPress, style, styleText }) => (
  <TouchableOpacity style={[styles.item, style]} onPress={onPress}>
    <Text style={[styles.title, styleText]}> {item.name} </Text>
  </TouchableOpacity>
);

const screen = () => {

  const [defaultData, setDefaultData] = useState([
        { time: '06:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '06:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '07:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '07:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '08:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '08:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '09:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '09:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '10:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '10:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '11:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '11:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '12:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '12:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '13:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '13:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '14:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '14:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '15:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '15:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '16:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '16:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '17:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '17:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '18:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '18:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '19:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '19:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '20:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '20:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '21:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '21:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '22:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '22:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '23:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '23:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '00:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '00:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '01:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '01:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '02:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '02:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '03:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '03:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '03:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '03:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '03:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '03:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '03:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '04:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '04:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '05:00', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
        { time: '05:30', name: 'tempo livre', color:'#ffffff', colorText: '#000000' },
       ]);       
  const [data, setData] = useState( defaultData );
  const [activities, setActivities] = useState([
    { name: 'Tempo Livre', color:'#87CEFA', colorText: '#ffffff' },
    { name: 'Sono', color:'#FFB6C1', colorText: '#000000' },
    { name: 'Aulas da faculdade', color:'#B22222', colorText: '#ffffff' },
    { name: 'Revisar Materia', color:'#A9A9A9', colorText: '#000000' },
    { name: 'programar', color:'#7CFC00', colorText: '#000000' },
    { name: 'Alimentação', color:'#FFD700', colorText: '#ffffff' },
    { name: 'Academia', color:'#8B008B', colorText: '#ffffff' },
    { name: 'Ingles', color:'#4B0082', colorText: '#ffffff' }
]);
   const [selectedActivite, setSelectedActivitie] = useState(activities[0]['name']);
   


  useEffect(() => {

  try {
  
    AsyncStorage.getItem('thursday').then((response) => {
    const value = response;
    if(value !== null){ 
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

  });



  const renderItem = ({ item }) => {
    const backgroundColor = item.color;
    const color = item.colorText;

    return (
      <Item
        item={item}
        onPress={changeItem}
        style={{ backgroundColor }}
        styleText={{ color }}
      />
    );
  };

  const renderItemActivities = ({ item }) => {
    const backgroundColor = item.color;
    const color = item.colorText;

    return (
      <ItemActivities
        item={item}
        onPress={setSelectedActivitie(ItemActivities.name)}
        style={{ backgroundColor }}
        styleText={{ color }}
      />
    );
  };


  return (
    <ScrollView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.item2} onPress={saveChanges}>
          <Text>
            Salvar alterações
          </Text>
        </TouchableOpacity>
      </View>
      <View>
          <Text style={styles.title2}>
              selecione a atividade
          </Text>
          <FlatList
            horizontal={true}
           // numColumns={12}
            data={activities}
            renderItem={renderItemActivities}
            //keyExtractor={(item) => item.id}
            //extraData={selectedId}
          />
      </View>
      <View>
        <Text style={styles.title2}>
          mude o cronograma:
        </Text>
        <Text>
            
        </Text>
      </View>
      <View>
        <FlatList
          horizontal={true}
         // numColumns={12}
          data={data}
          renderItem={renderItem}
          //keyExtractor={(item) => item.id}
          //extraData={selectedId}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#191919',
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  item2: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#ffffff'
  },
  title: {
    fontSize: 32,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title2: {
    fontSize: 32,
    justifyContent: 'center',
    alignItems: 'center',
    color: '#ffff'
  },
});

export default screen;