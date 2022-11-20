<template>
  <div class="header">
    <div class="container">
      <a-row type="flex" align="middle" style="height: 46px">
        <a-col>
          <span style="color: rgba(0, 0, 0, 0.85); font-weight: 500; font-size: 24px">
            Vue Cropper
          </span>
        </a-col>
        <a-col :flex="1"></a-col>
        <a-col>
          <a-button
            type="link"
            size="large"
            style="color: rgba(0, 0, 0, 0.85)"
            href="https://github.com/ballcat-projects/vue-cropper"
          >
            <template #icon><GithubOutlined /></template>
            <span>Github</span>
          </a-button>
        </a-col>
      </a-row>
    </div>
  </div>

  <hr style="margin: 0 0 6px" />

  <div class="container">
    <a-row justify="center" :gutter="30">
      <a-col :md="18">
        <div class="docs-demo">
          <vue-cropper
            ref="vueCropperRef"
            class="img-container"
            :src="imageSrc"
            preview=".img-preview"
            v-bind="cropperOptions"
            @crop="onCrop"
          />
        </div>
      </a-col>
      <a-col :md="6">
        <!-- <h3>Preview:</h3> -->
        <div class="docs-preview clearfix">
          <div class="img-preview preview-lg"></div>
          <div class="img-preview preview-md"></div>
          <div class="img-preview preview-sm"></div>
          <div class="img-preview preview-xs"></div>
        </div>

        <!-- <h3>Data:</h3> -->
        <div class="docs-data">
          <a-input
            class="input-group"
            :value="convertNumber(data.x)"
            addon-before="X"
            addon-after="px"
          />
          <a-input
            class="input-group"
            :value="convertNumber(data.y)"
            addon-before="Y"
            addon-after="px"
          />
          <a-input
            class="input-group"
            :value="convertNumber(data.width)"
            addon-before="Width"
            addon-after="px"
          />
          <a-input
            class="input-group"
            :value="convertNumber(data.height)"
            addon-before="Height"
            addon-after="px"
          />
          <a-input
            class="input-group"
            :value="convertNumber(data.rotate)"
            addon-before="Rotate"
            addon-after="deg"
          />
          <a-input class="input-group" :value="convertNumber(data.scaleX)" addon-before="ScaleX" />
          <a-input class="input-group" :value="convertNumber(data.scaleY)" addon-before="ScaleY" />
        </div>
      </a-col>
    </a-row>

    <a-row justify="center" :gutter="30">
      <a-col :md="18">
        <div class="docs-buttons">
          <a-button-group>
            <a-button type="primary" @click="vueCropperRef?.setDragMode('move')">
              <template #icon><drag-outlined /></template>
            </a-button>
            <a-button type="primary" @click="vueCropperRef?.setDragMode('crop')">
              <template #icon><gateway-outlined /></template>
            </a-button>
          </a-button-group>
          <a-button-group>
            <a-button type="primary" @click="vueCropperRef?.zoom(0.1)">
              <template #icon><zoom-in-outlined /></template>
            </a-button>
            <a-button type="primary" @click="vueCropperRef?.zoom(-0.1)">
              <template #icon><zoom-out-outlined /></template>
            </a-button>
          </a-button-group>
          <a-button-group>
            <a-button type="primary" @click="vueCropperRef?.move(-10, 0)">
              <template #icon><arrow-left-outlined /></template>
            </a-button>
            <a-button type="primary" @click="vueCropperRef?.move(10, 0)">
              <template #icon><arrow-right-outlined /></template>
            </a-button>
            <a-button type="primary" @click="vueCropperRef?.move(0, -10)">
              <template #icon><arrow-up-outlined /></template>
            </a-button>
            <a-button type="primary" @click="vueCropperRef?.move(0, 10)">
              <template #icon><arrow-down-outlined /></template>
            </a-button>
          </a-button-group>
          <a-button-group>
            <a-button type="primary" @click="vueCropperRef?.rotate(-45)">
              <template #icon><rotate-left-outlined /></template>
            </a-button>
            <a-button type="primary" @click="vueCropperRef?.rotate(45)">
              <template #icon><rotate-right-outlined /></template>
            </a-button>
          </a-button-group>
          <a-button-group>
            <a-button type="primary" @click="vueCropperRef?.flipX()">
              <template #icon><swap-outlined /></template>
            </a-button>
            <a-button type="primary" @click="vueCropperRef?.flipY()">
              <template #icon><swap-outlined :rotate="90" /></template>
            </a-button>
          </a-button-group>
          <a-button-group>
            <a-button type="primary" @click="vueCropperRef?.crop()">
              <template #icon><check-outlined /></template>
            </a-button>
            <a-button type="primary" @click="vueCropperRef?.clear()">
              <template #icon><close-outlined /></template>
            </a-button>
          </a-button-group>
          <a-button-group>
            <a-button type="primary" @click="vueCropperRef?.disable()">
              <template #icon><lock-outlined /></template>
            </a-button>
            <a-button type="primary" @click="vueCropperRef?.enable()">
              <template #icon><unlock-outlined /></template>
            </a-button>
          </a-button-group>
          <a-button-group>
            <a-button type="primary" @click="vueCropperRef?.reset()">
              <template #icon><sync-outlined /></template>
            </a-button>
            <input
              ref="fileInputRef"
              type="file"
              accept="image/*"
              style="display: none"
              @change="onFileSelect"
            />
            <a-button type="primary" @click="fileInputRef.click()">
              <template #icon><upload-outlined /></template>
            </a-button>
            <a-button type="primary" @click="vueCropperRef?.destroy()">
              <template #icon><poweroff-outlined /></template>
            </a-button>
          </a-button-group>

          <a-button-group class="btn-group-crop">
            <a-button type="primary" @click="openCanvasModal({ maxWidth: 4096, maxHeight: 4096 })">
              Get Cropped Canvas
            </a-button>
            <a-button type="primary" @click="openCanvasModal({ maxWidth: 160, maxHeight: 90 })">
              160 × 190
            </a-button>
            <a-button type="primary" @click="openCanvasModal({ maxWidth: 320, maxHeight: 180 })">
              320 × 180
            </a-button>
          </a-button-group>

          <a-button
            type="primary"
            class="btn-secondary"
            @click="updateAreaData(vueCropperRef?.getData() || {})"
          >
            Get Data
          </a-button>

          <a-button type="primary" class="btn-secondary" @click="setCropperData('setData')">
            Set Data
          </a-button>

          <a-button
            type="primary"
            class="btn-secondary"
            @click="updateAreaData(vueCropperRef?.getContainerData() || {})"
          >
            Get Container Data
          </a-button>

          <a-button
            type="primary"
            class="btn-secondary"
            @click="updateAreaData(vueCropperRef?.getImageData() || {})"
          >
            Get Image Data
          </a-button>

          <a-button
            type="primary"
            class="btn-secondary"
            @click="updateAreaData(vueCropperRef?.getCanvasData() || {})"
          >
            Get Canvas Data
          </a-button>

          <a-button type="primary" class="btn-secondary" @click="setCropperData('setCanvasData')">
            Set Canvas Data
          </a-button>

          <a-button
            type="primary"
            class="btn-secondary"
            @click="updateAreaData(vueCropperRef?.getCropBoxData() || {})"
          >
            Get Crop Box Data
          </a-button>

          <a-button type="primary" class="btn-secondary" @click="setCropperData('setCropBoxData')">
            Set Crop Box Data
          </a-button>

          <a-button type="primary" class="btn-secondary" @click="vueCropperRef?.moveTo(0)">
            Move to [0,0]
          </a-button>

          <a-button type="primary" class="btn-secondary" @click="vueCropperRef?.zoomTo(1)">
            Zoom to 100%
          </a-button>

          <a-button type="primary" class="btn-secondary" @click="vueCropperRef?.rotateTo(180)">
            Rotate 180°
          </a-button>

          <a-button type="primary" class="btn-secondary" @click="vueCropperRef?.scale(-2, -1)">
            Scale (-2, -1)
          </a-button>

          <a-textarea
            v-model:value="textareaData"
            placeholder="Get data to here or set data with this value"
          />
        </div>
      </a-col>
      <a-col :md="6">
        <div class="docs-toggles">
          <a-radio-group v-model:value="cropperOptions.aspectRatio" button-style="solid">
            <a-radio-button :value="16 / 9">16:9</a-radio-button>
            <a-radio-button :value="4 / 3">4:3</a-radio-button>
            <a-radio-button :value="1">1:1</a-radio-button>
            <a-radio-button :value="2 / 3">2:3</a-radio-button>
            <a-radio-button :value="0">Free</a-radio-button>
          </a-radio-group>

          <a-radio-group v-model:value="cropperOptions.viewMode" button-style="solid">
            <a-radio-button :value="0">VM0</a-radio-button>
            <a-radio-button :value="1">VM1</a-radio-button>
            <a-radio-button :value="2">VM2</a-radio-button>
            <a-radio-button :value="3">VM3</a-radio-button>
          </a-radio-group>

          <a-dropdown>
            <template #overlay>
              <a-menu>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.responsive">responsive</a-checkbox>
                </a-menu-item>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.restore">restore</a-checkbox>
                </a-menu-item>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.checkCrossOrigin"
                    >checkCrossOrigin</a-checkbox
                  >
                </a-menu-item>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.checkOrientation"
                    >checkOrientation</a-checkbox
                  >
                </a-menu-item>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.modal">modal</a-checkbox>
                </a-menu-item>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.guides">guides</a-checkbox>
                </a-menu-item>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.center">center</a-checkbox>
                </a-menu-item>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.highlight">highlight</a-checkbox>
                </a-menu-item>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.background">background</a-checkbox>
                </a-menu-item>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.autoCrop">autoCrop</a-checkbox>
                </a-menu-item>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.movable">movable</a-checkbox>
                </a-menu-item>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.rotatable">rotatable</a-checkbox>
                </a-menu-item>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.scalable">scalable</a-checkbox>
                </a-menu-item>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.zoomable">zoomable</a-checkbox>
                </a-menu-item>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.zoomOnTouch">zoomOnTouch</a-checkbox>
                </a-menu-item>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.zoomOnWheel">zoomOnWheel</a-checkbox>
                </a-menu-item>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.cropBoxMovable">
                    cropBoxMovable
                  </a-checkbox>
                </a-menu-item>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.cropBoxResizable">
                    cropBoxResizable
                  </a-checkbox>
                </a-menu-item>
                <a-menu-item>
                  <a-checkbox v-model:checked="cropperOptions.toggleDragModeOnDblclick">
                    toggleDragModeOnDblclick
                  </a-checkbox>
                </a-menu-item>
              </a-menu>
            </template>
            <a-button style="width: 100%" type="primary">
              Toggle Options
              <DownOutlined />
            </a-button>
          </a-dropdown>
        </div>
      </a-col>
    </a-row>
  </div>

  <!-- 底部占位 -->
  <div style="height: 40px" />

  <canvas-modal ref="canvasModalRef"></canvas-modal>
