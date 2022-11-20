import { defineComponent as s, ref as r, onMounted as f, watch as m, nextTick as y, openBlock as g, createElementBlock as v, createElementVNode as B, normalizeStyle as C, toRaw as b } from "vue";
import D from "cropperjs";
const h = ["src", "alt", "crossorigin"], x = /* @__PURE__ */ s({
  __name: "VueCropper",
  props: {
    src: {
      type: String,
      required: !0
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
      default: !0
    },
    restore: {
      type: Boolean,
      default: !0
    },
    checkCrossOrigin: {
      type: Boolean,
      default: !0
    },
    checkOrientation: {
      type: Boolean,
      default: !0
    },
    modal: {
      type: Boolean,
      default: !0
    },
    guides: {
      type: Boolean,
      default: !0
    },
    center: {
      type: Boolean,
      default: !0
    },
    highlight: {
      type: Boolean,
      default: !0
    },
    background: {
      type: Boolean,
      default: !0
    },
    autoCrop: {
      type: Boolean,
      default: !0
    },
    autoCropArea: {
      type: Number,
      default: 0.8
    },
    movable: {
      type: Boolean,
      default: !0
    },
    rotatable: {
      type: Boolean,
      default: !0
    },
    scalable: {
      type: Boolean,
      default: !0
    },
    zoomable: {
      type: Boolean,
      default: !0
    },
    zoomOnTouch: {
      type: Boolean,
      default: !0
    },
    zoomOnWheel: {
      type: Boolean,
      default: !0
    },
    wheelZoomRatio: {
      type: Number,
      default: 0.1
    },
    cropBoxMovable: {
      type: Boolean,
      default: !0
    },
    cropBoxResizable: {
      type: Boolean,
      default: !0
    },
    toggleDragModeOnDblclick: {
      type: Boolean,
      default: !0
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
  setup(o, { expose: i }) {
    const n = o, d = {
      display: "block",
      maxWidth: "100%"
    }, u = r();
    let e;
    function l() {
      n.src ? e = new D(u.value, b(n)) : e = void 0;
    }
    return f(l), m(
      () => n,
      () => {
        e == null || e.destroy(), y(l);
      },
      { deep: !0 }
    ), i({
      clear() {
        return e == null ? void 0 : e.clear();
      },
      crop() {
        return e == null ? void 0 : e.crop();
      },
      destroy() {
        return e == null ? void 0 : e.destroy();
      },
      disable() {
        return e == null ? void 0 : e.disable();
      },
      enable() {
        return e == null ? void 0 : e.enable();
      },
      getCanvasData() {
        return e == null ? void 0 : e.getCanvasData();
      },
      getContainerData() {
        return e == null ? void 0 : e.getContainerData();
      },
      getCropBoxData() {
        return e == null ? void 0 : e.getCropBoxData();
      },
      getCroppedCanvas(t) {
        return e == null ? void 0 : e.getCroppedCanvas(t);
      },
      getData(t) {
        return e == null ? void 0 : e.getData(t);
      },
      getImageData() {
        return e == null ? void 0 : e.getImageData();
      },
      move(t, a) {
        return e == null ? void 0 : e.move(t, a);
      },
      moveTo(t, a) {
        return e == null ? void 0 : e.moveTo(t, a);
      },
      replace(t, a) {
        return e == null ? void 0 : e.replace(t, a);
      },
      reset() {
        return e == null ? void 0 : e.reset();
      },
      rotate(t) {
        return e == null ? void 0 : e.rotate(t);
      },
      rotateTo(t) {
        return e == null ? void 0 : e.rotateTo(t);
      },
      scale(t, a) {
        return e == null ? void 0 : e.scale(t, a);
      },
      scaleX(t) {
        return e == null ? void 0 : e.scaleX(t);
      },
      scaleY(t) {
        return e == null ? void 0 : e.scaleY(t);
      },
      setAspectRatio(t) {
        return e == null ? void 0 : e.setAspectRatio(t);
      },
      setCanvasData(t) {
        return e == null ? void 0 : e.setCanvasData(t);
      },
      setCropBoxData(t) {
        return e == null ? void 0 : e.setCropBoxData(t);
      },
      setData(t) {
        return e == null ? void 0 : e.setData(t);
      },
      setDragMode(t) {
        return e == null ? void 0 : e.setDragMode(t);
      },
      zoom(t) {
        return e == null ? void 0 : e.zoom(t);
      },
      zoomTo(t, a) {
        return e == null ? void 0 : e.zoomTo(t, a);
      },
      flipX() {
        if (e) {
          const { scaleX: t } = e.getData();
          e.scaleX(-t);
        }
      },
      flipY() {
        if (e) {
          const { scaleY: t } = e.getData();
          e.scaleY(-t);
        }
      }
    }), (t, a) => (g(), v("div", null, [
      B("img", {
        ref_key: "imageRef",
        ref: u,
        src: n.src,
        alt: n.alt,
        crossorigin: o.imgCrossOrigin,
        style: C([d, n.imgStyle])
      }, null, 12, h)
    ]));
  }
});
export {
  x as default
};
