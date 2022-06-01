import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-base',
 // templateUrl: './home-base.component.html',
  //styleUrls: ['./home-base.component.css'],
  //template: '<router-outlet></router-outlet>'
  template: '<router-outlet></router-outlet>',
   templateUrl: './home-base.component.html'
})
export class HomeBaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
