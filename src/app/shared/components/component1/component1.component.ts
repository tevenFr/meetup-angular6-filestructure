import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.scss']
})
export class Component1Component implements OnInit {
  @Input() data: string[];

  @Output() selected = new EventEmitter<string>();

  constructor() {}

  ngOnInit() {}

  onClick(item: string) {
    this.selected.emit(item);
  }
}
