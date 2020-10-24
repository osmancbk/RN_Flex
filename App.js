
import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';

const App = () => {

  return (
    <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.containUp}>
        <View style={styles.greyBox}>
          <View style={styles.orangeBox}><Text style={styles.textUp}>Orange Circle</Text></View>
          <View style={styles.yellowBox}><Text style={styles.textUp}>Yellow Box</Text></View>
        </View>
      </View>

      <View style={styles.containDown}>
        <View style={styles.blackBox}><Text style={styles.textDownL}>Black Box</Text></View>
        <View style={styles.brownBox}><Text style={styles.textDownR}>Brown Box</Text></View>
      </View>

    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  containUp: {
    flex: 1,
    backgroundColor: 'rgb(249, 8, 7)',
  },
  containDown: {
    flex: 2,
    backgroundColor: 'rgb(255, 192, 202)',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  greyBox: {
    backgroundColor: 'rgb(128, 128, 128)',
    flex: 1,
    marginHorizontal: 25,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  orangeBox: {
    backgroundColor: 'rgb(254, 165, 0)',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  yellowBox: {
    backgroundColor: 'rgb(255, 253, 0)',
    width: 120,
    height: 50,
    borderRadius: 50,
    justifyContent: 'center',
  },
  blackBox: {
    backgroundColor: 'rgb(1, 1, 1)',
    width: 250,
    height: 500,
    borderRadius: 20,
    marginVertical: 20,
    justifyContent: 'center',
  },
  brownBox: {
    backgroundColor: 'rgb(164, 42, 41)',
    width: 80,
    height: 500,
    borderRadius: 50,
    marginVertical: 20,
    justifyContent: 'center',

  },
  textUp: {
    fontWeight: 'bold',
    color: 'black',
    textAlign: "center",

  },
  textDownL: {
    fontWeight: 'bold',
    color: 'white',
    textAlign: "center",
  },
  textDownR: {
    fontWeight: 'bold',
    color: 'white',
    transform: [{ rotate: '270deg' }],
  }
})