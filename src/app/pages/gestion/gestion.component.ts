import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CharactersService } from 'src/app/shared/characters.service';

@Component({
  selector: 'app-gestion',
  templateUrl: './gestion.component.html',
  styleUrls: ['./gestion.component.scss']
})
export class GestionComponent implements OnInit {
  characterForm: FormGroup;
  valueChanges: any;
  newCharacter: any;
  characterId = this.characterService.defaultCharacter._id;

  aboutApproved = {
    name: "About Picture",
    image: "../assets/approved.jpg"
  }
  isSubmit: boolean = false;

  constructor(private formBuilder: FormBuilder, private characterService: CharactersService) {
    this.characterForm = this.formBuilder.group({
      name: [this.characterService.defaultCharacter.name, [Validators.required, Validators.minLength(4), Validators.maxLength(50),]],
      image: [this.characterService.defaultCharacter.image],
      alias: [this.characterService.defaultCharacter.alias],
      race: [this.characterService.defaultCharacter.race, [Validators.required]],
      gender: [this.characterService.defaultCharacter.gender, [Validators.required]],
      status: [this.characterService.defaultCharacter.status],
      birth: [this.characterService.defaultCharacter.birth],
      nationality: [this.characterService.defaultCharacter.nationality],
      titles: [this.characterService.defaultCharacter.titles],
      proffesion: [this.characterService.defaultCharacter.proffesion],
      affiliations: [this.characterService.defaultCharacter.affiliations],
      abilities: [this.characterService.defaultCharacter.abilities]
    })
  }

  ngOnInit(): void {
    this.characterForm.valueChanges.subscribe((changes) => { this.newCharacter = changes })
  }

  onSubmit() {
    this.isSubmit = true;

    if (this.characterForm.valid) {
      this.newCharacter = {
        name: this.characterForm.get('name')?.value,
        image: this.characterForm.get('image')?.value,
        alias: this.characterForm.get('alias')?.value,
        race: this.characterForm.get('race')?.value,
        gender: this.characterForm.get('gender')?.value,
        status: this.characterForm.get('status')?.value,
        birth: this.characterForm.get('birth')?.value,
        nationality: this.characterForm.get('nationality')?.value,
        titles: this.characterForm.get('titles')?.value,
        proffesion: this.characterForm.get('proffesion')?.value,
        affiliations: this.characterForm.get('affiliations')?.value,
        abilities: this.characterForm.get('abilities')?.value
      }

      if (this.characterService.defaultCharacter._id === undefined) {
        this.characterService.postCharacter(this.newCharacter).subscribe();
        alert('Añadido a la database');
        this.characterForm.reset();
      } else {
        this.characterService.putCharacter(this.newCharacter, this.characterId).subscribe();
        alert('Actualizado en la database');
        window.location.reload();
      }
    }
  }
}
