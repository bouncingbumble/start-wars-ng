import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.css']
})
export class TabsComponent {
  characters = [
    { 
    	name: 'Luke Skywalker', 
    	side: 'light' 
    },    
    { 	name: 'Darth Vader',
     	side: 'dark'
    }
  ]

  chosenList = 'all';

  onChoose(side) {
  	this.chosenList = side;
  }

  getCharacters(){
  	if(this.chosenList === 'all'){
  		return this.characters;
  	}
    return this.characters.filter((character) => {
    	return character.side === this.chosenList;
    })
  }

}
