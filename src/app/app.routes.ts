import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard';
import { MateriaPrimaFrescaComponent } from './materia-prima-fresca/materia-prima-fresca';

export const routes: Routes = [
    {
        path: 'bpm',
        component: DashboardComponent
    },
    {
        path: 'materia-prima-fresca',
        component: MateriaPrimaFrescaComponent
    },
];