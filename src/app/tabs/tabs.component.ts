import { Component } from '@angular/core';
import { StarWarsService } from '../star-wars.service';

@Component({
	selector: 'app-tabs',
	templateUrl: './tabs.component.html',
	styleUrls: ['./tabs.component.css']
})

export class TabsComponent {

	characters = [];
 	chosenList = 'all';
 	swService: StarWarsService;

 	constructor(swService: StarWarsService){
		this.swService = swService;
	}

  	onChoose(side) {
  		this.chosenList = side;
	}

	getCharacters(){
		return this.characters = this.swService.getCharacters(this.chosenList);
	}

}
