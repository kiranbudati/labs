"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_service_1 = require("./app.service");
describe('AppService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [app_service_1.AppService]
        });
    });
    it('should be created', testing_1.inject([app_service_1.AppService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=app.service.spec.js.map