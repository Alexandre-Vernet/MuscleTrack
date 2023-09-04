import { Component, Input, OnInit, Output } from '@angular/core';
import { Exercise } from "../exercise";
import { ExercisesService } from "../exercises.service";
import { Subject } from "rxjs";

@Component({
    selector: 'app-exercise-card',
    templateUrl: './exercise-card.component.html',
    styleUrls: ['./exercise-card.component.scss'],
})
export class ExerciseCardComponent implements OnInit {
    @Input() muscle: string = '';
    @Output() openModalEditExercise = new Subject<Exercise>();
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

    openModalUpdateExercise(exercise: Exercise) {
        this.openModalEditExercise.next(exercise);
    }
}
