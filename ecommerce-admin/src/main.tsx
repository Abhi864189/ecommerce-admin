import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ConfigProvider } from 'antd';
import Router from './navigation/Router';
import { RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from './redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={{ token: { colorPrimary: '#008000' } }}>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RouterProvider router={Router} />
        </PersistGate>
      </Provider>
    </ConfigProvider>
  </React.StrictMode>,
)
