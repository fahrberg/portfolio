<template>
  <svg
    :width="totalWidth"
    :height="totalHeight"
    :viewBox="viewBox"
    class="HeaderIcon"
    @mouseenter="hoverEnter"
    @mouseleave="hoverLeave"
    @click="$emit('click')"
  >
    <rect
      v-for="rect in rectangles"
      :id="rect.id"
      :key="rect.id"
      :data-id="rect.id"
      :x="rect.x"
      :y="rect.y"
      :width="rect.width"
      :height="rect.height"
      :fill="rect.color"
      :filter="rect.filter"
      @mouseenter="hoverEnter"
      @mouseleave="hoverLeave"
    />
  </svg>
</template>

<script>
export default {
  size: Number,
  width: Number,
  height: Number,
  id: String,
  x: String,
  y: String,
  props: {
    size: {
      type: Number,
      default: 30,
    },
  },
  data() {
    return {
      originalColor: 'null',
    }
  },
  computed: {
    viewBox() {
      return `0 0 ${this.totalWidth} ${this.totalHeight}`
    },
    totalWidth() {
      return this.size * 4 + this.size / 10
    },
    totalHeight() {
      return this.size * 4
    },
    rectangles() {
      const base = { width: this.size, height: this.size }
      //   const rightColX = this.size * 3
      const bottomRowY = this.size * 3
      return [
        { ...base, id: 'h-0-0', x: '0', y: '0', color: '#6ba6e6be' },
        {
          ...base,
          id: 'h-0-1',
          x: '0',
          y: this.size,
          color: '#6ba6e6e8',
        },
        {
          ...base,
          id: 'h-0-2',
          x: '0',
          y: this.size * 2,
          color: '#6ba6e6f8',
        },
        {
          ...base,
          id: 'h-0-3',
          x: '0',
          y: bottomRowY,
          color: '#6ba6e6be',
        },
        {
          ...base,
          id: 'h-1-0',
          x: this.size,
          y: 0,
          color: '#6ba6e6',
        },
        {
          ...base,
          id: 'h-1-0-test',
          x: this.size,
          y: this.size * 1,
          color: '#6ba6e656',
        },
        {
          ...base,
          id: 'h-2-0',
          x: this.size * 2,
          y: 0,
          color: '#6ba6e6',
        },
        {
          ...base,
          id: 'h-2-1',
          x: this.size,
          y: this.size * 1.7,
          color: '#6ba6e6',
        },
        // {
        //   ...base,
        //   id: 'h-3-0',
        //   x: rightColX,
        //   y: '0',
        //   color: 'black',
        // },
        // {
        //   ...base,
        //   id: 'h-3-1',
        //   x: rightColX,
        //   y: this.size,
        //   color: 'black',
        // },
        // {
        //   ...base,
        //   id: 'h-3-2',
        //   x: rightColX,
        //   y: bottomRowY,
        //   color: 'black',
        // },
      ]
    },
  },
  methods: {
    hoverEnter(e) {
      if (e.target.className.baseVal === 'HeaderIcon') {
        // eslint-disable-next-line no-console
        console.log('EEE')
      } else {
        this.originalColor = e.target.style.fill
        // eslint-disable-next-line no-console
        console.log(e)
        e.target.parentNode.appendChild(e.target)
        e.target.style.filter = 'drop-shadow(2px 2px 2px rgba(0,0,0,0.5))'
        e.target.style.fill = '#6ba6e6'
      }
    },
    hoverLeave(e) {
      if (e.target.className.baseVal === 'HeaderIcon') {
        // eslint-disable-next-line no-console
        console.log(e.target)
        e.target.style.filter = 'none'
      } else {
        // eslint-disable-next-line no-console

        e.target.style.filter = 'none'
        e.target.style.fill = this.originalColor
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.HeaderIcon {
  margin: 40px 0 40px 0;
  @apply inline-block;
}
svg.haiiroIcon {
  display: inline-block;
  transition: ease 0.5s;
}
rect {
  transition: fill 0.75s ease;
}
</style>
