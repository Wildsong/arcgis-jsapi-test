import React from 'react';  // eslint-disable-line no-unused-vars'
import { createRoot } from 'react-dom/client'
import {Provider} from 'react-redux' // eslint-disable-line no-unused-vars
import App from './src/App.js';  // eslint-disable-line no-unused-vars
import configureStore from './src/configstore'

const {store} = configureStore();

const container = document.getElementById('app')
const root = createRoot(container)
root.render(<Provider store={store}><App /></Provider>)
