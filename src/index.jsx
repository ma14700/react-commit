import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import registerServiceWorker from './registerServiceWorker';

import RouterMap from './router/index';

import './static/css/common.less'
import './static/css/font.css'


ReactDOM.render(<RouterMap />, document.getElementById('root'));
registerServiceWorker();
