/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import {Button} from './src/dumb/Button';

const App = () => {
  return (
      <SafeAreaView>
        <View style={styles.divider}/>
        <Button title="Extra Small" size={'xs'} color={'blue'} />
        <View style={styles.divider} />
        <Button title="Small" size={'s'} color={'green'} />
        <View style={styles.divider} />
        <Button title="Medium" />
        <View style={styles.divider} />
        <Button title="Large" size={'lg'} color={'orange'} />
        <View style={styles.divider} />
        <Button title="Extra Large" size={'xl'} color={'purple'} />
      </SafeAreaView>
  );
}

const styles = {
  divider: {
    marginVertical: 10,
  },
};

export default App;
