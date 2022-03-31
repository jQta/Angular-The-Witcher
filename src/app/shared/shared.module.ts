import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayComponent } from './components/display/display.component';
import { TitleComponent } from './components/title/title.component';
import { PreviewComponent } from './components/preview/preview.component';
import { FormErrorsComponent } from './components/form-errors/form-errors.component';
import { FilterPipe } from './pipes/filter.pipe';


@NgModule({
  declarations: [
    DisplayComponent,
    TitleComponent,
    PreviewComponent,
    FormErrorsComponent,
    FilterPipe,

  ],
  imports: [
    CommonModule
  ],
  exports: [DisplayComponent, TitleComponent, PreviewComponent, FormErrorsComponent, FilterPipe]
})
export class SharedModule { }
