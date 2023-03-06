const tl = gsap.timeline({ defaults: { ease: "power1.out" } });

tl.to(".text", { y: "0%", duration: 1, stagger: 0.25 });
tl.to(".slider", { y: "-100%", duration: 1.5, delay: 0.5 });
tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
tl.fromTo("nav", { opacity: 0 }, { opacity: 1, duration: 1 });
tl.fromTo(".title", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".sub__title", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".line", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".form__label", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo(".form__input", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");
tl.fromTo("button", { opacity: 0 }, { opacity: 1, duration: 1 }, "-=1");