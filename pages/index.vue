<template>
  <div class="container">
    <TypeWriter :my-text="'whoami'" @finishedAnimation="consoleLog" />
    <div class="hero-description" :class="{ hide: !show }">
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
export default {
  data() {
    return {
      show: false,
    }
  },
  methods: {
    consoleLog() {
      // eslint-disable-next-line no-console
      this.show = true
    },
  },
}
</script>

<style lang="scss">
.hide {
  display: none !important;
}
.container {
  @apply w-full;
}
.hero-title {
  @apply w-full flex;
  font-family: 'Monaco', Consolas, 'Lucida Console', monospace;
  font-size: 4.5em;

  &:before {
    color: #6ba6e656;
    content: '>\a0';
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
.text-lb {
  color: #6ba6e6;
}
.hero-description {
  @apply flex w-full text-left;
  font-family: 'Monaco', Open Sans, Segoe UI, sans-serif;
  font-weight: 200;
  font-size: 1.3em;
  line-height: 40px;
  -webkit-animation-duration: 1s;
  -webkit-animation-fill-mode: backwards;
  -webkit-animation-name: fadeInDown;
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

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translateY(0);
  }
  100% {
    opacity: 1;
    -webkit-transform: translateY(0);
  }
}
</style>
