<template>
  <header class="portfolio-header max-w-screen-xl mx-auto top-0">
    <div class="header-top lg:static mx-auto flex justify-between top-0">
      <HeaderIcon />
      <Navigation />
    </div>
    <TypeWriter
      class="container"
      :my-text="head.title"
      @finishedAnimation="showw"
    />
  </header>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { mapMutations } from 'vuex'

export default {
  computed: {
    head() {
      return { title: this.$route.name }
    },
  },
  methods: {
    showw() {
      this.finishedAnimation(true)
    },
    ...mapMutations({
      finishedAnimation: 'setFinishedAnimation',
    }),
  },
}
</script>

<style lang="scss"></style>
