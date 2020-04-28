import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pathApiBack'
})
export class PathApiBackPipe implements PipeTransform {
  movieUrlBack = 'https://image.tmdb.org/t/p/w1200/';
  transform(value: string): any {
    return this.movieUrlBack + value;
  }

}
