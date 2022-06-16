import { createApp } from 'vue'
import App from './App.vue'
import 'ant-design-vue/dist/antd.css'

import {
  Button,
  Row,
  Col,
  Input,
  Radio,
  Modal,
  Dropdown,
  Menu,
  Checkbox,
  Upload
} from 'ant-design-vue'

const app = createApp(App)

app
  .use(Button)
  .use(Row)
  .use(Col)
  .use(Input)
  .use(Radio)
  .use(Modal)
  .use(Dropdown)
  .use(Menu)
  .use(Checkbox)
  .use(Upload)

app.mount('#app')
