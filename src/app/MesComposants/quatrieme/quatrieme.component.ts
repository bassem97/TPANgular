import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quatrieme',
  template: `
    <h2>
      quatrieme composant
    </h2>
  `,
  styles: ['h2 {color:green}']
})
export class QuatriemeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
