# vue-cropper

A Vue image cropper components by cropperjs.

## Demo

online demo: https://ballcat-projects.github.io/vue-cropper

You can also clone the repository and run the demo locally:

```shell
# clone
git clone https://github.com/ballcat-projects/vue-cropper.git

# enter the folder
cd vue-cropper/example

# install dependency
npm install

# run it
npm run dev
```

## Getting started

### Installation

```npm
npm install @ballcat/vue-cropper
```
or
```yarn
yarn add @ballcat/vue-cropper
```

### Usage

#### Global Registration

```vue
import { createApp } from 'vue';
import App from './App';

import VueCropper from '@ballcat/vue-cropper';
import 'cropperjs/dist/cropper.css';

const app = createApp(App);

app.use(VueCropper).mount('#app');
```

#### Local Registration

```vue
<template>
  <vue-cropper 
      ref="vueCropperRef"
      :src="imgSrc"
      alt="Source Image"
  />
</template>
<script>
import VueCropper from '@ballcat/vue-cropper';
import 'cropperjs/dist/cropper.css';

export default {
  components: {
    VueCropper,
  },
  setup() {
    const vueCropperRef = ref(null);

    onMounted(() => {
      console.log(vueCropperRef.value.getData());
    });

    return {
      vueCropperRef
    };
  }
};
</script>
```

or use setup script

```vue
<script setup>
import VueCropper from '@ballcat/vue-cropper';
import 'cropperjs/dist/cropper.css';

const vueCropperRef = ref(null);

onMounted(() => {
  console.log(vueCropperRef.value.getData());
});
</script>
```

## API

VueCropper props that can be used are divided into two parts, custom and all properties supported by cropperjs

### custom options

| Property       | Description                                 | Type    | Required |
| :------------- | :------------------------------------------ | :------ | :------- |
| src            | origin image src                            | string  | true     |
| imgStyle       | the img element style                       | object  | --       |
| imgCrossOrigin | the img element crossOrigin attribute value | string  | --       |
| alt            | the img element alt attribute value         | boolean | --       |

### Cropperjs options

see [cropperjs document](https://github.com/fengyuanchen/cropperjs/blob/main/README.md)


### custom expose method

| Method  | Description                   | Type       |
|:--------|:------------------------------|:-----------|
| flipX   | flip the picture horizontally | () => void |
| flipY   | flip the picture vertically   | () => void |
