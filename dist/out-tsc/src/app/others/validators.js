"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.regexValidators = {
    phone: '^[7-9][0-9]{9}$',
};
function patternValidator(regexp) {
    return function (control) {
        var value = control.value;
        if (value === '') {
            return null;
        }
        return !regexp.test(value) ? { 'patternInvalid': { regexp: regexp } } : null;
    };
}
exports.patternValidator = patternValidator;
//# sourceMappingURL=validators.js.map