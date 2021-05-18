import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'extend'
})
export class PrefixPipe implements PipeTransform {
  transform(input: string, prefix: string, postfix: string): string {
    return prefix + input + postfix;
  }
}