import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessageService {
  private messages: string[] = [
    'Hello, adventurer!',
    'You found a hidden treasure!',
    'Watch out for the dragon!',
    'A new quest awaits you.',
    'Victory is yours!',
    'Try again!',
  ];
  private spinWheelOutcomes: string[]=[
    'You won a Television',
    'You won a Fridge',
    'Try Again',
    'Bonus'
  ]
  constructor() {}
  getRandomMessages(): string
{
  const random = Math.floor(Math.random()* this.messages.length)
  return this.messages[random]
}

spinningWheel(): string {
  const random = Math.floor(Math.random()* this.spinWheelOutcomes.length)
  return this.spinWheelOutcomes[random]
}
}
