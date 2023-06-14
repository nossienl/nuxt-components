import { gsap } from '@/node_modules/gsap'
import { ScrollTrigger } from '@/node_modules/gsap/ScrollTrigger'
import { ScrollToPlugin } from '@/node_modules/gsap/ScrollToPlugin'
import { Draggable } from '@/node_modules/gsap/Draggable'

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Draggable)
    }

    return {
        provide: {
            gsap,
            Draggable,
            ScrollTrigger,
        },
    }
})