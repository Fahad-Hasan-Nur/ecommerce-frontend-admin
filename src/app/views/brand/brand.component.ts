import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brand',
  template: `
                 <div class="animated fadeIn">
                   <router-outlet></router-outlet>
                 </div>
                `,
  styles: []
})
export class BrandComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }

}
