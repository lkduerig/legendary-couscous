import {Component, HostBinding, EventEmitter, Output, ElementRef} from '@angular/core'
//declare var webkitSpeechRecognition:any;
//declare var SpeechRecognition:any;
@Component({
  selector:'app-note',
  templateUrl:'./note.component.html',
  styleUrls:['./note.component.css']
})

export class NoteComponent {
  //SpeechRecognition:any =webkitSpeechRecognition;
  
  recognition:any;

  @Output() dismiss = new EventEmitter();
  @Output() focusout = new EventEmitter();
  constructor(private el:ElementRef) {

    // TODO Commented out, only works on Chrome.
  //  const {webkitSpeechRecognition} : IWindow = <IWindow>window;
  //   this.recognition = new webkitSpeechRecognition();
  //   this.recognition.onresult = (event)=> {
  //     this.el.nativeElement.querySelector(".content").innerText += event.results[0][0].transcript
  //     console.log(event.results[0][0].transcript) 
  //     document.getElementById('toolbar').focus();
  //   };
  }
  
  onDismiss(event){
    this.dismiss.emit(event);
  }
  
  onFocusOut(event){
    this.focusout.emit(event)
  }

  record(event) {
    this.recognition.start();
  }

}

export interface IWindow extends Window {
  webkitSpeechRecognition: any;
}