<template>
  <nav id="headerLinks" class="my-auto">
    <nuxt-link :class="{ active: $route.path == '/work' }" to="/work">
      Work</nuxt-link
    >
    <nuxt-link :class="{ active: $route.path == '/' }" to="/"> About</nuxt-link>
  </nav>
</template>

<style lang="scss">
#headerLinks {
  font-family: Ubuntu;
  font-weight: bold;
  font-size: 20px;
}
</style>
