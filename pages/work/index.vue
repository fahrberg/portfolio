<template>
  <div>
    <div class="container w-full mx-auto p-6 lg:p-0">
      <transition
        appear
        name="text-fade"
        @after-enter="contentAnimationFinished = !contentAnimationFinished"
      >
        <div v-if="finishedAnimation" class="content">
          <div class="home-whoami w-full text-left">
            <p>
              Here you can read about my previous and current work, including
              side-projects and work for different clients. Although my work
              over the years has not been limited to Software Engineering; this
              portfolio will only showcase work where my role has either been
              front- or backend development. The goal for the future is that
              every project will have its on 'blog' with thoughts and
              reflections that come up during development.
            </p>
          </div>
        </div>
      </transition>
      <transition-group
        v-if="contentAnimationFinished"
        class="works"
        appear
        tag="div"
        name="slide-in"
      >
        <Card
          v-for="(work, index) in projects"
          :key="'work' + index"
          :item="work"
          :index="index"
        />
      </transition-group>
    </div>
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
    const projects = await $content('work', params.slug)
      .only(['title', 'description', 'img', 'slug', 'role'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      projects,
    }
  },
  data() {
    return {
      contentAnimationFinished: false,
    }
  },
  computed: {
    finishedAnimation() {
      return this.$store.state.finishedAnimation
    },
  },

  beforeDestroy() {
    this.contentAnimationFinished = false
    this.setFinishedAnimation(false)
  },
  methods: {
    ...mapMutations({
      setFinishedAnimation: 'setFinishedAnimation',
    }),
  },
}
</script>

<style lang="scss">
.slide-in-enter,
.slide-in-leave-to {
  opacity: 0;
}
/*
    This class can be used to define the duration,
    delay and easing curve for the entering transition.
    --i is the CSS variable from the Card Component (current index)
    With this you have a staggered delay.
  */
.slide-in-enter-active,
.slide-in-leave-active {
  animation: bounce-in 0.5s;
  animation-delay: calc(0.1s * var(--i));
  /* transition: all 1.9s ease-in-out;
  transform: scale3d(2, 0.5, 1);*/
  transition-delay: calc(0.1s * var(--i));
}
@keyframes bounce-in {
  0% {
    opacity: 0;
    transform: scale(0);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
</style>
