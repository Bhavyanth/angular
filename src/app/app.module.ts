import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { PersonComponent } from './person/person.component';
import { InputmenuComponent } from './inputmenu/inputmenu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PersonComponent,
    InputmenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
