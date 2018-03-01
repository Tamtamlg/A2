import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'wfmClipPipe'
})
export class ClipPipe implements PipeTransform {
    transform(value: any) {
        if (value.length > 11) {
            return value.substr(0, 5) + '...' + value.substr(value.length - 5);
        } else {
            return value;
        }
    }
}
