

export function time(){

    const now = new Date();

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    const months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
    
    const day =  days[ now.getDay() ];
    const month = months[ now.getMonth() ];
    const hours = now.getHours();
    const min = now.getMinutes(); 
    const sec = now.getSeconds(); 

    return [ day, month, hours, min, sec ]
}