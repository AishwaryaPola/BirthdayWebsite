import { Component,HostListener  } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-password',
  imports: [],
  templateUrl: './password.html',
  styleUrl: './password.css',
})
export class Password {
   enteredCode: string = '';
  correctCode: string = '2103';

  constructor(private router: Router) {}

  pressNumber(num: string) {
    if (this.enteredCode.length < 4) {
      this.enteredCode += num;
    }
  }

  backspace() {
    this.enteredCode = this.enteredCode.slice(0, -1);
  }

  checkCode() {

    if (this.enteredCode === this.correctCode) {

      this.router.navigate(['/greeting']);

    } else {

      alert("❌ Wrong Password! Try again.");
      this.enteredCode = '';

    }

  }

  /* FULL KEYBOARD SUPPORT */

  @HostListener('document:keydown', ['$event'])
  handleKeyboard(event: KeyboardEvent) {

    const key = event.key;

    /* numbers 0-9 */

    if (/^[0-9]$/.test(key)) {
      this.pressNumber(key);
      event.preventDefault();
    }

    /* star */

    if (key === '*') {
      this.pressNumber('*');
      event.preventDefault();
    }

    /* backspace */

    if (key === 'Backspace') {
      this.backspace();
      event.preventDefault();
    }

    /* enter */

    if (key === 'Enter') {
      this.checkCode();
      event.preventDefault();
    }

  }



}
