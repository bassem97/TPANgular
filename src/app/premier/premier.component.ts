import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premier',
  template: `
    <h2> premier compsosant</h2>
  `,
  styles: [`
    h2 {color:blue}
  `]
})
export class PremierComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
