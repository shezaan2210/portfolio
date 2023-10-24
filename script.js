function loco(){
    gsap.registerPlugin(ScrollTrigger);

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
loco();

var tl = gsap.timeline({
    
});

tl.from(`.nav-link`,{
    stagger:.2,
    duration:.8,
    delay:.5,
    y:10,
    opacity:0
});




gsap.from(`#home>.inner`,{
    delay:1.5,
    stagger:.3,
    duration:.7,
    y:40,
    opacity:0,
    ease: Expo
})
  


Shery.textAnimate("#home>.inner>h1" /* Element to target.*/, {
    //Parameters are optional.
    style: 1,
    y: 10,
    delay: .3,
    opacity:0,
    duration: .2,
    ease: "cubic-bezier(0.23, 1, 0.320, 1)",
    multiplier: 0.1,
})

Shery.imageEffect(`.imageff>img`,{
    style:5,
   config: {"uFrequencyX":{"value":9.09,"range":[0,100]},"uFrequencyY":{"value":9.09,"range":[0,100]},"uFrequencyZ":{"value":25.62,"range":[0,100]},"geoVertex":{"range":[1,64],"value":10.37},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6999788494077834},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.4,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    
})
Shery.imageEffect(`#home>#second>img`,{
    style:3,
    config: {"uFrequencyX":{"value":14.88,"range":[0,100]},"uFrequencyY":{"value":14.88,"range":[0,100]},"uFrequencyZ":{"value":27.27,"range":[0,100]},"geoVertex":{"range":[1,64],"value":10.37},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":0.6349037600716204},"gooey":{"value":false},"infiniteGooey":{"value":false},"growSize":{"value":4,"range":[1,15]},"durationOut":{"value":1,"range":[0.1,5]},"durationIn":{"value":1.5,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.79,"range":[1,5]},"scrollType":{"value":0},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":0.2,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2]},"discard_threshold":{"value":0.5,"range":[0,1]},"antialias_threshold":{"value":0.002,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":10,"range":[0,100]}},
    // debug:true
})

gsap.from(`#home>#first>img`,{
    z:-3,
    duration:1,
    opacity:0,
    ease: Expo
})

gsap.from(`#home>#second>img`,{
    z:-3,
    duration:1,
    opacity:0,
    ease: Expo
})

Shery.imageEffect(`.gooey`,{
    style:5,
    config: {"a":{"value":1.49,"range":[0,30]},"b":{"value":-0.97,"range":[-1,1]},"zindex":{"value":-9996999,"range":[-9999999,9999999]},"aspect":{"value":1.745981584067616},"gooey":{"value":true},"infiniteGooey":{"value":true},"growSize":{"value":2.04,"range":[1,15]},"durationOut":{"value":0.46,"range":[0.1,5]},"durationIn":{"value":0.55,"range":[0.1,5]},"displaceAmount":{"value":0.5},"masker":{"value":true},"maskVal":{"value":1.43,"range":[1,5]},"scrollType":{"value":0},"geoVertex":{"range":[1,64],"value":1},"noEffectGooey":{"value":true},"onMouse":{"value":1},"noise_speed":{"value":1.65,"range":[0,10]},"metaball":{"value":0.2,"range":[0,2],"_gsap":{"id":35}},"discard_threshold":{"value":0.56,"range":[0,1]},"antialias_threshold":{"value":0.01,"range":[0,0.1]},"noise_height":{"value":0.5,"range":[0,2]},"noise_scale":{"value":15.7,"range":[0,100]}},
    // debug:true,
    gooey:true
})

// gsap.to(`#footer>video`)