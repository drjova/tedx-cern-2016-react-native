'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


class Info extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.description}>
          Testing the test Info
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  description: {
    fontSize: 20,
    textAlign: 'center',
    color: '#FFFFFF'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#123456',
  }
});

module.exports = Info;
