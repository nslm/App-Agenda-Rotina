//import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import  { ThemeProvider }  from './src/contexts/theme';

const App: React.FC = () => {
    return (  
      <ThemeProvider>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
      </ThemeProvider>  
    );

};

export default App;