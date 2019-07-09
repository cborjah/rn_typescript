/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import { Fragment } from 'react';
import { SafeAreaView, ScrollView, View, Text, StatusBar } from 'react-native';

import { Hello } from './src/components/Hello';

const App = () => {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Hello name="Christian" enthusiasmLevel={1} />
      </SafeAreaView>
    </Fragment>
  );
};

export default App;
