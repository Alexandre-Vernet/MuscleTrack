import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExercisesPage } from './exercises.page';
import { ExercisesPageRoutingModule } from './exercises-routing.module';
import { ExerciseCardComponent } from "./exercise-card/exercise-card.component";
import { ViewExerciseComponent } from "./view-exercise/view-exercise.component";
import { AdminModule } from "../admin/admin.module";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExercisesPageRoutingModule,
        AdminModule,
    ],
    declarations: [
        ExercisesPage,
        ExerciseCardComponent,
        ViewExerciseComponent
    ]
})
export class ExercisesPageModule {
}
