import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExercisesPage } from './exercises.page';
import { ViewExerciseComponent } from './view-exercise/view-exercise.component';

const routes: Routes = [
    {
        path: '',
        component: ExercisesPage,
    },
    {
        path: 'exercise/:muscleName/:exerciseName',
        component: ViewExerciseComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ExercisesPageRoutingModule {
}
