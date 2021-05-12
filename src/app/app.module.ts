import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { PersonagensModule } from './personagens/personagens.module';
import { ComicsModule } from './comics/comics.module';

import { AppComponent } from './app.component';
import { HomebarComponent } from './template/homebar/homebar.component';
import { FooterComponent } from './template/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomebarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    PersonagensModule,
    ComicsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
