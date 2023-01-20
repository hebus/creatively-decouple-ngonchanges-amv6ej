import { Component, Input } from '@angular/core';
import { OnChange } from './onchange2.decorator';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @OnChange<string>((value, simpleChange) => {
    console.log(`title is changed to: ${value}`);
  })
  @Input()
  title;

  @OnChange<number>('coucou')
  count = 0;

  random() {
    this.title = Math.random();
  }

  coucou(value, simpleChange) {
    console.log('count', { value, simpleChange });
    this.random();
  }
}
