const parallaxDown = (gsap, elem, scrub, transform) => {
  gsap.to(elem, {
    scrollTrigger: {
      scrub: scrub,
    },
    ...transform,
  })
}

export { parallaxDown }
