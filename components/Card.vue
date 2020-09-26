<template>
  <div
    ref="card"
    class="card-wrapper"
    :style="{ ...gridIndex }"
    @mousemove="hoverMove"
    @mouseenter="hoverEnter"
    @mouseleave="hoverLeave"
  >
    <div
      class="card"
      :style="{
        ...gridStyle,
      }"
    >
      <div
        class="card-bg"
        :style="{
          ...cardBgTransform,
          backgroundImage: 'url(' + require('@/assets/' + item.img + '') + ')',
        }"
      ></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['item', 'index'],
  data: () => ({
    w: 0,
    h: 0,
    mX: 0,
    mY: 0,
    hoverLeaveDelay: null,
  }),
  computed: {
    mousePX() {
      return this.mX / this.w
    },
    mousePY() {
      return this.mY / this.h
    },
    gridIndex() {
      return {
        '--i': this.index,
      }
    },
    gridStyle() {
      const rX = this.mousePX * 30
      const rY = this.mousePY * -30
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      }
    },
    cardBgTransform() {
      const tX = this.mousePX * -40
      const tY = this.mousePY * -40
      return {
        transform: `translateX(${tX}px) translateY(${tY}px)`,
      }
    },
  },
  mounted() {
    this.w = this.$refs.card.offsetWidth
    this.h = this.$refs.card.offsetHeight
  },
  methods: {
    hoverMove(e) {
      this.mX = e.pageX - this.$refs.card.offsetLeft - this.w / 2
      this.mY = e.pageY - this.$refs.card.offsetTop - this.h / 2
    },
    hoverEnter() {
      clearTimeout(this.hoverLeaveDelay)
    },
    hoverLeave() {
      this.hoverLeaveDelay = setTimeout(() => {
        this.mX = 0
        this.mY = 0
      }, 100)
    },
  },
}
</script>
<style lang="scss">
$hoverDefault: cubic-bezier(0.23, 1, 0.32, 1);
$default: cubic-bezier(0.445, 0.05, 0.55, 0.95);
.works {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.card-wrapper {
  transform-style: preserve-3d;
  transform: perspective(800px);
  margin: 10px;

  &:hover {
    .card-bg {
      transition: 0.6s $hoverDefault, opacity 5s $hoverDefault;
      opacity: 0.8;
    }
    .card {
      transition: 0.6s $hoverDefault, box-shadow 2s $hoverDefault;
    }
  }
}
.card {
  position: relative;
  flex: 0 0 240px;
  width: 320px;
  height: 240px;
  background-color: #333;
  overflow: hidden;

  transition: 1s $default;
}
.card-bg {
  opacity: 0.5;
  position: absolute;
  top: -20px;
  left: -20px;
  width: 100%;
  height: 100%;
  padding: 20px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  transition: 1s $default, opacity 5s 1s $default;
  pointer-events: none;
  box-sizing: unset;
}
</style>
