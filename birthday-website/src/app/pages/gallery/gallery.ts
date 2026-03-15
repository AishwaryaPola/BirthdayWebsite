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
    { image: 'assets/images/pic1.jpeg', description: 'The cootuu and sweetestuuu little version of youuu🧸', date: 'Entha Muddugaaa unavoooo' },
    { image: 'assets/images/pic2.jpeg', description: 'The very 1st outing of us✨', date: "September 24, 2022 roju vellinam" },
    { image: 'assets/images/pic3.jpeg', description: 'Hemro level look', date: 'one of the finest day in 2022, mask petinav kadha mast unav😂😜' },
    { image: 'assets/images/pic26.png', description: 'Pilla bacha gaadi lagaa unav🤣', date: 'Dasara movie vellina roju idhii' },
    { image: 'assets/images/pic5.jpeg', description: 'Crazyy outfit aadhi,correct ga unav chudataniki decent ga, neat ga waaww. ', date: 'Hindi lo aadhipurush...istam lekunda chusna nenu' },
    { image: 'assets/images/pic6.jpeg', description: 'aroju enduku cap petukunav?🤔juttu bane undhi kada🤣', date: 'ammapally + animal deadly combination😂' },
    { image: 'assets/images/pic7.png', description: 'Nice bagundi,donga navvu navvutunav', date: 'gaint wheel ekkadaiki line lo stood youu, one of the beautiful day in my life.' },
    { image: 'assets/images/pic27.jpeg', description: 'Ila avvu ra malli💪💣🔥', date: 'Niku gudi ante istam lekunda ne gudiki tirgina rojulu avvi😁..malli teskellochu gaa' },
    { image: 'assets/images/pic9.png', description: 'chudandi mellaga uncle laga avutuna bhavani ni chudandi🤣', date: 'wowww bhaai dj tillu style for farwell aahh!!' },
    { image: 'assets/images/pic11.png', description: "poorthi gaa uncle laaga marina Bhavani Prasad", date: 'Hockey nachindha masteruu?' },
    { image: 'assets/images/pic10.png', description: 'Thanks for the beautiful photos.. ante na single photos gurinchi antuna😁', date: 'Nu chatting start chesna rendu nelalaki graduation day happend kadha' },
    { image: 'assets/images/pic12.png', description: 'Depressed ga unna pilla nibba ', date: 'so called adoloscence age😮' },
    { image: 'assets/images/pic13.png', description: 'Ammoooo villain lookuuu😨', date: 'Gundu chepinchkuntav ani teesi petukunav ee pic😢' },
    { image: 'assets/images/pic14.png', description: 'Ahh! No words. My favorite picture of yours', date: 'May ur hair now become like this. Tadastuuu!' },
    { image: 'assets/images/pic15.png', description: 'Model model super model', date: 'Ai kaastha real avuthe..ababaaba sir ki vere level following undedi emo.' },
    { image: 'assets/images/pic16.png', description: ' ah hair chudu, ah styleuu chudu. uff!', date: 'entraa antha manchiga unav' },
    { image: 'assets/images/pic17.png', description: 'Mundudhi ai model aithe ipudu real model', date: 'Ento ee anime gola🤷‍♀️' },
    { image: 'assets/images/pic18.png', description: 'temples tippinchina kada mottam aroju,anandanam line okati, papam youu😂', date: 'Paneer bagunde aroju' },
    
    { image: 'assets/images/pic20.jpeg', description: 'Aah black dhi meda lo vesko ra ipudu kuda. It looks good on you', date: ' himaytnagar lo DBC tinnam, taravata ni frnd ki pick cheskovali ani fast ga went youu😪' },
   { image: 'assets/images/pic21.jpg', description: 'Beautiful day it is..!', date: 'Abaaa...entha bagundo sunrise' },
    { image: 'assets/images/pic22.jpg', description: 'Body builder anukuntunava😂', date: "snanam cheyadam nerchuko trips ki velthey" },
    { image: 'assets/images/pic23.jpg', description: 'Entha cootuu undoo pic', date: 'inka patience tho ehpatiki ilane barinchu nannnu😚🙂‍↕️😇' },
    { image: 'assets/images/pic24.jpg', description: 'Blue suits youu too andi. ', date: 'yaradaa beachuu..sunsetuuu...nuvuu..picture perfect ga undi' },
    { image: 'assets/images/pic25.jpg', description: 'Entha memorable day oo.. endukante', date: 'kasta padi travel chesna roju adhi😂' },
    { image: 'assets/images/pic19.png', description: 'Idey mana last outing roju..na birthday roju', date: 'ilane epatiki teeskelthu unduu ra May our friendship stay forever!' },
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