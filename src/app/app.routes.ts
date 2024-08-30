import { Routes } from '@angular/router';
import { ListItemComponent } from './list-item/list-item.component';

export const routes: Routes = [
    { path: '', redirectTo: '/items', pathMatch: 'full' },
    { path: 'items', component: ListItemComponent }
];
