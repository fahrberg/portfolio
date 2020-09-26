// eslint-disable-next-line import/prefer-default-export
export const state = () => ({
  finishedAnimation: false,
})

export const mutations = {
  setFinishedAnimation(state, finishedAnimatione) {
    state.finishedAnimation = finishedAnimatione
  },
}
