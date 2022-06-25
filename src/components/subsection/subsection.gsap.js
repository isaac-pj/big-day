const scaleUp = (gsap, elem, trigger) => {
  gsap.fromTo(
    elem,
    { scale: 0, opacity: 0 },
    {
      scale: 1,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: trigger || elem,
        toggleActions: 'restart none none reverse',
      },
    },
  )
}

const slideIn = (gsap, elem, trigger, { reverse }) => {
  gsap.fromTo(
    elem,
    { translateX: reverse ? -800 : 800, opacity: 0 },
    {
      translateX: 0,
      opacity: 1,
      duration: 1.5,
      scrollTrigger: {
        trigger: trigger || elem,
        toggleActions: 'restart none none reverse',
      },
    },
  )
}

export { scaleUp, slideIn }
