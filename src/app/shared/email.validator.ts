import { FormControl } from '@angular/forms';

export function ValidateEmail(control: FormControl) {
let EMAIL_REGEXP = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*/;

return EMAIL_REGEXP.test(control.value) ? null : {
    validateEmail: {
        valid: false,
    }
    };
}