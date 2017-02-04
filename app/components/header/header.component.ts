import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'blog-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {

    private heading : string;
    private text : string;

    constructor() {
      this.heading = 'The Bootstrap Blog';
      this.text = 'An example blog template built with Bootstrap.';
    }

}
