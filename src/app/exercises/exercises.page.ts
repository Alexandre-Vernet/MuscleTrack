import { Component, OnInit } from '@angular/core';
import { ExercisesService } from "./exercises.service";

@Component({
    selector: 'app-exercises',
    templateUrl: 'exercises.page.html',
    styleUrls: ['exercises.page.scss']
})
export class ExercisesPage implements OnInit {
    muscles: string[] = [];

    constructor(
        private readonly exercisesService: ExercisesService
    ) {

    }

    ngOnInit() {
        this.exercisesService.getAllMusclesName()
            .then((muscles) => {
                this.muscles = muscles;
            });
    }

}
