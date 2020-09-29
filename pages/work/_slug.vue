<template>
  <div v-if="finishedAnimation" class="container w-full p-6 lg:p-0">
    <transition appear name="text-fade">
      <nuxt-content v-if="finishedAnimation" :document="work" />
    </transition>
    <prev-next :prev="prev" :next="next" />
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { mapMutations } from 'vuex'

export default {
  transition: {
    name: 'home',
    mode: 'out-in',
  },
  async asyncData({ $content, params }) {
    const work = await $content('work', params.slug).fetch()

    const [prev, next] = await $content('work')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return { work, prev, next }
  },
  computed: {
    finishedAnimation() {
      return this.$store.state.finishedAnimation
    },
  },
  methods: {
    ...mapMutations({
      setFinishedAnimation: 'setFinishedAnimation',
    }),
  },

  beforeDestroy() {
    this.setFinishedAnimation(false)
  },
}
</script>
<style lang="scss">
body {
  font-family: Monaco;
}
h1,
h2,
h3,
h4 {
  font-family: Monaco;
  font-weight: bold;
}
</style>
