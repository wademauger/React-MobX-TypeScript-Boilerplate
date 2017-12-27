import * as React from 'react';
import { Store } from '../stores/Store';
import { observer } from 'mobx-react';
import '../styles/main.scss'

export const Timer = observer(({store} : {store: Store}) => (
  <button onClick={store.resetTimer}>
    Seconds passed: {store.timer}
  </button>
));
