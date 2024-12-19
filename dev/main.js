import "./main.css"
import { createApp } from 'vue'
import App from './App.vue'

import * as MyLibrary from '../src/index';

// import router from './router'

const app = createApp(App)

Object.entries(MyLibrary).forEach(([name, component]) => {
	app.component(name, component);
  });
  

// app.use(router)

app.mount('#app')