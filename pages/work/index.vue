<template>
  <div>
    <div class="container w-full mx-auto">
      <h1>Blog Posts</h1>
      <ul>
        <li v-for="project of work" :key="project.slug">
          <NuxtLink :to="{ name: 'work-slug', params: { slug: project.slug } }">
            <img :src="project.img" />
            <div>
              <h2>{{ project.title }}</h2>
              <p>{{ project.description }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// eslint-disable-next-line import/no-extraneous-dependencies
import { mapMutations } from 'vuex'

export default {
  async asyncData({ $content, params }) {
    const work = await $content('work', params.slug)
      .only(['title', 'description', 'img', 'slug', 'author'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      work,
    }
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
