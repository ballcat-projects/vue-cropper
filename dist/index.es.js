import { defineComponent as s, ref as r, onMounted as f, watch as m, nextTick as y, openBlock as g, createElementBlock as v, createElementVNode as B, normalizeStyle as C, toRaw as b } from "vue";
import D from "cropperjs";
const h = ["src", "alt", "crossorigin"], x = /* @__PURE__ */ s({
  __name: "VueCropper",
  props: {
    // custom props
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
    // ========= CropperJS options =======
    // Define the view mode of the cropper
    viewMode: {
      type: Number,
      // 0, 1, 2, 3
      default: 0
    },
    // Define the dragging mode of the cropper
    dragMode: {
      type: String,
      // 'crop', 'move' or 'none'
      default: "crop"
    },
    // Define the initial aspect ratio of the crop box
    initialAspectRatio: {
      type: Number,
      default: NaN
    },
    // Define the aspect ratio of the crop box
    aspectRatio: {
      type: Number,
      default: NaN
    },
    // An object with the previous cropping result data
    data: {
      type: Object,
      default: void 0
    },
    // A selector for adding extra containers to preview
    preview: {
      type: [String, Array, Object],
      default: ""
    },
    // Re-render the cropper when resize the window
    responsive: {
      type: Boolean,
      default: !0
    },
    // Restore the cropped area after resize the window
    restore: {
      type: Boolean,
      default: !0
    },
    // Check if the current image is a cross-origin image
    checkCrossOrigin: {
      type: Boolean,
      default: !0
    },
    // Check the current image's Exif Orientation information
    checkOrientation: {
      type: Boolean,
      default: !0
    },
    // Show the black modal
    modal: {
      type: Boolean,
      default: !0
    },
    // Show the dashed lines for guiding
    guides: {
      type: Boolean,
      default: !0
    },
    // Show the center indicator for guiding
    center: {
      type: Boolean,
      default: !0
    },
    // Show the white modal to highlight the crop box
    highlight: {
      type: Boolean,
      default: !0
    },
    // Show the grid background
    background: {
      type: Boolean,
      default: !0
    },
    // Enable to crop the image automatically when initialize
    autoCrop: {
      type: Boolean,
      default: !0
    },
    // Define the percentage of automatic cropping area when initializes
    autoCropArea: {
      type: Number,
      default: 0.8
    },
    // Enable to move the image
    movable: {
      type: Boolean,
      default: !0
    },
    // Enable to rotate the image
    rotatable: {
      type: Boolean,
      default: !0
    },
    // Enable to scale the image
    scalable: {
      type: Boolean,
      default: !0
    },
    // Enable to zoom the image
    zoomable: {
      type: Boolean,
      default: !0
    },
    // Enable to zoom the image by dragging touch
    zoomOnTouch: {
      type: Boolean,
      default: !0
    },
    // Enable to zoom the image by wheeling mouse
    zoomOnWheel: {
      type: Boolean,
      default: !0
    },
    // Define zoom ratio when zoom the image by wheeling mouse
    wheelZoomRatio: {
      type: Number,
      default: 0.1
    },
    // Enable to move the crop box
    cropBoxMovable: {
      type: Boolean,
      default: !0
    },
    // Enable to resize the crop box
    cropBoxResizable: {
      type: Boolean,
      default: !0
    },
    // Toggle drag mode between "crop" and "move" when click twice on the cropper
    toggleDragModeOnDblclick: {
      type: Boolean,
      default: !0
    },
    // Size limitation
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
    // Shortcuts of events
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
      /* This rule is very important, please don't ignore this */
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
      // Clear the crop box
      clear() {
        return e == null ? void 0 : e.clear();
      },
      // Show the crop box manually
      crop() {
        return e == null ? void 0 : e.crop();
      },
      /**
       * Destroy the cropper and remove the instance from the image
       * @returns {Cropper} this
       */
      destroy() {
        return e == null ? void 0 : e.destroy();
      },
      // Disable (freeze) the cropper
      disable() {
        return e == null ? void 0 : e.disable();
      },
      // Enable (unfreeze) the cropper
      enable() {
        return e == null ? void 0 : e.enable();
      },
      /**
       * Get the canvas position and size data.
       * @returns {Object} The result canvas data.
       */
      getCanvasData() {
        return e == null ? void 0 : e.getCanvasData();
      },
      /**
       * Get the container size data.
       * @returns {Object} The result container data.
       */
      getContainerData() {
        return e == null ? void 0 : e.getContainerData();
      },
      /**
       * Get the crop box position and size data.
       * @returns {Object} The result crop box data.
       */
      getCropBoxData() {
        return e == null ? void 0 : e.getCropBoxData();
      },
      /**
       * Get a canvas drawn the cropped image.
       * @param {Object} [options={}] - The config options.
       * @returns {HTMLCanvasElement} - The result canvas.
       */
      getCroppedCanvas(t) {
        return e == null ? void 0 : e.getCroppedCanvas(t);
      },
      /**
       * Get the cropped area position and size data (base on the original image)
       * @param {boolean} [rounded=false] - Indicate if round the data values or not.
       * @returns {Object} The result cropped data.
       */
      getData(t) {
        return e == null ? void 0 : e.getData(t);
      },
      /**
       * Get the image position and size data.
       * @returns {Object} The result image data.
       */
      getImageData() {
        return e == null ? void 0 : e.getImageData();
      },
      /**
       * Move the canvas with relative offsets
       * @param {number} offsetX - The relative offset distance on the x-axis.
       * @param {number} [offsetY=offsetX] - The relative offset distance on the y-axis.
       * @returns {Cropper} this
       */
      move(t, a) {
        return e == null ? void 0 : e.move(t, a);
      },
      /**
       * Move the canvas to an absolute point
       * @param {number} x - The x-axis coordinate.
       * @param {number} [y=x] - The y-axis coordinate.
       * @returns {Cropper} this
       */
      moveTo(t, a) {
        return e == null ? void 0 : e.moveTo(t, a);
      },
      /**
       * Replace the image's src and rebuild the cropper
       * @param {string} url - The new URL.
       * @param {boolean} [hasSameSize] - Indicate if the new image has the same size as the old one.
       * @returns {Cropper} this
       */
      replace(t, a) {
        return e == null ? void 0 : e.replace(t, a);
      },
      // Reset the image and crop box to their initial states
      reset() {
        return e == null ? void 0 : e.reset();
      },
      /**
       * Rotate the canvas with a relative degree
       * @param {number} degree - The rotate degree.
       * @returns {Cropper} this
       */
      rotate(t) {
        return e == null ? void 0 : e.rotate(t);
      },
      /**
       * Rotate the canvas to an absolute degree
       * @param {number} degree - The rotate degree.
       * @returns {Cropper} this
       */
      rotateTo(t) {
        return e == null ? void 0 : e.rotateTo(t);
      },
      /**
       * Scale the image
       * @param {number} scaleX - The scale ratio on the x-axis.
       * @param {number} [scaleY=scaleX] - The scale ratio on the y-axis.
       * @returns {Cropper} this
       */
      scale(t, a) {
        return e == null ? void 0 : e.scale(t, a);
      },
      /**
       * Scale the image on the x-axis.
       * @param {number} scaleX - The scale ratio on the x-axis.
       * @returns {Cropper} this
       */
      scaleX(t) {
        return e == null ? void 0 : e.scaleX(t);
      },
      /**
       * Scale the image on the y-axis.
       * @param {number} scaleY - The scale ratio on the y-axis.
       * @returns {Cropper} this
       */
      scaleY(t) {
        return e == null ? void 0 : e.scaleY(t);
      },
      /**
       * Change the aspect ratio of the crop box.
       * @param {number} aspectRatio - The new aspect ratio.
       * @returns {Cropper} this
       */
      setAspectRatio(t) {
        return e == null ? void 0 : e.setAspectRatio(t);
      },
      /**
       * Set the canvas position and size with new data.
       * @param {Object} data - The new canvas data.
       * @returns {Cropper} this
       */
      setCanvasData(t) {
        return e == null ? void 0 : e.setCanvasData(t);
      },
      /**
       * Set the crop box position and size with new data.
       * @param {Object} data - The new crop box data.
       * @returns {Cropper} this
       */
      setCropBoxData(t) {
        return e == null ? void 0 : e.setCropBoxData(t);
      },
      /**
       * Set the cropped area position and size with new data
       * @param {Object} data - The new data.
       * @returns {Cropper} this
       */
      setData(t) {
        return e == null ? void 0 : e.setData(t);
      },
      /**
       * Change the drag mode.
       * @param {string} dragMode - The new drag mode.
       * @returns {Cropper} this
       */
      setDragMode(t) {
        return e == null ? void 0 : e.setDragMode(t);
      },
      /**
       * Zoom the canvas with a relative ratio
       * @param {number} ratio - The target ratio.
       * @returns {Cropper} this
       */
      zoom(t) {
        return e == null ? void 0 : e.zoom(t);
      },
      /**
       * Zoom the canvas to an absolute ratio
       * @param {number} ratio - The target ratio.
       * @param {Object} pivot - The zoom pivot point coordinate.
       * @returns {Cropper} this
       */
      zoomTo(t, a) {
        return e == null ? void 0 : e.zoomTo(t, a);
      },
      /**
       * flip the image horizontally
       */
      flipX() {
        if (e) {
          const { scaleX: t } = e.getData();
          e.scaleX(-t);
        }
      },
      /**
       * flip the image vertically
       */
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
