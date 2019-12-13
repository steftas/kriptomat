const state = {
    coins: [],
    errorMessage: '',
    alerts: []
};

const mutations = {
    'LOAD_COINS' (state: any, coins: any) {
        state.coins = coins;
    },
    'ERROR_LOAD_COINS' (state: any, error: any) {
        state.errorMessage = error;
    },
    'LOAD_ALERTS' (state: any, alerts: any) {
        state.alerts = alerts ;
    },
    'ADD_ALERT' (state: any, alert: any) {
        const isAlreadyIn = state.alerts.filter(el => el.symbol == alert.symbol);

        if (isAlreadyIn.length > 0) {
            if (isAlreadyIn[0].symbol == alert.symbol) {
                isAlreadyIn[0].alert = alert.alert;
            }
        } else {
            state.alerts.push(alert);
        }
    },
    'REMOVE_ALERT' (state: any, index: any) {
        state.alerts.splice(index, 1);
    },
};

const actions = {
    addAlert: ({commit}, alert) => {
        commit('ADD_ALERT', alert);
    },
    removeAlert: ({commit}, index) => {
        commit('REMOVE_ALERT', index);
    },
};

const getters = {
    coins: state => {
        return state.coins;
    },
    error: state => {
        return state.errorMessage
    },
    alerts: state => {
        return state.alerts
    }
};

export default {
    state,
    mutations,
    actions,
    getters
};