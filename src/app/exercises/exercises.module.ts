import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExercisesPage } from './exercises.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ExercisesPageRoutingModule } from './exercises-routing.module';
import { ExerciseCardComponent } from "./exercise-card/exercise-card.component";
import { ViewExerciseComponent } from "./view-exercise/view-exercise.component";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        ExercisesPageRoutingModule,
    ],
    declarations: [
        ExercisesPage,
        ExerciseCardComponent,
        ViewExerciseComponent
    ]
})
export class ExercisesPageModule {
}
