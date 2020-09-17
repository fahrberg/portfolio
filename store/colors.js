export const state = () => ({
  defaultColors: initialDefaultColors,
  currentColors: initialDefaultColors,
  inactiveColors: initialDefaultColors,
})

const initialDefaultColors = [
  '#6ba6e6',
  '#6ba6e6',
  '#6ba6e6',
  '#6ba6e6be',
  '#6ba6e6f8',
  '#6ba6e6be',
  '#6ba6e6e8',
]

const shuffle = (array) => {
  const old = [...array]
  let shuffled = []
  while (old.length) {
    shuffled = shuffled.concat(
      old.splice(Math.floor(Math.random() * old.length), 1)
    )
  }
  return shuffled
}

export const actions = {
  setDefaultColors({ commit, state }) {
    commit('UPDATE_COLORS', state.defaultColors)
  },
  updateDefaultColors({ commit, dispatch }, colors = initialDefaultColors) {
    commit('UPDATE_DEFAULT_COLORS', initialDefaultColors)
    dispatch('setDefaultColors')
    commit('BACKUP_COLORS')
  },
  setColors({ commit }, colors) {
    commit('UPDATE_COLORS', colors)
  },
  hoverEnter({ state, commit }) {
    commit('BACKUP_COLORS')
    commit('UPDATE_COLORS', shuffle(state.currentColors))
  },
  hoverLeave({ state, commit }) {
    commit('UPDATE_COLORS', state.inactiveColors)
  },
}
export const mutations = {
  UPDATE_COLORS(state, colors = []) {
    const newColors = []
    // eslint-disable-next-line no-plusplus
    for (let i = 0; i < 7; i++) {
      newColors.push(colors[i % colors.length])
    }
    state.currentColors = newColors
  },
  BACKUP_COLORS(state) {
    state.inactiveColors = state.currentColors
  },
  UPDATE_DEFAULT_COLORS(state, colors = []) {
    state.defaultColors = colors
  },
}
