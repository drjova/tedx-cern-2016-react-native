'use strict';

import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  TabBarIOS
} from 'react-native';

const Schedule = require('./schedule');
const Info = require('./info');

class TEDxNavTabs extends Component {
  constructor() {
    super();
    this.state = {
      selectedTab: 'schedule',
      zozelaki: 'zozelaki'
    };
  }
  setTab(name) {
    this.setState({
      selectedTab: name
    });
  }
  render() {
    return (
      <TabBarIOS>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'schedule'}
          title="Scheduel"
          systemIcon="history"
          onPress={() => this.setTab('schedule')}
        >
        <Schedule />
        </TabBarIOS.Item>
        <TabBarIOS.Item
          selected={this.state.selectedTab === 'info'}
          systemIcon="more"
          title="Info"
          onPress={() => this.setTab('info')}
        >
        <Info />
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  tabContent: {
    backgroundColor: '#75b1b8',
    flex: 1,
  },
  tabText: {
    margin: 50
  }
});

module.exports = TEDxNavTabs;
