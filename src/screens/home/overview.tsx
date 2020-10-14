import React from 'react';
import { PieChart } from 'react-native-svg-charts';
import { Table } from '../../services/table';
import { View, 
    KeyboardAvoidingView, 
    Image, 
    TextInput,  
    TouchableOpacity, 
    Text, 
    StyleSheet,
    Animated,
    Keyboard 
    } from 'react-native';


export default function () {

    const table = Table();

    console.log(table);

    return(
        <View style={styles.background}>
            <PieChart style={{ height: 400 }} data={table} />
        </View>
    );

};

const styles = StyleSheet.create({
    background:{
      flex:1,
      justifyContent: 'center',
      backgroundColor:'#ffffff',
    }});

    

