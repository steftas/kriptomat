import Vue from 'vue';
import Vuex from 'vuex';

import coins from './modules/coins';

import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
    actions,
    modules: {
        coins
    }
});