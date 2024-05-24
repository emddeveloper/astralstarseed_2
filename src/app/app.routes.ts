import { Routes } from '@angular/router';
import { HomeComponent } from './modules/shared/components/home/home.component';
import { TarotComponent } from './modules/shared/components/tarot/tarot.component';

export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'tarot', component: TarotComponent },
];
