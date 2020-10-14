import React, { useContext } from 'react';

import DataContext from '../contexts/data';


export function Table(){
    const { monday, tuesday, wednesday, thursday, friday, saturday, sunday, activities } = useContext(DataContext);
    var table = activities;
    const week = [ ...monday, ...tuesday, ...wednesday, ...thursday, ...friday, ...saturday, ...sunday, ...activities ]
    for( var i in activities ){
        table[i] = { key:activities[i]['name'], svg: { fill:activities[i]['color'] }, value:0 };
    }
    for( var i in table ){
        var num = 0;
        for( var j in week ){
            if( week[j]['name'] == table[i]['key'] ){
                num = num + 1;
            }
        }
        table[i]['value'] = num;
    }
    return table;
};


