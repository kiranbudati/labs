"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var SearchPipe = /** @class */ (function () {
    function SearchPipe() {
        this.domains = [];
    }
    SearchPipe.prototype.transform = function (value, args) {
        if (value) {
            return value.filter(function (item) {
                if (item.domain) {
                    if (item.domain.toLowerCase().indexOf(args.toLowerCase()) !== -1) {
                        return item;
                    }
                    else if (item.questionTitle.toLowerCase().indexOf(args.toLowerCase()) !== -1) {
                        return item;
                    }
                    else if (item.questionDescription.toLowerCase().indexOf(args.toLowerCase()) !== -1) {
                        return item;
                    }
                    else if (item.subDomain.indexOf(args) !== -1) {
                        return item;
                        // if (item.subDomain.indexOf(args) !== -1) {
                        //   return item;
                        // }
                        // this.domains = item.subDomain.filter(x => {
                        //   return x;
                        //   // if (x.indexOf(args) !== -1) {
                        //   //   return item;
                        //   // }
                        // });
                        // console.log(this.domains);
                        // return this.domains;
                    }
                }
            });
        }
        // for (let i = 0; i < value.length; i++) {
        //   if (value[i].domain === args) {
        //     this.domains.push(value[i]);
        //   }
        //   console.log(value[i].domain);
        // }
        // console.log(this.domains);
        // const data = value.find((item) => {
        //   return item.domain === args;
        //   // item.domain.includes(args);
        // });
        // console.log(data);
        // return null;
    };
    SearchPipe = __decorate([
        core_1.Pipe({
            name: 'search'
        })
    ], SearchPipe);
    return SearchPipe;
}());
exports.SearchPipe = SearchPipe;
//# sourceMappingURL=search.pipe.js.map