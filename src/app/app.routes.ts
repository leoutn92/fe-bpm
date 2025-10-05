import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { MateriaPrimaFrescaComponent } from './materia-prima-fresca/materia-prima-fresca';

export const routes: Routes = [
    { path: '', redirectTo: '/bpm', pathMatch: 'full' }, // Add this line!
    {
        path: 'bpm',
        component: DashboardComponent
    },
    {
        path: 'materia-prima-fresca',
        component: MateriaPrimaFrescaComponent
    },
    { path: '**', redirectTo: '/bpm' } // Catch-all route
];