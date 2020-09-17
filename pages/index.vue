<template>
  <div class="container w-full">
    <TypeWriter :my-text="'whoami'" @finishedAnimation="consoleLog" />
    <div
      class="hero-description flex w-full text-left"
      :class="{ hide: !show }"
    >
      <p @click="consoleLog()">
        Hello!<br />I'm <span class="text-lb">Fredrik Åhrberg</span> a
        <span class="text-lb">Freelance Developer</span> based in
        <span class="text-lb">Stockholm, Sweden</span><br />
        My main focus has always been development towards the web, and I have
        experience in the following
        <span class="text-gr">languages</span>/frameworks/tools: HTML,
        CSS(SCSS), JavaScript, PHP, Swift, Node.js, Vue, Nuxt, React,
        WordPress(WooCommerce), Ghost, Nginx, Apache, Git.
      </p>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { mapActions } from 'vuex'

export default {
  data() {
    return {
      show: false,
    }
  },

  mounted() {
    this.go()
  },
  methods: {
    consoleLog() {
      // eslint-disable-next-line no-console
      this.show = true
    },
    ...mapActions({
      updateDefaultColors: 'colors/updateDefaultColors',
    }),
    go() {
      // eslint-disable-next-line no-console
      console.log('commit')
      this.updateDefaultColors()
    },
  },
}
</script>

<style lang="scss">
.hide {
  display: none !important;
}

.text-lb {
  color: #6ba6e6;
}
.hero-description {
  font-family: 'Monaco', Open Sans, Segoe UI, sans-serif;
  font-weight: 200;
  font-size: 1.3em;
  line-height: 40px;
  animation-duration: 1s;
  animation-fill-mode: backwards;
  animation-name: fadeInDown;
}
.container {
  margin: 0 auto;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    transform: translateY(0);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
