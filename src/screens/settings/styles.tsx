import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';


export const styles = StyleSheet.create({
    container: {
      flex:1,
      backgroundColor: '#fff',
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
      backgroundColor: '#fff',
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
      backgroundColor: '#9ACD',
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