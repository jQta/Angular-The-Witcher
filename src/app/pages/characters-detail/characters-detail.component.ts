import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/characters.service';

@Component({
  selector: 'app-characters-detail',
  templateUrl: './characters-detail.component.html',
  styleUrls: ['./characters-detail.component.scss']
})
export class CharactersDetailComponent implements OnInit {
  dataSheet = "#FICHA PERSONAL";
  character: any;

  constructor(private route: ActivatedRoute, public charactersService: CharactersService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const characterID = params.get('characterID');

      this.charactersService.getCharacter(characterID).subscribe((characterData) => {
        this.character = characterData;
      });

    });

  }

}
