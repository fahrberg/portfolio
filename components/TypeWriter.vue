<template>
  <div class="">
    <div ref="typedElement" class="hero-title">
      {{ typedObj }}
      <span>&nbsp;</span>
    </div>

    <slot></slot>
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
      finishedAnimation: false,
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
            // eslint-disable-next-line no-console
            console.log('finished')
            this.$emit('finishedAnimation')
            console.log('emitted')
          }
          this.typedObj = str
        }, delay + typeSpeed)
      })
    },
  },
}
</script>
