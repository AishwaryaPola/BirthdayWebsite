import { Routes } from '@angular/router';
import { GreetingComponent } from './pages/greeting/greeting';
import { GalleryComponent } from './pages/gallery/gallery';
import { ThankyouComponent } from './pages/thankyou/thankyou';

export const routes: Routes = [
    {path:'',        component:GreetingComponent},
    { path: 'gallery', component: GalleryComponent },
    { path: 'thankyou', component: ThankyouComponent }
];
