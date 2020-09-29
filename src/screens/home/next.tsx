import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";
import { exempleData } from '../../exemples';

const Item = ({ item, style, styleText }) => (
  <TouchableOpacity style={[styles.item, style]}>
    <Text style={[styles.title, styleText]}>{item.time}    {item.name} </Text>
  </TouchableOpacity>
);

const [data, setData] useState(exempleData);

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
        data={data}
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