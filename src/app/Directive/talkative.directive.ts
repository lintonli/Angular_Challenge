import { Directive, ElementRef, HostListener } from '@angular/core';
import { MessageService } from '../Service/message.service';

@Directive({
  selector: '[appTalkative]',
  standalone: true
})
export class TalkativeDirective {

  constructor( private elementRef:ElementRef, private messageS:MessageService) { }
@HostListener ('click') onClick(){
  const message= this.messageS.getRandomMessages();
  this.elementRef.nativeElement.innerText = message;
}
}
