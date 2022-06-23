const parallaxDown = (gsap, elem, { scrub, start, end, transform }) => {
  gsap.to(elem, {
    scrollTrigger: {
      trigger: elem,
      scrub: scrub,
      start,
      end,
      // markers: {
      //   startColor: 'purple',
      //   endColor: 'orange',
      //   fontSize: '1rem',
      //   indent: 200,
      // },
    },
    ...transform,
  })
}

export { parallaxDown }
