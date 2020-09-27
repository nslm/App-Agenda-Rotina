import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

const DATA = [
 { time: '06:00', name: 'tempo livre', color:'#191919', colorText: '#ffffff' },
 { time: '06:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '07:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '07:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '08:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '08:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '09:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '09:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '10:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '10:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '11:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '11:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '12:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '12:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '13:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '13:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '14:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '14:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '15:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '15:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '16:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '16:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '17:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '17:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '18:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '18:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '19:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '19:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '20:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '20:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '21:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '21:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '22:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '22:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '23:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '23:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '00:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '00:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '01:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '01:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '02:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '02:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '03:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '03:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '03:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '03:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '03:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '03:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '03:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '04:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '04:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '05:00', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
 { time: '05:30', name: 'tempo livre', color:'#ffffff', colorText: '#191919' },
];

const Item = ({ item, style, styleText }) => (
  <TouchableOpacity style={[styles.item, style]}>
    <Text style={[styles.title, styleText]}>{item.time}    {item.name} </Text>
  </TouchableOpacity>
);

const lista = () => {

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

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
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

export default lista;