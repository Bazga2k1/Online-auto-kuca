import Vue from 'vue'
import Vuex from 'vuex'
import auth from './auth'

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
    lokacija: null,
    colorIme: null,
    colorCijena: null,
    totalCijena: 0,
    user: null
  },

  getters: {
    getAutoIme(state){
      return state.autoIme;
    },

    getAutoCijena(state){
      return state.autoCijena;
    },

    getRimName(state){
      return state.rimIme;
    },

    getRimCijena(state){
      return state.rimCijena;
    },

    getEngineName(state){
      return state.engineIme;
    },

    getEngineCijena(state){
      return state.engineCijena;
    },

    getInteriorName(state){
      return state.interiorIme;
    },

    getInteriorCijena(state){
      return state.interiorCijena;
    },

    getLokacija(state){
      return state.lokacija;
    },

    getColorName(state){
      return state.colorIme;
    },

    getColorCijena(state){
      return state.colorCijena;
    },

    getTotalCijena(state){
      return state.totalCijena;
    },

    getUser(state){
      return state.user;
    },

    getUserEmail: (state) => (state.user ? state.user.email : null)

  },

  mutations: {
    addPrice(state){
      state.totalCijena += parseFloat(state.colorCijena) + parseFloat(state.interiorCijena) +
        parseFloat(state.engineCijena) + parseFloat(state.rimCijena) + parseFloat(state.autoCijena);
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

    setLokacija(state, payload){
      state.lokacija = payload;
    },

    setColorIme(state, payload){
      state.colorIme = payload;
    },

    setColorCijena(state, payload){
      state.colorCijena = payload;
    },

    setUser(state, user) {
      state.user = user;
    },

    clearUser(state) {
      state.user = null;
    }

  },

  actions: {
  },

  modules: {
    auth
  }

})
