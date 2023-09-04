import { Component, Input, OnInit } from '@angular/core';
import { ExercisesService } from "./exercises.service";
import { Exercise } from "./exercise";

@Component({
    selector: 'app-exercises',
    templateUrl: 'exercises.page.html',
    styleUrls: ['exercises.page.scss']
})
export class ExercisesPage implements OnInit {
    @Input() updateExercise: Exercise;
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

    setUpdateExercise($event: Exercise) {
        this.updateExercise = $event;
    }
}
