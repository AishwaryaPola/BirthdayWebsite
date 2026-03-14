import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-thankyou',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './thankyou.html',
  styleUrls: ['./thankyou.css']
})
export class ThankyouComponent implements OnInit {

  showMessage = false;

  ngOnInit(): void {

    setTimeout(() => {
      this.showMessage = true;
    }, 5000);

  }

}