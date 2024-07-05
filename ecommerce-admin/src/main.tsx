import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { ConfigProvider } from 'antd';
import Router from './navigation/Router';
import { RouterProvider } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ConfigProvider theme={{ token: { colorPrimary: '#008000' } }}>
      <RouterProvider router={Router} />
    </ConfigProvider>
  </React.StrictMode>,
)
