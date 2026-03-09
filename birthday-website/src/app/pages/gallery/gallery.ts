import { Component } from '@angular/core';


@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [],
  templateUrl: './gallery.html',
  styleUrls: ['./gallery.css']
})
export class GalleryComponent {

  memories = [
    {
      image: 'https://images.unsplash.com/photo-1627639679638-8485316a4b21?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpZHxlbnwwfHwwfHx8MA%3D%3D',
      description: 'The cutest little version of you 🧸',
      date: 'Childhood'
    },
    {
      image: 'https://images.unsplash.com/photo-1627639679638-8485316a4b21?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpZHxlbnwwfHwwfHx8MA%3D%3D',
      description: 'Your smile makes everything brighter ✨',
      date: 'A beautiful day'
    },
    {
      image: 'https://images.unsplash.com/photo-1627639679638-8485316a4b21?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpZHxlbnwwfHwwfHx8MA%3D%3D',
      description: 'One of my favourite moments with you ❤️',
      date: 'Together'
    },
    {
      image: 'https://images.unsplash.com/photo-1627639679638-8485316a4b21?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpZHxlbnwwfHwwfHx8MA%3D%3D',
      description: 'A picture that always makes me smile',
      date: 'Lovely moment'
    },
    {
      image: 'https://images.unsplash.com/photo-1627639679638-8485316a4b21?fm=jpg&q=60&w=3000&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y3V0ZSUyMGtpZHxlbnwwfHwwfHx8MA%3D%3D',
      description: 'Even then you were adorable',
      date: 'Childhood'
    }
  ];
selectedImage:string | null = null;

openImage(img:string){
  this.selectedImage = img;
}

closeImage(){
  this.selectedImage = null;
}
}