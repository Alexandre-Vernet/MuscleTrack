import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { ExercisesService } from "../exercises.service";
import { Exercise } from "../exercise";

@Component({
    selector: 'app-view-exercise',
    templateUrl: './view-exercise.component.html',
    styleUrls: ['./view-exercise.component.scss'],
})
export class ViewExerciseComponent implements OnInit {
    exerciseName: string = '';
    exercise: Exercise;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly exercisesService: ExercisesService
    ) {
    }

    ngOnInit() {
        const muscleName = this.activatedRoute.snapshot.paramMap.get('muscleName');
        const exerciseName = this.activatedRoute.snapshot.paramMap.get('exerciseName');
        if (exerciseName && muscleName) {
            this.exerciseName = exerciseName;

            this.exercisesService.getExerciseInfo(muscleName, exerciseName)
                .then((exercise) => {
                    this.exercise = exercise;
                });
        }
    }
}
