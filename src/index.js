import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './content/styles/Base.scss'
import { Provider } from 'react-redux'
import { store } from './store/store';
import { ApiProvider } from '@reduxjs/toolkit/query/react';
import { productsApi } from './store/features/product/productSlice';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApiProvider api={productsApi}>
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
  </ApiProvider>
);

reportWebVitals();
