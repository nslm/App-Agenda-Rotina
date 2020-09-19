import React, { useState } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import { FlatList, SafeAreaView, ScrollView , StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const defaultData = [
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
];

function changeItem(){
  console.log("click")
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

const lista = () => {

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
        onPress={changeItem}
        style={{ backgroundColor }}
        styleText={{ color }}
      />
    );
  };

  const [data, setData] = useState([defaultData,defaultData,defaultData,defaultData,defaultData,defaultData,defaultData]);
  const [activities, setActivities] = useState([
    { name: 'Tempo Livre', color:'#87CEFA', colorText: '#ffffff' },
    { name: 'Sono', color:'#FFB6C1', colorText: '#000000' }
  ]);

  try {
  
    AsyncStorage.getItem('week').then((response) => {
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



  return (
    <ScrollView style={styles.container}>
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
          <Text style={styles.title2}>
              Segunda feira
          </Text>
          <FlatList
            horizontal={true}
           // numColumns={12}
            data={data[0]}
            renderItem={renderItem}
            //keyExtractor={(item) => item.id}
            //extraData={selectedId}
          />
      </View>
      <View>
          <Text style={styles.title2}>
              terça feira
          </Text>
          <FlatList
            horizontal={true}
            //numColumns={12}
            data={data[1]}
            renderItem={renderItem}
            //keyExtractor={(item) => item.id}
            //extraData={selectedId}
          />
      </View>
      <View>
          <Text style={styles.title2}>
              quarta feira
          </Text>
          <FlatList
            horizontal={true}
           // numColumns={12}
            data={data[2]}
            renderItem={renderItem}
            //keyExtractor={(item) => item.id}
            //extraData={selectedId}
          />
      </View>
      <View>
          <Text style={styles.title2}>
              quinta feira
          </Text >
          <FlatList
            horizontal={true}
            //numColumns={12}
            data={data[3]}
            renderItem={renderItem}
            //keyExtractor={(item) => item.id}
            //extraData={selectedId}
          />
      </View>
      <View>
          <Text style={styles.title2}>
              sexta feira
          </Text>
          <FlatList
            horizontal={true}
            //numColumns={12}
            data={data[4]}
            renderItem={renderItem}
            //keyExtractor={(item) => item.id}
            //extraData={selectedId}
          />
      </View>
      <View>
          <Text style={styles.title2}>
              sabado
          </Text>
          <FlatList
            horizontal={true}
            //numColumns={12}
            data={data[5]}
            renderItem={renderItem}
            //keyExtractor={(item) => item.id}
            //extraData={selectedId}
          />
      </View>
      <View>
          <Text style={styles.title2}>
              domingo
          </Text>
          <FlatList
            horizontal={true}
            //numColumns={12}
            data={data[6]}
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

export default lista;