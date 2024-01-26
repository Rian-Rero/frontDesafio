import React from 'react';

import { disableReactDevTools } from '@fvilers/disable-react-devtools';
import ReactDOM from 'react-dom/client';

import GlobalStyles from './styles/GlobalStyles';
import Theme from './styles/Theme';
import Routes from './routes';
import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-indigo/theme.css';

if (import.meta.env.VITE_NODE_ENV === 'production') {
  disableReactDevTools();
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Theme>
      <PrimeReactProvider>
        <GlobalStyles />
        <Routes />
      </PrimeReactProvider>
    </Theme>
  </React.StrictMode>,
);
