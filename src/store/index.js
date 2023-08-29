import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {/*
    autoIme: this.carName,
    autoCijena: this.cijena,
    rimIme: this.rimName,
    rimCijena: this.cijenaR,
    engineIme: this.engineIme,
    engineCijena: this.cijenaE,
    interiorIme: this.intName,
    interiorCijena: this.cijenaI,
    colorIme: this.colorName,
    colorCijena: this.cijenaC,
    totalCijena: 0 */
  },

  getters: {
    AutoIme(state){
      return state.autoIme;
    },

    AutocCjena(state){
      return state.autoCijena;
    },

    RimName(state){
      return state.rimIme;
    },

    RimCijena(state){
      return state.rimCijena;
    },

    EngineName(state){
      return state.engineIme;
    },

    EngineCijena(state){
      return state.engineCijena;
    },

    InteriorName(state){
      return state.interiorIme;
    },

    InteriorCijena(state){
      return state.interiorCijena;
    },

    ColorName(state){
      return state.colorIme;
    },

    ColorCijena(state){
      return state.colorCijena;
    },

    TotalCijena(state){
      return state.totalCijena;
    }
  },

  mutations: {
    addPrice(state){
      state.totalCijena += state.colorCijena + state.interiorCijena + state.engineCijena + state.rimCijena + state.autoCijena;
    }
  },

  actions: {
  },

  modules: {
  }

})
