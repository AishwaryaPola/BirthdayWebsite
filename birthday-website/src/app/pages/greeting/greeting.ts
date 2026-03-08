import { Component  } from '@angular/core';
import { RouterLink } from '@angular/router';
import confetti from 'canvas-confetti';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [RouterLink,NgIf],
  templateUrl: './greeting.html',
  styleUrls: ['./greeting.css'],
})
export class GreetingComponent  {

    isOpen = false;

  openLetter(){

    this.isOpen = true;

    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 }
    });

  }

}

