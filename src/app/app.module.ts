import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations'; // TODO Can this be combined with previous line?
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { NoteComponent } from './note/note.component';

@NgModule({
  imports:      [ BrowserModule, NoopAnimationsModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, NoteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
