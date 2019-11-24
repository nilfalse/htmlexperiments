import React from 'react';
import ReactDOM from 'react-dom';

import { App } from './App';

describe('Swipe application', () => {
  it('should render without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });
});