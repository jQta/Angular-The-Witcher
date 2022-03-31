import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersDetailRoutingModule } from './characters-detail-routing.module';
import { CharactersDetailComponent } from './characters-detail.component';
import { CharactersinfoComponent } from './components/charactersinfo/charactersinfo.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    CharactersDetailComponent,
    CharactersinfoComponent
  ],
  imports: [
    CommonModule,
    CharactersDetailRoutingModule,
    SharedModule
  ]
})
export class CharactersDetailModule { }
