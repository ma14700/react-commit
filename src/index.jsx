import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import RouterMap from './router/index';


ReactDOM.render(<RouterMap />, document.getElementById('root'));
registerServiceWorker();
