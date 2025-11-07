import Lenis from "@studio-freight/lenis";

export const initlenis=()=>{

    const lenis = new Lenis({
        duration: 1.8,
        smooth:true,
        direction: "vertical",
        gestureDirection: "vertical",
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });
    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
}