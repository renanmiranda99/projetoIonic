import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatarNome'
})
export class FormatarNomePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase(); 
  }
}
