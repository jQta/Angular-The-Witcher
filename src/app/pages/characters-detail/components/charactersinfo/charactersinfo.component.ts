import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CharactersService } from 'src/app/shared/characters.service';

@Component({
  selector: 'app-charactersinfo',
  templateUrl: './charactersinfo.component.html',
  styleUrls: ['./charactersinfo.component.scss']
})
export class CharactersinfoComponent implements OnInit {
  @Input() characterInfo: any;

  constructor(private route: ActivatedRoute, private router: Router, public charactersService: CharactersService) { }

  ngOnInit(): void {

  }

  onDelete(characterID: any): void {
    if (window.confirm("¿Estás seguro de que quieres eliminar este personaje?")) {
      confirm("Personaje eliminado.")
      this.charactersService.deleteCharacter(characterID).subscribe(() => { this.router.navigate(['/characters']) });
    }
  }

  onUpdate(item: any) {
    this.charactersService.updateCharacter(item);
  }

}
