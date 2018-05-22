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
          if (item.domain.indexOf(args) !== -1) {
            return item;
          } else if (item.questionTitle.indexOf(args) !== -1) {
            return item;
          } else if (item.questionDescription.indexOf(args) !== -1) {
            return item;
          } else if (item.subDomain) {
            console.log(item.subDomain.filter(x => {
              if (x.indexOf(args) !== 0) {
                return item;
              }
            }));
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
