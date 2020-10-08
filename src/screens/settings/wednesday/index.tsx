import React, { useRef, useState, useContext } from "react";
import { FlatList, SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import { TouchableOpacity as RNGHTouchableOpacity } from 'react-native-gesture-handler';

import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';

import { styles } from '../styles';

import ThemeContext from '../../../contexts/theme';
import DataContext from '../../../contexts/data';


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

  const [time, setTime] = useState('06:00');
  const [reRender, setReRender] = useState(0);

  const {theme, color} = useContext(ThemeContext);
  const {wednesday, changeWednesday, activities} = useContext(DataContext);

  const data = wednesday;

   
  function changeItem(item:Object){
    bs.current?.snapTo(0);
    changeWednesday(item, time);
    setReRender(reRender + 1);
  };

  function changeTime(time:string){
    bs.current?.snapTo(2);
    setTime(time);
  };




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
          Será Salvo Automaticamente
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
    <View style={[styles.header, { backgroundColor: color }]}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle} />
      </View>
    </View>
  );

  
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: theme }]}>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.time}
        extraData={reRender}
      />
        <Text style={{fontSize:36}}>
        </Text>
      <BottomSheet
        ref={bs}
        componentType="FlatList"
        snapPoints={['6%','26%','65%']}
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