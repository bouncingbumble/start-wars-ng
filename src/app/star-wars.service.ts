import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { LogService } from './log.service';
import { Http, Headers, Response, RequestOptions } from '@angular/http';

@Injectable()
export class StarWarsService {

	private characters = [];
  	private logService: LogService;
   charactersChanged = new Subject<void>();
   http: Http;

  	constructor(logService: LogService, http: Http){
  		this.logService = logService;
        this.http = http;
  	}

   fetchCharacters(){
      var headers = new Headers();
      headers.append('Content-Type', 'application/json');
      var apiUrl: string = 'https://swapi.co/api/people/';
      var options = new RequestOptions({ headers: headers});
      this.http.get(apiUrl, options)
         .map( (response: Response) => {
            const data = response.json();
            const extractedCharacters = data.results.map((character) => {
               return { name: character.name, side: '' }
            })
            return extractedCharacters;
         })
         .subscribe((data) => {
            this.characters = data;
            this.charactersChanged.next();
      });
   }

  	getCharacters(chosenList){
	  	if(chosenList === 'all'){
	  		return this.characters;
	  	}
	    return this.characters.filter((character) => {
	    	return character.side === chosenList;
	    })
  	}

  	onSideAssigned(characterInfo){
	  	const position = this.characters.findIndex((character) => {
	  		return character.name === characterInfo.name;
	  	})

  		this.characters[position].side = characterInfo.side;
      this.charactersChanged.next();
  		this.logService.writeLog('Changed side of ' + characterInfo.name + ', new side: ' + characterInfo.side)
  	}

  	addCharacter(name, side){
  		const position = this.characters.findIndex((character) => {
  			return character.name === name;
  		})
  		if(position !== -1){
  			return;
  		}
  		const newCharacter = {
  			name: name,
  			side: side
  		}
  		this.characters.push(newCharacter);
  	}

}
