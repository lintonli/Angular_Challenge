import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MessageService } from './Service/message.service';
import { CommonModule } from '@angular/common';
import { TalkativeDirective } from './Directive/talkative.directive';
import { FormsModule } from '@angular/forms';
import { ErrorPipe } from './Pipes/error.pipe';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule,TalkativeDirective,FormsModule,ErrorPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Spin the Wheel';
  wheelResult:string=''
  extraSpin:boolean=false
  inputValue:string =''
  randomMessage:string=''

  constructor (private messageS:MessageService){}
  spinWheel(){
    this.wheelResult = this.messageS.spinningWheel();
    this.extraSpin = this.wheelResult ==="Try Again"
  }
randommessage(){
this.randomMessage=this.messageS.getRandomMessages();
}
}
