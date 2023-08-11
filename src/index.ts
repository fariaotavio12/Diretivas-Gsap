//@ts-ignore
import { gsap } from 'gsap';
//@ts-ignore
import { ScrollTrigger } from 'gsap/ScrollTrigger';
//@ts-ignore
import { createApp } from 'vue'; // Importe a instância Vue
gsap.registerPlugin(ScrollTrigger);



const directive  = {
  mounted(el : any, binding : any) {
    const options = binding.value || {};
    const initialState = options.initialState || {};

    gsap.set(el, initialState);

    if (options.textAnimation) {
      gsap.to(el, {
        text: options.textAnimation,
        ...options.animation,
      });
    } else if (options.scrollTrigger) {
      gsap.to(el, {
        scrollTrigger: {
          trigger: el,
          ...options.scrollTrigger,
        },
        ...options.animation,
      });
    } else {
      gsap.from(el, {
        opacity: 0,
        duration: 1,
        ...options.animation,
      });
    }
  },
};

export default {
  install(app : any) {
    app.directive('gsap', directive);
  },
}; 