import React from 'react';
import { time } from '../../services/time';
import { ProgressCircle } from 'react-native-svg-charts';
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


class ProgressCircleNow extends React.PureComponent {
    render() {
        return <ProgressCircle style={{ height: '100%', width:'75%' }} progress={0.7} progressColor={'#A12'} backgroundColor={'#191919'}/>
    }
};
// <ProgressCircleNow/>



export default function () {

    const lista = time();


    return(
        <View style={styles.background}>
            <Text>
                { dayOfWeek }
            </Text>
        </View>

    );

};

const styles = StyleSheet.create({
    background:{
      flex:1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor:'#191919',
    }});