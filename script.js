// gsap.to('#blackB',{
//     left: '-200%',
//     duration: 1,
//     delay: 1,
// });
// gsap.to('#greenB',{
//     right: '-200%',
//     duration: 1,
//     delay: 1,
// })
// gsap.to('.block-wrap',{
//   height: 0,
//   duration: 1,
//   delay: 1.25,
// })

var tl = gsap.timeline()

TweenMax.to("#blackB", {
  duration: 1,
  clipPath: 'polygon(0 0, 0 100%, 100% 0)'
})
TweenMax.to("#greenB", {
  duration: 1,
  clipPath: 'polygon(100% 100%, 100% 100%, 100% 100%)'
})

// gsap.registerPlugin(ScrollTrigger);

// let mm = gsap.matchMedia(),
//     breakPoint = 800;

// mm.add({
//   // set up any number of arbitrarily-named conditions. The function below will be called when ANY of them match.
//   isDesktop: `(min-width: ${breakPoint}px) and (prefers-reduced-motion: no-preference)`,
//   isMobile: `(max-width: ${breakPoint - 1}px) and (prefers-reduced-motion: no-preference)`
// }, (context) => {
//   // context.conditions has a boolean property for each condition defined above indicating if it's matched or not.
//   let { isDesktop, isMobile } = context.conditions,
//       target = isDesktop ? ".desktop" : ".mobile",
//       tl = gsap.timeline({
//         scrollTrigger: {
//           trigger: ".gray",
//           scrub: 1,
//           end: "200%",
//           pin: true
//         }
//       });
//   tl.to(target, {scale: 2, rotation: 360})
//     .to(target, {scale: 1});

//   // works for non-ScrollTrigger animations too: 
//   gsap.to(target, {backgroundColor: "#2c7ad2", duration: 0.8, ease: "none", repeat: -1, yoyo: true});

//   return () => { 
//     // optionally return a cleanup function that will be called when the media query no longer matches
//   }
// }); 