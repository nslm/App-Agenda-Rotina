import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
interface ContextData {
    theme: string;
    color: string;
    changeColor: Function;
    changeTheme: Function;
};


export const ThemeContext = createContext<ContextData>( {} as ContextData);

export const ThemeProvider: React.FC = ({ children }) => {

    const [theme, setTheme] = useState('#ffffff');
    const [color, setColor] = useState('#9ACD32');

    function changeColor(color:string){
        setColor(color);
        AsyncStorage.setItem('Color', color);
    };
    function changeTheme(theme:string){
        setTheme(theme);
        AsyncStorage.setItem('Theme', theme);
    };


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
    }, [changeTheme, changeColor]);

    
    return (
      <ThemeContext.Provider value={{ theme:theme, color:color,  changeColor, changeTheme}}>
          { children }
      </ThemeContext.Provider>  
    );

};

export default ThemeContext;