import type { AllowedComponentProps } from 'vue';
import type { ComponentCustomProps } from 'vue';
import type { ComponentOptionsMixin } from 'vue';
import { default as Cropper_2 } from 'cropperjs';
import type { CSSProperties } from 'vue';
import type { DefineComponent } from 'vue';
import type { ExtractPropTypes } from 'vue';
import type { LooseRequired } from '@vue/shared';
import type { PropType } from 'vue';
import type { Ref } from 'vue';
import type { VNodeProps } from 'vue';

declare const _sfc_main: DefineComponent<{
    src: {
        type: StringConstructor;
        required: true;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    imgStyle: {
        type: PropType<CSSProperties>;
        default: () => {};
    };
    imgCrossOrigin: {
        type: PropType<"" | "anonymous" | "use-credentials" | undefined>;
        default: undefined;
    };
    viewMode: {
        type: PropType<Cropper_2.ViewMode>;
        default: number;
    };
    dragMode: {
        type: PropType<Cropper_2.DragMode>;
        default: string;
    };
    initialAspectRatio: {
        type: NumberConstructor;
        default: number;
    };
    aspectRatio: {
        type: NumberConstructor;
        default: number;
    };
    data: {
        type: PropType<Cropper_2.SetDataOptions>;
        default: undefined;
    };
    preview: {
        type: PropType<string | HTMLElement | HTMLElement[] | NodeListOf<HTMLElement> | undefined>;
        default: string;
    };
    responsive: {
        type: BooleanConstructor;
        default: boolean;
    };
    restore: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkCrossOrigin: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkOrientation: {
        type: BooleanConstructor;
        default: boolean;
    };
    modal: {
        type: BooleanConstructor;
        default: boolean;
    };
    guides: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlight: {
        type: BooleanConstructor;
        default: boolean;
    };
    background: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoCrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoCropArea: {
        type: NumberConstructor;
        default: number;
    };
    movable: {
        type: BooleanConstructor;
        default: boolean;
    };
    rotatable: {
        type: BooleanConstructor;
        default: boolean;
    };
    scalable: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomable: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomOnTouch: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomOnWheel: {
        type: BooleanConstructor;
        default: boolean;
    };
    wheelZoomRatio: {
        type: NumberConstructor;
        default: number;
    };
    cropBoxMovable: {
        type: BooleanConstructor;
        default: boolean;
    };
    cropBoxResizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    toggleDragModeOnDblclick: {
        type: BooleanConstructor;
        default: boolean;
    };
    minCanvasWidth: {
        type: NumberConstructor;
        default: number;
    };
    minCanvasHeight: {
        type: NumberConstructor;
        default: number;
    };
    minCropBoxWidth: {
        type: NumberConstructor;
        default: number;
    };
    minCropBoxHeight: {
        type: NumberConstructor;
        default: number;
    };
    minContainerWidth: {
        type: NumberConstructor;
        default: number;
    };
    minContainerHeight: {
        type: NumberConstructor;
        default: number;
    };
    ready: {
        type: PropType<(event: Cropper_2.ReadyEvent<EventTarget>) => void>;
        default: undefined;
    };
    cropstart: {
        type: PropType<(event: Cropper_2.CropStartEvent) => void>;
        default: undefined;
    };
    cropmove: {
        type: PropType<(event: Cropper_2.CropMoveEvent) => void>;
        default: undefined;
    };
    cropend: {
        type: PropType<(event: Cropper_2.CropEndEvent) => void>;
        default: undefined;
    };
    crop: {
        type: PropType<(event: Cropper_2.CropEvent) => void>;
        default: undefined;
    };
    zoom: {
        type: PropType<(event: Cropper_2.ZoomEvent) => void>;
        default: undefined;
    };
}, {
    imageStyle: {
        display: string;
        maxWidth: string;
    };
    props: Readonly<LooseRequired<Readonly<ExtractPropTypes<{
        src: {
            type: StringConstructor;
            required: true;
        };
        alt: {
            type: StringConstructor;
            default: string;
        };
        imgStyle: {
            type: PropType<CSSProperties>;
            default: () => {};
        };
        imgCrossOrigin: {
            type: PropType<"" | "anonymous" | "use-credentials" | undefined>;
            default: undefined;
        };
        viewMode: {
            type: PropType<Cropper_2.ViewMode>;
            default: number;
        };
        dragMode: {
            type: PropType<Cropper_2.DragMode>;
            default: string;
        };
        initialAspectRatio: {
            type: NumberConstructor;
            default: number;
        };
        aspectRatio: {
            type: NumberConstructor;
            default: number;
        };
        data: {
            type: PropType<Cropper_2.SetDataOptions>;
            default: undefined;
        };
        preview: {
            type: PropType<string | HTMLElement | HTMLElement[] | NodeListOf<HTMLElement> | undefined>;
            default: string;
        };
        responsive: {
            type: BooleanConstructor;
            default: boolean;
        };
        restore: {
            type: BooleanConstructor;
            default: boolean;
        };
        checkCrossOrigin: {
            type: BooleanConstructor;
            default: boolean;
        };
        checkOrientation: {
            type: BooleanConstructor;
            default: boolean;
        };
        modal: {
            type: BooleanConstructor;
            default: boolean;
        };
        guides: {
            type: BooleanConstructor;
            default: boolean;
        };
        center: {
            type: BooleanConstructor;
            default: boolean;
        };
        highlight: {
            type: BooleanConstructor;
            default: boolean;
        };
        background: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoCrop: {
            type: BooleanConstructor;
            default: boolean;
        };
        autoCropArea: {
            type: NumberConstructor;
            default: number;
        };
        movable: {
            type: BooleanConstructor;
            default: boolean;
        };
        rotatable: {
            type: BooleanConstructor;
            default: boolean;
        };
        scalable: {
            type: BooleanConstructor;
            default: boolean;
        };
        zoomable: {
            type: BooleanConstructor;
            default: boolean;
        };
        zoomOnTouch: {
            type: BooleanConstructor;
            default: boolean;
        };
        zoomOnWheel: {
            type: BooleanConstructor;
            default: boolean;
        };
        wheelZoomRatio: {
            type: NumberConstructor;
            default: number;
        };
        cropBoxMovable: {
            type: BooleanConstructor;
            default: boolean;
        };
        cropBoxResizable: {
            type: BooleanConstructor;
            default: boolean;
        };
        toggleDragModeOnDblclick: {
            type: BooleanConstructor;
            default: boolean;
        };
        minCanvasWidth: {
            type: NumberConstructor;
            default: number;
        };
        minCanvasHeight: {
            type: NumberConstructor;
            default: number;
        };
        minCropBoxWidth: {
            type: NumberConstructor;
            default: number;
        };
        minCropBoxHeight: {
            type: NumberConstructor;
            default: number;
        };
        minContainerWidth: {
            type: NumberConstructor;
            default: number;
        };
        minContainerHeight: {
            type: NumberConstructor;
            default: number;
        };
        ready: {
            type: PropType<(event: Cropper_2.ReadyEvent<EventTarget>) => void>;
            default: undefined;
        };
        cropstart: {
            type: PropType<(event: Cropper_2.CropStartEvent) => void>;
            default: undefined;
        };
        cropmove: {
            type: PropType<(event: Cropper_2.CropMoveEvent) => void>;
            default: undefined;
        };
        cropend: {
            type: PropType<(event: Cropper_2.CropEndEvent) => void>;
            default: undefined;
        };
        crop: {
            type: PropType<(event: Cropper_2.CropEvent) => void>;
            default: undefined;
        };
        zoom: {
            type: PropType<(event: Cropper_2.ZoomEvent) => void>;
            default: undefined;
        };
    }>> & {
        [x: string & `on${string}`]: ((...args: any[]) => any) | ((...args: unknown[]) => any) | undefined;
    }>>;
    imageRef: Ref<any>;
    cropper: Cropper_2 | undefined;
    initCropper: () => void;
}, unknown, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, Record<string, any>, string, VNodeProps & AllowedComponentProps & ComponentCustomProps, Readonly<ExtractPropTypes<{
    src: {
        type: StringConstructor;
        required: true;
    };
    alt: {
        type: StringConstructor;
        default: string;
    };
    imgStyle: {
        type: PropType<CSSProperties>;
        default: () => {};
    };
    imgCrossOrigin: {
        type: PropType<"" | "anonymous" | "use-credentials" | undefined>;
        default: undefined;
    };
    viewMode: {
        type: PropType<Cropper_2.ViewMode>;
        default: number;
    };
    dragMode: {
        type: PropType<Cropper_2.DragMode>;
        default: string;
    };
    initialAspectRatio: {
        type: NumberConstructor;
        default: number;
    };
    aspectRatio: {
        type: NumberConstructor;
        default: number;
    };
    data: {
        type: PropType<Cropper_2.SetDataOptions>;
        default: undefined;
    };
    preview: {
        type: PropType<string | HTMLElement | HTMLElement[] | NodeListOf<HTMLElement> | undefined>;
        default: string;
    };
    responsive: {
        type: BooleanConstructor;
        default: boolean;
    };
    restore: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkCrossOrigin: {
        type: BooleanConstructor;
        default: boolean;
    };
    checkOrientation: {
        type: BooleanConstructor;
        default: boolean;
    };
    modal: {
        type: BooleanConstructor;
        default: boolean;
    };
    guides: {
        type: BooleanConstructor;
        default: boolean;
    };
    center: {
        type: BooleanConstructor;
        default: boolean;
    };
    highlight: {
        type: BooleanConstructor;
        default: boolean;
    };
    background: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoCrop: {
        type: BooleanConstructor;
        default: boolean;
    };
    autoCropArea: {
        type: NumberConstructor;
        default: number;
    };
    movable: {
        type: BooleanConstructor;
        default: boolean;
    };
    rotatable: {
        type: BooleanConstructor;
        default: boolean;
    };
    scalable: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomable: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomOnTouch: {
        type: BooleanConstructor;
        default: boolean;
    };
    zoomOnWheel: {
        type: BooleanConstructor;
        default: boolean;
    };
    wheelZoomRatio: {
        type: NumberConstructor;
        default: number;
    };
    cropBoxMovable: {
        type: BooleanConstructor;
        default: boolean;
    };
    cropBoxResizable: {
        type: BooleanConstructor;
        default: boolean;
    };
    toggleDragModeOnDblclick: {
        type: BooleanConstructor;
        default: boolean;
    };
    minCanvasWidth: {
        type: NumberConstructor;
        default: number;
    };
    minCanvasHeight: {
        type: NumberConstructor;
        default: number;
    };
    minCropBoxWidth: {
        type: NumberConstructor;
        default: number;
    };
    minCropBoxHeight: {
        type: NumberConstructor;
        default: number;
    };
    minContainerWidth: {
        type: NumberConstructor;
        default: number;
    };
    minContainerHeight: {
        type: NumberConstructor;
        default: number;
    };
    ready: {
        type: PropType<(event: Cropper_2.ReadyEvent<EventTarget>) => void>;
        default: undefined;
    };
    cropstart: {
        type: PropType<(event: Cropper_2.CropStartEvent) => void>;
        default: undefined;
    };
    cropmove: {
        type: PropType<(event: Cropper_2.CropMoveEvent) => void>;
        default: undefined;
    };
    cropend: {
        type: PropType<(event: Cropper_2.CropEndEvent) => void>;
        default: undefined;
    };
    crop: {
        type: PropType<(event: Cropper_2.CropEvent) => void>;
        default: undefined;
    };
    zoom: {
        type: PropType<(event: Cropper_2.ZoomEvent) => void>;
        default: undefined;
    };
}>>, {
    crop: (event: Cropper_2.CropEvent) => void;
    preview: string | HTMLElement | HTMLElement[] | NodeListOf<HTMLElement> | undefined;
    alt: string;
    imgStyle: CSSProperties;
    imgCrossOrigin: "" | "anonymous" | "use-credentials" | undefined;
    viewMode: Cropper_2.ViewMode;
    dragMode: Cropper_2.DragMode;
    initialAspectRatio: number;
    aspectRatio: number;
    data: Cropper_2.SetDataOptions;
    responsive: boolean;
    restore: boolean;
    checkCrossOrigin: boolean;
    checkOrientation: boolean;
    modal: boolean;
    guides: boolean;
    center: boolean;
    highlight: boolean;
    background: boolean;
    autoCrop: boolean;
    autoCropArea: number;
    movable: boolean;
    rotatable: boolean;
    scalable: boolean;
    zoomable: boolean;
    zoomOnTouch: boolean;
    zoomOnWheel: boolean;
    wheelZoomRatio: number;
    cropBoxMovable: boolean;
    cropBoxResizable: boolean;
    toggleDragModeOnDblclick: boolean;
    minCanvasWidth: number;
    minCanvasHeight: number;
    minCropBoxWidth: number;
    minCropBoxHeight: number;
    minContainerWidth: number;
    minContainerHeight: number;
    ready: (event: Cropper_2.ReadyEvent<EventTarget>) => void;
    cropstart: (event: Cropper_2.CropStartEvent) => void;
    cropmove: (event: Cropper_2.CropMoveEvent) => void;
    cropend: (event: Cropper_2.CropEndEvent) => void;
    zoom: (event: Cropper_2.ZoomEvent) => void;
}>;
export default _sfc_main;

export declare interface VueCropperInstance {
    clear(): Cropper_2;
    crop(): Cropper_2;
    destroy(): Cropper_2;
    disable(): Cropper_2;
    enable(): Cropper_2;
    getCanvasData(): Cropper_2.CanvasData;
    getContainerData(): Cropper_2.ContainerData;
    getCropBoxData(): Cropper_2.CropBoxData;
    getCroppedCanvas(options?: Cropper_2.GetCroppedCanvasOptions): HTMLCanvasElement;
    getData(rounded?: boolean): Cropper_2.Data;
    getImageData(): Cropper_2.ImageData;
    move(offsetX: number, offsetY?: number): Cropper_2;
    moveTo(x: number, y?: number): Cropper_2;
    replace(url: string, onlyColorChanged?: boolean): Cropper_2;
    reset(): Cropper_2;
    rotate(degree: number): Cropper_2;
    rotateTo(degree: number): Cropper_2;
    scale(scaleX: number, scaleY?: number): Cropper_2;
    scaleX(scaleX: number): Cropper_2;
    scaleY(scaleY: number): Cropper_2;
    setAspectRatio(aspectRatio: number): Cropper_2;
    setCanvasData(data: Cropper_2.SetCanvasDataOptions): Cropper_2;
    setCropBoxData(data: Cropper_2.SetCropBoxDataOptions): Cropper_2;
    setData(data: Cropper_2.SetDataOptions): Cropper_2;
    setDragMode(dragMode: Cropper_2.DragMode): Cropper_2;
    zoom(ratio: number): Cropper_2;
    zoomTo(ratio: number, pivot?: {
        x: number;
        y: number;
    }): Cropper_2;
    flipX(): void;
    flipY(): void;
}

export { }
