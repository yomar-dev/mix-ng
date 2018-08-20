import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-ng-style',
    template: `
    <p [style.fontSize.px]="tam">
        Hola mundo!!
    </p>

    <button class="btn btn-primary" (click)="tam = tam + 2">
        <i class="fa fa-plus"></i>
    </button>
    &nbsp;
    <button class="btn btn-primary" (click)="tam = tam - 2">
        <i class="fa fa-minus"></i>
    </button>
  `,
    styles: []
})
export class NgStyleComponent implements OnInit {
    tam = 24;
    constructor() { }

    ngOnInit() {
    }

}
