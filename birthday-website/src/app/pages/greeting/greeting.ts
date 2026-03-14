import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NgIf } from '@angular/common';
import confetti from 'canvas-confetti';

@Component({
  selector: 'app-greeting',
  standalone: true,
  imports: [RouterLink, NgIf],
  templateUrl: './greeting.html',
  styleUrls: ['./greeting.css']
})
export class GreetingComponent implements OnInit {

  isOpen = false;

  ngOnInit() {
    this.startConfettiLoop();
  }

  openLetter() {
    this.isOpen = true;
    this.launchConfetti();
  }

  launchConfetti() {

    confetti({
      particleCount: 200,
      spread: 120,
      origin: { y: 0.6 }
    });

  }

  startConfettiLoop() {

    setInterval(() => {
      this.launchConfetti();
    }, 5000);

  }

}