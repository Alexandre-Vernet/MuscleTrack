import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ExercisesService } from '../exercises.service';
import { Exercise } from '../exercise';

@Component({
    selector: 'app-view-exercise',
    templateUrl: './view-exercise.component.html',
    styleUrls: ['./view-exercise.component.scss'],
})
export class ViewExerciseComponent implements OnInit {
    exercise: Exercise;

    constructor(
        private readonly activatedRoute: ActivatedRoute,
        private readonly exercisesService: ExercisesService
    ) {
    }

    ngOnInit() {
        const muscleName = this.activatedRoute.snapshot.paramMap.get('muscleName');
        const exerciseId = this.activatedRoute.snapshot.paramMap.get('exerciseId');
        if (exerciseId && muscleName) {
            this.exercisesService.getExerciseInfo(muscleName, exerciseId)
                .then((exercise) => {
                    this.exercise = exercise;
                });
        }
    }
}
