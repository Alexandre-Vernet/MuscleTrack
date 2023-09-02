import { Component, OnInit } from '@angular/core';
import { ExercisesService } from "../../exercises/exercises.service";
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AddExercise } from "../../exercises/exercise";
import { AdminService } from "../admin.service";

@Component({
    selector: 'app-add-exercise',
    templateUrl: './add-exercise.component.html',
    styleUrls: ['./add-exercise.component.scss'],
})
export class AddExerciseComponent implements OnInit {
    muscles: string[] = [];
    formAddExercise = new FormGroup({
        muscle: new FormControl('', [Validators.required]),
        name: new FormControl('', [Validators.required]),
        reps: new FormControl('', [Validators.required]),
        image: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.required]),
    });

    constructor(
        private readonly exercisesService: ExercisesService,
        private readonly adminService: AdminService,
    ) {
    }

    ngOnInit() {
        this.exercisesService.getAllMusclesName()
            .then((muscles) => {
                this.muscles = muscles;
            });
    }

    async addExercise() {
        const { muscle, name, reps, image, description } = this.formAddExercise.value;
        const exercise: AddExercise = {
            muscle,
            name,
            reps,
            image,
            description,
        };

        await this.adminService.addExercise(exercise);

        // Reset the form
        this.formAddExercise.reset();
    }
}
