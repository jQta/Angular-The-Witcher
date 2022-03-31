import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersRoutingModule } from './characters-routing.module';
import { CharactersComponent } from './characters.component';
import { ListComponent } from './components/list/list.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CharactersComponent,
    ListComponent,

  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    SharedModule,
    RouterModule,
    FormsModule
  ]
})
export class CharactersModule { }
