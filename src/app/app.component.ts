import { Component, ElementRef, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  notes = [];
  recognition:any;

  constructor(private el:ElementRef) {
    this.notes = JSON.parse(localStorage.getItem('notes')) || [{id: 0, content: ''}];
  }

  // @todo This seems useless.
  updateAllNotes() {
    let notes = document.querySelectorAll('app-note');

    notes.forEach((note, index)=> {
      this.notes[note.id].content = note.querySelector('.content').innerHTML;
    });

    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  addNote() {
    this.notes.push({id: this.notes.length + 1, content: ''});
    // Sort the array.
    this.notes = this.notes.sort((a, b)=> {
      return b.id - a.id;
    });
    localStorage.setItem('notes', JSON.stringify(this.notes));
  };

  saveNote(event) {
    const id = event.srcElement.parentElement.parentElement.getAttribute('id');
    const content = event.target.innerText;
    event.target.innerText = content;
    const json = {
      'id': id,
      'content': content
    }
    this.updateNote(json);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  updateNote(newValue) {
    this.notes.forEach((note, index)=> {
      if (note.id == newValue.id) {
        this.notes[index].content = newValue.content;
      }
    });
  }

  deleteNote(event) {
    const id = event.srcElement.parentElement.parentElement.parentElement.getAttribute('id');
    this.notes.forEach((note, index)=> {
      if (note.id == id) {
        this.notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(this.notes));
        console.log("********* deleteNote *********");
        return;
      }
    });
  }

  clearNotes() {
    // @todo This doesn't update the view properly until refresh.
    localStorage.clear();
  }
}

