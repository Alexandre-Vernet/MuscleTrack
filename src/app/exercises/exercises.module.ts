import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ExercisesPage } from './exercises.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { ExercisesPageRoutingModule } from './exercises-routing.module';
import { ChestComponent } from "./chest/chest.component";
import { AbsComponent } from "./abs/abs.component";
import { BackComponent } from "./back/back.component";
import { BicepsComponent } from "./biceps/biceps.component";
import { QuadComponent } from "./quad/quad.component";
import { ShouldersComponent } from "./shoulders/shoulders.component";
import { TricepsComponent } from "./triceps/triceps.component";

@NgModule({
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        ExploreContainerComponentModule,
        ExercisesPageRoutingModule
    ],
    declarations: [
        ExercisesPage,
        ChestComponent,
        AbsComponent,
        BackComponent,
        BicepsComponent,
        QuadComponent,
        ShouldersComponent,
        TricepsComponent
    ]
})
export class ExercisesPageModule {
}
