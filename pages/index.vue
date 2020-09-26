<script></script>
<template>
  <div class="container w-full">
    <!-- <TypeWriter :my-text="'whoami'" @finishedAnimation="consoleLog" /> -->
    <div class="content" :class="{ hide: !finishedAnimation }">
      <div class="home-whoami w-full text-left">
        <p>
          Hello!<br />I'm <span class="text-lb">Fredrik Åhrberg</span> a
          <span class="text-lb">Freelance Developer</span> based in
          <span class="text-lb">Stockholm, Sweden</span><br />
          My main focus has always been development towards the web, and I have
          experience in the following
          <span class="text-gr">languages</span>/frameworks/tools: HTML,
          CSS(SCSS), JavaScript, PHP, Swift, Node.js, Vue, Nuxt, React,
          WordPress(WooCommerce), Strapi, Nginx, Apache, Git, Docker.
        </p>
      </div>
    </div>
    <transition-group
      v-if="finishedAnimation"
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
</template>
<router>
{
  name: 'whoami',
}
</router>
<script>
import { mapActions, mapMutations } from 'vuex'

export default {
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
      // cards: [
      //   /*
      //     Images are in the assets folder,
      //     grid is the CSS class
      //   */
      //   { img: 'thumbnail.png', grid: 'card-2-1' },
      //   { img: 'thumbnail.png', grid: 'card-1-1' },
      //   { img: 'thumbnail.png', grid: 'card-1-1' },
      //   { img: 'thumbnail.png', grid: 'card-2-1' },
      //   { img: 'thumbnail.png', grid: 'card-1-1' },
      //   { img: 'thumbnail.png', grid: 'card-1-1' },
      // ],
    }
  },
  // created() {
  //   for (let i = 0; i < this.projects.length; i++) {
  //     setTimeout(() => {
  //       console.log('pushing: ' + this.projects[i].title)
  //       this.items.push(this.projects[i])
  //     }, 2000)
  //   }
  // },

  mounted() {
    this.go()
  },
  computed: {
    finishedAnimation() {
      return this.$store.state.finishedAnimation
    },
  },

  methods: {
    ...mapActions({
      updateDefaultColors: 'colors/updateDefaultColors',
    }),
    ...mapMutations({
      setFinishedAnimation: 'setFinishedAnimation',
    }),
    beforeDestroy() {
      this.setFinishedAnimation(false)
    },
    go() {
      this.updateDefaultColors()
    },
    beforeEnter(el) {
      el.style.opacity = 0
    },
    enter(el, done) {
      const delay = el.dataset.index * 150
      setTimeout(() => {
        Velocity(el, { translateY: '50px' })
        Velocity(
          el,
          { translateY: '0px', opacity: 1 },
          { duration: 1600 },
          {
            complete: done,
          }
        )
      }, delay)
    },
    leave(el, done) {
      const delay = el.dataset.index * 150
      setTimeout(() => {
        // Velocity(el, { opacity: 0, height: 0 }, { complete: done })
      }, delay)
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
.home-whoami {
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
/* .works,
.articleCards {
  display: grid;
  grid-template-columns: repeat(3, 4fr);
  grid-column-gap: 1.66%;
  grid-row-gap: 100px;
  @media (--medium) {
    grid-template-columns: repeat(2, 6fr);
    grid-column-gap: 2.63%;
  }
  @media (--narrow) {
    grid-template-columns: repeat(1, 12fr);
    grid-column-gap: 0;
    grid-row-gap: 40px;
  }
  align-content: center;
}
.works {
  margin-bottom: 120px;
  @media (--narrow) {
    margin-bottom: 70px;
  }
} */

.slide-in-enter {
  opacity: 0;
  transform: scale(0.5);
}
/*
    This class can be used to define the duration, 
    delay and easing curve for the entering transition.
    --i is the CSS variable from the Card Component (current index)
    With this you have a staggered delay.
  */
.slide-in-enter-active {
  transition: all 0.4s ease;
  transition-delay: calc(0.1s * var(--i));
}
.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}
</style>
