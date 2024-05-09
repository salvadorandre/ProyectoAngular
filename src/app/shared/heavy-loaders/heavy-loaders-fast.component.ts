import { Component, Input } from '@angular/core';

@Component({
  selector: 'heavy-fast',
  standalone: true,
  imports: [],
  template: `
    <section [className]="['w-full', cssClass]">
      <ng-content/>
    </section>
  `,
})

export class HeavyLoadersFastComponent {
  fast = true;
  @Input({required: true}) cssClass!:string;
}

