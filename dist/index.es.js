import { defineComponent, ref, onMounted, watch, nextTick, openBlock, createElementBlock, createElementVNode, normalizeStyle, toRaw } from "vue";
import Cropper from "cropperjs";
const _hoisted_1 = ["src", "alt", "crossorigin"];
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "VueCropper",
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: "image"
    },
    imgStyle: {
      type: Object,
      default: () => ({})
    },
    imgCrossOrigin: {
      type: String,
      default: void 0
    },
    viewMode: {
      type: Number,
      default: 0
    },
    dragMode: {
      type: String,
      default: "crop"
    },
    initialAspectRatio: {
      type: Number,
      default: NaN
    },
    aspectRatio: {
      type: Number,
      default: NaN
    },
    data: {
      type: Object,
      default: void 0
    },
    preview: {
      type: [String, Array, Object],
      default: ""
    },
    responsive: {
      type: Boolean,
      default: true
    },
    restore: {
      type: Boolean,
      default: true
    },
    checkCrossOrigin: {
      type: Boolean,
      default: true
    },
    checkOrientation: {
      type: Boolean,
      default: true
    },
    modal: {
      type: Boolean,
      default: true
    },
    guides: {
      type: Boolean,
      default: true
    },
    center: {
      type: Boolean,
      default: true
    },
    highlight: {
      type: Boolean,
      default: true
    },
    background: {
      type: Boolean,
      default: true
    },
    autoCrop: {
      type: Boolean,
      default: true
    },
    autoCropArea: {
      type: Number,
      default: 0.8
    },
    movable: {
      type: Boolean,
      default: true
    },
    rotatable: {
      type: Boolean,
      default: true
    },
    scalable: {
      type: Boolean,
      default: true
    },
    zoomable: {
      type: Boolean,
      default: true
    },
    zoomOnTouch: {
      type: Boolean,
      default: true
    },
    zoomOnWheel: {
      type: Boolean,
      default: true
    },
    wheelZoomRatio: {
      type: Number,
      default: 0.1
    },
    cropBoxMovable: {
      type: Boolean,
      default: true
    },
    cropBoxResizable: {
      type: Boolean,
      default: true
    },
    toggleDragModeOnDblclick: {
      type: Boolean,
      default: true
    },
    minCanvasWidth: {
      type: Number,
      default: 0
    },
    minCanvasHeight: {
      type: Number,
      default: 0
    },
    minCropBoxWidth: {
      type: Number,
      default: 0
    },
    minCropBoxHeight: {
      type: Number,
      default: 0
    },
    minContainerWidth: {
      type: Number,
      default: 200
    },
    minContainerHeight: {
      type: Number,
      default: 100
    },
    ready: {
      type: Function,
      default: void 0
    },
    cropstart: {
      type: Function,
      default: void 0
    },
    cropmove: {
      type: Function,
      default: void 0
    },
    cropend: {
      type: Function,
      default: void 0
    },
    crop: {
      type: Function,
      default: void 0
    },
    zoom: {
      type: Function,
      default: void 0
    }
  },
  setup(__props, { expose }) {
    const props = __props;
    const imageStyle = {
      display: "block",
      maxWidth: "100%"
    };
    const imageRef = ref();
    let cropper;
    function initCropper() {
      if (props.src) {
        cropper = new Cropper(imageRef.value, toRaw(props));
      } else {
        cropper = void 0;
      }
    }
    onMounted(initCropper);
    watch(() => props, () => {
      cropper == null ? void 0 : cropper.destroy();
      nextTick(initCropper);
    }, { deep: true });
    expose({
      clear() {
        return cropper == null ? void 0 : cropper.clear();
      },
      crop() {
        return cropper == null ? void 0 : cropper.crop();
      },
      destroy() {
        return cropper == null ? void 0 : cropper.destroy();
      },
      disable() {
        return cropper == null ? void 0 : cropper.disable();
      },
      enable() {
        return cropper == null ? void 0 : cropper.enable();
      },
      getCanvasData() {
        return cropper == null ? void 0 : cropper.getCanvasData();
      },
      getContainerData() {
        return cropper == null ? void 0 : cropper.getContainerData();
      },
      getCropBoxData() {
        return cropper == null ? void 0 : cropper.getCropBoxData();
      },
      getCroppedCanvas(options) {
        return cropper == null ? void 0 : cropper.getCroppedCanvas(options);
      },
      getData(rounded) {
        return cropper == null ? void 0 : cropper.getData(rounded);
      },
      getImageData() {
        return cropper == null ? void 0 : cropper.getImageData();
      },
      move(offsetX, offsetY) {
        return cropper == null ? void 0 : cropper.move(offsetX, offsetY);
      },
      moveTo(x, y) {
        return cropper == null ? void 0 : cropper.moveTo(x, y);
      },
      replace(url, hasSameSize) {
        return cropper == null ? void 0 : cropper.replace(url, hasSameSize);
      },
      reset() {
        return cropper == null ? void 0 : cropper.reset();
      },
      rotate(degree) {
        return cropper == null ? void 0 : cropper.rotate(degree);
      },
      rotateTo(degree) {
        return cropper == null ? void 0 : cropper.rotateTo(degree);
      },
      scale(scaleX, scaleY) {
        return cropper == null ? void 0 : cropper.scale(scaleX, scaleY);
      },
      scaleX(scaleX) {
        return cropper == null ? void 0 : cropper.scaleX(scaleX);
      },
      scaleY(scaleY) {
        return cropper == null ? void 0 : cropper.scaleY(scaleY);
      },
      setAspectRatio(aspectRatio) {
        return cropper == null ? void 0 : cropper.setAspectRatio(aspectRatio);
      },
      setCanvasData(data) {
        return cropper == null ? void 0 : cropper.setCanvasData(data);
      },
      setCropBoxData(data) {
        return cropper == null ? void 0 : cropper.setCropBoxData(data);
      },
      setData(data) {
        return cropper == null ? void 0 : cropper.setData(data);
      },
      setDragMode(dragMode) {
        return cropper == null ? void 0 : cropper.setDragMode(dragMode);
      },
      zoom(ratio) {
        return cropper == null ? void 0 : cropper.zoom(ratio);
      },
      zoomTo(ratio, pivot) {
        return cropper == null ? void 0 : cropper.zoomTo(ratio, pivot);
      },
      flipX() {
        if (cropper) {
          const { scaleX } = cropper.getData();
          cropper.scaleX(-scaleX);
        }
      },
      flipY() {
        if (cropper) {
          const { scaleY } = cropper.getData();
          cropper.scaleY(-scaleY);
        }
      }
    });
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock("div", null, [
        createElementVNode("img", {
          ref_key: "imageRef",
          ref: imageRef,
          src: props.src,
          alt: props.alt,
          crossorigin: __props.imgCrossOrigin,
          style: normalizeStyle([imageStyle, props.imgStyle])
        }, null, 12, _hoisted_1)
      ]);
    };
  }
});
export { _sfc_main as default };
