import React, { Component } from 'react';
import { Provider } from 'react-redux';
import stores from './models/index';

import AppContainer from './router';

export default class Index extends Component {
  render() {
    return (
      <Provider store={stores}>
        <AppContainer />
      </Provider>
    );
  }
}
