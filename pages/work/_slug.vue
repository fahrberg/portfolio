<template>
  <work>
    <h1>{{ work.title }}</h1>
    <p>{{ work.description }}</p>
    <img :src="work.img" :alt="work.alt" />
    <nuxt-content :document="work" />
  </work>
</template>
<script>
export default {
  async asyncData({ $content, params }) {
    const work = await $content('work', params.slug).fetch()

    return { work }
  },
}
</script>
