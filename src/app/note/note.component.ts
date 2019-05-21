// @todo Clean out unneeded imports.
import {Component, OnInit, AfterViewInit, HostBinding, EventEmitter, ViewChild, Output, ElementRef, ChangeDetectorRef} from '@angular/core';

@Component({
  selector:'app-note',
  templateUrl:'./note.component.html',
  styleUrls:['./note.component.scss']
})

export class NoteComponent implements OnInit {
  @Output() dismiss = new EventEmitter();
  @Output() focusout = new EventEmitter();
  noteLength;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {}

  onDismiss(event){
    this.dismiss.emit(event);
  }

  onFocusOut(event){
    // @todo Changes not saved if refreshing without changing focus.
    this.focusout.emit(event);
  }

  charCount(event) {
    // @todo Consider implementing this as a warning popup in onBlur event.
    // @todo This line truncates but also moves cursor to beginning of the field. Not UX friendly.
    //event.target.innerText = event.target.innerText.substring(0, 200);
    this.noteLength = event.target.innerText.length;
  }

}
