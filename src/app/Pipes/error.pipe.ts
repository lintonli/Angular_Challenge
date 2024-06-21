import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'error',
  standalone: true
})
export class ErrorPipe implements PipeTransform {

  transform(value: string, error: string, minLength: number = 0): string {
    if (!value || value.length < minLength) {
      return error;
    }
    return value;
  }
  }


