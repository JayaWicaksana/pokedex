import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

import './assets/scss/app.scss'
import { Routes } from './routes'

const root = createRoot(document.getElementById('app'))

root.render(
  <BrowserRouter>
    <Routes />
  </BrowserRouter>
)
