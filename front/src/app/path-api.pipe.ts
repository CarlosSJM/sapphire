import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pathApi'
})
export class PathApiPipe implements PipeTransform {
  movieUrl = 'https://image.tmdb.org/t/p/w400/';
  transform(value: string): any {
    return this.movieUrl + value;
  }

}
