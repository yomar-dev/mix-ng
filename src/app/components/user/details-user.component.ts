import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details-user',
  template: `
    <p>
      details-user works!
    </p>
  `,
  styles: []
})
export class DetailsUserComponent implements OnInit {

  constructor(private router: ActivatedRoute) {
    this.router.parent.params.subscribe(params => {
      console.log('Ruta hija => ', params);
    });
  }

  ngOnInit() {
  }

}
