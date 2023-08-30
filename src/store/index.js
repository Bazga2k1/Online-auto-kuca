import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    autoIme: null,
    autoCijena: null,
    rimIme: null,
    rimCijena: null,
    engineIme: null,
    engineCijena: null,
    interiorIme: null,
    interiorCijena: null,
    colorIme: null,
    colorCijena: null,
    totalCijena: 0
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
    },

    setAutoIme(state, payload){
      state.autoIme = payload;
    },

    setAutoCijena(state, payload){
      state.autoCijena = payload;
    },

    setRimIme(state, payload){
      state.rimIme = payload;
    },

    setRimCijena(state, payload){
      state.rimCijena = payload;
    },

    setEngineIme(state, payload){
      state.engineIme = payload;
    },

    setEngineCijena(state, payload){
      state.engineCijena = payload;
    },

    setInteriorIme(state, payload){
      state.interiorIme = payload;
    },

    setInteriorCijena(state, payload){
      state.interiorCijena = payload;
    },

    setColorIme(state, payload){
      state.colorIme = payload;
    },

    setColorCijena(state, payload){
      state.colorCijena = payload;
    }
  },

  actions: {
  },

  modules: {
  }

})
