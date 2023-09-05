import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminPage } from './admin.page';
import { IonicModule } from '@ionic/angular';
import { AdminRoutingModule } from './admin-routing.module';
import { AddExerciseComponent } from './add-exercise/add-exercise.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AdminPage,
        AddExerciseComponent,
    ],
    exports: [
        AddExerciseComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        AdminRoutingModule,
        ReactiveFormsModule,
    ]
})
export class AdminModule {
}
