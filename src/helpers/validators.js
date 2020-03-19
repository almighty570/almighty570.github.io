import { extend } from 'vee-validate';
import { required, email } from 'vee-validate/dist/rules';

export const applyValidators = function () {
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
}
