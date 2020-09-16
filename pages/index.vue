<template>
  <TypeWriter :my-text="'whoami'" />
</template>

<script>
export default {}
</script>

<style lang="scss">
.container {
  @apply w-full;
}
.hero-title {
  @apply w-full flex;
  font-family: 'Monaco', Consolas, 'Lucida Console', monospace;
  font-size: 4.5em;

  &:before {
    color: #6ba6e6;
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
  color: rgb(110, 238, 232);
}
.hero-description {
  @apply flex w-full text-left;
  font-family: 'Monaco', Open Sans, Segoe UI, sans-serif;
  font-weight: 200;
  font-size: 1.3em;
  line-height: 40px;
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
</style>
