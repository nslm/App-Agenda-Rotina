//import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import  { ThemeProvider }  from './src/contexts/theme';
import  { DataProvider } from './src/contexts/data';

const App: React.FC = () => {
    return (  
      <DataProvider>
        <ThemeProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </ThemeProvider>  
      </DataProvider>  
    );

};

export default App;