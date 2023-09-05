import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
    {
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                path: 'exercises',
                loadChildren: () => import('../exercises/exercises.module').then(m => m.ExercisesPageModule)
            },
            {
                path: 'admin',
                loadChildren: () => import('../admin/admin.module').then(m => m.AdminModule)
            },
            {
                path: '',
                redirectTo: '/tabs/exercise-card',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/exercises',
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {
}
