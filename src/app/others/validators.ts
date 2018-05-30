import { AbstractControl, ValidatorFn, FormGroup } from '@angular/forms';

export const regexValidators = {
  phone: '^[7-9][0-9]{9}$',
};

export function patternValidator(regexp: RegExp): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const value = control.value;
    if (value === '') {
      return null;
    }
    return !regexp.test(value) ? { 'patternInvalid': { regexp } } : null;
  };
}