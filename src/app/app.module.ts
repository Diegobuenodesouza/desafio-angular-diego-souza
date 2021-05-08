import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { PersonagensModule } from './personagens/personagens.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HomebarComponent } from './template/homebar/homebar.component';
import { FooterComponent } from './template/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomebarComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PersonagensModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