</template>

<script setup lang="ts">
import VueCropper from '@ballcat/vue-cropper'
import type { VueCropperInstance } from '@ballcat/vue-cropper'
import 'cropperjs/dist/cropper.css'
import type Cropper from 'cropperjs'
import { reactive, ref, watch } from 'vue'
import {
  DragOutlined,
  GatewayOutlined,
  ZoomInOutlined,
  ZoomOutOutlined,
  ArrowLeftOutlined,
  ArrowRightOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
  RotateLeftOutlined,
  RotateRightOutlined,
  SwapOutlined,
  CheckOutlined,
  CloseOutlined,
  LockOutlined,
  UnlockOutlined,
  SyncOutlined,
  UploadOutlined,
  PoweroffOutlined,
  DownOutlined,
  GithubOutlined
} from '@ant-design/icons-vue'
import CanvasModal from '@/CanvasModal.vue'

const vueCropperRef = ref<VueCropperInstance>()

const imageSrc = ref(new URL('./assets/demo.jpg', import.meta.url).href)

const cropperOptions: Cropper.Options = reactive({
  aspectRatio: 16 / 9,
  viewMode: 0,
  responsive: true,
  restore: true,
  checkCrossOrigin: true,
  checkOrientation: true,
  modal: true,
  guides: true,
  center: true,
  highlight: true,
  background: true,
  autoCrop: true,
  movable: true,
  rotatable: true,
  scalable: true,
  zoomable: true,
  zoomOnTouch: true,
  zoomOnWheel: true,
  cropBoxMovable: true,
  cropBoxResizable: true,
  toggleDragModeOnDblclick: true
})

