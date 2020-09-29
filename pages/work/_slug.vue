<template>
  <div v-if="finishedAnimation" class="container w-full p-6 lg:p-0">
    <h1>{{ work.title }}</h1>
    <p>{{ work.description }}</p>

    <img :src="work.img" :alt="work.alt" />
    <transition appear name="text-fade">
      <nuxt-content v-if="finishedAnimation" :document="work" />
    </transition>
  </div>
</template>

<script>
export default {
  transition: {
    name: 'home',
    mode: 'out-in',
  },
  async asyncData({ $content, params }) {
    const work = await $content('work', params.slug).fetch()

    return { work }
  },
  computed: {
    finishedAnimation() {
      return this.$store.state.finishedAnimation
    },
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
