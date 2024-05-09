import { Component } from '@angular/core';
import { TitleComponent } from '../../../shared/title/title.component';
import { HeavyLoadersFastComponent } from '../../../shared/heavy-loaders/heavy-loaders-fast.component';

@Component({
  selector: 'options-defer',
  standalone: true,
  imports: [TitleComponent, HeavyLoadersFastComponent],
  templateUrl: "./options-defer.component.html",
  styles: ``
})
export default class OptionsDeferComponent {
    title = "Hola Mundo"
}
