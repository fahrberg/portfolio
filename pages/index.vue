<script></script>
<template>
  <div class="container w-full p-6 lg:p-0">
    <transition appear name="text-fade">
      <div v-if="finishedAnimation" class="content">
        <div class="home-whoami w-full text-left">
          Hello!<br />I'm
          <span class="text-lb"
            ><p>
              <a href="https://www.linkedin.com/in/fredrik-åhrberg"
                >Fredrik Åhrberg</a
              >
            </p></span
          >
          a Freelance Web Developer based in
          <span class="text-lb">Stockholm, Sweden</span><br />
          My main focus has always been development towards the web, and I have
          experience in the following

          <span
            class="text-gr"
            :class="{ active: activeSkill === 'language' }"
            @mouseenter="changeColors(greenColors, 'language')"
            @mouseleave="hoverLeave"
            @click="setActiveSkill(greenColors, 'language')"
            ><p>languages</p></span
          >/<span
            class="text-red"
            :class="{ active: activeSkill === 'framework' }"
            @mouseenter="changeColors(redColors, 'framework')"
            @mouseleave="hoverLeave"
            @click="setActiveSkill(redColors, 'framework')"
            ><p>frameworks</p></span
          >/<span
            class="text-or"
            @mouseenter="changeColors(orangeColors, 'tool')"
            @mouseleave="hoverLeave"
            @click="setActiveSkill(orangeColors, 'tool')"
            ><p>tools</p>
          </span>
          <transition-group v-if="hoverSkills" tag="p" name="list" class="list">
            <span
              v-for="(item, i) in array"
              :key="'item' + i"
              class="list-complete-item"
              :class="item.css"
              :style="{ '--i': i }"
            >
              <p>{{ item.name }}</p>
            </span>
          </transition-group>
          If you want to get in touch, dont hesitate to contact me at:
          <span class="text-lb"
            ><p>
              <a href="mailto:fredrik@ahrberg.dev">fredrik@ahrberg.dev</a>
            </p></span
          >
          <div class="flex justify-center space-x-4 my-4">
            <a href="https://github.com/fahrberg" target="_blank">
              <svg
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 47.999998 48.000002"
                style="width: 32px; height: 32px"
              >
                <path
                  id="path20"
                  class="st0"
                  d="M23.928 1.15C11 1.15.514 11.638.514 24.566c0 10.343 6.75 19.105 15.945 22.265 1.148.144 1.58-.574 1.58-1.15v-4.02c-6.465 1.436-7.902-3.16-7.902-3.16-1.005-2.73-2.586-3.45-2.586-3.45-2.154-1.435.144-1.435.144-1.435 2.298.144 3.59 2.442 3.59 2.442 2.156 3.59 5.46 2.586 6.753 2.01.142-1.58.86-2.585 1.435-3.16-5.17-.574-10.63-2.585-10.63-11.635 0-2.585.862-4.596 2.442-6.32-.287-.575-1.005-3.017.288-6.177 0 0 2.01-.574 6.464 2.442 1.866-.574 3.877-.718 5.888-.718 2.01 0 4.022.286 5.89.717 4.453-3.016 6.464-2.442 6.464-2.442 1.293 3.16.43 5.602.287 6.177a9.29 9.29 0 0 1 2.44 6.32c0 9.05-5.458 10.918-10.63 11.492.863.718 1.58 2.155 1.58 4.31v6.464c0 .574.432 1.292 1.58 1.15 9.338-3.16 15.946-11.924 15.946-22.266-.143-12.785-10.63-23.27-23.558-23.27z"
                  fill="#191717"
                ></path>
              </svg>
            </a>
            <a
              href="https://www.linkedin.com/in/fredrik-åhrberg"
              target="_blank"
            >
              <svg
                id="Layer_1"
                enable-background="new 0 0 32 32"
                height="32px"
                version="1.0"
                viewBox="0 0 32 32"
                width="32px"
                xml:space="preserve"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
              >
                <g>
                  <path
                    d="M32,30c0,1.104-0.896,2-2,2H2c-1.104,0-2-0.896-2-2V2c0-1.104,0.896-2,2-2h28c1.104,0,2,0.896,2,2V30z"
                    fill="#191717"
                  ></path>
                  <g>
                    <rect
                      fill="#FFFFFF"
                      height="14"
                      width="4"
                      x="7"
                      y="11"
                    ></rect>
                    <path
                      d="M20.499,11c-2.791,0-3.271,1.018-3.499,2v-2h-4v14h4v-8c0-1.297,0.703-2,2-2c1.266,0,2,0.688,2,2v8h4v-7    C25,14,24.479,11,20.499,11z"
                      fill="#FFFFFF"
                    ></path>
                    <circle cx="9" cy="8" fill="#FFFFFF" r="2"></circle>
                  </g>
                </g>
              </svg>
            </a>
            <a href="mailto:fredrik@ahrberg.dev">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                style="width: 32px; height: 32px"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 .02c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6.99 6.98l-6.99 5.666-6.991-5.666h13.981zm.01 10h-14v-8.505l7 5.673 7-5.672v8.504z"
                ></path>
              </svg>
            </a>
            <a href="">
              <svg
                id="Capa_1"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 512 512"
                style="
                  enable-background: new 0 0 512 512;
                  width: 32px;
                  height: 32px;
                "
                xml:space="preserve"
              >
                <g>
                  <g>
                    <polygon
                      points="333.205,34.213 330.799,0 9.545,22.591 39.863,453.709 68.863,451.669 68.863,79.817 420.93,79.817 
			420.93,478.34 456.185,482.135 502.455,52.438 		"
                    />
                  </g>
                </g>
                <g>
                  <g>
                    <path
                      d="M98.884,109.838V512H390.91V109.838H98.884z M195.09,178.286c18.508,0,33.097,6.755,42.418,18.912l-20.128,17.966
			c-5.539-7.025-12.157-11.078-20.668-11.078c-13.239,0-22.154,9.186-22.154,23.64c0,14.454,8.916,23.64,22.154,23.64
			c8.511,0,15.13-4.053,20.668-11.078l20.128,17.966c-9.321,12.157-23.911,18.912-42.418,18.912
			c-30.395,0-52.684-20.398-52.684-49.442C142.406,198.684,164.696,178.286,195.09,178.286z M342.795,448.571H146.998V418.55
			h195.797V448.571z M342.795,395.172H146.998v-30.021h195.797V395.172z M342.795,341.773H146.998v-30.021h195.797V341.773z
			 M307.756,275.009h-31.341l-39.986-94.562h34.313l22.56,55.251l23.101-55.251h31.339L307.756,275.009z"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </transition>
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
  transition: {
    name: 'home',
    mode: 'out-in',
  },
  data() {
    return {
      activeSkill: null,
      selected: null,
      hoverSkills: [],
      greenColors: [
        '#6be67ebe',
        '#6be67ef8',
        '#6be67ee8',
        '#6be67ebe',
        '#6be67ef8',
        '#6be67ebe',
        '#6be67ee8',
      ],
      redColors: [
        '#e66b6bf8',
        '#e66b6be8',
        '#e66b6bb8',
        '#e66b6bbe',
        '#e66b6be8',
        '#e66b6bf8',
        '#e66b6bbe',
      ],
      orangeColors: [
        '#e6a56be8',
        '#e6a56bb8',
        '#e6a56bf8',
        '#e6a56bbe',
        '#e6a56bf8',
        '#e6a56be8',
        '#e6a56bbe',
      ],
      skills2: [
        {
          name: 'HTML',
          skill: 'language',
          css: 'text-gr',
        },
        {
          name: 'CSS',
          skill: 'language',
          css: 'text-gr',
        },
        {
          name: 'JavaScript',
          skill: 'language',
          css: 'text-gr',
        },
        {
          name: 'PHP',
          skill: 'language',
          css: 'text-gr',
        },
        {
          name: 'Swift',
          skill: 'language',
          css: 'text-gr',
        },
        {
          name: 'SQL',
          skill: 'language',
          css: 'text-gr',
        },
        {
          name: 'GraphQL',
          skill: 'language',
          css: 'text-gr',
        },

        {
          name: 'Node.js',
          skill: 'framework',
          css: 'text-red',
        },
        {
          name: 'VueJS',
          skill: 'framework',
          css: 'text-red',
        },
        {
          name: 'Nuxt',
          skill: 'framework',
          css: 'text-red',
        },
        {
          name: 'React',
          skill: 'framework',
          css: 'text-red',
        },
        {
          name: 'Strapi',
          skill: 'framework',
          css: 'text-red',
        },
        {
          name: 'Docker',
          skill: 'tool',
          css: 'text-or',
        },
        {
          name: 'Git',
          skill: 'tool',
          css: 'text-or',
        },
        {
          name: 'Nginx',
          skill: 'tool',
          css: 'text-or',
        },
        {
          name: 'Apache',
          skill: 'tool',
          css: 'text-or',
        },
        {
          name: 'VS Code',
          skill: 'tool',
          css: 'text-or',
        },
        {
          name: 'Valet',
          skill: 'tool',
          css: 'text-or',
        },
      ],
    }
  },
  mounted() {
    this.go()
  },
  computed: {
    finishedAnimation() {
      return this.$store.state.finishedAnimation
    },
    array() {
      if (this.selected === null) return this.skills2
      return this.skills2.filter((s) => s.skill === this.selected)
    },
  },
  beforeDestroy() {
    this.setFinishedAnimation(false)
  },
  methods: {
    ...mapActions({
      updateDefaultColors: 'colors/updateDefaultColors',
      setDefaultColors: 'colors/setDefaultColors',
      setColors: 'colors/setColors',
    }),
    ...mapMutations({
      setFinishedAnimation: 'setFinishedAnimation',
    }),
    changeColors(colors, skill) {
      this.selected = skill
      console.log(skill)
      this.hoverSkills = skill
      this.setColors(colors)
    },
    hoverLeave() {
      this.activeSkill = null
      this.selected = null
      this.setDefaultColors()
    },
    setActiveSkill(colors, skill) {
      this.activeSkill = skill
      this.changeColors(colors, skill)
    },
    go() {
      this.updateDefaultColors()
    },
  },
}
</script>

