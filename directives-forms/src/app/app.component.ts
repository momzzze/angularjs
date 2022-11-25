import { Component, Inject } from '@angular/core';
import { MyValueInjectionToken } from 'providers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directives-forms';
  myIfValue = true;
  constructor(@Inject(MyValueInjectionToken) myValue: string) {
    console.log(myValue);

  }
}
