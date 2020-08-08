import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSanitizer'
})
export class DomSanitizerPipe implements PipeTransform {
  constructor(private domSanitizer: DomSanitizer) { }

  transform(img: string): unknown {
      const domImg = `background-image: url('${img}')`;

    // tslint:disable-next-line: align
    return this.domSanitizer.bypassSecurityTrustStyle( domImg );
  }

}
