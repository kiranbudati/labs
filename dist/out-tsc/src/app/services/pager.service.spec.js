"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var pager_service_1 = require("./pager.service");
describe('PagerService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [pager_service_1.PagerService]
        });
    });
    it('should be created', testing_1.inject([pager_service_1.PagerService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=pager.service.spec.js.map