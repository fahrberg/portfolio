<template>
  <div class="container">
    <div ref="typedElement" class="hero-title">
      {{ typedObj }}
      <span>&nbsp;</span>
    </div>
    <div class="hero-description">
      <p>
        Hello!<br />I'm <span class="text-lb">Fredrik Åhrberg</span> a
        <span class="text-lb">Freelance Developer</span> based in
        <span class="text-lb">Stockholm, Sweden</span><br />
        My main focus has always been development towards the web, and I have
        experience in the following
        <span class="text-gr">languages</span>/frameworks/tools: HTML,
        CSS(SCSS), JavaScript, PHP, Swift, Node.js, Vue, Nuxt, React,
        WordPress(WooCommerce), Ghost, Nginx, Apache, Git.
      </p>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TypeWriter',
  props: {
    myText: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      typedObj: null,
    }
  },
  mounted() {
    // eslint-disable-next-line no-console
    console.log(this.myText)
    this.typeWriter(this.myText, 50, 90, 700)
  },
  destroyed() {
    this.typedObj.destroy()
  },
  methods: {
    typeWriter(text, minSpeed, maxSpeed, delay) {
      let str = ''
      let typeSpeed = 0
      const last = [...this.myText.split('')].pop()
      this.myText.split('').forEach((c) => {
        typeSpeed += Math.random() * (maxSpeed - minSpeed) + minSpeed
        setTimeout(() => {
          if (c !== last) {
            str += c
          } else {
            str += `${c} ↵`
          }
          this.typedObj = str
        }, delay + typeSpeed)
      })
    },
  },
}
</script>
