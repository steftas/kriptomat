import Vue from 'vue';

export const loadData = ({commit}) => {    
    Vue.http.get('https://coinlib.io/api/v1/coinlist?key=ae3b54509aa7901b&pref=USD&page=1&order=rank_asc').then(response => {
        if (response.data) {
            const coins = response.data;

            commit('LOAD_COINS', coins);
        }
    }, error => {
        commit('ERROR_LOAD_COINS', error);

        setTimeout(() => {
            commit('ERROR_LOAD_COINS', null);
        }, 3000)
    });
};
