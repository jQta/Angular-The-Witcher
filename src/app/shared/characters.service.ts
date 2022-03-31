import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  defaultCharacter: any = {
    name: "",
    image: "",
    alias: "",
    race: "",
    gender: "",
    status: "",
    birth: "",
    nationality: "",
    titles: "",
    proffesion: "",
    affiliations: "",
    abilities: ""
  }

  getCharacters() {
    return this.http.get('https://the-witcher-api.vercel.app/characters');
  }

  getCharacter = (characterID: any) => {
    return this.http.get('https://the-witcher-api.vercel.app/characters/' + characterID);
  }

  deleteCharacter = (characterID: any) => {
    return this.http.delete("https://the-witcher-api.vercel.app/characters/" + characterID);
  }

  postCharacter = (newCharacter: any) => {
    return this.http.post("https://the-witcher-api.vercel.app/characters", newCharacter);
  }

  getFilteredName = (filter: any) => {
    return this.http.get('https://the-witcher-api.vercel.app/characters/name/' + filter);
  }

  updateCharacter(item: any) {
    this.defaultCharacter = item;
    console.log("soy el personaje seleccionado", this.defaultCharacter);
  }

  putCharacter = (updatedCharacter: any, characterId: any) => {
    return this.http.put("https://the-witcher-api.vercel.app/characters/" + characterId, updatedCharacter)
  }

}
