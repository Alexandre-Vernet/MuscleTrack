import { Component, Input, OnInit } from '@angular/core';
import { Exercise } from "../exercise";
import { ExercisesService } from "../exercises.service";

@Component({
    selector: 'app-exercise-card',
    templateUrl: './exercise-card.component.html',
    styleUrls: ['./exercise-card.component.scss'],
})
export class ExerciseCardComponent implements OnInit {

    @Input() muscle: string = '';
    exercises: Exercise[] = [];

    constructor(
        private readonly exercisesService: ExercisesService
    ) {
    }

    async ngOnInit() {
        this.exercisesService.getExercises(this.muscle)
            .then((exercises) => {
                this.exercises = exercises;
            });
    }
}
