import { gsap } from '@/node_modules/gsap';
import { ScrollTrigger } from '@/node_modules/gsap/ScrollTrigger'
import { Draggable } from '@/node_modules/gsap/Draggable'
import { Observer } from '@/node_modules/gsap/Observer'

export default defineNuxtPlugin(() => {
    gsap.registerPlugin(Observer, ScrollTrigger, Draggable)

    if (process.client) {
        gsap.registerPlugin(Draggable)
    }

    return {
        provide: {
            gsap,
            Observer,
            ScrollTrigger,
            Draggable
        }
    }
})