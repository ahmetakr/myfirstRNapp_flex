/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,

} from 'react-native';


const App = () => {

  return (
    <SafeAreaView style={styles.background}>
      <View style={{ width: 100, height: 75, backgroundColor: "purple", alignSelf: 'flex-end' }} />
      <View style={{ width: 100, height: 175, backgroundColor: "yellow" }} />
      <View style={{ width: 100, backgroundColor: "orange" }} />
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: 'brown',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
});

export default App;
