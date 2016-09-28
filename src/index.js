// import 'lie';
// import 'isomorphic-fetch';
import { options, h, render } from 'preact';
import { hashHistory, Route, Router, Redirect } from 'react-router';

import './style/topcoat-mobile-light.min.css';
import './style/index.less';

options.debounceRendering = f => f();
options.syncComponentUpdates = true;

let root;
function init() {
  const App = require('./containers/App').default; // eslint-disable-line global-require

  root = render(<App />, document.getElementById('app'), root);
}

init();

if (module.hot) {
  // optional: mute HMR/WDS logs
  const log = console.log;
  const logs = [];
  console.log = (t, ...args) => {
    if (typeof t === 'string' && t.match(/^\[(HMR|WDS)\]/)) {
      if (t.match(/(up to date|err)/i)) logs.push(t.replace(/^.*?\]\s*/m, ''), ...args);
    } else {
      log.call(console, t, ...args);
    }
  };
  const flushLogs = () => console.log(`%c🚀 ${logs.splice(0, logs.length).join(' ')}`, 'color:#888;');
  module.hot.accept('./containers/App', () => requestAnimationFrame(() => {
    flushLogs();
    init();
  }));
}
