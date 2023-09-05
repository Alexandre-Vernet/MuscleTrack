import { Component, Input, OnInit, Output } from '@angular/core';
import { Exercise } from '../exercise';
import { ExercisesService } from '../exercises.service';
import { Subject } from 'rxjs';
import { AdminService } from '../../admin/admin.service';

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
        private readonly exercisesService: ExercisesService,
        private readonly adminService: AdminService,
    ) {
    }

    async ngOnInit() {
        this.exercisesService.getExercises(this.muscle)
            .then((exercises) => {
                this.exercises = exercises;
            });
    }

    async decreaseWeight(exercise: Exercise) {
        this.exercises.find((e) => e.name === exercise.name).weight = await this.exercisesService.decreaseWeight(exercise);
    }

    async increaseWeight(exercise: Exercise) {
        this.exercises.find((e) => e.name === exercise.name).weight = await this.exercisesService.increaseWeight(exercise);
    }

    openModalUpdateExercise(exercise: Exercise) {
        this.openModalEditExercise.next(exercise);
    }

    async deleteExercise(exercise: Exercise) {
        await this.adminService.deleteExercise(exercise);
    }
}
