import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  @Input() characters;
  @Output() sideAssigned = new EventEmitter<{name: string, side: string}>();
  onSideAssigned(characterInfo) {
  	this.sideAssigned.emit(characterInfo);
  }
}
