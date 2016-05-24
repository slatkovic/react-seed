import React from 'react';
import { render } from 'react-dom';
import store from '../state/store';
import Root from './root';

const rootComponent = <Root store={store} />;
const rootHtmlElement = document.getElementById('root');

render(rootComponent, rootHtmlElement);
