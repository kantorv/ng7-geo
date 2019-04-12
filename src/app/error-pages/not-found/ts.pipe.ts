import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ts' })
export class TimeStampPipe implements PipeTransform {
  transform(value: any) {
    return new Date(value).getTime()
  }
}
