<template>
  <div ref="typedElement" class="hero-title w-full">
    {{ typedObj }}
    <span>&nbsp;</span>
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
  watch: {
    myText: {
      immediate: true,
      handler() {
        this.typeWriter(this.myText, 50, 90, 0)
      },
    },
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
            this.finishedAnimation = true
            this.$emit('finishedAnimation')
          }
          this.typedObj = str
        }, delay + typeSpeed)
      })
    },
  },
}
</script>
<style lang="scss">
.hero-title {
  font-family: 'Monaco', Consolas, 'Lucida Console', monospace;
  font-size: 4.5em;

  &:before {
    color: #6ba6e656;
    content: '>\a0';
    animation: 1s appear;
    transition: ease 0.5s;
  }

  span {
    background-color: transparent;
    animation: caret 1s steps(1) 2;
  }

  @keyframes caret {
    50% {
      background-color: rgba(110, 238, 232, 0.65);
    }
  }
}
</style>
