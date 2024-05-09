import { TitleComponent } from './../../../shared/title/title.component';
import { Component, signal } from '@angular/core';
type Grade = 'A'|'B'|'F'

@Component({
  selector: 'control-flow',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './control-flow.component.html',
  styles: ``
})
export default class ControlFlowComponent {
  public showContent = signal(false);
  public grade = signal<Grade>('A');
  public frameworks = signal([
    {
      nameFramework: 'Angular',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
    },
    {
      nameFramework: 'VueJs',
      url: 'https://upload.wikimedia.org/wikipedia/commons/f/f1/Vue.png'
    },
    {
      nameFramework: 'Astro',
      url: 'https://cdn.worldvectorlogo.com/logos/astrojs.svg'
    },
    {
      nameFramework: 'React',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/1200px-React.svg.png'
    },
    {
      nameFramework: 'Svelte',
      url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Svelte_Logo.svg/1200px-Svelte_Logo.svg.png'
    }
  ])
  public toggleContent() {
    this.showContent.update(value => !value)

  }
}
