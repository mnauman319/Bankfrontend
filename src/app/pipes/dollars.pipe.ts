import { stringify } from '@angular/compiler/src/util';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Dollars'
})
export class DollarsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let tempNum:string[] =stringify(value).split('');
    let idx = 0;
    for(let i =tempNum.length-1; i>0; i--){
      idx++;
      if(idx == 3){
        tempNum[i] = ',' + tempNum[i];
        idx =0;
      }
    }
    tempNum[0] = '$' + tempNum[0];
    
    return tempNum.join('');
  }

}
