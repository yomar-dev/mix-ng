import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
      <app-ng-style></app-ng-style>
      <hr> <br><br>


      <app-css></app-css>

      <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </p>
      <hr> <br><br>

      <app-ng-class></app-ng-class>
      <hr> <br><br>

      <app-ng-switch></app-ng-switch>
      <hr> <br><br>
  `,
  styles: []
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
