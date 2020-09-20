import React, { useState } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import { FlatList, 
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text, 
  TouchableOpacity 
} from "react-native";


const Item = ({ item, style, styleText }) => (
  <TouchableOpacity style={[styles.item, style]}>
    <Text style={[styles.title, styleText]}> {item.name} </Text>
  </TouchableOpacity>
);

export default function () {

    const renderItem = ({ item }) => {
        const backgroundColor = item.color;
        const color = item.colorText;

        return (
        <Item
            item={item}
            style={{ backgroundColor }}
            styleText={{ color }}
        />
        );
    };
    
    const [list, setList] = useState([
        { name: 'Tempo Livre', color:'#87CEFA', colorText: '#ffffff' },
        { name: 'Sono', color:'#FFB6C1', colorText: '#000000' },
        { name: 'Aulas da faculdade', color:'#B22222', colorText: '#ffffff' },
        { name: 'Revisar Materia', color:'#A9A9A9', colorText: '#000000' },
        { name: 'programar', color:'#7CFC00', colorText: '#000000' },
        { name: 'Alimentação', color:'#FFD700', colorText: '#ffffff' },
        { name: 'Academia', color:'#8B008B', colorText: '#ffffff' },
        { name: 'Ingles', color:'#4B0082', colorText: '#ffffff' }
    ]);

    try {
  
      AsyncStorage.getItem('activities').then((response) => {
      const value = response;
      if(value !== null){ 
        setList(JSON.parse(value))
      }
    });
        
    } catch (error) {  
      console.log("Error to get saved data");
      console.log(error)  
    };


    return (
        <SafeAreaView style={styles.container}>
          <FlatList
            data={list}
            renderItem={renderItem}
            //keyExtractor={(item) => item.id}
            //extraData={selectedId}
          />
        </SafeAreaView>
    );
    };


    const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#191919',
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});
