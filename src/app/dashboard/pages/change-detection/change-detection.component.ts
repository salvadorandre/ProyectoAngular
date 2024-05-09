import { ChangeDetectionStrategy, Component, computed, signal } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';

@Component({
  selector: 'change-detection',
  standalone: true,
  imports: [TitleComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './change-detection.component.html',
  styles: ``
})
export default class ChangeDetectionComponent {

  public currentFramework = computed(
    () => `Change Detection - ${this.frameworkAsSingal().name}`
  );
  public frameworkAsSingal = signal(
    {
      name: 'Angular',
      releaseDate: 2016
    }
  );

  public frameworkAsPropety = {
    name: 'Angular',
    releaseDate: 2016
  }

  constructor() {

    setTimeout(() => {
      this.frameworkAsSingal.update(value =>  ({
        ...value,

        name: 'React',
      }))
    }, 3000)
  }
}
