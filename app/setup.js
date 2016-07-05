'use strict';

import React, { Component } from 'react';

import {
  View,
  StatusBar
} from 'react-native';

const TEDxApp = require('./views/navigation');

function setup(): Component {
  // Create the root component
  class Root extends Component {
    constructor() {
      super();
      this.state = {
        isLoading: true,
      };
    }
    render() {
      return (
        <TEDxApp />
      );
    }
  }
  // Return the component
  return Root;
}

// Export the module
module.exports = setup;
