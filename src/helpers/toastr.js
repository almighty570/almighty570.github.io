import Vue from 'vue'
import Toasted from 'vue-toasted';

export const initToastr = function () {
    Vue.use(Toasted, {
        theme: "toasted-primary",
        position: "bottom-right",
        duration: 2000,
        iconPack: 'custom-class'
    });
}

export const Toast = function (message, type) {

    const config = {
        'success': 'fal fa-check-circle',
        'danger': 'fal fa-skull',
        'info': 'fal fa-info-circle',
        'warning': 'fal fa-exclamation-triangle'
    }

    Vue.toasted.show(message, { icon: config[type] + ' mr-2' });
}
