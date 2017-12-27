import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store } from './stores/Store';
import { Timer } from './components/Timer';

const store: Store = new Store();

ReactDOM.render(
  <Timer store={store} />,
  document.getElementById('root')
);
