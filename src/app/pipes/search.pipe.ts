import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  domains: any = [];
  transform(value: any, args?: any): any {
    if (value) {
      return value.filter((item) => {
        if (item.domain) {
          if (item.domain.toLowerCase().indexOf(args.toLowerCase()) !== -1) {
            return item;
          } else if (item.questionTitle.toLowerCase().indexOf(args.toLowerCase()) !== -1) {
            return item;
          } else if (item.questionDescription.toLowerCase().indexOf(args.toLowerCase()) !== -1) {
            return item;
          } else if (item.subDomain.indexOf(args) !== -1) {
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
  }

}
