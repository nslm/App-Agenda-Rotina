import React from 'react';
import {StyleSheet} from 'react-native';


export const styles = StyleSheet.create({
    background: {
      flex:1,
      justifyContent: 'center',
    },
    background2: {
        justifyContent: 'center',
        backgroundColor: '#808080', 
      },
    background3: {
        justifyContent: 'center',
        backgroundColor: '#808080', 
        flexDirection: 'row',
      },
    button: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 20
      },
    title: {
        justifyContent: 'center',
        textAlign: 'center',
        color: '#000000',
    }
});