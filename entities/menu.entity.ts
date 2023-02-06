import {RouteLocationRaw} from "vue-router";

export interface MenuEntity {
    title: string
    src: string | RouteLocationRaw
    icon?: string
}
