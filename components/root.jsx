import React, { Component, PropTypes } from 'react';
import { Provider as ReduxProvider } from 'react-redux';
import { Routes } from './routes';
import { ReduxRouter } from 'redux-router';

class Root extends Component {

  tryCreateDevTools() {
    if (FLAG_DEV_TOOLS_ON) {
      let DevTools = require('./dev/devTools');
      return (<DevTools />);
    }

    return null;
  }

  render() {

    const devTools = this.tryCreateDevTools();
    const { store } = this.props;

    return (
      <ReduxProvider store={store}>
        <div>
          <ReduxRouter />
          {devTools}
        </div>
      </ReduxProvider>
    );
  }
}

Root.propTypes = {
  store: PropTypes.object.isRequired
};

export default Root;
