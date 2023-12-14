"use strict"

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);

if (ScrollTrigger.isTouch !== 1) {
    ScrollSmoother.create({
        wrapper: '.wrapper',
        content: '.content',
        smooth: 1.5,
        effects: true
    });

    gsap.fromTo('.hero', { opacity: 1 }, {
        opacity: 0,
        scrollTrigger: {
            trigger: '.hero',
            start: 'center',
            end: '880',
            scrub: true
        }
    });

    let leftItems = gsap.utils.toArray('.galery__left .galery__item');
    leftItems.forEach((item) => {
        gsap.fromTo(item, { x: -150, opacity: 0 }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-920',
                end: '-100',
                scrub: true
            }
        })
    });

    let rightItems = gsap.utils.toArray('.galery__right .galery__item');
    rightItems.forEach((item) => {
        gsap.fromTo(item, { x: 150, opacity: 0 }, {
            opacity: 1,
            x: 0,
            scrollTrigger: {
                trigger: item,
                start: '-810',
                end: 'top',
                scrub: true
            }
        })
    });
}
