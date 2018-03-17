import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})

export class TabsComponent {

	characters = [];

 	chosenList = 'all';

  	onChoose(side) {
  		this.chosenList = side;
	}



  	onSideAssigned(characterInfo){
	  	const position = this.characters.findIndex((character) => {
	  		return character.name === characterInfo.name;
	  	})

  		this.characters[position].side = characterInfo.side;
  	}

}
