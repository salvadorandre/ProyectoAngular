import { Component, Input } from '@angular/core';
import { TitleComponent } from '../title/title.component';

@Component({
  selector: 'heavy-slow',
  standalone: true,
  imports: [TitleComponent],
  template: `
    <section [className]="['w-full h-[600px]', cssClass]">
      Heavy Loader Slow
    </section>
  `,
})

export class HeavyLoadersSlowComponent {
  

  @Input( {required: true}) cssClass!:string;
  constructor() {

    const start = Date.now()

    while(Date.now() - start < 3000) {

    }
  }
}
