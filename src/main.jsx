import React from 'react'
import ReactDOM from 'react-dom/client'
import AppReact from './App.jsx'
import { createApp } from 'vue'
import AppVue from './AppVue.vue'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(<AppReact />)
createApp(AppVue).mount('#vue-app')