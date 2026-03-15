import { Routes } from '@angular/router';
import { GreetingComponent } from './pages/greeting/greeting';
import { GalleryComponent } from './pages/gallery/gallery';
import { ThankyouComponent } from './pages/thankyou/thankyou';
import { Password } from './password/password';

export const routes: Routes = [
    {path:'',component:Password} ,
    {path:'greeting', component:GreetingComponent},
    { path: 'gallery', component: GalleryComponent },
    { path: 'thankyou', component: ThankyouComponent }
];