watch(
  () => cropperOptions,
  () => console.log(cropperOptions),
  { deep: true }
)

const data = ref<Cropper.SetDataOptions>({})
const convertNumber = (num?: number) => num != null ? Math.round(num): undefined

const onCrop = (e: CustomEvent) => {
  data.value = e.detail
}

const canvasModalRef = ref()

const openCanvasModal = (options: Cropper.GetCroppedCanvasOptions) => {
  const croppedCanvas = vueCropperRef.value?.getCroppedCanvas(options)
  canvasModalRef.value?.open(croppedCanvas)
}

// file select input
const fileInputRef = ref()
const onFileSelect = (event: any) => {
  const files = event.target.files

  if (files && files.length) {
    const file = files[0]
    if (/^image\/\w+/.test(file.type)) {
      imageSrc.value = URL.createObjectURL(file)
      fileInputRef.value.value = null
    } else {
      window.alert('Please choose an image file.')
    }
  }
}

// textarea 的数据
const textareaData = ref('')
const updateAreaData = (data: object) => {
  let value
  try {
    value = JSON.stringify(data)
  } catch (e: any) {
    console.log(e.message)
  }
  value && (textareaData.value = value)
}

const setCropperData = (method: keyof VueCropperInstance) => {
  if (textareaData.value) {
    let value
    try {
      value = JSON.parse(textareaData.value)
    } catch (e: any) {
      console.log(e.message)
    }
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    value && vueCropperRef.value?.[method](value)
  }
}
</script>

<style>
@import 'assets/app.css';

.container {
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

@media (min-width: 576px) {
  .container {
    max-width: 540px;
  }
}

@media (min-width: 768px) {
  .container {
    max-width: 720px;
  }
}

@media (min-width: 992px) {
  .container {
    max-width: 960px;
  }
}

@media (min-width: 1200px) {
  .container {
    max-width: 1140px;
  }
}

.clearfix::after {
  display: block;
  clear: both;
  content: '';
}
</style>
