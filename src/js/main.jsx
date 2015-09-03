import '../css/main.less';

import React from 'react';
import App from './components/app.jsx';

function main() {
  const container = document.createElement('div');
  document.body.appendChild(container);
  React.render(<App />, container);
}

main();
