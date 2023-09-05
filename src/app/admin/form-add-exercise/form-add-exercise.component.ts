import { Component, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from "@angular/forms";
import { AddExercise, Exercise } from "../../exercises/exercise";
import { AdminService } from "../admin.service";
import { ExercisesService } from "../../exercises/exercises.service";
import { Subject } from "rxjs";

@Component({
    selector: 'app-form-add-exercise',
    templateUrl: './form-add-exercise.component.html',
    styleUrls: ['./form-add-exercise.component.scss'],
})
export class FormAddExerciseComponent implements OnInit {
    @Input() inputUpdateExercise: Exercise;
    @Output() openModalUpdateExercise = new Subject<boolean>();
    muscles: string[] = [];
    formAddExercise = new FormGroup({
        muscle: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
        name: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
        weight: new FormControl(0, [Validators.max(500), this.noNegativeWeightValidator]),
        sets: new FormControl('', [Validators.required, this.noWhitespaceValidator]),
        image: new FormControl('', [Validators.required, Validators.maxLength(200), this.noWhitespaceValidator]),
        description: new FormControl('', [Validators.maxLength(200), this.noWhitespaceValidator]),
    });

    constructor(
        private readonly adminService: AdminService,
        private readonly exercisesService: ExercisesService,
    ) {
    }

    async ngOnInit() {
        this.muscles = await this.exercisesService.getAllMusclesName();
        this.formAddExercise.patchValue(this.inputUpdateExercise
        );
    }

    async addExercise() {
        const { muscle, name, weight, sets, image, description } = this.formAddExercise.value;
        const exercise: AddExercise = {
            muscle,
            name,
            weight,
            sets,
            image,
            description,
        };

        await this.adminService.addExercise(exercise);

        // Reset the form
        this.formAddExercise.reset();

        // Close the modal
        this.openModalUpdateExercise.next(false);
    }

    async updateExercise() {
        const { muscle, name, weight, sets, image, description } = this.formAddExercise.value;
        const exercise: Exercise = {
            id: this.inputUpdateExercise.id,
            muscle,
            name,
            weight,
            sets,
            image,
            description,
        };

        await this.adminService.updateExercise(exercise);

        // Reset the form
        this.formAddExercise.reset();

        // Close the modal
        this.openModalUpdateExercise.next(false);
    }


    public noWhitespaceValidator(control: FormControl) {
        if (!control.value) {
            return null;
        }
        return (control.value || '').trim().length ? null : { 'whitespace': true };
    }

    public noNegativeWeightValidator(control: FormControl) {
        if (!control.value) {
            return null;
        }
        return (control.value || '') > 0 ? null : { 'negative': true };
    }
}
