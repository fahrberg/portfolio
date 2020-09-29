<template>
  <div ref="typedElement" class="typewriter-title w-full text-3xl lg:text-6xl">
    {{ typedObj }}
    <span :class="{ caret: showCaret }">&nbsp;</span>
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
      showCaret: true,
    }
  },
  watch: {
    myText: {
      immediate: true,
      handler() {
        this.typeWriter(this.myText, 70, 100, 200)
      },
    },
  },
  destroyed() {
    this.typedObj.destroy()
    this.showCaret = true
  },
  methods: {
    typeWriter(text, minSpeed, maxSpeed, delay) {
      let str = ''
      let typeSpeed = 0
      const arr = [...this.myText.split('')]
      // const last = [...this.myText.split('')].pop()
      arr.forEach((c, index) => {
        typeSpeed += Math.random() * (maxSpeed - minSpeed) + minSpeed
        setTimeout(() => {
          if (arr.length - 1 !== index) {
            str += c
          } else {
            str += `${c} ↵`
            setTimeout(() => {
              this.showCaret = false
              this.finishedAnimation = true
              this.$emit('finishedAnimation')
            }, 200)
          }
          this.typedObj = str
        }, delay + typeSpeed)
      })
      // this.myText.split('').forEach((c) => {
      //   typeSpeed += Math.random() * (maxSpeed - minSpeed) + minSpeed
      //   setTimeout(() => {
      //     if (c !== last) {
      //       str += c
      //     } else {
      //       str += `${c} ↵`
      //       setTimeout(() => {
      //         this.showCaret = false
      //         this.finishedAnimation = true
      //         this.$emit('finishedAnimation')
      //       }, 200)
      //     }
      //     this.typedObj = str
      //   }, delay + typeSpeed)
      // })
    },
  },
}
</script>
<style lang="scss">
.typewriter-title {
  font-family: 'Monaco', Consolas, 'Lucida Console', monospace;
  &:before {
    color: #6ba6e656;
    content: '>';
    animation: 1s appear;
    transition: ease 0.5s;
  }

  span.caret {
    background-color: transparent;
    animation: caret 1s steps(1) infinite;
  }

  @keyframes caret {
    50% {
      background-color: rgba(110, 238, 232, 0.65);
    }
  }
}
</style>
