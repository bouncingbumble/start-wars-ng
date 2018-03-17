export class StarWarsService {

	private characters = [
	    { 
	    	name: 'Luke Skywalker', 
	    	side: 'light' 
	    },    
	    { 	name: 'Darth Vader',
	     	side: 'dark'
	    }
  	];

  	getCharacters(chosenList){
	  	if(chosenList === 'all'){
	  		return this.characters;
	  	}
	    return this.characters.filter((character) => {
	    	return character.side === chosenList;
	    })
  	}

}
