import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <router-outlet></router-outlet>  
  `,
  styles: []
})
export class AppComponent {

  constructor(@Inject('tdl') private tdl) {}
}
