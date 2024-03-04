// Импортируем React и ReactDOM из соответствующих пакетов
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

// Импортируем стили для нашего приложения
import 'normalize.css';
import './index.css';

// Импортируем функцию reportWebVitals для отслеживания производительности нашего веб-приложения
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<React.StrictMode></React.StrictMode>);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
