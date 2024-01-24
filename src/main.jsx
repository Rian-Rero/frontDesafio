import React from 'react';

import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/Theme';
import Routes from './routes';

if (import.meta.env.VITE_NODE_ENV === 'production') {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <GlobalStyles />
      <Routes />
    </Theme>
  </React.StrictMode>,
);
