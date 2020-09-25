import React, { useEffect, useState } from "react";
import AsyncStorage from '@react-native-community/async-storage';
import { SaveItem } from '../../../services/storage'
import { FlatList, SafeAreaView, ScrollView , StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import BottomSheet from 'reanimated-bottom-sheet';
import Animated from 'react-native-reanimated';
import { exempleData, exempleActivities } from '../../../exemples'


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
  const bs = React.createRef();
  const fall = new Animated.Value(1);

  const [data, setData] = useState(exempleData);       
  const [activities, setActivities] = useState(exempleActivities);
  const [time, setTime] = useState('06:00');
   
  function saveChanges(){
    SaveItem('sunday',  JSON.stringify(data));
  };

  function changeItem(item){
    console.log(item);
    var day = data;
    for(var prop in day){
        if(prop.time==item.time){
          prop = {
          time:time, 
          name:item.name, 
          color:item.color, 
          colorText:item.colorText
          };
        };
    };
    setData(day);
  };

  useEffect(() => {

  try {
  
    AsyncStorage.getItem('sunday').then((response) => {
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
        onPress={() => setTime(item.time)}
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
        onPress={() => changeItem(item)}
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
          //horizontal={true}
          data={activities}
          renderItem={renderItemActivities}
          //keyExtractor={(item) => item.id}
          //extraData={selectedId}
        />
      </View>
      <View> 
        <Text style={{fontSize:82}}
          // gambirra pra arrumar o bug do buttomsheet com flatlist
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
      <ScrollView>
      <FlatList
        //horizontal={true}
        data={data}
        renderItem={renderItem}
        //keyExtractor={(item) => item.id}
        //extraData={selectedId}
      />
      </ScrollView>
        <Text style={{fontSize:40}}>
        </Text>
      <BottomSheet
        ref={bs}
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#191919',
    //marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 20
  },
  item2: {
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    backgroundColor: '#ffffff',
    borderRadius: 20
  },
  title: {
    fontSize: 18,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  title2: {
    fontSize: 32,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
    color: '#ffff'
  },
  panel: {
    padding: 20,
    backgroundColor: '#9ACD32',
    paddingTop: 20,
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    // shadowColor: '#000000',
    // shadowOffset: {width: 0, height: 0},
    // shadowRadius: 5,
    // shadowOpacity: 0.4,
  },
  header: {
    backgroundColor: '#9ACD32',
    shadowColor: '#333333',
    shadowOffset: {width: -1, height: -3},
    shadowRadius: 2,
    shadowOpacity: 0.4,
    // elevation: 5,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 40,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#00000040',
    marginBottom: 10,
  },
  panelTitle: {
    fontSize: 22,
    height: 35,
  },
  panelSubtitle: {
    fontSize: 12,
    color: 'gray',
    height: 30,
    marginBottom: 10,
  },
});

export default screen;