import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import{QueryClient, QueryClientProvider} from 'react-query';


import './styles/home.scss';
import './styles/cartbutton.scss';
import './styles/signinlogin.scss';

const client = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={client}>
    <App />
  </QueryClientProvider>,
  document.getElementById('root')
);

