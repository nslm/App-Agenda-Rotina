import React, {useState, useEffect, useRef} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { SaveItem } from '../../services/storage';
import BottomSheet from 'reanimated-bottom-sheet';
import { TouchableOpacity as RNGHTouchableOpacity } from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import { View, 
    KeyboardAvoidingView, 
    Image, 
    TextInput,  
    TouchableOpacity, 
    Text, 
    StyleSheet,
    Keyboard 
    } from 'react-native';
import {styles} from './styles'


export default function () {
    const bs1 = useRef(null);
    const bs2 = useRef(null);
    const fall = new Animated.Value(1);

    const [theme, setTheme] = useState('#ffffff');
    const [color, setColor] = useState('#9ACD32');

    useEffect(() => {
        try {    
            AsyncStorage.getItem('Theme').then((response) => {
            const value = response;
            if(value !== null){ 
              console.log('Theme found: '+value);
              setTheme(value);
            };
          });
              
          } catch (error) {  
            console.log("Error to get saved Theme");
            console.log(error);
        };
        try {    
            AsyncStorage.getItem('Color').then((response) => {
            const value = response;
            if(value !== null){ 
              console.log('Color found: '+value);
              setColor(value);
            };
          });
              
          } catch (error) {  
            console.log("Error to get saved Color");
            console.log(error);
        };
    }, []);

    function changeThemeDark() {
        setTheme('#191919');
        SaveItem('Theme', '#191919');
    };
    function changeThemeLight() {
        setTheme('#ffffff');
        SaveItem('Theme', '#ffffff');
    };
    function changeColor(color:String) {
        setColor(color);
        SaveItem('Color', color);
    };
    function openBS1() {
        bs2.current?.snapTo(0);
        bs1.current?.snapTo(1);
    }
    function openBS2() {
        bs1.current?.snapTo(0);
        bs2.current?.snapTo(1);
    }

    const renderInner1 = () => (
        <View style={ styles.background2 }>
            <RNGHTouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={changeThemeLight}>
                <Text>
                    Claro
                </Text>
            </RNGHTouchableOpacity>
            <RNGHTouchableOpacity style={[styles.button, { backgroundColor:color }]} onPress={changeThemeDark}>
                <Text>
                    Escuro
                </Text>
            </RNGHTouchableOpacity>

        </View>
      );

      const renderInner2 = () => (
        <View>

            <View style={ styles.background3 }>
                <RNGHTouchableOpacity style={[styles.button, { backgroundColor: '#9ACD32'}]} onPress={() => changeColor('#9ACD32')}/>
                <RNGHTouchableOpacity style={[styles.button, { backgroundColor: '#6959CD'}]} onPress={() => changeColor('#6959CD')}/>
                <RNGHTouchableOpacity style={[styles.button, { backgroundColor: '#FF1493'}]} onPress={() => changeColor('#FF1493')}/>
                <RNGHTouchableOpacity style={[styles.button, { backgroundColor: '#FFD700'}]} onPress={() => changeColor('#FFD700')}/>
            </View>

            <View style={ styles.background3 }>
                <RNGHTouchableOpacity style={[styles.button, { backgroundColor: '#F4A460'}]} onPress={() => changeColor('#F4A460')}/>
                <RNGHTouchableOpacity style={[styles.button, { backgroundColor: '#8B008B'}]} onPress={() => changeColor('#8B008B')}/>
                <RNGHTouchableOpacity style={[styles.button, { backgroundColor: '#DC143C'}]} onPress={() => changeColor('#DC143C')}/>
                <RNGHTouchableOpacity style={[styles.button, { backgroundColor: '#FF8C00'}]} onPress={() => changeColor('#FF8C00')}/>
            </View>

            <View style={ styles.background3 }>
                <RNGHTouchableOpacity style={[styles.button, { backgroundColor: '#F0E68C'}]} onPress={() => changeColor('#F0E68C')}/>
                <RNGHTouchableOpacity style={[styles.button, { backgroundColor: '#8B4513'}]} onPress={() => changeColor('#8B4513')}/>
                <RNGHTouchableOpacity style={[styles.button, { backgroundColor: '#FFE4C4'}]} onPress={() => changeColor('#FFE4C4')}/>
                <RNGHTouchableOpacity style={[styles.button, { backgroundColor: '#B0E0E6'}]} onPress={() => changeColor('#B0E0E6')}/>
            </View>

        </View>
      );


    return(
        <View style={[styles.background, { backgroundColor: theme }]}>
            <TouchableOpacity style={[styles.button, {backgroundColor: color}]} onPress={openBS1}>
                <Text style={styles.title}>
                    Tema
                </Text>
            </TouchableOpacity>
            <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={openBS2}>
                <Text style={styles.title}>
                    Cores
                </Text>
            </TouchableOpacity>
            <BottomSheet
                ref={bs1}
                snapPoints={['0%','48.5%']}
                renderContent={renderInner1}
                initialSnap={0}
                callbackNode={fall}
                enabledGestureInteraction={true}
            />
            <BottomSheet
                ref={bs2}
                snapPoints={['0%','50.8%']}
                renderContent={renderInner2}
                initialSnap={0}
                callbackNode={fall}
                enabledGestureInteraction={true}
            />
        </View>

    );

};

