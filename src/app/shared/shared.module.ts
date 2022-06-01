import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './components/alert/alert.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './theme/footer/footer.component';



@NgModule({
  declarations: [
    AlertComponent,
    AlertComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports:[
    AlertComponent,
    AlertComponent,
    HeaderComponent,
    FooterComponent
  ]
})
export class SharedModule { }
