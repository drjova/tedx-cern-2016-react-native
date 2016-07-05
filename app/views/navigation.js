'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TabBarIOS,
  Navigator,
  Platform,
  BackAndroid
} from 'react-native';

const TEDxNavTabs = require('./tabs/main');

var TEDxApp = React.createClass({
  _handlers: ([]: Array<() => boolean>),

  componentDidMount: function() {
    BackAndroid.addEventListener('hardwareBackPress', this.handleBackButton);
  },

  componentWillUnmount: function() {
    BackAndroid.removeEventListener('hardwareBackPress', this.handleBackButton);
  },

  getChildContext() {
    return {
      addBackButtonListener: this.addBackButtonListener,
      removeBackButtonListener: this.removeBackButtonListener,
    };
  },

  addBackButtonListener: function(listener) {
    this._handlers.push(listener);
  },

  removeBackButtonListener: function(listener) {
    this._handlers = this._handlers.filter((handler) => handler !== listener);
  },

  handleBackButton: function() {
    for (let i = this._handlers.length - 1; i >= 0; i--) {
      if (this._handlers[i]()) {
        return true;
      }
    }

    const {navigator} = this.refs;
    if (navigator && navigator.getCurrentRoutes().length > 1) {
      navigator.pop();
      return true;
    }

    if (this.props.tab !== 'schedule') {
      this.props.dispatch(switchTab('schedule'));
      return true;
    }
    return false;
  },

  render: function() {
    return (
      <Navigator
        ref="navigator"
        style={styles.container}
        configureScene={(route) => {
          if (Platform.OS === 'android') {
            return Navigator.SceneConfigs.FloatFromBottomAndroid;
          }
          return Navigator.SceneConfigs.FloatFromBottom;
        }}
        initialRoute={{}}
        renderScene={this.renderScene}
      />
    );
  },

  renderScene: function(route, navigator) {
    //if (route.allSessions) {
      //return (
        //<SessionsCarousel
          //{...route}
          //navigator={navigator}
        ///>
      //);
    //}
    //if (route.session) {
      //return (
        //<SessionsCarousel
          //session={route.session}
          //navigator={navigator}
        ///>
      //);
    //}
    return <TEDxNavTabs navigator={navigator} />
  },
});

TEDxApp.childContextTypes = {
  addBackButtonListener: React.PropTypes.func,
  removeBackButtonListener: React.PropTypes.func,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
});

module.exports = TEDxApp;
