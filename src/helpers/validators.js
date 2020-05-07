import Vue from 'vue'
import { ValidationProvider, ValidationObserver, extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

export const applyValidators = function () {

    Vue.component('ValidationProvider', ValidationProvider);
    Vue.component('ValidationObserver', ValidationObserver);

    extend('required', {
        ...required,
        message: 'This field is required'
    });
    extend('email', {
        ...email,
        message: 'This field must be a valid email'
    });
    extend('digit', {
        ...email,
        message: 'This field must be a valid digit'
    });

    extend('phone', (value) => {
        if (value.length !== 10) return "Phone number must have 10 digits.";
        if (value[0] !== "0") return "Phone number must start with 0.";
        return true;
    });
}
