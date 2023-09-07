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
        muscle: new FormControl(null, [Validators.required, this.noWhitespaceValidator]),
        name: new FormControl(null, [Validators.required, this.noWhitespaceValidator]),
        weight: new FormControl(null,[Validators.max(500), this.noNegativeWeightValidator]),
        sets: new FormControl('4 séries 10 reps', [Validators.required, this.noWhitespaceValidator]),
        image: new FormControl(null, [Validators.maxLength(200), this.noWhitespaceValidator]),
        description: new FormControl(null, [Validators.maxLength(1000), this.noWhitespaceValidator]),
    });

    constructor(
        private readonly adminService: AdminService,
        private readonly exercisesService: ExercisesService,
    ) {
    }

    async ngOnInit() {
        this.muscles = await this.exercisesService.getAllMusclesName();
        this.formAddExercise.patchValue(this.inputUpdateExercise);
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

        this.resetForm();

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

        this.resetForm();

        // Close the modal
        this.openModalUpdateExercise.next(false);
    }

    resetForm() {
        this.formAddExercise.patchValue({
            muscle: null,
            name: null,
            weight: null,
            sets: '4 séries 10 reps',
            image: null,
            description: null,
        });
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
