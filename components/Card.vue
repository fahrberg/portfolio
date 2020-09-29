<template>
  <nuxt-link :to="'/work/' + item.slug" :style="{ ...gridIndex }" class="card2">
    <div
      ref="card"
      class="card-wrapper"
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
        <div class="dashed"></div>
        <div
          class="card-bg"
          :style="{
            ...cardBgTransform,
            backgroundImage:
              'url(' + require('@/assets/' + item.img + '') + ')',
          }"
        ></div>
      </div>
    </div>
  </nuxt-link>
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
      const rX = this.mousePX * 10
      const rY = this.mousePY * -10
      return {
        transform: `rotateY(${rX}deg) rotateX(${rY}deg)`,
      }
    },
    cardBgTransform() {
      const tX = this.mousePX * -20
      const tY = this.mousePY * -20
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
      }, 10)
    },
  },
}
</script>
<style lang="scss">
$hoverDefault: cubic-bezier(0.23, 1, 0.32, 1);
$default: cubic-bezier(0.445, 0.05, 0.55, 0.95);
.dashed {
  border-color: rgba(0, 0, 0, 0.9);
  margin: 10px;
  border-width: 1px 1px 1px 1px;
  border-style: dashed;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
/* .works {
  padding: 40px 80px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
} */
.card-wrapper {
  transform-style: preserve-3d;
  transform: perspective(400px);

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
.card2 {
  display: flex;
  flex-direction: column;
  text-decoration: none;
  width: 100%;
  transition: all 0.4s ease;
}
.card {
  position: relative;
  width: 100%;
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

.card-description {
  opacity: 0;
  padding: 20px;
  width: 100%;
  height: 100%;
  position: absolute;
  color: #fff;
  transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  display: flex;
  justify-content: center;
  flex-direction: column;

  p {
    opacity: 0;
    text-shadow: rgba(black, 1) 0 2px 3px;
    transition: 0.6s 1.6s cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  * {
    position: relative;
    z-index: 1;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to bottom,
      transparent 0%,
      rgba(#000, 0.6) 100%
    );
    background-blend-mode: overlay;
    opacity: 0;
    transform: translateY(100%);
    transition: 5s 1s $default;
  }
  &:hover {
    opacity: 1;
  }
}
.card-wrapper:hover .card .card-description {
  opacity: 1;
}

.card-description h1 {
  color: black;
  font-size: 16px;
  text-transform: uppercase;
  text-shadow: rgba(black, 0.5) 0 5px 10px;
}
.card-desc-title {
  text-align: center;
  font-family: Ubuntu;
}

.works {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(412px, 1fr));
  grid-column-gap: 1.66%;
  grid-row-gap: 50px;
  @media (--medium) {
    grid-template-columns: repeat(2, 6fr);
    grid-column-gap: 2.63%;
  }
  @media (--narrow) {
    grid-template-columns: repeat(1, 12fr);
    grid-column-gap: 0;
    grid-row-gap: 40px;
  }
  align-content: center;
}
.works {
  margin-bottom: 120px;
  @media (--narrow) {
    margin-bottom: 70px;
  }
}
</style>
