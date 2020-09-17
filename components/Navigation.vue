<template>
  <nav id="headerLinks" class="my-auto">
    <nuxt-link :class="{ active: $route.path == '/' }" to="/"> Work</nuxt-link>
    <nuxt-link :class="{ active: $route.path == '/about' }" to="/about">
      About</nuxt-link
    >
  </nav>
</template>

<style lang="scss">
#headerLinks {
  font-family: Ubuntu;
  font-weight: bold;
  font-size: 20px;
}
</style>
