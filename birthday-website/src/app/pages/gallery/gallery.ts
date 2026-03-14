// import { Component } from '@angular/core';


// @Component({
//   selector: 'app-gallery',
//   standalone: true,
//   imports: [],
//   templateUrl: './gallery.html',
//   styleUrls: ['./gallery.css']
// })
// export class GalleryComponent {

//   memories = [
//     {
//       image: 'assets/images/pic1.jpeg',
//       description: 'The cutest little version of you 🧸',
//       date: 'Childhood'
//     },
//     {
//       image: 'assets/images/pic2.jpeg',
//       description: 'The very 1st outing of us✨',
//       date: "September 24, 2022"
//     },
//     {
//       image: 'assets/images/pic3.jpeg',
//       description: 'Hemro level look',
//       date: 'one of the finest day in 2022'
//     },
//     {
//       image: 'assets/images/pic4.jpeg',
//       description: 'A picture that always makes me smile',
//       date: 'January 25, 2023'
//     },
//     {
//       image: 'assets/images/pic5.jpeg',
//       description: 'Even then you were adorable',
//       date: 'Childhood'
//     },
  
//     {
//       image: 'assets/images/pic6.jpeg',
//       description: 'Your smile makes everything brighter ✨',
//       date: 'A beautiful day'
//     },
//     {
//       image: 'assets/images/pic7.png',
//       description: 'One of my favourite moments with you ❤️',
//       date: 'Together'
//     },
//     {
//       image: 'assets/images/pic8.png',
//       description: 'A picture that always makes me smile',
//       date: 'Lovely moment'
//     },
//     {
//       image: 'assets/images/pic9.png',
//       description: 'Even then you were adorable',
//       date: 'Childhood'
//     },
//     {
//       image: 'assets/images/pic10.png',
//       description: 'One of my favourite moments with you ❤️',
//       date: 'Together'
//     },
//     {
//       image: 'assets/images/pic11.png',
//       description: 'A picture that always makes me smile',
//       date: 'Lovely moment'
//     },
//     {
//       image: 'assets/images/pic12.png',
//       description: 'Even then you were adorable',
//       date: 'Childhood'
//     },
//      {
//       image: 'assets/images/pic13.png',
//       description: 'The cutest little version of you 🧸',
//       date: 'Childhood'
//     },
//     {
//       image: 'assets/images/pic14.png',
//       description: 'Your smile makes everything brighter ✨',
//       date: 'A beautiful day'
//     },
//     {
//       image: 'assets/images/pic15.png',
//       description: 'One of my favourite moments with you ❤️',
//       date: 'Together'
//     },
//     {
//       image: 'assets/images/pic16.png',
//       description: 'A picture that always makes me smile',
//       date: 'Lovely moment'
//     },
//     {
//       image: 'assets/images/pic17.png',
//       description: 'Even then you were adorable',
//       date: 'Childhood'
//     },
//      {
//       image: 'assets/images/pic18.png',
//       description: 'Even then you were adorable',
//       date: 'Childhood'
//     },
//      {
//       image: 'assets/images/pic19.png',
//       description: 'Even then you were adorable',
//       date: 'Childhood'
//     },
//  {
//       image: 'assets/images/pic20.jpeg',
//       description: 'Even then you were adorable',
//       date: 'Childhood'
//     },
    
//   ];
// selectedImage:string | null = null;

// openImage(img:string){
//   this.selectedImage = img;
// }

// closeImage(){
//   this.selectedImage = null;
// }


// }

import { Component, AfterViewInit } from '@angular/core';
import confetti from 'canvas-confetti';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class GalleryComponent implements AfterViewInit {

  memories = [
    { image: 'assets/images/pic1.jpeg', description: 'The cutest little version of you 🧸', date: 'Childhood' },
    { image: 'assets/images/pic2.jpeg', description: 'The very 1st outing of us✨', date: "September 24, 2022" },
    { image: 'assets/images/pic3.jpeg', description: 'Hemro level look', date: 'one of the finest day in 2022' },
    { image: 'assets/images/pic4.jpeg', description: 'A picture that always makes me smile', date: 'January 25, 2023' },
    { image: 'assets/images/pic5.jpeg', description: 'Even then you were adorable', date: 'Childhood' },
    { image: 'assets/images/pic6.jpeg', description: 'Your smile makes everything brighter ✨', date: 'A beautiful day' },
    { image: 'assets/images/pic7.png', description: 'One of my favourite moments with you ❤️', date: 'Together' },
    { image: 'assets/images/pic8.png', description: 'A picture that always makes me smile', date: 'Lovely moment' },
    { image: 'assets/images/pic9.png', description: 'Even then you were adorable', date: 'Childhood' },
    { image: 'assets/images/pic10.png', description: 'One of my favourite moments with you ❤️', date: 'Together' },
    { image: 'assets/images/pic11.png', description: 'A picture that always makes me smile', date: 'Lovely moment' },
    { image: 'assets/images/pic12.png', description: 'Even then you were adorable', date: 'Childhood' },
    { image: 'assets/images/pic13.png', description: 'The cutest little version of you 🧸', date: 'Childhood' },
    { image: 'assets/images/pic14.png', description: 'Your smile makes everything brighter ✨', date: 'A beautiful day' },
    { image: 'assets/images/pic15.png', description: 'One of my favourite moments with you ❤️', date: 'Together' },
    { image: 'assets/images/pic16.png', description: 'A picture that always makes me smile', date: 'Lovely moment' },
    { image: 'assets/images/pic17.png', description: 'Even then you were adorable', date: 'Childhood' },
    { image: 'assets/images/pic18.png', description: 'Even then you were adorable', date: 'Childhood' },
    { image: 'assets/images/pic19.png', description: 'Even then you were adorable', date: 'Childhood' },
    { image: 'assets/images/pic20.jpeg', description: 'Even then you were adorable', date: 'Childhood' }
  ];

  selectedImage: string | null = null;
  router: any;

  openImage(img: string) {
    this.selectedImage = img;
  }

  closeImage() {
    this.selectedImage = null;
  }


  startMusic(){

    const audio = document.getElementById('birthdayMusic') as HTMLAudioElement;

    if(audio){
      audio.volume = 0.5;
      audio.play().catch(() => {
        console.log("Autoplay blocked by browser");
      });
    }

  }

  ngAfterViewInit() {
  
    this.startConfetti();
  }

  



  startConfetti(){

    setInterval(() => {

      confetti({
        particleCount:50,
        spread:90,
        startVelocity:45,
        origin:{ x:Math.random(), y:Math.random()*0.5 }
      });

    },700);

  }


}