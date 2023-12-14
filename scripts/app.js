"use strict"

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    })

    gsap.fromTo('.hero', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero',
            start: 'center',
            end: '900',
            scrub: true
        }
    })
}