<style lang="scss">
.list-complete-item {
  transition: all 1s;
  display: inline-block;
  margin-right: 10px;
}
.list-enter,
.list-leave-to {
  transition-delay: calc(0.1s * var(--i));

  opacity: 0;
  transform: translateY(30px);
}
.list-enter-active,
.list-leave-active {
  transition-delay: calc(0.1s * var(--i));

  display: none;
  position: absolute;
}

.slide-in-move {
  transition: transform 1s;
}
.text-gr {
  color: #6be67e;
}
.text-red {
  color: #e66b6b;
}
.text-or {
  color: #e6a56b;
}
.home-enter-active,
.home-leave-active {
  transition: opacity 0.5s;
}
.home-enter,
.home-leave-active {
  opacity: 0;
}
.text-fade-enter-active {
  max-height: 300px;
  overflow: hidden;
  transition-duration: 0.3s;
  transition-property: max-height;
  transition-timing-function: linear;
}
.text-fade-enter {
  max-height: 0px;
  overflow: hidden;
}

.hide {
  max-height: 0px !important;
  overflow: hidden;
}

.text-lb {
  color: #6ba6e6;
}
/* .content {
  max-height: 1000px;
  overflow: hidden;
  transition: max-height, 1.5s linear;
} */
.home-whoami {
  font-family: 'Monaco', Open Sans, Segoe UI, sans-serif;
  font-weight: 200;
  font-size: 1.3em;
  line-height: 40px;
  span {
    display: inline-block;
    position: relative;
    &:hover::before,
    &:hover::after,
    &.active::before,
    &.active::after {
      width: 100%;
    }
    &::after,
    &::before,
    .active::before,
    .active::after {
      transition: width 0.325s cubic-bezier(0.65, 0.2, 0, 1);
      transition-delay: 0s;
      content: ' ';
      position: absolute;
      height: 16px;
      width: 0;
    }
    &::after,
    .active::after {
      bottom: 0;
      right: 0;
      background-color: #3d3d3d;
      transition-delay: 0.1s;
    }
    &::before,
    .active::before {
      top: 0;
      left: 0;
      background-color: #3a3a3a;
      transition-delay: 0s;
    }
    p,
    a {
      position: relative;
      z-index: 2;
      line-height: 32px;
    }
  }
  /* animation-duration: 1s;
  animation-fill-mode: backwards;
  animation-name: fadeInDown; */
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
    transform: translateY(-100px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

.grid-wrapper {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 10px;
}
</style>
