import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import { exempleData, exempleActivities } from '../exemples';
import { changeItem } from '../services/storage';

interface ContextData2 {
    monday: Object;
    changeMonday: Function;

    tuesday: Object;
    changeTuesday: Function;

    wednesday: Object;
    changeWednesday: Function;

    thursday: Object;
    changeThursday: Function;

    friday: Object;
    changeFriday: Function;

    saturday: Object;
    changeSaturday: Function;

    sunday: Object;
    changeSunday: Function;

    activities: Object;
};


export const DataContext = createContext<ContextData2>( {} as ContextData2);

export const DataProvider: React.FC = ({ children }) => {

    const data = exempleData;

    const [monday, setMonday] = useState(data);
    const [tuesday, setTuesday] = useState(data);
    const [wednesday, setWednesday] = useState(data);
    const [thursday, setThursday] = useState(data);
    const [friday, setFriday] = useState(data);
    const [saturday, setSaturday] = useState(data);
    const [sunday, setSunday] = useState(data);

    const [activities, setActivities] = useState(exempleActivities);


    function getDay(day:string, setDay:Function){    
    
        try {        
        AsyncStorage.getItem(day).then((response) => {
        const value = response;
        if(value !== null){ 
            setDay(JSON.parse(value));
        };
        });
            
        } catch (error) {  
        console.log("Error to get saved data");
        console.log(error);  
        };
    };

    function changeMonday(item:Object, time:string){
        changeItem('Monday', monday, setMonday, item, time);
    };
    function changeTuesday(item:Object, time:string){
        changeItem('Tuesday', tuesday, setTuesday, item, time);
    };
    function changeWednesday(item:Object, time:string){
        changeItem('Wednesday', wednesday, setWednesday, item, time);
    };
    function changeThursday(item:Object, time:string){
        changeItem('Thursday', thursday, setThursday, item, time);
    };
    function changeFriday(item:Object, time:string){
        changeItem('Friday', friday, setFriday, item, time);
    };
    function changeSaturday(item:Object, time:string){
        changeItem('Saturday', saturday, setSaturday, item, time);
    };
    function changeSunday(item:Object, time:string){
        changeItem('Sunday', sunday, setSunday, item, time);
    };



    useEffect(() => {

        try {        
          AsyncStorage.getItem('activities').then((response) => {
          const value = response;
          if(value !== null){ 
            setActivities(JSON.parse(value));
          };
        });
            
        } catch (error) {  
          console.log("Error to get saved data");
          console.log(error);
        };      
        }, []);


        useEffect(() => {
            getDay('Monday', setMonday);
            getDay('Tuesday', setTuesday);
            getDay('Wednesday', setWednesday);
            getDay('Thursday', setThursday);
            getDay('Friday', setFriday);
            getDay('Saturdayday', setSaturday);
            getDay('Sunday', setSunday);
        }, []);

    
    
    return (
      <DataContext.Provider 
      value={{ 
        monday: monday,
        changeMonday,
    
        tuesday: tuesday,
        changeTuesday,
    
        wednesday: wednesday,
        changeWednesday,
    
        thursday: thursday,
        changeThursday,
    
        friday: friday,
        changeFriday,
    
        saturday: saturday,
        changeSaturday,
    
        sunday: sunday,
        changeSunday,

        activities
          }}
        >
          { children }
      </DataContext.Provider>  
    );

};

export default DataContext;