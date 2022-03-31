import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/shared/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss']
})
export class CharactersComponent implements OnInit {
  characterTitle = "#CHARACTERS";
  characters: any;

  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
    this.characterService.getCharacters().subscribe((res: any) => { this.characters = res })
  }
}
