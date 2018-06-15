import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-mysharedlib',
  template: `
    <p>
      mysharedlib works!
    </p>
  `,
  styles: []
})
export class MysharedlibComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
