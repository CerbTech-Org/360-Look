// App.js

import React from 'react';
import { View, StyleSheet } from 'react-native';
import Weather from './Weather';
import { styles } from './styles';

const App = () => {
    return (
        <View style={my_styles.container}>
            <Weather />
        </View>
    );
};

const my_styles = StyleSheet.create({
    container: {
      width: "100%",
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1,
      padding: 0
    }
  })

export default App;
