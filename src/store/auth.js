import axios from 'axios';

export default {
  namespaced: true,

  state: {
    token: localStorage.getItem('token') || null,
    userExists: false,
  },

  mutations: {
    setToken(state, token) {
      state.token = token;
    },

    setUserExists(state, status) {
      state.userExists = status;
    },

    clearAuth(state) {
      state.token = null;
      state.userExists = false;
    },
  },

  actions: {
    async login({ commit }, userData) {
      try {
        const response = await axios.post('http://localhost:3000/login', userData);
        
        const token = response.data.token;
        localStorage.setItem('token', token);

        commit('setToken', token);
        commit('setUserExists', true);

        return response;
      } catch (error) {
        console.error('Login error:', error);
        throw error;
      }
    },

    async checkAuthStatus({ commit, state }) {
      if (!state.token) {
        commit('setUserExists', false);
        return;
      }

      try {
        const response = await axios.get('http://localhost:3000/login/auth-status', {
          headers: {
            'Authorization': `Bearer ${state.token}`,
          },
        });

        if (response.status === 200) {
          commit('setUserExists', true);
        } else {
          commit('setUserExists', false);
        }
      } catch (error) {
        console.error('Auth status check error:', error);
        commit('setUserExists', false);
      }
    },

    async logout({ commit }) {
      try {
        await axios.post('http://localhost:3000/logout');
        localStorage.removeItem('token');

        commit('clearAuth');
      } catch (error) {
        console.error('Logout error:', error);
      }
    },
  },

  getters: {
    isAuthenticated: (state) => !!state.userExists,
    getToken: (state) => state.token,
  },
};
