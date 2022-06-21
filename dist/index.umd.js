;(function (a, l) {
  typeof exports == 'object' && typeof module != 'undefined'
    ? (module.exports = l(require('vue'), require('cropperjs')))
    : typeof define == 'function' && define.amd
    ? define(['vue', 'cropperjs'], l)
    : ((a = typeof globalThis != 'undefined' ? globalThis : a || self),
      (a.VueCropper = l(a.Vue, a.CropperJs)))
})(this, function (a, l) {
  'use strict'
  function r(u) {
    return u && typeof u == 'object' && 'default' in u ? u : { default: u }
  }
  var s = r(l)
  const f = ['src', 'alt', 'crossorigin']
  return a.defineComponent({
    __name: 'VueCropper',
    props: {
      src: { type: String, required: !0 },
      alt: { type: String, default: 'image' },
      imgStyle: { type: Object, default: () => ({}) },
      imgCrossOrigin: { type: String, default: null },
      viewMode: { type: Number, default: 0 },
      dragMode: { type: String, default: 'crop' },
      initialAspectRatio: { type: Number, default: NaN },
      aspectRatio: { type: Number, default: NaN },
      data: { type: Object, default: void 0 },
      preview: { type: [String, Array, Object], default: '' },
      responsive: { type: Boolean, default: !0 },
      restore: { type: Boolean, default: !0 },
      checkCrossOrigin: { type: Boolean, default: !0 },
      checkOrientation: { type: Boolean, default: !0 },
      modal: { type: Boolean, default: !0 },
      guides: { type: Boolean, default: !0 },
      center: { type: Boolean, default: !0 },
      highlight: { type: Boolean, default: !0 },
      background: { type: Boolean, default: !0 },
      autoCrop: { type: Boolean, default: !0 },
      autoCropArea: { type: Number, default: 0.8 },
      movable: { type: Boolean, default: !0 },
      rotatable: { type: Boolean, default: !0 },
      scalable: { type: Boolean, default: !0 },
      zoomable: { type: Boolean, default: !0 },
      zoomOnTouch: { type: Boolean, default: !0 },
      zoomOnWheel: { type: Boolean, default: !0 },
      wheelZoomRatio: { type: Number, default: 0.1 },
      cropBoxMovable: { type: Boolean, default: !0 },
      cropBoxResizable: { type: Boolean, default: !0 },
      toggleDragModeOnDblclick: { type: Boolean, default: !0 },
      minCanvasWidth: { type: Number, default: 0 },
      minCanvasHeight: { type: Number, default: 0 },
      minCropBoxWidth: { type: Number, default: 0 },
      minCropBoxHeight: { type: Number, default: 0 },
      minContainerWidth: { type: Number, default: 200 },
      minContainerHeight: { type: Number, default: 100 },
      ready: { type: Function, default: void 0 },
      cropstart: { type: Function, default: void 0 },
      cropmove: { type: Function, default: void 0 },
      cropend: { type: Function, default: void 0 },
      crop: { type: Function, default: void 0 },
      zoom: { type: Function, default: void 0 }
    },
    setup(u, { expose: y }) {
      const o = u,
        m = { display: 'block', maxWidth: '100%' },
        i = a.ref()
      let e
      function d() {
        o.src ? (e = new s.default(i.value, a.toRaw(o))) : (e = void 0)
      }
      return (
        a.onMounted(d),
        a.watch(
          () => o,
          () => {
            e == null || e.destroy(), a.nextTick(d)
          },
          { deep: !0 }
        ),
        y({
          clear() {
            return e == null ? void 0 : e.clear()
          },
          crop() {
            return e == null ? void 0 : e.crop()
          },
          destroy() {
            return e == null ? void 0 : e.destroy()
          },
          disable() {
            return e == null ? void 0 : e.disable()
          },
          enable() {
            return e == null ? void 0 : e.enable()
          },
          getCanvasData() {
            return e == null ? void 0 : e.getCanvasData()
          },
          getContainerData() {
            return e == null ? void 0 : e.getContainerData()
          },
          getCropBoxData() {
            return e == null ? void 0 : e.getCropBoxData()
          },
          getCroppedCanvas(t) {
            return e == null ? void 0 : e.getCroppedCanvas(t)
          },
          getData(t) {
            return e == null ? void 0 : e.getData(t)
          },
          getImageData() {
            return e == null ? void 0 : e.getImageData()
          },
          move(t, n) {
            return e == null ? void 0 : e.move(t, n)
          },
          moveTo(t, n) {
            return e == null ? void 0 : e.moveTo(t, n)
          },
          replace(t, n) {
            return e == null ? void 0 : e.replace(t, n)
          },
          reset() {
            return e == null ? void 0 : e.reset()
          },
          rotate(t) {
            return e == null ? void 0 : e.rotate(t)
          },
          rotateTo(t) {
            return e == null ? void 0 : e.rotateTo(t)
          },
          scale(t, n) {
            return e == null ? void 0 : e.scale(t, n)
          },
          scaleX(t) {
            return e == null ? void 0 : e.scaleX(t)
          },
          scaleY(t) {
            return e == null ? void 0 : e.scaleY(t)
          },
          setAspectRatio(t) {
            return e == null ? void 0 : e.setAspectRatio(t)
          },
          setCanvasData(t) {
            return e == null ? void 0 : e.setCanvasData(t)
          },
          setCropBoxData(t) {
            return e == null ? void 0 : e.setCropBoxData(t)
          },
          setData(t) {
            return e == null ? void 0 : e.setData(t)
          },
          setDragMode(t) {
            return e == null ? void 0 : e.setDragMode(t)
          },
          zoom(t) {
            return e == null ? void 0 : e.zoom(t)
          },
          zoomTo(t, n) {
            return e == null ? void 0 : e.zoomTo(t, n)
          },
          flipX() {
            if (e) {
              const { scaleX: t } = e.getData()
              e.scaleX(-t)
            }
          },
          flipY() {
            if (e) {
              const { scaleY: t } = e.getData()
              e.scaleY(-t)
            }
          }
        }),
        (t, n) => (
          a.openBlock(),
          a.createElementBlock('div', null, [
            a.createElementVNode(
              'img',
              {
                ref_key: 'imageRef',
                ref: i,
                src: o.src,
                alt: o.alt,
                crossorigin: u.imgCrossOrigin,
                style: a.normalizeStyle([m, o.imgStyle])
              },
              null,
              12,
              f
            )
          ])
        )
      )
    }
  })
})
