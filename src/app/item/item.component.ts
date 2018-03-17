import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
	@Input() character;
	@Output() sideAssigned = new EventEmitter<{name: string, side: string}>();

	onAssign(side){
		// this.character.side = side;
		this.sideAssigned.emit({name: this.character.name, side: side})
	}
}
